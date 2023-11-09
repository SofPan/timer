const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on input
stdin.on('data', (key) => {
  // if user pressed b, immediately beep
  if (key === "b") {
    process.stdout.write('\x07');
    // exit on ctrl + c
  } else if (key === '\u0003') {
    process.exit();
  }
  // if key is a number greater than 0
  if (key > 0) {
    // print message to console
    console.log(`setting alarm for ${key} seconds`);
    // beep after specified number of seconds
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});

// on exit, print message to console
process.on('exit', () => {
  console.log("Thanks for using me, ciao!");
});
