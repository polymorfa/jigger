__d("MAWGroupInviteBlockedAccountsDialog.react", [
	"fbt",
	"CurrentEnvironment",
	"FDSFacepilePhoto.react",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWBridgeFireAndForget",
	"MAWJobDefinitions",
	"MAWMiActOnActThreadReady",
	"MAWODSProxy",
	"MAWTimedJob",
	"MAWUpdateLSThreadCapabilities",
	"MWDialogText.react",
	"MWFacepileBadge.react",
	"MWLSThreadDisplayContext",
	"MWXCardedDialog_DEPRECATED.react",
	"MWXLink.react",
	"MessageRequestsLog",
	"Promise",
	"WAJids",
	"WAJobOrchestratorTypes",
	"WAOdsEnums",
	"XCometSettingsControllerRouteBuilder",
	"getLSMediaContactProfilePictureUrl",
	"promiseDone",
	"qex",
	"react",
	"translatedServerString",
	"useMAWDeleteSecureThreadFromThreadList",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useState;
	function g(t) {
		var a = t.blockedContacts, l = t.closeParentDialogCallback, d = t.inviter, p = t.onClose, g = t.thread, h = (u || (u = r("useReStore")))(), y = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), C = f(!1), b = C[0], v = C[1], S = y !== "Inbox", R = a.length, L = a.map(function(e) {
			var t = e.firstName;
			return t != null ? t : e.name;
		}), E = R === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("BlockedUser", L[0])]
		) : R === 2 ? s._(
			/*BTDS*/
			"",
			[s._param("BlockedUser1", L[0]), s._param("BlockedUser2", L[1])]
		) : s._(
			/*BTDS*/
			"",
			[s._param("BlockedUser1", L[0]), s._param("BlockedUser2", L[1])]
		), k = _(function() {
			if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(g.threadType)) {
				v(!0), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(h.tables, g.threadKey, "MAWGroupInviteBlockedAccountsDialog.react", function(t, a) {
					o("MessageRequestsLog").logActionTapped(g, 1, (c || (c = o("I64"))).to_string(d.inviterId), o("WAJids").groupIdFromJid(o("WAJids").unsafeCoerceToGroupJid(a)));
					var l;
					return r("qex")._("5865") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "acceptGroupInvite", {
						chatJid: a,
						inviteCode: d.inviteCode,
						invitedParticipantUserId: (c || (c = o("I64"))).to_string(d.inviteeId),
						inviteExpirationTs: c.to_int32(c.div(d.inviteExpirationTimestampMs, c.of_int32(1e3))),
						inviterUserId: c.to_string(d.inviterId)
					}), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "acceptGroupInvite.direct.success"
					}), l = (e || (e = n("Promise"))).resolve()) : (l = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").jobSerializers.acceptGroupInvite(a, (c || (c = o("I64"))).to_string(d.inviterId), c.to_string(d.inviteeId), d.inviteCode, c.to_int32(c.div(d.inviteExpirationTimestampMs, c.of_int32(1e3))), { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })), l.then(function() {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "acceptGroupInvite.MAWJobManager.success"
						});
					}, function() {
						o("MAWODSProxy").odsBumpEntityKey({
							entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
							key: "acceptGroupInvite.MAWJobManager.failure"
						});
					})), l.then(function() {
						return h.runInTransaction(function(e) {
							return o("MAWUpdateLSThreadCapabilities").clearGroupInviteTxn(e, g.threadKey);
						}, "readwrite", void 0, void 0, i.id + ":175");
					});
				})), v(!1);
				return;
			}
		}, [
			h,
			g,
			d
		]), I = r("useMAWDeleteSecureThreadFromThreadList")(g, !S);
		return m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			onClose: p,
			primaryCallToAction: {
				disabled: b,
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					k(), l(), p();
				},
				type: "primary"
			},
			secondaryCallToAction: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: function() {
					r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(h.tables, g.threadKey, "MAWGroupInviteBlockedAccountsDialog.react", function(t, r) {
						return o("MessageRequestsLog").logActionConfirmed(g, 8, (c || (c = o("I64"))).to_string(d.inviterId), o("WAJids").groupIdFromJid(o("WAJids").unsafeCoerceToGroupJid(r))), (e || (e = n("Promise"))).resolve();
					})), I(), l(), p();
				}
			},
			size: "small",
			title: s._(
				/*BTDS*/
				"",
				[s._plural(R, "number")]
			),
			withCloseButton: !0,
			children: m.jsxs("div", {
				className: "x78zum5 x1q0g3np xyamay9 xv54qhq x1l90r2v xf7dkkf",
				children: [m.jsx("div", {
					className: "x1ys307a",
					children: m.jsx(r("FDSFacepilePhoto.react"), {
						badge: m.jsx(r("MWFacepileBadge.react"), {
							size: 10,
							threadKey: g.threadKey
						}),
						size: 60,
						sources: a.map(function(e) {
							return {
								alt: r("translatedServerString")(e.name),
								disabled: !1,
								source: r("getLSMediaContactProfilePictureUrl")(e)
							};
						}),
						totalItems: a.length
					})
				}), m.jsxs(r("MWDialogText.react"), {
					color: "secondary",
					type: "body",
					children: [
						E,
						" ",
						m.jsx(r("MWXLink.react"), {
							href: (r("CurrentEnvironment").facebookdotcom ? "" : "https://www.facebook.com") + r("XCometSettingsControllerRouteBuilder").buildURL({ tab: "blocking" }),
							target: "_blank",
							children: m.jsx(r("MWDialogText.react"), {
								color: "blueLink",
								type: "bodyLink",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					]
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
