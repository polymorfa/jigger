__d("WAWebCommunityFlow.react", [
	"WATimeUtils",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommunityActivityCollection",
	"WAWebCommunityActivityModel",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebCommunityCreationFlowMetricUtils",
	"WAWebCommunityDailyUtils",
	"WAWebCommunityFlowStep",
	"WAWebCommunityHomeWrapper.react",
	"WAWebCommunitySettingsDrawer.react",
	"WAWebCommunitySubgroupSuggestionsDrawer.react",
	"WAWebCommunityTabDrawer.react",
	"WAWebCommunityTabbedInfoDrawer.react",
	"WAWebCommunityTransferOwnershipFlowLoadable.react",
	"WAWebComposeBoxActions",
	"WAWebDeactivateCommunityDrawerLoadable",
	"WAWebDrawerManager",
	"WAWebEventInfoFlowLoadable",
	"WAWebEventsInChatDrawer.react",
	"WAWebFindChatAction",
	"WAWebGroupInviteLinkDrawerLoadable",
	"WAWebGroupMetadataCollection",
	"WAWebInfoFlowLoadable",
	"WAWebInfoFlowStep",
	"WAWebLimitSharingDrawer.react",
	"WAWebManageCommunityGroupsFlowLoadable",
	"WAWebNewCommunityInfoDrawer.react",
	"WAWebNewGroupFlowLoadable",
	"WAWebNewGroupFlowStep",
	"WAWebNewSubgroupSuggestionFlow.react",
	"WAWebUserPrefsMultiDevice",
	"WAWebWallpaperDrawer.react",
	"WAWebWamEnumCommunityCreationCurrentScreenType",
	"WAWebWamEnumCommunityCreationEntrypointType",
	"nullthrows",
	"react",
	"useWAWebFlow",
	"useWAWebParticipatingCommunities",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = a.initialStep, s = l === void 0 ? o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab : l, c = a.jid, _ = a.hasFetchedSubgroups, f = a.homeTheme, g = a.scrollToMemberList, h = a.showFullDescription, y = a.initialTab, C = y === void 0 ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : y, b = m(!0), v = m(C), S = m(0), R = function() {
			if (s === o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab) {
				b.current && o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.NO_ACTION_TAB_VIEWS);
				var e = r("WAWebCommunityActivityCollection").filter(function(e) {
					return e.type === o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY;
				});
				r("WAWebCommunityActivityCollection").remove(e);
			}
			i ? i() : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		}, L = o("useWAWebFlow").useFlow(s, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: R
		}), E = L[0], k = L[1], I = p(), T = I[0], D = I[1], x = p(), $ = x[0], P = x[1], N = {
			onBack: function() {
				return k.pop();
			},
			onManageCommunityGroupsClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.ManageGroupsFlow);
			},
			onInviteMembersClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.InviteMembersFlow);
			},
			onDeactivateCommunity: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.DeactivateCommunityFlow);
			},
			onTransferOwnership: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.TransferOwnershipFlow);
			},
			onAddNewGroupClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.NewGroupFlow);
			},
			onCommunitySettingsClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.CommunitySettings);
			},
			onMediaGalleryClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.MediaGallery);
			},
			onStarredMessagesClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.StarredMessages);
			},
			onKeptMessagesClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.KeptMessages);
			},
			onTabSwitch: function(t) {
				v.current = t;
			},
			onPendingGroupsClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.PendingGroups);
			},
			onEphemeralClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.Ephemeral);
			},
			onLimitSharingClick: function(t) {
				D(t), k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.LimitSharing);
			},
			onAllEventsClick: function(t) {
				var e;
				if (((e = t.groupMetadata) == null ? void 0 : e.isParentGroup) === !0) {
					k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.AllCommunityEvents);
					return;
				}
				D(t), k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.AllEvents);
			},
			onWallpaperClick: function() {
				return k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.Wallpaper);
			},
			onEventInfoClick: function(t, n) {
				P({
					eventMsg: t,
					eventMsgChat: n
				}), k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.EventInfo);
			}
		}, M = r("useWAWebParticipatingCommunities")(), w = p(c), A = w[0], F = w[1], O = r("useWAWebUnmountSignal")();
		d(function() {
			s === o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab && (o("WAWebUserPrefsMultiDevice").setCommunityTabLastSeenTimestamp(o("WATimeUtils").unixTime()), r("WAWebCommunityActivityCollection").trigger("community_tab_view"));
		}, []);
		async function B(e) {
			var t = await e;
			k.pop(), t != null && !O.aborted && o("WAWebFindChatAction").findOrCreateLatestChat(t, "communityTabFlow").then(function(e) {
				var t = e.chat;
				o("WAWebCmd").Cmd.openChatBottom({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
				}).then(function(e) {
					e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
				});
			});
		}
		function W(e, t) {
			N.onEventInfoClick(e, t);
		}
		if (k.step == null) return null;
		var q;
		switch (k.step) {
			case o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab: {
				q = u.jsx(r("WAWebCommunityTabDrawer.react"), {
					parentGroups: M,
					onBack: R,
					onNewCommunity: function() {
						b.current = !1, k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.NewCommunityFlow), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.COMMUNITIES_TAB), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITIES_TAB);
					},
					onActivityCell: function(t) {
						F(t), k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome);
					},
					onCommunityHome: function(t) {
						var e;
						v.current = o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community, b.current = !1, (e = o("WAWebCommunityDailyUtils")).incrementCommunityTabEvent(e.CommunityDailyTabMetricsType.TAB_TO_HOME_VIEWS), e.incrementCommunityHomeEvent(t, e.CommunityDailyHomeMetricsType.HOME_VIEWS), F(t), k.push(o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome);
					},
					initialScrollTop: S.current,
					setScrollTop: function(t) {
						S.current = t;
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome: {
				var U = r("nullthrows")(A, "selected community is null"), V = {};
				f === o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo && (V = {
					theme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo,
					initialTab: v.current,
					showFullDescription: h,
					scrollToMemberList: g
				}), q = u.jsx(o("WAWebCommunityHomeWrapper.react").CommunityHomeWrapper, babelHelpers.extends({
					jid: U,
					callbacks: N,
					hasFetchedSubgroups: _,
					theme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.Navigation
				}, V));
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.NewCommunityFlow: {
				q = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), { onBack: function() {
					return k.pop();
				} });
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.DeactivateCommunityFlow: {
				var H = r("nullthrows")(A), G = o("WAWebChatCollection").ChatCollection.get(H);
				if (G == null) {
					k.end();
					break;
				}
				q = u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
					onBack: function() {
						return k.pop();
					},
					chat: G
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.ManageGroupsFlow: {
				var z = r("nullthrows")(A), j = r("WAWebGroupMetadataCollection").assertGet(z);
				q = u.jsx(o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable, {
					parentGroupMetadata: j,
					onBack: function() {
						return k.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.InviteMembersFlow: {
				var K = r("nullthrows")(A), Q = o("WAWebChatCollection").ChatCollection.assertGet(K);
				q = u.jsx(o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable, {
					chat: Q,
					groupMetadata: r("nullthrows")(Q.groupMetadata),
					onBack: function() {
						return k.pop();
					},
					isCommunity: !0
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.NewGroupFlow: {
				var X = r("nullthrows")(A);
				o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(X) ? q = u.jsx(o("WAWebNewSubgroupSuggestionFlow.react").NewSubgroupSuggestionFlow, {
					parentGroup: X,
					onBack: function() {
						return k.pop();
					},
					onEnd: R
				}) : q = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: B,
					parentGroupWid: X,
					onEnd: function() {
						return k.pop();
					},
					initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
					shortenedCreationFlow: !0
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.CommunitySettings: {
				var Y = r("nullthrows")(A), J = o("WAWebChatCollection").ChatCollection.assertGet(Y);
				q = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
					chat: J,
					onBack: function() {
						return k.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.MediaGallery:
			case o("WAWebCommunityFlowStep").CommunityFlowStep.StarredMessages:
			case o("WAWebCommunityFlowStep").CommunityFlowStep.Ephemeral:
			case o("WAWebCommunityFlowStep").CommunityFlowStep.KeptMessages: {
				var Z = r("nullthrows")(A), ee = o("WAWebChatCollection").ChatCollection.assertGet(Z), te = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(ee.groupMetadata), ne = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(te == null ? void 0 : te.id)), re;
				k.step === o("WAWebCommunityFlowStep").CommunityFlowStep.MediaGallery ? re = o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery : k.step === o("WAWebCommunityFlowStep").CommunityFlowStep.StarredMessages ? re = o("WAWebInfoFlowStep").InfoFlowStep.Starred : k.step === o("WAWebCommunityFlowStep").CommunityFlowStep.Ephemeral ? re = o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral : re = o("WAWebInfoFlowStep").InfoFlowStep.Kept, q = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: ne,
					initialStep: re,
					onEnd: function() {
						return k.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.PendingGroups: {
				var oe = r("nullthrows")(A), ae = o("WAWebChatCollection").ChatCollection.assertGet(oe);
				q = u.jsx(r("WAWebCommunitySubgroupSuggestionsDrawer.react"), {
					chat: ae,
					onBack: function() {
						k.pop();
					},
					callbacks: N
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.AllEvents: {
				var ie = r("nullthrows")(T);
				q = u.jsx(r("WAWebEventsInChatDrawer.react"), {
					chat: ie,
					onBack: function() {
						return k.pop();
					},
					onEventClick: W,
					onCommunityEventsClick: function() {
						var e = r("nullthrows")(A);
						N.onAllEventsClick(o("WAWebChatCollection").ChatCollection.assertGet(e));
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.AllCommunityEvents: {
				var le = r("nullthrows")(A), se = o("WAWebChatCollection").ChatCollection.assertGet(le);
				q = u.jsx(r("WAWebEventsInChatDrawer.react"), {
					chat: se,
					onBack: function() {
						return k.pop();
					},
					onEventClick: W
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.Wallpaper: {
				var ue = r("nullthrows")(A), ce = o("WAWebChatCollection").ChatCollection.assertGet(ue), de = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(ce.groupMetadata), me = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(de == null ? void 0 : de.id));
				q = u.jsx(r("WAWebWallpaperDrawer.react"), {
					chat: me,
					onClose: function() {
						return k.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.EventInfo: {
				var pe = r("nullthrows")($), _e = pe.eventMsg, fe = pe.eventMsgChat;
				q = u.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
					chat: fe,
					msg: _e,
					onBack: function() {
						return k.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.TransferOwnershipFlow: {
				var ge = r("nullthrows")(A), he = o("WAWebChatCollection").ChatCollection.get(ge);
				if (he == null) {
					k.end();
					break;
				}
				q = u.jsx(o("WAWebCommunityTransferOwnershipFlowLoadable.react").CommunityTransferOwnershipFlowLoadable, {
					parentGroupChat: he,
					onEnd: function() {
						return k.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.LimitSharing: {
				var ye = r("nullthrows")(T);
				if (ye == null) {
					k.end();
					break;
				}
				q = u.jsx(r("WAWebLimitSharingDrawer.react"), {
					chat: ye,
					onClose: function() {
						return k.pop();
					}
				});
			}
		}
		return u.jsx(E, {
			flow: k,
			ref: n,
			displayName: "CommunityFlow",
			children: q
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.CommunityFlow = _;
}), 98);
