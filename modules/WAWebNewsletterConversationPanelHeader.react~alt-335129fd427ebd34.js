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
	"useWAWebChatValues",
	"useWAWebModelValues",
	"useWAWebOnUnmount",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["height"], u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useState;
	function _(e) {
		var t, n, a = e.chat, i = o("useWAWebChatValues").useChatValues(a.id, [o("WAWebChatGetters").getIsNewsletter, o("WAWebChatGetters").getMuteExpiration]), l = i[0], u = i[1], d = o("useWAWebModelValues").useOptionalModelValues(a.newsletterMetadata, [
			"membershipType",
			"suspended",
			"terminated",
			"isSuspendedOrTerminated",
			"canBeMuted",
			"capabilities"
		]);
		r("useWAWebOnUnmount")(function() {
			d == null || d.resetRecentlyFollowedFrom();
		});
		var _ = p(!1), f = _[0], g = _[1], y = p(!1), C = y[0], b = y[1], v = r("useWAWebPrevious")(u);
		v !== u && C && b(!1);
		var S = m(async function() {
			g(!0), await Promise.allSettled([o("WAWebFollowNewsletter").followNewsletter(o("WAWebStateUtils").unproxy(a), {
				eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
				discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
			}), o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled() && o("WAWebNewsletterDirectorySearchAction").getSimilarNewslettersAction(o("WAWebStateUtils").unproxy(a))]), g(!1);
		}, [a]), R = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: o("WAWebStateUtils").unproxy(a),
				loggingOptions: { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }
			}));
		}, [a]), L = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"), E = m(function() {
			var e, t = (e = L.existsDrawer()) != null ? e : !1;
			t || o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: a,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			} : c.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: a,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
				newsletterLinkShareScreenEntryPoint: o("WAWebWamEnumChannelLinkShareEntryPoint").CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD
			}), {
				transition: "slide-left",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				noFocus: !0
			});
		}, [a, L]), k = m(function() {
			b(!0), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(a.id, o("WAWebNewsletterModelUtils").isMuted(u) ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD }).catch(function() {
				return b(!1);
			});
		}, [a.id, u]);
		if (!l || d == null) return null;
		if (d.isSuspendedOrTerminated) return d.membershipType === o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber ? c.jsx(r("WDSButton.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			onPress: R,
			testid: "conversation-panel-header-newsletter-unfollow-button"
		}) : null;
		var I = null;
		d.canBeMuted && !o("WAWebNewsletterExtendedGatingUtils").isNewsletterAdminNotificationsEnabled(a.newsletterMetadata) && (I = c.jsx(h, {
			isMuted: o("WAWebNewsletterModelUtils").isMuted(u),
			isTogglingMute: C,
			onClick: k
		}));
		var T = (t = d == null ? void 0 : d.iAmAdminOrOwner()) != null && t ? c.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			testid: "share-newsletter-button",
			icon: r("WDSIconIcLink.react"),
			onClick: E,
			title: s._(
				/*BTDS*/
				""
			)
		}) : null, D = (n = d == null ? void 0 : d.iAmGuest()) != null && n ? c.jsx(r("WAWebNewsletterSubscribeButton.react"), {
			onClick: S,
			isLoading: f
		}) : null, x = o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled(d) ? c.jsx(o("WAWebNewsletterAddToStatusButtonLoadable").WAWebNewsletterAddToStatusButtonLoadable, { newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(a.id) }) : null;
		return c.jsxs(c.Fragment, { children: [
			x,
			T,
			I,
			D
		] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = { deemphasized: {
		color: "xhslqc4",
		$$css: !0
	} };
	function g(t) {
		var n = t.height, o = n === void 0 ? 20 : n, a = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return c.jsx(r("WDSSpinner.react"), {
			size: o,
			xstyle: f.deemphasized
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.isMuted, n = e.isTogglingMute, a = e.onClick, i = !n, l;
		n ? l = g : t ? l = r("WDSIconIcNotificationsOff.react") : l = r("WDSIconIcNotifications.react");
		var u = t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), d = t ? "unmute-button" : "mute-button", m = c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "medium",
			type: "default",
			directional: !0,
			Icon: l,
			"aria-label": u,
			onPress: n ? void 0 : a,
			testid: d,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON
		});
		return i ? c.jsx(r("WDSTooltip.react"), {
			label: u,
			children: m
		}) : c.jsx("div", {
			title: u,
			children: m
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = _;
}), 226);
