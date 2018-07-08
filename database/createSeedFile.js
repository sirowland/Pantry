// https://api.darksky.net/forecast/73b803cb6bf5b442f66c4c255569f727/40.5883,-111.6358,2016-02-25T23:59:59?exclude=flags,currently,hourly
const axios = require('axios');
const fs = require('fs');

const getData = (dateStr) => {
  return axios.get(`https://api.darksky.net/forecast/73b803cb6bf5b442f66c4c255569f727/40.5883,-111.6358,${dateStr}T23:59:59?exclude=flags,currently,hourly`)
    .then(res => res.data.daily.data[0]);
};

const getNumberOfDaysInMonth = (year, month) => new Date(year, Number(month) + 1, 0).getDate();

const writeDataLoop = (startYear, endYear) => {
  for (let i = startYear; i <= endYear; i += 1) {
    const numberOfDays = getNumberOfDaysInMonth(i, 3);

    for (let j = 1; j <= numberOfDays; j += 1) {
      getData(`${i}-02-${j < 10 ? `0${j}` : j}`)
        .then((result) => {
          const {
            temperatureHigh,
            temperatureLow,
            precipType,
            precipIntensity,
            precipAccumulation,
          } = result;
          const arr = [];
          if (precipType && precipType === 'snow') {
            arr.push(
              `${i}-02-${j < 10 ? `0${j}` : j}`,
              temperatureHigh,
              temperatureLow,
              precipType,
              precipIntensity,
              precipAccumulation,
            );
          } else {
            arr.push(`${i}-02-${j < 10 ? `0${j}` : j}`, temperatureHigh, temperatureLow, null, 0, 0);
          }
          fs.appendFileSync('./sqlSeed.csv', `${arr.join(',')}\n`);
        })
        .catch(err => console.log(err));
    }
  }
};

writeDataLoop(2017, 2018);
