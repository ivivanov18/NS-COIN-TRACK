const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable").Observable;

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
    coinName: "XRP",
    coinSign: "Ripple",
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

const findIndexOfElement = (array, coinSign) => {
  let indexOfElementToUpdate = -1;

  array.forEach((element, index) => {
    if (element.coinSign === coinSign) {
      indexOfElementToUpdate = index;
      return;
    }
  });

  return indexOfElementToUpdate;
};

const getFavoriteCoins = array => {};

const createViewModel = () => {
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
    } else {
      modifiedItem.isFavorite = true;
      this.coinsList.setItem(indOfElementToUpdateInList, modifiedItem);
      this.favoriteCoinsList.push(modifiedItem);
    }
  };

  return viewModel;
};

exports.createViewModel = createViewModel;
