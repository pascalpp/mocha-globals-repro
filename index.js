const Mocha = require('mocha')

const mochaInstance = new Mocha({
  checkLeaks:      true,
  global:          [ 'foo' ]
});

mochaInstance.addFile('./test.js');

mochaInstance.run();
