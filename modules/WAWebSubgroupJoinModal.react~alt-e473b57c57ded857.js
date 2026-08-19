__d("WAWebSubgroupJoinModal.react", [
	"fbt",
	"$InternalEnum",
	"WAWebBackendErrors",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebContactsModal.react",
	"WAWebFindChatAction",
	"WAWebGroupJoinModalBase.react",
	"WAWebGroupJoinModalUtils",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebJoinSubgroupAction",
	"WAWebMembershipApprovalRequestAction",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebOpenChatFlow.react",
	"WAWebQuerySubGroupAction",
	"WAWebStreamModel",
	"WAWebSubgroupSendRequestModal.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUpdateSubgroupsCommunityAction",
	"WAWebUpdaterUpdateApp",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumChatFilterActionTypes",
	"getErrorSafe",
	"nullthrows",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = n("$InternalEnum").Mirrored([
		"Loading",
		"Success",
		"Error",
		"Complete"
	]);
	function _(e) {
		var t, n = e.contacts, a = e.source, i = e.subgroupInfo, l = i.participants.getAdmins(), c = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSubgroupSendRequestModal.react"), {
				adminContact: t,
				subgroupInfo: i,
				participants: n,
				source: a
			}));
		};
		if (l.length === 1) {
			c(l[0].contact);
			return;
		}
		var d = r("WAWebGroupMetadataCollection").get(i.parentGroupId.toString()), m = d == null || (t = d.participants.getSuperAdmin()) == null ? void 0 : t.id;
		if (m) {
			var p;
			(p = l[0]) != null && p.id.equals(m) || l.some(function(e) {
				return e.id.equals(m);
			}) && (l = l.sort(function(e, t) {
				return e.id.equals(m) ? -1 : t.id.equals(m) ? 1 : 0;
			}));
		}
		var _ = l.map(function(e) {
			return e.contact;
		});
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactsModal.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			contacts: _,
			onCancel: o("WAWebModalManager").closeModalManager,
			onSelect: c
		}));
	}
	function f(e) {
		var t, n = e.onSuccess, a = e.source, i = e.subgroupMetadata, l = m(null), c = l[0], f = l[1], h = m(null), y = h[0], C = h[1], b = m(null), v = b[0], S = b[1], R = m(!1), L = R[0], E = R[1], k = m(!1), I = k[0], T = k[1], D = !(y instanceof o("WAWebBackendErrors").ServerStatusCodeError && y.status === 406), x = r("useWAWebEventTargetValue")(r("WAWebGroupMetadataCollection"), "group_participant_change_" + o("WAWebUserPrefsMeUser").getMeUserOrThrow().toString(), function() {
			var e = r("WAWebGroupMetadataCollection").get(i.id);
			return !!(e != null && e.participants.iAmMember());
		}), $ = i.hiddenSubgroup === !0, P;
		if (y != null && (I ? P = o("WAWebGroupJoinModalUtils").getCancelRequestErrorStr(y) : P = o("WAWebGroupJoinModalUtils").getErrorStr(y)), d(function() {
			(async function() {
				if (o("WAWebStreamModel").Stream.displayInfo === o("WAWebStreamModel").StreamInfo.OFFLINE) throw new (o("WAWebBackendErrors")).ServerStatusCodeError(503);
				var e = await o("WAWebQuerySubGroupAction").querySubgroupInfo(i.id, i.parentGroupId);
				if (e != null && e.suspended) {
					o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
					return;
				}
				S(e), E(!!(e != null && e.membershipApprovalMode)), T(!!(e != null && e.membershipApprovalRequest)), o("WAWebUpdateSubgroupsCommunityAction").updateMembershipApprovalRequest(i.id, !!(e != null && e.membershipApprovalRequest));
			})().catch(function(e) {
				C(r("getErrorSafe")(e)), f(p.Error);
			});
		}, [i]), c === p.Error) return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "subgroup-join"
			},
			onOK: g,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				size: "16",
				children: P
			})
		});
		if (!v) return null;
		var N = v.adminRequestRequired, M = v.groupType, w = v.id, A = v.participants, F = v.subject, O = L, B = M === o("WAWebGroupType").GroupType.LINKED_SUBGROUP && N, W = M === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP, q = { groupId: w }, U = o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
			groupType: M,
			inGroup: x,
			error: y,
			adminRequestRequired: N,
			membershipApprovalMode: O,
			requestSent: I,
			isHiddenSubgroup: $
		}), V = function() {
			$ && (o("WAWebModalManager").ModalManager.close(), o("WAWebCmd").Cmd.openCommunityHomeManageGroups(i.parentGroupId)), o("WAWebModalManager").ModalManager.close();
		}, H = o("WAWebGroupJoinModalUtils").getDismissText(I, $), G = A.toArray(), z = async function(t) {
			var e = await o("WAWebFindChatAction").findOrCreateLatestChat(i.id, "subgroupJoinModal", t), r = e.chat, a = await o("WAWebCmd").Cmd.openChatFromUnread({
				chat: r,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.SubgroupJoin
			});
			a && (f(p.Success), o("WAWebComposeBoxActions").ComposeBoxActions.focus(r), o("WAWebModalManager").ModalManager.close(), n());
		}, j = function(t) {
			f(p.Success), T(t), o("WAWebUpdateSubgroupsCommunityAction").updateMembershipApprovalRequest(i.id, t);
		}, K = async function() {
			f(p.Loading);
			try {
				await o("WAWebMembershipApprovalRequestAction").cancelMembershipApprovalRequest(w), j(!1);
			} catch (e) {
				f(p.Complete), C(r("getErrorSafe")(e));
			}
		}, Q = async function() {
			var e;
			if ((e = r("WAWebGroupMetadataCollection").get(i.id)) != null && e.participants.iAmMember()) {
				await z();
				return;
			}
			if ($) {
				var t, n = s._(
					/*BTDS*/
					"",
					[s._param("group-name", i.subject), s._param("community-name", (t = r("WAWebGroupMetadataCollection").get(i.parentGroupId)) == null ? void 0 : t.subject)]
				);
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
					target: { wid: r("nullthrows")(i.owner) },
					msgText: n.toString(),
					clearPreviousText: !0,
					onSuccess: r("WAWebNoop")
				}), { transition: "modal-flow" });
				return;
			}
			if (B) {
				o("WAWebModalManager").ModalManager.close(), _({
					contacts: G,
					source: a,
					subgroupInfo: v
				});
				return;
			}
			if (I) {
				await K();
				return;
			}
			f(p.Loading), C(null);
			try {
				if (y instanceof o("WAWebBackendErrors").ServerStatusCodeError && (y.status === 406 || y.status === 426)) {
					y.status === 426 ? await o("WAWebUpdaterUpdateApp").updateApp() : y.status === 406 && V(), f(p.Success);
					return;
				}
				if (W) {
					var l = await o("WAWebJoinSubgroupAction").joinAnnouncementGroup(i.parentGroupId, i.id), c = o("WAWebCommunityGroupJourneyEventImpl").CommunityGroupJourneyEvent.inviteModalSourceToSurface(a);
					c && (l == null ? void 0 : l.status) === 200 && (O ? new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
						action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
						surface: c,
						chat: o("WAWebChatCollection").ChatCollection.get(i.id)
					}).commit() : new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
						action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
						surface: c,
						chat: o("WAWebChatCollection").ChatCollection.get(i.id)
					}).commit());
				}
				if (i.groupType === o("WAWebGroupType").GroupType.LINKED_SUBGROUP || i.groupType === o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP) {
					var d = await o("WAWebJoinSubgroupAction").joinSubgroup({
						parentGroupId: i.parentGroupId,
						request: O,
						subgroupId: i.id
					}), m = o("WAWebCommunityGroupJourneyEventImpl").CommunityGroupJourneyEvent.inviteModalSourceToSurface(a);
					m && (d == null ? void 0 : d.status) === 200 && (O ? new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
						action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
						surface: m,
						chat: o("WAWebChatCollection").ChatCollection.get(i.id)
					}).commit() : new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
						action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
						surface: m,
						chat: o("WAWebChatCollection").ChatCollection.get(i.id)
					}).commit());
				}
				if (O) {
					j(!0);
					return;
				}
				await z({ isGroupJoin: !0 });
			} catch (e) {
				if (e instanceof o("WAWebBackendErrors").UnexpectedJoinSubgroupResponse) {
					E(e.membershipApprovalMode), e.membershipApprovalMode ? j(!0) : await z();
					return;
				}
				if (e instanceof o("WAWebBackendErrors").ServerStatusCodeError && e.status === 304) {
					j(!0);
					return;
				}
				C(r("getErrorSafe")(e)), f(p.Complete);
			}
		};
		return u.jsx(r("WAWebGroupJoinModalBase.react"), {
			image: q,
			title: F,
			subtitle: o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({ groupMetadata: v }),
			contacts: G,
			actionText: U,
			onAction: Q,
			actionDisabled: !1,
			onCancel: D ? V : void 0,
			description: v.displayedDesc,
			cancelText: H,
			finePrint: {
				text: P != null ? P : o("WAWebGroupJoinModalUtils").getFinePrint({
					groupType: M,
					isCommunityParticipant: !0,
					membershipApprovalMode: O,
					requestSent: I,
					isHiddenSubgroup: $
				}),
				isError: P != null
			},
			loading: c === p.Loading,
			participantsCount: (t = v.size) != null ? t : A.length,
			groupType: v.groupType,
			source: a
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = f;
}), 226);
