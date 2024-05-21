import { Dispatch, MouseEvent } from "react";
import "./Table.css";
import { RobotLocation } from "../../utils/types";

interface TableProps {
	canClick: boolean;
	robotLocation: RobotLocation | null;
	setRobotLocation: Dispatch<React.SetStateAction<RobotLocation | null>>;
}

const Table = ({ canClick, robotLocation, setRobotLocation }: TableProps) => {
	const getSquareLocationOnBrowswer = (e: MouseEvent) => {
		const { x, y } = e.currentTarget.getBoundingClientRect();
		let squareIndex = e.currentTarget.innerHTML.split(",").map(Number);
		setRobotLocation({ ...robotLocation, direction: "south", location: squareIndex, left: x, top: y });
	};

	const createBoard = (rows: number, col: number) => {
		console.log("draw");
		let array2D = [];
		for (let i = 0; i < rows; i++) {
			let tableRow = [];
			for (let j = 0; j < col; j++) {
				let index = [i, j];
				tableRow.unshift(
					<div
						key={`square +${index}`}
						className="square"
						onClick={canClick ? (e: MouseEvent) => getSquareLocationOnBrowswer(e) : undefined}
					>
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
