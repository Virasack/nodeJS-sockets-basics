var moment = require('moment');
var now = moment();

var timestamp = 1457444641989;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mm a'));
// now.subtract(1,'year');
// console.log(now.format());
// console.log(now.format('X')); // Unix Timestamp
// console.log(now.valueOf()); // Unix Javascript Timestamp convert to number


// console.log(now.format('MMM Do YYYY, h:mma'));