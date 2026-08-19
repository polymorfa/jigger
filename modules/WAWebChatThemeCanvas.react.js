__d("WAWebChatThemeCanvas.react", [
	"fbt",
	"Locale",
	"WAWebChatThemeDoodleOverlayStyle",
	"WAWebChatThemeEnums",
	"WAWebStockWallpaper",
	"WAWebUnstyledButton.react",
	"WAWebUseChatTheme",
	"WDSFlex.stylex",
	"WDSIconIcCheckCircleFilled.react",
	"bx",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = r("bx").getURL(r("bx")("89515")), m = "200% auto", p = {
		WebkitMaskImage: "url(\"" + d + "\")",
		maskImage: "url(\"" + d + "\")",
		WebkitMaskRepeat: "repeat",
		maskRepeat: "repeat",
		WebkitMaskMode: "alpha",
		maskMode: "alpha",
		WebkitMaskSize: m,
		maskSize: m
	}, _ = {
		cardWrapper: {
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		themeCardWrapperGrid: {
			width: "xh8yej3",
			maxWidth: "x1kbpmyu",
			$$css: !0
		},
		themeCard: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			maxWidth: "x1kbpmyu",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			cursor: "x1ypdohk",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x1q80dvb",
			boxShadow: "xvg832a",
			$$css: !0
		},
		themeCardFluid: {
			width: "xh8yej3",
			aspectRatio: "xoob0kj",
			$$css: !0
		},
		themeCardFixed: {
			width: "x1fznrkb",
			height: "xjp8j0k",
			$$css: !0
		},
		cardSelected: {
			outlineWidth: "x1de99jn",
			outlineStyle: "xaatb59",
			outlineColor: "xkco1y8 xtnn1bt",
			outlineOffset: "x1hl8ikr",
			$$css: !0
		},
		cardHover: {
			outlineWidth: "x1vhszaq",
			outlineStyle: "xt4zopc",
			outlineColor: "xz0q4bt",
			outlineOffset: "x1kduly6",
			$$css: !0
		},
		themeCardFocusRing: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			outlineWidth: "x784prv",
			outlineStyle: "x9v5kkp",
			outlineColor: "xtnn1bt",
			outlineOffset: "x7s97pk",
			$$css: !0
		},
		colorCard: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			width: "x1fu8urw",
			height: "x1peatla",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			cursor: "x1ypdohk",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			backgroundColor: "x1q80dvb",
			boxShadow: "xvg832a",
			$$css: !0
		},
		colorCardFocusRing: {
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			outlineWidth: "x784prv",
			outlineStyle: "x9v5kkp",
			outlineColor: "xtnn1bt",
			outlineOffset: "x7s97pk",
			$$css: !0
		},
		selectedCheck: {
			position: "x10l6tqk",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			width: "xh8yej3",
			height: "x5yr21d",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		selectedCheckVibrant: {
			color: "xowaa7l",
			$$css: !0
		},
		selectedCheckTonal: {
			color: "x14ug900",
			$$css: !0
		},
		themeCheckBelow: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			marginTop: "x1de0gy",
			$$css: !0
		},
		themeCheckHidden: {
			visibility: "xlshs6z",
			$$css: !0
		},
		colorFill: {
			backgroundColor: "x1g5lz36",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.horizontal, a = t.isCurrent, i = t.isSelected, l = t.onBlur, u = t.onFocusChange, d = t.onSelect, m = t.ref, f = t.showDoodle, g = t.solidWallpaperHex, h = t.tabIndex, y = t.themeId, C = t.themeMode, b = t.variant, v = b === void 0 ? "theme" : b, S = t.wallpaperId, R = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({ isChatThemeEnabled: !0 });
		if (R == null) return null;
		var L = v === "color" ? R.getBubbleTheme(y, C) : R.getChatTheme(y, C), E = o("WAWebChatThemeEnums").Theme.cast(y.replace(/@.*/, "")), k = (function() {
			return S != null ? o("WAWebStockWallpaper").getStockWallpaperThumbnailUrlByImageId(S) : S === void 0 && E != null ? o("WAWebStockWallpaper").getStockWallpaperThumbnailUrl(E) : null;
		})(), I = k != null ? {
			backgroundImage: "url(" + k + ")",
			backgroundSize: "cover",
			backgroundPosition: "center"
		} : void 0, T = i && k == null && g != null ? { backgroundColor: g } : void 0, D = T == null ? void 0 : T.backgroundColor, x = v === "color", $ = o("Locale").isRTL(), P = R.getColorSchemeName(y), N = o("WAWebStockWallpaper").isLightSwatchBackground(E != null ? E : o("WAWebChatThemeEnums").Theme.Default, C), M = o("WAWebChatThemeEnums").hasVibrantBubbleColor(y) ? _.selectedCheckVibrant : _.selectedCheckTonal, w = N ? _.selectedCheckTonal : _.selectedCheckVibrant, A = R != null && R.isMinimalScheme(y), F;
		S !== void 0 ? F = i ? f === !0 : !A : F = f === !0;
		var O = F && !x && k == null, B = s._(
			/*BTDS*/
			"",
			[s._param("theme_name", P)]
		);
		return c.jsx(r("WAWebUnstyledButton.react"), {
			ref: m,
			role: "radio",
			"aria-checked": i,
			"aria-label": a === !0 ? s._(
				/*BTDS*/
				""
			) : B,
			tabIndex: h,
			testid: a === !0 ? "chat-theme-custom" : "chat-theme-" + y + (S != null ? "-" + S : ""),
			xstyle: [
				_.cardWrapper,
				!x && n !== !0 && _.themeCardWrapperGrid,
				x ? _.colorCardFocusRing : _.themeCardFocusRing,
				i && _.cardSelected
			],
			onClick: i ? void 0 : function() {
				return d(y, S);
			},
			onFocus: u,
			onBlur: l,
			children: c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumnCenter), { children: c.jsxs("span", babelHelpers.extends({ title: P }, e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, x ? _.colorCard : _.themeCard, !x && (n === !0 ? _.themeCardFixed : _.themeCardFluid), !i && _.cardHover, L, x && _.colorFill), {
				style: x ? void 0 : I != null ? I : T,
				children: [
					i && v !== "theme" && c.jsx("div", babelHelpers.extends({ "aria-hidden": "true" }, (e || (e = r("stylex"))).props(_.selectedCheck, x ? M : w), { children: c.jsx(r("WDSIconIcCheckCircleFilled.react"), {}) })),
					!x && k != null && C === "dark" && c.jsx("div", { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x7w8cv9 x6nvzda x4i4b9w xhl9efl xj65ea0" }),
					O && c.jsx("span", {
						"data-testid": "chat_theme_canvas_doodle_overlay",
						className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fmog5m xu25z0z x140muxe xo1y3bh x1fast2d",
						style: r("WAWebChatThemeDoodleOverlayStyle")(p, D, C)
					}),
					v === "theme" && c.jsxs("div", {
						className: "x1n2onr6 x78zum5 xdt5ytf x1b73lln x1o1pmfc x1xrf6ya x18d9i69 x110972j xziim83 xh8yej3 x9f619",
						children: [
							c.jsx("div", babelHelpers.extends({}, {
								0: { className: "x10h3iyq xmix8c7 x1ew7x2d xqcrz7y x1uvjoo3" },
								1: { className: "x10h3iyq xmix8c7 x1ew7x2d xqcrz7y x1uvjoo3 xpk2tj9" }
							}[!$ << 0])),
							c.jsx("div", babelHelpers.extends({}, {
								0: { className: "x10h3iyq xmix8c7 x1g5lz36 xpvyfi4 x1uvjoo3" },
								1: { className: "x10h3iyq xmix8c7 x1g5lz36 xpvyfi4 x1uvjoo3 xpk2tj9" }
							}[!!$ << 0])),
							c.jsx("div", babelHelpers.extends({ "aria-hidden": "true" }, (e || (e = r("stylex"))).props(_.themeCheckBelow, w, !i && _.themeCheckHidden), { children: c.jsx(r("WDSIconIcCheckCircleFilled.react"), {}) }))
						]
					})
				]
			})) }))
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
