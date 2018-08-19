const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable").Observable;
const applicationSettings = require("application-settings");
const httpModule = require("http");

//
const apiURL = require("./Utils/Constants").apiURL;

/**
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
 *
 * @return {ViewModel}
 */
const createViewModel = () => {
  let viewModel = new Observable();
  let coinsDataFromAPI = [];

  getDataFromAPI(apiURL).then(
    response => {
      coinsDataFromAPI = Object.values(response.data);

      for (coin of coinsDataFromAPI) {
        if (applicationSettings.hasKey(coin.symbol)) {
          coin.isFavorite = true;
          viewModel.favoriteCoinsList.push(coin);
        } else {
          coin.isFavorite = false;
        }
        viewModel.coinsList.push(coin);
      }
    },
    error => {
      console.log(error);
    }
  );

  viewModel.coinsList = new ObservableArray();
  viewModel.favoriteCoinsList = new ObservableArray();

  setApplicationSettings();

  /**
   * Function called when the user taps the star image. It adds coin list to favorite list and add
   * in applications settings. If already favorite, then if tapped, takes out of favorite and deletes
   * according key from
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

  viewModel.onSubmit = function(args) {
    const searchBar = args.object;
    const searchValue = searchBar.text.toLowerCase();
    if (searchValue !== "") {
      const searchValueRegExp = new RegExp(searchValue);

      this.coinsList.forEach(item => {
        if (searchValueRegExp.test(item.name)) {
          console.log(item);
        }
      });
    }

    // const myItems = new observableArrayModule.ObservableArray();
    // if (searchValue !== "") {
    //   for (let i = 0; i < arrayItems.length; i++) {
    //     if (arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
    //       myItems.push(arrayItems[i]);
    //     }
    //   }
    // }
    // const page = searchBar.page;
    // const vm = page.bindingContext;
    // vm.set("myItems", myItems);
  };

  viewModel.onClear = function(args) {
    const searchBar = args.object;
    searchBar.text = "";
    searchBar.hint = "Search for a cryptocurrency";

    // const myItems = new observableArrayModule.ObservableArray();
    // arrayItems.forEach(item => {
    //   myItems.push(item);
    // });

    // const page = searchBar.page;
    // const vm = page.bindingContext;
    // vm.set("myItems", myItems);
  };

  return viewModel;
};

exports.createViewModel = createViewModel;
