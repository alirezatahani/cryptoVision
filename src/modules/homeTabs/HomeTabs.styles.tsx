import { Typography } from "antd";
import styled from "styled-components";

export const Card = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	borderRadius: 8,
	marginTop: 24,

	width: "100%",
	height: "100%",
	minHeight: 300,
}));
export const TabContainer = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	width: 400,
	margin: 0,
}));
export const HomeContent = styled.div(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
}));

export const Tab = styled(Typography.Text)<any>(({ selected, theme }) => ({
	...theme.typography.body1,
	color: selected ? "#fff" : "#ffffff61",
	cursor: "pointer",
}));
export const FlexWrapperBadge = styled.div(({}) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}));
export const Badge = styled.div(({}) => ({
	width: 20,
	height: 20,
	backgroundColor: "#04aa6d",
	textAlign: "center",
	borderRadius: "50%",
	color: "white",
	marginLeft: 6,
	fontSize: 13,
}));
