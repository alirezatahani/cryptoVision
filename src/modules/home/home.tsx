import React from "react";
import { Container } from "./home.styles";
import { HomeTabs } from "@modules/homeTabs";
import { getCurrentTab, injectContentScript } from "../../background";
import { SettingOutlined } from "@ant-design/icons";
import { useRouter } from "@utils/router";

export const Home = () => {
	const { goTo } = useRouter();

	const handleInject = () => {
		getCurrentTab().then((tab) => {
			injectContentScript(tab);
		});
	};
	return (
		<Container>
			<SettingOutlined
				style={{ position: "absolute", right: 10, top: 10 }}
				onClick={() => {
					goTo("/setting");
				}}
			/>
			<HomeTabs />
		</Container>
	);
};
