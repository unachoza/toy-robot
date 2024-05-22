import robot_s from "../assets/robot_s.png";
import robot_n from "../assets/robot_n.png";
import robot_nw from "../assets/robot_nw.png";
import robot_se from "../assets/robot_se.png";

export const ROBOT_IMAGE_DIRECTIONS = {
	north: robot_n,
	south: robot_s,
	west: robot_nw,
	east: robot_se,
};

export const INSTRUCTIONS = `
## Description

- This application simulates a toy robot moving on a 5x5 square tabletop.
- Clicking anywhere on the table to PLACE the robot
- MOVE button will move the toy robot one space forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction 
- REPORT will announce the X,Y position and F (facing direction) of the robot.
`;
