import { uniqBy } from "lodash";
const data = [
  {
    Messages: null,
    Latitude: 41.3268,
    Longitude: -74.122,
    LocationName: "CENTRAL VALLEY"
  },
  {
    Messages: null,
    Latitude: 33.3449,
    Longitude: -84.0982,
    LocationName: "LOCUST GROVE"
  },
  {
    Messages: null,
    Latitude: 43.4167,
    Longitude: -73.6975,
    LocationName: "LAKE GEORGE"
  },
  {
    Messages: null,
    Latitude: 39.4455,
    Longitude: -104.853,
    LocationName: "CASTLE ROCK"
  },
  {
    Messages: null,
    Latitude: 26.7165,
    Longitude: -80.0679,
    LocationName: "WEST PALM BEACH"
  },
  {
    Messages: null,
    Latitude: 40.7255,
    Longitude: -73.9983,
    LocationName: "NEW YORK"
  },
  {
    Messages: null,
    Latitude: 38.953,
    Longitude: -77.2295,
    LocationName: "MC LEAN"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "TINTON FALLS"
  },
  {
    Messages: null,
    Latitude: 40.7591,
    Longitude: -73.3257,
    LocationName: "DEER PARK"
  },
  {
    Messages: null,
    Latitude: 26.7165,
    Longitude: -80.0679,
    LocationName: "WEST PALM BEACH"
  },
  {
    Messages: null,
    Latitude: 40.7139,
    Longitude: -74.007,
    LocationName: "NEW YORK"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "ATLANTIC CITY"
  },
  {
    Messages: null,
    Latitude: 26.7165,
    Longitude: -80.0679,
    LocationName: "WEST PALM BEACH"
  },
  {
    Messages: null,
    Latitude: 38.953,
    Longitude: -77.2295,
    LocationName: "MC LEAN"
  },
  {
    Messages: null,
    Latitude: 40.7591,
    Longitude: -73.3257,
    LocationName: "DEER PARK"
  },
  {
    Messages: null,
    Latitude: 29.2353,
    Longitude: -81.0658,
    LocationName: "DAYTONA BEACH"
  },
  {
    Messages: null,
    Latitude: 39.4455,
    Longitude: -104.853,
    LocationName: "CASTLE ROCK"
  },
  {
    Messages: null,
    Latitude: 40.7255,
    Longitude: -73.9983,
    LocationName: "NEW YORK"
  },
  {
    Messages: null,
    Latitude: 29.9475,
    Longitude: -81.5264,
    LocationName: "SAINT AUGUSTINE"
  },
  {
    Messages: null,
    Latitude: 40.7139,
    Longitude: -74.007,
    LocationName: "NEW YORK"
  },
  {
    Messages: null,
    Latitude: 41.3268,
    Longitude: -74.122,
    LocationName: "CENTRAL VALLEY"
  },
  {
    Messages: null,
    Latitude: 29.9475,
    Longitude: -81.5264,
    LocationName: "SAINT AUGUSTINE"
  },
  {
    Messages: null,
    Latitude: 29.9475,
    Longitude: -81.5264,
    LocationName: "SAINT AUGUSTINE"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "NORTH CONWAY"
  },
  {
    Messages: null,
    Latitude: 26.5025,
    Longitude: -81.9276,
    LocationName: "FORT MYERS"
  },
  {
    Messages: null,
    Latitude: 33.3449,
    Longitude: -84.0982,
    LocationName: "LOCUST GROVE"
  },
  {
    Messages: null,
    Latitude: 33.3449,
    Longitude: -84.0982,
    LocationName: "LOCUST GROVE"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "NORTH CONWAY"
  },
  {
    Messages: null,
    Latitude: 26.5025,
    Longitude: -81.9276,
    LocationName: "FORT MYERS"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "TINTON FALLS"
  },
  {
    Messages: null,
    Latitude: 33.7587,
    Longitude: -78.8044,
    LocationName: "MYRTLE BEACH"
  },
  {
    Messages: null,
    Latitude: 43.4167,
    Longitude: -73.6975,
    LocationName: "LAKE GEORGE"
  },
  {
    Messages: null,
    Latitude: 32.8929,
    Longitude: -80.0458,
    LocationName: "NORTH CHARLESTON"
  },
  {
    Messages: null,
    Latitude: 32.8929,
    Longitude: -80.0458,
    LocationName: "NORTH CHARLESTON"
  },
  {
    Messages: null,
    Latitude: 43.0908,
    Longitude: -78.9644,
    LocationName: "NIAGARA FALLS"
  },
  {
    Messages: null,
    Latitude: 43.0908,
    Longitude: -78.9644,
    LocationName: "NIAGARA FALLS"
  },
  {
    Messages: null,
    Latitude: 41.3268,
    Longitude: -74.122,
    LocationName: "CENTRAL VALLEY"
  },
  {
    Messages: null,
    Latitude: 38.953,
    Longitude: -77.2295,
    LocationName: "MC LEAN"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "TILTON"
  },
  {
    Messages: null,
    Latitude: 45.2534,
    Longitude: -93.6469,
    LocationName: "ALBERTVILLE"
  },
  {
    Messages: null,
    Latitude: 39.7305,
    Longitude: -105.1915,
    LocationName: "LAKEWOOD"
  },
  {
    Messages: null,
    Latitude: 27.5382,
    Longitude: -82.5006,
    LocationName: "ELLENTON"
  },
  {
    Messages: null,
    Latitude: 35.5808,
    Longitude: -82.6078,
    LocationName: "ASHEVILLE"
  },
  {
    Messages: null,
    Latitude: 35.4141,
    Longitude: -80.6162,
    LocationName: "CONCORD"
  },
  {
    Messages: null,
    Latitude: 25.2846,
    Longitude: -80.6246,
    LocationName: "HOMESTEAD"
  },
  {
    Messages: null,
    Latitude: 43.4167,
    Longitude: -73.6975,
    LocationName: "LAKE GEORGE"
  },
  {
    Messages: null,
    Latitude: 36.0979,
    Longitude: -79.2719,
    LocationName: "MEBANE"
  },
  {
    Messages: null,
    Latitude: 34.2134,
    Longitude: -83.448,
    LocationName: "COMMERCE"
  },
  {
    Messages: null,
    Latitude: 39.1821,
    Longitude: -77.5359,
    LocationName: "LEESBURG"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "LEE"
  },
  {
    Messages: null,
    Latitude: 26.152,
    Longitude: -80.3165,
    LocationName: "SUNRISE"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "BOSTON"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "TILTON"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "BURLINGTON"
  },
  {
    Messages: null,
    Latitude: 26.4351,
    Longitude: -81.8102,
    LocationName: "ESTERO"
  },
  {
    Messages: null,
    Latitude: 33.7587,
    Longitude: -78.8044,
    LocationName: "MYRTLE BEACH"
  },
  {
    Messages: null,
    Latitude: 33.7377,
    Longitude: -78.9787,
    LocationName: "MYRTLE BEACH"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "JACKSON"
  },
  {
    Messages: null,
    Latitude: 35.2072,
    Longitude: -80.9568,
    LocationName: "CHARLOTTE"
  },
  {
    Messages: null,
    Latitude: 32.1149,
    Longitude: -81.252,
    LocationName: "POOLER"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "MERRIMACK"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "MERRIMACK"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "JACKSON"
  },
  {
    Messages: null,
    Latitude: 32.1149,
    Longitude: -81.252,
    LocationName: "POOLER"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "LEE"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "BLACKWOOD"
  },
  {
    Messages: null,
    Latitude: 28.1801,
    Longitude: -82.4169,
    LocationName: "LUTZ"
  },
  {
    Messages: null,
    Latitude: 44.786,
    Longitude: -93.2202,
    LocationName: "EAGAN"
  },
  {
    Messages: null,
    Latitude: 44.8427,
    Longitude: -93.2363,
    LocationName: "BLOOMINGTON"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "BLACKWOOD"
  },
  {
    Messages: null,
    Latitude: 35.0999,
    Longitude: -81.7056,
    LocationName: "GAFFNEY"
  },
  {
    Messages: null,
    Latitude: 44.786,
    Longitude: -93.2202,
    LocationName: "EAGAN"
  },
  {
    Messages: null,
    Latitude: 35.0999,
    Longitude: -81.7056,
    LocationName: "GAFFNEY"
  },
  {
    Messages: null,
    Latitude: 39.9619,
    Longitude: -105.0148,
    LocationName: "THORNTON"
  },
  {
    Messages: null,
    Latitude: 32.1149,
    Longitude: -81.252,
    LocationName: "POOLER"
  },
  {
    Messages: null,
    Latitude: 34.4537,
    Longitude: -84.155,
    LocationName: "DAWSONVILLE"
  },
  {
    Messages: null,
    Latitude: 32.2513,
    Longitude: -80.8721,
    LocationName: "BLUFFTON"
  },
  {
    Messages: null,
    Latitude: 35.4141,
    Longitude: -80.6162,
    LocationName: "CONCORD"
  },
  {
    Messages: null,
    Latitude: 34.4537,
    Longitude: -84.155,
    LocationName: "DAWSONVILLE"
  },
  {
    Messages: null,
    Latitude: 39.7305,
    Longitude: -105.1915,
    LocationName: "LAKEWOOD"
  },
  {
    Messages: null,
    Latitude: 32.2513,
    Longitude: -80.8721,
    LocationName: "BLUFFTON"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "ELIZABETH"
  },
  {
    Messages: null,
    Latitude: 34.2134,
    Longitude: -83.448,
    LocationName: "COMMERCE"
  },
  {
    Messages: null,
    Latitude: 26.152,
    Longitude: -80.3165,
    LocationName: "SUNRISE"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "LEE"
  },
  {
    Messages: null,
    Latitude: 39.9619,
    Longitude: -105.0148,
    LocationName: "THORNTON"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "ELIZABETH"
  },
  {
    Messages: null,
    Latitude: 45.2534,
    Longitude: -93.6469,
    LocationName: "ALBERTVILLE"
  },
  {
    Messages: null,
    Latitude: 26.152,
    Longitude: -80.3165,
    LocationName: "SUNRISE"
  },
  {
    Messages: null,
    Latitude: 39.9619,
    Longitude: -105.0148,
    LocationName: "THORNTON"
  },
  {
    Messages: null,
    Latitude: 25.2846,
    Longitude: -80.6246,
    LocationName: "HOMESTEAD"
  },
  {
    Messages: null,
    Latitude: 35.2072,
    Longitude: -80.9568,
    LocationName: "CHARLOTTE"
  },
  {
    Messages: null,
    Latitude: 28.1801,
    Longitude: -82.4169,
    LocationName: "LUTZ"
  },
  {
    Messages: null,
    Latitude: 44.786,
    Longitude: -93.2202,
    LocationName: "EAGAN"
  },
  {
    Messages: null,
    Latitude: 36.0979,
    Longitude: -79.2719,
    LocationName: "MEBANE"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "MERRIMACK"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "ELIZABETH"
  },
  {
    Messages: null,
    Latitude: 38.676,
    Longitude: -77.3163,
    LocationName: "WOODBRIDGE"
  },
  {
    Messages: null,
    Latitude: 35.5068,
    Longitude: -78.3479,
    LocationName: "SMITHFIELD"
  },
  {
    Messages: null,
    Latitude: 35.5068,
    Longitude: -78.3479,
    LocationName: "SMITHFIELD"
  },
  {
    Messages: null,
    Latitude: 35.4141,
    Longitude: -80.6162,
    LocationName: "CONCORD"
  },
  {
    Messages: null,
    Latitude: 28.1801,
    Longitude: -82.4169,
    LocationName: "LUTZ"
  },
  {
    Messages: null,
    Latitude: 38.676,
    Longitude: -77.3163,
    LocationName: "WOODBRIDGE"
  },
  {
    Messages: null,
    Latitude: 38.676,
    Longitude: -77.3163,
    LocationName: "WOODBRIDGE"
  },
  {
    Messages: null,
    Latitude: 28.3957,
    Longitude: -81.4666,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.3957,
    Longitude: -81.4666,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 40.4262,
    Longitude: -105.09,
    LocationName: "LOVELAND"
  },
  {
    Messages: null,
    Latitude: 40.4262,
    Longitude: -105.09,
    LocationName: "LOVELAND"
  },
  {
    Messages: null,
    Latitude: 28.4871,
    Longitude: -81.4082,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.4522,
    Longitude: -81.4678,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "BOSTON"
  },
  {
    Messages: null,
    Latitude: "UnDefined",
    Longitude: "UnDefined",
    LocationName: "BOSTON"
  },
  {
    Messages: null,
    Latitude: 28.4522,
    Longitude: -81.4678,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.3822,
    Longitude: -81.569,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.3957,
    Longitude: -81.4666,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.3957,
    Longitude: -81.4666,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.4522,
    Longitude: -81.4678,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 33.8482,
    Longitude: -84.3582,
    LocationName: "ATLANTA"
  },
  {
    Messages: null,
    Latitude: 28.3957,
    Longitude: -81.4666,
    LocationName: "ORLANDO"
  },
  {
    Messages: null,
    Latitude: 28.4522,
    Longitude: -81.4678,
    LocationName: "ORLANDO"
  }
];
// let uniques = data.Results.filter((a, b) => data.Results.indexOf(a.LocationName) === b);
console.log(uniqBy(data, "LocationName"));
