import { MouseEvent, useContext } from "react";
import { RobotContext } from "../../context/RobotContext";
import "./Table.css";

const Table = () => {
	const context = useContext(RobotContext);
	if (!context) {
		throw new Error("RobotContext must be used within a RobotProvider");
	}
	const { getSquareLocationOnBrowswer } = context;

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
