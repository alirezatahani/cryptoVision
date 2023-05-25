import styled, { keyframes, css } from "styled-components";

export const CoinUpdater = styled.div<any>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	position: absolute;
	right: 0;
	bottom: 0;

	animation: blink 2s linear;

	@keyframes blink {
		0% {
			background-color: transparent;
		}
		50% {
			background-color: ${(props: any) =>
				Math.sign(props.change) >= 0 ? "#114b2c" : "#8c232d"};
		}
		100% {
			background-color: transparent;
		}
	}
`;
export const CoinContent = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",

	color: theme.palette.text.color,
	transition: "all .2s ease-in-out",
	cursor: "pointer",
	backgroundColor: "#081222",
	borderRadius: "8px 8px 0 0",

	"&:hover": { transform: "scale(1.1)" },
}));

export const CoinDesc = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	height: 100,
	gap: 12,
	flexDirection: "column",
	justifyContent: "center",
	zIndex: 2,
	position: "relative",
}));
export const CoinName = styled.p(({ theme }) => ({
	...theme.typography.table,
	margin: 0,
}));
export const CoinSymbol = styled.p(({ theme }) => ({
	...theme.typography.subtitle1,
	margin: 0,
}));
