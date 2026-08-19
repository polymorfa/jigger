__d("WAWebVoipWebWasmSampleContainer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WDSIconIcClose.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.children, n = function() {
			o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "white-bg",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "tab",
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "all",
					children: [s._(
						/*BTDS*/
						""
					), u.jsx("button", {
						onClick: n,
						children: u.jsx(r("WDSIconIcClose.react"), {})
					})]
				})
			}), u.jsx(r("WAWebDrawerBody.react"), { children: t })]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
