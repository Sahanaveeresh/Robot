const { placeRobot, moveRobot, turnLeft, turnRight, reportPosition } = require('./robot');

function handleCommand(command) {
  const commands = command.split(' ');

  // Process each command sequentially
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    switch (cmd) {
      case 'PLACE':
        // Extract arguments for PLACE command
        const placeArgs = commands[i + 1].split(',');
        placeRobot(parseInt(placeArgs[0]), parseInt(placeArgs[1]), placeArgs[2]);
        i++; // Skip the next element as it has been processed
        break;
      case 'MOVE':
        moveRobot();
        break;
      case 'LEFT':
        turnLeft();
        break;
      case 'RIGHT':
        turnRight();
        break;
      case 'REPORT':
        return reportPosition();
      default:
        return null; // Return null for invalid commands
    }
  }

  // If REPORT command is not encountered in the loop, return current position
  return reportPosition();
}

module.exports = { handleCommand };
