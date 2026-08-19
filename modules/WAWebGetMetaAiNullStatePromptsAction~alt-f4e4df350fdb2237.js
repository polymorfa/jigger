__d("WAWebGetMetaAiNullStatePromptsAction", ["WALogger", "WAWebGetMetaAiNullStatePromptsJob"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = "LANDING_PAGE", c = null;
	async function d(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[bot][getMetaAiNullStatePromptsAction] Start"])));
		var n = await o("WAWebGetMetaAiNullStatePromptsJob").getMetaAiNullStatePrompts(t, u, c);
		return o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[bot][getMetaAiNullStatePromptsAction] End"]))), n.map(function(e) {
			return {
				display: e.suggestion,
				query: e.query
			};
		});
	}
	l.getMetaAiNullStatePromptsAction = d;
}), 98);
