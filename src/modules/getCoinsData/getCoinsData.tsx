import React, { useEffect } from "react";
import { Spin } from "antd";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import useFetch from "@hooks/useFetch";
import { convertToQuery } from "@utils/queries";
import { CoinList } from "@components/coinList";
import { GetCoinsDataProps } from "./getCoinsData_type";

export const GetCoinsData: React.FC<GetCoinsDataProps> = ({
	queries,
	currencySign,
}) => {
	const [{ loading, data }, fetchCoinsData] = useFetch();
	const cookies = parseCookies();

	const makingUrl = () => {
		return convertToQuery(queries);
	};

	useEffect(() => {
		const url = makingUrl();
		!!cookies.coins &&
			!!cookies.coins.length &&
			fetchCoinsData({ url: `/coins?${url}`, method: "get" });
	}, [queries]);

	useEffect(() => {
		if (data && data.data && data.data.coins) {
			setCookie(null, "coins", JSON.stringify(data.data.coins), {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
		} else {
			setCookie(null, "coins", "[]", {
				maxAge: 30 * 24 * 60 * 60,
				path: "/",
			});
		}
	}, [data]);

	return loading ? (
		<Spin />
	) : (
		<CoinList
			loading={loading}
			data={data && data.data && data.data.coins}
			currencySign={currencySign}
		/>
	);
};
