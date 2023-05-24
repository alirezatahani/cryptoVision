import React from "react";
import { Container } from "./home.styles";
import { HomeTabs } from "@modules/homeTabs";
import { getCurrentTab, injectContentScript } from "../../background";

export const Home = () => {
	const handleInject = () => {
		getCurrentTab().then((tab) => {
			injectContentScript(tab);
		});
	};
	return (
		<Container>
			<HomeTabs />
			<button id="theButton" onClick={handleInject}>
				inject
			</button>
			<button id="mybutton">click me</button>{" "}
		</Container>
	);
};
