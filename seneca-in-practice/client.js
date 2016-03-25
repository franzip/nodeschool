var seneca = require('seneca')();

module.exports = function api (options) {
  this.add('role:math,cmd:sum', function sum (msg, respond) {
    respond(null, {answer: Number(msg.left) + Number(msg.right)});
  })
};
