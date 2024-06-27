import { sveltePreprocess } from "svelte-preprocess"
import adapter from "@sveltejs/adapter-auto"

/** @type {import("@sveltejs/kit").Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		preserve: ["ld+json"],
		scss: {
			includePaths: ["src"],
			prependData: `
				@import "src/lib/scss/_variables.scss";
				@import "src/lib/scss/_mixins.scss";
			`
		}
	}),

	kit: {
		adapter: adapter()
	}
}

export default config
