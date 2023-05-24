export const getCurrentTab = async () => {
	let queryOptions = { active: true };
	//@ts-ignore
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
};

export const injectContentScript = (tab: any) => {
	const { id, url } = tab;
	//@ts-ignore
	chrome.scripting.executeScript({
		target: { tabId: id, allFrames: true },
		files: ["./content.js"],
	});
	console.log(`Loading: ${url}`);
};
