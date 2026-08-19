__d("WAWebWindowsBrokenHybrid2559ButterBar.react", [
	"fbt",
	"WAWebModalManager",
	"WAWebWindowsBrokenHybrid2559Modal.react",
	"WDSBanner.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x1380le5 xefnzgg x1uvdrpn x14mko6t" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx("div", babelHelpers.extends({}, t, { children: u.jsx(r("WDSBanner.react"), {
			type: "warning",
			title: s._(
				/*BTDS*/
				""
			),
			body: s._(
				/*BTDS*/
				""
			),
			actionText: s._(
				/*BTDS*/
				""
			),
			onAction: d
		}) })), e[1] = n) : n = e[1], n;
	}
	function d() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebWindowsBrokenHybrid2559Modal.react"), {}));
	}
	l.default = c;
}), 226);
