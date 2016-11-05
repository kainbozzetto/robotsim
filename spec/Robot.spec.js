'use strict';

const Robot = require('../app/Robot');

describe('Robot class', () => {
  let tabletop;
  let robot;

  beforeEach(() => {
    tabletop = jasmine.createSpyObj('Tabletop', ['isValidPosition']);
    tabletop.isValidPosition.and.returnValue(true);

    robot = new Robot(tabletop);
  });

  describe('init', () => {
    it('should be defined', () => {
      expect(robot).toBeDefined();
    });

    it('should have correct tabletop reference', () => {
      expect(robot.tabletop).toBe(tabletop);
    });
  });

  describe('setters', () => {
    it('should throw as x is not an integer', () => {
      expect(() => {
        robot.x = 'a';
      }).toThrow();
    });

    it('should not throw as x is an integer', () => {
      expect(() => {
        robot.x = 3;
      }).not.toThrow();
    });

    it('should throw as y is not an integer', () => {
      expect(() => {
        robot.y = null;
      }).toThrow();
    });

    it('should not throw as y is an integer', () => {
      expect(() => {
        robot.y = 2;
      }).not.toThrow();
    });

    it('should throw as f is not in direction array', () => {
      expect(() => {
        robot.f = '9uad';
      }).toThrow();
    });

    it('should not throw as f is in direction array', () => {
      expect(() => {
        robot.f = 'NORTH';
      }).not.toThrow();
    });
  });

  describe('place()', () => {
    it('should call tabletop.isValidPosition() with correct parameters', () => {
      robot.place(2, 3, 'EAST');

      expect(tabletop.isValidPosition).toHaveBeenCalledWith(2, 3);
    });

    it('should set x, y, f to the new parameters position if valid & set placed variable as true', () => {
      // robot has not yet been placed
      expect(robot.placed).toEqual(false);

      robot.place(2, 3, 'EAST');

      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(3);
      expect(robot.f).toEqual('EAST');

      // robot has now been placed
      expect(robot.placed).toEqual(true);

      // set return value of isValidPosition to false
      tabletop.isValidPosition.and.returnValue(false);

      robot.place(-1, 4, 'WEST');

      expect(robot.x).toEqual(2);
      expect(robot.y).toEqual(3);
      expect(robot.f).toEqual('EAST');

      expect(robot.placed).toEqual(true);
    });
  });

  describe('left()', () => {
    it('should be defined', () => {
      expect(robot.left).toBeDefined();
    });

    it('should not rotate left if robot has not been placed', () => {
      const f = robot.f;
      robot.left();
      expect(robot.f).toEqual(f);
    });

    it('should rotate left if called after being placed', () => {
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

  describe('right()', () => {
    it('should be defined', () => {
      expect(robot.right).toBeDefined();
    });

    it('should not rotate right if robot has not been placed', () => {
      const f = robot.f;
      robot.right();
      expect(robot.f).toEqual(f);
    });

    it('should rotate right if called after being placed', () => {
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

  describe('move()', () => {
    it('should be defined', () => {
      expect(robot.move).toBeDefined();
    });

    it('should not change x,y,f if robot has not yet been placed', () => {
      const x = robot.x;
      const y = robot.y;
      const f = robot.f;

      robot.move();

      expect(robot.x).toEqual(x);
      expect(robot.y).toEqual(y);
      expect(robot.f).toEqual(f);
    });

    it('should not call place() if robot has not yet been placed', () => {
      spyOn(robot, 'place');

      robot.move();

      expect(robot.place).not.toHaveBeenCalled();
    });

    it('should call increment x or y correctly depending on direction and then call place()', () => {
      robot.place(2, 2, 'EAST');

      spyOn(robot, 'place').and.callThrough();

      robot.move();
      expect(robot.place.calls.mostRecent().args).toEqual([3, 2, 'EAST']);
      robot.left();
      robot.move();
      expect(robot.place.calls.mostRecent().args).toEqual([3, 3, 'NORTH']);
      robot.left();
      robot.move();
      expect(robot.place.calls.mostRecent().args).toEqual([2, 3, 'WEST']);
      robot.left();
      robot.move();
      expect(robot.place.calls.mostRecent().args).toEqual([2, 2, 'SOUTH']);
    });
  });

  describe('report()', () => {
    it('should be defined', () => {
      expect(robot.report).toBeDefined();
    });

    it('should not write to console if the robot has not yet been placed', () => {
      console.log = jasmine.createSpy('log');

      robot.report();

      expect(console.log).not.toHaveBeenCalled();
    });

    it('should write to console correctly if called after robot has been placed', () => {
      console.log = jasmine.createSpy('log');

      robot.place(3, 4, 'WEST');
      robot.report();

      expect(console.log).toHaveBeenCalledWith('3,4,WEST');
    });
  });
});
