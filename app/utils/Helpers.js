//Nativescript modules
const httpModule = require("http");

//NPM libraries
const format = require("format-number");

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

/**
 * Function that formats a value into a number with separated thousands
 * ex: 1000000000 --> 1 000 000 000
 * @param {number} value
 */
const formatNumber = value => {
  return format({ integerSeparator: " " })(value);
};

/**
 * Used in development mode to generate the keys in applications settings for tests
 */
const setApplicationSettings = () => {
  applicationSettings.setString("BTC", "BTC");
  applicationSettings.setString("XRP", "XRP");
  applicationSettings.setString("DOGE", "DOGE");
};

exports.formatNumber = formatNumber;
exports.floatPrecisionConverter = floatPrecisionConverter;
exports.getColor = getColor;
exports.findIndexOfElement = findIndexOfElement;
exports.setApplicationSettings = setApplicationSettings;
exports.getDataFromAPI = getDataFromAPI;
