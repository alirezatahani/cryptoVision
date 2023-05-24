import * as React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "@utils/router";
import { BackBtnContainer } from "./backButton.style";

export const BackButton = () => {
	const { goBack } = useRouter();
	return (
		<BackBtnContainer onClick={() => goBack()}>
			<ArrowLeftOutlined style={{ color: "red" }} />
			<span>GoBack</span>
		</BackBtnContainer>
	);
};
