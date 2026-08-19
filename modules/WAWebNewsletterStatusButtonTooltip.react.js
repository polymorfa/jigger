__d("WAWebNewsletterStatusButtonTooltip.react", [
	"fbt",
	"WAWebNux",
	"WAWebTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = u.useEffect, d = u.useState, m = 40, p = 24, _ = (m - p) / 2;
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.targetRef, a = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_STATUS_ADD_TOOLTIP), i = a[0], l = a[1], u = d(!0), m = u[0], p = u[1], f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), t[0] = f) : f = t[0];
		var g = o("WAWebTooltip.react").useTooltip({
			alignment: o("WAWebTooltip.react").PopoverAlignment.End,
			buffer: -_,
			element: f,
			includeArrow: !0,
			onClick: function() {
				v(), p(!1);
			},
			position: o("WAWebTooltip.react").PopoverPosition.Bottom,
			target: n,
			testid: "newsletter-status-add-tooltip"
		}), h = g.hideTooltip, y = g.showTooltip, C = g.tooltip, b = g.tooltipIsVisible, v = h, S = i && m, R, L;
		return t[1] !== S || t[2] !== y || t[3] !== n || t[4] !== b || t[5] !== l ? (R = function() {
			S && !b && n.current != null && (y(), l());
		}, L = [
			S,
			b,
			n,
			y,
			l
		], t[1] = S, t[2] = y, t[3] = n, t[4] = b, t[5] = l, t[6] = R, t[7] = L) : (R = t[6], L = t[7]), c(R, L), C;
	}
	l.default = f;
}), 226);
