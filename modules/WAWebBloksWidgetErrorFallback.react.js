__d("WAWebBloksWidgetErrorFallback.react", [
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(2), n = e.error, a = e.fallback, i = a != null && a !== "" ? a : n == null ? void 0 : n.message, l;
		return t[0] !== i ? (l = s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			children: s.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: i
			})
		}), t[0] = i, t[1] = l) : l = t[1], l;
	}
	l.default = u;
}), 98);
