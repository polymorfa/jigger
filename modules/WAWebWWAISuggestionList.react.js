__d("WAWebWWAISuggestionList.react", [
	"fbt",
	"WAWebWWAIShimmerSkeleton.react",
	"WAWebWWAISuggestionCard.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef;
	function d(e) {
		var t = o("react-compiler-runtime").c(12), n = e.isLoading, a = e.onSelectSuggestion, i = e.suggestions, l = c(null);
		if (n && i.length === 0) {
			var d;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WAWebWWAIShimmerSkeleton.react"), {}), t[0] = d) : d = t[0], d;
		}
		var m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x78zum5 xdt5ytf x1qvou4u" }, t[1] = m) : m = t[1];
		var p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		).toString(), t[2] = p) : p = t[2];
		var _;
		if (t[3] !== a || t[4] !== i) {
			var f;
			t[6] !== a || t[7] !== i.length ? (f = function(t, n) {
				return u.jsx(r("WAWebWWAISuggestionCard.react"), {
					index: n,
					onSelect: a,
					suggestion: t,
					totalCards: i.length
				}, t.requestId + "-" + n);
			}, t[6] = a, t[7] = i.length, t[8] = f) : f = t[8], _ = i.map(f), t[3] = a, t[4] = i, t[5] = _;
		} else _ = t[5];
		var g;
		return t[9] !== p || t[10] !== _ ? (g = u.jsx("div", babelHelpers.extends({}, m, {
			ref: l,
			"data-testid": "wwai_suggestion_list",
			role: "listbox",
			"aria-label": p,
			children: _
		})), t[9] = p, t[10] = _, t[11] = g) : g = t[11], g;
	}
	l.default = d;
}), 226);
