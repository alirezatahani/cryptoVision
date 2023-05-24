import styled from "styled-components";
import { StarOutlined as SOut, StarFilled as SFilled } from "@ant-design/icons";

export const FavBtn = styled.div(({}) => ({
	cursor: "pointer",
}));
export const StarFilled = styled(SFilled)(({}) => ({
	fontSize: 24,
	color: "#e4cc00",
}));
export const StarOutlined = styled(SOut)(({}) => ({
	fontSize: 24,
	color: "#ffffff61",
}));
