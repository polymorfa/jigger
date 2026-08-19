__d("WAWebVoipWebWasmSampleContainer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WDSIconIcClose.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(4), n = e.children, a = d, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: "tab",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				children: [i, u.jsx("button", {
					onClick: a,
					children: u.jsx(r("WDSIconIcClose.react"), {})
				})]
			})
		}), t[1] = l) : l = t[1];
		var c;
		return t[2] !== n ? (c = u.jsxs(r("WAWebDrawer.react"), {
			theme: "white-bg",
			children: [l, u.jsx(r("WAWebDrawerBody.react"), { children: n })]
		}), t[2] = n, t[3] = c) : c = t[3], c;
	}
	function d() {
		o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
	}
	l.default = c;
}), 226);
