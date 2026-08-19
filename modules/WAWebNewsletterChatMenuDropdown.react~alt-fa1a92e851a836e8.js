__d("WAWebNewsletterChatMenuDropdown.react", [
	"fbt",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebCmd",
	"WAWebDrawerManager",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebModalManager",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterMsgLinkUtils",
	"WAWebReportNewsletterPopup.react",
	"WAWebSpamConstants",
	"WAWebStateUtils",
	"WAWebUnfollowNewsletterConfirmationModal.react",
	"WAWebWamEnumChannelEventSurface",
	"WAWebWamEnumTsSurface",
	"WDSIconIcCheckBox.react",
	"WDSIconIcClose.react",
	"WDSIconIcCode.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLogout.react",
	"WDSIconIcSettings.react",
	"WDSIconIcThumbDown.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback;
	function d(e) {
		var t, n, a, i, l, d = e.chat, m = e.onSelectMessages, p = d.newsletterMetadata, _ = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportNewsletterPopup.react"), {
				chat: d,
				spamFlow: o("WAWebSpamConstants").SpamFlow.OverflowMenuReport
			}));
		}, [d]), f = c(function() {
			o("WAWebCmd").Cmd.chatInfoDrawer(d);
		}, [d]), g = c(function() {
			o("WAWebCmd").Cmd.closeChat(d);
		}, [d]), h = c(function() {
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebUnfollowNewsletterConfirmationModal.react").UnfollowNewsletterConfirmationModal, {
				chat: o("WAWebStateUtils").unproxy(d),
				loggingOptions: {
					eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
					discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE.CHANNEL_THREAD
				}
			}));
		}, [d]), y = c(function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? {
				descriptorType: "info_flow",
				chat: d,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
			} : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
				chat: d,
				initialStep: o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings
			}));
		}, [d]), C = c(function() {
			o("WAWebNewsletterMsgLinkUtils").handleNewsletterChannelEmbedClick(d);
		}, [d]), b = s._(
			/*BTDS*/
			""
		), v = null;
		(t = d.newsletterMetadata) != null && t.iAmAdminOrOwner() && !((n = d.newsletterMetadata) != null && n.isSuspendedOrTerminated) && (v = u.jsx(r("WDSMenuItem.react"), {
			onPress: y,
			testid: "newsletter-overflow-menu-newsletter-settings",
			Icon: r("WDSIconIcSettings.react"),
			title: b
		}, "newsletter-overflow-menu-newsletter-settings"));
		var S = s._(
			/*BTDS*/
			""
		), R = null;
		o("WAWebNewsletterGatingUtils").canEmbedNewsletterChannel(p) && (R = u.jsx(r("WDSMenuItem.react"), {
			onPress: C,
			testid: "newsletter-overflow-menu-embed",
			Icon: r("WDSIconIcCode.react"),
			title: S
		}, "newsletter-overflow-menu-embed"));
		var L = s._(
			/*BTDS*/
			""
		), E = null;
		(a = d.newsletterMetadata) != null && a.isSuspendedOrTerminated || (E = u.jsx(r("WDSMenuItem.react"), {
			testid: "newsletter-overflow-menu-select-messages",
			onPress: m,
			Icon: r("WDSIconIcCheckBox.react"),
			title: L
		}, "newsletter-overflow-menu-select-messages"));
		var k = s._(
			/*BTDS*/
			""
		), I = null;
		(i = d.newsletterMetadata) != null && i.isSuspendedOrTerminated || (I = u.jsx(r("WDSMenuItem.react"), {
			onPress: _,
			testid: "newsletter-overflow-menu-report",
			Icon: r("WDSIconIcThumbDown.react"),
			title: k,
			destructive: !0
		}, "newsletter-overflow-menu-report"));
		var T = s._(
			/*BTDS*/
			""
		), D = s._(
			/*BTDS*/
			""
		), x = [
			u.jsx(r("WDSMenuItem.react"), {
				onPress: f,
				testid: "newsletter-overflow-menu-newsletter-info",
				Icon: r("WDSIconIcInfo.react"),
				title: T
			}, "newsletter-overflow-menu-newsletter-info"),
			v,
			R,
			E,
			u.jsx(r("WDSMenuItem.react"), {
				onPress: g,
				testid: "newsletter-overflow-menu-close-channel",
				Icon: r("WDSIconIcClose.react"),
				title: D
			}, "newsletter-overflow-menu-close-channel"),
			u.jsx(r("WDSMenuItem.react"), { type: "separator" }, "newsletter-overflow-menu-separator"),
			I
		], $ = s._(
			/*BTDS*/
			""
		);
		return (l = p == null ? void 0 : p.iAmSubscriber()) != null && l && x.push(u.jsx(r("WDSMenuItem.react"), {
			onPress: h,
			testid: "newsletter-overflow-menu-unfollow",
			Icon: r("WDSIconIcLogout.react"),
			title: $,
			destructive: !0
		}, "newsletter-overflow-menu-unfollow")), u.jsx(r("WDSMenu.react"), {
			testid: "newsletter-menu-dropdown",
			children: x
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
