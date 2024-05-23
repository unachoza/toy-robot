import { Dispatch, MouseEvent, SetStateAction } from "react";
import "./Table.css";
import { RobotLocation } from "../../utils/types";

interface TableProps {
	robotLocation: RobotLocation;
	setRobotLocation: Dispatch<SetStateAction<RobotLocation>>;
}

const Table = ({ robotLocation, setRobotLocation }: TableProps) => {
	const getSquareLocationOnBrowswer = (e: MouseEvent, xPosition: number, yPosition: number) => {
		const { x, y } = e.currentTarget.getBoundingClientRect();
		/// QUESTION FOR ROHIRIUM : does every place command set the robot direct to north or just the initial?
		setRobotLocation({ ...robotLocation, direction: "north", location: { x: xPosition, y: yPosition }, left: x, top: y });
	};

	/// QUESTION FOR REVIWER : is there a way to call createboard on a ref,
	// so it doesn't re render on every click
	const createBoard = (rows: number, col: number) => {
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

	return (
		<div className="table" data-testid="table">
			{createBoard(5, 5)}
		</div>
	);
};

export default Table;
