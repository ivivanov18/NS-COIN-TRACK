/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/

//const createViewModel = require("./main-view-model").createViewModel;
const ObservableArray = require("data/observable-array").ObservableArray;
const Observable = require("data/observable");

const items = new ObservableArray([]);
const pageData = new Observable();

function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = pageData;

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
  pageData.set("items", items);
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
