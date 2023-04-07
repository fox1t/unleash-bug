import { startUnleash } from "unleash-client";

async function start() {
	const config = {
		url: "<put the url here>",
		appName: "<put the appName here>",
		customHeaders: {
			Authorization: "<put the auth here>",
		},
	};
	await startUnleash(config);
	console.log("unleash1 started");
	await startUnleash(config);
	console.log("unleash2 started");
}

start();
