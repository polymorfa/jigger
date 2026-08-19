__d("WAWebGetMetaAiNullStatePromptsJob", [
	"WAJobOrchestratorTypes",
	"WALogger",
	"WAWebFetchMetaAiNullStatePromptsGQL",
	"WAWebMetaAiNullStatePromptsCache",
	"WAWebOrchestratorNonPersistedJob"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n, r) {
		return o("WAWebOrchestratorNonPersistedJob").createNonPersistedJob("getMetaAiNullStatePrompts", async function(t) {
			var n = t.expConfig, r = t.locale, a = t.nullStateSource, i = {
				locale: r,
				nullStateSource: a,
				expConfig: n
			}, l = await o("WAWebMetaAiNullStatePromptsCache").MetaAiNullStatePromptsCache.get(i);
			if (l != null && l.length > 0) return l;
			var u = await o("WAWebFetchMetaAiNullStatePromptsGQL").fetchMetaAiNullStatePrompts(r, a, n);
			return u.type === "success" ? (u.value.length > 0 ? o("WAWebMetaAiNullStatePromptsCache").MetaAiNullStatePromptsCache.set(i, u.value) : o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[getMetaAiNullStatePrompts] GQL returned empty prompt list"]))), u.value) : (o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[getMetaAiNullStatePrompts] GQL fetch failed"]))), []);
		}, { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION }).waitUntilCompleted({
			locale: t,
			nullStateSource: n,
			expConfig: r
		});
	}
	l.getMetaAiNullStatePrompts = u;
}), 98);
