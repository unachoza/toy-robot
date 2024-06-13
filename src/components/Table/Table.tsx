import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import "./Table.css";
import { RobotState } from "../../utils/types";

interface TableProps {
	setRobotState: Dispatch<SetStateAction<RobotState>>;
}

const Table = ({ setRobotState }: TableProps) => {
	const tableRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// set table to ref to improve performance eliminating rerender on every move
		// isolating the board from the robot
		if (tableRef.current && tableRef.current.children.length === 0) {
			const table = createBoard(5, 5);
			tableRef.current.appendChild(table);
		}
	}, []);

	function createSquare(i: number, j: number) {
		const square = document.createElement("div");
		square.className = "square";
		square.innerText = `${i},${j}`;
		square.dataset.id = `${i},${j}`;
		square.addEventListener("click", (e) => getSquareLocationOnBrowswer(e, i, j));
		return square;
	}

	// function to satisfy PLACE Command;
	// derive location on table from mouse click
	function getSquareLocationOnBrowswer(e: globalThis.MouseEvent, xPosition: number, yPosition: number) {
		const target = e.currentTarget as HTMLElement | null;
		if (target) {
			const { x, y } = target.getBoundingClientRect();
			setRobotState({ direction: "north", location: { x: xPosition, y: yPosition }, left: x, top: y });
		}
	}

	function createBoard(rows: number, col: number) {
		const container = document.createElement("div");
		container.className = "table";
		for (let i = 0; i < rows; i++) {
			const tableRow = document.createElement("div");
			tableRow.className = "table-row";
			tableRow.dataset.row = `row-${i}`;
			for (let j = 0; j < col; j++) {
				tableRow.appendChild(createSquare(i, j));
			}
			container.appendChild(tableRow);
		}
		return container;
	}

	return <div ref={tableRef} data-testid="table"></div>;
};

export default Table;
