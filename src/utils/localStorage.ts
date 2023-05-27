export const loadState = (name: string = "appState") => {
	try {
		const serialState = localStorage.getItem(name);
		if (serialState === null) {
			return undefined;
		}
		return JSON.parse(serialState);
	} catch (err) {
		return undefined;
	}
};
export const saveState = (state: any, name: string = "appState") => {
	try {
		const serialState = JSON.stringify(state);
		localStorage.setItem(name, serialState);
	} catch (err) {
		console.log(err);
	}
};
