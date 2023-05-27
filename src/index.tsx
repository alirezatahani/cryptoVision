import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
	uri: "https://graphql.bitquery.io/graphql/",
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = "BQYy9DEdcgK2PUjaPv5ld6CajHOp4PPW";
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			"X-API-KEY": token,
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("cryptoVision"));
root.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
