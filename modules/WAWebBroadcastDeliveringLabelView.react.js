__d("WAWebBroadcastDeliveringLabelView.react", [
	"fbt",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { label: {
		marginInlineEnd: "x7g7pl8",
		marginInlineStart: "x1sbwfh8",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(3), n = e.isDelivering, a = e.light;
		if (!n) return null;
		var i = a === !0 ? "persistentAlwaysWhite" : "contentDeemphasized", l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[0] = l) : l = t[0];
		var d;
		return t[1] !== i ? (d = u.jsx(r("WDSText.react"), {
			colorName: i,
			type: "Body3",
			xstyle: c.label,
			children: l
		}), t[1] = i, t[2] = d) : d = t[2], d;
	}
	l.default = d;
}), 226);
