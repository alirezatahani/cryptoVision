import React, { useState } from "react";
import { useAppSelector } from "@hooks/hooks";
// import { FavoriteCoins } from "@modules/index";
import { GetCoinsData } from "@modules/getCoinsData";
// import FavLengthBadge from "./FavLengthBadge";
import { tabs, TabsProps } from "./utils/tabs";
import { TabContainer, Tab, HomeContent, Card } from "./HomeTabs.styles";

const HomeTabs = () => {
	const { sign, value } = useAppSelector((state) => state.referenceCurrency);
	const timePeriod = "3h";

	const [limit, setLimit] = useState(5);
	const [selectedTab, setSelectedTab] = useState(1);

	return (
		<React.Fragment>
			<TabContainer>
				{tabs.map((tab: TabsProps) => (
					<Tab
						strong
						selected={tab.key === selectedTab}
						onClick={() => setSelectedTab(tab.key)}
						key={tab.key}
					>
						{tab.name}
					</Tab>
				))}
			</TabContainer>
			<HomeContent>
				{tabs.map((tab: TabsProps) =>
					tab.key === selectedTab ? (
						<Card key={tab.key}>
							<GetCoinsData
								queries={{
									...tab.queries,
									limit,
									timePeriod,
								}}
								currencySign={sign}
							/>
						</Card>
					) : null,
				)}
			</HomeContent>
		</React.Fragment>
	);
};

export default HomeTabs;
