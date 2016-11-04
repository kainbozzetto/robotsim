# Robot Simulation

Simulation where a robot receives text commands that will allow it to traverse a 5x5 unit tabletop.

## Installation

```sh
git clone https://github.com/kainbozzetto/robotsim.git
cd robotsim
npm install
```

## Run the app

Modify the commands.txt file in order to control the robot.

The robot can take the following commands:
```
PLACE X,Y,DIRECTION

LEFT

RIGHT

MOVE

REPORT
```

To run the application:

```sh
node index.js
```

## Run the tests

```sh
npm test
```