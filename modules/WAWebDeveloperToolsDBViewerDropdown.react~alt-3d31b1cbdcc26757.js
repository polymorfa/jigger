__d("WAWebDeveloperToolsDBViewerDropdown.react", [
	"WAWebButton.react",
	"WAWebDeveloperToolsPopoverPill.react",
	"WAWebFlex.react",
	"WDSIconIcArrowDropDown.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useRef, c = { paddingStart8: {
		paddingInlineStart: "x12w63v0",
		$$css: !0
	} };
	function d(e) {
		var t = e.children, n = e.label, a = e.xstyle, i = u(null);
		return s.jsxs(o("WAWebButton.react").WAWebButtonSecondary, {
			grow: 1,
			ref: i,
			children: [s.jsxs(o("WAWebFlex.react").FlexRow, {
				justify: "all",
				align: "center",
				grow: 1,
				children: [s.jsx(o("WAWebFlex.react").FlexItem, {
					justify: "start",
					align: "center",
					children: n
				}), s.jsx(r("WDSIconIcArrowDropDown.react"), {
					height: 20,
					width: 20,
					xstyle: c.paddingStart8
				})]
			}), s.jsx(o("WAWebDeveloperToolsPopoverPill.react").CustomWAWebDropdown, {
				xstyle: a,
				buttonRef: i,
				children: t
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
