// iterate over user input array
// for (const alarm of userAlarms) {
//   setTimeout(() => {
//     // if the alarm is a number greater than or equal to zero, cause a beep
//     if (alarm >= 0) {
//       process.stdout.write('\x07');
//     }
//     // beep should occur at the intervals set by the user
//   }, alarm * 1000);
// }

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (key === '\u0003') {
    process.exit();
  }
  if (key > 0) {
    console.log(`setting alarm for ${key} seconds`);
  }

});
