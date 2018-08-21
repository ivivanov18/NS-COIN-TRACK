# NS COIN TRACK

An app to track the prices of the latest prices of cryptocurrencies.

## Description

## ISSUES NOT SOLVED

- CONSOLE ERROR file:///app/tns_modules/tns-core-modules/trace/trace.js:165:30: Binding: Property: 'onTapStar' is invalid or does not exist. SourceProperty: 'onTapStar': this creates some performance problems because this error is being constantly logged on the console.
- RadListView does not get updated:
  - in iOS: when SearchBar is used to filter the results and when I click on one of the filtered results --> the element one which I clicked does not update the image to show it has become a favorite, yet the favorite coins list gets corrected updated. When I clear the searchbar and go back to the full list of coins, yet the according item display the right image that shows the element is favorite.
  - Android: on the coins list, when I click on the star to make a coin favorite, the RadListView does not update to show the correct image (that the coin item has become a favorite). I need to scroll the list view downwards or upwards for the RadListView to update to the correct state (image filled)

## LESSONS LEARNT

- RadListView cannot be used with StackLayout in the following way:

```xml
    <StackLayout>
        <SearchBar></SearchBar>
        <RadListView></RadListView>
    </StackLayout>
```

The StackLayout has to be replaced with a GridLayout.

## TODO

- Add functionality for app to update prices automatically every 5 minutes.
-

## Asset credits

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
