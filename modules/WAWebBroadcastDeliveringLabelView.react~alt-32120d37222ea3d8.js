__d("WAWebBroadcastDeliveringLabelView.react", [
	"fbt",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { label: {
		marginInlineEnd: "x7g7pl8",
		marginInlineStart: "x1sbwfh8",
		$$css: !0
	} };
	function d(e) {
		var t = e.isDelivering, n = e.light;
		return t ? u.jsx(r("WDSText.react"), {
			colorName: n === !0 ? "persistentAlwaysWhite" : "contentDeemphasized",
			type: "Body3",
			xstyle: c.label,
			children: s._(
				/*BTDS*/
				""
			)
		}) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
