const { nextISSTimesForMyLocation } = require('./iss');

const printFlyOverTimes = function(times) {
  for (const t of times) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(t.risetime);
    const duration = t.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  printFlyOverTimes(passTimes);
});