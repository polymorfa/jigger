__d("WAWebChatThemeMainStep.react", [
	"fbt",
	"WAWebChatInfoDrawerRow.react",
	"WAWebChatThemeGrid.react",
	"WAWebChatThemePreviewChip.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WDSButton.react",
	"WDSIconIcRefresh.react",
	"WDSIconIcWallpaper.react",
	"WDSIconWdsIcChat.react",
	"WDSMenuBarItem.react",
	"WDSSectionDivider.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(56), n = e.activeWallpaperId, a = e.chatThemeModule, i = e.chipRenderState, l = e.currentThemeId, c = e.doodleToggleRow, d = e.isDoodleEnabled, m = e.isLoading, p = e.isResetDisabled, _ = e.onClose, f = e.onPushAllThemes, g = e.onPushColor, h = e.onPushWallpaper, y = e.onReset, C = e.onSelect, b = e.pickerItems, v = e.pickerRowSplit, S = e.solidWallpaperHex, R = e.themeMode, L;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[0] = L) : L = t[0];
		var E = L, k;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (k = { className: "x78zum5 xdt5ytf x5yr21d" }, t[1] = k) : k = t[1];
		var I;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[2] = I) : I = t[2];
		var T;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), t[3] = T) : T = t[3];
		var D;
		t[4] !== p || t[5] !== y ? (D = u.jsx(r("WDSMenuBarItem.react"), {
			disabled: p,
			testid: "chat_theme_reset_btn",
			icon: r("WDSIconIcRefresh.react"),
			onClick: y,
			title: T
		}), t[4] = p, t[5] = y, t[6] = D) : D = t[6];
		var x;
		t[7] !== _ || t[8] !== D ? (x = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			title: I,
			onBack: _,
			focusBackOrCancel: !0,
			menu: D
		}), t[7] = _, t[8] = D, t[9] = x) : x = t[9];
		var $;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x1iw51ew xde1mab x1p57kb1 x12xbjc7" }, t[10] = $) : $ = t[10];
		var P;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (P = s._(
			/*BTDS*/
			""
		), t[11] = P) : P = t[11];
		var N;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[12] = N) : N = t[12];
		var M;
		t[13] !== f ? (M = u.jsx("div", babelHelpers.extends({}, $, { children: u.jsx(r("WDSSectionDivider.react"), { header: {
			title: E,
			type: "emphasized",
			subtitle: P,
			action: u.jsx(r("WDSButton.react"), {
				variant: "outline",
				size: "small",
				testid: "chat-theme-view-all-btn",
				label: N,
				onPress: f
			})
		} }) })), t[13] = f, t[14] = M) : M = t[14];
		var w;
		t[15] !== n || t[16] !== l || t[17] !== d || t[18] !== m || t[19] !== C || t[20] !== b || t[21] !== v || t[22] !== S || t[23] !== R ? (w = m ? null : u.jsx(r("WAWebChatThemeGrid.react"), {
			compact: !0,
			currentThemeId: l,
			currentWallpaperId: n,
			horizontal: !0,
			onSelect: C,
			rowSplit: v,
			showDoodle: d,
			solidWallpaperHex: S,
			pickerItems: b,
			themeMode: R
		}), t[15] = n, t[16] = l, t[17] = d, t[18] = m, t[19] = C, t[20] = b, t[21] = v, t[22] = S, t[23] = R, t[24] = w) : w = t[24];
		var A;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1iw51ew xde1mab xl7twdi" }, t[25] = A) : A = t[25];
		var F;
		t[26] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx("div", babelHelpers.extends({}, A, { children: u.jsx(r("WDSSectionDivider.react"), {
			divider: !0,
			header: {
				title: s._(
					/*BTDS*/
					""
				),
				type: "emphasized"
			}
		}) })), t[26] = F) : F = t[26];
		var O;
		t[27] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx(r("WDSIconWdsIcChat.react"), {}), t[27] = O) : O = t[27];
		var B;
		t[28] !== a || t[29] !== l || t[30] !== R ? (B = u.jsx(r("WAWebChatThemePreviewChip.react"), {
			variant: "color",
			chatThemeModule: a,
			currentThemeId: l,
			themeMode: R
		}), t[28] = a, t[29] = l, t[30] = R, t[31] = B) : B = t[31];
		var W;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (W = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[32] = W) : W = t[32];
		var q;
		t[33] !== g || t[34] !== B ? (q = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "chat-color-item",
			icon: O,
			onClick: g,
			side: B,
			title: W
		}), t[33] = g, t[34] = B, t[35] = q) : q = t[35];
		var U;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (U = u.jsx(r("WDSIconIcWallpaper.react"), {}), t[36] = U) : U = t[36];
		var V;
		t[37] !== n || t[38] !== a || t[39] !== i || t[40] !== l || t[41] !== R ? (V = u.jsx(r("WAWebChatThemePreviewChip.react"), {
			variant: "wallpaper",
			activeWallpaperId: n,
			chatThemeModule: a,
			chipRenderState: i,
			currentThemeId: l,
			themeMode: R
		}), t[37] = n, t[38] = a, t[39] = i, t[40] = l, t[41] = R, t[42] = V) : V = t[42];
		var H;
		t[43] === Symbol.for("react.memo_cache_sentinel") ? (H = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[43] = H) : H = t[43];
		var G;
		t[44] !== h || t[45] !== V ? (G = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			testid: "wallpaper-item",
			icon: U,
			onClick: h,
			side: V,
			title: H
		}), t[44] = h, t[45] = V, t[46] = G) : G = t[46];
		var z;
		t[47] !== c || t[48] !== M || t[49] !== w || t[50] !== q || t[51] !== G ? (z = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			children: [
				M,
				w,
				c,
				F,
				q,
				G
			]
		}) }), t[47] = c, t[48] = M, t[49] = w, t[50] = q, t[51] = G, t[52] = z) : z = t[52];
		var j;
		return t[53] !== z || t[54] !== x ? (j = u.jsxs("div", babelHelpers.extends({}, k, { children: [x, z] })), t[53] = z, t[54] = x, t[55] = j) : j = t[55], j;
	}
	l.default = c;
}), 226);
