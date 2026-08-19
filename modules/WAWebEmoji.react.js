__d("WAWebEmoji.react", [
	"WALogger",
	"WAWebAssetLoader",
	"WAWebAssetLoaderSingleton",
	"WAWebClassnames",
	"WAWebEmoji",
	"WAWebEmojiAssetLoaderCompletionTracker",
	"WAWebImg.react",
	"WDSFocusStateStyles",
	"react",
	"stylex",
	"useWAWebFocusState"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useContext, _ = m.useEffect, f = {
		rawFallback: {
			alignItems: "x6s0dn4",
			display: "x3nfvp2",
			fontFamily: "x19la9d6",
			justifyContent: "xl56j7k",
			lineHeight: "xo5v014",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			verticalAlign: "x16dsc37",
			$$css: !0
		},
		rawFallbackSmall: {
			fontSize: "x1c3i2sq",
			height: "x1qx5ct2",
			width: "xw4jnvo",
			$$css: !0
		},
		rawFallbackLarge: {
			fontSize: "x1q74xe4",
			height: "x10w6t97",
			width: "x1td3qas",
			$$css: !0
		}
	};
	function g(t) {
		var n = p(o("WAWebEmojiAssetLoaderCompletionTracker").InitialEmojisCompletionContext), a = r("useWAWebFocusState")(), i = a[0], l = a[1];
		_(function() {
			var r = o("WAWebEmoji").EmojiUtil.getGlyphId(t.emoji);
			r != null && (n.incrementLoadingEmojisCount(), o("WAWebAssetLoaderSingleton").AssetLoader.loadEmoji(r, o("WAWebAssetLoader").LOAD_PRIORITY.LAZY_LOAD_EMOJI).catch(function(n) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[WAWebEmoji] load failed glyph=",
					" emoji=",
					" err=",
					""
				])), r, t.emoji, String(n));
			}).finally(function() {
				n.decrementLoadingEmojisCount();
			}));
		}, [n, t.emoji]);
		var c = t.DEPRECATED_className, m = t.element, g = t.emoji, h = t.onLoad, y = t.selectable, C = t.selected, b = t.size, v = t.src, S = t.tabIndex, R = t.xstyle, L = o("WAWebEmoji").EmojiUtil.getGlyphId(g);
		if (L == null) {
			var E = Array.from(g).map(function(e) {
				var t;
				return (t = e.codePointAt(0)) == null ? void 0 : t.toString(16);
			}).join(" ");
			return o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[WAWebEmoji] no glyph, render raw char. codePoints=", ""])), E), d.jsx("span", {
				"aria-label": g,
				className: (c != null ? c : "") + " " + (u || (u = r("stylex")))(f.rawFallback, b === "large" ? f.rawFallbackLarge : f.rawFallbackSmall, R),
				"data-testid": g,
				children: g
			});
		}
		var k, I;
		v || (k = o("WAWebEmoji").EmojiUtil.getStyle(L, b), I = o("WAWebEmoji").EmojiUtil.getCssClasses(L, b));
		var T = o("WAWebClassnames").classnamesConvertMeToStylexPlease(c, I), D = [R, C === !0 || l === !0 ? o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent : void 0];
		return m === "span" ? d.jsx("span", {
			role: "button",
			ref: i,
			id: t["data-emoji-index"],
			"data-testid": g,
			"data-emoji": g,
			className: T + " " + (u || (u = r("stylex")))(D),
			"aria-label": g,
			style: k,
			onLoad: h,
			tabIndex: S,
			"data-unicode": t["data-unicode"],
			"data-variant": t["data-variant"],
			"data-emoji-index": t["data-emoji-index"]
		}) : d.jsx(r("WAWebImg.react"), {
			ref: i,
			alt: g,
			className: T + " " + (u || (u = r("stylex")))(D),
			draggable: !1,
			onLoad: h,
			plainText: g,
			selectable: y,
			style: k,
			src: v,
			onClick: t.onClick,
			testid: t.testid
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
