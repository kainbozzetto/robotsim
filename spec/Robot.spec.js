var Robot = require('../app/Tabletop');
var Robot = require('../app/Robot');

describe('Robot class', function() {

  var tabletop = jasmine.createSpyObject('Tabletop', ['isValidPosition']);

  var robot;

  describe('init', function() {

    it('should throw as input is not of type Tabletop', function() {
      expect(function() {
        robot = new Robot();
      }).toThrow();
    });

    it('should not throw as input is of type Tabletop', function() {
      expect(function() {
        robot = new Robot(tabletop);
      }).not.toThrow();
    });

    it('should be defined', function() {
      expect(robot).toBeDefined();
    });

    it('should have correct tabletop reference', function() {
      expect(robot.tabletop).toBe(tabletop);
    });

  });

});