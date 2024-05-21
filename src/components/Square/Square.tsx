//@ts-nocheck
import { forwardRef, useRef } from "react";
import "./Square.css";

interface SquareProps {
	canClick: boolean;
	setLocation: (index: [number, number], e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
	index: [number, number];
}

const Square = forwardRef<HTMLDivElement, SquareProps>(({ canClick, setLocation, index }, ref) => {
	return (
		<div className="square" ref={ref} onClick={canClick ? (e) => setLocation(index, e) : undefined}>
			{`${index[0]}, ${index[1]}`}
		</div>
	);
});

export default Square;
