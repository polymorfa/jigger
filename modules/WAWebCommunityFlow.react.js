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
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"useWAWebFlow",
	"useWAWebParticipatingCommunities",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useRef, p = c.useState;
	function _(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.onBack, s = i.initialStep, c = s === void 0 ? o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab : s, _ = i.jid, f = i.hasFetchedSubgroups, g = i.homeTheme, h = i.scrollToMemberList, y = i.showFullDescription, C = i.initialTab, b = C === void 0 ? o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community : C, v = m(!0), S = m(b), R = m(0), L = function() {
			if (c === o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab) {
				v.current && o("WAWebCommunityDailyUtils").incrementCommunityTabEvent(o("WAWebCommunityDailyUtils").CommunityDailyTabMetricsType.NO_ACTION_TAB_VIEWS);
				var e = r("WAWebCommunityActivityCollection").filter(function(e) {
					return e.type === o("WAWebCommunityActivityModel").ActivityTypeType.NEW_COMMUNITY;
				});
				r("WAWebCommunityActivityCollection").remove(e);
			}
			l ? l() : o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		}, E = o("useWAWebFlow").useFlow(c, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: L
		}), k = E[0], I = E[1], T = p(), D = T[0], x = T[1], $ = p(), P = $[0], N = $[1], M = {
			onBack: function() {
				return I.pop();
			},
			onManageCommunityGroupsClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.ManageGroupsFlow);
			},
			onInviteMembersClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.InviteMembersFlow);
			},
			onDeactivateCommunity: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.DeactivateCommunityFlow);
			},
			onTransferOwnership: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.TransferOwnershipFlow);
			},
			onAddNewGroupClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.NewGroupFlow);
			},
			onCommunitySettingsClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.CommunitySettings);
			},
			onMediaGalleryClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.MediaGallery);
			},
			onStarredMessagesClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.StarredMessages);
			},
			onKeptMessagesClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.KeptMessages);
			},
			onTabSwitch: function(t) {
				S.current = t;
			},
			onPendingGroupsClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.PendingGroups);
			},
			onEphemeralClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.Ephemeral);
			},
			onLimitSharingClick: function(t) {
				x(t), I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.LimitSharing);
			},
			onAllEventsClick: function(t) {
				var e;
				if (((e = t.groupMetadata) == null ? void 0 : e.isParentGroup) === !0) {
					I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.AllCommunityEvents);
					return;
				}
				x(t), I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.AllEvents);
			},
			onWallpaperClick: function() {
				return I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.Wallpaper);
			},
			onEventInfoClick: function(t, n) {
				N({
					eventMsg: t,
					eventMsgChat: n
				}), I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.EventInfo);
			}
		}, w = r("useWAWebParticipatingCommunities")(), A = p(_), F = A[0], O = A[1], B = r("useWAWebUnmountSignal")();
		d(function() {
			c === o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab && (o("WAWebUserPrefsMultiDevice").setCommunityTabLastSeenTimestamp(o("WATimeUtils").unixTime()), r("WAWebCommunityActivityCollection").trigger("community_tab_view"));
		}, []);
		function W(e) {
			return q.apply(this, arguments);
		}
		function q() {
			return q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e;
				I.pop(), t != null && !B.aborted && o("WAWebFindChatAction").findOrCreateLatestChat(t, "communityTabFlow").then(function(e) {
					var t = e.chat;
					o("WAWebCmd").Cmd.openChatBottom({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
					}).then(function(e) {
						e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
					});
				});
			}), q.apply(this, arguments);
		}
		function U(e, t) {
			M.onEventInfoClick(e, t);
		}
		if (I.step == null) return null;
		var V;
		switch (I.step) {
			case o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityTab: {
				V = u.jsx(r("WAWebCommunityTabDrawer.react"), {
					parentGroups: w,
					onBack: L,
					onNewCommunity: function() {
						v.current = !1, I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.NewCommunityFlow), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.startSession(o("WAWebWamEnumCommunityCreationEntrypointType").COMMUNITY_CREATION_ENTRYPOINT_TYPE.COMMUNITIES_TAB), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.enter(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITIES_TAB);
					},
					onActivityCell: function(t) {
						O(t), I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome);
					},
					onCommunityHome: function(t) {
						var e;
						S.current = o("WAWebCommunityTabbedInfoDrawer.react").CommunityInfoTabs.Community, v.current = !1, (e = o("WAWebCommunityDailyUtils")).incrementCommunityTabEvent(e.CommunityDailyTabMetricsType.TAB_TO_HOME_VIEWS), e.incrementCommunityHomeEvent(t, e.CommunityDailyHomeMetricsType.HOME_VIEWS), O(t), I.push(o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome);
					},
					initialScrollTop: R.current,
					setScrollTop: function(t) {
						R.current = t;
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.CommunityHome: {
				var H = r("nullthrows")(F, "selected community is null"), G = {};
				g === o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo && (G = {
					theme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.TabbedInfo,
					initialTab: S.current,
					showFullDescription: y,
					scrollToMemberList: h
				}), V = u.jsx(o("WAWebCommunityHomeWrapper.react").CommunityHomeWrapper, babelHelpers.extends({
					jid: H,
					callbacks: M,
					hasFetchedSubgroups: f,
					theme: o("WAWebCommunityHomeWrapper.react").CommunityHomeTheme.Navigation
				}, G));
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.NewCommunityFlow: {
				V = u.jsx(r("WAWebNewCommunityInfoDrawer.react"), { onBack: function() {
					return I.pop();
				} });
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.DeactivateCommunityFlow: {
				var z = r("nullthrows")(F), j = o("WAWebChatCollection").ChatCollection.get(z);
				if (j == null) {
					I.end();
					break;
				}
				V = u.jsx(o("WAWebDeactivateCommunityDrawerLoadable").DeactivateCommunityDrawerLoadable, {
					onBack: function() {
						return I.pop();
					},
					chat: j
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.ManageGroupsFlow: {
				var K = r("nullthrows")(F), Q = r("WAWebGroupMetadataCollection").assertGet(K);
				V = u.jsx(o("WAWebManageCommunityGroupsFlowLoadable").ManageCommunityGroupsFlowLoadable, {
					parentGroupMetadata: Q,
					onBack: function() {
						return I.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.InviteMembersFlow: {
				var X = r("nullthrows")(F), Y = o("WAWebChatCollection").ChatCollection.assertGet(X);
				V = u.jsx(o("WAWebGroupInviteLinkDrawerLoadable").GroupInviteLinkDrawerLoadable, {
					chat: Y,
					groupMetadata: r("nullthrows")(Y.groupMetadata),
					onBack: function() {
						return I.pop();
					},
					isCommunity: !0
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.NewGroupFlow: {
				var J = r("nullthrows")(F);
				o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(J) ? V = u.jsx(o("WAWebNewSubgroupSuggestionFlow.react").NewSubgroupSuggestionFlow, {
					parentGroup: J,
					onBack: function() {
						return I.pop();
					},
					onEnd: L
				}) : V = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: W,
					parentGroupWid: J,
					onEnd: function() {
						return I.pop();
					},
					initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
					shortenedCreationFlow: !0
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.CommunitySettings: {
				var Z = r("nullthrows")(F), ee = o("WAWebChatCollection").ChatCollection.assertGet(Z);
				V = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
					chat: ee,
					onBack: function() {
						return I.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.MediaGallery:
			case o("WAWebCommunityFlowStep").CommunityFlowStep.StarredMessages:
			case o("WAWebCommunityFlowStep").CommunityFlowStep.Ephemeral:
			case o("WAWebCommunityFlowStep").CommunityFlowStep.KeptMessages: {
				var te = r("nullthrows")(F), ne = o("WAWebChatCollection").ChatCollection.assertGet(te), re = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(ne.groupMetadata), oe = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(re == null ? void 0 : re.id)), ae;
				I.step === o("WAWebCommunityFlowStep").CommunityFlowStep.MediaGallery ? ae = o("WAWebInfoFlowStep").InfoFlowStep.MediaGallery : I.step === o("WAWebCommunityFlowStep").CommunityFlowStep.StarredMessages ? ae = o("WAWebInfoFlowStep").InfoFlowStep.Starred : I.step === o("WAWebCommunityFlowStep").CommunityFlowStep.Ephemeral ? ae = o("WAWebInfoFlowStep").InfoFlowStep.Ephemeral : ae = o("WAWebInfoFlowStep").InfoFlowStep.Kept, V = u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
					chat: oe,
					initialStep: ae,
					onEnd: function() {
						return I.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.PendingGroups: {
				var ie = r("nullthrows")(F), le = o("WAWebChatCollection").ChatCollection.assertGet(ie);
				V = u.jsx(r("WAWebCommunitySubgroupSuggestionsDrawer.react"), {
					chat: le,
					onBack: function() {
						I.pop();
					},
					callbacks: M
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.AllEvents: {
				var se = r("nullthrows")(D);
				V = u.jsx(r("WAWebEventsInChatDrawer.react"), {
					chat: se,
					onBack: function() {
						return I.pop();
					},
					onEventClick: U,
					onCommunityEventsClick: function() {
						var e = r("nullthrows")(F);
						M.onAllEventsClick(o("WAWebChatCollection").ChatCollection.assertGet(e));
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.AllCommunityEvents: {
				var ue = r("nullthrows")(F), ce = o("WAWebChatCollection").ChatCollection.assertGet(ue);
				V = u.jsx(r("WAWebEventsInChatDrawer.react"), {
					chat: ce,
					onBack: function() {
						return I.pop();
					},
					onEventClick: U
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.Wallpaper: {
				var de = r("nullthrows")(F), me = o("WAWebChatCollection").ChatCollection.assertGet(de), pe = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(me.groupMetadata), _e = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(pe == null ? void 0 : pe.id));
				V = u.jsx(r("WAWebWallpaperDrawer.react"), {
					chat: _e,
					onClose: function() {
						return I.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.EventInfo: {
				var fe = r("nullthrows")(P), ge = fe.eventMsg, he = fe.eventMsgChat;
				V = u.jsx(o("WAWebEventInfoFlowLoadable").EventInfoFlowLoadable, {
					chat: he,
					msg: ge,
					onBack: function() {
						return I.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.TransferOwnershipFlow: {
				var ye = r("nullthrows")(F), Ce = o("WAWebChatCollection").ChatCollection.get(ye);
				if (Ce == null) {
					I.end();
					break;
				}
				V = u.jsx(o("WAWebCommunityTransferOwnershipFlowLoadable.react").CommunityTransferOwnershipFlowLoadable, {
					parentGroupChat: Ce,
					onEnd: function() {
						return I.pop();
					}
				});
				break;
			}
			case o("WAWebCommunityFlowStep").CommunityFlowStep.LimitSharing: {
				var be = r("nullthrows")(D);
				if (be == null) {
					I.end();
					break;
				}
				V = u.jsx(r("WAWebLimitSharingDrawer.react"), {
					chat: be,
					onClose: function() {
						return I.pop();
					}
				});
			}
		}
		return u.jsx(k, {
			flow: I,
			ref: a,
			displayName: "CommunityFlow",
			children: V
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.CommunityFlow = _;
}), 98);
