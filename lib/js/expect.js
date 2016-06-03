var expect = function(user_code){
  this.toEql = function(expected){
    return user_code === expected;
  };
  this.toContain = function(expected){
    return user_code.match(expected);
  };
  this.toMatchArray = function(expected){
    return user_code.every(function(elem){ return expected.indexOf(elem) > -1; });
  };
};
