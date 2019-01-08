const { spawn } = require('child_process')

const logOutput = (name) => (data) => console.log(`[${name}] ${data}`)

function run() {
  return new Promise((resolve, reject) => {
    const process = spawn('python', ['./script.py', 'my', 'args']);

    const out = []
    process.stdout.on(
      'data',
      (data) => {
        out.push(data.toString());
        logOutput('stdout')(data);
      }
    );


    const err = []
    process.stderr.on(
      'data',
      (data) => {
        err.push(data.toString());
        logOutput('stderr')(data);
      }
    );

    process.on('exit', (code, signal) => {
      logOutput('exit')(`${code} (${signal})`)
      resolve(out);
    });
  });
}

(async () => {
  try {
    const output = await run()
    logOutput('main')(output)
    process.exit(0)
  } catch (e) {
    console.error(e.stack);
    process.exit(1);
  }
})();
