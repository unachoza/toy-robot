import { useState } from "react";
import Table from "./components/Table/Table";
import Button from "./components/Button/Button";
import robot from "./assets/robot_s.png";
import "./App.css";

function App() {
	return (
		<>
			<div className="app-container">
				<Table />
				<div>
					<img src={robot} className="logo react" alt="React logo" />
					<div className="buttons-container">
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Move" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Left" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Right" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Place" />
						<Button onClick={(e) => console.log(e.currentTarget.value)} text="Report" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
