let robotPosition = null;

const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

function placeRobot(x, y, facing) {
  if (isValidPosition(x, y) && isValidDirection(facing)) {
    robotPosition = { x, y, facing };
  }
}

function moveRobot() {
  if (!robotPosition) return; // Robot not placed yet
  const { x, y, facing } = robotPosition;
  let newX = x;
  let newY = y;

  switch (facing) {
    case 'NORTH':
      newY++;
      break;
    case 'EAST':
      newX++;
      break;
    case 'SOUTH':
      newY--;
      break;
    case 'WEST':
      newX--;
      break;
    default:
      break;
  }

  if (isValidPosition(newX, newY)) {
    robotPosition.x = newX;
    robotPosition.y = newY;
  }
}

function turnLeft() {
  if (!robotPosition) return; // Robot not placed yet
  const currentDirectionIndex = DIRECTIONS.indexOf(robotPosition.facing);
  const newDirectionIndex = (currentDirectionIndex + 3) % 4; // 3 steps anti-clockwise
  robotPosition.facing = DIRECTIONS[newDirectionIndex];
}

function turnRight() {
  if (!robotPosition) return; // Robot not placed yet
  const currentDirectionIndex = DIRECTIONS.indexOf(robotPosition.facing);
  const newDirectionIndex = (currentDirectionIndex + 1) % 4; // 1 step clockwise
  robotPosition.facing = DIRECTIONS[newDirectionIndex];
}

function reportPosition() {
  if (!robotPosition) return 'Robot not placed yet';
  return `${robotPosition.x},${robotPosition.y},${robotPosition.facing}`;
}

// Helper functions
function isValidPosition(x, y) {
  return x >= 0 && x < 5 && y >= 0 && y < 5;
}

function isValidDirection(direction) {
  return DIRECTIONS.includes(direction);
}

module.exports = { placeRobot, moveRobot, turnLeft, turnRight, reportPosition };
