const userAlarms = process.argv.slice(2);

for (const alarm of userAlarms) {
  console.log(alarm);
}


// process.stdout.write('\x07');