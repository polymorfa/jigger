__d("WAWebCometLiteRecentCallRow.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebClock",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebName.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 72, d = {
		name: {
			fontSize: "x1603h9y",
			lineHeight: "xeqr9p9",
			fontWeight: "xk50ysn",
			color: "x14ug900",
			$$css: !0
		},
		subtitle: {
			columnGap: "x1s70e7g",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(33), n = e.call, a = e.index, i = e.onSelect, l = n.isMissed, m = n.isOutgoing, p = n.isVideo, _ = n.item, f = n.msg, g;
		if (_.chat != null) {
			var h;
			t[0] !== _.chat ? (h = u.jsx(o("WAWebName.react").Name, {
				chat: _.chat,
				titlify: !0,
				ellipsify: !0
			}), t[0] = _.chat, t[1] = h) : h = t[1], g = h;
		} else if (_.contact != null) {
			var y;
			t[2] !== _.contact ? (y = u.jsx(o("WAWebName.react").Name, {
				contact: _.contact,
				titlify: !0,
				ellipsify: !0
			}), t[2] = _.contact, t[3] = y) : y = t[3], g = y;
		} else {
			var C;
			t[4] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
				/*BTDS*/
				""
			), t[4] = C) : C = t[4], g = C;
		}
		var b;
		if (l) {
			var v;
			t[5] !== p ? (v = p ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[5] = p, t[6] = v) : v = t[6], b = v;
		} else if (m) {
			var S;
			t[7] !== p ? (S = p ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[7] = p, t[8] = S) : S = t[8], b = S;
		} else {
			var R;
			t[9] !== p ? (R = p ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			), t[9] = p, t[10] = R) : R = t[10], b = R;
		}
		var L;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "xh8yej3" }, t[11] = L) : L = t[11];
		var E = "wa-web-lite-recent-call-" + a, k;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[12] = k) : k = t[12];
		var I;
		t[13] !== _ || t[14] !== i ? (I = function() {
			return i(_);
		}, t[13] = _, t[14] = i, t[15] = I) : I = t[15];
		var T;
		t[16] !== _.wid ? (T = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: _.wid,
			size: c,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), t[16] = _.wid, t[17] = T) : T = t[17];
		var D = g, x;
		t[18] !== b ? (x = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: b
		}), t[18] = b, t[19] = x) : x = t[19];
		var $;
		t[20] !== f.t ? ($ = o("WAWebClock").Clock.relativeStr(f.t), t[20] = f.t, t[21] = $) : $ = t[21];
		var P;
		t[22] !== $ ? (P = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: $
		}), t[22] = $, t[23] = P) : P = t[23];
		var N;
		t[24] !== x || t[25] !== P ? (N = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: d.subtitle,
			children: [x, P]
		}), t[24] = x, t[25] = P, t[26] = N) : N = t[26];
		var M;
		return t[27] !== g || t[28] !== N || t[29] !== E || t[30] !== I || t[31] !== T ? (M = u.jsx("div", babelHelpers.extends({}, L, {
			role: "listitem",
			children: u.jsx(r("WAWebCellV2.react"), {
				size: "large",
				testid: E,
				ariaLabel: k,
				onClick: I,
				detailLeft: T,
				primary: D,
				primaryXStyle: d.name,
				secondary: N
			})
		})), t[27] = g, t[28] = N, t[29] = E, t[30] = I, t[31] = T, t[32] = M) : M = t[32], M;
	}
	l.default = m;
}), 226);
