__d("useWAWebCommunityActionListeners", [
	"WAWebActiveCommunityNavigation",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebCmd",
	"WAWebCommunityDailyUtils",
	"WAWebCommunityFlowLoadable",
	"WAWebCommunityFlowStep",
	"WAWebCommunityHomeWrapper.react",
	"WAWebCommunitySettingsDrawer.react",
	"WAWebCommunityTabbedInfoDrawer.react",
	"WAWebDrawerManager",
	"WAWebGroupMetadataCollection",
	"WAWebKeyboardTabUtils",
	"WAWebManageCommunityGroupsFlowLoadable",
	"WAWebModalManager",
	"WAWebNewGroupFlowLoadable",
	"WAWebNewGroupFlowStep",
	"WAWebNewSubgroupSuggestionFlowLoadable",
	"WAWebNoop",
	"WAWebSubgroupJoinModal.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(14), t = r("useWAWebUIM")(), n;
		e[0] !== t ? (n = function(n, a) {
			o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(n, o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType.HOME_VIEWS), r("WAWebActiveCommunityNavigation").setActive(n), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
				jid: n,
				hasFetchedSubgroups: a,
				initialStep: o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome,
				onBack: p
			}, "community-nav-" + n.toString()), {
				transition: "slide-left",
				uim: t,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				newDrawerContext: {
					type: "community_home",
					communityJid: n
				},
				disableRotateFocus: !0
			});
		}, e[0] = t, e[1] = n) : n = e[1];
		var a = n, i;
		e[2] !== t ? (i = function(n, r, a, i) {
			var e = r === void 0 ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : r;
			o("WAWebCommunityDailyUtils").incrementCommunityHomeEvent(n, o("WAWebCommunityDailyUtils").CommunityDailyHomeMetricsType.HOME_VIEWS), o("WAWebDrawerManager").DrawerManager.openDrawerRight(s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
				jid: n,
				initialStep: o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome,
				initialTab: e,
				homeTheme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo,
				scrollToMemberList: i,
				showFullDescription: a,
				onBack: m
			}, "community-info-" + n.toString()), {
				transition: "slide-left",
				uim: t,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, e[2] = t, e[3] = i) : i = e[3];
		var l = i, u;
		e[4] !== t ? (u = function(n) {
			r("WAWebActiveCommunityNavigation").setActive(n), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebCommunityFlowLoadable").CommunityFlowLoadable, {
				jid: n,
				initialStep: o("WAWebCommunityFlowStep").CommunityFlowStep.PendingGroups,
				onBack: function() {
					o("WAWebCmd").Cmd.openCommunityHome(n);
				}
			}), {
				transition: "slide-left",
				uim: t,
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, e[4] = t, e[5] = u) : u = e[5];
		var _ = u, f;
		e[6] !== a ? (f = function(t) {
			r("WAWebActiveCommunityNavigation").setActive(t), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable, {
				parentGroupMetadata: r("WAWebGroupMetadataCollection").assertGet(t),
				onBack: function() {
					return a(t, !1);
				}
			}));
		}, e[6] = a, e[7] = f) : f = e[7];
		var g = f, h;
		e[8] !== a ? (h = function(t) {
			r("WAWebActiveCommunityNavigation").setActive(t), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable, {
				parentGroupMetadata: r("WAWebGroupMetadataCollection").assertGet(t),
				onBack: function() {
					return a(t, !1);
				},
				initialStep: "existing_group"
			}));
		}, e[8] = a, e[9] = h) : h = e[9];
		var y = h, C;
		e[10] !== a ? (C = function(t) {
			var e, n = o("WAWebChatCollection").ChatCollection.get(t);
			!n || !((e = n.groupMetadata) != null && e.hasJoined()) || (r("WAWebActiveCommunityNavigation").setActive(t), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(r("WAWebCommunitySettingsDrawer.react"), {
				chat: n,
				onBack: function() {
					return a(t, !1);
				}
			}), {
				transition: "flow-transition-drawer-push",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			}));
		}, e[10] = a, e[11] = C) : C = e[11];
		var b = C, v;
		e[12] !== a ? (v = function(t, n, i) {
			r("WAWebActiveCommunityNavigation").setActive(t);
			var e;
			o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(t) ? e = s.jsx(o("WAWebNewSubgroupSuggestionFlowLoadable").NewSubgroupSuggestionFlowLoadable, {
				parentGroup: t,
				onBack: function() {
					return a(t, !1);
				}
			}) : e = s.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
				onCreateGroup: n,
				parentGroupWid: t,
				onEnd: function() {
					return a(t, !1);
				},
				initialSelectedSubgroup: i,
				initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
				shortenedCreationFlow: !0
			}), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(e, {
				transition: "flow-transition-drawer-push",
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE
			});
		}, e[12] = a, e[13] = v) : v = e[13];
		var S = v, R = d;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_subgroup_join_modal", R), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_home", a), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_tabbed_info", l), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_pending_groups_drawer", _), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_home_manage_groups", g), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_add_new_group", S), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_add_existing_group", y), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "open_community_settings_drawer", b), o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_active_chat", c);
	}
	function c() {
		r("WAWebActiveCommunityNavigation").setActive(null);
	}
	function d(e, t) {
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSubgroupJoinModal.react"), {
			subgroupMetadata: e,
			onSuccess: r("WAWebNoop"),
			source: t
		}));
	}
	function m() {
		o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
	}
	function p() {
		r("WAWebActiveCommunityNavigation").setActive(null), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
	}
	l.default = u;
}), 98);
