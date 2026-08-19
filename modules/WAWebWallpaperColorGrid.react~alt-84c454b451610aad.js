__d("WAWebWallpaperColorGrid.react", [
	"fbt",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeEvents",
	"WAWebChatThemeGatingUtils",
	"WAWebChatThemeValue",
	"WAWebCheckBox.react",
	"WAWebPopoverContext.react",
	"WAWebPopoverPosition",
	"WAWebSettingsSyncBridge",
	"WAWebText.react",
	"WAWebThemeContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTooltip.react",
	"WAWebWallpaper",
	"WDSFocusStateStyles",
	"react",
	"stylex",
	"useWAWebModelValues",
	"useWAWebSettingSync"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useContext, p = d.useRef, _ = d.useState, f = {
		wallpaperColorCanvas: {
			boxSizing: "x9f619",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			float: "xj87blo",
			width: "x1pigqs1",
			height: "xn6wvy2",
			marginBottom: "x1fqp7bg",
			marginInlineStart: "xx6jrq6",
			textAlign: "x2b8uid",
			borderTopWidth: "xl8et2f",
			borderInlineEndWidth: "xuc0g9m",
			borderBottomWidth: "x1dmim90",
			borderInlineStartWidth: "xs4xcjr",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			cursor: "x1ypdohk",
			":hover_borderTopWidth": "x964kle",
			":hover_borderInlineEndWidth": "xk5gepk",
			":hover_borderBottomWidth": "x1wql1ll",
			":hover_borderInlineStartWidth": "x1dwt4bm",
			":hover_borderTopStyle": "x1lwdpx3",
			":hover_borderInlineEndStyle": "xb90sal",
			":hover_borderBottomStyle": "x1rlzdi",
			":hover_borderInlineStartStyle": "xrhz2io",
			":hover_borderTopColor": "x1j88qlk",
			":hover_borderInlineEndColor": "xmly02p",
			":hover_borderBottomColor": "x36lclb",
			":hover_borderInlineStartColor": "xzyl2ln",
			$$css: !0
		},
		canvasActive: {
			boxShadow: "x7v93wm",
			$$css: !0
		},
		canvasActiveBorder: {
			borderTopWidth: "xl8et2f",
			borderInlineEndWidth: "xuc0g9m",
			borderBottomWidth: "x1dmim90",
			borderInlineStartWidth: "xs4xcjr",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			$$css: !0
		},
		canvasDefault: {
			backgroundColor: "x1q80dvb",
			$$css: !0
		},
		checkboxLabel: {
			marginInlineStart: "xdzw4kq",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		canvasBg: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		}
	};
	function g(t) {
		var n = t.chat, a = t.colorHex, i = t.colorName, l = t.isDefault, u = _(!1), d = u[0], g = u[1], h = o("useWAWebModelValues").useOptionalModelValues(n, ["wallpaperValue", "chatThemeValue"]), y = m(o("WAWebThemeContext").ThemeContext), C = y.theme === "dark" ? "dark" : "light", b = p(null), v = function() {
			return l ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : a;
		}, S = async function(a) {
			var e, i = v(), l = r("WAWebChatPreferenceCollection").get("defaultPreference"), s = (h == null ? void 0 : h.wallpaperValue) != null ? o("WAWebChatThemeValue").wallpaperValueToHex(h.wallpaperValue, C) : null, u = i !== s, c = (h == null || (e = h.chatThemeValue) == null ? void 0 : e.chatThemeId) != null;
			if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && n != null && h != null && (u || c)) {
				var d = h.wallpaperValue, m = o("WAWebChatThemeValue").doodleFromWallpaperValue(d);
				if (await n.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
					wallpaper: i,
					showDoodle: m,
					stockWallpaperImageId: null
				})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(i), n.id.toJid()), c) {
					var p, _;
					await n.setChatThemeValue({
						chatThemeId: null,
						colorSchemeId: (p = (_ = h.chatThemeValue) == null ? void 0 : _.colorSchemeId) != null ? p : null
					}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", n.id.toJid());
				}
				t.onColorSelect == null || t.onColorSelect();
			} else if (l != null) {
				var f = l.wallpaperValue, g = f != null ? o("WAWebChatThemeValue").wallpaperValueToHex(f, C) : null;
				if (i !== g) {
					var y = o("WAWebChatThemeValue").doodleFromWallpaperValue(f);
					l.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: i,
						showDoodle: y,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperId(i)), t.onColorSelect == null || t.onColorSelect();
				}
			}
		}, R = function(t) {
			d || (g(!0), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: v() }));
		}, L = function(t) {
			d || (g(!0), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: v() }));
		}, E = function(t) {
			d && (g(!1), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: null }));
		}, k = t.isDefault ? c.jsx("span", {
			className: "xlrnmfh xdj266r x1p8j9ns xat24cr x7phf20 x6ikm8r x10wlt62 x1ncwhqj xlyipyv xuxw1ft",
			"data-testid": "wallpaper-default-title",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, I = a != null ? "wallpaper-canvas-color-" + a : "wallpaper-canvas-color", T = [
			f.wallpaperColorCanvas,
			t.isSelected && f.canvasActive,
			t.isSelected && f.canvasActiveBorder,
			t.isDefault && f.canvasDefault,
			t.colorHex != null && f.canvasBg(t.colorHex),
			o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
		];
		return c.jsxs("button", babelHelpers.extends({}, (e || (e = r("stylex"))).props(T), {
			ref: b,
			onMouseOver: R,
			onFocus: R,
			tabIndex: 0,
			onMouseEnter: L,
			onMouseLeave: E,
			onClick: S,
			"data-testid": I,
			"aria-label": t.ariaLabel,
			title: t.isDefault ? s._(
				/*BTDS*/
				""
			) : void 0,
			children: [k, c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
				targetRef: b,
				popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
					targetRef: "context",
					alignment: o("WAWebPopoverPosition").PopoverAlignment.Center,
					position: o("WAWebPopoverPosition").PopoverPosition.Bottom,
					showOnFocus: !0,
					enableEnterTransition: !1,
					children: i
				})
			})]
		}));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		return e ? t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function y(e) {
		var t, n = e.chat, r = e.chatPreference, a = e.colors, i = e.onColorSelect, l = o("useWAWebModelValues").useOptionalModelValues(n, ["wallpaperValue", "chatThemeValue"]), u = o("useWAWebModelValues").useOptionalModelValues(r, ["wallpaperValue"]), d = m(o("WAWebThemeContext").ThemeContext), p = d.theme === "dark" ? "dark" : "light", _ = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && o("WAWebChatThemeValue").isWallpaperOverride(l == null ? void 0 : l.wallpaperValue) ? l == null ? void 0 : l.wallpaperValue : u == null ? void 0 : u.wallpaperValue, y = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(_, p).showDoodle, C = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && n != null, b = o("useWAWebSettingSync").useSettingSync("isDoodleWallpaperEnabled", function(e) {
			var t = C ? n == null ? void 0 : n.wallpaperValue : r == null ? void 0 : r.wallpaperValue, a = o("WAWebChatThemeValue").wallpaperValueWithDoodle(t, e);
			C && n != null ? n.setWallpaperValue(a) : r != null && r.set("wallpaperValue", a);
		}, C && n != null ? n.id.toJid() : void 0), v = _ != null ? o("WAWebChatThemeValue").wallpaperValueToHex(_, p) : null, S = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && (l == null || (t = l.chatThemeValue) == null ? void 0 : t.chatThemeId) != null && (v == null || v === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), R = S ? null : v, L = function() {
			var e = !y;
			b(e), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: h(o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && n != null, e) }));
		}, E = a.map(function(e) {
			var t = R === e;
			return c.jsx(g, {
				ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(e, d.theme),
				colorName: o("WAWebWallpaper").getWallpaperColorName(e, d.theme),
				chat: n,
				colorHex: e,
				isSelected: t,
				isDefault: !1,
				onColorSelect: i
			}, e);
		}), k = c.jsx(g, {
			chat: n,
			ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, d.theme),
			colorName: o("WAWebWallpaper").getWallpaperColorName(o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, d.theme),
			isSelected: R === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER,
			isDefault: !0,
			onColorSelect: i
		}, o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER);
		E.unshift(k);
		for (var I = 0; I < 2; I++) E.push(c.jsx("div", { className: "x1pigqs1 xqtp20y xx6jrq6" }, "emptyEl" + I));
		var T = c.jsxs("div", {
			className: "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
			children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
				onChange: L,
				checked: !!y,
				id: "add-doodles"
			}), c.jsx(o("WAWebText.react").WAWebTextSmall, {
				xstyle: f.checkboxLabel,
				as: "label",
				labelFor: "add-doodles",
				children: s._(
					/*BTDS*/
					""
				)
			})]
		});
		return c.jsxs(c.Fragment, { children: [(_ == null ? void 0 : _.type) !== "stock" && T, c.jsx("div", {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			className: "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c",
			children: E
		})] });
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
