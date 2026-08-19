__d("WAWebDeveloperToolsDBViewerDropdown.react", [
	"WAWebButton.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WDSIconIcArrowDropDown.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef, c = { paddingStart8: {
		paddingInlineStart: "x12w63v0",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.children, a = e.label, i = e.xstyle, l = u(null), d;
		t[0] !== a ? (d = s.jsx(o("WAWebFlex.react").FlexItem, {
			justify: "start",
			align: "center",
			children: a
		}), t[0] = a, t[1] = d) : d = t[1];
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(r("WDSIconIcArrowDropDown.react"), {
			height: 20,
			width: 20,
			xstyle: c.paddingStart8
		}), t[2] = m) : m = t[2];
		var p;
		t[3] !== d ? (p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			justify: "all",
			align: "center",
			grow: 1,
			children: [d, m]
		}), t[3] = d, t[4] = p) : p = t[4];
		var _;
		t[5] !== n || t[6] !== i ? (_ = s.jsx(o("WAWebDeveloperToolsPopoverPill.react").CustomWAWebDropdown, {
			xstyle: i,
			buttonRef: l,
			children: n
		}), t[5] = n, t[6] = i, t[7] = _) : _ = t[7];
		var f;
		return t[8] !== p || t[9] !== _ ? (f = s.jsxs(o("WAWebButton.react").WAWebButtonSecondary, {
			grow: 1,
			ref: l,
			children: [p, _]
		}), t[8] = p, t[9] = _, t[10] = f) : f = t[10], f;
	}
	l.default = d;
}), 98);
