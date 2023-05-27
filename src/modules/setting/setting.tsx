import React from "react";
import { Container, Wrapper, Text } from "./setting.style";
import {
	getCurrentTab,
	injectContentScript,
	removeContentScript,
} from "../../background";
import { Switch } from "antd";
import { BackButton } from "@components/backBtn";

export const Setting = () => {
	const handleInject = () => {
		getCurrentTab().then((tab) => {
			injectContentScript(tab);
		});
	};
	const handleRemove = () => {
		getCurrentTab().then((tab) => {
			removeContentScript(tab);
		});
	};
	const onChange = (checked: boolean) => {
		if (checked) {
			handleInject();
		} else {
			handleRemove();
		}
	};

	return (
		<Container>
			<BackButton />

			<Wrapper>
				<Text>Add your favorite coins to bottom of Browser</Text>
				<Switch onChange={onChange} />
			</Wrapper>
			{/* <button id="theButton" onClick={handleInject}>
				inject
			</button>
			<button id="mybutton">click me</button>{" "} */}
		</Container>
	);
};
