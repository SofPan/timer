const userAlarms = process.argv.slice(2);

for (const alarm of userAlarms) {
  setTimeout(() => {
    console.log(alarm);
  }, alarm * 1000);
}


// process.stdout.write('\x07');