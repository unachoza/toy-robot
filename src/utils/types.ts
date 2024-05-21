export type Direction = "north" | "east" | "south" | "west";
export type Index = number[] | number;

export interface RobotLocation {
	direction?: Direction | null;
	location?: Index | null;
	left?: number;
	top?: number;
}
