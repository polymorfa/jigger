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
	"useWAWebFlow",
	"useWAWebGroupDiscardGuard",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef, p = u.useState;
	function _(e) {
		return o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() ? e <= o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD : !1;
	}
	function f(e) {
		var t, n = e.groupCreateEntryPoint, a = e.initialParticipants, i = e.initialSelectedSubgroup, l = e.initialStep, u = l === void 0 ? o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER : l, f = e.isSubFlow, g = f === void 0 ? !0 : f, h = e.onCreateGroup, y = e.onEnd, C = e.parentGroupWid, b = e.participantsDrawerTitle, v = e.ref, S = e.shortenedCreationFlow, R = e.sourceGroupMembers, L = e.viewType, E = C != null ? o("WAWebChatCollection").ChatCollection.get(C) : null, k = E != null ? E.formattedTitle : null, I = o("useWAWebFlow").useFlow(u, {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: y
		}), T = I[0], D = I[1], x = p(a != null ? a : []), $ = x[0], P = x[1], N = p(!0), M = N[0], w = N[1], A = p([]), F = A[0], O = A[1], B = m([]), W = p((t = a == null ? void 0 : a.length) != null ? t : 0), q = W[0], U = W[1], V = c(function(e) {
			U(e.length);
		}, []), H = o("useWAWebGroupDiscardGuard").useGroupCreationDiscardGuard(q);
		d(function() {
			if (D.step === o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER) {
				var e = o("WAWebDrawerManager").DrawerManager.registerCloseGuardLeft(function(e) {
					return H();
				});
				return e;
			}
		}, [D.step, H]);
		var G = c(function(e) {
			e === o("WAWebUim").DismissReason.UIM_INTERACTION && D.step === o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER ? H().then(function(e) {
				e && D.pop();
			}) : D.pop();
		}, [D, H]), z = p(!1), j = z[0], K = z[1], Q = p(), X = Q[0], Y = Q[1], J = p(), Z = J[0], ee = J[1], te = p(), ne = te[0], re = te[1], oe = p(), ae = oe[0], ie = oe[1], le = p(!0), se = le[0], ue = le[1], ce = p(!0), de = ce[0], me = ce[1], pe = p(function() {
			var e = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroupMetadata(E == null ? void 0 : E.groupMetadata);
			return (e == null ? void 0 : e.memberAddMode) !== o("WAWebSchemaGroupMetadata").MemberAddMode.ADMIN_ADD;
		}), _e = pe[0], fe = pe[1], ge = p(), he = ge[0], ye = ge[1], Ce = p(!0), be = Ce[0], ve = Ce[1], Se = p(!1), Re = Se[0], Le = Se[1], Ee = function() {
			D.end();
		};
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "end_flow", Ee), d(function() {
			o("WAWebContactCollection").ContactCollection.ensureSorted();
		}, []);
		var ke = function(t) {
			var e = t.ephemeralDuration, r = t.full, a = t.participants, i = a === void 0 ? [] : a, l = t.subject, s = t.thumb;
			K(!0);
			var u = o("WAWebCreateGroupAction").createGroup({
				title: l,
				thumb: s,
				full: r,
				ephemeralDuration: e,
				parentGroupId: C,
				restrict: se,
				announce: de,
				membershipApprovalMode: Re,
				memberAddMode: _e,
				memberLinkMode: he,
				memberShareGroupHistoryMode: be
			}, i, B.current, n);
			h == null || h(u);
		}, Ie = function(t) {
			var e = t.innerAllowUnnamedGroup, n = t.innerParticipants, r = t.innerSelectedOutContacts;
			if (P(n), w(e), O(r != null ? r : []), B.current = r != null ? r : [], o("WAWebGroupGatingUtils").isAnyoneCanLinkToGroupsM2Enabled() && he != null) {
				var a = n.length <= o("WAWebGroupGatingUtils").ANYONE_CAN_LINK_M2_PARTICIPANT_THRESHOLD;
				ye(a);
			}
			S === !0 ? D.pop() : D.push(o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER);
		}, Te = function(t) {
			t.text != null && Y(t.text), t.thumb != null && ee(t.thumb), t.full != null && re(t.full), t.ephemeralDuration != null && ie(t.ephemeralDuration);
		};
		if (D.step == null) return null;
		var De, xe = {
			onBack: function() {
				return D.pop();
			},
			onCancel: L === r("WAWebDrawerViewType").MODAL ? function() {
				return y == null ? void 0 : y();
			} : void 0
		};
		switch (D.step) {
			case o("WAWebNewGroupFlowStep").NewGroupFlowStep.SET_GROUP_INFO_DRAWER: {
				De = s.jsx(r("WAWebNewGroupDrawer.react"), {
					participants: $,
					onBack: xe.onBack,
					onCancel: xe.onCancel,
					onSubmit: ke,
					allowUnnamedGroup: M,
					parentGroupId: C,
					shortenedCreationFlow: S,
					onAddParticipants: function() {
						return D.push(o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER);
					},
					onGroupPermissions: function() {
						he == null && ye(_($.length)), D.push(o("WAWebNewGroupFlowStep").NewGroupFlowStep.GROUP_PERMISSIONS_DRAWER);
					},
					handleLiftGroupInfo: Te,
					subject: X,
					thumb: Z,
					full: ne,
					ephemeralDuration: ae,
					loading: j,
					viewType: L
				});
				break;
			}
			case o("WAWebNewGroupFlowStep").NewGroupFlowStep.ADD_PARTICIPANTS_DRAWER: {
				var $e = { onBack: function() {
					return D.pop();
				} };
				g || (delete $e.onBack, $e.onCancel = function() {
					return L === r("WAWebDrawerViewType").MODAL ? y == null ? void 0 : y() : D.pop();
				}), De = s.jsx(r("WAWebNewGroupParticipantsDrawer.react"), babelHelpers.extends({}, $e, {
					onContinue: Ie,
					onParticipantsChange: V,
					participants: $,
					initialSelectedOutContacts: F,
					communityName: k,
					parentGroupId: C,
					initialSelectedSubgroup: i,
					sourceGroupMembers: R,
					viewType: L,
					participantsDrawerTitle: b
				}));
				break;
			}
			case o("WAWebNewGroupFlowStep").NewGroupFlowStep.GROUP_PERMISSIONS_DRAWER: {
				De = s.jsx(r("WAWebNewGroupPermissionsDrawer.react"), {
					onBack: xe.onBack,
					onCancel: xe.onCancel,
					participantCount: $.length,
					restrict: se,
					setRestrict: ue,
					announce: de,
					setAnnounce: me,
					membershipApprovalMode: Re,
					setMembershipApprovalMode: Le,
					memberAddMode: _e,
					setMemberAddMode: fe,
					memberLinkMode: he != null ? he : _($.length),
					setMemberLinkMode: ye,
					memberShareGroupHistoryMode: be,
					setMemberShareGroupHistoryMode: ve,
					viewType: L
				});
				break;
			}
		}
		return s.jsx(T, {
			ref: v,
			flow: D,
			requestDismiss: G,
			children: De
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = f;
	l.NewGroupFlow = g;
}), 98);
