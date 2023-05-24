import styled from "styled-components";
import { CoinPriceProps } from "./coinPrice_types";

export const CoinPrice = styled.p<CoinPriceProps>(({ theme }) => ({
	...theme.typography.subtitle1,
	textAlign: "start",
	width: 120,
	margin: 0,
}));
