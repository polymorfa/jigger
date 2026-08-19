__d("WAWebChatThemePreviewChip.react", [
	"WAWebChatThemeDoodleOverlayStyle",
	"WAWebStockWallpaper",
	"bx",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("bx").getURL(r("bx")("89515")), d = {
		maskImage: "url(\"" + c + "\")",
		maskRepeat: "repeat",
		maskSize: "600% auto"
	}, m = {
		previewChip: {
			display: "x1lliihq",
			width: "xgd8bvy",
			height: "x1fgtraw",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			borderTopWidth: "xt8cgyo",
			borderInlineEndWidth: "x128c8uf",
			borderBottomWidth: "x1co6499",
			borderInlineStartWidth: "xc5fred",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			boxSizing: "x9f619",
			$$css: !0
		},
		colorChipFill: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		},
		wallpaperChipShape: {
			width: "x10h3iyq",
			height: "x1fgtraw",
			borderStartStartRadius: "xrxyp3c",
			borderStartEndRadius: "xv0oops",
			borderEndEndRadius: "x1isl5vh",
			borderEndStartRadius: "xn8zj9a",
			position: "x1n2onr6",
			$$css: !0
		},
		wallpaperChipFill: {
			backgroundColor: "x1q80dvb",
			backgroundSize: "x18d0r48",
			backgroundPosition: "x1xsqp64",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.activeWallpaperId, a = t.chatThemeModule, i = t.chipRenderState, l = t.currentThemeId, s = t.themeMode, c = t.variant;
		if (a == null || l == null) return null;
		if (c === "color") return u.jsx("span", babelHelpers.extends({
			"aria-hidden": "true",
			"data-testid": "chat_theme_color_preview_chip"
		}, (e || (e = r("stylex"))).props(m.previewChip, m.colorChipFill, a.getBubbleTheme(l, s))));
		if (i == null) return null;
		var p = babelHelpers.extends({}, i.cssVariableOverrides);
		return i.solidWallpaperHex != null && (p.backgroundColor = i.solidWallpaperHex), i.showStockWallpaper && n != null && (p.backgroundImage = "url(\"" + o("WAWebStockWallpaper").getStockWallpaperThumbnailUrlByImageId(n) + "\")"), u.jsx("span", babelHelpers.extends({
			"aria-hidden": "true",
			"data-testid": "chat_theme_wallpaper_preview_chip"
		}, (e || (e = r("stylex"))).props(m.previewChip, m.wallpaperChipShape, m.wallpaperChipFill, a.getChatTheme(l, s)), {
			style: p,
			children: i.showDoodle && u.jsx("span", {
				"data-testid": "chat_theme_wallpaper_doodle_chip",
				className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fmog5m xu25z0z x140muxe xo1y3bh x1fast2d",
				style: r("WAWebChatThemeDoodleOverlayStyle")(d, i.solidWallpaperHex, s)
			})
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
