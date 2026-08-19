__d("WAWebBoldMutatorComponent.react", [
	"WAWebCopyPasteSelectable.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(6), a = t.children, i = t.selectable, l = t.xstyle, s = a === void 0 ? "" : a, c;
		n[0] !== l ? (c = l != null ? (e || (e = r("stylex")))(l) : void 0, n[0] = l, n[1] = c) : c = n[1];
		var d;
		return n[2] !== s || n[3] !== i || n[4] !== c ? (d = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableStrong, {
			selectable: i,
			appTextTemplate: "*${appText}*",
			className: c,
			children: s
		}), n[2] = s, n[3] = i, n[4] = c, n[5] = d) : d = n[5], d;
	}
	l.default = c;
}), 98);
