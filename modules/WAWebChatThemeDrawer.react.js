__d("WAWebChatThemeDrawer.react", [
	"WAWebChatThemeAllStep.react",
	"WAWebChatThemeColorStep.react",
	"WAWebChatThemeDoodleToggleRow.react",
	"WAWebChatThemeEnums",
	"WAWebChatThemeEvents",
	"WAWebChatThemeMainStep.react",
	"WAWebChatThemeResetWithUndo",
	"WAWebChatThemeSelectionHandlers",
	"WAWebChatThemeSolidColorStep.react",
	"WAWebChatThemeWallpaperGrid.react",
	"WAWebChatThemeWallpaperStep.react",
	"WAWebDrawer.react",
	"WAWebDrawerManager",
	"WAWebThemeContext",
	"WAWebUseChatTheme",
	"WAWebWallpaper",
	"react",
	"useWAWebChatThemeGridOrdering",
	"useWAWebChatThemeList",
	"useWAWebChatThemeRenderState",
	"useWAWebChatThemeScreenLogging",
	"useWAWebChatThemeStore",
	"useWAWebChatWallpaperLogging",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useState;
	function m(e) {
		var t, n, a, i, l, u = e.chat, m = u === void 0 ? null : u, p = e.onClose, _ = e.ref, f = o("useWAWebChatThemeStore").useChatThemeStore(m), g = f.values, h = f.isGlobal, y = o("WAWebThemeContext").useIsDarkTheme() ? "dark" : "light", C = o("useWAWebFlow").useFlow("main", {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: p
		}), b = C[0], v = C[1], S = (t = v.step) != null ? t : "main", R = o("WAWebUseChatTheme").useLazyChatThemeDefinitions({ isChatThemeEnabled: !0 }), L = (n = g.colorSchemeId) != null ? n : R != null ? o("WAWebChatThemeEnums").Theme.Default : null, E = R != null && L != null && R.isMinimalScheme(L) ? R.getBaseTheme(L) : L, k = d(f.activeWallpaperId), I = k[0], T = k[1], D = o("useWAWebChatThemeScreenLogging").useChatThemeScreenLogging(g.chatThemeId, g.colorSchemeId, y, h, (a = m == null ? void 0 : m.id.isGroup()) != null ? a : !1, f.wallpaperType, f.isReady), x = D.markThemeChangeApplied, $ = o("useWAWebChatWallpaperLogging").useChatWallpaperLogging(y, S, h, (i = m == null ? void 0 : m.id.isGroup()) != null ? i : !1, f.wallpaperType), P = $.logWallpaperOnBack, N = $.markWallpaperChangeApplied, M = $.markWallpaperVisited;
		c(function() {
			return h && o("WAWebDrawerManager").DrawerManager.closeDrawerMid(), o("WAWebChatThemeEvents").triggerChatThemeDrawerOpen({ isGlobal: h }), function() {
				o("WAWebChatThemeEvents").triggerChatThemeDrawerClose({ isGlobal: h });
			};
		}, []);
		var w = g.doodleEnabled, A = g.wallpaper != null && g.wallpaper !== o("WAWebWallpaper").DEFAULT_CHAT_WALLPAPER, F = o("WAWebChatThemeResetWithUndo").createChatThemeResetWithUndo(f, R, I, T), O = F.handleColorReset, B = F.handleReset, W = F.handleWallpaperReset, q = F.isAllAtDefault, U = F.isColorAtDefault, V = F.isWallpaperAtDefault, H = o("useWAWebChatThemeList").useChatThemeList(R, g.chatThemeId, g.wallpaper), G = H.activeSolidColorHex, z = H.colorThemes, j = H.currentWallpaperTheme, K = H.doodleThemes, Q = H.wallpaperGridPresets, X = H.wallpaperPresets, Y = H.wallpaperThemes, J = o("useWAWebChatThemeGridOrdering").useChatThemeGridOrdering({
			currentStep: S,
			currentThemeId: L,
			currentWallpaperTheme: j,
			basicThemes: [],
			wallpaperThemes: Y,
			colorThemes: z,
			activeSolidColorHex: G,
			doodleEnabled: w,
			doodleThemes: K,
			wallpaperPresets: X,
			wallpaperGridPresets: Q,
			activeWallpaperId: I,
			hasNonDefaultWallpaper: A
		}), Z = J.orderedColorThemes, ee = J.orderedWallpaperGridItems, te = J.pickerItems, ne = J.pickerRowSplit, re = J.snapshotDoodleEnabled, oe = J.snapshotSolidColor, ae = o("useWAWebChatThemeRenderState").useChatThemeRenderState({
			chatThemeModule: R,
			currentThemeId: L,
			effectiveChatThemeId: f.effectiveChatThemeId,
			effectiveWallpaper: f.effectiveWallpaper,
			minimalModeActive: f.minimalModeActive,
			activeWallpaperId: I,
			isDoodleEnabled: w,
			themeMode: y
		}), ie = (l = ae == null ? void 0 : ae.solidWallpaperHex) != null ? l : null, le = o("WAWebChatThemeSelectionHandlers").createChatThemeSelectionHandlers({
			store: f,
			chatThemeModule: R,
			setActiveWallpaperId: T,
			markThemeChangeApplied: x,
			markWallpaperChangeApplied: N,
			snapshotDoodleEnabled: re
		}), se = le.clearActiveWallpaperPreset, ue = le.handleColorSelect, ce = le.handleSelect, de = le.handleSolidColorSelect, me = le.handleWallpaperSelect, pe = I != null, _e = s.jsx(r("WAWebChatThemeDoodleToggleRow.react"), {
			isDoodleEnabled: w,
			isWallpaperPresetActive: pe,
			onToggle: function() {
				return f.applyDoodle(!w);
			}
		}), fe = R == null, ge = function() {
			v.push("solidColor");
		}, he = S === "main" ? s.jsx(r("WAWebChatThemeMainStep.react"), {
			activeWallpaperId: I,
			chatThemeModule: R,
			chipRenderState: ae,
			currentThemeId: L,
			doodleToggleRow: _e,
			isDoodleEnabled: w,
			isLoading: fe,
			isResetDisabled: q,
			onClose: function() {
				return v.end();
			},
			onPushAllThemes: function() {
				return v.push("allThemes");
			},
			onPushColor: function() {
				return v.push("color");
			},
			onPushWallpaper: function() {
				v.push("wallpaper"), M();
			},
			onReset: B,
			onSelect: ce,
			pickerItems: te,
			pickerRowSplit: ne,
			solidWallpaperHex: ie,
			themeMode: y
		}) : S === "allThemes" ? s.jsx(r("WAWebChatThemeAllStep.react"), {
			currentThemeId: L,
			currentWallpaperId: I,
			isDoodleEnabled: w,
			onBack: function() {
				return v.pop();
			},
			onSelect: ce,
			pickerItems: te,
			solidWallpaperHex: ie,
			themeMode: y
		}) : S === "color" ? s.jsx(r("WAWebChatThemeColorStep.react"), {
			currentThemeId: E,
			isResetDisabled: U,
			onBack: function() {
				return v.pop();
			},
			onReset: O,
			onSelect: ue,
			orderedColorThemes: Z,
			themeMode: y
		}) : S === "wallpaper" ? s.jsx(r("WAWebChatThemeWallpaperStep.react"), {
			isResetDisabled: V,
			onBack: function() {
				P(), v.pop();
			},
			onReset: W,
			onSolidColorPush: ge,
			children: s.jsx(r("WAWebChatThemeWallpaperGrid.react"), {
				testid: "chat-theme-wallpaper-grid",
				activeSolidColorHex: G,
				currentThemeId: j,
				currentWallpaperId: I,
				isDoodleEnabled: w,
				onSelect: me,
				onSolidColorSelect: de,
				pickerItems: ee,
				snapshotDoodleEnabled: re,
				snapshotSolidColor: oe,
				themeMode: y
			})
		}) : S === "solidColor" ? s.jsx(r("WAWebChatThemeSolidColorStep.react"), {
			chat: m,
			doodleToggleRow: _e,
			isDoodleEnabled: w,
			onBack: function() {
				return v.pop();
			},
			onSelect: se,
			themeMode: y
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + S);
		})();
		return s.jsx(r("WAWebDrawer.react"), {
			ref: _,
			testid: "chat-theme-drawer",
			children: s.jsx("div", {
				"data-testid": "chat_theme_flow_container",
				className: "x78zum5 xdt5ytf x5yr21d x1n2onr6",
				children: s.jsx(b, {
					flow: v,
					children: he
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
