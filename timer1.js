const userAlarms = process.argv.slice(2);

for (const alarm of userAlarms) {
  setTimeout(() => {
    if (alarm >= 0) {
      process.stdout.write('\x07');
    }
  }, alarm * 1000);
}