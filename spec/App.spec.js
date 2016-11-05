'use strict';

const App = require('../app/App');

describe('App class', () => {
  const app = new App();

  describe('init', () => {
    it('should be defined', () => {
      expect(app).toBeDefined();
    });
  });

  describe('readLine()', () => {
    it('should be defined', () => {
      expect(app.readLine).toBeDefined();
    });

    it('should call the correct function depending on line input', () => {
      spyOn(app.robot, 'place');
      spyOn(app.robot, 'left');
      spyOn(app.robot, 'right');
      spyOn(app.robot, 'move');
      spyOn(app.robot, 'report');

      app.readLine('PLACE 3,4,WEST');
      expect(app.robot.place).toHaveBeenCalledWith(3, 4, 'WEST');

      app.readLine('LEFT');
      expect(app.robot.left).toHaveBeenCalled();

      app.readLine('RIGHT');
      expect(app.robot.left).toHaveBeenCalled();

      app.readLine('MOVE');
      expect(app.robot.move).toHaveBeenCalled();

      app.readLine('REPORT');
      expect(app.robot.report).toHaveBeenCalled();
    });
  });
});
