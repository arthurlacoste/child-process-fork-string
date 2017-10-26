let script = `
function jsHello(i) {
  if (--i > -1) {
    setTimeout(function () { jsHello(i); }, 2000);
    done = false;
  } else {
    done = true;
  }
  console.log(done);
}
jsHello(5);`

var { forkString } = require('../index');

const js = forkString(script, { silent: true })

js.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

js.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});


js.on('close', (code) => {
  if (code === 0) {
    console.log('No err');
  } else {
    console.log('Err !');
  }
});
