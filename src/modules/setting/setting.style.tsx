import styled from "styled-components";

export const Container = styled.div(() => ({
	backgroundColor: "#1f2022",
	color: "#cecece",
	padding: 24,
}));
export const Wrapper = styled.div(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
}));
export const Text = styled.span(({ theme }) => ({
	...theme.typography.subtitle1,
	width: 400,
	color: "#ffffff73",
}));
