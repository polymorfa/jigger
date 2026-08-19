__d("WAWebBloksWidgetErrorFallback.react", [
	"WAWebFlex.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.error, n = e.fallback, a = n != null && n !== "" ? n : t == null ? void 0 : t.message;
		return s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: a
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
