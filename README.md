# Robot Simulation

Simulation where a robot receives text commands that will allow it to traverse a 5 unit by 5 unit tabletop.


Written in Javascript utilising ES6.

## Requirements

* [NodeJS](http://nodejs.org)

## Installation

```sh
git clone https://github.com/kainbozzetto/robotsim.git
cd robotsim
npm install
```

If you are using npm v2 you may encounter an EPEERINVALID error during installation. To remove this error message please update to npm v3 by upgrading to [Node 6](http://nodejs.org) or using the command `npm install -g npm@latest`.

## Setup Application

Modify the `commands.txt` file in order to control the robot.

The robot can take the following commands:

```
PLACE X,Y,DIRECTION
	Set the position and facing direction of the robot. Direction must be NORTH, SOUTH, EAST or WEST
LEFT
	Rotate the robot facing direction left
RIGHT
	Rotate the robot facing direction right
MOVE
	Move the robot 1-unit forward in the direction it is facing	
REPORT
	Write to console the current X,Y,DIRECTION of the robot
```

## Run Application

The application files can be found under the `app` folder.

```sh
npm start
```

## Run Tests

Testing will run both the application and test files through ESLint. Once passed Jasmine will run the test files. The test files can be found under the `spec` folder.

```sh
npm test
```

## Examples

*Input:*
```
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
```

*Output:*
```
3,3,NORTH
```

*Input:*
```
PLACE 3,0,NORTH
MOVE
MOVE
REPORT
RIGHT
MOVE
REPORT
LEFT
LEFT
MOVE
MOVE
REPORT
```

*Output:*
```
3,2,NORTH
4,2,EAST
2,2,WEST
```
