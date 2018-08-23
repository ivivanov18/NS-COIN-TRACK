//Nativescript modules
const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable").Observable;
const applicationSettings = require("application-settings");
const appModule = require("application");

//Project files
const apiURL = require("./utils/Constants").apiURL;
const {
  formatNumber,
  floatPrecisionConverter,
  getColor,
  findIndexOfElement,
  getDataFromAPI,
  formatDate
} = require("./utils/Helpers");

/**
 * Main function that creates the model
 * Gets the data, populates the 3 arrays that are used
 * Defines the different functions attached to events from the UI (onTap, onClear, onSubmit)
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

  //Setting resources to formatting functions
  appModule.getResources().floatRounding = floatPrecisionConverter;
  appModule.getResources().getTextColor = getColor;
  appModule.getResources().formatThousands = formatNumber;
  appModule.getResources().formatDate = formatDate;

  return viewModel;
};

exports.createViewModel = createViewModel;
