import React from "react";
import { useAppSelector } from "@hooks/hooks";
import { GetFavCoinsData } from "@components/getFavCoinsData";
import { loadState } from "@utils/localStorage";

export const FavoriteCoinsList: React.FC = () => {
	const favoriteList = loadState("favCoins");
	const { sign, value } = useAppSelector((state) => state.referenceCurrency);
	const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);

	const uuidsString = favoriteList?.favoriteList
		.map((item: string, index: number) => {
			let query = "";
			if (index === 0) query = item;
			else query = `uuids[]=${item}`;
			return query;
		})
		.join("&");

	console.log(favoriteList, "favoriteList");
	return (
		<GetFavCoinsData
			queries={{
				uuids: uuidsString,
				timePeriod,
				referenceCurrencyUuid: value,
			}}
			currencySign={sign}
		/>
	);
};
