import { useState } from "react";

const Robot = ({ image, top, left }: any) => {
	console.log(top, left);
	return (
		<img
			src={image}
			className="robot"
			alt="toy robot"
			style={{
				position: "absolute",
				top: `${top}px`,
				left: `${left}px`,
			}}
		/>
	);
};
export default Robot;
