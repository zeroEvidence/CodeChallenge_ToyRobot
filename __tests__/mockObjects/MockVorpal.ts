export class MockVorpal {
  delimiterString = "";
  logRecorder = [] as string[];
  commandRecorder = [] as string[];
  aliasRecorder = [] as string[];
  delimiterCalled = 0;
  logCalled = 0;
  commandCalled = 0;
  aliasCalled = 0;
  allowUnknownOptionsFlagCalled = 0;
  parseCalled = 0;
  validateCalled = 0;
  actionCalled = 0;
  hiddenCalled = 0;
  helpCalled = 0;
  catchCalled = 0;
  showCalled = 0;
  activeCommand = {
    log: function(args: string) {
      return this.log(args);
    }.bind(this)
  };
  delimiter(delimiter: string) {
    this.delimiterCalled++;
    this.delimiterString = delimiter;
    return this;
  }
  log(message: string) {
    this.logCalled++;
    this.logRecorder.push(message);
    return this;
  }
  command(cmd: string) {
    this.commandCalled++;
    this.commandRecorder.push(cmd);
    return this;
  }
  alias(alias: string) {
    this.aliasCalled++;
    this.aliasRecorder.push(alias);
    return this;
  }
  allowUnknownOptions() {
    this.allowUnknownOptionsFlagCalled++;
    return this;
  }
  parse() {
    this.parseCalled++;
    return this;
  }
  validate() {
    this.validateCalled++;
    return this;
  }
  action() {
    this.actionCalled++;
    return this;
  }
  hidden() {
    this.hiddenCalled++;
    return this;
  }
  help() {
    this.helpCalled++;
    return this;
  }
  catch() {
    this.catchCalled++;
    return this;
  }
  show() {
    this.showCalled++;
    return this;
  }
}
