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
	"react",
	"react-compiler-runtime",
	"useWAWebChatValues",
	"useWAWebCommunitySubgroups",
	"useWAWebIAmCommunityAdmin",
	"useWAWebIAmGroupAdmin",
	"useWAWebModelValues",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t, n = o("react-compiler-runtime").c(16), r = e.chat, a = e.showDeleteOrExit, i = a === void 0 ? !0 : a, l = (t = o("useWAWebModelValues").useOptionalModelValues(r.groupMetadata, ["parentGroup", "participants"])) != null ? t : {}, s = l.parentGroup, c = l.participants, d;
		n[0] !== r || n[1] !== c ? (d = (c == null ? void 0 : c.iAmAdmin()) && o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r), n[0] = r, n[1] = c, n[2] = d) : d = n[2];
		var m = d, p;
		n[3] !== r || n[4] !== i ? (p = i ? u.jsx(v, {
			chat: r,
			isRefresh: !0
		}) : null, n[3] = r, n[4] = i, n[5] = p) : p = n[5];
		var _ = p, f;
		n[6] !== r || n[7] !== m ? (f = o("WAWebChatGroupUtils").isTerminatedGroup(r) ? null : u.jsx(b, {
			chat: r,
			showAdditionalAction: !m
		}), n[6] = r, n[7] = m, n[8] = f) : f = n[8];
		var g = f, h;
		if (!(o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(r) || s == null)) {
			var y;
			n[9] !== r || n[10] !== s ? (y = u.jsx(S, {
				chat: r,
				parentGroup: s,
				isRefresh: !0
			}), n[9] = r, n[10] = s, n[11] = y) : y = n[11], h = y;
		}
		var C;
		return n[12] !== _ || n[13] !== g || n[14] !== h ? (C = u.jsxs(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection, { children: [
			h,
			_,
			g
		] }), n[12] = _, n[13] = g, n[14] = h, n[15] = C) : C = n[15], C;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(7), n = e.isExit, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [], t[0] = a) : a = t[0], d(y, a);
		var i = h, l = g, c = f, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[1] = m) : m = t[1];
		var p;
		t[2] !== n ? (p = u.jsx(u.Fragment, { children: n === !0 ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) }), t[2] = n, t[3] = p) : p = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(o("WAWebFlex.react").FlexRow, {
			paddingTop: 40,
			children: u.jsx(r("WAWebGroupAddPrivacyTipBanner.react"), { onAction: i })
		}), t[4] = _) : _ = t[4];
		var C;
		return t[5] !== p ? (C = u.jsx(r("WAWebIconPopup.react"), {
			icon: r("WDSIconIcCheck.react"),
			title: m,
			description: p,
			extraContent: _,
			onPrimaryActionClick: l,
			onOverlayClick: c
		}), t[5] = p, t[6] = C) : C = t[6], C;
	}
	function f() {
		new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.CLICK_OUTSIDE }).commit(), o("WAWebModalManager").ModalManager.close();
	}
	function g() {
		new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.CLICK_OK }).commit();
	}
	function h() {
		new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.CLICK_PRIVACY_TIP }).commit(), o("WAWebModalManager").ModalManager.close();
	}
	function y() {
		new (o("WAWebPrivacyTipActionWamEvent")).PrivacyTipActionWamEvent({ privacyTipActionType: o("WAWebWamEnumPrivacyTipActionType").PRIVACY_TIP_ACTION_TYPE.VIEW }).commit();
	}
	function C(e) {
		var t = e.isExit, n = o("WAWebUserPrefsGeneral").getUserPrivacySettings();
		n.groupAdd === "all" && o("WAWebModalManager").ModalManager.open(u.jsx(_, { isExit: t }));
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(17), n = e.chat, a = e.showAdditionalAction, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["formattedTitle"], t[0] = i) : i = t[0];
		var l = o("useWAWebModelValues").useModelValues(n, i), c = l.formattedTitle, d;
		if (t[1] !== n) {
			var m;
			d = o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) && !o("WAWebChatGroupUtils").isIntegrityDeactivatedCommunityAnnouncementGroup(n) && !o("WAWebChatGroupUtils").isTerminatedGroup(n) && ((m = n.groupMetadata) == null ? void 0 : m.participants.iAmMember()) === !0, t[1] = n, t[2] = d;
		} else d = t[2];
		var p = d, _;
		t[3] !== n || t[4] !== p || t[5] !== a ? (_ = function() {
			var e = function() {
				o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport
				}), o("WAWebModalManager").ModalManager.close(), C({ isExit: !1 });
			}, t = async function() {
				await o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport
				}), o("WAWebExitGroupAction").sendExitGroup(n), o("WAWebModalManager").ModalManager.close(), C({ isExit: !0 });
			}, i = function() {
				var e, t = (e = n.groupMetadata) == null ? void 0 : e.getParentGroupChat();
				p && t ? o("WAWebSendSpamChatAction").sendReport({
					chat: n,
					spamFlow: o("WAWebSpamConstants").SpamFlow.GroupInfoReport
				}).then(function() {
					o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({ chat: t });
				}) : (o("WAWebSendSpamChatAction").sendSpamExitClear(n, o("WAWebSpamConstants").SpamFlow.GroupInfoReport), o("WAWebModalManager").ModalManager.close(), C({ isExit: !0 }));
			};
			o("WAWebChatGetters").getIsGroup(n) && !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(n) && o("WAWebBlocklistUtils").isRBIForGroupsEnabled() ? o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebReportGroupDialogV2.react"), {
				onReport: e,
				onReportExit: function() {
					t();
				},
				showAdditionalAction: !o("WAWebChatGetters").getIsReadOnly(n)
			})) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportGroupPopup.react"), {
				onReportAndLeave: t,
				onReport: e,
				chat: n
			}), { transition: "modal-flow" }) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebReportSpamPopup.react"), {
				isMessage: !1,
				isGroupChat: !0,
				isCommunityAnnouncementGroup: p,
				showAdditionalActionCheckbox: a,
				onReport: e,
				onReportExitClear: i,
				onCancel: o("WAWebModalManager").closeModalManager
			}));
		}, t[3] = n, t[4] = p, t[5] = a, t[6] = _) : _ = t[6];
		var f = _, g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), t[7] = g) : g = t[7];
		var h = g, y;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[8] = y) : y = t[8];
		var b = y, v = p ? h : b, S;
		if (c != null && c !== "") {
			var R;
			t[9] !== c || t[10] !== p ? (R = p ? s._(
				/*BTDS*/
				"",
				[s._param("group_name", c)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("group_name", c)]
			), t[9] = c, t[10] = p, t[11] = R) : R = t[11], S = R;
		}
		var L;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSIconIcThumbDown.react"), {}), t[12] = L) : L = t[12];
		var E;
		return t[13] !== v || t[14] !== f || t[15] !== S ? (E = u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-report-spam",
			danger: !0,
			icon: L,
			ariaLabel: S,
			onClick: f,
			children: v
		}), t[13] = v, t[14] = f, t[15] = S, t[16] = E) : E = t[16], E;
	}
	function v(e) {
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
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = o("react-compiler-runtime").c(17), n = e.chat, a = e.isRefresh, i = e.parentGroup, l = r("useWAWebUnmountSignal")(), c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [
			"groupMetadata",
			"isReadOnly",
			"id",
			"formattedTitle"
		], t[0] = c) : c = t[0];
		var d = o("useWAWebModelValues").useModelValues(n, c), p = d.formattedTitle, _ = d.groupMetadata, f = d.id, g = d.isReadOnly, h;
		t[1] !== i ? (h = r("WAWebGroupMetadataCollection").get(i.toString()), t[1] = i, t[2] = h) : h = t[2];
		var y = h, C = r("useWAWebIAmCommunityAdmin")(y), b = r("useWAWebIAmGroupAdmin")(_), v = r("useWAWebCommunitySubgroups")(y), S = v.joinedSubgroups, R = v.unjoinedSubgroups, L = m(!1), E = L[0], k = L[1];
		if (g || S == null || R == null || !C && !b) return null;
		var I;
		t[3] !== E || t[4] !== C || t[5] !== l || t[6] !== i || t[7] !== p || t[8] !== f ? (I = function() {
			E || l.aborted || (o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
				parentId: i,
				removedSubgroupWid: f,
				removedSubgroupTitle: p,
				setLoading: k,
				iAmCommunityAdmin: C
			}), l.aborted);
		}, t[3] = E, t[4] = C, t[5] = l, t[6] = i, t[7] = p, t[8] = f, t[9] = I) : I = t[9];
		var T = I, D;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[10] = D) : D = t[10];
		var x = D, $;
		t[11] !== T ? ($ = function() {
			T();
		}, t[11] = T, t[12] = $) : $ = t[12];
		var P = $, N;
		return t[13] !== E || t[14] !== P || t[15] !== a ? (N = a === !0 ? u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
			testid: "li-remove-group-from-community",
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			disabled: E,
			danger: !0,
			onClick: P,
			children: x
		}) : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
			testid: "li-remove-group-from-community",
			icon: u.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
			disabled: E,
			color: "danger",
			theme: "chat-info",
			onClick: P,
			children: x
		}), t[13] = E, t[14] = P, t[15] = a, t[16] = N) : N = t[16], N;
	}
	l.default = p;
}), 226);
