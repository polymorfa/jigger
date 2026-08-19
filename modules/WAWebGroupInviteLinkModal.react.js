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
	"asyncToGeneratorRuntime",
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
		var a, i = t.groupCode, l = t.source, u = p(_.Loading), d = u[0], f = u[1], g = p(void 0), h = g[0], y = g[1], C = p(void 0), b = C[0], v = C[1], S = p(void 0), R = S[0], L = S[1], E = p(void 0), k = E[0], I = E[1], T = p(void 0), D = T[0], x = T[1], $ = p(!1), P = $[0], N = $[1], M = p(!1), w = M[0], A = M[1], F = r("useWAWebUnmountSignal")(), O = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n;
				if (e != null ? (t = e.id, n = e.groupType) : b && (t = b.id, n = b.groupType), t != null) if (n === o("WAWebGroupType").GroupType.COMMUNITY) o("WAWebCmd").Cmd.openCommunityHome(t);
				else {
					var r = o("WAWebChatCollection").ChatCollection.assertGet(t);
					yield o("WAWebCmd").Cmd.openChatFromUnread({
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
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})();
		if (m(function() {
			o("WAWebGroupJoinModalUtils").shouldSendInviteRequest() && r("WAPromiseRaceAbort")(o("WAWebQueryGroupAction").queryGroupInviteInfo(i), F).then(function(t) {
				var n = t.groupMetadata.hasJoined();
				n ? O(t.groupMetadata) : (y(void 0), v(t.groupMetadata), N(t.groupMetadata.membershipApprovalMode), L(t.subject), I(t.parentGroupSubject), A(t.membershipApprovalRequest), t.groupMetadata.parentGroup && o("WAWebUpdateSubgroupsCommunityAction").updateMembershipApprovalRequest(t.groupMetadata.id, t.membershipApprovalRequest), f(_.Success), o("WAWebInviteProfilePicAction").queryGroupInviteLinkProfilePicURL(t.groupMetadata.id, i).then(function(e) {
					x(e);
				}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(t) {
					t.status !== 404 && o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["group_invite_modal: fetch group profile pic with error ", ""])), t.status);
				})));
			}).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				y(e), f(_.Error);
			})).catch(o("WAAbortError").catchAbort(r("WAWebNoop")));
		}, []), h instanceof o("WAWebBackendErrors").ServerStatusCodeError && h.status === 436) return c.jsx(o("WAWebGroupInviteUtils.react").GrowthLockedModal, {});
		var B = o("WAWebGroupJoinModalUtils").getDismissText(w), W;
		if (d === _.Error && h != null && (w ? W = o("WAWebGroupJoinModalUtils").getCancelRequestErrorStr(h) : W = o("WAWebGroupJoinModalUtils").getGroupInviteAcceptErrorStr(h, b == null ? void 0 : b.groupType)), !b) {
			var q;
			return d === _.Loading ? q = c.jsx(o("WAWebEmptyState.react").LoadingWithText, { text: s._(
				/*BTDS*/
				""
			) }) : q = W, c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				tsNavigationData: {
					surface: "unknown",
					viewName: "group-invite-link"
				},
				onCancel: o("WAWebModalManager").closeModalManager,
				children: q
			});
		}
		var U = b.groupType, V = b.id, H = b.numSubgroups, G = P, z = function(t) {
			o("WAWebCmd").Cmd.openChatFromUnread({
				chat: t,
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.GroupInvite
			}).then(function(e) {
				e && (f(_.Success), o("WAWebComposeBoxActions").ComposeBoxActions.focus(t));
			}).then(function() {
				U === o("WAWebGroupType").GroupType.COMMUNITY && o("WAWebCmd").Cmd.openCommunityHome(V), o("WAWebModalManager").ModalManager.close();
			});
		}, j = function(t) {
			f(_.Success), A(t), b.parentGroup && o("WAWebUpdateSubgroupsCommunityAction").updateMembershipApprovalRequest(b.id, t);
		}, K = function() {
			f(_.Loading), r("WAPromiseRaceAbort")(o("WAWebGroupInviteAction").joinGroupViaInvite(i, G, b), F).then(function(e) {
				if (G) j(!0);
				else return e.contact.set({ name: R }), z(e);
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").ServerStatusCodeError, function(e) {
				if (e.status === 304) {
					j(!0);
					return;
				}
				f(_.Error), y(e);
			})).catch(o("WAFilteredCatch").filteredCatch(o("WAWebBackendErrors").UnexpectedJoinGroupViaInviteResponse, (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					if (N(e.membershipApprovalMode), e.membershipApprovalMode) j(!0);
					else {
						var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(e.gid, "newGroupInviteLink"), n = t.chat;
						yield z(n);
					}
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})())).catch(function() {
				f(_.Error), y(new (o("WAWebBackendErrors")).ServerStatusCodeError(500));
			}).finally(function() {
				d === _.Success && (G ? new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN_REQUEST,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
					chat: o("WAWebChatCollection").ChatCollection.get(b.id)
				}).commit() : new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
					action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.GROUP_JOIN,
					surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
					chat: o("WAWebChatCollection").ChatCollection.get(b.id)
				}).commit());
			});
		}, Q = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				f(_.Loading);
				try {
					if (F.aborted) return;
					yield o("WAWebMembershipApprovalRequestAction").cancelMembershipApprovalRequest(b.id), j(!1);
				} catch (e) {
					f(_.Error), y(r("getErrorSafe")(e));
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), X = o("WAWebGroupJoinModalUtils").getGroupInviteSubtitle({
			groupMetadata: b,
			numSubgroups: H,
			parentGroupSubject: k
		}), Y = D || "", J = {
			src: Y,
			groupId: V
		}, Z = b.participants.toArray(), ee = b.hasJoined(), te = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				h instanceof o("WAWebBackendErrors").ServerStatusCodeError && h.status === 426 ? yield o("WAWebUpdaterUpdateApp").updateApp() : ee ? O() : w ? yield Q() : K();
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), ne = o("WAWebGroupJoinModalUtils").getGroupInviteActionText({
			inGroup: ee,
			groupType: U,
			error: h,
			membershipApprovalMode: G,
			requestSent: w
		}), re = b.displayedDesc;
		return c.jsx(r("WAWebGroupJoinModalBase.react"), {
			image: J,
			title: R,
			subtitle: X,
			contacts: Z,
			description: re,
			actionText: ne,
			onAction: te,
			actionDisabled: !1,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: B,
			finePrint: {
				text: W != null ? W : o("WAWebGroupJoinModalUtils").getFinePrint({
					groupType: U,
					isCommunityParticipant: b.isParentGroupParticipant(),
					parentGroupSubject: k,
					membershipApprovalMode: G,
					requestSent: w
				}),
				isError: W != null
			},
			participantsCount: (a = b.size) != null ? a : b.participants.length,
			groupType: b.groupType,
			loading: d === _.Loading,
			source: l
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
