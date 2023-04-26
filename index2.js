const { nextISSTimesForMyLocation } = require('./iss_promised');

const printPassTimes = function(times) {
  for (const t of times) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(t.risetime);
    const duration = t.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });