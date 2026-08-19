__d("WAWebConversation.react", [
	"JSResourceForInteraction",
	"WAPromiseDelays",
	"WAWebABProps",
	"WAWebAppContext.react",
	"WAWebBotBaseGating",
	"WAWebBusinessProfileCollection",
	"WAWebCAPIGroupAboutModal.react",
	"WAWebChatGetters",
	"WAWebChatLockWAMUtils",
	"WAWebChatPreferenceCollection",
	"WAWebChatThemeEvents",
	"WAWebCmd",
	"WAWebConversationPanelWrapper.react",
	"WAWebConversationPreloadGatingUtils",
	"WAWebDataSharing3pdLidCollection",
	"WAWebDesktopUpsellEvents",
	"WAWebGetChatLockEntryPoint",
	"WAWebIntroPanel.react",
	"WAWebIntroPanelV2.react",
	"WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction",
	"WAWebMetaAILandingLoadable",
	"WAWebMidDrawerEmptyState.react",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebNavBarTypes",
	"WAWebNux",
	"WAWebQueryGroupAction",
	"WAWebStreamModel",
	"WAWebWamEnumLandingSurface",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
	"cr:11804",
	"cr:12474",
	"react",
	"useWAWebChatLockRestriction",
	"useWAWebCmdChatEvents",
	"useWAWebConversationPreloading",
	"useWAWebListener",
	"useWAWebNux",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.memo, d = u.unstable_Activity, m = u.useCallback, p = u.useEffect, _ = u.useImperativeHandle, f = u.useRef, g = u.useState, h = r("JSResourceForInteraction")("WAWebSmbDataSharingOptInModalDialog").__setRef("WAWebConversation.react");
	function y(e) {
		var t = e.animate, a = e.ref, i = f(), l = o("useWAWebCmdChatEvents").useCmdChatEvents(), u = l.chat, c = l.chatEntryPointRef, y = l.focusContext, C = l.msgCollection, b = l.notifyChatRenderedRef, v = l.threadId, S = l.updateOpenedChatInfoRef, R = o("WAWebAppContext.react").useAppContext(), L = R.activeNavBarItem, E = m(function(e) {
			return b.current(e);
		}, [b]), k = m(function(e) {
			return S.current(e);
		}, [S]), I = g(null), T = I[0], D = I[1];
		o("useWAWebChatLockRestriction").useChatLockRestriction({
			id: u != null ? "locked-thread-" + u.id.toString() : "chat-homescreen",
			condition: u != null ? u : "bypass",
			entryPoint: o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(c.current),
			landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.THREAD,
			unlockEntryPoint: o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(o("WAWebGetChatLockEntryPoint").getChatLockEntryPoint(c.current))
		});
		var x = g(t), $ = x[0], P = x[1], N = r("useWAWebPrevious")($);
		N !== !1 && $ !== !1 && P(!1), _(a, function() {
			return { containsDOMNode: function(t) {
				return i.current ? i.current.containsDOMNode(t) : !1;
			} };
		});
		var M = function() {
			o("WAWebStreamModel").Stream.markUnavailable(15 * 1e3);
		}, w = async function() {
			await o("WAPromiseDelays").delayMs(500), !(window.document && !document.hasFocus()) && (o("WAWebStreamModel").Stream.markAvailable(), u != null && (o("WAWebChatGetters").getIsUser(u) || o("WAWebChatGetters").getIsGroup(u)) && u.presence.subscribe());
		};
		o("useWAWebListener").useListener(window, "focus", w), o("useWAWebListener").useListener(window, "blur", M), o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_open", function(e) {
			(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || e) && D("wallpaper");
		}), o("useWAWebListener").useListener(r("WAWebChatPreferenceCollection"), "wallpaper_drawer_close", function(e) {
			(!o("WAWebABProps").getABPropConfigValue("use_per_chat_wallpaper") || e) && D(null);
		}), o("WAWebChatThemeEvents").useChatThemeDrawerOpenListener(function(e) {
			e.isGlobal && D("theme");
		}), o("WAWebChatThemeEvents").useChatThemeDrawerCloseListener(function(e) {
			e.isGlobal && D(null);
		}), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_chat", function(e) {
			var t = e.chat;
			n("cr:11804") == null || n("cr:11804").maybePreloadWebTPIframeForPDFs(t, { source: "chatOpen" }), o("WAWebMobilePlatforms").isSMB() && h.load().then(function(e) {
				e.maybeShowChatEntryDataSharingDialog(t, function() {
					if (t.accountLid != null) {
						var e = t.accountLid.toString();
						o("WAWebMaybeGeneratePerCustomerDataSharingSystemMessageAction").maybeGeneratePerCustomerDataSharingSystemMessage({
							accountLid: e,
							perCustomerDataSharingState: o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e),
							entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.THREAD_ENTRY,
							globalDataSharingEntryPoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CTWA_CHAT
						});
					}
				}, o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CTWA_CHAT);
			});
		});
		var A = r("useWAWebNux")(o("WAWebNux").NUX.CAPI_GROUP_ABOUT_MODAL), F = A[0], O = A[1];
		p(function() {
			u && (u.contact.isBusiness && !u.id.isBot() && o("WAWebBusinessProfileCollection").BusinessProfileCollection.find(u.id), u.groupMetadata && o("WAWebQueryGroupAction").maybeQueryGroupDevice(u.groupMetadata));
		}, [u]), p(function() {
			var e;
			(u == null || (e = u.groupMetadata) == null ? void 0 : e.hasCapi) === !0 && F && (o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebCAPIGroupAboutModal.react").CAPIGroupAboutModal, {})), O());
		}, [
			u,
			F,
			O
		]);
		var B = u && C || T != null;
		p(function() {
			o("WAWebDesktopUpsellEvents").WAWebDesktopUpsellEvents.trigger("conversation_panel_ui_change", { conversationPanelVisible: !!B });
		}, [B]), p(function() {
			n("cr:12474") == null || n("cr:12474").restoreRefreshState();
		}, []);
		var W = o("WAWebConversationPreloadGatingUtils").isConversationPreloadEnabled(), q = o("WAWebMobilePlatforms").isSMB() === !1, U = o("WAWebBotBaseGating").isMetaAIHomeDefaultLandingEnabled() ? s.jsx(o("WAWebMetaAILandingLoadable").WAWebMetaAILandingLoadable, {}) : s.jsx(r("WAWebIntroPanelV2.react"), {}), V = L === o("WAWebNavBarTypes").NavBarItems.Chats ? U : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: L }), H = r("useWAWebConversationPreloading")(W ? u : null), G = H.warmedChat, z = H.warmedFocusCtx, j = H.warmedMsgCollection, K = {
			chat: u,
			chatEntryPoint: c.current,
			chatPreference: r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
			focusCtx: y,
			msgCollection: C,
			threadId: v,
			notifyChatRendered: E,
			updateOpenedChatInfo: k,
			showPreview: T
		}, Q = u == null ? void 0 : u.id.toString();
		return W && q ? s.jsxs(s.Fragment, { children: [
			s.jsx(d, {
				mode: B ? "hidden" : "visible",
				children: V
			}),
			B && s.jsx(d, {
				mode: "visible",
				children: s.createElement(r("WAWebConversationPanelWrapper.react"), babelHelpers.extends({}, K, {
					key: Q,
					ref: i
				}))
			}, Q),
			G && s.jsx(d, {
				mode: "hidden",
				children: s.jsx(r("WAWebConversationPanelWrapper.react"), {
					ref: B ? void 0 : i,
					chat: G,
					msgCollection: j,
					chatEntryPoint: K.chatEntryPoint,
					chatPreference: r("WAWebChatPreferenceCollection").assertGet("defaultPreference"),
					focusCtx: z,
					showPreview: K.showPreview,
					threadId: void 0,
					notifyChatRendered: E,
					updateOpenedChatInfo: k
				}, G.id.toString())
			}, G.id.toString())
		] }) : B ? s.createElement(r("WAWebConversationPanelWrapper.react"), babelHelpers.extends({}, K, {
			key: Q,
			ref: i
		})) : q ? V : L !== o("WAWebNavBarTypes").NavBarItems.Chats ? s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, { type: L }) : s.jsx(r("WAWebIntroPanel.react"), {
			animate: $,
			ref: i
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = c(y);
	l.WAWebConversation = C;
}), 98);
