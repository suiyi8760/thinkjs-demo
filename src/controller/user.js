const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    this.body = 'hello world!';
  }
  postAction() {
    if(this.isPost){
      this.body = 'passed'
    }
  }
};
