const Mocha = require('mocha')

const mochaInstance = new Mocha({
  checkLeaks:      true,
  global:          [ 'foo' ]
});

mochaInstance.addFile('./test.js');

const runner = mochaInstance.run(function(failures) {
  // process.send({ message: 'end', failures });
  process.exitCode = 0; // parent will decide exitCode
});

// runner.on('pass', () => {
//   process.send({ message: 'pass' });
// });

// runner.on('fail', () => {
//   process.send({ message: 'fail' });
// });

// runner.on('pending', () => {
//   process.send({ message: 'pending' });
// });
