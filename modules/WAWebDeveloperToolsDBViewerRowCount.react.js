__d("WAWebDeveloperToolsDBViewerRowCount.react", [
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(13), n = e.rowCount, a = r("useWAWebToggle")(!1), i = a[0], l = a[1], u;
		t[0] !== i || t[1] !== l ? (u = function() {
			i || l();
		}, t[0] = i, t[1] = l, t[2] = u) : u = t[2];
		var d = u, m;
		t[3] !== i || t[4] !== l ? (m = function() {
			i && l();
		}, t[3] = i, t[4] = l, t[5] = m) : m = t[5];
		var p = m, _;
		t[6] !== i || t[7] !== n ? (_ = i ? s.jsx(c, { rowCount: String(n) }) : s.jsx(c, { rowCount: r("WAWebL10N").d(n) }), t[6] = i, t[7] = n, t[8] = _) : _ = t[8];
		var f;
		return t[9] !== p || t[10] !== d || t[11] !== _ ? (f = s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onMouseEnter: d,
			onMouseLeave: p,
			children: _
		}), t[9] = p, t[10] = d, t[11] = _, t[12] = f) : f = t[12], f;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n = e.rowCount, r = Number(n) === 1 ? "Row" : "Rows", a;
		return t[0] !== n || t[1] !== r ? (a = s.jsxs(o("WAWebText.react").WAWebTextSmall, { children: [
			n,
			" ",
			r
		] }), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	l.default = u;
}), 98);
