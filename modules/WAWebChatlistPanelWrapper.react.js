__d("WAWebChatlistPanelWrapper.react", [
	"WAWebABProps",
	"WAWebAppRootInteractionContext.react",
	"WAWebChatlistHeaderV2.react",
	"WAWebChatlistPanelFunctional.react",
	"WAWebChatlistPanelMode",
	"WAWebInteractionTracePolicy",
	"WAWebMultiSelectEntryPointConstants",
	"WAWebSettingsGetters",
	"WAWebSettingsModel",
	"WAWebUsernameGatingUtils",
	"cr:11128",
	"cr:11132",
	"cr:11133",
	"cr:11135",
	"hero-tracing",
	"react",
	"react-compiler-runtime",
	"useWAWebChatLockSettings",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useState, p = (e = n("cr:11135")) != null ? e : {}, _ = p.chatlistRowsReadySignal;
	function f(e) {
		var t = o("react-compiler-runtime").c(22), a = e.chatlistHeaderRef, i = e.chatlistPanelRef, l = e.handleActiveNavBarItemUpdate, s = e.leftDrawerStyle, c = e.leftPaneClassName, d = e.resizeHandle, p;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (p = [o("WAWebSettingsGetters").getShowArchiveV2], t[0] = p) : p = t[0];
		var f = o("useWAWebSettingsValues").useSettingsValues(p), g = f[0], h = m(!1), y = h[0], C = h[1], b = o("useWAWebChatLockSettings").useChatLockSettings(), v;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			return C(!0);
		}, t[1] = v) : v = t[1];
		var S = v, R;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (R = function() {
			return C(!1);
		}, t[2] = R) : R = t[2];
		var L = R, E;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebUsernameGatingUtils").usernameGlobalSearchEnabled(), t[3] = E) : E = t[3];
		var k = E, I;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (I = o("WAWebABProps").getABPropConfigValue("web_phone_number_global_search"), t[4] = I) : I = t[4];
		var T = I, D;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (D = {
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS_OPEN_CHAT
		}, t[5] = D) : D = t[5];
		var x = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext(D), $ = x.startInteraction, P = y ? "inMultiSelectMode" : "inNonSelectableMode", N = y ? o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown : null, M;
		if (t[6] !== b.hideLockedChats || t[7] !== i || t[8] !== y || t[9] !== g || t[10] !== $ || t[11] !== P || t[12] !== N) {
			var w = u.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
				chatlistPanelRef: i,
				showArchiveV2: g,
				mode: r("WAWebChatlistPanelMode").Chatlist,
				selectable: y,
				endMultiSelect: L,
				multiSelectEntryPoint: N,
				hideLockedChats: b.hideLockedChats,
				startChatInteraction: $,
				unknownContactUsernameSearchEnabled: k,
				unknownContactPhoneSearchEnabled: T
			}, P);
			M = (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 && n("cr:11128") != null && n("cr:11132") != null && _ != null ? u.jsx(n("cr:11132"), {
				name: "wa-web-chatlist-region",
				signal: _,
				fallback: u.jsx(n("cr:11128"), {}),
				children: w
			}) : w, t[6] = b.hideLockedChats, t[7] = i, t[8] = y, t[9] = g, t[10] = $, t[11] = P, t[12] = N, t[13] = M;
		} else M = t[13];
		var A = M, F;
		return t[14] !== a || t[15] !== A || t[16] !== l || t[17] !== y || t[18] !== s || t[19] !== c || t[20] !== d ? (F = u.jsx(o("hero-tracing").HeroPagelet, {
			name: "Chat List Panel",
			children: function(t, n) {
				return u.jsxs(u.Fragment, { children: [u.jsxs("div", {
					className: c,
					style: s,
					ref: t,
					children: [
						r("WAWebSettingsModel") && u.jsx(o("WAWebChatlistHeaderV2.react").WAWebChatlistHeaderV2, {
							headerRef: a,
							onSelectChatClick: S,
							isMultiSelectMode: y,
							updateActiveNavBarItem: l
						}),
						A,
						d
					]
				}), u.jsx(n, {})] });
			}
		}), t[14] = a, t[15] = A, t[16] = l, t[17] = y, t[18] = s, t[19] = c, t[20] = d, t[21] = F) : F = t[21], F;
	}
	l.default = f;
}), 98);
