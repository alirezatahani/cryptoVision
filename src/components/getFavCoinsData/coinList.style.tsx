import styled from "styled-components";

export const CoinListContainer = styled.div(() => ({
	width: "100%",
	"& :first-child": {
		borderRadius: "8px 8px 0 0 ",
	},
	"& :last-child": {
		borderBottom: "none",
		borderRadius: "0 0 8px 8px",
	},
}));
