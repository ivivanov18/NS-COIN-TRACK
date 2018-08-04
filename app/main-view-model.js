const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable").Observable;

const cryptoCurrencies = [];

function createViewModel() {
  var viewModel = new Observable();
  //var cryptoCurrencies = new ObservableArray([]);

  cryptoCurrencies.push(
    {
      coinName: "Bitcoin",
      coinSign: "BTC",
      itemImage: "",
      isFavorite: false
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
  );

  viewModel.coinsList = cryptoCurrencies;

  viewModel.onTapStar = function(args) {
    const coinSign = args.object.coin;
    console.log("TAPPED: ", coinSign);
  };

  return viewModel;
}

exports.createViewModel = createViewModel;
