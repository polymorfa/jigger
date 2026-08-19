__d("WAWebNewGroupFlow.react", [
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebContactCollection",
	"WAWebCreateGroupAction",
	"WAWebDrawerManager",
	"WAWebDrawerViewType",
	"WAWebGroupGatingUtils",
	"WAWebNewGroupDrawer.react",
	"WAWebNewGroupFlowStep",
	"WAWebNewGroupParticipantsDrawer.react",
	"WAWebNewGroupPermissionsDrawer.react",
	"WAWebSchemaGroupMetadata",
	"WAWebUim",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow",
	"useWAWebGroupDiscardGuard",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		return o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() ? e <= o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD : !1;
	}
	function f(e) {
		var t, n = o("react-compiler-runtime").c(109), a = e.groupCreateEntryPoint, i = e.initialParticipants, l = e.initialSelectedSubgroup, u = e.initialStep, c = e.isSubFlow, f = e.onCreateGroup, h = e.onEnd, y = e.parentGroupWid, C = e.participantsDrawerTitle, b = e.ref, v = e.shortenedCreationFlow, S = e.sourceGroupMembers, R = e.viewType, L = u === void 0 ? o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER : u, E = c === void 0 ? !0 : c, k;
		n[0] !== y ? (k = y != null ? o("WAWebChatCollection").ChatCollection.get(y) : null, n[0] = y, n[1] = k) : k = n[1];
		var I = k, T = I != null ? I.formattedTitle : null, D;
		n[2] !== h ? (D = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: h
		}, n[2] = h, n[3] = D) : D = n[3];
		var x = o("useWAWebFlow").useFlow(L, D), $ = x[0], P = x[1], N;
		n[4] !== i ? (N = i != null ? i : [], n[4] = i, n[5] = N) : N = n[5];
		var M = p(N), w = M[0], A = M[1], F = p(!0), O = F[0], B = F[1], W;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (W = [], n[6] = W) : W = n[6];
		var q = p(W), U = q[0], V = q[1], H;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (H = [], n[7] = H) : H = n[7];
		var G = m(H), z = p((t = i == null ? void 0 : i.length) != null ? t : 0), j = z[0], K = z[1], Q;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (Q = function(t) {
			K(t.length);
		}, n[8] = Q) : Q = n[8];
		var X = Q, Y = o("useWAWebGroupDiscardGuard").useGroupCreationDiscardGuard(j), J, Z;
		n[9] !== P.step || n[10] !== Y ? (Z = function() {
			if (P.step === o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER) {
				var e = o("WAWebDrawerManager").DrawerManager.registerCloseGuardLeft(function(e) {
					return Y();
				});
				return e;
			}
		}, J = [P.step, Y], n[9] = P.step, n[10] = Y, n[11] = J, n[12] = Z) : (J = n[11], Z = n[12]), d(Z, J);
		var ee;
		n[13] !== P || n[14] !== Y ? (ee = function(t) {
			t === o("WAWebUim").DismissReason.UIM_INTERACTION && P.step === o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER ? Y().then(function(e) {
				e && P.pop();
			}) : P.pop();
		}, n[13] = P, n[14] = Y, n[15] = ee) : ee = n[15];
		var te = ee, ne = p(!1), re = ne[0], oe = ne[1], ae = p(), ie = ae[0], le = ae[1], se = p(), ue = se[0], ce = se[1], de = p(), me = de[0], pe = de[1], _e = p(), fe = _e[0], ge = _e[1], he = p(!0), ye = he[0], Ce = he[1], be = p(!0), ve = be[0], Se = be[1], Re;
		n[16] !== (I == null ? void 0 : I.groupMetadata) ? (Re = function() {
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(I == null ? void 0 : I.groupMetadata);
			return (e == null ? void 0 : e.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
		}, n[16] = I == null ? void 0 : I.groupMetadata, n[17] = Re) : Re = n[17];
		var Le = p(Re), Ee = Le[0], ke = Le[1], Ie = p(), Te = Ie[0], De = Ie[1], xe = p(!0), $e = xe[0], Pe = xe[1], Ne = p(!1), Me = Ne[0], we = Ne[1], Ae;
		n[18] !== P ? (Ae = function() {
			P.end();
		}, n[18] = P, n[19] = Ae) : Ae = n[19];
		var Fe = Ae;
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", Fe);
		var Oe;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (Oe = [], n[20] = Oe) : Oe = n[20], d(g, Oe);
		var Be;
		n[21] !== ve || n[22] !== a || n[23] !== Ee || n[24] !== Te || n[25] !== $e || n[26] !== Me || n[27] !== f || n[28] !== y || n[29] !== ye ? (Be = function(t) {
			var e = t.ephemeralDuration, n = t.full, r = t.participants, i = t.subject, l = t.thumb, s = r === void 0 ? [] : r;
			oe(!0);
			var u = o("WAWebCreateGroupAction").createGroup({
				title: i,
				thumb: l,
				full: n,
				ephemeralDuration: e,
				parentGroupId: y,
				restrict: ye,
				announce: ve,
				membershipApprovalMode: Me,
				memberAddMode: Ee,
				memberLinkMode: Te,
				memberShareGroupHistoryMode: $e
			}, s, G.current, a);
			f == null || f(u);
		}, n[21] = ve, n[22] = a, n[23] = Ee, n[24] = Te, n[25] = $e, n[26] = Me, n[27] = f, n[28] = y, n[29] = ye, n[30] = Be) : Be = n[30];
		var We = Be, qe;
		n[31] !== P || n[32] !== Te || n[33] !== v ? (qe = function(t) {
			var e = t.innerAllowUnnamedGroup, n = t.innerParticipants, r = t.innerSelectedOutContacts;
			if (A(n), B(e), V(r != null ? r : []), G.current = r != null ? r : [], o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() && Te != null) {
				var a = n.length <= o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD;
				De(a);
			}
			v === !0 ? P.pop() : P.push(o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER);
		}, n[31] = P, n[32] = Te, n[33] = v, n[34] = qe) : qe = n[34];
		var Ue = qe, Ve;
		n[35] === Symbol.for("react.memo_cache_sentinel") ? (Ve = function(t) {
			t.text != null && le(t.text), t.thumb != null && ce(t.thumb), t.full != null && pe(t.full), t.ephemeralDuration != null && ge(t.ephemeralDuration);
		}, n[35] = Ve) : Ve = n[35];
		var He = Ve;
		if (P.step == null) return null;
		var Ge, ze;
		n[36] !== P ? (ze = function() {
			return P.pop();
		}, n[36] = P, n[37] = ze) : ze = n[37];
		var je;
		n[38] !== h || n[39] !== R ? (je = R === r("WAWebDrawerViewType").MODAL ? function() {
			return h == null ? void 0 : h();
		} : void 0, n[38] = h, n[39] = R, n[40] = je) : je = n[40];
		var Ke;
		n[41] !== ze || n[42] !== je ? (Ke = {
			onBack: ze,
			onCancel: je
		}, n[41] = ze, n[42] = je, n[43] = Ke) : Ke = n[43];
		var Qe = Ke;
		e: switch (P.step) {
			case o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER: {
				var Xe;
				n[44] !== P ? (Xe = function() {
					return P.push(o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER);
				}, n[44] = P, n[45] = Xe) : Xe = n[45];
				var Ye;
				n[46] !== P || n[47] !== Te || n[48] !== w ? (Ye = function() {
					Te == null && De(_(w.length)), P.push(o("WAWebNewGroupFlowStep").NewGroupFlowStep.GROUP_PERMISSIONS_DRAWER);
				}, n[46] = P, n[47] = Te, n[48] = w, n[49] = Ye) : Ye = n[49];
				var Je;
				n[50] !== O || n[51] !== Qe.onBack || n[52] !== Qe.onCancel || n[53] !== fe || n[54] !== me || n[55] !== ie || n[56] !== ue || n[57] !== We || n[58] !== re || n[59] !== y || n[60] !== w || n[61] !== v || n[62] !== Xe || n[63] !== Ye || n[64] !== R ? (Je = s.jsx(r("WAWebNewGroupDrawer.react"), {
					participants: w,
					onBack: Qe.onBack,
					onCancel: Qe.onCancel,
					onSubmit: We,
					allowUnnamedGroup: O,
					parentGroupId: y,
					shortenedCreationFlow: v,
					onAddParticipants: Xe,
					onGroupPermissions: Ye,
					handleLiftGroupInfo: He,
					subject: ie,
					thumb: ue,
					full: me,
					ephemeralDuration: fe,
					loading: re,
					viewType: R
				}), n[50] = O, n[51] = Qe.onBack, n[52] = Qe.onCancel, n[53] = fe, n[54] = me, n[55] = ie, n[56] = ue, n[57] = We, n[58] = re, n[59] = y, n[60] = w, n[61] = v, n[62] = Xe, n[63] = Ye, n[64] = R, n[65] = Je) : Je = n[65], Ge = Je;
				break e;
			}
			case o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER: {
				var Ze;
				n[66] !== P ? (Ze = function() {
					return P.pop();
				}, n[66] = P, n[67] = Ze) : Ze = n[67];
				var et;
				if (n[68] !== P || n[69] !== E || n[70] !== h || n[71] !== Ze || n[72] !== R) {
					if (et = { onBack: Ze }, !E) {
						delete et.onBack;
						var tt;
						n[74] !== P || n[75] !== h || n[76] !== R ? (tt = function() {
							return R === r("WAWebDrawerViewType").MODAL ? h == null ? void 0 : h() : P.pop();
						}, n[74] = P, n[75] = h, n[76] = R, n[77] = tt) : tt = n[77], et.onCancel = tt;
					}
					n[68] = P, n[69] = E, n[70] = h, n[71] = Ze, n[72] = R, n[73] = et;
				} else et = n[73];
				var nt;
				n[78] !== et || n[79] !== T || n[80] !== Ue || n[81] !== l || n[82] !== y || n[83] !== w || n[84] !== C || n[85] !== U || n[86] !== S || n[87] !== R ? (nt = s.jsx(r("WAWebNewGroupParticipantsDrawer.react"), babelHelpers.extends({}, et, {
					onContinue: Ue,
					onParticipantsChange: X,
					participants: w,
					initialSelectedOutContacts: U,
					communityName: T,
					parentGroupId: y,
					initialSelectedSubgroup: l,
					sourceGroupMembers: S,
					viewType: R,
					participantsDrawerTitle: C
				})), n[78] = et, n[79] = T, n[80] = Ue, n[81] = l, n[82] = y, n[83] = w, n[84] = C, n[85] = U, n[86] = S, n[87] = R, n[88] = nt) : nt = n[88], Ge = nt;
				break e;
			}
			case o("WAWebNewGroupFlowStep").NewGroupFlowStep.GROUP_PERMISSIONS_DRAWER: {
				var rt;
				n[89] !== Te || n[90] !== w.length ? (rt = Te != null ? Te : _(w.length), n[89] = Te, n[90] = w.length, n[91] = rt) : rt = n[91];
				var ot;
				n[92] !== ve || n[93] !== Qe.onBack || n[94] !== Qe.onCancel || n[95] !== Ee || n[96] !== $e || n[97] !== Me || n[98] !== w.length || n[99] !== ye || n[100] !== rt || n[101] !== R ? (ot = s.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
					onBack: Qe.onBack,
					onCancel: Qe.onCancel,
					participantCount: w.length,
					restrict: ye,
					setRestrict: Ce,
					announce: ve,
					setAnnounce: Se,
					membershipApprovalMode: Me,
					setMembershipApprovalMode: we,
					memberAddMode: Ee,
					setMemberAddMode: ke,
					memberLinkMode: rt,
					setMemberLinkMode: De,
					memberShareGroupHistoryMode: $e,
					setMemberShareGroupHistoryMode: Pe,
					viewType: R
				}), n[92] = ve, n[93] = Qe.onBack, n[94] = Qe.onCancel, n[95] = Ee, n[96] = $e, n[97] = Me, n[98] = w.length, n[99] = ye, n[100] = rt, n[101] = R, n[102] = ot) : ot = n[102], Ge = ot;
			}
		}
		var at;
		return n[103] !== $ || n[104] !== Ge || n[105] !== P || n[106] !== te || n[107] !== b ? (at = s.jsx($, {
			ref: b,
			flow: P,
			requestDismiss: te,
			children: Ge
		}), n[103] = $, n[104] = Ge, n[105] = P, n[106] = te, n[107] = b, n[108] = at) : at = n[108], at;
	}
	function g() {
		o("WAWebContactCollection").ContactCollection.ensureSorted();
	}
	var h = f;
	l.NewGroupFlow = h;
}), 98);
