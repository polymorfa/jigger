__d("WAWebQuotedMsgWrapper.react", [
	"fbt",
	"WAWebKeyboardIsKeyActivation",
	"WAWebTabOrder",
	"WDSFocusStateStyles",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		quotedMsg: {
			position: "x1n2onr6",
			display: "x78zum5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundColor: "x16p640f",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			$$css: !0
		},
		quotedMsgRefresh: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		noBorderRadius: {
			borderStartStartRadius: null,
			borderStartEndRadius: null,
			borderEndEndRadius: null,
			borderEndStartRadius: null,
			$$css: !0
		},
		hover: {
			cursor: "x1ypdohk",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		colorBar: {
			flexShrink: "x2lah0s",
			flexGrow: "x1c4vz4f",
			flexBasis: "xdl72j9",
			width: "x51ohtg",
			borderStartStartRadius: "x1liijdw",
			borderEndStartRadius: "x16pgt24",
			$$css: !0
		}
	};
	function p(t) {
		var n = o("react-compiler-runtime").c(30), a = t.authorBackgroundStyle, i = t.children, l = t.clickable, u = t.handleClick, p = t.rootMsg, _ = t.theme, f = d(!1), g = f[0], h = f[1], y = !g && !!p, C = l ? "button" : null, b = _ === "composeBox", v;
		n[0] !== y ? (v = function(t) {
			y && h(!0);
		}, n[0] = y, n[1] = v) : v = n[1];
		var S = v, R;
		n[2] !== g ? (R = function(t) {
			g && h(!1);
		}, n[2] = g, n[3] = R) : R = n[3];
		var L = R, E;
		n[4] !== l || n[5] !== u ? (E = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && l && u();
		}, n[4] = l, n[5] = u, n[6] = E) : E = n[6];
		var k = E, I;
		n[7] !== g || n[8] !== _ ? (I = (e || (e = r("stylex")))(m.quotedMsg, m.quotedMsgRefresh, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner, _ === "composeBox" && m.noBorderRadius, g && m.hover), n[7] = g, n[8] = _, n[9] = I) : I = n[9];
		var T = I, D;
		n[10] !== a ? (D = (e || (e = r("stylex")))(a, m.colorBar), n[10] = a, n[11] = D) : D = n[11];
		var x = D, $;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), n[12] = $) : $ = n[12];
		var P = $, N;
		n[13] === Symbol.for("react.memo_cache_sentinel") ? (N = { className: "xh8yej3 xeuugli" }, n[13] = N) : N = n[13];
		var M = l ? S : null, w = l ? S : null, A = l ? L : null, F = l ? 0 : null, O = b && l ? o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL : void 0, B = l ? u : null, W;
		n[14] !== x ? (W = c.jsx("span", { className: x }), n[14] = x, n[15] = W) : W = n[15];
		var q;
		n[16] !== i || n[17] !== k || n[18] !== T || n[19] !== C || n[20] !== F || n[21] !== O || n[22] !== B || n[23] !== W ? (q = c.jsxs("div", {
			className: T,
			role: C,
			"aria-label": P,
			tabIndex: F,
			"data-tab": O,
			onKeyDown: k,
			onClick: B,
			children: [W, i]
		}), n[16] = i, n[17] = k, n[18] = T, n[19] = C, n[20] = F, n[21] = O, n[22] = B, n[23] = W, n[24] = q) : q = n[24];
		var U;
		return n[25] !== A || n[26] !== q || n[27] !== M || n[28] !== w ? (U = c.jsx("div", babelHelpers.extends({ "data-testid": "quoted-message" }, N, {
			onMouseOver: M,
			onMouseEnter: w,
			onMouseLeave: A,
			children: q
		})), n[25] = A, n[26] = q, n[27] = M, n[28] = w, n[29] = U) : U = n[29], U;
	}
	l.default = p;
}), 226);
