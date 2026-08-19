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
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime",
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
		var a = o("react-compiler-runtime").c(40), i = t.chat, l = t.colorHex, u = t.colorName, d = t.isDefault, g = _(!1), h = g[0], y = g[1], C;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (C = ["wallpaperValue", "chatThemeValue"], a[0] = C) : C = a[0];
		var b = o("useWAWebModelValues").useOptionalModelValues(i, C), v = m(o("WAWebThemeContext").ThemeContext), S = v.theme === "dark" ? "dark" : "light", R = p(null), L;
		a[1] !== l || a[2] !== d ? (L = function() {
			return d ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : l;
		}, a[1] = l, a[2] = d, a[3] = L) : L = a[3];
		var E = L, k;
		a[4] !== S || a[5] !== i || a[6] !== b || a[7] !== E || a[8] !== t ? (k = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var n, a = E(), l = r("WAWebChatPreferenceCollection").get("defaultPreference"), s = (b == null ? void 0 : b.wallpaperValue) != null ? o("WAWebChatThemeValue").wallpaperValueToHex(b.wallpaperValue, S) : null, u = a !== s, c = (b == null || (n = b.chatThemeValue) == null ? void 0 : n.chatThemeId) != null;
				if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && i != null && b != null && (u || c)) {
					var d = b.wallpaperValue, m = o("WAWebChatThemeValue").doodleFromWallpaperValue(d);
					if (yield i.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: a,
						showDoodle: m,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(a), i.id.toJid()), c) {
						var p, _;
						yield i.setChatThemeValue({
							chatThemeId: null,
							colorSchemeId: (p = (_ = b.chatThemeValue) == null ? void 0 : _.colorSchemeId) != null ? p : null
						}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", i.id.toJid());
					}
					t.onColorSelect == null || t.onColorSelect();
				} else if (l != null) {
					var f = l.wallpaperValue, g = f != null ? o("WAWebChatThemeValue").wallpaperValueToHex(f, S) : null;
					if (a !== g) {
						var h = o("WAWebChatThemeValue").doodleFromWallpaperValue(f);
						l.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
							wallpaper: a,
							showDoodle: h,
							stockWallpaperImageId: null
						})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperId(a)), t.onColorSelect == null || t.onColorSelect();
					}
				}
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[4] = S, a[5] = i, a[6] = b, a[7] = E, a[8] = t, a[9] = k) : k = a[9];
		var I = k, T;
		a[10] !== E || a[11] !== h ? (T = function(t) {
			h || (y(!0), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: E() }));
		}, a[10] = E, a[11] = h, a[12] = T) : T = a[12];
		var D = T, x;
		a[13] !== E || a[14] !== h ? (x = function(t) {
			h || (y(!0), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: E() }));
		}, a[13] = E, a[14] = h, a[15] = x) : x = a[15];
		var $ = x, P;
		a[16] !== h ? (P = function(t) {
			h && (y(!1), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: null }));
		}, a[16] = h, a[17] = P) : P = a[17];
		var N = P, M;
		a[18] !== t.isDefault ? (M = t.isDefault ? c.jsx("span", {
			className: "xlrnmfh xdj266r x1p8j9ns xat24cr x7phf20 x6ikm8r x10wlt62 x1ncwhqj xlyipyv xuxw1ft",
			"data-testid": "wallpaper-default-title",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, a[18] = t.isDefault, a[19] = M) : M = a[19];
		var w = M, A = l != null ? "wallpaper-canvas-color-" + l : "wallpaper-canvas-color", F = t.isSelected && f.canvasActive, O = t.isSelected && f.canvasActiveBorder, B = t.isDefault && f.canvasDefault, W;
		if (a[20] !== t.colorHex || a[21] !== F || a[22] !== O || a[23] !== B) {
			var q = [
				f.wallpaperColorCanvas,
				F,
				O,
				B,
				t.colorHex != null && f.canvasBg(t.colorHex),
				o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
			];
			W = (e || (e = r("stylex"))).props(q), a[20] = t.colorHex, a[21] = F, a[22] = O, a[23] = B, a[24] = W;
		} else W = a[24];
		var U;
		a[25] !== t.isDefault ? (U = t.isDefault ? s._(
			/*BTDS*/
			""
		) : void 0, a[25] = t.isDefault, a[26] = U) : U = a[26];
		var V;
		a[27] !== u ? (V = c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
			targetRef: R,
			popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
				targetRef: "context",
				alignment: o("WAWebPopoverPosition").PopoverAlignment.Center,
				position: o("WAWebPopoverPosition").PopoverPosition.Bottom,
				showOnFocus: !0,
				enableEnterTransition: !1,
				children: u
			})
		}), a[27] = u, a[28] = V) : V = a[28];
		var H;
		return a[29] !== w || a[30] !== I || a[31] !== $ || a[32] !== N || a[33] !== D || a[34] !== t.ariaLabel || a[35] !== W || a[36] !== U || a[37] !== V || a[38] !== A ? (H = c.jsxs("button", babelHelpers.extends({}, W, {
			ref: R,
			onMouseOver: D,
			onFocus: D,
			tabIndex: 0,
			onMouseEnter: $,
			onMouseLeave: N,
			onClick: I,
			"data-testid": A,
			"aria-label": t.ariaLabel,
			title: U,
			children: [w, V]
		})), a[29] = w, a[30] = I, a[31] = $, a[32] = N, a[33] = D, a[34] = t.ariaLabel, a[35] = W, a[36] = U, a[37] = V, a[38] = A, a[39] = H) : H = a[39], H;
	}
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
		var t, n = o("react-compiler-runtime").c(59), r = e.chat, a = e.chatPreference, i = e.colors, l = e.onColorSelect, u;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (u = ["wallpaperValue", "chatThemeValue"], n[0] = u) : u = n[0];
		var d = o("useWAWebModelValues").useOptionalModelValues(r, u), p;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (p = ["wallpaperValue"], n[1] = p) : p = n[1];
		var _ = o("useWAWebModelValues").useOptionalModelValues(a, p), y = m(o("WAWebThemeContext").ThemeContext), C = y.theme === "dark" ? "dark" : "light", b;
		n[2] !== (d == null ? void 0 : d.wallpaperValue) || n[3] !== (_ == null ? void 0 : _.wallpaperValue) ? (b = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && o("WAWebChatThemeValue").isWallpaperOverride(d == null ? void 0 : d.wallpaperValue) ? d == null ? void 0 : d.wallpaperValue : _ == null ? void 0 : _.wallpaperValue, n[2] = d == null ? void 0 : d.wallpaperValue, n[3] = _ == null ? void 0 : _.wallpaperValue, n[4] = b) : b = n[4];
		var v = b, S;
		n[5] !== v || n[6] !== C ? (S = o("WAWebChatThemeValue").wallpaperBackgroundFromValue(v, C), n[5] = v, n[6] = C, n[7] = S) : S = n[7];
		var R = S.showDoodle, L;
		n[8] !== r ? (L = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && r != null, n[8] = r, n[9] = L) : L = n[9];
		var E = L, k;
		n[10] !== r || n[11] !== a || n[12] !== E ? (k = function(t) {
			var e = E ? r == null ? void 0 : r.wallpaperValue : a == null ? void 0 : a.wallpaperValue, n = o("WAWebChatThemeValue").wallpaperValueWithDoodle(e, t);
			E && r != null ? r.setWallpaperValue(n) : a != null && a.set("wallpaperValue", n);
		}, n[10] = r, n[11] = a, n[12] = E, n[13] = k) : k = n[13];
		var I;
		n[14] !== r || n[15] !== E ? (I = E && r != null ? r.id.toJid() : void 0, n[14] = r, n[15] = E, n[16] = I) : I = n[16];
		var T = o("useWAWebSettingSync").useSettingSync("isDoodleWallpaperEnabled", k, I), D;
		n[17] !== v || n[18] !== C ? (D = v != null ? o("WAWebChatThemeValue").wallpaperValueToHex(v, C) : null, n[17] = v, n[18] = C, n[19] = D) : D = n[19];
		var x = D, $ = o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && (d == null || (t = d.chatThemeValue) == null ? void 0 : t.chatThemeId) != null && (x == null || x === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), P = $ ? null : x, N;
		n[20] !== r || n[21] !== T || n[22] !== R ? (N = function() {
			var e = !R;
			T(e), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: h(o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && r != null, e) }));
		}, n[20] = r, n[21] = T, n[22] = R, n[23] = N) : N = n[23];
		var M = N, w;
		if (n[24] !== r || n[25] !== i || n[26] !== y.theme || n[27] !== P || n[28] !== l) {
			var A;
			n[30] !== r || n[31] !== y.theme || n[32] !== P || n[33] !== l ? (A = function(t) {
				var e = P === t;
				return c.jsx(g, {
					ariaLabel: o("WAWebWallpaper").getWallpaperColorAriaLabel(t, y.theme),
					colorName: o("WAWebWallpaper").getWallpaperColorName(t, y.theme),
					chat: r,
					colorHex: t,
					isSelected: e,
					isDefault: !1,
					onColorSelect: l
				}, t);
			}, n[30] = r, n[31] = y.theme, n[32] = P, n[33] = l, n[34] = A) : A = n[34], w = i.map(A);
			var F;
			n[35] !== y.theme ? (F = o("WAWebWallpaper").getWallpaperColorAriaLabel(o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, y.theme), n[35] = y.theme, n[36] = F) : F = n[36];
			var O;
			n[37] !== y.theme ? (O = o("WAWebWallpaper").getWallpaperColorName(o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, y.theme), n[37] = y.theme, n[38] = O) : O = n[38];
			var B = P === o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, W;
			n[39] !== r || n[40] !== l || n[41] !== F || n[42] !== O || n[43] !== B ? (W = c.jsx(g, {
				chat: r,
				ariaLabel: F,
				colorName: O,
				isSelected: B,
				isDefault: !0,
				onColorSelect: l
			}, o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER), n[39] = r, n[40] = l, n[41] = F, n[42] = O, n[43] = B, n[44] = W) : W = n[44];
			var q = W;
			w.unshift(q);
			for (var U = 0; U < 2; U++) w.push(c.jsx("div", { className: "x1pigqs1 xqtp20y xx6jrq6" }, "emptyEl" + U));
			n[24] = r, n[25] = i, n[26] = y.theme, n[27] = P, n[28] = l, n[29] = w;
		} else w = n[29];
		var V;
		n[45] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c" }, n[45] = V) : V = n[45];
		var H = !!R, G;
		n[46] !== M || n[47] !== H ? (G = c.jsx(o("WAWebCheckBox.react").CheckBox, {
			onChange: M,
			checked: H,
			id: "add-doodles"
		}), n[46] = M, n[47] = H, n[48] = G) : G = n[48];
		var z;
		n[49] === Symbol.for("react.memo_cache_sentinel") ? (z = c.jsx(o("WAWebText.react").WAWebTextSmall, {
			xstyle: f.checkboxLabel,
			as: "label",
			labelFor: "add-doodles",
			children: s._(
				/*BTDS*/
				""
			)
		}), n[49] = z) : z = n[49];
		var j;
		n[50] !== G ? (j = c.jsxs("div", babelHelpers.extends({}, V, { children: [G, z] })), n[50] = G, n[51] = j) : j = n[51];
		var K = j, Q = (v == null ? void 0 : v.type) !== "stock" && K, X, Y;
		n[52] === Symbol.for("react.memo_cache_sentinel") ? (X = s._(
			/*BTDS*/
			""
		), Y = { className: "x78zum5 x1q0g3np x1a02dak xl56j7k x9orja2 x5zjp28 x1gx403c" }, n[52] = X, n[53] = Y) : (X = n[52], Y = n[53]);
		var J;
		n[54] !== w ? (J = c.jsx("div", babelHelpers.extends({ "aria-label": X }, Y, { children: w })), n[54] = w, n[55] = J) : J = n[55];
		var Z;
		return n[56] !== Q || n[57] !== J ? (Z = c.jsxs(c.Fragment, { children: [Q, J] }), n[56] = Q, n[57] = J, n[58] = Z) : Z = n[58], Z;
	}
	l.default = y;
}), 226);
