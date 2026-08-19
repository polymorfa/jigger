__d("useWAWebMetaAiNullStatePrompts", [
	"WAWebGetMetaAiNullStatePromptsAction",
	"WAWebL10N",
	"WAWebMetaAiNullStatePrompts",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useMemo;
	function u() {
		var e = o("react-compiler-runtime").c(4), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = r("WAWebL10N").getLocale(), e[0] = t) : t = e[0];
		var n = t, a, i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = function() {
			return o("WAWebGetMetaAiNullStatePromptsAction").getMetaAiNullStatePromptsAction(n);
		}, i = [n], e[1] = a, e[2] = i) : (a = e[1], i = e[2]);
		var l = r("useWAWebAsync")(a, i), s = l.value, u;
		e: {
			if (s != null && s.length > 0) {
				u = s;
				break e;
			}
			var d;
			e[3] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebMetaAiNullStatePrompts").META_AI_NULL_STATE_PROMPTS.map(c), e[3] = d) : d = e[3], u = d;
		}
		return u;
	}
	function c(e) {
		return {
			display: e.display(),
			query: e.query
		};
	}
	l.default = u;
}), 98);
