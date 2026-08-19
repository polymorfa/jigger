__d("WAWebConversationSpam.react", [
	"fbt",
	"Promise",
	"WAWebAddContactLabel",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebBlocklistCollection",
	"WAWebBox.react",
	"WAWebBusinessProfileTypes",
	"WAWebButton.react",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebContactGetters",
	"WAWebContactManagementGating",
	"WAWebConversationNewBanner.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFrontendChatGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupHistoryBundleInfoContext",
	"WAWebGroupSafetyToolsModal.react",
	"WAWebLeaveCommunityModalUtils",
	"WAWebModalManager",
	"WAWebOpenLeaveAndReportGroupModal",
	"WAWebReportContactDialogUtils",
	"WAWebReportSpamPopup.react",
	"WAWebSendSpamChatAction",
	"WAWebSettingsBlockedIcon.react",
	"WAWebSpamConstants",
	"WAWebTabOrder",
	"WAWebThumbsDownIcon.react",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"WDSIconIcCheck.react",
	"WDSIconIcLogout.react",
	"WDSIconIcPersonAdd.react",
	"WDSMargins.stylex",
	"WDSText.react",
	"WDSTextualLink.react",
	"asyncToGeneratorRuntime",
	"fbs",
	"react",
	"requireDeferred",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.use, m = r("requireDeferred")("WAWebContactEditUtils").__setRef("WAWebConversationSpam.react"), p = r("requireDeferred")("WAWebContactLogging").__setRef("WAWebConversationSpam.react"), _ = r("requireDeferred")("WAWebContactUtils").__setRef("WAWebConversationSpam.react"), f = { paddingInlineEnd15: {
		paddingInlineEnd: "x1q3ajuy",
		$$css: !0
	} }, g = o("WAWebFaqUrl").getGroupHistoryFAQUrl(), h = {
		link: {
			display: "xt0psk2",
			$$css: !0
		},
		groupHistorySecondaryText: {
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		grayLighterColor: {
			color: "xshy2n",
			$$css: !0
		}
	};
	function y(t) {
		"use no forget";
		var a, i, l, u = t.chat, y = t.onClickDismissSpam, b = t.onClickNotSpam, v = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), S = o("useWAWebChatValues").useChatValues(u.id, [
			(a = o("WAWebChatGetters")).getId,
			a.getIsPSA,
			a.getIsIAS,
			(i = o("WAWebFrontendChatGetters")).getShouldAppearInList,
			i.getTrusted,
			a.getIsGroup,
			i.getContact,
			i.getGroupMetadata
		]), R = S[0], L = S[1], E = S[2], k = S[3], I = S[4], T = S[5], D = S[6], x = S[7], $ = o("useWAWebContactValues").useContactValues(u.contact.id, [
			(l = o("WAWebContactGetters")).getId,
			l.getIsBusiness,
			l.getIsSupportAccount,
			l.getVerifiedLevel,
			o("WAWebFrontendContactGetters").getFormattedName,
			l.getIsMe,
			o("WAWebFrontendContactGetters").getBusinessProfile,
			o("WAWebFrontendContactGetters").getIsMyContact
		]), P = $[0], N = $[1], M = $[2], w = $[3], A = $[4], F = $[5], O = $[6], B = $[7];
		o("useWAWebListener").useListener(o("WAWebBlocklistCollection").BlocklistCollection, [
			"add",
			"remove",
			"reset"
		], v);
		var W = d(o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext), q = W.earliestVisibleBundleSender, U = function() {
			o("WAWebSendSpamChatAction").sendReport({
				chat: u,
				spamFlow: T === !0 ? o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport : o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport
			}), o("WAWebModalManager").ModalManager.close();
		}, V = function() {
			o("WAWebSendSpamChatAction").sendSpamExitClear(u, o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport), o("WAWebModalManager").ModalManager.close();
		}, H = function() {
			var e = x == null ? void 0 : x.getParentGroupChat();
			e != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(u) ? o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
				chat: e,
				enableDeactivateIfSuperAdmin: !0,
				spamFlow: o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport
			}) : o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(u) ? o("WAWebOpenLeaveAndReportGroupModal").openLeaveAndReportGroupModal(u, o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport) : o("WAWebCmd").Cmd.deleteOrExitChat(u);
		}, G = function() {
			if (!T) {
				o("WAWebReportContactDialogUtils").openReportContactPopup(u, o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport);
				return;
			}
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebReportSpamPopup.react"), {
				isGroupChat: !0,
				isMessage: !1,
				onCancel: o("WAWebModalManager").closeModalManager,
				onReport: U,
				onReportExitClear: V
			}));
		}, z = function() {
			o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
		};
		if (L || E || R.isAiHub() || !k || I || M || F) return null;
		var j = o("WAWebBlocklistCollection").BlocklistCollection.get(R), K = o("WAWebButton.react").WAWebButtonSecondary, Q = o("WAWebButton.react").WAWebButtonSecondaryDestructive, X = s._(
			/*BTDS*/
			""
		), Y = c.jsxs(K, {
			onClick: b,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "not-spam-btn",
			children: [c.jsx("span", {
				className: "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x5see2y x16hg961 x1pzews7 x1x3agtl x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1whkhu0 x3emv5x x1ydeqjr xyg86qh x1120s5i",
				children: c.jsx(r("WDSIconIcCheck.react"), {
					height: 12,
					width: 14
				})
			}), X]
		}, "not_spam"), J = c.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			onClick: y,
			role: "button",
			testid: "dismiss-spam-btn",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginTopAuto, o("WDSMargins.stylex").wdsMargins.marginBottomAuto],
			children: c.jsx(o("WAWebXIcon.react").XIcon, {
				iconXstyle: h.grayLighterColor,
				height: 24,
				width: 24
			})
		}, "dismiss_spam"), Z = o("WAWebContactManagementGating").shouldShowAddContactButton(u.contact.id, B, o("WAWebContactManagementGating").addContactFMXCardEnabled()), ee = c.jsx(K, {
			icon: r("WDSIconIcPersonAdd.react"),
			onClick: function() {
				n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var t = yield (e || (e = n("Promise"))).all([
						m.load(),
						_.load(),
						p.load()
					]), r = t[0].openContactEditDrawer, o = t[1].getContactDataFromContactModel, a = t[2].ContactSourceType;
					r(o(u.contact), a.SuspiciousChatBanner);
				})();
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "add-contact-btn",
			children: o("WAWebAddContactLabel").getAddToContactsLabel()
		}, "add_contact"), te = c.jsx(Q, {
			icon: o("WAWebThumbsDownIcon.react").ThumbsDownIcon,
			onClick: G,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "report-btn",
			children: s._(
				/*BTDS*/
				""
			)
		}, "report_spam"), ne = c.jsx(Q, {
			icon: r("WDSIconIcLogout.react"),
			onClick: H,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "exit-btn",
			children: C(u)
		}, "exit_group"), re, oe, ae = [];
		T ? (q != null ? re = s._(
			/*BTDS*/
			"",
			[
				s._param("group_history_bundle_sender", q),
				s._param("link_to_group_history_faq", c.jsx(r("WDSTextualLink.react"), {
					href: g,
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m4", c.jsx(r("WDSText.react"), {
					xstyle: h.groupHistorySecondaryText,
					colorName: "contentDeemphasized",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				}))
			]
		) : re = s._(
			/*BTDS*/
			"",
			[s._param("safety_tools", c.jsx(r("WAWebClickableLink.react"), {
				"data-tab": o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
				tabIndex: 0,
				onClick: z,
				xstyle: h.link,
				children: r("fbs")._(
					/*BTDS*/
					""
				)
			}))]
		), ae.push(te), ae.push(ne), ae.push(Y)) : (re = c.jsx(r("WAWebBox.react"), {
			xstyle: f.paddingInlineEnd15,
			children: s._(
				/*BTDS*/
				""
			)
		}), N && (w !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ? re = s._(
			/*BTDS*/
			""
		) : w === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ? re = s._(
			/*BTDS*/
			""
		) : re = s._(
			/*BTDS*/
			""
		)), j ? oe = c.jsx(K, {
			grow: 1,
			onClick: function() {
				return o("WAWebBlockContactUtils").handleUnblock(u.contact, N ? o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock : o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock);
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "unblock-btn",
			children: r("WAWebFbtCommon")("Unblock")
		}, "unblock") : oe = c.jsx(Q, {
			grow: 1,
			icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			onClick: function() {
				return o("WAWebBlockContactUtils").handleBlock(u, N ? o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock : o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock);
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "block-btn",
			children: r("WAWebFbtCommon")("Block")
		}, "block"), ae.push(te, oe, Y));
		var ie;
		return T ? ie = [ne, Y] : N ? ie = [oe, Y] : ie = [oe, Z ? ee : J], c.jsx(r("WAWebConversationNewBanner.react"), {
			buttons: ie,
			primaryText: re
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) ? r("WAWebFbtCommon")("Exit Community") : r("WAWebFbtCommon")("Exit Group");
	}
	l.default = y;
}), 226);
