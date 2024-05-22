export type Direction = "north" | "east" | "south" | "west";
export type Index = { x: number; y: number };

export interface RobotLocation {
	direction?: Direction | null;
	location?: Index | null;
	left?: number;
	top?: number;
}
