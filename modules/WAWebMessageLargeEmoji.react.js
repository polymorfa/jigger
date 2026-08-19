__d("WAWebMessageLargeEmoji.react", [
	"WAWebAssetLoaderDpiChangeDispatch",
	"WAWebCopyPasteSelectable.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiConst",
	"WAWebImg.react",
	"WAWebImgPlaceholderConst",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebDevicePixelRatio"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useEffect, p = c.useState, _ = "x1bwj0ef-B", f = {
		highRes: {
			backgroundImage: "x18o3ruo",
			cursor: "x1ed109x",
			display: "x1rg5ohu",
			pointerEvents: "x47corl",
			$$css: !0
		},
		mediumLowRes: {
			height: "x1gr386z",
			marginTop: "xr9ek0c",
			marginInlineEnd: "xnnr8r",
			marginBottom: "xjpr12u",
			marginInlineStart: "xwklpps",
			transform: "x1jxq6s",
			width: "x1pj3sps",
			$$css: !0
		},
		mediumHighRes: {
			height: "xivd9fe",
			width: "xvf2vmp",
			$$css: !0
		},
		largeLowRes: {
			height: "x1gr386z",
			marginTop: "x1xmf6yo",
			marginInlineEnd: "x1xegmmw",
			marginBottom: "x1e56ztr",
			marginInlineStart: "x13fj5qh",
			transform: "x1o8luej",
			width: "x1pj3sps",
			$$css: !0
		},
		largeHighRes: {
			height: "x5okue4",
			width: "xn52ylp",
			$$css: !0
		},
		xlargeLowRes: {
			height: "x1gr386z",
			marginTop: "x1hmvnq2",
			marginInlineEnd: "x1my54xf",
			marginBottom: "x1u7kmwd",
			marginInlineStart: "xcev3uh",
			transform: "xvfukp0",
			width: "x1pj3sps",
			$$css: !0
		},
		xlargeHighRes: {
			height: "x25f8je",
			width: "x1fkfyby",
			$$css: !0
		},
		xlarge60LowRes: {
			marginTop: "x1sy10c2",
			marginInlineEnd: "x3aesyq",
			marginBottom: "xieb3on",
			marginInlineStart: "xqsn43r",
			transform: "xzo5y6v",
			$$css: !0
		},
		xlarge60HighRes: {
			height: "x13gmerm",
			width: "x1rzkp0p",
			$$css: !0
		},
		invisible: {
			insetInlineStart: "x1o0tod",
			position: "x10l6tqk",
			top: "x13vifvy",
			visibility: "xlshs6z",
			$$css: !0
		},
		animation: {
			flexBasis: "xdl72j9",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			position: "x1n2onr6",
			$$css: !0
		},
		heartbeat: {
			animationDirection: "xpz12be",
			animationDuration: "xxkxylk",
			animationIterationCount: "xa4qsjk",
			animationName: "xsh9q95",
			animationTimingFunction: "xa3vuyk",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			position: "x10l6tqk",
			top: "x13vifvy",
			transform: "x1jec706",
			transformOrigin: "x1al4vs7",
			$$css: !0
		},
		fallback: {
			alignItems: "x6s0dn4",
			display: "x3nfvp2",
			fontFamily: "x19la9d6",
			justifyContent: "xl56j7k",
			lineHeight: "xo5v014",
			$$css: !0
		},
		fallbackMedium: {
			fontSize: "xsopvxa",
			$$css: !0
		},
		fallbackLarge: {
			fontSize: "x26jni6",
			$$css: !0
		},
		fallbackXlarge: {
			fontSize: "xj2owi6",
			$$css: !0
		},
		fallbackXlarge60: {
			fontSize: "x1ydc4jh",
			$$css: !0
		}
	};
	function g(t) {
		var n = o("react-compiler-runtime").c(52), a = t.emoji, i = t.size, l = t.animation, s = t.element, c = t.selectable, d = t.xstyle, _ = i === void 0 ? o("WAWebEmojiConst").LargeEmojiSize.MEDIUM : i, g = l === void 0 ? !1 : l, h = s === void 0 ? "div" : s, y = r("useWAWebDevicePixelRatio")(), C;
		n[0] !== t.emoji ? (C = function() {
			var e, n = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations((e = o("WAWebEmoji").EmojiUtil.normalizeEmoji(t.emoji)) != null ? e : t.emoji), r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
			return !!(r != null && o("WAWebEmoji").EmojiUtil.isGlyphCached(r));
		}, n[0] = t.emoji, n[1] = C) : C = n[1];
		var b = C, v = p(b), S = v[0], R = v[1];
		o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled"), o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
		var L;
		if (n[2] !== a) {
			var E;
			L = (E = o("WAWebEmoji").EmojiUtil.normalizeEmoji(a)) != null ? E : a, n[2] = a, n[3] = L;
		} else L = n[3];
		var k = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations(L), I;
		n[4] !== b ? (I = function() {
			R(b());
		}, n[4] = b, n[5] = I) : I = n[5];
		var T;
		n[6] !== b || n[7] !== y ? (T = [y, b], n[6] = b, n[7] = y, n[8] = T) : T = n[8], m(I, T);
		var D = function() {
			var e = o("WAWebEmoji").EmojiUtil.getGlyphId(k);
			e != null && o("WAWebEmoji").EmojiUtil.markGlyphCached(e), R(!0);
		}, x, $, P;
		_ === o("WAWebEmojiConst").LargeEmojiSize.LARGE ? (x = f.largeHighRes, $ = f.largeLowRes, P = f.fallbackLarge) : _ === o("WAWebEmojiConst").LargeEmojiSize.XLARGE ? (x = f.xlargeHighRes, $ = f.xlargeLowRes, P = f.fallbackXlarge) : _ === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60 ? (x = f.xlarge60HighRes, $ = f.xlarge60LowRes, P = f.fallbackXlarge60) : (x = f.mediumHighRes, $ = f.mediumLowRes, P = f.fallbackMedium);
		var N;
		_ === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60 ? N = 160 : _ === o("WAWebEmojiConst").LargeEmojiSize.XLARGE || r("WAWebAssetLoaderDpiChangeDispatch").currentRes === "high" ? N = 64 : N = 40;
		var M = o("WAWebEmoji").EmojiUtil.getGlyphPath(k, N);
		if (M == null) {
			var w;
			n[9] !== P || n[10] !== d ? (w = (e || (e = r("stylex"))).props(f.fallback, P, d), n[9] = P, n[10] = d, n[11] = w) : w = n[11];
			var A;
			return n[12] !== a || n[13] !== w ? (A = u.jsx("span", babelHelpers.extends({}, w, { children: a })), n[12] = a, n[13] = w, n[14] = A) : A = n[14], A;
		}
		if (S && g) {
			var F = h, O;
			n[15] !== d ? (O = (e || (e = r("stylex")))(f.animation, d), n[15] = d, n[16] = O) : O = n[16];
			var B;
			n[17] !== x ? (B = (e || (e = r("stylex")))(f.highRes, x), n[17] = x, n[18] = B) : B = n[18];
			var W = !!c, q;
			n[19] !== a || n[20] !== B || n[21] !== W ? (q = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
				alt: a,
				className: B,
				draggable: !1,
				plainText: a,
				selectable: W,
				src: o("WAWebImgPlaceholderConst").ONE_BY_ONE_TRANS_GIF
			}), n[19] = a, n[20] = B, n[21] = W, n[22] = q) : q = n[22];
			var U;
			n[23] !== x ? (U = (e || (e = r("stylex")))(f.highRes, x, f.heartbeat), n[23] = x, n[24] = U) : U = n[24];
			var V;
			n[25] !== M || n[26] !== U ? (V = u.jsx(r("WAWebImg.react"), {
				className: U,
				draggable: !1,
				selectable: !1,
				src: M
			}), n[25] = M, n[26] = U, n[27] = V) : V = n[27];
			var H;
			return n[28] !== F || n[29] !== q || n[30] !== V || n[31] !== O ? (H = u.jsxs(F, {
				className: O,
				children: [q, V]
			}), n[28] = F, n[29] = q, n[30] = V, n[31] = O, n[32] = H) : H = n[32], H;
		}
		var G;
		n[33] !== k || n[34] !== S || n[35] !== $ || n[36] !== c || n[37] !== d ? (G = S ? void 0 : u.jsx(r("WAWebEmoji.react"), {
			DEPRECATED_className: (e || (e = r("stylex")))($),
			emoji: k,
			selectable: c,
			xstyle: d
		}, "low-res"), n[33] = k, n[34] = S, n[35] = $, n[36] = c, n[37] = d, n[38] = G) : G = n[38];
		var z = G, j;
		n[39] !== S || n[40] !== x ? (j = (e || (e = r("stylex")))(!S && f.invisible, f.highRes, x), n[39] = S, n[40] = x, n[41] = j) : j = n[41];
		var K;
		n[42] !== k || n[43] !== M || n[44] !== D || n[45] !== c || n[46] !== j || n[47] !== d ? (K = u.jsx(r("WAWebEmoji.react"), {
			DEPRECATED_className: j,
			emoji: k,
			onLoad: D,
			selectable: c,
			src: M,
			xstyle: d
		}, "high-res"), n[42] = k, n[43] = M, n[44] = D, n[45] = c, n[46] = j, n[47] = d, n[48] = K) : K = n[48];
		var Q = K, X;
		return n[49] !== Q || n[50] !== z ? (X = u.jsxs("span", { children: [z, Q] }), n[49] = Q, n[50] = z, n[51] = X) : X = n[51], X;
	}
	l.SIZE = o("WAWebEmojiConst").LargeEmojiSize, l.LargeEmoji = g;
}), 98);
