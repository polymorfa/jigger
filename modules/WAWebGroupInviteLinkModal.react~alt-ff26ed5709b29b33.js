__d("WAWebGroupInviteLinkModal.react", [
	"fbt",
	"$InternalEnum",
	"WAAbortError",
	"WAFilteredCatch",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebBackendErrors",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebEmptyState.react",
	"WAWebFindChatAction",
	"WAWebGroupInviteAction",
	"WAWebGroupInviteUtils.react",
	"WAWebGroupJoinModalBase.react",
	"WAWebGroupJoinModalUtils",
	"WAWebGroupType",
	"WAWebInviteProfilePicAction",
	"WAWebMembershipApprovalRequestAction",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebQueryGroupAction",
	"WAWebUpdateSubgroupsCommunityAction",
	"WAWebUpdaterUpdateApp",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumSurfaceType",
	"getErrorSafe",
	"react",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = n("$InternalEnum").Mirrored([
		"Loading",
		"Success",
		"Error"
	]);
	function f(t) {
		var n, a = t.groupCode, i = t.source, l = p(_.Loading), u = l[0], d = l[1], f = p(void 0), g = f[0], h = f[1], y = p(void 0), C = y[0], b = y[1], v = p(void 0), S = v[0], R = v[1], L = p(void 0), E = L[0], k = L[1], I = p(void 0), T = I[0], D = I[1], x = p(!1), $ = x[0], P = x[1], N = p(!1), M = N[0], w = N[1], A = r("useWAWebUnmountSignal")(), F = async function(t) {
			var e, n;
			if (t != null ? (e = t.id, n = t.groupType) : C && (e = C.id, n = C.groupType), e != null) if (n === o("WAWebGroupType").GroupType.COMMUNITY) o("WAWebCmd").Cmd.openCommunityHome(e);
			else {
				var r = o("WAWebChatCollection").ChatCollection.assertGet(e);
				await o("WAWebCmd").Cmd.openChatFromUnread({
					chat: r,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.GroupInvite
				}).then(function(e) {
					e && new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
						action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_NAVIGATION,
						surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
						chat: r
					}).commit();
				});
			}
			o("WAWebModalManager").ModalManager.close();
		};
		if (m(function() {
			o("WAWebGroupJoinModalUtils").shouldSendInviteRequest() && r("WAPromiseRaceAbort")(o("WAWebQueryGroupAction").queryGroupInviteInfo(a), A).then(function(t) {
				var n = t.groupMetadata.hasJoined();
				n ? F(t.groupMetadata) : (h(void 0), b(t.groupMetadata), P(t.groupMetadata.membershipApprovalMode), R(t.subject), k(t.parentGroupSubject), w(t.membershipApprovalRequest), t.groupMetadata.parentGroup && o("WAWebUpdateSubgroupsCommunityAction").updateMembershipApprovalRequest(t.groupMetadata.id, t.membershipApprovalRequest), d(_.Success), o("WAWebInviteProfilePicAction").queryGroupInviteLinkProfilePicURL(t.groupMetadata.id, a).then(function(e) {
					D(e);
				}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
					t.status !== 404 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["group_invite_modal: fetch group profile pic with error ", ""])), t.status);
				})));
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				h(e), d(_.Error);
			})).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
		}, []), g instanceof o("WAWebBackendErrors").ServerStatusCodeError && g.status === 436) return c.jsx(o("WAWebGroupInviteUtils.react").GrowthLockedModal, {});
		var O = o("WAWebGroupJoinModalUtils").getDismissText(M), B;
		if (u === _.Error && g != null && (M ? B = o("WAWebGroupJoinModalUtils").getCancelRequestErrorStr(g) : B = o("WAWebGroupJoinModalUtils").getGroupInviteAcceptErrorStr(g, C == null ? void 0 : C.groupType)), !C) {
			var W;
			return u === _.Loading ? W = c.jsx(o("WAWebEmptyState.react").LoadingWithText, { text: s._(
				/*BTDS*/
				""
			) }) : W = B, c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "group-invite-link"
				},
				onCancel: o("WAWebModalManager").closeModalManager,
				children: W
			});
		}
		var q = C.groupType, U = C.id, V = C.numSubgroups, H = $, G = function(t) {
			o("WAWebCmd").Cmd.openChatFromUnread({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.GroupInvite
			}).then(function(e) {
				e && (d(_.Success), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
			}).then(function() {
				q === o("WAWebGroupType").GroupType.COMMUNITY && o("WAWebCmd").Cmd.openCommunityHome(U), o("WAWebModalManager").ModalManager.close();
			});
		}, z = function(t) {
			d(_.Success), w(t), C.parentGroup && o("WAWebUpdateSubgroupsCommunityAction").updateMembershipApprovalRequest(C.id, t);
		}, j = function() {
			d(_.Loading), r("WAPromiseRaceAbort")(o("WAWebGroupInviteAction").joinGroupViaInvite(a, H, C), A).then(function(e) {
				if (H) z(!0);
				else return e.contact.set({ name: S }), G(e);
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				if (e.status === 304) {
					z(!0);
					return;
				}
				d(_.Error), h(e);
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").UnexpectedJoinGroupViaInviteResponse, async function(e) {
				if (P(e.membershipApprovalMode), e.membershipApprovalMode) z(!0);
				else {
					var t = await o("WAWebFindChatAction").findOrCreateLatestChat(e.gid, "newGroupInviteLink"), n = t.chat;
					await G(n);
				}
			})).catch(function() {
				d(_.Error), h(new (o("WAWebBackendErrors")).ServerStatusCodeError(500));
			}).finally(function() {
				u === _.Success && (H ? new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
					chat: o("WAWebChatCollection").ChatCollection.get(C.id)
				}).commit() : new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
					chat: o("WAWebChatCollection").ChatCollection.get(C.id)
				}).commit());
			});
		}, K = async function() {
			d(_.Loading);
			try {
				if (A.aborted) return;
				await o("WAWebMembershipApprovalRequestAction").cancelMembershipApprovalRequest(C.id), z(!1);
			} catch (e) {
				d(_.Error), h(r("getErrorSafe")(e));
			}
		}, Q = o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({
			groupMetadata: C,
			numSubgroups: V,
			parentGroupSubject: E
		}), X = T || "", Y = {
			src: X,
			groupId: U
		}, J = C.participants.toArray(), Z = C.hasJoined(), ee = async function() {
			g instanceof o("WAWebBackendErrors").ServerStatusCodeError && g.status === 426 ? await o("WAWebUpdaterUpdateApp").updateApp() : Z ? F() : M ? await K() : j();
		}, te = o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
			inGroup: Z,
			groupType: q,
			error: g,
			membershipApprovalMode: H,
			requestSent: M
		}), ne = C.displayedDesc;
		return c.jsx(r("WAWebGroupJoinModalBase.react"), {
			image: Y,
			title: S,
			subtitle: Q,
			contacts: J,
			description: ne,
			actionText: te,
			onAction: ee,
			actionDisabled: !1,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: O,
			finePrint: {
				text: B != null ? B : o("WAWebGroupJoinModalUtils").getFinePrint({
					groupType: q,
					isCommunityParticipant: C.isParentGroupParticipant(),
					parentGroupSubject: E,
					membershipApprovalMode: H,
					requestSent: M
				}),
				isError: B != null
			},
			participantsCount: (n = C.size) != null ? n : C.participants.length,
			groupType: C.groupType,
			loading: u === _.Loading,
			source: i
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
