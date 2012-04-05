(function() {
  var prefix, should;

  should = require("should");

  prefix = require("../prefix");

  describe("Multiple selector part replace", function() {
    describe("when run with blacklist > blacklist selector (without a dot in selector)", function() {
      var result;
      result = prefix.css('html > body { ; }', 'bootstrap');
      return it("should replace the whole selector with the prefix", function() {
        return result.should.equal('bootstrap { ; }');
      });
    });
    return describe("when run with blacklist > blacklist selector (with a dot in selector)", function() {
      var result;
      result = prefix.css('html > body { ; }', '.bootstrap');
      return it("should replace the whole selector with the prefix", function() {
        return result.should.equal('.bootstrap { ; }');
      });
    });
  });

}).call(this);
