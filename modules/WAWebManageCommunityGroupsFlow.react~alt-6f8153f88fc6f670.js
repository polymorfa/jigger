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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.parentGroupMetadata, l = a.onBack, s = a.existingGroupsToBeLinked, m = s === void 0 ? [] : s, p = a.initialStep, _ = r("useWAWebCommunitySubgroups")(i), f = _.joinedSubgroups, g = _.subgroupCount, h = _.unjoinedSubgroups, y = o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(i.id), C = r("useWAWebUnmountSignal")(), b = r("useWAWebCallbackOnce")(function() {
			l ? l() : o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}), v = c(!0), S = v[0], R = v[1], L = c(!0), E = L[0], k = L[1], I = c(function() {
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(i);
			return (e == null ? void 0 : e.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
		}), T = I[0], D = I[1], x = c(!1), $ = x[0], P = x[1], N = c(!0), M = N[0], w = N[1], A = c(!1), F = A[0], O = A[1], B = c(m), W = B[0], q = B[1], U = c(), V = U[0], H = U[1], G = m.length > 0, z;
		G ? z = d.EXISTING_GROUPS_CONFIRMATION_DRAWER : p === "existing_group" ? z = d.EXISTING_GROUP : z = d.GROUPS_MANAGER;
		var j = o("useWAWebFlow").useFlow(z, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: b
		}), K = j[0], Q = j[1];
		async function X(e) {
			var t = await e;
			Q.pop(), t != null && !C.aborted && o("WAWebFindChatAction").findOrCreateLatestChat(t, "communityGroupsFlow").then(function(e) {
				var t = e.chat;
				o("WAWebCmd").Cmd.openChatBottom({
					chat: t,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
				}).then(function(e) {
					e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
				});
			});
		}
		async function Y(e) {
			var t = new Set([].concat(h, f)), n = e.filter(function(e) {
				return !t.has(e.id);
			}).map(function(e) {
				return e.id;
			});
			if (n.length) if (!i.participants.iAmAdmin()) await o("WAWebCreateSubgroupSuggestionAction").createExistingGroupsSubgroupSuggestionsAction({
				onBack: b,
				onEnd: b,
				parentGroupId: i.id,
				subgroupSuggestions: n
			});
			else {
				var a = !!i.isLidAddressingMode, l = new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
					uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_LINK,
					uiActionPreloaded: !1,
					isLid: a
				});
				await r("WAWebLinkSubgroupsAction")(i.id, n).then(function() {
					l.markUiActionT(), l.commit(), o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
				}), b(), G && o("WAWebCmd").Cmd.openCommunityHome(i.id);
			}
			q([]);
		}
		if (Q.step == null) return null;
		var J;
		switch (Q.step) {
			case d.GROUPS_MANAGER:
				J = u.jsx(r("WAWebCommunityHomeGroupsManager.react"), {
					joinedSubgroups: f,
					unjoinedSubgroups: h,
					currentSubgroupCount: g,
					onBack: b,
					onNewGroupFlow: function() {
						return Q.push(d.NEW_GROUP);
					},
					onExistingGroupFlow: function() {
						return Q.push(d.EXISTING_GROUP);
					},
					onCommunitySettingsClick: function() {
						return Q.push(d.COMMUNITY_SETTINGS);
					},
					parentId: i.id
				});
				break;
			case d.NEW_GROUP: {
				y ? J = u.jsx(o("WAWebNewSubgroupSuggestionFlowLoadable").NewSubgroupSuggestionFlowLoadable, {
					parentGroup: i.id,
					onBack: function() {
						return Q.pop();
					},
					onEnd: b
				}) : J = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
					onCreateGroup: X,
					onEnd: function() {
						return Q.pop();
					},
					parentGroupWid: i.id,
					initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
					shortenedCreationFlow: !0
				});
				break;
			}
			case d.EXISTING_GROUP: {
				var Z = i.isParentGroupClosed === !0, ee = i == null ? void 0 : i.getSubgroupSuggestions().reduce(function(e, t) {
					return o("WAWebUserPrefsMeUser").isMeAccount(t.owner) && e.push(t.groupId), e;
				}, []);
				J = u.jsx(r("WAWebCommunityExistingGroupsDrawer.react"), {
					onBack: function() {
						return Q.pop();
					},
					isCommunityAdmin: i.participants.iAmAdmin(),
					onContinue: function() {
						return Q.push(d.EXISTING_GROUPS_CONFIRMATION_DRAWER);
					},
					onCreateNewGroup: function() {
						return Q.push(d.NEW_GROUP);
					},
					currentSubgroupCount: g,
					isParentGroupClosed: Z,
					groupsSuggestedByMeToCommunity: ee,
					flowSelectedGroups: W,
					setFlowSelectedGroups: q
				});
				break;
			}
			case d.COMMUNITY_SETTINGS: {
				var te = o("WAWebChatCollection").ChatCollection.assertGet(i.id);
				J = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
					chat: te,
					onBack: function() {
						return Q.pop();
					}
				});
				break;
			}
			case d.GROUP_PERMISSIONS_DRAWER: {
				var ne = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(V));
				J = u.jsx(r("WAWebExistingGroupPermissionsDrawer.react"), {
					chat: ne,
					groupLinkingFlow: !0,
					groupMetadata: r("nullthrows")(ne.groupMetadata),
					onClose: function() {
						return Q.pop();
					}
				});
				break;
			}
			case d.NEW_GROUP_PERMISSIONS_DRAWER: {
				J = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
					onBack: function() {
						return Q.pop();
					},
					restrict: S,
					setRestrict: R,
					announce: E,
					setAnnounce: k,
					membershipApprovalMode: F,
					setMembershipApprovalMode: O,
					memberAddMode: T,
					setMemberAddMode: D,
					memberLinkMode: $,
					setMemberLinkMode: P,
					memberShareGroupHistoryMode: M,
					setMemberShareGroupHistoryMode: w
				});
				break;
			}
			case d.EXISTING_GROUPS_CONFIRMATION_DRAWER: {
				var re = i.isParentGroupClosed === !0;
				J = u.jsx(r("WAWebCommunityExistingGroupsConfirmationDrawer.react"), {
					onBack: function() {
						return Q.pop();
					},
					onGroupPermissions: function(t) {
						H(t), Q.push(d.GROUP_PERMISSIONS_DRAWER);
					},
					isParentGroupClosed: re,
					isCommunityAdmin: i.participants.iAmAdmin(),
					onSubmit: Y,
					selectedGroups: W,
					communityName: i.subject,
					parentGroupId: i.id
				});
			}
		}
		return u.jsx(K, {
			flow: Q,
			ref: n,
			children: J
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
