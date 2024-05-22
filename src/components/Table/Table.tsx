import { Dispatch, MouseEvent } from "react";
import "./Table.css";
import { RobotLocation } from "../../utils/types";

interface TableProps {
	robotLocation: RobotLocation | null;
	setRobotLocation: Dispatch<React.SetStateAction<RobotLocation | null>>;
}

const Table = ({ robotLocation, setRobotLocation }: TableProps) => {
	const getSquareLocationOnBrowswer = (e: MouseEvent, xPosition: number, yPosition: number) => {
		const { x, y } = e.currentTarget.getBoundingClientRect();
		//check if first time placed on table
		//******TODO MUST CHANGE BACK ROBOT TO NORTH FROM SOUTH****************
		setRobotLocation({ ...robotLocation, direction: "south", location: { x: xPosition, y: yPosition }, left: x, top: y });
	};

	const createBoard = (rows: number, col: number) => {
		console.log("draw");
		let array2D = [];
		for (let i = 0; i < rows; i++) {
			let tableRow = [];
			for (let j = 0; j < col; j++) {
				let index = [i, j];
				tableRow.unshift(
					<div key={`square +${index}`} className="square" onClick={(e: MouseEvent) => getSquareLocationOnBrowswer(e, i, j)}>
						{index.toString()}
					</div>
				);
			}
			array2D.push(
				<div key={i} className="table-row">
					{tableRow}
				</div>
			);
		}
		return array2D;
	};

	return <div className="table">{createBoard(5, 5)}</div>;
};

export default Table;
