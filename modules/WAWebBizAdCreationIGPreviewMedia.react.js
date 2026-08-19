__d("WAWebBizAdCreationIGPreviewMedia.react", [
	"fbt",
	"WAWebBizAdCreationPreviewMediaRenderers.react",
	"WAWebChevronIcon.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 300, d = {
		chevronButtonIcon: {
			color: "x17t9dm2",
			$$css: !0
		},
		chevronButtonIconFlipped: {
			transform: "xpk2tj9",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(9), n = e.currentIndex, a = e.media, i = e.totalCount, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x2lah0s x6ikm8r x10wlt62 x1n2onr6" }, t[0] = l) : l = t[0];
		var s;
		t[1] !== a ? (s = u.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").SingleMediaPreview, { media: a }), t[1] = a, t[2] = s) : s = t[2];
		var c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = { className: "x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu xffp2at x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x10l6tqk x1ctoq22 xhtitgo" }, t[3] = c) : c = t[3];
		var d = n + 1 + "/" + i, m;
		t[4] !== d ? (m = u.jsx("div", babelHelpers.extends({}, c, { children: u.jsx(r("WDSText.react"), {
			colorName: "contentInverse",
			type: "Body3Emphasized",
			children: d
		}) })), t[4] = d, t[5] = m) : m = t[5];
		var p;
		return t[6] !== s || t[7] !== m ? (p = u.jsxs("div", babelHelpers.extends({}, l, { children: [s, m] })), t[6] = s, t[7] = m, t[8] = p) : p = t[8], p;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n = e.currentIndex, r = e.medias, a = e.setCurrentIndex;
		if (r == null || r.length === 0) return null;
		var i;
		t[0] !== r.length || t[1] !== a ? (i = function() {
			a(function(e) {
				return e > 0 ? e - 1 : r.length - 1;
			});
		}, t[0] = r.length, t[1] = a, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] !== r.length || t[4] !== a ? (c = function() {
			a(function(e) {
				return e < r.length - 1 ? e + 1 : 0;
			});
		}, t[3] = r.length, t[4] = a, t[5] = c) : c = t[5];
		var p = c, _ = n === 0, f = n === r.length - 1, g = r.length > 1 && !_, h = r.length > 1 && !f, y;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x2lah0s x6ikm8r x10wlt62 x1n2onr6" }, t[6] = y) : y = t[6];
		var C = r[n], b;
		t[7] !== n || t[8] !== r.length || t[9] !== C ? (b = u.jsx(m, {
			currentIndex: n,
			media: C,
			totalCount: r.length
		}), t[7] = n, t[8] = r.length, t[9] = C, t[10] = b) : b = t[10];
		var v;
		t[11] !== l || t[12] !== g ? (v = g ? u.jsx("button", {
			className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv x1ixa496",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: l,
			children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				directional: !0,
				height: 24,
				iconXstyle: [d.chevronButtonIcon, d.chevronButtonIconFlipped],
				width: 24
			})
		}) : null, t[11] = l, t[12] = g, t[13] = v) : v = t[13];
		var S;
		t[14] !== p || t[15] !== h ? (S = h ? u.jsx("button", {
			className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv xffp2at",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: p,
			children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				directional: !0,
				height: 24,
				iconXstyle: d.chevronButtonIcon,
				width: 24
			})
		}) : null, t[14] = p, t[15] = h, t[16] = S) : S = t[16];
		var R;
		return t[17] !== b || t[18] !== v || t[19] !== S ? (R = u.jsxs("div", babelHelpers.extends({}, y, { children: [
			b,
			v,
			S
		] })), t[17] = b, t[18] = v, t[19] = S, t[20] = R) : R = t[20], R;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(29), n = e.currentIndex, a = e.medias, i = e.setCurrentIndex, l = n === 0, c = n === a.length - 1, m = !l, p = !c, _;
		t[0] !== a.length || t[1] !== i ? (_ = function() {
			i(function(e) {
				return e > 0 ? e - 1 : a.length - 1;
			});
		}, t[0] = a.length, t[1] = i, t[2] = _) : _ = t[2];
		var f = _, g;
		t[3] !== a.length || t[4] !== i ? (g = function() {
			i(function(e) {
				return e < a.length - 1 ? e + 1 : 0;
			});
		}, t[3] = a.length, t[4] = i, t[5] = g) : g = t[5];
		var h = g, y = a[n], C, b, v;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x2lah0s x6ikm8r x10wlt62 x1n2onr6" }, b = { className: "x1vd4hg5 x6ikm8r x10wlt62" }, v = { className: "x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu xffp2at x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x10l6tqk x1ctoq22 xhtitgo" }, t[6] = C, t[7] = b, t[8] = v) : (C = t[6], b = t[7], v = t[8]);
		var S = n + 1, R;
		t[9] !== a.length || t[10] !== S ? (R = u.jsx("div", babelHelpers.extends({}, v, { children: u.jsxs(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body3",
			children: [
				S,
				"/",
				a.length
			]
		}) })), t[9] = a.length, t[10] = S, t[11] = R) : R = t[11];
		var L, E;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x5yr21d xl1xv1r xh8yej3" }, E = s._(
			/*BTDS*/
			""
		), t[12] = L, t[13] = E) : (L = t[12], E = t[13]);
		var k = typeof y == "string" ? y : "", I;
		t[14] !== k ? (I = u.jsx("img", babelHelpers.extends({}, L, {
			alt: E,
			src: k
		})), t[14] = k, t[15] = I) : I = t[15];
		var T;
		t[16] !== I || t[17] !== R ? (T = u.jsxs("div", babelHelpers.extends({}, b, { children: [R, I] })), t[16] = I, t[17] = R, t[18] = T) : T = t[18];
		var D;
		t[19] !== f || t[20] !== m ? (D = m ? u.jsx("button", {
			className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv x1ixa496",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: f,
			children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				directional: !0,
				height: 24,
				iconXstyle: [d.chevronButtonIcon, d.chevronButtonIconFlipped],
				width: 24
			})
		}) : null, t[19] = f, t[20] = m, t[21] = D) : D = t[21];
		var x;
		t[22] !== h || t[23] !== p ? (x = p ? u.jsx("button", {
			className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv xffp2at",
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: h,
			children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
				directional: !0,
				height: 24,
				iconXstyle: d.chevronButtonIcon,
				width: 24
			})
		}) : null, t[22] = h, t[23] = p, t[24] = x) : x = t[24];
		var $;
		return t[25] !== T || t[26] !== D || t[27] !== x ? ($ = u.jsxs("div", babelHelpers.extends({}, C, { children: [
			T,
			D,
			x
		] })), t[25] = T, t[26] = D, t[27] = x, t[28] = $) : $ = t[28], $;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(22), n = e.currentIndex, r = e.medias, a = e.setCurrentIndex, i = e.thumbnailUrl, l = e.videoPosterUrl, c = e.videoUrl;
		if (c != null) {
			var d, m, f;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x2lah0s x6ikm8r x10wlt62" }, m = { className: "x1vd4hg5 x6ikm8r x10wlt62" }, f = { className: "x5yr21d x19kjcj4 xh8yej3" }, t[0] = d, t[1] = m, t[2] = f) : (d = t[0], m = t[1], f = t[2]);
			var y;
			return t[3] !== l || t[4] !== c ? (y = u.jsx("div", babelHelpers.extends({}, d, { children: u.jsx("div", babelHelpers.extends({}, m, { children: u.jsx("video", babelHelpers.extends({}, f, {
				autoPlay: !0,
				loop: !0,
				muted: !0,
				playsInline: !0,
				poster: l,
				src: c
			})) })) })), t[3] = l, t[4] = c, t[5] = y) : y = t[5], y;
		}
		if (r != null && r.length > 0) {
			if (r.length === 1) {
				var C = r[0], b;
				t[6] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x2lah0s x6ikm8r x10wlt62" }, t[6] = b) : b = t[6];
				var v;
				return t[7] !== C ? (v = u.jsx("div", babelHelpers.extends({}, b, { children: typeof C == "string" ? u.jsx("div", {
					className: "x1vd4hg5 x6ikm8r x10wlt62",
					children: u.jsx("img", {
						className: "x5yr21d xl1xv1r xh8yej3",
						alt: s._(
							/*BTDS*/
							""
						),
						src: C
					})
				}) : u.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").SingleMediaPreview, { media: C }) })), t[7] = C, t[8] = v) : v = t[8], v;
			}
			var S = r.every(h);
			if (S) {
				var R;
				return t[9] !== n || t[10] !== r || t[11] !== a ? (R = u.jsx(_, {
					currentIndex: n,
					medias: r,
					setCurrentIndex: a
				}), t[9] = n, t[10] = r, t[11] = a, t[12] = R) : R = t[12], R;
			}
			var L;
			t[13] !== r ? (L = r.filter(g), t[13] = r, t[14] = L) : L = t[14];
			var E = L, k;
			return t[15] !== E || t[16] !== n || t[17] !== a ? (k = u.jsx(p, {
				currentIndex: n,
				medias: E,
				setCurrentIndex: a
			}), t[15] = E, t[16] = n, t[17] = a, t[18] = k) : k = t[18], k;
		}
		var I;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x2lah0s x6ikm8r x10wlt62" }, t[19] = I) : I = t[19];
		var T;
		return t[20] !== i ? (T = u.jsx("div", babelHelpers.extends({}, I, { children: u.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").PlaceholderMediaPreview, { thumbnailUrl: i }) })), t[20] = i, t[21] = T) : T = t[21], T;
	}
	function g(e) {
		return typeof e != "string";
	}
	function h(e) {
		return typeof e == "string";
	}
	l.MediaPreviewRow = f;
}), 226);
