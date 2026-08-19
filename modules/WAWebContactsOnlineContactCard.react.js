__d("WAWebContactsOnlineContactCard.react", [
	"fbt",
	"WAWebClock",
	"WAWebContactGetters",
	"WAWebDetailImage.react",
	"WAWebPresenceCollection",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState, p = { name: {
		textAlign: "x2b8uid",
		textOverflow: "xlyipyv",
		whiteSpace: "xuxw1ft",
		width: "xh8yej3",
		$$css: !0
	} };
	function _(e) {
		var t = o("react-compiler-runtime").c(33), n = e.contact, a = e.onContactClick, i;
		t[0] !== n.id ? (i = o("WAWebPresenceCollection").PresenceCollection.get(n.id), t[0] = n.id, t[1] = i) : i = t[1];
		var l = i, c = m(l != null && l.isOnline === !0), d = c[0], _ = c[1], g = m(0), h = g[1], y;
		t[2] !== l ? (y = function() {
			_(l != null && l.isOnline === !0);
		}, t[2] = l, t[3] = y) : y = t[3], o("useWAWebListener").useListener(l, "change:isOnline", y);
		var C;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			h(f);
		}, t[4] = C) : C = t[4], o("useWAWebListener").useListener(l, "change:chatstate", C);
		var b;
		t[5] !== n.id || t[6] !== a ? (b = function() {
			a(n.id);
		}, t[5] = n.id, t[6] = a, t[7] = b) : b = t[7];
		var v = b, S;
		t[8] !== n ? (S = function() {
			var e = o("WAWebContactGetters").getNotifyName(n);
			if (e == null) return "";
			var t = e.split(" ");
			return t[0];
		}, t[8] = n, t[9] = S) : S = t[9];
		var R = S, L;
		t[10] !== d || t[11] !== l ? (L = function() {
			if (d) return s._(
				/*BTDS*/
				""
			);
			if (l != null && l.chatstate != null) {
				var e = l.chatstate.t;
				if (e != null && !l.chatstate.deny) return o("WAWebClock").Clock.lastSeenStr(e);
			}
			return s._(
				/*BTDS*/
				""
			);
		}, t[10] = d, t[11] = l, t[12] = L) : L = t[12];
		var E = L, k;
		t[13] !== v ? (k = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), v());
		}, t[13] = v, t[14] = k) : k = t[14];
		var I = k, T;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x6s0dn4 x1ypdohk x78zum5 xdt5ytf x2lah0s x1fu8urw" }, t[15] = T) : T = t[15];
		var D;
		t[16] !== n.id ? (D = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n.id,
			size: 56,
			loadPicture: !0
		}), t[16] = n.id, t[17] = D) : D = t[17];
		var x;
		t[18] !== R ? (x = R(), t[18] = R, t[19] = x) : x = t[19];
		var $;
		t[20] !== x ? ($ = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			xstyle: p.name,
			children: x
		}), t[20] = x, t[21] = $) : $ = t[21];
		var P = d ? "contentActionEmphasized" : "contentDeemphasized", N;
		t[22] !== E ? (N = E(), t[22] = E, t[23] = N) : N = t[23];
		var M;
		t[24] !== P || t[25] !== N ? (M = u.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: P,
			children: N
		}), t[24] = P, t[25] = N, t[26] = M) : M = t[26];
		var w;
		return t[27] !== v || t[28] !== I || t[29] !== $ || t[30] !== M || t[31] !== D ? (w = u.jsxs("div", babelHelpers.extends({}, T, {
			onClick: v,
			onKeyPress: I,
			role: "button",
			tabIndex: 0,
			children: [
				D,
				$,
				M
			]
		})), t[27] = v, t[28] = I, t[29] = $, t[30] = M, t[31] = D, t[32] = w) : w = t[32], w;
	}
	function f(e) {
		return e + 1;
	}
	l.default = _;
}), 226);
