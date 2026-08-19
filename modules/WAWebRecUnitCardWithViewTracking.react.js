__d("WAWebRecUnitCardWithViewTracking.react", [
	"WAWebRecUnitCard.react",
	"react",
	"react-compiler-runtime",
	"useWAWebLogCardViewOnIntersection"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.cardSeqId, a = e.item, i = e.lastVisibleIndexRef, l = u();
		r("useWAWebLogCardViewOnIntersection")(l, a.promotionId, n, i, a.impression);
		var c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x78zum5 xdt5ytf x1iyjqo2 xkh2ocl" }, t[0] = c) : c = t[0];
		var d;
		return t[1] !== n || t[2] !== a ? (d = s.jsx("div", babelHelpers.extends({
			"data-testid": "rec_unit_card_view_tracking_wrapper",
			ref: l
		}, c, { children: s.jsx(r("WAWebRecUnitCard.react"), {
			cardSeqId: n,
			item: a
		}) })), t[1] = n, t[2] = a, t[3] = d) : d = t[3], d;
	}
	l.default = c;
}), 98);
