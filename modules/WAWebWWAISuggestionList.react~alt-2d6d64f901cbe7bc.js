__d("WAWebWWAISuggestionList.react", [
	"fbt",
	"WAWebWWAIShimmerSkeleton.react",
	"WAWebWWAISuggestionCard.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef;
	function d(e) {
		var t = e.isLoading, n = e.onSelectSuggestion, o = e.suggestions, a = c(null);
		return t && o.length === 0 ? u.jsx(r("WAWebWWAIShimmerSkeleton.react"), {}) : u.jsx("div", {
			className: "x78zum5 xdt5ytf x1qvou4u",
			ref: a,
			"data-testid": "wwai_suggestion_list",
			role: "listbox",
			"aria-label": s._(
				/*BTDS*/
				""
			).toString(),
			children: o.map(function(e, t) {
				return u.jsx(r("WAWebWWAISuggestionCard.react"), {
					index: t,
					onSelect: n,
					suggestion: e,
					totalCards: o.length
				}, e.requestId + "-" + t);
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
