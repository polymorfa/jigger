__d("WAWebWWAIPrivateProcessingBadge.react", [
	"fbt",
	"WAWebLockIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.testid, a = n === void 0 ? "wwai_private_processing_badge" : n, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x78zum5 x1q0g3np x6s0dn4 x1trrmfo" }, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "xhslqc4 x78zum5 x6s0dn4" }, t[1] = l) : l = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = u.jsx("span", babelHelpers.extends({}, l, {
			"aria-hidden": "true",
			children: u.jsx(o("WAWebLockIcon.react").LockIcon, {})
		})), t[2] = c) : c = t[2];
		var d;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body3",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = d) : d = t[3];
		var m;
		return t[4] !== a ? (m = u.jsxs("div", babelHelpers.extends({}, i, {
			"data-testid": a,
			children: [c, d]
		})), t[4] = a, t[5] = m) : m = t[5], m;
	}
	l.default = c;
}), 226);
