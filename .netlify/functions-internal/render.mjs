import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["CursedTitan.png","favicon.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-5fb8e766.js","imports":["_app/immutable/start-5fb8e766.js","_app/immutable/chunks/index-b2afd7b0.js","_app/immutable/chunks/singletons-044b6177.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
