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
		var n = o("react-compiler-runtime").c(40), a = t.chat, i = t.colorHex, l = t.colorName, u = t.isDefault, d = _(!1), g = d[0], h = d[1], y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (y = ["wallpaperValue", "chatThemeValue"], n[0] = y) : y = n[0];
		var C = o("useWAWebModelValues").useOptionalModelValues(a, y), b = m(o("WAWebThemeContext").ThemeContext), v = b.theme === "dark" ? "dark" : "light", S = p(null), R;
		n[1] !== i || n[2] !== u ? (R = function() {
			return u ? o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER : i;
		}, n[1] = i, n[2] = u, n[3] = R) : R = n[3];
		var L = R, E;
		n[4] !== v || n[5] !== a || n[6] !== C || n[7] !== L || n[8] !== t ? (E = async function(n) {
			var e, i = L(), l = r("WAWebChatPreferenceCollection").get("defaultPreference"), s = (C == null ? void 0 : C.wallpaperValue) != null ? o("WAWebChatThemeValue").wallpaperValueToHex(C.wallpaperValue, v) : null, u = i !== s, c = (C == null || (e = C.chatThemeValue) == null ? void 0 : e.chatThemeId) != null;
			if (o("WAWebChatThemeGatingUtils").isChatThemesEnabled() && a != null && C != null && (u || c)) {
				var d = C.wallpaperValue, m = o("WAWebChatThemeValue").doodleFromWallpaperValue(d);
				if (await a.setWallpaperValue(o("WAWebChatThemeValue").wallpaperValueFromFlat({
					wallpaper: i,
					showDoodle: m,
					stockWallpaperImageId: null
				})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperIdForSync(i), a.id.toJid()), c) {
					var p, _;
					await a.setChatThemeValue({
						chatThemeId: null,
						colorSchemeId: (p = (_ = C.chatThemeValue) == null ? void 0 : _.colorSchemeId) != null ? p : null
					}), o("WAWebSettingsSyncBridge").sendSettingChange("chatThemeId", "", a.id.toJid());
				}
				t.onColorSelect == null || t.onColorSelect();
			} else if (l != null) {
				var f = l.wallpaperValue, g = f != null ? o("WAWebChatThemeValue").wallpaperValueToHex(f, v) : null;
				if (i !== g) {
					var h = o("WAWebChatThemeValue").doodleFromWallpaperValue(f);
					l.set("wallpaperValue", o("WAWebChatThemeValue").wallpaperValueFromFlat({
						wallpaper: i,
						showDoodle: h,
						stockWallpaperImageId: null
					})), o("WAWebSettingsSyncBridge").sendSettingChange("wallpaperId", o("WAWebWallpaper").getWallpaperId(i)), t.onColorSelect == null || t.onColorSelect();
				}
			}
		}, n[4] = v, n[5] = a, n[6] = C, n[7] = L, n[8] = t, n[9] = E) : E = n[9];
		var k = E, I;
		n[10] !== L || n[11] !== g ? (I = function(t) {
			g || (h(!0), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: L() }));
		}, n[10] = L, n[11] = g, n[12] = I) : I = n[12];
		var T = I, D;
		n[13] !== L || n[14] !== g ? (D = function(t) {
			g || (h(!0), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: L() }));
		}, n[13] = L, n[14] = g, n[15] = D) : D = n[15];
		var x = D, $;
		n[16] !== g ? ($ = function(t) {
			g && (h(!1), o("WAWebChatThemeEvents").triggerWallpaperPreview({ hex: null }));
		}, n[16] = g, n[17] = $) : $ = n[17];
		var P = $, N;
		n[18] !== t.isDefault ? (N = t.isDefault ? c.jsx("span", {
			className: "xlrnmfh xdj266r x1p8j9ns xat24cr x7phf20 x6ikm8r x10wlt62 x1ncwhqj xlyipyv xuxw1ft",
			"data-testid": "wallpaper-default-title",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null, n[18] = t.isDefault, n[19] = N) : N = n[19];
		var M = N, w = i != null ? "wallpaper-canvas-color-" + i : "wallpaper-canvas-color", A = t.isSelected && f.canvasActive, F = t.isSelected && f.canvasActiveBorder, O = t.isDefault && f.canvasDefault, B;
		if (n[20] !== t.colorHex || n[21] !== A || n[22] !== F || n[23] !== O) {
			var W = [
				f.wallpaperColorCanvas,
				A,
				F,
				O,
				t.colorHex != null && f.canvasBg(t.colorHex),
				o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus
			];
			B = (e || (e = r("stylex"))).props(W), n[20] = t.colorHex, n[21] = A, n[22] = F, n[23] = O, n[24] = B;
		} else B = n[24];
		var q;
		n[25] !== t.isDefault ? (q = t.isDefault ? s._(
			/*BTDS*/
			""
		) : void 0, n[25] = t.isDefault, n[26] = q) : q = n[26];
		var U;
		n[27] !== l ? (U = c.jsx(o("WAWebPopoverContext.react").WAWebPopoverController, {
			targetRef: S,
			popover: c.jsx(o("WAWebTooltip.react").WAWebHoverTooltip, {
				targetRef: "context",
				alignment: o("WAWebPopoverPosition").PopoverAlignment.Center,
				position: o("WAWebPopoverPosition").PopoverPosition.Bottom,
				showOnFocus: !0,
				enableEnterTransition: !1,
				children: l
			})
		}), n[27] = l, n[28] = U) : U = n[28];
		var V;
		return n[29] !== M || n[30] !== k || n[31] !== x || n[32] !== P || n[33] !== T || n[34] !== t.ariaLabel || n[35] !== B || n[36] !== q || n[37] !== U || n[38] !== w ? (V = c.jsxs("button", babelHelpers.extends({}, B, {
			ref: S,
			onMouseOver: T,
			onFocus: T,
			tabIndex: 0,
			onMouseEnter: x,
			onMouseLeave: P,
			onClick: k,
			"data-testid": w,
			"aria-label": t.ariaLabel,
			title: q,
			children: [M, U]
		})), n[29] = M, n[30] = k, n[31] = x, n[32] = P, n[33] = T, n[34] = t.ariaLabel, n[35] = B, n[36] = q, n[37] = U, n[38] = w, n[39] = V) : V = n[39], V;
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
