var App = require('../app/App');
 
describe('App class', function() {
  
  var app = new App();

  describe('init', function() {
    it('should be defined', function() {
      expect(app).toBeDefined();
    });
  });

  describe('readLine()', function() {

    it('should be defined', function() {
      expect(app.readLine).toBeDefined();
    });

    it('should call the correct function depending on line input', function() {
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