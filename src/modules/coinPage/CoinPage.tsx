import React, { useEffect } from "react";
import { useAppSelector } from "@hooks/hooks";
import { Spin } from "antd";
import useFetch from "../../hooks/useFetch";
import { CoinDetail } from "@components/coinDetail";
import { CoinDetailPage } from "./coinPage.style";

export const CoinPage = () => {
	const query = useAppSelector((state) => state.stack.query);
	const referenceCurrency = useAppSelector((state) => state.referenceCurrency);
	const timePeriod = useAppSelector((state) => state.timePeriod.timePeriod);
	const [{ loading, data }, getCoinData] = useFetch();

	useEffect(() => {
		getCoinData({
			url: `/coin/${query}?referenceCurrencyUuid=${referenceCurrency.value}&timePeriod=${timePeriod}`,
			method: "get",
		});
	}, []);

	return (
		<CoinDetailPage>
			{loading ? (
				<Spin />
			) : data && data.data.coin ? (
				<CoinDetail coinData={data.data.coin} sign={referenceCurrency.sign} />
			) : null}
		</CoinDetailPage>
	);
};
