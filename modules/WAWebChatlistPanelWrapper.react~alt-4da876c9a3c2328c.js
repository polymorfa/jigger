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
	"useWAWebChatLockSettings",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = s, d = c.useCallback, m = c.useState, p = (e = n("cr:11135")) != null ? e : {}, _ = p.chatlistRowsReadySignal;
	function f(e) {
		var t = e.chatlistHeaderRef, a = e.chatlistPanelRef, i = e.handleActiveNavBarItemUpdate, l = e.leftDrawerStyle, s = e.leftPaneClassName, c = e.resizeHandle, p = o("useWAWebSettingsValues").useSettingsValues([o("WAWebSettingsGetters").getShowArchiveV2]), f = p[0], g = m(!1), h = g[0], y = g[1], C = o("useWAWebChatLockSettings").useChatLockSettings(), b = d(function() {
			return y(!0);
		}, []), v = d(function() {
			return y(!1);
		}, []), S = o("WAWebUsernameGatingUtils").usernameGlobalSearchEnabled(), R = o("WAWebABProps").getABPropConfigValue("web_phone_number_global_search"), L = o("WAWebAppRootInteractionContext.react").useInteractionWithAppRootContext({
			manualHold: !1,
			shouldUseNavigationAsInteraction: !0,
			tracePolicy: r("WAWebInteractionTracePolicy").NAVIGATION_CHATS_OPEN_CHAT
		}), E = L.startInteraction, k = u.jsx(o("WAWebChatlistPanelFunctional.react").ChatlistPanelFunctional, {
			chatlistPanelRef: a,
			showArchiveV2: f,
			mode: r("WAWebChatlistPanelMode").Chatlist,
			selectable: h,
			endMultiSelect: v,
			multiSelectEntryPoint: h ? o("WAWebMultiSelectEntryPointConstants").MultiSelectEntryPoint.ChatListHeaderDropdown : null,
			hideLockedChats: C.hideLockedChats,
			startChatInteraction: E,
			unknownContactUsernameSearchEnabled: S,
			unknownContactPhoneSearchEnabled: R
		}, h ? "inMultiSelectMode" : "inNonSelectableMode"), I = (n("cr:11133") == null ? void 0 : n("cr:11133")()) === !0 && n("cr:11128") != null && n("cr:11132") != null && _ != null ? u.jsx(n("cr:11132"), {
			name: "wa-web-chatlist-region",
			signal: _,
			fallback: u.jsx(n("cr:11128"), {}),
			children: k
		}) : k;
		return u.jsx(o("hero-tracing").HeroPagelet, {
			name: "Chat List Panel",
			children: function(n, a) {
				return u.jsxs(u.Fragment, { children: [u.jsxs("div", {
					className: s,
					style: l,
					ref: n,
					children: [
						r("WAWebSettingsModel") && u.jsx(o("WAWebChatlistHeaderV2.react").WAWebChatlistHeaderV2, {
							headerRef: t,
							onSelectChatClick: b,
							isMultiSelectMode: h,
							updateActiveNavBarItem: i
						}),
						I,
						c
					]
				}), u.jsx(a, {})] });
			}
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
