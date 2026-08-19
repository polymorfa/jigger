__d("WAWebAddGroupToCommunityDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebNewGroupIcon.react",
	"WAWebRoundShape.react",
	"WAWebText.react",
	"WDSIconWdsIcCommunities.react",
	"react",
	"react-compiler-runtime",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = {
		drawerButtonHeight: {
			minHeight: "x1qafhyn",
			height: "xt7dq6l",
			$$css: !0
		},
		drawerButtonText: {
			textWrap: "xk4td0m",
			$$css: !0
		},
		marginTop16: {
			marginTop: "x98l61r",
			$$css: !0
		},
		marginBottom2: {
			marginBottom: "x13m54ha",
			$$css: !0
		},
		marginBottom16: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function m(t) {
		var n = o("react-compiler-runtime").c(28), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.onAddGroupToExistingCommunity, d = l.onAddGroupToNewCommunity, m = l.onBack, _ = r("useWAWebFocusOnMount")(), f;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
			/*BTDS*/
			""
		), n[3] = f) : f = n[3];
		var g = f, h;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), n[4] = h) : h = n[4];
		var y = h, C;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), n[5] = C) : C = n[5];
		var b = C, v;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), n[6] = v) : v = n[6];
		var S = v, R;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (R = s._(
			/*BTDS*/
			""
		), n[7] = R) : R = n[7];
		var L = R, E;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(r("WAWebRoundShape.react"), { children: c.jsx(o("WAWebNewGroupIcon.react").NewGroupIcon, {}) }), n[8] = E) : E = n[8];
		var k = E, I;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(r("WAWebRoundShape.react"), { children: c.jsx(r("WDSIconWdsIcCommunities.react"), {
			height: 24,
			width: 24
		}) }), n[9] = I) : I = n[9];
		var T = I, D;
		n[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), n[10] = D) : D = n[10];
		var x;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (x = {
			surface: "unknown",
			viewName: "add-group-to-community"
		}, n[11] = x) : x = n[11];
		var $;
		n[12] !== m ? ($ = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: g,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: m
		}), n[12] = m, n[13] = $) : $ = n[13];
		var P;
		n[14] !== d ? (P = c.jsx(p, {
			testId: "new-community-row",
			icon: k,
			onClick: d,
			title: y,
			description: b
		}), n[14] = d, n[15] = P) : P = n[15];
		var N;
		n[16] !== u ? (N = c.jsx(p, {
			testId: "existing-community-row",
			icon: T,
			onClick: u,
			title: S,
			description: L
		}), n[16] = u, n[17] = N) : N = n[17];
		var M;
		n[18] !== P || n[19] !== N ? (M = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), { children: [P, N] }) }), n[18] = P, n[19] = N, n[20] = M) : M = n[20];
		var w;
		n[21] !== i || n[22] !== $ || n[23] !== M ? (w = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "add-group-to-community-drawer",
			tsNavigationData: x,
			children: [$, M]
		}), n[21] = i, n[22] = $, n[23] = M, n[24] = w) : w = n[24];
		var A;
		return n[25] !== _ || n[26] !== w ? (A = c.jsx("div", {
			role: "complementary",
			ref: _,
			tabIndex: -1,
			"aria-label": D,
			children: w
		}), n[25] = _, n[26] = w, n[27] = A) : A = n[27], A;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(13), n = e.description, r = e.icon, a = e.onClick, i = e.testId, l = e.title, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = [
			d.drawerButtonText,
			d.marginTop16,
			d.marginBottom2
		], t[0] = s) : s = t[0];
		var u;
		t[1] !== l ? (u = c.jsx(o("WAWebText.react").WAWebTextTitle, {
			xstyle: s,
			children: l
		}), t[1] = l, t[2] = u) : u = t[2];
		var m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = [d.drawerButtonText, d.marginBottom16], t[3] = m) : m = t[3];
		var p;
		t[4] !== n ? (p = c.jsx(o("WAWebText.react").WAWebTextMuted, {
			xstyle: m,
			children: n
		}), t[4] = n, t[5] = p) : p = t[5];
		var _;
		return t[6] !== r || t[7] !== a || t[8] !== u || t[9] !== p || t[10] !== i || t[11] !== l ? (_ = c.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: i,
			icon: r,
			onClick: a,
			ariaLabel: l,
			xstyle: d.drawerButtonHeight,
			children: [u, p]
		}), t[6] = r, t[7] = a, t[8] = u, t[9] = p, t[10] = i, t[11] = l, t[12] = _) : _ = t[12], _;
	}
	l.default = m;
}), 226);
