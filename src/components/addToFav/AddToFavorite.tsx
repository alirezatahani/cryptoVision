import * as React from "react";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { FavoriteActionHandler } from "@redux/favoriteCoins/favoriteAction";
import { AddToFavProps } from "./addToFav_type";
import { FavBtn, StarFilled, StarOutlined } from "./addToFavorite.style";

export const AddToFavoriteSection: React.FC<AddToFavProps> = ({ uuid }) => {
	const { favoriteList } = useAppSelector((state) => state.FavoriteReducer);
	const dispatch = useAppDispatch();

	const favoriteAction = () => {
		dispatch(FavoriteActionHandler(uuid));
	};

	return (
		<FavBtn onClick={() => favoriteAction()}>
			{favoriteList.some((item: {}) => uuid === item) ? (
				<StarFilled />
			) : (
				<StarOutlined />
			)}
		</FavBtn>
	);
};
