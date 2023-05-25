import React from "react";
import Injected from "./Injected";
import ReactDOM from "react-dom/client";

(function inject() {
	if (
		!document.querySelector("#CV") &&
		!document.querySelector("#cryptoVision")
	) {
		const app = document.createElement("div");
		app.id = "CV";
		document.body.appendChild(app);

		const root = ReactDOM.createRoot(document.getElementById("CV"));
		root.render(<Injected />);
	}
})();
