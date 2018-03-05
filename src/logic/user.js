module.exports = class extends think.Logic {
  indexAction() {
    let rules = {
      username: {
        required: true
      }
    }
    let flag = this.validate(rules);
    if (!flag) {
      console.log(this.validateErrors);
      return this.fail(this.config('validateDefaultErrno'), this.validateErrors);
    }
  }

  postAction() {
    if (this.isPost) {
      this.rules = {
        postData: {
          required: true,
          array: true,
          method: 'POST'
        }
      }
    }
  }
};
