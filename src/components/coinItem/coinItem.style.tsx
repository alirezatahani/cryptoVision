import styled from "styled-components";

export const CoinContent = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: 10,
	borderBottom: "1px solid #333333",
	color: theme.palette.text.color,
	transform: "all 0.5",

	cursor: "pointer",
	"&:hover": {
		backgroundColor: "#3d4856",
		transform: "all 0.5",
	},
}));

export const CoinDesc = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	height: "100%",
	gap: ".5rem",
}));
export const CoinName = styled.p(({ theme }) => ({
	...theme.typography.subtitle1,
	margin: 0,
}));
