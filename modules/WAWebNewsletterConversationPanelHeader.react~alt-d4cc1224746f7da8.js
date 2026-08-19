__d("WAWebNewsletterConversationPanelHeader.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebChatGetters",
	"WAWebCommonNewsletterEnums",
	"WAWebDrawerManager",
	"WAWebDrawerManagerContext",
	"WAWebFollowNewsletter",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebNewsletterAddToStatusButtonLoadable",
	"WAWebNewsletterDirectorySearchAction",
	"WAWebNewsletterExtendedGatingUtils",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterSubscribeButton.react",
	"WAWebNewsletterUpdateUserSettingsAction",
	"WAWebStateUtils",
	"WAWebTabOrder",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumChannelLinkShareEntryPoint",
	"WAWebWamEnumTsSurface",
	"WAWebWidFactory",
	"WDSButton.react",
	"WDSIconIcLink.react",
	"WDSIconIcNotifications.react",
	"WDSIconIcNotificationsOff.react",
	"WDSMenuBarItem.react",
	"WDSSpinner.react",
	"WDSTooltip.react",
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebModelValues",
	"useWAWebOnUnmount",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(38), n = e.chat, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [o("WAWebChatGetters").getIsNewsletter, o("WAWebChatGetters").getMuteExpiration], t[0] = a) : a = t[0];
		var i = o("useWAWebChatValues").useChatValues(n.id, a), l = i[0], c = i[1], d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = [
			"membershipType",
			"suspended",
			"terminated",
			"isSuspendedOrTerminated",
			"canBeMuted",
			"capabilities"
		], t[1] = d) : d = t[1];
		var p = o("useWAWebModelValues").useOptionalModelValues(n.newsletterMetadata, d), _;
		t[2] !== p ? (_ = function() {
			p == null || p.resetRecentlyFollowedFrom();
		}, t[2] = p, t[3] = _) : _ = t[3], r("useWAWebOnUnmount")(_);
		var f = m(!1), h = f[0], y = f[1], C = m(!1), b = C[0], v = C[1], S = r("useWAWebPrevious")(c);
		S !== c && b && v(!1);
		var R;
		t[4] !== n ? (R = async function() {
			y(!0), await Promise.allSettled([o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(n), {
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
			}), o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled() && o("WAWebNewsletterDirectorySearchAction").getSimilarNewslettersAction(o("WAWebStateUtils").unproxy(n))]), y(!1);
		}, t[4] = n, t[5] = R) : R = t[5];
		var L = R, E;
		t[6] !== n ? (E = function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: o("WAWebStateUtils").unproxy(n),
				loggingOptions: { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }
			}));
		}, t[6] = n, t[7] = E) : E = t[7];
		var k = E, I = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"), T;
		t[8] !== n || t[9] !== I ? (T = function() {
			var e, t = (e = I.existsDrawer()) != null ? e : !1;
			t || o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: n,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: n,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				noFocus: !0
			});
		}, t[8] = n, t[9] = I, t[10] = T) : T = t[10];
		var D = T, x;
		t[11] !== n.id || t[12] !== c ? (x = function() {
			v(!0), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(n.id, o("WAWebNewsletterModelUtils").isMuted(c) ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }).catch(function() {
				return v(!1);
			});
		}, t[11] = n.id, t[12] = c, t[13] = x) : x = t[13];
		var $ = x;
		if (!l || p == null) return null;
		if (p.isSuspendedOrTerminated) {
			var P;
			return t[14] !== k || t[15] !== p.membershipType ? (P = p.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber ? u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: k,
				testid: "conversation-panel-header-newsletter-unfollow-button"
			}) : null, t[14] = k, t[15] = p.membershipType, t[16] = P) : P = t[16], P;
		}
		var N = null;
		if (p.canBeMuted && !o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(n.newsletterMetadata)) {
			var M;
			t[17] !== c ? (M = o("WAWebNewsletterModelUtils").isMuted(c), t[17] = c, t[18] = M) : M = t[18];
			var w;
			t[19] !== $ || t[20] !== b || t[21] !== M ? (w = u.jsx(g, {
				isMuted: M,
				isTogglingMute: b,
				onClick: $
			}), t[19] = $, t[20] = b, t[21] = M, t[22] = w) : w = t[22], N = w;
		}
		var A;
		if (t[23] !== D || t[24] !== p) {
			var F;
			A = (F = p == null ? void 0 : p.iAmAdminOrOwner()) != null && F ? u.jsx(r("WDSMenuBarItem.react"), {
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "share-newsletter-button",
				icon: r("WDSIconIcLink.react"),
				onClick: D,
				title: s._(
					/*BTDS*/
					""
				)
			}) : null, t[23] = D, t[24] = p, t[25] = A;
		} else A = t[25];
		var O = A, B;
		if (t[26] !== L || t[27] !== h || t[28] !== p) {
			var W;
			B = (W = p == null ? void 0 : p.iAmGuest()) != null && W ? u.jsx(r("WAWebNewsletterSubscribeButton.react"), {
				onClick: L,
				isLoading: h
			}) : null, t[26] = L, t[27] = h, t[28] = p, t[29] = B;
		} else B = t[29];
		var q = B, U;
		t[30] !== n.id || t[31] !== p ? (U = o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(p) ? u.jsx(o("WAWebNewsletterAddToStatusButtonLoadable").WAWebNewsletterAddToStatusButtonLoadable, { newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(n.id) }) : null, t[30] = n.id, t[31] = p, t[32] = U) : U = t[32];
		var V = U, H;
		return t[33] !== V || t[34] !== N || t[35] !== O || t[36] !== q ? (H = u.jsxs(u.Fragment, { children: [
			V,
			O,
			N,
			q
		] }), t[33] = V, t[34] = N, t[35] = O, t[36] = q, t[37] = H) : H = t[37], H;
	}
	var _ = { deemphasized: {
		color: "xhslqc4",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(2), n = e.height, a = n === void 0 ? 20 : n, i;
		return t[0] !== a ? (i = u.jsx(r("WDSSpinner.react"), {
			size: a,
			xstyle: _.deemphasized
		}), t[0] = a, t[1] = i) : i = t[1], i;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(11), n = e.isMuted, a = e.isTogglingMute, i = e.onClick, l = !a, c;
		a ? c = f : n ? c = r("WDSIconIcNotificationsOff.react") : c = r("WDSIconIcNotifications.react");
		var d;
		t[0] !== n ? (d = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = n, t[1] = d) : d = t[1];
		var m = d, p = n ? "unmute-button" : "mute-button", _ = a ? void 0 : i, g;
		t[2] !== c || t[3] !== _ || t[4] !== p || t[5] !== m ? (g = u.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "medium",
			type: "default",
			directional: !0,
			Icon: c,
			"aria-label": m,
			onPress: _,
			testid: p,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
		}), t[2] = c, t[3] = _, t[4] = p, t[5] = m, t[6] = g) : g = t[6];
		var h = g, y;
		return t[7] !== h || t[8] !== l || t[9] !== m ? (y = l ? u.jsx(r("WDSTooltip.react"), {
			label: m,
			children: h
		}) : u.jsx("div", {
			title: m,
			children: h
		}), t[7] = h, t[8] = l, t[9] = m, t[10] = y) : y = t[10], y;
	}
	l.default = p;
}), 226);
