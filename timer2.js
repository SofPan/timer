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
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
});
