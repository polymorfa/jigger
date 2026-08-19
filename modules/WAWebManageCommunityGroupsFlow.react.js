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
		var a = o("react-compiler-runtime").c(114), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, m = s.parentGroupMetadata, g = s.onBack, h = s.existingGroupsToBeLinked, y = s.initialStep, C;
		a[3] !== h ? (C = h === void 0 ? [] : h, a[3] = h, a[4] = C) : C = a[4];
		var b = C, v = r("useWAWebCommunitySubgroups")(m), S = v.joinedSubgroups, R = v.subgroupCount, L = v.unjoinedSubgroups, E = o("WAWebChatCommunityUtils").isSubgroupSuggestionCreation(m.id), k = r("useWAWebUnmountSignal")(), I;
		a[5] !== g ? (I = function() {
			g ? g() : o("WAWebDrawerManager").DrawerManager.closeDrawerRight();
		}, a[5] = g, a[6] = I) : I = a[6];
		var T = r("useWAWebCallbackOnce")(I), D = c(!0), x = D[0], $ = D[1], P = c(!0), N = P[0], M = P[1], w;
		a[7] !== m ? (w = function() {
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(m);
			return (e == null ? void 0 : e.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
		}, a[7] = m, a[8] = w) : w = a[8];
		var A = c(w), F = A[0], O = A[1], B = c(!1), W = B[0], q = B[1], U = c(!0), V = U[0], H = U[1], G = c(!1), z = G[0], j = G[1], K = c(b), Q = K[0], X = K[1], Y = c(), J = Y[0], Z = Y[1], ee = b.length > 0, te;
		ee ? te = d.EXISTING_GROUPS_CONFIRMATION_DRAWER : y === "existing_group" ? te = d.EXISTING_GROUP : te = d.GROUPS_MANAGER;
		var ne;
		a[9] !== T ? (ne = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: T
		}, a[9] = T, a[10] = ne) : ne = a[10];
		var re = o("useWAWebFlow").useFlow(te, ne), oe = re[0], ae = re[1], ie;
		a[11] !== ae || a[12] !== k ? (ie = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield e;
				ae.pop(), t != null && !k.aborted && o("WAWebFindChatAction").findOrCreateLatestChat(t, "communityGroupsFlow").then(f);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a[11] = ae, a[12] = k, a[13] = ie) : ie = a[13];
		var le = ie, se;
		a[14] !== T || a[15] !== ee || a[16] !== S || a[17] !== m.id || a[18] !== m.isLidAddressingMode || a[19] !== m.participants || a[20] !== L ? (se = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = new Set([].concat(L, S)), n = e.filter(function(e) {
					return !t.has(e.id);
				}).map(_);
				if (n.length) if (!m.participants.iAmAdmin()) yield o("WAWebCreateSubgroupSuggestionAction").createExistingGroupsSubgroupSuggestionsAction({
					onBack: T,
					onEnd: T,
					parentGroupId: m.id,
					subgroupSuggestions: n
				});
				else {
					var a = !!m.isLidAddressingMode, i = new (o("WAWebUiActionWamEvent")).UiActionWamEvent({
						uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE.COMMUNITY_LINK,
						uiActionPreloaded: !1,
						isLid: a
					});
					yield r("WAWebLinkSubgroupsAction")(m.id, n).then(function() {
						i.markUiActionT(), i.commit(), o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents();
					}), T(), ee && o("WAWebCmd").Cmd.openCommunityHome(m.id);
				}
				X([]);
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), a[14] = T, a[15] = ee, a[16] = S, a[17] = m.id, a[18] = m.isLidAddressingMode, a[19] = m.participants, a[20] = L, a[21] = se) : se = a[21];
		var ue = se;
		if (ae.step == null) return null;
		var ce;
		e: switch (ae.step) {
			case d.GROUPS_MANAGER: {
				var de, me, pe;
				a[22] !== ae ? (me = function() {
					return ae.push(d.NEW_GROUP);
				}, pe = function() {
					return ae.push(d.EXISTING_GROUP);
				}, de = function() {
					return ae.push(d.COMMUNITY_SETTINGS);
				}, a[22] = ae, a[23] = de, a[24] = me, a[25] = pe) : (de = a[23], me = a[24], pe = a[25]);
				var _e;
				a[26] !== T || a[27] !== S || a[28] !== m.id || a[29] !== R || a[30] !== de || a[31] !== me || a[32] !== pe || a[33] !== L ? (_e = u.jsx(r("WAWebCommunityHomeGroupsManager.react"), {
					joinedSubgroups: S,
					unjoinedSubgroups: L,
					currentSubgroupCount: R,
					onBack: T,
					onNewGroupFlow: me,
					onExistingGroupFlow: pe,
					onCommunitySettingsClick: de,
					parentId: m.id
				}), a[26] = T, a[27] = S, a[28] = m.id, a[29] = R, a[30] = de, a[31] = me, a[32] = pe, a[33] = L, a[34] = _e) : _e = a[34], ce = _e;
				break e;
			}
			case d.NEW_GROUP: {
				if (E) {
					var fe;
					a[35] !== ae ? (fe = function() {
						return ae.pop();
					}, a[35] = ae, a[36] = fe) : fe = a[36];
					var ge;
					a[37] !== T || a[38] !== m.id || a[39] !== fe ? (ge = u.jsx(o("WAWebNewSubgroupSuggestionFlowLoadable").NewSubgroupSuggestionFlowLoadable, {
						parentGroup: m.id,
						onBack: fe,
						onEnd: T
					}), a[37] = T, a[38] = m.id, a[39] = fe, a[40] = ge) : ge = a[40], ce = ge;
				} else {
					var he;
					a[41] !== ae ? (he = function() {
						return ae.pop();
					}, a[41] = ae, a[42] = he) : he = a[42];
					var ye;
					a[43] !== le || a[44] !== m.id || a[45] !== he ? (ye = u.jsx(o("WAWebNewGroupFlowLoadable").NewGroupFlowLoadable, {
						onCreateGroup: le,
						onEnd: he,
						parentGroupWid: m.id,
						initialStep: o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER,
						shortenedCreationFlow: !0
					}), a[43] = le, a[44] = m.id, a[45] = he, a[46] = ye) : ye = a[46], ce = ye;
				}
				break e;
			}
			case d.EXISTING_GROUP: {
				var Ce = m.isParentGroupClosed === !0, be;
				a[47] !== m ? (be = m == null ? void 0 : m.getSubgroupSuggestions().reduce(p, []), a[47] = m, a[48] = be) : be = a[48];
				var ve = be, Se;
				a[49] !== ae ? (Se = function() {
					return ae.pop();
				}, a[49] = ae, a[50] = Se) : Se = a[50];
				var Re;
				a[51] !== m.participants ? (Re = m.participants.iAmAdmin(), a[51] = m.participants, a[52] = Re) : Re = a[52];
				var Le, Ee;
				a[53] !== ae ? (Le = function() {
					return ae.push(d.EXISTING_GROUPS_CONFIRMATION_DRAWER);
				}, Ee = function() {
					return ae.push(d.NEW_GROUP);
				}, a[53] = ae, a[54] = Le, a[55] = Ee) : (Le = a[54], Ee = a[55]);
				var ke;
				a[56] !== ve || a[57] !== Ce || a[58] !== Q || a[59] !== R || a[60] !== Re || a[61] !== Le || a[62] !== Ee || a[63] !== Se ? (ke = u.jsx(r("WAWebCommunityExistingGroupsDrawer.react"), {
					onBack: Se,
					isCommunityAdmin: Re,
					onContinue: Le,
					onCreateNewGroup: Ee,
					currentSubgroupCount: R,
					isParentGroupClosed: Ce,
					groupsSuggestedByMeToCommunity: ve,
					flowSelectedGroups: Q,
					setFlowSelectedGroups: X
				}), a[56] = ve, a[57] = Ce, a[58] = Q, a[59] = R, a[60] = Re, a[61] = Le, a[62] = Ee, a[63] = Se, a[64] = ke) : ke = a[64], ce = ke;
				break e;
			}
			case d.COMMUNITY_SETTINGS: {
				var Ie;
				a[65] !== m.id ? (Ie = o("WAWebChatCollection").ChatCollection.assertGet(m.id), a[65] = m.id, a[66] = Ie) : Ie = a[66];
				var Te = Ie, De;
				a[67] !== ae ? (De = function() {
					return ae.pop();
				}, a[67] = ae, a[68] = De) : De = a[68];
				var xe;
				a[69] !== Te || a[70] !== De ? (xe = u.jsx(r("WAWebCommunitySettingsDrawer.react"), {
					chat: Te,
					onBack: De
				}), a[69] = Te, a[70] = De, a[71] = xe) : xe = a[71], ce = xe;
				break e;
			}
			case d.GROUP_PERMISSIONS_DRAWER: {
				var $e, Pe, Ne, Me;
				if (a[72] !== J) {
					var we = o("WAWebChatCollection").ChatCollection.assertGet(r("nullthrows")(J));
					$e = r("WAWebExistingGroupPermissionsDrawer.react"), Ne = we, Me = !0, Pe = r("nullthrows")(we.groupMetadata), a[72] = J, a[73] = $e, a[74] = Pe, a[75] = Ne, a[76] = Me;
				} else $e = a[73], Pe = a[74], Ne = a[75], Me = a[76];
				var Ae;
				a[77] !== ae ? (Ae = function() {
					return ae.pop();
				}, a[77] = ae, a[78] = Ae) : Ae = a[78];
				var Fe;
				a[79] !== $e || a[80] !== Pe || a[81] !== Ae || a[82] !== Ne || a[83] !== Me ? (Fe = u.jsx($e, {
					chat: Ne,
					groupLinkingFlow: Me,
					groupMetadata: Pe,
					onClose: Ae
				}), a[79] = $e, a[80] = Pe, a[81] = Ae, a[82] = Ne, a[83] = Me, a[84] = Fe) : Fe = a[84], ce = Fe;
				break e;
			}
			case d.NEW_GROUP_PERMISSIONS_DRAWER: {
				var Oe;
				a[85] !== ae ? (Oe = function() {
					return ae.pop();
				}, a[85] = ae, a[86] = Oe) : Oe = a[86];
				var Be;
				a[87] !== N || a[88] !== F || a[89] !== W || a[90] !== V || a[91] !== z || a[92] !== x || a[93] !== Oe ? (Be = u.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
					onBack: Oe,
					restrict: x,
					setRestrict: $,
					announce: N,
					setAnnounce: M,
					membershipApprovalMode: z,
					setMembershipApprovalMode: j,
					memberAddMode: F,
					setMemberAddMode: O,
					memberLinkMode: W,
					setMemberLinkMode: q,
					memberShareGroupHistoryMode: V,
					setMemberShareGroupHistoryMode: H
				}), a[87] = N, a[88] = F, a[89] = W, a[90] = V, a[91] = z, a[92] = x, a[93] = Oe, a[94] = Be) : Be = a[94], ce = Be;
				break e;
			}
			case d.EXISTING_GROUPS_CONFIRMATION_DRAWER: {
				var We = m.isParentGroupClosed === !0, qe, Ue;
				a[95] !== ae ? (qe = function() {
					return ae.pop();
				}, Ue = function(t) {
					Z(t), ae.push(d.GROUP_PERMISSIONS_DRAWER);
				}, a[95] = ae, a[96] = qe, a[97] = Ue) : (qe = a[96], Ue = a[97]);
				var Ve;
				a[98] !== m.participants ? (Ve = m.participants.iAmAdmin(), a[98] = m.participants, a[99] = Ve) : Ve = a[99];
				var He;
				a[100] !== ue || a[101] !== We || a[102] !== m.id || a[103] !== m.subject || a[104] !== Q || a[105] !== Ve || a[106] !== qe || a[107] !== Ue ? (He = u.jsx(r("WAWebCommunityExistingGroupsConfirmationDrawer.react"), {
					onBack: qe,
					onGroupPermissions: Ue,
					isParentGroupClosed: We,
					isCommunityAdmin: Ve,
					onSubmit: ue,
					selectedGroups: Q,
					communityName: m.subject,
					parentGroupId: m.id
				}), a[100] = ue, a[101] = We, a[102] = m.id, a[103] = m.subject, a[104] = Q, a[105] = Ve, a[106] = qe, a[107] = Ue, a[108] = He) : He = a[108], ce = He;
			}
		}
		var Ge;
		return a[109] !== oe || a[110] !== ce || a[111] !== ae || a[112] !== l ? (Ge = u.jsx(oe, {
			flow: ae,
			ref: l,
			children: ce
		}), a[109] = oe, a[110] = ce, a[111] = ae, a[112] = l, a[113] = Ge) : Ge = a[113], Ge;
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
