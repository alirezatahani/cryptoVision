import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "@redux/store";
import { theme } from "@global/Global";
import { WebSider } from "@modules/webSider/webSider";
import "./global.css";

function Injected() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<WebSider />
			</ThemeProvider>
		</Provider>
	);
}

export default Injected;
