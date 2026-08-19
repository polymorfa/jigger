__d("WAWebNewsletterConversationPanelHeader.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebChatValues",
	"useWAWebModelValues",
	"useWAWebOnUnmount",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["height"], u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState;
	function f(e) {
		var t, a, i = e.chat, l = o("useWAWebChatValues").useChatValues(i.id, [o("WAWebChatGetters").getIsNewsletter, o("WAWebChatGetters").getMuteExpiration]), c = l[0], m = l[1], f = o("useWAWebModelValues").useOptionalModelValues(i.newsletterMetadata, [
			"membershipType",
			"suspended",
			"terminated",
			"isSuspendedOrTerminated",
			"canBeMuted",
			"capabilities"
		]);
		r("useWAWebOnUnmount")(function() {
			f == null || f.resetRecentlyFollowedFrom();
		});
		var g = _(!1), h = g[0], C = g[1], b = _(!1), v = b[0], S = b[1], R = r("useWAWebPrevious")(m);
		R !== m && v && S(!1);
		var L = p(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			C(!0), yield (u || (u = n("Promise"))).allSettled([o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(i), {
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
			}), o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled() && o("WAWebNewsletterDirectorySearchAction").getSimilarNewslettersAction(o("WAWebStateUtils").unproxy(i))]), C(!1);
		}), [i]), E = p(function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: o("WAWebStateUtils").unproxy(i),
				loggingOptions: { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }
			}));
		}, [i]), k = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"), I = p(function() {
			var e, t = (e = k.existsDrawer()) != null ? e : !1;
			t || o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: i,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			} : d.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: i,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				noFocus: !0
			});
		}, [i, k]), T = p(function() {
			S(!0), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(i.id, o("WAWebNewsletterModelUtils").isMuted(m) ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }).catch(function() {
				return S(!1);
			});
		}, [i.id, m]);
		if (!c || f == null) return null;
		if (f.isSuspendedOrTerminated) return f.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber ? d.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: E,
			testid: "conversation-panel-header-newsletter-unfollow-button"
		}) : null;
		var D = null;
		f.canBeMuted && !o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(i.newsletterMetadata) && (D = d.jsx(y, {
			isMuted: o("WAWebNewsletterModelUtils").isMuted(m),
			isTogglingMute: v,
			onClick: T
		}));
		var x = (t = f == null ? void 0 : f.iAmAdminOrOwner()) != null && t ? d.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			testid: "share-newsletter-button",
			icon: r("WDSIconIcLink.react"),
			onClick: I,
			title: s._(
				/*BTDS*/
				""
			)
		}) : null, $ = (a = f == null ? void 0 : f.iAmGuest()) != null && a ? d.jsx(r("WAWebNewsletterSubscribeButton.react"), {
			onClick: L,
			isLoading: h
		}) : null, P = o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(f) ? d.jsx(o("WAWebNewsletterAddToStatusButtonLoadable").WAWebNewsletterAddToStatusButtonLoadable, { newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(i.id) }) : null;
		return d.jsxs(d.Fragment, { children: [
			P,
			x,
			D,
			$
		] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = { deemphasized: {
		color: "xhslqc4",
		$$css: !0
	} };
	function h(t) {
		var n = t.height, o = n === void 0 ? 20 : n, a = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return d.jsx(r("WDSSpinner.react"), {
			size: o,
			xstyle: g.deemphasized
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.isMuted, n = e.isTogglingMute, a = e.onClick, i = !n, l;
		n ? l = h : t ? l = r("WDSIconIcNotificationsOff.react") : l = r("WDSIconIcNotifications.react");
		var u = t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), c = t ? "unmute-button" : "mute-button", m = d.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "medium",
			type: "default",
			directional: !0,
			Icon: l,
			"aria-label": u,
			onPress: n ? void 0 : a,
			testid: c,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
		});
		return i ? d.jsx(r("WDSTooltip.react"), {
			label: u,
			children: m
		}) : d.jsx("div", {
			title: u,
			children: m
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = f;
}), 226);
