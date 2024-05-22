export const INSTRUCTIONS = `
## Description

- This application simulates a toy robot moving on a 5x5 square tabletop.
- The tabletop has no obstructions.
- The robot can move freely on the tabletop but must not fall off.
- Clicking on a table space will PLACE the robot on the table at the clicked position (using X, Y coordinates), facing north.
- The origin (0,0) is at the SOUTH WEST corner of the table (bottom left).
- The first valid command is a PLACE command. Subsequent commands can be issued in any order, including another PLACE command (i.e. you can click another space and it would place the original toy robot on that space).
- MOVE will move the toy robot one space forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y position and F (facing direction) of the robot.
- A robot not on the table ignores commands.
- Commands can be issued via buttons on the page or arrow keys.
`;
