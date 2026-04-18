import cloudflare from "@astrojs/cloudflare";
import { d1, r2, sandbox } from "@emdash-cms/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
	adapter: cloudflare({ inspectorPort: false, prerenderEnvironment: "node" }),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			sandboxRunner: sandbox(),
			marketplace: "https://marketplace.emdashcms.com",
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Fraunces",
			cssVariable: "--font-display",
			weights: [500, 600, 700],
			fallbacks: ["serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Lexend Zetta",
			cssVariable: "--font-ui",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
