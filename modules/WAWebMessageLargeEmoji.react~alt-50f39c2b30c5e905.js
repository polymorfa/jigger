__d("WAWebMessageLargeEmoji.react", [
	"WAWebAssetLoaderDpiChangeDispatch",
	"WAWebCopyPasteSelectable.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEmojiConst",
	"WAWebImg.react",
	"WAWebImgPlaceholderConst",
	"react",
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
		var n, a = t.emoji, i = t.size, l = i === void 0 ? o("WAWebEmojiConst").LargeEmojiSize.MEDIUM : i, s = t.animation, c = s === void 0 ? !1 : s, _ = t.element, g = _ === void 0 ? "div" : _, h = t.selectable, y = t.xstyle, C = r("useWAWebDevicePixelRatio")(), b = d(function() {
			var e, n = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations((e = o("WAWebEmoji").EmojiUtil.normalizeEmoji(t.emoji)) != null ? e : t.emoji), r = o("WAWebEmoji").EmojiUtil.getGlyphId(n);
			return !!(r != null && o("WAWebEmoji").EmojiUtil.isGlyphCached(r));
		}, [t.emoji]), v = p(b), S = v[0], R = v[1];
		o("useWAWebABPropConfigValue").useABPropConfigValue("use_custom_soccer_ball_for_reaction_enabled"), o("useWAWebABPropConfigValue").useABPropConfigValue("animated_soccer_ball_prod_enabled");
		var L = o("WAWebEmoji").EmojiUtil.applyGlyphTransformations((n = o("WAWebEmoji").EmojiUtil.normalizeEmoji(a)) != null ? n : a);
		m(function() {
			R(b());
		}, [C, b]);
		var E = function() {
			var e = o("WAWebEmoji").EmojiUtil.getGlyphId(L);
			e != null && o("WAWebEmoji").EmojiUtil.markGlyphCached(e), R(!0);
		}, k, I, T;
		l === o("WAWebEmojiConst").LargeEmojiSize.LARGE ? (k = f.largeHighRes, I = f.largeLowRes, T = f.fallbackLarge) : l === o("WAWebEmojiConst").LargeEmojiSize.XLARGE ? (k = f.xlargeHighRes, I = f.xlargeLowRes, T = f.fallbackXlarge) : l === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60 ? (k = f.xlarge60HighRes, I = f.xlarge60LowRes, T = f.fallbackXlarge60) : (k = f.mediumHighRes, I = f.mediumLowRes, T = f.fallbackMedium);
		var D;
		l === o("WAWebEmojiConst").LargeEmojiSize.XLARGE_60 ? D = 160 : l === o("WAWebEmojiConst").LargeEmojiSize.XLARGE || r("WAWebAssetLoaderDpiChangeDispatch").currentRes === "high" ? D = 64 : D = 40;
		var x = o("WAWebEmoji").EmojiUtil.getGlyphPath(L, D);
		if (x == null) return u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.fallback, T, y), { children: a }));
		if (S && c) {
			var $ = g;
			return u.jsxs($, {
				className: (e || (e = r("stylex")))(f.animation, y),
				children: [u.jsx(o("WAWebCopyPasteSelectable.react").SelectableImg, {
					alt: a,
					className: e(f.highRes, k),
					draggable: !1,
					plainText: a,
					selectable: !!h,
					src: o("WAWebImgPlaceholderConst").ONE_BY_ONE_TRANS_GIF
				}), u.jsx(r("WAWebImg.react"), {
					className: e(f.highRes, k, f.heartbeat),
					draggable: !1,
					selectable: !1,
					src: x
				})]
			});
		}
		var P = S ? void 0 : u.jsx(r("WAWebEmoji.react"), {
			DEPRECATED_className: (e || (e = r("stylex")))(I),
			emoji: L,
			selectable: h,
			xstyle: y
		}, "low-res"), N = u.jsx(r("WAWebEmoji.react"), {
			DEPRECATED_className: (e || (e = r("stylex")))(!S && f.invisible, f.highRes, k),
			emoji: L,
			onLoad: E,
			selectable: h,
			src: x,
			xstyle: y
		}, "high-res");
		return u.jsxs("span", { children: [P, N] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.SIZE = o("WAWebEmojiConst").LargeEmojiSize, l.LargeEmoji = g;
}), 98);
