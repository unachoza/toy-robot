import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RobotProvider } from "./context/RobotContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RobotProvider>
			<App />
		</RobotProvider>
	</React.StrictMode>
);
