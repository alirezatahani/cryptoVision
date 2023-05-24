import React from "react";
import Injected from "./Injected";
import ReactDOM from "react-dom/client";

const inject = () => {
	if (!document.querySelector("#CV")) {
		const app = document.createElement("div");
		app.id = "CV";
		document.body.appendChild(app);

		const root = ReactDOM.createRoot(document.getElementById("CV"));
		root.render(<Injected />);
	}
};

inject();
