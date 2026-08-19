__d("WAWebCometLiteContactTile.react", [
	"fbt",
	"WAWebDetailImage.react",
	"WAWebName.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 224;
	function d(e) {
		var t = o("react-compiler-runtime").c(23), n = e.index, r = e.item, a = e.onSelect, i;
		if (r.chat != null) {
			var l;
			t[0] !== r.chat ? (l = u.jsx(o("WAWebName.react").Name, {
				chat: r.chat,
				titlify: !0,
				ellipsify: !0
			}), t[0] = r.chat, t[1] = l) : l = t[1], i = l;
		} else if (r.contact != null) {
			var d;
			t[2] !== r.contact ? (d = u.jsx(o("WAWebName.react").Name, {
				contact: r.contact,
				titlify: !0,
				ellipsify: !0
			}), t[2] = r.contact, t[3] = d) : d = t[3], i = d;
		} else {
			var m;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
				/*BTDS*/
				""
			), t[4] = m) : m = t[4], i = m;
		}
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 xdt5ytf x2lah0s x6s0dn4 x1qvou4u xafpxmx x1ypdohk" }, t[5] = p) : p = t[5];
		var _ = "wa-web-lite-contact-" + n, f;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x78zum5 xdt5ytf x6s0dn4 x1qvou4u xjyslct xexx8yu xyri2b x18d9i69 x1c1uobl x1ejq31n x18oe1m7 x1sy0etr xstzfhl xjbqb8w x14ug900 x1ypdohk" }, t[6] = f) : f = t[6];
		var g;
		t[7] !== r || t[8] !== a ? (g = function() {
			return a(r);
		}, t[7] = r, t[8] = a, t[9] = g) : g = t[9];
		var h;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[10] = h) : h = t[10];
		var y;
		t[11] !== r.wid ? (y = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: r.wid,
			size: c,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), t[11] = r.wid, t[12] = y) : y = t[12];
		var C;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x16em4ew x6ikm8r x10wlt62 x2b8uid" }, t[13] = C) : C = t[13];
		var b;
		t[14] !== i ? (b = u.jsx("div", babelHelpers.extends({}, C, { children: i })), t[14] = i, t[15] = b) : b = t[15];
		var v;
		t[16] !== g || t[17] !== y || t[18] !== b ? (v = u.jsxs("button", babelHelpers.extends({ type: "button" }, f, {
			onClick: g,
			"aria-label": h,
			children: [y, b]
		})), t[16] = g, t[17] = y, t[18] = b, t[19] = v) : v = t[19];
		var S;
		return t[20] !== _ || t[21] !== v ? (S = u.jsx("div", babelHelpers.extends({}, p, {
			"data-testid": _,
			role: "listitem",
			children: v
		})), t[20] = _, t[21] = v, t[22] = S) : S = t[22], S;
	}
	l.default = d;
}), 226);
