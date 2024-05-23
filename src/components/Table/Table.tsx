import { Dispatch, MouseEvent, SetStateAction } from "react";
import "./Table.css";
import { RobotState } from "../../utils/types";

interface TableProps {
	robotState: RobotState;
	setRobotState: Dispatch<SetStateAction<RobotState>>;
}

const Table = ({ setRobotState }: TableProps) => {
	const getSquareLocationOnBrowswer = (e: MouseEvent, xPosition: number, yPosition: number) => {
		const { x, y } = e.currentTarget.getBoundingClientRect();
		setRobotState({ direction: "north", location: { x: xPosition, y: yPosition }, left: x, top: y });
	};

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

	return <div className="table">{createBoard(5, 5)}</div>;
};

export default Table;
