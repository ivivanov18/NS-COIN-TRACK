const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable");

let items = new ObservableArray([]);
let pageData = new Observable();

// function getMessage(counter) {
//   if (counter <= 0) {
//     return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
//   } else {
//     return counter + " taps left";
//   }
// }

function createViewModel() {
  items.push(
    {
      coinName: "Bitcoin",
      coinSign: "BTC",
      itemImage: ""
    },
    {
      coinName: "Ethereum",
      coinSign: "ETH",
      itemImage: ""
    },
    {
      coinName: "XRP",
      coinSign: "Ripple",
      itemImage: ""
    },
    {
      coinName: "Litecoin",
      coinSign: "LTC",
      itemImage: ""
    }
  );

  //   var viewModel = new Observable();
  //   viewModel.counter = 42;
  //   viewModel.message = getMessage(viewModel.counter);

  //   viewModel.onTap = function() {
  //     this.counter--;
  //     this.set("message", getMessage(this.counter));
  //   };

  //   return viewModel;
  pageData.set("items", items);
  return items;
}

exports.createViewModel = createViewModel;
