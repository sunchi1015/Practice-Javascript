import { uniq, uniqBy } from "lodash";
const data = {
  Results: [
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store0"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store0"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store2"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store4"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store2"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store0"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store4"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store4"
    },
    {
      Messages: null,
      Latitude: 33.7406,
      Longitude: -84.5545,
      LocationName: "DC1_RG0_DIS0_Store2"
    }
  ],
  Facets: [],
  Page: 0,
  Size: 25,
  TotalCount: 9
};

// let uniques = data.Results.filter((a, b) => data.Results.indexOf(a.LocationName) === b);
console.log(uniqBy(data.Results, "LocationName"));
