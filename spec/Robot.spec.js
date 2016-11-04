var Robot = require('../app/Robot');

describe('Robot class', function() {

  var tabletop = jasmine.createSpyObj('Tabletop', ['isValidPosition']);

  var robot;

  beforeEach(function() {
    robot = new Robot(tabletop);
  });

  describe('init', function() {

    it('should be defined', function() {
        expect(robot).toBeDefined();
    });

    it('should have correct tabletop reference', function() {
      expect(robot.tabletop).toBe(tabletop);
    });

  });

  describe('setters', function() {

    it('should throw as x is not an integer', function() {
      expect(function() {
        robot.x = 'a';
      }).toThrow();
    });

    it('should not throw as x is an integer', function() {
      expect(function() {
        robot.x = 3;
      }).not.toThrow();
    });

    it('should throw as y is not an integer', function() {
      expect(function() {
        robot.y = null;
      }).toThrow();
    });

    it('should not throw as y is an integer', function() {
      expect(function() {
        robot.y = 2;
      }).not.toThrow();
    });

    it('should throw as f is not in direction array', function() {
      expect(function() {
        robot.f = '9uad';
      }).toThrow();
    });

    it('should not throw as f is in direction array', function() {
      expect(function() {
        robot.f = 'NORTH';
      }).not.toThrow();
    });

  });

  describe('place()', function() {

    it('should call tabletop.isValidPosition() with correct parameters', function() {
      robot.place(2, 3, 'EAST');

      expect(tabletop.isValidPosition).toHaveBeenCalledWith(2, 3);
    });

    it('should set x, y, f to the new parameters position is valid', function() {
      // set return value of isValidPosition to true
      tabletop.isValidPosition.and.returnValue(true);

      robot.place(2, 3, 'EAST');

      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(3);
      expect(robot.f).toEqual('EAST');

      // set return value of isValidPosition to false
      tabletop.isValidPosition.and.returnValue(false);

      robot.place(-1, 4, 'WEST');

      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(3);
      expect(robot.f).toEqual('EAST');
    });
    
  });

  describe('left()', function() {
    it('should be defined', function() {
      expect(robot.left).toBeDefined();
    });

    it('should not rotate left if robot has not been placed', function() {
      var f = robot.f;
      robot.left();
      expect(robot.f).toEqual(f);
    });

    it('should rotate left if called after being placed', function() {
      robot.place(2, 2, 'EAST');
      robot.left();
      expect(robot.f).toEqual('NORTH');
      robot.left();
      expect(robot.f).toEqual('WEST');
      robot.left();
      expect(robot.f).toEqual('SOUTH');
      robot.left();
      expect(robot.f).toEqual('EAST');
    });
  });

  describe('right()', function() {
    it('should be defined', function() {
      expect(robot.right).toBeDefined();
    });

    it('should not rotate right if robot has not been placed', function() {
      var f = robot.f;
      robot.right();
      expect(robot.f).toEqual(f);
    });

    it('should rotate right if called after being placed', function() {
      robot.place(2, 2, 'EAST');
      robot.right();
      expect(robot.f).toEqual('SOUTH');
      robot.right();
      expect(robot.f).toEqual('WEST');
      robot.right();
      expect(robot.f).toEqual('NORTH');
      robot.right();
      expect(robot.f).toEqual('EAST');
    });
  });

});