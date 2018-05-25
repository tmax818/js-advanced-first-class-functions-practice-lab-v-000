// Code your solution in this file!

const logDriverNames = function (driver) {
  driver.forEach(x => console.log(x.name));
}

const logDriversByHometown = function (driver, location) {
  driver.forEach(x => {if (x.hometown === location) {
    console.log(x.name)} })
}

const driversByRevenue = function (driver){
  let newDriver = driver.sort(function(a, b){ a.revenue - b.revenue})
  return newDriver;
}