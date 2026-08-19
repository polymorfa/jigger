__d("MAWEndToEndEncryptionKeysIdentityKeyTextArea.react", [
	"MWXCard.react",
	"MWXText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.identityKey, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { className: "x1t2155t xyamay9 xv54qhq x1l90r2v xf7dkkf" }, t[0] = a) : a = t[0];
		var i;
		return t[1] !== n ? (i = s.jsx(r("MWXCard.react"), {
			background: "base-wash",
			children: s.jsx("div", babelHelpers.extends({}, a, { children: s.jsx(r("MWXText.react"), {
				color: "secondary",
				numberOfLines: 2,
				type: "body3",
				children: n
			}) }))
		}), t[1] = n, t[2] = i) : i = t[2], i;
	}
	l.default = u;
}), 98);
