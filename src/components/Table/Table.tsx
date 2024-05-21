import Square from "../Square/Square";
import "./Table.css";

const Table = () => {
	const createBoard = (rows: number, col: number) => {
		let array2D = [];
		for (let i = 0; i < rows; i++) {
			let tableRow = [];
			for (let j = 0; j < col; j++) {
				tableRow.unshift(<Square key={`${i}-${j}`} index={[i, j]} />);
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
