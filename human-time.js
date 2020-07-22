// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  let arr = [];
  //if(seconds == 0) return '00:00:00'
  if (seconds / 3600 > 0) {
    let hour = Math.floor(seconds / 3600);
    seconds -= hour * 3600;
    arr.push(hour);
  } else {
    arr.push(0);
  }
  if (seconds / 60 > 0) {
    let minute = Math.floor(seconds / 60);
    seconds -= minute * 60;
    arr.push(minute);
  } else {
    arr.push(0);
  }
  arr.push(seconds);
  let res = arr
    .map(x => {
      if (x <= 9) return (x = "0" + x);
      else return x;
    })
    .join(":");
  return res;
}
