__d("WAWebBizCtwaAdPreview.react", [
	"WABidi",
	"WAWebBizCtwaAGMUtils",
	"WAWebBizCtwaThumbnailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFlexBox.react",
	"WAWebFlexItem.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebL10N",
	"WAWebMsgGetters",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useMemo, p = {
		paddingBlock48: {
			paddingTop: "x4i7bpe",
			paddingBottom: "x1sgudl8",
			$$css: !0
		},
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, _ = {
		adContainer: {
			borderStartStartRadius: "x1rgw4pv",
			borderStartEndRadius: "x1vjm0to",
			borderEndEndRadius: "xnqoqkk",
			borderEndStartRadius: "x16lu3ki",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1wpzk8y",
			borderInlineEndColor: "xts9ub1",
			borderBottomColor: "xhl97hz",
			borderInlineStartColor: "x16gmtct",
			$$css: !0
		},
		thumbnail: {
			objectFit: "xl1xv1r",
			width: "xh8yej3",
			display: "x78zum5",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			minHeight: "x16ctwrx",
			$$css: !0
		},
		container: {
			width: "x1t0p1hu",
			$$css: !0
		},
		body: {
			marginInlineStart: "x1o1p3th",
			marginInlineEnd: "x1trhqq4",
			$$css: !0
		}
	}, f = 1e3;
	function g(t) {
		var n = o("react-compiler-runtime").c(48), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.automatedGreetingMessage, c = l.ctwaContext, d = l.onClose, m = r("useWAWebUIM")(), g;
		if (n[3] !== c) {
			var h;
			g = (h = c.sourceApp) != null ? h : o("WAWebBizCtwaAGMUtils").getHostnameLabel(c), n[3] = c, n[4] = g;
		} else g = n[4];
		var y = g, C;
		n[5] !== y ? (C = y != null ? y.charAt(0).toUpperCase() + y.slice(1) : null, n[5] = y, n[6] = C) : C = n[6];
		var b = C, v;
		n[7] !== d || n[8] !== m ? (v = function() {
			d(), m == null || m.requestDismiss();
		}, n[7] = d, n[8] = m, n[9] = v) : v = n[9];
		var S = v, R;
		n[10] !== b || n[11] !== S ? (R = b != null ? u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: o("WAWebBizCtwaAGMUtils").getAdSourceLabel(b),
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onCancel: S,
			focusBackOrCancel: !0
		}) : null, n[10] = b, n[11] = S, n[12] = R) : R = n[12];
		var L = R, E;
		n[13] !== b ? (E = b != null ? o("WAWebBizCtwaAGMUtils").getAdImageAlt(b).toString() : "", n[13] = b, n[14] = E) : E = n[14];
		var k = E, I;
		e: {
			if (c.description != null && c.isSuspiciousLink !== !0) {
				var T = c.description, D;
				n[15] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx("div", { className: "xso031l x1q0q8m5 xhl97hz" }), n[15] = D) : D = n[15];
				var x = c.description, $;
				n[16] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x1cy8zhl xkh2ocl x1y1aw1k xf159sx xwib8y2 xmzvs34 x1mzt3pk x126k92a" }, n[16] = $) : $ = n[16];
				var P;
				n[17] !== T ? (P = o("WABidi").bidiDir(T), n[17] = T, n[18] = P) : P = n[18];
				var N;
				n[19] === Symbol.for("react.memo_cache_sentinel") ? (N = r("WAWebL10N").isRTL(), n[19] = N) : N = n[19];
				var M = P === "rtl" !== N, w;
				n[20] !== T ? (w = o("WABidi").bidiDir(T), n[20] = T, n[21] = w) : w = n[21];
				var A;
				n[22] !== T || n[23] !== M || n[24] !== w ? (A = u.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: T,
					textLimit: f,
					dirMismatch: M,
					direction: w,
					inferLinesDirection: !0
				}), n[22] = T, n[23] = M, n[24] = w, n[25] = A) : A = n[25];
				var F;
				n[26] !== c.description || n[27] !== A ? (F = u.jsxs(u.Fragment, { children: [D, u.jsx("div", babelHelpers.extends({ title: x }, $, { children: A }))] }), n[26] = c.description, n[27] = A, n[28] = F) : F = n[28], I = F;
				break e;
			}
			I = null;
		}
		var O = I, B;
		n[29] === Symbol.for("react.memo_cache_sentinel") ? (B = [
			_.container,
			p.paddingBlock48,
			p.paddingInline48
		], n[29] = B) : B = n[29];
		var W;
		n[30] === Symbol.for("react.memo_cache_sentinel") ? (W = [o("WDSPaddings.stylex").wdsPaddings.paddingHor20, _.container], n[30] = W) : W = n[30];
		var q = s.from, U;
		n[31] !== s ? (U = o("WAWebMsgGetters").getIsSentByMe(s), n[31] = s, n[32] = U) : U = n[32];
		var V;
		n[33] !== s.from || n[34] !== c || n[35] !== U || n[36] !== k ? (V = u.jsx(r("WAWebBizCtwaThumbnailImage.react"), {
			context: c,
			xstyle: _.thumbnail,
			alt: k,
			businessWid: q,
			fromMe: U
		}), n[33] = s.from, n[34] = c, n[35] = U, n[36] = k, n[37] = V) : V = n[37];
		var H;
		n[38] !== O || n[39] !== V ? (H = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "padding-no-margin",
			xstyle: B,
			children: u.jsx(r("WAWebFlexItem.react"), {
				justify: "center",
				xstyle: W,
				children: u.jsxs(o("WAWebFlexBox.react").FlexColumn, {
					justify: "center",
					xstyle: _.adContainer,
					testid: "ctwa-ad-drawer-thumbnail",
					children: [V, O]
				})
			})
		}), n[38] = O, n[39] = V, n[40] = H) : H = n[40];
		var G;
		n[41] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(r("WAWebGroupInfoSeparator.react"), {}), n[41] = G) : G = n[41];
		var z;
		n[42] !== H ? (z = u.jsxs(r("WAWebDrawerBody.react"), {
			xstyle: _.body,
			children: [H, G]
		}), n[42] = H, n[43] = z) : z = n[43];
		var j;
		return n[44] !== L || n[45] !== i || n[46] !== z ? (j = u.jsxs(r("WAWebDrawer.react"), {
			theme: "striped",
			ref: i,
			xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingHor0,
			testid: "ctwa-ad-drawer-details",
			children: [L, z]
		}, "ctwa-ad-details-modal"), n[44] = L, n[45] = i, n[46] = z, n[47] = j) : j = n[47], j;
	}
	l.default = g;
}), 98);
