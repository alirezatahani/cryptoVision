import { ADD_STACK, DELETE_STACK } from "./stackTypes";
import { loadState, saveState } from "@utils/localStorage";

const preLoadState = loadState("routes");

const initialState = (preLoadState && JSON.parse(preLoadState)) ?? {
	stack: ["/", "/setting"],
	query: "setting",
};

const useParams = (query: string) => {
	const queryParams = query.split(":");
	return queryParams[queryParams.length - 1];
};

export const stackReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case ADD_STACK:
			const query = useParams(action.payload);

			saveState(
				JSON.stringify({
					...state,
					stack: [...state.stack, action.payload],
					query: query,
				}),
				"routes",
			);

			return {
				...state,
				stack: [...state.stack, action.payload],
				query: query,
			};
		case DELETE_STACK:
			if (state.stack.length === 1) return state;
			const clonStack = [...state.stack];
			clonStack.pop();
			saveState(JSON.stringify({ ...state, stack: clonStack }), "routes");
			return { ...state, stack: clonStack };
		default:
			return state;
	}
};
