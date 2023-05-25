import styled from "styled-components";
//@ts-ignore
export const Container = styled("div")(() => ({
	backgroundColor: "#081222",
	color: "#cecece",
	maxHeight: 100,
	minHeight: 100,
	width: "100%",

	position: "fixed",
	bottom: 0,
	left: 0,

	borderRadius: "8px 8px 0 0",
	zIndex: 9999,
}));
