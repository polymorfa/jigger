__d("WAWebVoipSplitButton.react", [
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WAWebVoipSplitButtonSurface",
	"WAWebVoipUiPopoutWindowContext",
	"WDSIconIcArrowDropDown.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = {
		splitButton: {
			backgroundColor: "x1od0jb8",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			cursor: "x1ypdohk",
			height: "x1vqgdyp",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			color: "x17t9dm2",
			$$css: !0
		},
		splitButtonSmall: {
			height: "x10w6t97",
			$$css: !0
		},
		mutedSplitButton: {
			backgroundColor: "x1p8t8ri",
			color: "x1lljey2",
			$$css: !0
		},
		lightSplitButton: {
			backgroundColor: "x1od0jb8",
			borderTopColor: "x18aof6w",
			borderInlineEndColor: "xoz6bk6",
			borderBottomColor: "x1ct8bjc",
			borderInlineStartColor: "x357qen",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			color: "xuwfzo9",
			height: "xt7dq6l",
			$$css: !0
		},
		lightMutedSplitButton: {
			backgroundColor: "x1e6sl3u",
			borderTopColor: "x18aof6w",
			borderInlineEndColor: "xoz6bk6",
			borderBottomColor: "x1ct8bjc",
			borderInlineStartColor: "x357qen",
			color: "x17t9dm2",
			$$css: !0
		},
		lightSplitButtonLeft: {
			height: "xt7dq6l",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1uc92m",
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		lightSplitButtonRight: {
			height: "xt7dq6l",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "x1nzty39",
			paddingInlineStart: "x181vq82",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		splitButtonLeft: {
			borderStartStartRadius: "xt8t1vi",
			borderEndStartRadius: "x15urzxu",
			borderStartEndRadius: "x17un8ov",
			borderEndEndRadius: "x1e7945m",
			height: "x1vqgdyp",
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		splitButtonLeftSmall: {
			height: "x10w6t97",
			paddingInlineEnd: "x1j8ymqv",
			$$css: !0
		},
		splitButtonRight: {
			borderStartStartRadius: "x1bczwif",
			borderEndStartRadius: "x11o6v7j",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			height: "x1vqgdyp",
			width: "xezivpi",
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "x1nzty39",
			$$css: !0
		},
		splitButtonRightSmall: {
			height: "x10w6t97",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		disabled: {
			opacity: "xti2d7y",
			cursor: "x1h6gzvc",
			$$css: !0
		},
		buttonBase: {
			alignItems: "x6s0dn4",
			backgroundColor: "xjbqb8w",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		buttonHover: {
			":hover_backgroundColor": "x1k5h0tu",
			$$css: !0
		},
		focusInner: {
			":focus-visible_outlineOffset": "xyu9ima",
			":focus-visible_outlineWidth": "x100v1rl",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(57), n = e.Icon, a = e.disabled, i = e.disableDropdownButton, l = e.disableMainButton, d = e.dropdownButtonLabel, m = e.dropdownButtonTestId, p = e.dropdownRef, _ = e.isMuted, f = e.mainButtonLabel, g = e.mainButtonTestId, h = e.onDropdownClick, y = e.onMainClick, C = e.surface, b = e.testId, v = e.tooltipOwnerAnchorRef, S = e.tooltipOwnerDocument, R = a === void 0 ? !1 : a, L = i === void 0 ? !1 : i, E = l === void 0 ? !1 : l, k = _ === void 0 ? !1 : _, I = C === void 0 ? o("WAWebVoipSplitButtonSurface").WAWebVoipSplitButtonSurface.CALL_UI : C, T = u(r("WAWebVoipUiPopoutWindowContext")), D = T.isContextInPopoutWindow && !T.isDocPip, x = I === o("WAWebVoipSplitButtonSurface").WAWebVoipSplitButtonSurface.CALL_LINK_LANDING_PAGE, $ = D ? 24 : 20, P;
		t[0] !== R || t[1] !== k ? (P = {
			0: { className: "x3oybdh x11xpdln x13t8fmb xum2xem" },
			2: { className: "x3oybdh x11xpdln x13t8fmb xum2xem xlbypd8" },
			1: { className: "x3oybdh x11xpdln x13t8fmb xum2xem xm9wxh" },
			3: { className: "x3oybdh x11xpdln x13t8fmb xum2xem xlbypd8 xm9wxh" }
		}[!R << 1 | !!k << 0], t[0] = R, t[1] = k, t[2] = P) : P = t[2];
		var N = !D && !x && c.splitButtonSmall, M = x && c.lightSplitButton, w = k && (x ? c.lightMutedSplitButton : c.mutedSplitButton), A = R && c.disabled, F;
		t[3] !== A || t[4] !== N || t[5] !== M || t[6] !== w ? (F = [
			c.splitButton,
			N,
			M,
			w,
			A
		], t[3] = A, t[4] = N, t[5] = M, t[6] = w, t[7] = F) : F = t[7];
		var O = R || E, B = !D && !x && c.splitButtonLeftSmall, W = x && c.lightSplitButtonLeft, q = !R && !E && c.buttonHover, U = !R && E && c.disabled, V;
		t[8] !== B || t[9] !== W || t[10] !== q || t[11] !== U ? (V = [
			c.buttonBase,
			c.splitButtonLeft,
			B,
			W,
			q,
			U,
			c.focusInner
		], t[8] = B, t[9] = W, t[10] = q, t[11] = U, t[12] = V) : V = t[12];
		var H;
		t[13] !== n || t[14] !== $ ? (H = s.jsx(n, {
			height: $,
			width: $
		}), t[13] = n, t[14] = $, t[15] = H) : H = t[15];
		var G;
		t[16] !== f || t[17] !== g || t[18] !== y || t[19] !== O || t[20] !== V || t[21] !== H ? (G = s.jsx(r("WAWebUnstyledButton.react"), {
			testid: g,
			disabled: O,
			onClick: y,
			xstyle: V,
			"aria-label": f,
			children: H
		}), t[16] = f, t[17] = g, t[18] = y, t[19] = O, t[20] = V, t[21] = H, t[22] = G) : G = t[22];
		var z;
		t[23] !== f || t[24] !== G || t[25] !== v || t[26] !== S ? (z = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 1,
			shrink: 0,
			children: s.jsx(r("WDSTooltip.react"), {
				label: f,
				ownerAnchorRef: v,
				ownerDocument: S,
				children: G
			})
		}), t[23] = f, t[24] = G, t[25] = v, t[26] = S, t[27] = z) : z = t[27];
		var j = R || L, K = !D && !x && c.splitButtonRightSmall, Q = x && c.lightSplitButtonRight, X = !R && !L && c.buttonHover, Y = !R && L && c.disabled, J;
		t[28] !== K || t[29] !== Q || t[30] !== X || t[31] !== Y ? (J = [
			c.buttonBase,
			c.splitButtonRight,
			K,
			Q,
			X,
			Y,
			c.focusInner
		], t[28] = K, t[29] = Q, t[30] = X, t[31] = Y, t[32] = J) : J = t[32];
		var Z;
		t[33] !== $ ? (Z = s.jsx(r("WDSIconIcArrowDropDown.react"), {
			height: $,
			width: $
		}), t[33] = $, t[34] = Z) : Z = t[34];
		var ee;
		t[35] !== d || t[36] !== m || t[37] !== p || t[38] !== h || t[39] !== j || t[40] !== J || t[41] !== Z ? (ee = s.jsx(r("WAWebUnstyledButton.react"), {
			testid: m,
			disabled: j,
			onClick: h,
			xstyle: J,
			ref: p,
			"aria-label": d,
			children: Z
		}), t[35] = d, t[36] = m, t[37] = p, t[38] = h, t[39] = j, t[40] = J, t[41] = Z, t[42] = ee) : ee = t[42];
		var te;
		t[43] !== d || t[44] !== ee || t[45] !== v || t[46] !== S ? (te = s.jsx(o("WAWebFlex.react").FlexItem, {
			grow: 0,
			shrink: 0,
			basis: "auto",
			children: s.jsx(r("WDSTooltip.react"), {
				label: d,
				ownerAnchorRef: v,
				ownerDocument: S,
				children: ee
			})
		}), t[43] = d, t[44] = ee, t[45] = v, t[46] = S, t[47] = te) : te = t[47];
		var ne;
		t[48] !== f || t[49] !== F || t[50] !== z || t[51] !== te || t[52] !== b ? (ne = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			role: "group",
			"aria-label": f,
			xstyle: F,
			testid: b,
			children: [z, te]
		}), t[48] = f, t[49] = F, t[50] = z, t[51] = te, t[52] = b, t[53] = ne) : ne = t[53];
		var re;
		return t[54] !== ne || t[55] !== P ? (re = s.jsx("div", babelHelpers.extends({}, P, { children: ne })), t[54] = ne, t[55] = P, t[56] = re) : re = t[56], re;
	}
	l.default = d;
}), 98);
