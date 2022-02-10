const fs = require('fs')
const request = require('request');


apikey = "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=iJWffs59hSMV4LkG5fuKz60VtlYE72n3"
request(apikey, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const stringifyData = JSON.stringify(body)
  fs.writeFileSync('weather.json', stringifyData)
 });

 const getweather = (req,res) => {
  const weather = fs.readFileSync('weather.json');
  list = JSON.parse(weather);
  res.send(list);
};
const fetch = require("node-fetch");
const queryString = require('query-string');
const moment = require("moment");

// set the Timelines GET endpoint as the target URL
const getTimelineURL = "https://api.tomorrow.io/v4/timelines";

// get your key from app.tomorrow.io/development/keys
//const apikey = "add your API key here";

// pick the location, as a latlong pair
let location = [40.758, -73.9855];

// list the fields
const fields = [
  "precipitationIntensity",
  "precipitationType",
  "windSpeed",
  "windGust",
  "windDirection",
  "temperature",
  "temperatureApparent",
  "cloudCover",
  "cloudBase",
  "cloudCeiling",
  "weatherCode",
];

// choose the unit system, either metric or imperial
const units = "imperial";

// set the timesteps, like "current", "1h" and "1d"
const timesteps = ["current", "1h", "1d"];

// configure the time frame up to 6 hours back and 15 days out
const now = moment.utc();
const startTime = moment.utc(now).add(0, "minutes").toISOString();
const endTime = moment.utc(now).add(1, "days").toISOString();

// specify the timezone, using standard IANA timezone format
const timezone = "America/New_York";

// request the timelines with all the query string parameters as options
const getTimelineParameters =  queryString.stringify({
    apikey,
    location,
    fields,
    units,
    timesteps,
    startTime,
    endTime,
    timezone,
}, {arrayFormat: "comma"});


// fetch(getTimelineURL + "?" + getTimelineParameters, {method: "GET"})
//   .then((result) => result.json())
//   .then((json) => console.log(json));
//   //.catch((error) => console.error("error: " + err)));


module.exports=getweather