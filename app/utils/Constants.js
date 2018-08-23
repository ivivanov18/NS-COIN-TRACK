/**
 * Description: This endpoint displays cryptocurrency ticker data in order of rank.
 * The maximum number of results per call is 100.
 * The results can be sorted by id, rank, volume_24h, and percent_change_24h (default is rank).
 * The API_URL alone is sufficient then max 100 sort by rank are returned
 * The apiURL can be obtained by chaining API_URL + SORT_OPTIONS + CONVERT_EUROS
 */
const API_URL = "https://api.coinmarketcap.com/v2/ticker/";
const SORT_OPTIONS = "&sort=volume_24";
const CONVERT_EUROS = "?convert=EUR";
const FINAL_URL = API_URL + CONVERT_EUROS;

exports.apiURL = FINAL_URL;
