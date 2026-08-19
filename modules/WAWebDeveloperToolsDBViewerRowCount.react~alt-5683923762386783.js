__d("WAWebDeveloperToolsDBViewerRowCount.react", [
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebText.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.rowCount, n = r("useWAWebToggle")(!1), a = n[0], i = n[1], l = function() {
			a || i();
		}, u = function() {
			a && i();
		};
		return s.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			onMouseEnter: l,
			onMouseLeave: u,
			children: a ? s.jsx(c, { rowCount: String(t) }) : s.jsx(c, { rowCount: r("WAWebL10N").d(t) })
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.rowCount;
		return s.jsxs(o("WAWebText.react").WAWebTextSmall, { children: [
			t,
			" ",
			Number(t) === 1 ? "Row" : "Rows"
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = u;
}), 98);
