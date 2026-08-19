__d("WAWebChatInfoDrawerRow.react", [
	"WAWebChatInfoDrawerBlock.react",
	"WAWebChevronIcon.react",
	"WAWebFlex.react",
	"WAWebText.react",
	"WDSFocusStateStyles",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebIsKeyboardUser"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"icon",
		"secondaryTitle",
		"side",
		"spaced",
		"title",
		"xstyle"
	], s = [
		"containerXstyle",
		"icon",
		"secondaryTitle",
		"side",
		"title",
		"xstyle"
	], u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState, f = {
		paddingTop5: {
			paddingTop: "x123j3cw",
			$$css: !0
		},
		marginInlineEnd14: {
			marginInlineEnd: "x1my54xf",
			$$css: !0
		},
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInline10: {
			marginInlineStart: "x1hm9lzh",
			marginInlineEnd: "x1sa5p1d",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		paddingBottom10: {
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		marginInlineStart14: {
			marginInlineStart: "xcev3uh",
			$$css: !0
		}
	}, g = {
		iconContainer: {
			marginInlineEnd: "x1xegmmw",
			width: "x100vrsf",
			height: "xxk0z11",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		iconContainerRefreshed: {
			width: "x100vrsf",
			height: "x16wdlz0",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			color: "xhslqc4",
			$$css: !0
		},
		contentRefreshed: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			minWidth: "xeuugli",
			overflowWrap: "x1mzt3pk",
			$$css: !0
		},
		drawerSide: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			width: "x14qfxbe",
			$$css: !0
		},
		drawerSideRefreshed: {
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		hoverStateRefreshed: {
			borderStartStartRadius: "x7zqoo0",
			borderStartEndRadius: "xt1g1te",
			borderEndEndRadius: "x1iz9ej4",
			borderEndStartRadius: "x1ga13z8",
			":hover_backgroundColor": "x1n67ipk",
			$$css: !0
		},
		suppressOutlineRefreshed: {
			backgroundColor: "xjbqb8w",
			outlineStyle: "xi5y0ii",
			$$css: !0
		},
		focusOffsetInset: {
			outlineOffset: "x9gec7p",
			outlineWidth: "xgf5m5d",
			$$css: !0
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(2), n = e.title, r;
		return t[0] !== n ? (r = d.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: n }), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(3), n = e.testid, r = e.title, a;
		return t[0] !== n || t[1] !== r ? (a = d.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			testid: n,
			children: r
		}), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r = e.hasSecondaryTitle, a = e.isRefresh, i;
		t[0] !== r || t[1] !== a ? (i = a === !0 ? [
			g.iconContainerRefreshed,
			r === !0 && f.paddingTop5,
			f.marginInlineEnd14
		] : g.iconContainer, t[0] = r, t[1] = a, t[2] = i) : i = t[2];
		var l;
		return t[3] !== n || t[4] !== i ? (l = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: i,
			children: n
		}), t[3] = n, t[4] = i, t[5] = l) : l = t[5], l;
	}
	function b(t) {
		var n = o("react-compiler-runtime").c(27), a, i, l, s, u, c, m;
		n[0] !== t ? (i = t.icon, l = t.secondaryTitle, s = t.side, u = t.spaced, c = t.title, m = t.xstyle, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = u, n[6] = c, n[7] = m) : (a = n[1], i = n[2], l = n[3], s = n[4], u = n[5], c = n[6], m = n[7]);
		var p = u === void 0 ? !1 : u, _;
		n[8] !== i || n[9] !== s || n[10] !== c ? (_ = S({
			icon: i,
			title: c,
			rightSide: s
		}), n[8] = i, n[9] = s, n[10] = c, n[11] = _) : _ = n[11];
		var f = _, g;
		n[12] !== p ? (g = {
			0: {},
			1: { className: "xymharo x2pibh5" }
		}[!!p << 0], n[12] = p, n[13] = g) : g = n[13];
		var h;
		n[14] !== f ? (h = {
			0: {},
			1: { className: "x19wmrak x2pibh5" }
		}[(f != null) << 0], n[14] = f, n[15] = h) : h = n[15];
		var y;
		n[16] !== l || n[17] !== h ? (y = d.jsx("div", babelHelpers.extends({}, h, { children: l })), n[16] = l, n[17] = h, n[18] = y) : y = n[18];
		var C;
		n[19] !== f || n[20] !== g || n[21] !== y ? (C = d.jsxs("div", babelHelpers.extends({}, g, { children: [f, y] })), n[19] = f, n[20] = g, n[21] = y, n[22] = C) : C = n[22];
		var b;
		return n[23] !== a || n[24] !== C || n[25] !== m ? (b = d.jsx(r("WAWebChatInfoDrawerBlock.react"), babelHelpers.extends({ xstyle: m }, a, {
			multiline: !0,
			children: C
		})), n[23] = a, n[24] = C, n[25] = m, n[26] = b) : b = n[26], b;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(44), n, a, i, l, c, m, h;
		t[0] !== e ? (n = e.containerXstyle, i = e.icon, l = e.secondaryTitle, c = e.side, m = e.title, h = e.xstyle, a = babelHelpers.objectWithoutPropertiesLoose(e, s), t[0] = e, t[1] = n, t[2] = a, t[3] = i, t[4] = l, t[5] = c, t[6] = m, t[7] = h) : (n = t[1], a = t[2], i = t[3], l = t[4], c = t[5], m = t[6], h = t[7]);
		var y = a.onClick != null, b = r("useWAWebIsKeyboardUser")(), v = b.isKeyboardUser, S = p(null), R = _(!1), L = R[0], E = R[1], k = y && v && L, I, T;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (I = function() {
			return E(!0);
		}, T = function(t) {
			var e = t.relatedTarget;
			S.current != null && (!(e instanceof Element) || !S.current.contains(e)) && E(!1);
		}, t[8] = I, t[9] = T) : (I = t[8], T = t[9]);
		var D = y && g.suppressOutlineRefreshed, x;
		t[10] !== D || t[11] !== h ? (x = [h, D], t[10] = D, t[11] = h, t[12] = x) : x = t[12];
		var $;
		t[13] !== n || t[14] !== y || t[15] !== k ? ($ = (u || (u = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingHor20, f.paddingBlock10, f.marginInline10, y && g.hoverStateRefreshed, k && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent, k && g.focusOffsetInset, n), t[13] = n, t[14] = y, t[15] = k, t[16] = $) : $ = t[16];
		var P;
		t[17] !== i || t[18] !== l ? (P = i != null ? d.jsx(C, {
			hasSecondaryTitle: l != null,
			isRefresh: !0,
			children: i
		}) : null, t[17] = i, t[18] = l, t[19] = P) : P = t[19];
		var N;
		t[20] !== l ? (N = (u || (u = r("stylex")))([g.contentRefreshed, l == null && [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, f.paddingBottom10]]), t[20] = l, t[21] = N) : N = t[21];
		var M;
		t[22] !== N || t[23] !== m ? (M = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			className: N,
			grow: 1,
			children: m
		}), t[22] = N, t[23] = m, t[24] = M) : M = t[24];
		var w;
		t[25] !== l ? (w = d.jsx(o("WAWebFlex.react").FlexRow, { children: l }), t[25] = l, t[26] = w) : w = t[26];
		var A;
		t[27] !== M || t[28] !== w ? (A = d.jsxs(o("WAWebFlex.react").FlexColumn, {
			grow: 1,
			children: [M, w]
		}), t[27] = M, t[28] = w, t[29] = A) : A = t[29];
		var F;
		t[30] === Symbol.for("react.memo_cache_sentinel") ? (F = [g.drawerSideRefreshed, f.marginInlineStart14], t[30] = F) : F = t[30];
		var O;
		t[31] !== c ? (O = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "end",
			xstyle: F,
			children: c
		}), t[31] = c, t[32] = O) : O = t[32];
		var B;
		t[33] !== A || t[34] !== O || t[35] !== P ? (B = d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "stretch",
			children: [
				P,
				A,
				O
			]
		}), t[33] = A, t[34] = O, t[35] = P, t[36] = B) : B = t[36];
		var W;
		t[37] !== B || t[38] !== $ ? (W = d.jsx("div", babelHelpers.extends({}, $, { children: B })), t[37] = B, t[38] = $, t[39] = W) : W = t[39];
		var q;
		return t[40] !== a || t[41] !== W || t[42] !== x ? (q = d.jsx("div", {
			ref: S,
			role: "none",
			onFocus: I,
			onBlur: T,
			children: d.jsx(r("WAWebChatInfoDrawerBlock.react"), babelHelpers.extends({
				isRefresh: !0,
				multiline: !0,
				xstyle: x
			}, a, { children: W }))
		}), t[40] = a, t[41] = W, t[42] = x, t[43] = q) : q = t[43], q;
	}
	function S(e) {
		var t = e.icon, n = e.rightSide, r = e.title;
		if (t == null && r == null && n == null) return null;
		var a = n != null ? n : "";
		a === "chevron" && (a = d.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
			iconXstyle: g.secondaryColor,
			directional: !0,
			height: 21
		}));
		var i = t != null ? d.jsx(C, { children: t }) : null;
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			children: [
				i,
				d.jsx("div", {
					className: "x1iyjqo2 xs83m0k xeuugli x1mzt3pk x1u7k74",
					children: r
				}),
				d.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "end",
					xstyle: g.drawerSide,
					children: a
				})
			]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.DrawerRowTitleRefreshed = h, l.DrawerRowSecondaryTitleRefreshed = y, l.ChatInfoDrawerRow = b, l.ChatInfoDrawerRowRefreshed = v;
}), 98);
