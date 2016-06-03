var consoleOutput = [];
(function () {
  var log = console.log;
  console.log = function () {
    var output = Array.prototype.slice.call(arguments);
    log.apply(this, output);
    consoleOutput.push(output);
  };
}());
