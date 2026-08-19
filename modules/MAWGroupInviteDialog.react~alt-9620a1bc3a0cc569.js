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
	"Promise",
	"ReQL",
	"ReQLSuspense",
	"ServerTime",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"asyncToGeneratorRuntime",
	"mwCMIsAnyCMThread",
	"promiseDone",
	"qex",
	"react",
	"requireDeferred",
	"useMWXLazyDialog",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useMemo, y = _.useState, C = r("requireDeferred")("MessageRequestsLog").__setRef("MAWGroupInviteDialog.react");
	function b(t) {
		var a = t.onClose, l = t.thread, m = (u || (u = r("useReStore")))(), _ = o("MWPActor.react").useActor(), b = y(!1), v = b[0], S = b[1], R = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableAscending(m.tables.participants).getKeyRange(l.threadKey).take(20).map(function(e) {
				var t = o("ReQLSuspense").firstExn(o("ReQL").fromTableAscending(m.tables.contacts).getKeyRange(e.contactId), i.id + ":89");
				return [e, t];
			});
		}, [m, l.threadKey], i.id + ":83"), L = h(function() {
			return R.filter(function(e) {
				var t = e[0], n = e[1];
				return !(c || (c = o("I64"))).equal(n.id, _);
			});
		}, [_, R]), E = o("ReQLSuspense").useArray(function() {
			return o("ReQL").fromTableDescending(m.tables.group_invites).getKeyRange(l.threadKey);
		}, [m, l.threadKey], i.id + ":105"), k = h(function() {
			return R.filter(function(e) {
				var t = e[0], n = e[1];
				return !(c || (c = o("I64"))).equal(n.blockedByViewerStatus, (d || (d = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED));
			}).map(function(e) {
				var t = e[0], n = e[1];
				return n;
			});
		}, [R]), I = r("useMWXLazyDialog")(r("JSResourceForInteraction")("MAWGroupInviteBlockedAccountsDialog.react").__setRef("MAWGroupInviteDialog.react")), T = I[0], D = r("useMWXLazyDialog")(r("JSResourceForInteraction")("MAWGroupInviteDeleteConfirmationDialog.react").__setRef("MAWGroupInviteDialog.react")), x = D[0], $ = E[0], P = (c || (c = o("I64"))).lt($.inviteExpirationTimestampMs, c.of_float(o("ServerTime").getMillis())), N = f(function() {
			if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(l.threadType)) {
				S(!0), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, l.threadKey, "MAWGroupInviteDialog_acceptGroupInvite", function(t, a) {
					var s = o("WAJids").interpretAsGroupJid(a);
					s != null && r("promiseDone")(C.load().then(function(e) {
						e.logActionTapped(l, 1, (c || (c = o("I64"))).to_string($.inviterId), o("WAJids").groupIdFromJid(s));
					}));
					var u;
					return r("qex")._("5865") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "acceptGroupInvite", {
						chatJid: a,
						inviteCode: $.inviteCode,
						invitedParticipantUserId: (c || (c = o("I64"))).to_string($.inviteeId),
						inviteExpirationTs: c.to_int32(c.div($.inviteExpirationTimestampMs, c.of_int32(1e3))),
						inviterUserId: c.to_string($.inviterId)
					}), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "acceptGroupInvite.direct.success"
					}), u = (e || (e = n("Promise"))).resolve()) : (u = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").jobSerializers.acceptGroupInvite(a, (c || (c = o("I64"))).to_string($.inviterId), c.to_string($.inviteeId), $.inviteCode, c.to_int32(c.div($.inviteExpirationTimestampMs, c.of_int32(1e3))), { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })), u.then(function() {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "acceptGroupInvite.MAWJobManager.success"
						});
					}, function() {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "acceptGroupInvite.MAWJobManager.failure"
						});
					})), u.then(function() {
						return m.runInTransaction(function(e) {
							return r("LSOptimisticAcceptMessageRequestStoredProcedure")(r("LSFactory")(e), { threadKey: l.threadKey });
						}, "readwrite", void 0, void 0, i.id + ":217");
					});
				})), S(!1);
				return;
			}
		}, [
			m,
			l,
			$
		]), M = !r("mwCMIsAnyCMThread")(l.threadType), w = L.length, A = L.filter(function(e) {
			var t = e[0], n = t.isSuperAdmin, r = t.subscribeSource;
			return n != null && r != null ? n : !1;
		}).map(function(e) {
			var t = e[0], n = e[1];
			return n.name;
		})[0], F = E.map(function(e) {
			return L.filter(function(t) {
				var n = t[0], r = t[1];
				return (c || (c = o("I64"))).equal(e.inviterId, r.id);
			}).map(function(e) {
				var t = e[0], n = e[1];
				return n.name;
			})[0];
		}), O = F.length, B = L.filter(function(e) {
			var t = e[0], n = e[1];
			return (c || (c = o("I64"))).lt(n.contactViewerRelationship, c.of_string("2"));
		}).length, W = O === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter", F[0])]
		) : O === 2 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", F[0]), s._param("GroupInviter2", F[1])]
		) : s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", F[0]), s._param("GroupInviter2", F[1])]
		);
		return g(function() {
			r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, l.threadKey, "MAWGroupInviteDialog_msgRequest", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					var n = o("WAJids").interpretAsGroupJid(t);
					if (n != null) {
						var r = yield C.load();
						r.logMessageRequestInfoShown(l, (c || (c = o("I64"))).to_string($.inviterId), o("WAJids").groupIdFromJid(n));
					}
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})()));
		}, [
			m,
			$.inviterId,
			l
		]), p.jsxs(r("MWXDialog.react"), {
			footer: p.jsx(r("MWXDialogFooter.react"), {
				callToActionGroupDirection: "backward",
				primaryCallToAction: {
					disabled: v || P,
					label: s._(
						/*BTDS*/
						""
					),
					onPress: function() {
						return k.length > 0 ? T({
							blockedContacts: k,
							closeParentDialogCallback: function() {
								return a();
							},
							inviter: $,
							thread: l
						}, function() {}) : (N(), a());
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
						return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, l.threadKey, "MAWGroupInviteDialog_deleteButton", (function() {
							var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
								var n = o("WAJids").interpretAsGroupJid(t);
								if (n != null) {
									var r = yield C.load();
									r.logActionTapped(l, 8, (c || (c = o("I64"))).to_string($.inviterId), o("WAJids").groupIdFromJid(n));
								}
							});
							return function(t, n) {
								return e.apply(this, arguments);
							};
						})())), x({
							closeParentDialogCallback: function() {
								return a();
							},
							inviter: $,
							thread: l
						}, function() {});
					},
					testid: "maw-group-invite-delete-button"
				}
			}),
			header: p.jsx(r("MWXDialogHeader.react"), {
				onClose: a,
				title: s._(
					/*BTDS*/
					""
				),
				withCloseButton: !0
			}),
			onClose: a,
			size: "medium",
			children: [
				p.jsxs("div", {
					className: "xyamay9 x1l90r2v",
					children: [
						p.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: p.jsx(r("MWThreadPicture.react"), {
								badgeSize: 10,
								photoSize: 60,
								threadKey: l.threadKey
							})
						}),
						p.jsx("div", {
							className: "x1l90r2v x2b8uid",
							children: p.jsx(r("MWDialogText.react"), {
								color: "primary",
								isSemanticHeading: !0,
								numberOfLines: 1,
								type: "headlineEmphasized",
								children: p.jsx(r("LSThreadTitle.react"), { thread: l })
							})
						}),
						p.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: p.jsx(r("MWDialogText.react"), {
								color: "primary",
								type: "body",
								children: s._(
									/*BTDS*/
									"",
									[s._param("GroupCreator", A)]
								)
							})
						}),
						p.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: p.jsx(r("MWDialogText.react"), {
								color: "secondary",
								type: "body",
								children: s._(
									/*BTDS*/
									"",
									[s._plural(B, "number")]
								)
							})
						}),
						p.jsx("div", {
							className: "xwib8y2 x2b8uid",
							children: p.jsx(r("MWDialogText.react"), {
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
				p.jsx(r("FDSDialogSection.react"), {
					headline: s._(
						/*BTDS*/
						"",
						[s._param("GroupSize", w, [0])]
					),
					children: p.jsx(r("MWLSGroupMembershipMemberList.react"), {
						onClose: a,
						participantsAndContacts: L.map(function(e) {
							var t = e[0], n = e[1];
							return {
								contact: n,
								participant: t,
								type: o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact
							};
						}),
						showAdmodIndicator: M,
						showAdmodsOnly: !1,
						showHostsOnly: !1,
						showInvitedByViewerOnly: !1,
						thread: l
					})
				}),
				p.jsx("div", {
					className: "x1iorvi4 xjkvuk6",
					children: p.jsx("div", {
						className: "xwib8y2 x2b8uid",
						children: p.jsx(r("MWXTextPairing.react"), {
							body: s._(
								/*BTDS*/
								""
							),
							bodyColor: "secondary",
							headline: W,
							headlineColor: "secondary",
							level: 4,
							textAlign: "center"
						})
					})
				})
			]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
