import React from "react";
import { Container } from "./webSider.style";
import { FavoriteCoinsList } from "@components/favCoinsList";

export const WebSider = () => {
	return (
		<Container>
			<FavoriteCoinsList />
		</Container>
	);
};
