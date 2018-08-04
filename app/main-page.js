const createViewModel = require("./main-view-model").createViewModel;

function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

// function addFavorite(args) {
//   const coinSign = args.object.coin;

//   isKeyInAppSettings = appSettings.hasKey(coinSign);
//   console.log("TAPPED! Before adding: ", coinSign, " ", isKeyInAppSettings);
//   appSettings.setString(coinSign, "true");
//   isKeyInAppSettings = appSettings.hasKey(coinSign);
//   setTimeout(function() {
//     console.log("After adding: ", isKeyInAppSettings);
//   }, 2000);
// }

// function removeFromFavorite(args) {
//   const coinSign = args.object.coin;
//   console.log("TAPPED!", coinSign);
// }

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.onNavigatingTo = onNavigatingTo;
