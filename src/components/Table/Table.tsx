import { MouseEvent, useRef, useState } from "react";
import Square from "../Square/Square";
import { RobotLocation } from "../../App";
import "./Table.css";

interface TableProps {
	canClick: boolean;
	setLocation: MouseEvent<HTMLElement>;
	setCanClick: (arg0: boolean) => void;
	robotLocation: RobotLocation;
	setRobotLocation: (arg0: RobotLocation) => void;
}

const Table = ({ canClick, setCanClick, robotLocation, setRobotLocation }: TableProps) => {
	const squareRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const setLocation = (index: any, e: MouseEvent<HTMLDivElement>) => {
		//if robotLocation is null; set direction to north
		console.log(squareRef.current?.getBoundingClientRect());
		console.log(squareRef.current?.clientLeft);
		console.log(e.clientX);
		const x = e.clientX;
		const y = e.clientY;
		const location = {
			x,
			y,
		};
		console.log(e.clientY);
		if (squareRef.current) {
			const { offsetTop, offsetLeft } = squareRef.current;
			console.log({ offsetLeft });
			console.log(index);
			window.localStorage.setItem("location", JSON.stringify(location));
		}
		if (!robotLocation) {
			setRobotLocation({ direction: "north", location: index });
		} else {
			setRobotLocation({ ...robotLocation, location: index });
		}
		setCanClick(false);
	};

	const findSquareByIndex = () => {};

	const createBoard = (rows: number, col: number) => {
		let array2D = [];
		for (let i = 0; i < rows; i++) {
			let tableRow = [];
			for (let j = 0; j < col; j++) {
				tableRow.unshift(<Square ref={squareRef} key={`${i}-${j}`} index={[i, j]} canClick={canClick} setLocation={setLocation} />);
			}
			array2D.push(
				<div key={i} className="table-row">
					{tableRow}
				</div>
			);
		}
		return array2D;
	};
	console.log({ robotLocation });
	return <div className="table">{createBoard(5, 5)}</div>;
};

export default Table;
