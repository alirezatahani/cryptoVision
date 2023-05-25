import React from "react";
import { useAppSelector } from "@hooks/hooks";
import { GetFavCoinsData } from "@components/getFavCoinsData";
import { loadState } from "@utils/localStorage";

export const FavoriteCoinsList: React.FC = () => {
	const favoriteList = loadState("favCoins") ?? [];
	const { sign, value } = useAppSelector((state) => state.referenceCurrency);
	const timePeriod = "3h";

	const uuidsString = favoriteList
		?.map((item: string, index: number) => {
			let query = "";
			if (index === 0) query = item;
			else query = `uuids[]=${item}`;
			return query;
		})
		.join("&");

	return (
		<GetFavCoinsData
			queries={{
				timePeriod,
				limit: 5,
				referenceCurrencyUuid: value,
			}}
			currencySign={sign}
		/>
	);
};
