__d("WAWebRecUnitCardWithViewTracking.react", [
	"WAWebRecUnitCard.react",
	"react",
	"useWAWebLogCardViewOnIntersection"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useRef;
	function c(e) {
		var t = e.cardSeqId, n = e.item, o = e.lastVisibleIndexRef, a = u();
		return r("useWAWebLogCardViewOnIntersection")(a, n.promotionId, t, o, n.impression), s.jsx("div", {
			"data-testid": "rec_unit_card_view_tracking_wrapper",
			ref: a,
			className: "x78zum5 xdt5ytf x1iyjqo2 xkh2ocl",
			children: s.jsx(r("WAWebRecUnitCard.react"), {
				cardSeqId: t,
				item: n
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
