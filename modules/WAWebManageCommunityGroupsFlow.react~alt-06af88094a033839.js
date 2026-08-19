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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(114), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.parentGroupMetadata, m = l.onBack, g = l.existingGroupsToBeLinked, h = l.initialStep, y;
		n[3] !== g ? (y = g === void 0 ? [] : g, n[3] = g, n[4] = y) : y = n[4];
		var C = y, b = r("useWAWebCommunitySubgroups")(s), v = b.joinedSubgroups, S = b.subgroupCount, R = b.unjoinedSubgroups, L = o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(s.id), E = r("useWAWebUnmountSignal")(), k;
		n[5] !== m ? (k = function() {
			m ? m() : o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, n[5] = m, n[6] = k) : k = n[6];
		var I = r("useWAWebCallbackOnce")(k), T = c(!0), D = T[0], x = T[1], $ = c(!0), P = $[0], N = $[1], M;
		n[7] !== s ? (M = function() {
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(s);
			return (e == null ? void 0 : e.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
		}, n[7] = s, n[8] = M) : M = n[8];
		var w = c(M), A = w[0], F = w[1], O = c(!1), B = O[0], W = O[1], q = c(!0), U = q[0], V = q[1], H = c(!1), G = H[0], z = H[1], j = c(C), K = j[0], Q = j[1], X = c(), Y = X[0], J = X[1], Z = C.length > 0, ee;
		Z ? ee = d.EXISTING_GROUPS_CONFIRMATION_DRAWER : h === "existing_group" ? ee = d.EXISTING_GROUP : ee = d.GROUPS_MANAGER;
		var te;
		n[9] !== I ? (te = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: I
		}, n[9] = I, n[10] = te) : te = n[10];
		var ne = o("useWAWebFlow").useFlow(ee, te), re = ne[0], oe = ne[1], ae;
		n[11] !== oe || n[12] !== E ? (ae = async function(t) {
			var e = await t;
			oe.pop(), e != null && !E.aborted && o("WAWebFindChatAction").findOrCreateLatestChat(e, "communityGroupsFlow").then(f);
		}, n[11] = oe, n[12] = E, n[13] = ae) : ae = n[13];
		var ie = ae, le;
		n[14] !== I || n[15] !== Z || n[16] !== v || n[17] !== s.id || n[18] !== s.isLidAddressingMode || n[19] !== s.participants || n[20] !== R ? (le = async function(t) {
			var e = new Set([].concat(R, v)), n = t.filter(function(t) {
				return !e.has(t.id);
			}).map(_);
			if (n.length) if (!s.participants.iAmAdmin()) await o("WAWebCreateSubgroupSuggestionAction").createExistingGroupsSubgroupSuggestionsAction({
				onBack: I,
				onEnd: I,
				parentGroupId: s.id,
				subgroupSuggestions: n
			});
			else {
				var a = !!s.isLidAddressingMode, i = new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
					uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_LINK,
					uiActionPreloaded: !1,
					isLid: a
				});
				await r("WAWebLinkSubgroupsAction")(s.id, n).then(function() {
					i.markUiActionT(), i.commit(), o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
				}), I(), Z && o("WAWebCmd").Cmd.openCommunityHome(s.id);
			}
			Q([]);
		}, n[14] = I, n[15] = Z, n[16] = v, n[17] = s.id, n[18] = s.isLidAddressingMode, n[19] = s.participants, n[20] = R, n[21] = le) : le = n[21];
		var se = le;
		if (oe.step == null) return null;
		var ue;
		e: switch (oe.step) {
			case d.GROUPS_MANAGER: {
				var ce, de, me;
				n[22] !== oe ? (de = function() {
					return oe.push(d.NEW_GROUP);
				}, me = function() {
					return oe.push(d.EXISTING_GROUP);
				}, ce = function() {
					return oe.push(d.COMMUNITY_SETTINGS);
				}, n[22] = oe, n[23] = ce, n[24] = de, n[25] = me) : (ce = n[23], de = n[24], me = n[25]);
				var pe;
				n[26] !== I || n[27] !== v || n[28] !== s.id || n[29] !== S || n[30] !== ce || n[31] !== de || n[32] !== me || n[33] !== R ? (pe = u.jsx(r("WAWebCommunityHomeGroupsManager.react"), {
					joinedSubgroups: v,
					unjoinedSubgroups: R,
					currentSubgroupCount: S,
					onBack: I,
					onNewGroupFlow: de,
					onExistingGroupFlow: me,
					onCommunitySettingsClick: ce,
					parentId: s.id
				}), n[26] = I, n[27] = v, n[28] = s.id, n[29] = S, n[30] = ce, n[31] = de, n[32] = me, n[33] = R, n[34] = pe) : pe = n[34], ue = pe;
				break e;
			}
			case d.NEW_GROUP: {
				if (L) {
					var _e;
					n[35] !== oe ? (_e = function() {
						return oe.pop();
					}, n[35] = oe, n[36] = _e) : _e = n[36];
					var fe;
					n[37] !== I || n[38] !== s.id || n[39] !== _e ? (fe = u.jsx(o("WAWebNewSubgroupSuggestionFlowLoadable").NewSubgroupSuggestionFlowLoadable, {
						parentGroup: s.id,
						onBack: _e,
						onEnd: I
					}), n[37] = I, n[38] = s.id, n[39] = _e, n[40] = fe) : fe = n[40], ue = fe;
				} else {
					var ge;
					n[41] !== oe ? (ge = function() {
						return oe.pop();
					}, n[41] = oe, n[42] = ge) : ge = n[42];
					var he;
					n[43] !== ie || n[44] !== s.id || n[45] !== ge ? (he = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
						onCreateGroup: ie,
						onEnd: ge,
						parentGroupWid: s.id,
						initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
						shortenedCreationFlow: !0
					}), n[43] = ie, n[44] = s.id, n[45] = ge, n[46] = he) : he = n[46], ue = he;
				}
				break e;
			}
			case d.EXISTING_GROUP: {
				var ye = s.isParentGroupClosed === !0, Ce;
				n[47] !== s ? (Ce = s == null ? void 0 : s.getSubgroupSuggestions().reduce(p, []), n[47] = s, n[48] = Ce) : Ce = n[48];
				var be = Ce, ve;
				n[49] !== oe ? (ve = function() {
					return oe.pop();
				}, n[49] = oe, n[50] = ve) : ve = n[50];
				var Se;
				n[51] !== s.participants ? (Se = s.participants.iAmAdmin(), n[51] = s.participants, n[52] = Se) : Se = n[52];
				var Re, Le;
				n[53] !== oe ? (Re = function() {
					return oe.push(d.EXISTING_GROUPS_CONFIRMATION_DRAWER);
				}, Le = function() {
					return oe.push(d.NEW_GROUP);
				}, n[53] = oe, n[54] = Re, n[55] = Le) : (Re = n[54], Le = n[55]);
				var Ee;
				n[56] !== be || n[57] !== ye || n[58] !== K || n[59] !== S || n[60] !== Se || n[61] !== Re || n[62] !== Le || n[63] !== ve ? (Ee = u.jsx(r("WAWebCommunityExistingGroupsDrawer.react"), {
					onBack: ve,
					isCommunityAdmin: Se,
					onContinue: Re,
					onCreateNewGroup: Le,
					currentSubgroupCount: S,
					isParentGroupClosed: ye,
					groupsSuggestedByMeToCommunity: be,
					flowSelectedGroups: K,
					setFlowSelectedGroups: Q
				}), n[56] = be, n[57] = ye, n[58] = K, n[59] = S, n[60] = Se, n[61] = Re, n[62] = Le, n[63] = ve, n[64] = Ee) : Ee = n[64], ue = Ee;
				break e;
			}
			case d.COMMUNITY_SETTINGS: {
				var ke;
				n[65] !== s.id ? (ke = o("WAWebChatCollection").ChatCollection.assertGet(s.id), n[65] = s.id, n[66] = ke) : ke = n[66];
				var Ie = ke, Te;
				n[67] !== oe ? (Te = function() {
					return oe.pop();
				}, n[67] = oe, n[68] = Te) : Te = n[68];
				var De;
				n[69] !== Ie || n[70] !== Te ? (De = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
					chat: Ie,
					onBack: Te
				}), n[69] = Ie, n[70] = Te, n[71] = De) : De = n[71], ue = De;
				break e;
			}
			case d.GROUP_PERMISSIONS_DRAWER: {
				var xe, $e, Pe, Ne;
				if (n[72] !== Y) {
					var Me = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(Y));
					xe = r("WAWebExistingGroupPermissionsDrawer.react"), Pe = Me, Ne = !0, $e = r("nullthrows")(Me.groupMetadata), n[72] = Y, n[73] = xe, n[74] = $e, n[75] = Pe, n[76] = Ne;
				} else xe = n[73], $e = n[74], Pe = n[75], Ne = n[76];
				var we;
				n[77] !== oe ? (we = function() {
					return oe.pop();
				}, n[77] = oe, n[78] = we) : we = n[78];
				var Ae;
				n[79] !== xe || n[80] !== $e || n[81] !== we || n[82] !== Pe || n[83] !== Ne ? (Ae = u.jsx(xe, {
					chat: Pe,
					groupLinkingFlow: Ne,
					groupMetadata: $e,
					onClose: we
				}), n[79] = xe, n[80] = $e, n[81] = we, n[82] = Pe, n[83] = Ne, n[84] = Ae) : Ae = n[84], ue = Ae;
				break e;
			}
			case d.NEW_GROUP_PERMISSIONS_DRAWER: {
				var Fe;
				n[85] !== oe ? (Fe = function() {
					return oe.pop();
				}, n[85] = oe, n[86] = Fe) : Fe = n[86];
				var Oe;
				n[87] !== P || n[88] !== A || n[89] !== B || n[90] !== U || n[91] !== G || n[92] !== D || n[93] !== Fe ? (Oe = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
					onBack: Fe,
					restrict: D,
					setRestrict: x,
					announce: P,
					setAnnounce: N,
					membershipApprovalMode: G,
					setMembershipApprovalMode: z,
					memberAddMode: A,
					setMemberAddMode: F,
					memberLinkMode: B,
					setMemberLinkMode: W,
					memberShareGroupHistoryMode: U,
					setMemberShareGroupHistoryMode: V
				}), n[87] = P, n[88] = A, n[89] = B, n[90] = U, n[91] = G, n[92] = D, n[93] = Fe, n[94] = Oe) : Oe = n[94], ue = Oe;
				break e;
			}
			case d.EXISTING_GROUPS_CONFIRMATION_DRAWER: {
				var Be = s.isParentGroupClosed === !0, We, qe;
				n[95] !== oe ? (We = function() {
					return oe.pop();
				}, qe = function(t) {
					J(t), oe.push(d.GROUP_PERMISSIONS_DRAWER);
				}, n[95] = oe, n[96] = We, n[97] = qe) : (We = n[96], qe = n[97]);
				var Ue;
				n[98] !== s.participants ? (Ue = s.participants.iAmAdmin(), n[98] = s.participants, n[99] = Ue) : Ue = n[99];
				var Ve;
				n[100] !== se || n[101] !== Be || n[102] !== s.id || n[103] !== s.subject || n[104] !== K || n[105] !== Ue || n[106] !== We || n[107] !== qe ? (Ve = u.jsx(r("WAWebCommunityExistingGroupsConfirmationDrawer.react"), {
					onBack: We,
					onGroupPermissions: qe,
					isParentGroupClosed: Be,
					isCommunityAdmin: Ue,
					onSubmit: se,
					selectedGroups: K,
					communityName: s.subject,
					parentGroupId: s.id
				}), n[100] = se, n[101] = Be, n[102] = s.id, n[103] = s.subject, n[104] = K, n[105] = Ue, n[106] = We, n[107] = qe, n[108] = Ve) : Ve = n[108], ue = Ve;
			}
		}
		var He;
		return n[109] !== re || n[110] !== ue || n[111] !== oe || n[112] !== i ? (He = u.jsx(re, {
			flow: oe,
			ref: i,
			children: ue
		}), n[109] = re, n[110] = ue, n[111] = oe, n[112] = i, n[113] = He) : He = n[113], He;
	}
	function p(e, t) {
		return o("WAWebUserPrefsMeUser").isMeAccount(t.owner) && e.push(t.groupId), e;
	}
	function _(e) {
		return e.id;
	}
	function f(e) {
		var t = e.chat;
		o("WAWebCmd").Cmd.openChatBottom({
			chat: t,
			chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.CommunityNewGroupCreation
		}).then(function(e) {
			e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
		});
	}
	l.default = m;
}), 98);
