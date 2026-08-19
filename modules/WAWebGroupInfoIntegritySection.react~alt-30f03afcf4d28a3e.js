__d("WAWebGroupInfoIntegritySection.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBlocklistUtils",
	"WAWebChatGetters",
	"WAWebChatGroupUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebCmd",
	"WAWebCommunityRemoveSubgroup",
	"WAWebDrawerButton.react",
	"WAWebDrawerButtonRefreshed.react",
	"WAWebExitGroupAction",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFrontendChatGetters",
	"WAWebGroupAddPrivacyTipBanner.react",
	"WAWebGroupIntegrityUtils",
	"WAWebGroupMetadataCollection",
	"WAWebIconPopup.react",
	"WAWebLeaveCommunityModalUtils",
	"WAWebMiscGatingUtils",
	"WAWebModalManager",
	"WAWebOpenLeaveAndReportGroupModal",
	"WAWebPrivacyTipActionWamEvent",
	"WAWebReportGroupDialogV2.react",
	"WAWebReportGroupPopup.react",
	"WAWebReportSpamPopup.react",
	"WAWebSendSpamChatAction",
	"WAWebSpamConstants",
	"WAWebSuspendedGroupUtils",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumPrivacyTipActionType",
	"WDSDialogBridge",
	"WDSIconIcCheck.react",
	"WDSIconIcLogout.react",
	"WDSIconIcThumbDown.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebChatValues",
	"useWAWebCommunitySubgroups",
	"useWAWebIAmCommunityAdmin",
	"useWAWebIAmGroupAdmin",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t, n = e.chat, r = e.showDeleteOrExit, a = r === void 0 ? !0 : r, i = (t = o("useWAWebModelValues").useOptionalModelValues(n.groupMetadata, ["parentGroup", "participants"])) != null ? t : {}, l = i.parentGroup, s = i.participants, c = (s == null ? void 0 : s.iAmAdmin()) && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n), d = a ? u.jsx(h, {
			chat: n,
			isRefresh: !0
		}) : null, m = o("WAWebChatGroupUtils").isTerminatedGroup(n) ? null : u.jsx(g, {
			chat: n,
			showAdditionalAction: !c
		}), p;
		return o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) || l == null || (p = u.jsx(y, {
			chat: n,
			parentGroup: l,
			isRefresh: !0
		})), u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: [
			p,
			d,
			m
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.isExit;
		d(function() {
			new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.VIEW }).commit();
		}, []);
		var n = function() {
			new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.CLICK_PRIVACY_TIP }).commit(), o("WAWebModalManager").ModalManager.close();
		}, a = function() {
			new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.CLICK_OK }).commit();
		}, i = function() {
			new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.CLICK_OUTSIDE }).commit(), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(r("WAWebIconPopup.react"), {
			icon: r("WDSIconIcCheck.react"),
			title: s._(
				/*BTDS*/
				""
			),
			description: u.jsx(u.Fragment, { children: t === !0 ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			) }),
			extraContent: u.jsx(o("WAWebFlex.react").FlexRow, {
				paddingTop: 40,
				children: u.jsx(r("WAWebGroupAddPrivacyTipBanner.react"), { onAction: n })
			}),
			onPrimaryActionClick: a,
			onOverlayClick: i
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.isExit, n = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
		n.groupAdd === "all" && o("WAWebModalManager").ModalManager.open(u.jsx(_, { isExit: t }));
	}
	function g(e) {
		var t, a = e.chat, i = e.showAdditionalAction, l = o("useWAWebModelValues").useModelValues(a, ["formattedTitle"]), c = l.formattedTitle, d = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && !o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(a) && !o("WAWebChatGroupUtils").isTerminatedGroup(a) && ((t = a.groupMetadata) == null ? void 0 : t.participants.iAmMember()) === !0, m = function() {
			var e = function() {
				o("WAWebSendSpamChatAction").sendReport({
					chat: a,
					spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport
				}), o("WAWebModalManager").ModalManager.close(), f({ isExit: !1 });
			};
			function t() {
				return l.apply(this, arguments);
			}
			function l() {
				return l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					yield o("WAWebSendSpamChatAction").sendReport({
						chat: a,
						spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport
					}), o("WAWebExitGroupAction").sendExitGroup(a), o("WAWebModalManager").ModalManager.close(), f({ isExit: !0 });
				}), l.apply(this, arguments);
			}
			var s = function() {
				var e, t = (e = a.groupMetadata) == null ? void 0 : e.getParentGroupChat();
				d && t ? o("WAWebSendSpamChatAction").sendReport({
					chat: a,
					spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport
				}).then(function() {
					o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: t });
				}) : (o("WAWebSendSpamChatAction").sendSpamExitClear(a, o("WAWebSpamConstants").SpamFlow.GroupInfoReport), o("WAWebModalManager").ModalManager.close(), f({ isExit: !0 }));
			};
			o("WAWebChatGetters").getIsGroup(a) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(a) && o("WAWebBlocklistUtils").isRBIForGroupsEnabled() ? o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebReportGroupDialogV2.react"), {
				onReport: e,
				onReportExit: function() {
					t();
				},
				showAdditionalAction: !o("WAWebChatGetters").getIsReadOnly(a)
			})) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportGroupPopup.react"), {
				onReportAndLeave: t,
				onReport: e,
				chat: a
			}), { transition: "modal-flow" }) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportSpamPopup.react"), {
				isMessage: !1,
				isGroupChat: !0,
				isCommunityAnnouncementGroup: d,
				showAdditionalActionCheckbox: i,
				onReport: e,
				onReportExitClear: s,
				onCancel: o("WAWebModalManager").closeModalManager
			}));
		}, p = s._(
			/*BTDS*/
			""
		), _ = s._(
			/*BTDS*/
			""
		), g = d ? p : _, h;
		return c != null && c !== "" && (h = d ? s._(
			/*BTDS*/
			"",
			[s._param("group_name", c)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("group_name", c)]
		)), u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-report-spam",
			danger: !0,
			icon: u.jsx(r("WDSIconIcThumbDown.react"), {}),
			ariaLabel: h,
			onClick: m,
			children: g
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.chat, n = e.isRefresh, a = o("useWAWebChatValues").useChatValues(t.id, [
			o("WAWebChatGetters").getIsReadOnly,
			o("WAWebChatGetters").getIsNewsletter,
			o("WAWebChatGetters").getIsUser,
			o("WAWebFrontendChatGetters").getGroupMetadata
		]), i = a[0], l = a[1], c = a[2], d = a[3], m = function() {
			if (o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(t)) o("WAWebOpenLeaveAndReportGroupModal").openLeaveAndReportGroupModal(t, o("WAWebSpamConstants").SpamFlow.GroupInfoLeaveReportUpsell);
			else {
				var e = d == null ? void 0 : d.getParentGroupChat();
				e != null && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) ? o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: e }) : o("WAWebCmd").Cmd.deleteOrExitChat(t);
			}
		}, p = function() {
			o("WAWebSuspendedGroupUtils").openExitAndDeleteGroupModal(t);
		}, _, f = m;
		return i ? _ = s._(
			/*BTDS*/
			""
		) : !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) && o("WAWebChatGroupUtils").isSuspendedGroup(t) && o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled() ? (_ = s._(
			/*BTDS*/
			""
		), f = p) : o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(t) ? _ = r("WAWebFbtCommon")("Exit Community") : _ = o("WAWebGroupIntegrityUtils").getLeaveGroupString(t), n === !0 ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-delete-group",
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			danger: !0,
			onClick: f,
			children: _
		}) : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "li-delete-group",
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			color: "danger",
			theme: "chat-info",
			onClick: f,
			children: _
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.chat, n = e.isRefresh, a = e.parentGroup, i = r("useWAWebUnmountSignal")(), l = o("useWAWebModelValues").useModelValues(t, [
			"groupMetadata",
			"isReadOnly",
			"id",
			"formattedTitle"
		]), c = l.formattedTitle, d = l.groupMetadata, p = l.id, _ = l.isReadOnly, f = r("WAWebGroupMetadataCollection").get(a.toString()), g = r("useWAWebIAmCommunityAdmin")(f), h = r("useWAWebIAmGroupAdmin")(d), y = r("useWAWebCommunitySubgroups")(f), C = y.joinedSubgroups, b = y.unjoinedSubgroups, v = m(!1), S = v[0], R = v[1];
		if (_ || C == null || b == null || !g && !h) return null;
		var L = function() {
			S || i.aborted || (o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
				parentId: a,
				removedSubgroupWid: p,
				removedSubgroupTitle: c,
				setLoading: R,
				iAmCommunityAdmin: g
			}), i.aborted);
		}, E = s._(
			/*BTDS*/
			""
		), k = "li-remove-group-from-community", I = function() {
			L();
		};
		return n === !0 ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: k,
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			disabled: S,
			danger: !0,
			onClick: I,
			children: E
		}) : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: k,
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			disabled: S,
			color: "danger",
			theme: "chat-info",
			onClick: I,
			children: E
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = p;
}), 226);
