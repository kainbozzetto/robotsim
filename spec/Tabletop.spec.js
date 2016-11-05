'use strict';

const Tabletop = require('../app/Tabletop');

describe('Tabletop Class', () => {
  let tabletop;

  beforeEach(() => {
    tabletop = new Tabletop(5, 5);
  });

  describe('init', () => {
    it('should be defined', () => {
      expect(tabletop).toBeDefined();
    });

    it('should have its width and height attributes defined', () => {
      expect(tabletop.width).toBeDefined();
      expect(tabletop.height).toBeDefined();
    });

    it('should throw as input is not an integer', () => {
      expect(() => {
        tabletop = new Tabletop(null, 2);
      }).toThrow();
    });
  });

  describe('setters', () => {
    it('should throw as width is an not an integer', () => {
      expect(() => {
        tabletop.width = null;
      }).toThrow();
    });

    it('should not throw as width is an integer', () => {
      expect(() => {
        tabletop.width = 2;
      }).not.toThrow();
    });

    it('should throw as height is an not an integer', () => {
      expect(() => {
        tabletop.width = 'abc';
      }).toThrow();
    });

    it('should throw as height is less than or equal to 0', () => {
      expect(() => {
        tabletop.height = 0;
      }).toThrow();
    });

    it('should not throw as height is an integer and > 0', () => {
      expect(() => {
        tabletop.height = 2;
      }).not.toThrow();
    });
  });

  describe('isValidPosition()', () => {
    it('should throw as input is not an integer', () => {
      expect(() => {
        tabletop.isValidPosition('foo', 3);
      }).toThrow();
    });

    it('should throw as input is not an integer', () => {
      expect(() => {
        tabletop.isValidPosition(1);
      }).toThrow();
    });

    it('should not throw as input is an integer', () => {
      expect(() => {
        tabletop.isValidPosition(1, 3);
      }).not.toThrow();
    });

    it('should be an invalid position', () => {
      expect(tabletop.isValidPosition(-1, 0)).toBe(false);
    });

    it('should be an invalid position', () => {
      expect(tabletop.isValidPosition(2, 6)).toBe(false);
    });

    it('should be a valid position', () => {
      expect(tabletop.isValidPosition(2, 3)).toBe(true);
    });
  });
});
