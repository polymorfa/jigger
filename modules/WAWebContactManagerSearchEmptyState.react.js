__d("WAWebContactManagerSearchEmptyState.react", [
	"fbt",
	"WAWebSearchRefreshedThinIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.testid, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x5yr21d x1qvou4u" }, t[0] = a) : a = t[0];
		var i = n != null ? n : "customer-manager-search-empty", l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xhslqc4" }, t[1] = l) : l = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx("div", babelHelpers.extends({}, l, {
			"aria-hidden": !0,
			children: u.jsx(o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon, {})
		})), t[2] = c) : c = t[2];
		var d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = d) : d = t[3];
		var m;
		return t[4] !== i ? (m = u.jsxs("div", babelHelpers.extends({}, a, {
			role: "status",
			"aria-live": "polite",
			"data-testid": i,
			children: [c, d]
		})), t[4] = i, t[5] = m) : m = t[5], m;
	}
	l.default = c;
}), 226);
