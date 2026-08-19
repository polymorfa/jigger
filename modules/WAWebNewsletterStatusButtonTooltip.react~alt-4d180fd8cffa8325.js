__d("WAWebNewsletterStatusButtonTooltip.react", [
	"fbt",
	"WAWebNux",
	"WAWebTooltip.react",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = u.useEffect, d = u.useState, m = 40, p = 24, _ = (m - p) / 2;
	function f(e) {
		var t = e.targetRef, n = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_STATUS_ADD_TOOLTIP), a = n[0], i = n[1], l = d(!0), u = l[0], m = l[1], p = o("WAWebTooltip.react").useTooltip({
			alignment: o("WAWebTooltip.react").PopoverAlignment.End,
			buffer: -_,
			element: s._(
				/*BTDS*/
				""
			),
			includeArrow: !0,
			onClick: function() {
				f(), m(!1);
			},
			position: o("WAWebTooltip.react").PopoverPosition.Bottom,
			target: t,
			testid: "newsletter-status-add-tooltip"
		}), f = p.hideTooltip, g = p.showTooltip, h = p.tooltip, y = p.tooltipIsVisible, C = a && u;
		return c(function() {
			C && !y && t.current != null && (g(), i());
		}, [
			C,
			y,
			t,
			g,
			i
		]), h;
	}
	l.default = f;
}), 226);
