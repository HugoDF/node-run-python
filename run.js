const { spawn } = require('child_process')

function run() {
  const process = spawn('echo', ['foo']);
  process.stdout.on(
    'data',
    (data) => console.log(data.toString())
  );
}

(() => {
  try {
    run()
    // process.exit(0)
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
})();
