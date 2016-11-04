var Tabletop = require('../app/Tabletop');

describe('Tabletop Class', function() {

  var tabletop = new Tabletop(5, 5);

  it('should be defined', function() {
     expect(tabletop).toBeDefined();
  });

  describe('isValidPosition method', function() {

    it('should be an invalid position', function() {
      var validation = tabletop.isValidPosition(-1, 0);

      expect(validation).toBe(false);
    });

    it('should be another invalid position', function() {
      var validation = tabletop.isValidPosition(2, 6);

      expect(validation).toBe(false);
    });

    it('should be a valid position', function() {
      var validation = tabletop.isValidPosition(2, 3);

      expect(validation).toBe(true);
    });

  });

});