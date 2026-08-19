__d("WAWebManageCommunityGroupsFlow.react", [
	"$InternalEnum",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebCommunityExistingGroupsConfirmationDrawer.react",
	"WAWebCommunityExistingGroupsDrawer.react",
	"WAWebCommunityHomeGroupsManager.react",
	"WAWebCommunitySettingsDrawer.react",
	"WAWebComposeBoxActions",
	"WAWebCreateSubgroupSuggestionAction",
	"WAWebDrawerManager",
	"WAWebExistingGroupPermissionsDrawer.react",
	"WAWebFindChatAction",
	"WAWebLinkSubgroupsAction",
	"WAWebNewGroupFlowLoadable",
	"WAWebNewGroupFlowStep",
	"WAWebNewGroupPermissionsDrawer.react",
	"WAWebNewSubgroupSuggestionFlowLoadable",
	"WAWebSchemaGroupMetadata",
	"WAWebUiActionWamEvent",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumUiActionType",
	"WAWebWamPrivateStatsUtils",
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"useWAWebCallbackOnce",
	"useWAWebCommunitySubgroups",
	"useWAWebFlow",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState, d = n("$InternalEnum").Mirrored([
		"GROUPS_MANAGER",
		"NEW_GROUP",
		"EXISTING_GROUP",
		"COMMUNITY_SETTINGS",
		"GROUP_PERMISSIONS_DRAWER",
		"NEW_GROUP_PERMISSIONS_DRAWER",
		"EXISTING_GROUPS_CONFIRMATION_DRAWER"
	]);
	function m(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.parentGroupMetadata, s = i.onBack, m = i.existingGroupsToBeLinked, p = m === void 0 ? [] : m, _ = i.initialStep, f = r("useWAWebCommunitySubgroups")(l), g = f.joinedSubgroups, h = f.subgroupCount, y = f.unjoinedSubgroups, C = o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(l.id), b = r("useWAWebUnmountSignal")(), v = r("useWAWebCallbackOnce")(function() {
			s ? s() : o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}), S = c(!0), R = S[0], L = S[1], E = c(!0), k = E[0], I = E[1], T = c(function() {
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(l);
			return (e == null ? void 0 : e.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
		}), D = T[0], x = T[1], $ = c(!1), P = $[0], N = $[1], M = c(!0), w = M[0], A = M[1], F = c(!1), O = F[0], B = F[1], W = c(p), q = W[0], U = W[1], V = c(), H = V[0], G = V[1], z = p.length > 0, j;
		z ? j = d.EXISTING_GROUPS_CONFIRMATION_DRAWER : _ === "existing_group" ? j = d.EXISTING_GROUP : j = d.GROUPS_MANAGER;
		var K = o("useWAWebFlow").useFlow(j, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: v
		}), Q = K[0], X = K[1];
		function Y(e) {
			return J.apply(this, arguments);
		}
		function J() {
			return J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e;
				X.pop(), t != null && !b.aborted && o("WAWebFindChatAction").findOrCreateLatestChat(t, "communityGroupsFlow").then(function(e) {
					var t = e.chat;
					o("WAWebCmd").Cmd.openChatBottom({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
					}).then(function(e) {
						e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
					});
				});
			}), J.apply(this, arguments);
		}
		function Z(e) {
			return ee.apply(this, arguments);
		}
		function ee() {
			return ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = new Set([].concat(y, g)), n = e.filter(function(e) {
					return !t.has(e.id);
				}).map(function(e) {
					return e.id;
				});
				if (n.length) if (!l.participants.iAmAdmin()) yield o("WAWebCreateSubgroupSuggestionAction").createExistingGroupsSubgroupSuggestionsAction({
					onBack: v,
					onEnd: v,
					parentGroupId: l.id,
					subgroupSuggestions: n
				});
				else {
					var a = !!l.isLidAddressingMode, i = new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
						uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_LINK,
						uiActionPreloaded: !1,
						isLid: a
					});
					yield r("WAWebLinkSubgroupsAction")(l.id, n).then(function() {
						i.markUiActionT(), i.commit(), o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
					}), v(), z && o("WAWebCmd").Cmd.openCommunityHome(l.id);
				}
				U([]);
			}), ee.apply(this, arguments);
		}
		if (X.step == null) return null;
		var te;
		switch (X.step) {
			case d.GROUPS_MANAGER:
				te = u.jsx(r("WAWebCommunityHomeGroupsManager.react"), {
					joinedSubgroups: g,
					unjoinedSubgroups: y,
					currentSubgroupCount: h,
					onBack: v,
					onNewGroupFlow: function() {
						return X.push(d.NEW_GROUP);
					},
					onExistingGroupFlow: function() {
						return X.push(d.EXISTING_GROUP);
					},
					onCommunitySettingsClick: function() {
						return X.push(d.COMMUNITY_SETTINGS);
					},
					parentId: l.id
				});
				break;
			case d.NEW_GROUP: {
				C ? te = u.jsx(o("WAWebNewSubgroupSuggestionFlowLoadable").NewSubgroupSuggestionFlowLoadable, {
					parentGroup: l.id,
					onBack: function() {
						return X.pop();
					},
					onEnd: v
				}) : te = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: Y,
					onEnd: function() {
						return X.pop();
					},
					parentGroupWid: l.id,
					initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
					shortenedCreationFlow: !0
				});
				break;
			}
			case d.EXISTING_GROUP: {
				var ne = l.isParentGroupClosed === !0, re = l == null ? void 0 : l.getSubgroupSuggestions().reduce(function(e, t) {
					return o("WAWebUserPrefsMeUser").isMeAccount(t.owner) && e.push(t.groupId), e;
				}, []);
				te = u.jsx(r("WAWebCommunityExistingGroupsDrawer.react"), {
					onBack: function() {
						return X.pop();
					},
					isCommunityAdmin: l.participants.iAmAdmin(),
					onContinue: function() {
						return X.push(d.EXISTING_GROUPS_CONFIRMATION_DRAWER);
					},
					onCreateNewGroup: function() {
						return X.push(d.NEW_GROUP);
					},
					currentSubgroupCount: h,
					isParentGroupClosed: ne,
					groupsSuggestedByMeToCommunity: re,
					flowSelectedGroups: q,
					setFlowSelectedGroups: U
				});
				break;
			}
			case d.COMMUNITY_SETTINGS: {
				var oe = o("WAWebChatCollection").ChatCollection.assertGet(l.id);
				te = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
					chat: oe,
					onBack: function() {
						return X.pop();
					}
				});
				break;
			}
			case d.GROUP_PERMISSIONS_DRAWER: {
				var ae = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(H));
				te = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: ae,
					groupLinkingFlow: !0,
					groupMetadata: r("nullthrows")(ae.groupMetadata),
					onClose: function() {
						return X.pop();
					}
				});
				break;
			}
			case d.NEW_GROUP_PERMISSIONS_DRAWER: {
				te = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
					onBack: function() {
						return X.pop();
					},
					restrict: R,
					setRestrict: L,
					announce: k,
					setAnnounce: I,
					membershipApprovalMode: O,
					setMembershipApprovalMode: B,
					memberAddMode: D,
					setMemberAddMode: x,
					memberLinkMode: P,
					setMemberLinkMode: N,
					memberShareGroupHistoryMode: w,
					setMemberShareGroupHistoryMode: A
				});
				break;
			}
			case d.EXISTING_GROUPS_CONFIRMATION_DRAWER: {
				var ie = l.isParentGroupClosed === !0;
				te = u.jsx(r("WAWebCommunityExistingGroupsConfirmationDrawer.react"), {
					onBack: function() {
						return X.pop();
					},
					onGroupPermissions: function(t) {
						G(t), X.push(d.GROUP_PERMISSIONS_DRAWER);
					},
					isParentGroupClosed: ie,
					isCommunityAdmin: l.participants.iAmAdmin(),
					onSubmit: Z,
					selectedGroups: q,
					communityName: l.subject,
					parentGroupId: l.id
				});
			}
		}
		return u.jsx(Q, {
			flow: X,
			ref: a,
			children: te
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
