__d("MAWGroupInviteDialog.react", [
	"fbt",
	"FDSDialogSection.react",
	"I64",
	"JSResourceForInteraction",
	"LSContactBlockedByViewerStatus",
	"LSFactory",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LSOptimisticAcceptMessageRequestStoredProcedure",
	"LSThreadTitle.react",
	"MAWBridgeFireAndForget",
	"MAWJobDefinitions",
	"MAWMiActOnActThreadReady",
	"MAWODSProxy",
	"MAWTimedJob",
	"MWDialogText.react",
	"MWGroupMembershipListItem",
	"MWLSGroupMembershipMemberList.react",
	"MWPActor.react",
	"MWThreadPicture.react",
	"MWXDialog.react",
	"MWXDialogFooter.react",
	"MWXDialogHeader.react",
	"MWXTextPairing.react",
	"ReQL",
	"ReQLSuspense",
	"ServerTime",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"mwCMIsAnyCMThread",
	"promiseDone",
	"qex",
	"react",
	"requireDeferred",
	"useMWXLazyDialog",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useMemo, h = p.useState, y = r("requireDeferred")("MessageRequestsLog").__setRef("MAWGroupInviteDialog.react");
	function C(t) {
		var n = t.onClose, a = t.thread, l = (e || (e = r("useReStore")))(), d = o("MWPActor.react").useActor(), p = h(!1), C = p[0], b = p[1], v = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableAscending(l.tables.participants).getKeyRange(a.threadKey).take(20).map(function(e) {
				var t = o("ReQLSuspense").firstExn(o("ReQL").fromTableAscending(l.tables.contacts).getKeyRange(e.contactId), i.id + ":89");
				return [e, t];
			});
		}, [l, a.threadKey], i.id + ":83"), S = g(function() {
			return v.filter(function(e) {
				var t = e[0], n = e[1];
				return !(u || (u = o("I64"))).equal(n.id, d);
			});
		}, [d, v]), R = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableDescending(l.tables.group_invites).getKeyRange(a.threadKey);
		}, [l, a.threadKey], i.id + ":105"), L = g(function() {
			return v.filter(function(e) {
				var t = e[0], n = e[1];
				return !(u || (u = o("I64"))).equal(n.blockedByViewerStatus, (c || (c = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED));
			}).map(function(e) {
				var t = e[0], n = e[1];
				return n;
			});
		}, [v]), E = r("useMWXLazyDialog")(r("JSResourceForInteraction")("MAWGroupInviteBlockedAccountsDialog.react").__setRef("MAWGroupInviteDialog.react")), k = E[0], I = r("useMWXLazyDialog")(r("JSResourceForInteraction")("MAWGroupInviteDeleteConfirmationDialog.react").__setRef("MAWGroupInviteDialog.react")), T = I[0], D = R[0], x = (u || (u = o("I64"))).lt(D.inviteExpirationTimestampMs, u.of_float(o("ServerTime").getMillis())), $ = _(function() {
			if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType)) {
				b(!0), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, a.threadKey, "MAWGroupInviteDialog_acceptGroupInvite", function(e, t) {
					var n = o("WAJids").interpretAsGroupJid(t);
					n != null && r("promiseDone")(y.load().then(function(e) {
						e.logActionTapped(a, 1, (u || (u = o("I64"))).to_string(D.inviterId), o("WAJids").groupIdFromJid(n));
					}));
					var s;
					return r("qex")._("5865") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "acceptGroupInvite", {
						chatJid: t,
						inviteCode: D.inviteCode,
						invitedParticipantUserId: (u || (u = o("I64"))).to_string(D.inviteeId),
						inviteExpirationTs: u.to_int32(u.div(D.inviteExpirationTimestampMs, u.of_int32(1e3))),
						inviterUserId: u.to_string(D.inviterId)
					}), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "acceptGroupInvite.direct.success"
					}), s = Promise.resolve()) : (s = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").jobSerializers.acceptGroupInvite(t, (u || (u = o("I64"))).to_string(D.inviterId), u.to_string(D.inviteeId), D.inviteCode, u.to_int32(u.div(D.inviteExpirationTimestampMs, u.of_int32(1e3))), { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })), s.then(function() {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "acceptGroupInvite.MAWJobManager.success"
						});
					}, function() {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "acceptGroupInvite.MAWJobManager.failure"
						});
					})), s.then(function() {
						return l.runInTransaction(function(e) {
							return r("LSOptimisticAcceptMessageRequestStoredProcedure")(r("LSFactory")(e), { threadKey: a.threadKey });
						}, "readwrite", void 0, void 0, i.id + ":217");
					});
				})), b(!1);
				return;
			}
		}, [
			l,
			a,
			D
		]), P = !r("mwCMIsAnyCMThread")(a.threadType), N = S.length, M = S.filter(function(e) {
			var t = e[0], n = t.isSuperAdmin, r = t.subscribeSource;
			return n != null && r != null ? n : !1;
		}).map(function(e) {
			var t = e[0], n = e[1];
			return n.name;
		})[0], w = R.map(function(e) {
			return S.filter(function(t) {
				var n = t[0], r = t[1];
				return (u || (u = o("I64"))).equal(e.inviterId, r.id);
			}).map(function(e) {
				var t = e[0], n = e[1];
				return n.name;
			})[0];
		}), A = w.length, F = S.filter(function(e) {
			var t = e[0], n = e[1];
			return (u || (u = o("I64"))).lt(n.contactViewerRelationship, u.of_string("2"));
		}).length, O = A === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter", w[0])]
		) : A === 2 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", w[0]), s._param("GroupInviter2", w[1])]
		) : s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", w[0]), s._param("GroupInviter2", w[1])]
		);
		return f(function() {
			r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, a.threadKey, "MAWGroupInviteDialog_msgRequest", async function(e, t) {
				var n = o("WAJids").interpretAsGroupJid(t);
				if (n != null) {
					var r = await y.load();
					r.logMessageRequestInfoShown(a, (u || (u = o("I64"))).to_string(D.inviterId), o("WAJids").groupIdFromJid(n));
				}
			}));
		}, [
			l,
			D.inviterId,
			a
		]), m.jsxs(r("MWXDialog.react"), {
			footer: m.jsx(r("MWXDialogFooter.react"), {
				callToActionGroupDirection: "backward",
				primaryCallToAction: {
					disabled: C || x,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return L.length > 0 ? k({
							blockedContacts: L,
							closeParentDialogCallback: function() {
								return n();
							},
							inviter: D,
							thread: a
						}, function() {}) : ($(), n());
					},
					testid: "maw-group-invite-join-button",
					type: "primary"
				},
				secondaryCallToAction: {
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(l.tables, a.threadKey, "MAWGroupInviteDialog_deleteButton", async function(e, t) {
							var n = o("WAJids").interpretAsGroupJid(t);
							if (n != null) {
								var r = await y.load();
								r.logActionTapped(a, 8, (u || (u = o("I64"))).to_string(D.inviterId), o("WAJids").groupIdFromJid(n));
							}
						})), T({
							closeParentDialogCallback: function() {
								return n();
							},
							inviter: D,
							thread: a
						}, function() {});
					},
					testid: "maw-group-invite-delete-button"
				}
			}),
			header: m.jsx(r("MWXDialogHeader.react"), {
				onClose: n,
				title: s._(
					/*BTDS*/
					""
				),
				withCloseButton: !0
			}),
			onClose: n,
			size: "medium",
			children: [
				m.jsxs("div", {
					className: "xyamay9 x1l90r2v",
					children: [
						m.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: m.jsx(r("MWThreadPicture.react"), {
								badgeSize: 10,
								photoSize: 60,
								threadKey: a.threadKey
							})
						}),
						m.jsx("div", {
							className: "x1l90r2v x2b8uid",
							children: m.jsx(r("MWDialogText.react"), {
								color: "primary",
								isSemanticHeading: !0,
								numberOfLines: 1,
								type: "headlineEmphasized",
								children: m.jsx(r("LSThreadTitle.react"), { thread: a })
							})
						}),
						m.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: m.jsx(r("MWDialogText.react"), {
								color: "primary",
								type: "body",
								children: s._(
									/*BTDS*/
									"",
									[s._param("GroupCreator", M)]
								)
							})
						}),
						m.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: m.jsx(r("MWDialogText.react"), {
								color: "secondary",
								type: "body",
								children: s._(
									/*BTDS*/
									"",
									[s._plural(F, "number")]
								)
							})
						}),
						m.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: m.jsx(r("MWDialogText.react"), {
								color: "secondary",
								type: "body",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					]
				}),
				m.jsx(r("FDSDialogSection.react"), {
					headline: s._(
						/*BTDS*/
						"",
						[s._param("GroupSize", N, [0])]
					),
					children: m.jsx(r("MWLSGroupMembershipMemberList.react"), {
						onClose: n,
						participantsAndContacts: S.map(function(e) {
							var t = e[0], n = e[1];
							return {
								contact: n,
								participant: t,
								type: o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact
							};
						}),
						showAdmodIndicator: P,
						showAdmodsOnly: !1,
						showHostsOnly: !1,
						showInvitedByViewerOnly: !1,
						thread: a
					})
				}),
				m.jsx("div", {
					className: "x1iorvi4 xjkvuk6",
					children: m.jsx("div", {
						className: "xwib8y2 x2b8uid",
						children: m.jsx(r("MWXTextPairing.react"), {
							body: s._(
								/*BTDS*/
								""
							),
							bodyColor: "secondary",
							headline: O,
							headlineColor: "secondary",
							level: 4,
							textAlign: "center"
						})
					})
				})
			]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
