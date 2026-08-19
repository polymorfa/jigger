__d("WAWebProgressRing.react", [
	"WAWebL10N",
	"WAWebSpinner.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.color, n = t === void 0 ? "progress" : t, a = e.labelTestid, i = a === void 0 ? "progress_ring_label" : a, l = e.percentage, u = e.size, c = e.stroke, d = c === void 0 ? 3 : c, m = e.testid, p = m === void 0 ? "progress_ring" : m, _ = e.textType;
		return s.jsxs("div", {
			"data-testid": p,
			className: "x6s0dn4 x3nfvp2 xl56j7k x1n2onr6",
			children: [s.jsx(o("WAWebSpinner.react").Spinner, {
				value: l,
				max: 100,
				size: u,
				stroke: d,
				color: n
			}), s.jsx("div", {
				"data-testid": i,
				className: "x6s0dn4 x1ey2m1c x78zum5 x1o0tod xtijo5x xl56j7k x10l6tqk x13vifvy",
				children: s.jsx(r("WDSText.react"), {
					type: _,
					colorName: "contentDefault",
					children: r("WAWebL10N").n(l / 100, void 0, {
						style: "percent",
						maximumFractionDigits: 0
					})
				})
			})]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
