__d("WAWebCiphertext.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebPlaceholder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = function(t) {
		o("WAWebExternalLink.react").openExternalLink(t);
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(15), n = e.subtype, r;
		t[0] !== n ? (r = o("WAWebPlaceholder").getPlaceholderDetails(n), t[0] = n, t[1] = r) : r = t[1];
		var a = r, i = a.externalLink, l = a.placeholderIcon, d = a.placeholderMsg, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "xo1mcw5" }, t[2] = m) : m = t[2];
		var p;
		t[3] !== i ? (p = function() {
			c(i != null ? i : "");
		}, t[3] = i, t[4] = p) : p = t[4];
		var _;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[5] = _) : _ = t[5];
		var f;
		t[6] !== p ? (f = u.jsx("span", babelHelpers.extends({}, m, {
			role: "button",
			onClick: p,
			children: _
		})), t[6] = p, t[7] = f) : f = t[7];
		var g = f, h;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "xhslqc4 x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n x1vvkbs" }, t[8] = h) : h = t[8];
		var y;
		t[9] !== l ? (y = l != null ? u.jsx("div", {
			className: "x1okw0bk x18cpw0e xe9ewy2 xf6vk7d",
			children: l
		}) : null, t[9] = l, t[10] = y) : y = t[10];
		var C;
		return t[11] !== g || t[12] !== d || t[13] !== y ? (C = u.jsxs("div", babelHelpers.extends({}, h, { children: [
			y,
			d,
			"\xA0",
			g
		] })), t[11] = g, t[12] = d, t[13] = y, t[14] = C) : C = t[14], C;
	}
	l.default = d;
}), 226);
