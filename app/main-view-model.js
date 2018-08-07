const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable").Observable;
const applicationSettings = require("application-settings");

const KEY_FAVORITE_COINS = "Favorite_Coins";

/**
 * Used in development mode, to develop main functionalities before going and fetching data
 */
const cryptoCurrencies = new ObservableArray([
  {
    coinName: "Bitcoin",
    coinSign: "BTC",
    itemImage: "",
    isFavorite: true
  },
  {
    coinName: "Ethereum",
    coinSign: "ETH",
    itemImage: "",
    isFavorite: false
  },
  {
    coinName: "Ripple",
    coinSign: "XRP",
    itemImage: "",
    isFavorite: false
  },
  {
    coinName: "Litecoin",
    coinSign: "LTC",
    itemImage: "",
    isFavorite: false
  }
]);

/**
 * Used in development mode to generate the keys in applications settings
 */
const setApplicationSettings = () => {
  applicationSettings.setString("BTC", "BTC");
};

/**
 *
 * @param {*} array
 * @todo refactor variables names, eventually a second function
 */
const populateFavoriteList = array => {
  const arrayFav = new ObservableArray([]);
  const arrayWithModifiedFavoriteProperty = array.slice();

  array.forEach((coin, index) => {
    if (applicationSettings.hasKey(coin.coinSign)) {
      arrayFav.push(coin);
      const coinToModify = arrayWithModifiedFavoriteProperty.getItem(index);
      coinToModify.isFavorite = true;
      arrayWithModifiedFavoriteProperty.setItem(coinToModify);
    }
  });

  return [arrayFav, arrayWithModifiedFavoriteProperty];
};

/**
 *
 * @param {ObservableArray} coinsArray
 * @param {string} coinSign
 */
const findIndexOfElement = (coinsArray, coinSign) => {
  let indexOfElementToUpdate = -1;

  coinsArray.forEach((element, index) => {
    if (element.coinSign === coinSign) {
      indexOfElementToUpdate = index;
      return;
    }
  });

  return indexOfElementToUpdate;
};

const getFavoriteCoins = array => {};

const createViewModel = () => {
  setApplicationSettings();

  var viewModel = new Observable();

  //viewModel.set("coinsList", cryptoCurrencies);
  viewModel.coinsList = cryptoCurrencies;
  const filteredFavorites = viewModel.coinsList.filter(
    element => element.isFavorite
  );
  viewModel.favoriteCoinsList = new ObservableArray(filteredFavorites);

  viewModel.onTapStar = function(args) {
    const coinSign = args.object.coin;

    let indOfElementToUpdateInList = findIndexOfElement(
      this.coinsList,
      coinSign
    );

    const modifiedItem = this.coinsList.getItem(indOfElementToUpdateInList);
    if (modifiedItem.isFavorite) {
      let indOfElementToUpdateInFavList = findIndexOfElement(
        this.favoriteCoinsList,
        coinSign
      );
      modifiedItem.isFavorite = false;
      this.coinsList.setItem(indOfElementToUpdateInList, modifiedItem);
      this.favoriteCoinsList.splice(indOfElementToUpdateInFavList, 1);
      applicationSettings.remove(coinSign);
      console.log(applicationSettings.getString(coinSign));
    } else {
      modifiedItem.isFavorite = true;
      this.coinsList.setItem(indOfElementToUpdateInList, modifiedItem);
      this.favoriteCoinsList.push(modifiedItem);

      //Persist Application Settings
      applicationSettings.setString(coinSign, coinSign);
      console.log(applicationSettings.getString(coinSign));
    }
  };

  return viewModel;
};

exports.createViewModel = createViewModel;
