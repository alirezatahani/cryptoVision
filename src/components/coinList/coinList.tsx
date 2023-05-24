import React from "react";
import { CoinListProps } from "./coinList_types";
import { CoinListContainer } from "./coinList.style";
import { CoinInterface } from "@customTypes/index";
import { CoinItem } from "@components/coinItem";

export const CoinList: React.FC<CoinListProps> = ({
	data,
	loading,
	currencySign,
}) => {
	return (
		<CoinListContainer>
			{data &&
				data.map((coin: CoinInterface) => {
					const { uuid } = coin;
					return <CoinItem key={uuid} {...coin} currencySign={currencySign} />;
				})}
		</CoinListContainer>
	);
};
