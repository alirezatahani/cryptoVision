import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "@redux/store";
import { theme } from "@global/Global";
import { Route, Router } from "@utils/router";
import { routes } from "./routes";
import "./global.css";

function App() {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<Router>
					{routes.map((route) => {
						return (
							<Route key={route.to} to={route.to} component={route.component} />
						);
					})}
				</Router>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
