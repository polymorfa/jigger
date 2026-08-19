__d("WAWebConversationSpam.react", [
	"fbt",
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
	"fbs",
	"react",
	"requireDeferred",
	"useWAWebChatValues",
	"useWAWebContactValues",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.use, d = r("requireDeferred")("WAWebContactEditUtils").__setRef("WAWebConversationSpam.react"), m = r("requireDeferred")("WAWebContactLogging").__setRef("WAWebConversationSpam.react"), p = r("requireDeferred")("WAWebContactUtils").__setRef("WAWebConversationSpam.react"), _ = { paddingInlineEnd15: {
		paddingInlineEnd: "x1q3ajuy",
		$$css: !0
	} }, f = o("WAWebFaqUrl").getGroupHistoryFAQUrl(), g = {
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
	function h(e) {
		"use no forget";
		var t, n, a, i = e.chat, l = e.onClickDismissSpam, h = e.onClickNotSpam, C = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), b = o("useWAWebChatValues").useChatValues(i.id, [
			(t = o("WAWebChatGetters")).getId,
			t.getIsPSA,
			t.getIsIAS,
			(n = o("WAWebFrontendChatGetters")).getShouldAppearInList,
			n.getTrusted,
			t.getIsGroup,
			n.getContact,
			n.getGroupMetadata
		]), v = b[0], S = b[1], R = b[2], L = b[3], E = b[4], k = b[5], I = b[6], T = b[7], D = o("useWAWebContactValues").useContactValues(i.contact.id, [
			(a = o("WAWebContactGetters")).getId,
			a.getIsBusiness,
			a.getIsSupportAccount,
			a.getVerifiedLevel,
			o("WAWebFrontendContactGetters").getFormattedName,
			a.getIsMe,
			o("WAWebFrontendContactGetters").getBusinessProfile,
			o("WAWebFrontendContactGetters").getIsMyContact
		]), x = D[0], $ = D[1], P = D[2], N = D[3], M = D[4], w = D[5], A = D[6], F = D[7];
		o("useWAWebListener").useListener(o("WAWebBlocklistCollection").BlocklistCollection, [
			"add",
			"remove",
			"reset"
		], C);
		var O = c(o("WAWebGroupHistoryBundleInfoContext").WAWebGroupHistoryBundleInfoContext), B = O.earliestVisibleBundleSender, W = function() {
			o("WAWebSendSpamChatAction").sendReport({
				chat: i,
				spamFlow: k === !0 ? o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport : o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport
			}), o("WAWebModalManager").ModalManager.close();
		}, q = function() {
			o("WAWebSendSpamChatAction").sendSpamExitClear(i, o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport), o("WAWebModalManager").ModalManager.close();
		}, U = function() {
			var e = T == null ? void 0 : T.getParentGroupChat();
			e != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(i) ? o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
				chat: e,
				enableDeactivateIfSuperAdmin: !0,
				spamFlow: o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport
			}) : o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(i) ? o("WAWebOpenLeaveAndReportGroupModal").openLeaveAndReportGroupModal(i, o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport) : o("WAWebCmd").Cmd.deleteOrExitChat(i);
		}, V = function() {
			if (!k) {
				o("WAWebReportContactDialogUtils").openReportContactPopup(i, o("WAWebSpamConstants").SpamFlow.OneToOneChatSpamBannerReport);
				return;
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportSpamPopup.react"), {
				isGroupChat: !0,
				isMessage: !1,
				onCancel: o("WAWebModalManager").closeModalManager,
				onReport: W,
				onReportExitClear: q
			}));
		}, H = function() {
			o("WAWebGroupSafetyToolsModal.react").displayGroupSafetyToolsModal();
		};
		if (S || R || v.isAiHub() || !L || E || P || w) return null;
		var G = o("WAWebBlocklistCollection").BlocklistCollection.get(v), z = o("WAWebButton.react").WAWebButtonSecondary, j = o("WAWebButton.react").WAWebButtonSecondaryDestructive, K = s._(
			/*BTDS*/
			""
		), Q = u.jsxs(z, {
			onClick: h,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "not-spam-btn",
			children: [u.jsx("span", {
				className: "x1rg5ohu xt8t1vi x1xc408v x129tdwq x15urzxu xjbqb8w x5see2y x16hg961 x1pzews7 x1x3agtl x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1whkhu0 x3emv5x x1ydeqjr xyg86qh x1120s5i",
				children: u.jsx(r("WDSIconIcCheck.react"), {
					height: 12,
					width: 14
				})
			}), K]
		}, "not_spam"), X = u.jsx(r("WAWebUnstyledButton.react"), {
			dataTab: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			onClick: l,
			role: "button",
			testid: "dismiss-spam-btn",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginTopAuto, o("WDSMargins.stylex").wdsMargins.marginBottomAuto],
			children: u.jsx(o("WAWebXIcon.react").XIcon, {
				iconXstyle: g.grayLighterColor,
				height: 24,
				width: 24
			})
		}, "dismiss_spam"), Y = o("WAWebContactManagementGating").shouldShowAddContactButton(i.contact.id, F, o("WAWebContactManagementGating").addContactFMXCardEnabled()), J = u.jsx(z, {
			icon: r("WDSIconIcPersonAdd.react"),
			onClick: function() {
				(async function() {
					var e = await Promise.all([
						d.load(),
						p.load(),
						m.load()
					]), t = e[0].openContactEditDrawer, n = e[1].getContactDataFromContactModel, r = e[2].ContactSourceType;
					t(n(i.contact), r.SuspiciousChatBanner);
				})();
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "add-contact-btn",
			children: o("WAWebAddContactLabel").getAddToContactsLabel()
		}, "add_contact"), Z = u.jsx(j, {
			icon: o("WAWebThumbsDownIcon.react").ThumbsDownIcon,
			onClick: V,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "report-btn",
			children: s._(
				/*BTDS*/
				""
			)
		}, "report_spam"), ee = u.jsx(j, {
			icon: r("WDSIconIcLogout.react"),
			onClick: U,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "exit-btn",
			children: y(i)
		}, "exit_group"), te, ne, re = [];
		k ? (B != null ? te = s._(
			/*BTDS*/
			"",
			[
				s._param("group_history_bundle_sender", B),
				s._param("link_to_group_history_faq", u.jsx(r("WDSTextualLink.react"), {
					href: f,
					children: s._(
						/*BTDS*/
						""
					)
				})),
				s._implicitParam("=m4", u.jsx(r("WDSText.react"), {
					xstyle: g.groupHistorySecondaryText,
					colorName: "contentDeemphasized",
					type: "Body1",
					children: s._(
						/*BTDS*/
						""
					)
				}))
			]
		) : te = s._(
			/*BTDS*/
			"",
			[s._param("safety_tools", u.jsx(r("WAWebClickableLink.react"), {
				"data-tab": o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
				tabIndex: 0,
				onClick: H,
				xstyle: g.link,
				children: r("fbs")._(
					/*BTDS*/
					""
				)
			}))]
		), re.push(Z), re.push(ee), re.push(Q)) : (te = u.jsx(r("WAWebBox.react"), {
			xstyle: _.paddingInlineEnd15,
			children: s._(
				/*BTDS*/
				""
			)
		}), $ && (N !== o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ? te = s._(
			/*BTDS*/
			""
		) : N === o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH ? te = s._(
			/*BTDS*/
			""
		) : te = s._(
			/*BTDS*/
			""
		)), G ? ne = u.jsx(z, {
			grow: 1,
			onClick: function() {
				return o("WAWebBlockContactUtils").handleUnblock(i.contact, $ ? o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock : o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock);
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "unblock-btn",
			children: r("WAWebFbtCommon")("Unblock")
		}, "unblock") : ne = u.jsx(j, {
			grow: 1,
			icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			onClick: function() {
				return o("WAWebBlockContactUtils").handleBlock(i, $ ? o("WAWebBlockContants").BlockEntryPoint.BizSpamBannerBlock : o("WAWebBlockContants").BlockEntryPoint.OneToOneOldSpamBannerBlock);
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL,
			testid: "block-btn",
			children: r("WAWebFbtCommon")("Block")
		}, "block"), re.push(Z, ne, Q));
		var oe;
		return k ? oe = [ee, Q] : $ ? oe = [ne, Q] : oe = [ne, Y ? J : X], u.jsx(r("WAWebConversationNewBanner.react"), {
			buttons: oe,
			primaryText: te
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) ? r("WAWebFbtCommon")("Exit Community") : r("WAWebFbtCommon")("Exit Group");
	}
	l.default = h;
}), 226);
