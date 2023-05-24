import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "@redux/store";
import { theme } from "@global/Global";
import { Home } from "@modules/home";
import "./global.css";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
