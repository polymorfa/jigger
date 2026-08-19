__d("WAWebCodeMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = { code: {
		fontFamily: "xgfl6pn",
		$$css: !0
	} };
	function d(t) {
		var n = o("react-compiler-runtime").c(6), a = t.children, i = t.selectable, l = t.xstyle, s = a === void 0 ? "" : a, d;
		n[0] !== l ? (d = (e || (e = r("stylex")))(c.code, l), n[0] = l, n[1] = d) : d = n[1];
		var m;
		return n[2] !== s || n[3] !== i || n[4] !== d ? (m = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableCode, {
			selectable: i,
			appTextTemplate: "```${appText}```",
			className: d,
			children: s
		}), n[2] = s, n[3] = i, n[4] = d, n[5] = m) : m = n[5], m;
	}
	l.default = d;
}), 98);
