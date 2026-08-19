__d("MWThreadPicture.react", [
	"MWReQLCMThreadPictureCustomThreadCommunity.react",
	"MWReQLFacepile.react",
	"MWThreadPictureCustomThread.react",
	"ReQL",
	"ReQLSuspense",
	"getLSMediaThreadPictureUrl",
	"mwCMIsAnyCMThread",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = { borderThemeColor: {
		borderTopColor: "xwi95zy",
		borderInlineEndColor: "x1mlikqm",
		borderBottomColor: "xt1txi7",
		borderInlineStartColor: "x1uir17b",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = e.withCommunityPicture;
		if (n === !0) {
			var a;
			return t[0] !== e ? (a = u.jsx(r("MWReQLCMThreadPictureCustomThreadCommunity.react"), babelHelpers.extends({}, e)), t[0] = e, t[1] = a) : a = t[1], a;
		}
		var i;
		return t[2] !== e ? (i = u.jsx(r("MWThreadPictureCustomThread.react"), babelHelpers.extends({}, e)), t[2] = e, t[3] = i) : i = t[3], i;
	}
	function m(t) {
		var n = o("react-compiler-runtime").c(29), a = t.ariaHidden, l = t.badge, s = t.badgeSize, m = t.onlyAuthoratitiveContacts, p = t.photoSize, _ = t.showBadge, f = t.showFacepiles, g = t.threadKey, h = t.threadTitle, y = t.withAltText, C = t.withCommunityPicture, b = m === void 0 ? !1 : m, v = _ === void 0 ? !0 : _, S = f === void 0 ? !1 : f, R = y === void 0 ? !0 : y, L = C === void 0 ? !1 : C, E = (e || (e = r("useReStore")))(), k;
		n[0] !== E.tables.threads || n[1] !== g ? (k = function() {
			return o("ReQL").fromTableAscending(E.tables.threads, [
				"parentThreadKey",
				"threadPictureUrl",
				"threadPictureUrlExpirationTimestampMs",
				"threadPictureUrlFallback",
				"threadKey",
				"threadName",
				"threadType"
			]).getKeyRange(g);
		}, n[0] = E.tables.threads, n[1] = g, n[2] = k) : k = n[2];
		var I;
		n[3] !== E || n[4] !== g ? (I = [E, g], n[3] = E, n[4] = g, n[5] = I) : I = n[5];
		var T = o("ReQLSuspense").useFirst(k, I, i.id + ":62");
		if (T == null) return null;
		var D;
		n[6] !== T.threadType ? (D = r("mwCMIsAnyCMThread")(T.threadType), n[6] = T.threadType, n[7] = D) : D = n[7];
		var x = D, $ = v && !x, P;
		n[8] !== T ? (P = r("getLSMediaThreadPictureUrl")(T), n[8] = T, n[9] = P) : P = n[9];
		var N = P;
		if (N != null && S !== !0) {
			var M;
			return n[10] !== l || n[11] !== s || n[12] !== p || n[13] !== $ || n[14] !== T || n[15] !== N || n[16] !== R || n[17] !== L ? (M = u.jsx(d, {
				badge: l,
				badgeSize: s,
				borderThemeColor: c.borderThemeColor,
				photoSize: p,
				showBadge: $,
				thread: T,
				threadPictureUrl: N,
				withAltText: R,
				withCommunityPicture: L
			}), n[10] = l, n[11] = s, n[12] = p, n[13] = $, n[14] = T, n[15] = N, n[16] = R, n[17] = L, n[18] = M) : M = n[18], M;
		}
		var w = h != null ? h : T.threadName, A;
		return n[19] !== a || n[20] !== l || n[21] !== s || n[22] !== b || n[23] !== p || n[24] !== $ || n[25] !== w || n[26] !== T || n[27] !== R ? (A = u.jsx(r("MWReQLFacepile.react"), {
			ariaHidden: a,
			badge: l,
			badgeSize: s,
			borderThemeColor: c.borderThemeColor,
			label: w,
			onlyAuthoratitiveContacts: b,
			photoSize: p,
			showBadge: $,
			thread: T,
			withAltText: R
		}), n[19] = a, n[20] = l, n[21] = s, n[22] = b, n[23] = p, n[24] = $, n[25] = w, n[26] = T, n[27] = R, n[28] = A) : A = n[28], A;
	}
	l.default = m;
}), 98);
