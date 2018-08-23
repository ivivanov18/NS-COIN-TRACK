//Nativescript modules
const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable").Observable;
const applicationSettings = require("application-settings");
const httpModule = require("http");
const appModule = require("application");

//Other libraries
const format = require("format-number");

//Project import
const apiURL = require("./utils/Constants").apiURL;

/**
 * Function that fetches the data from the provided URL's API.
 * Makes use of the getJSON method provided by Nativescript's http module
 * @param {String} apiURL
 * @return {Promise}
 */
const getDataFromAPI = apiURL => {
  return httpModule.getJSON(apiURL);
};

/**
 * Used in development mode to generate the keys in applications settings
 */
const setApplicationSettings = () => {
  applicationSettings.setString("BTC", "BTC");
  applicationSettings.setString("XRP", "XRP");
  applicationSettings.setString("DOGE", "DOGE");
};

/**
 * Custom findIndexOfElement function to retrieve the index of one element in the provided array
 * of objects
 * @param {ObservableArray} coinsArray
 * @param {string} symbol
 */
const findIndexOfElement = (coinsArray, symbol) => {
  let indexOfElementToUpdate = -1;

  coinsArray.forEach((element, index) => {
    if (element.symbol === symbol) {
      indexOfElementToUpdate = index;
      return;
    }
  });

  return indexOfElementToUpdate;
};

/**
 * Helper function used to round the displayed value of the price label with 4 numbers after the coma
 * @param {string} valueToRound
 * @param {number} roundingPrecision the number of integers after the coma
 * @return {number}
 */
const floatPrecisionConverter = (valueToRound, roundingPrecision) => {
  return parseFloat(valueToRound).toFixed(roundingPrecision);
};

/**
 * Helper function used to style the color depending on the value of the text attribute
 * If the text attribute contains `-` --> it 's a decrease then "red"
 * If the text attribute does not `-` --> it 's a increase then "blue"
 * @param {string} value
 * @return {string} "red" or "green" to set the value of the color property accordingly
 */
const getColor = value => {
  const valueRegExp = new RegExp("-");
  return valueRegExp.test(value) ? "red" : "green";
};

const formatNumber = value => {
  return format({ integerSeparator: " " })(value);
};
/**
 *
 * @return {ViewModel}
 */
const createViewModel = () => {
  let viewModel = new Observable();
  viewModel.set("isLoading", true);

  // Used when search option is used to save the full coins list
  let savedCoinsList = [];

  /**
   * Gets the data from API
   * From promise gets response data and:
   * adds lastUpdated property
   * add isFavorite property depending on whether coin is in application settings
   * pushes to favoriteCoinsList
   * pushes to coinsList and savedCoinsList
   */
  getDataFromAPI(apiURL).then(
    response => {
      const coinsDataFromAPI = Object.values(response.data);

      for (coin of coinsDataFromAPI) {
        coin.lastUpdated = Date.now();
        if (applicationSettings.hasKey(coin.symbol)) {
          coin.isFavorite = true;
          viewModel.favoriteCoinsList.push(coin);
        } else {
          coin.isFavorite = false;
        }
        viewModel.coinsList.push(coin);
        savedCoinsList.push(coin);
      }
      viewModel.set("isLoading", false);
    },
    error => {
      console.log(error);
    }
  );

  viewModel.coinsList = new ObservableArray();
  viewModel.favoriteCoinsList = new ObservableArray();

  /**
   * Function called when the user taps the star image.
   * It adds coin list to favorite list and adds key in applications settings.
   * If already favorite, then if tapped, takes out of favorite list and deletes according key from
   * application settings
   * @param {object} args
   */
  viewModel.onTapStar = function(args) {
    const symbol = args.object.coin;

    let indOfElementToUpdateInList = findIndexOfElement(this.coinsList, symbol);

    const modifiedItem = this.coinsList.getItem(indOfElementToUpdateInList);
    if (modifiedItem.isFavorite) {
      let indOfElementToUpdateInFavList = findIndexOfElement(
        this.favoriteCoinsList,
        symbol
      );
      modifiedItem.isFavorite = false;
      this.coinsList.setItem(indOfElementToUpdateInList, modifiedItem);
      this.favoriteCoinsList.splice(indOfElementToUpdateInFavList, 1);
      applicationSettings.remove(symbol);
    } else {
      modifiedItem.isFavorite = true;
      this.coinsList.setItem(indOfElementToUpdateInList, modifiedItem);
      this.favoriteCoinsList.push(modifiedItem);

      //Persist Application Settings
      applicationSettings.setString(symbol, symbol);
    }
  };

  /**
   * Function called when user searches for specific coin in search bar and hits enter
   * @param {object} args
   */
  viewModel.onSubmit = function(args) {
    const searchBar = args.object;
    const searchValue = searchBar.text.toLowerCase();
    let regExpMatchedElementsList = [];

    if (searchValue !== "") {
      const searchValueRegExp = new RegExp(searchValue);

      this.coinsList.forEach(item => {
        if (searchValueRegExp.test(item.name.toLowerCase())) {
          regExpMatchedElementsList.push(item);
        }
      });

      viewModel.set(
        "coinsList",
        new ObservableArray(regExpMatchedElementsList)
      );
    }
  };

  /**
   * Function called when user clears the search bar by clicking on the x
   * @param {object} args
   */
  viewModel.onClear = function(args) {
    const searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a cryptocurrency";

    viewModel.set("coinsList", new ObservableArray(savedCoinsList));
  };

  //Setting float precision rounder
  appModule.getResources().floatRounding = floatPrecisionConverter;
  appModule.getResources().getTextColor = getColor;
  appModule.getResources().formatThousands = formatNumber;

  return viewModel;
};

exports.createViewModel = createViewModel;
