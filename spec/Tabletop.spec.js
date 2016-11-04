var Tabletop = require('../app/Tabletop');

describe('Tabletop Class', function() {

  var tabletop;

  beforeEach(function() {
    tabletop = new Tabletop(5, 5);
  });

  describe('init', function() {

    it('should be defined', function() {
      expect(tabletop).toBeDefined();
    });

    it('should have its width and height attributes defined', function() {
      expect(tabletop.width).toBeDefined();
      expect(tabletop.height).toBeDefined();
    });

    it('should throw as input is not an integer', function() {
      expect(function() {
        tabletop = new Tabletop(null, 2);
      }).toThrow();
    });

  });

  describe('setters', function() {

    it('should throw as width is an not an integer', function() {
      expect(function() {
        tabletop.width = null;
      }).toThrow();
    });

    it('should not throw as width is an integer', function() {
      expect(function() {
        tabletop.width = 2;
      }).not.toThrow();
    });

    it('should throw as height is an not an integer', function() {
      expect(function() {
        tabletop.width = 'abc';
      }).toThrow();
    });

    it('should not throw as height is an integer', function() {
      expect(function() {
        tabletop.height = 0;
      }).not.toThrow();
    });

  });
  
  describe('isValidPosition method', function() {

    it('should throw as input is not an integer', function() {
      expect(function() {
        tabletop.isValidPosition('foo', 3);
      }).toThrow();
    });

    it('should throw as input is not an integer', function() {
      expect(function() {
        tabletop.isValidPosition(1);
      }).toThrow();
    });

    it('should not throw as input is an integer', function() {
      expect(function() {
        tabletop.isValidPosition(1, 3);
      }).not.toThrow();
    });

    it('should be an invalid position', function() {
      var validation = tabletop.isValidPosition(-1, 0);

      expect(validation).toBe(false);
    });

    it('should be an invalid position', function() {
      var validation = tabletop.isValidPosition(2, 6);

      expect(validation).toBe(false);
    });

    it('should be a valid position', function() {
      var validation = tabletop.isValidPosition(2, 3);

      expect(validation).toBe(true);
    });

  });

});