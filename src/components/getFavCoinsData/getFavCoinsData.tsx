import React, { useEffect } from "react";
import { Col, Row, Spin } from "antd";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import useFetch from "@hooks/useFetch";
import { convertToQuery } from "@utils/queries";
import { GetCoinsDataProps, CoinInterface } from "@customTypes/index";
import { CoinListContainer } from "./coinList.style";
import { FavCoinItem } from "@components/favCoinItem/favCoinItem";
import useWebSocket from "react-use-websocket";

export const GetFavCoinsData: React.FC<GetCoinsDataProps> = ({
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

		fetchCoinsData({ url: `/coins?${url}`, method: "get" });
	}, [queries]);

	return loading ? (
		<Spin />
	) : (
		<CoinListContainer>
			<Row style={{ height: "100%" }}>
				{data?.data?.coins?.map((coin: CoinInterface) => {
					const { uuid } = coin;
					return (
						<div
							style={{
								width: `${100 / data?.data?.coins?.length ?? 1}%`,
								position: "relative",
							}}
						>
							<FavCoinItem key={uuid} {...coin} currencySign={currencySign} />
						</div>
					);
				})}
			</Row>
		</CoinListContainer>
	);
};
