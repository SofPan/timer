// capture any number of user input arguments
const userAlarms = process.argv.slice(2);

// iterate over user input array
for (const alarm of userAlarms) {
  setTimeout(() => {
    // if the alarm is a number greater than or equal to zero, cause a beep
    if (alarm >= 0) {
      process.stdout.write('\x07');
    }
    // beep should occur at the intervals set by the user
  }, alarm * 1000);
}