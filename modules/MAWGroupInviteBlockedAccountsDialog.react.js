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
	"react-compiler-runtime",
	"translatedServerString",
	"useMAWDeleteSecureThreadFromThreadList",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useState;
	function g(t) {
		var a = o("react-compiler-runtime").c(48), l = t.blockedContacts, d = t.closeParentDialogCallback, p = t.inviter, _ = t.onClose, g = t.thread, v = (u || (u = r("useReStore")))(), S = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), R = f(!1), L = R[0], E = R[1], k = S !== "Inbox", I = l.length, T;
		if (a[0] !== l || a[1] !== I) {
			var D = l.map(b);
			T = I === 1 ? s._(
				/*BTDS*/
				"",
				[s._param("BlockedUser", D[0])]
			) : I === 2 ? s._(
				/*BTDS*/
				"",
				[s._param("BlockedUser1", D[0]), s._param("BlockedUser2", D[1])]
			) : s._(
				/*BTDS*/
				"",
				[s._param("BlockedUser1", D[0]), s._param("BlockedUser2", D[1])]
			), a[0] = l, a[1] = I, a[2] = T;
		} else T = a[2];
		var x = T, $;
		a[3] !== v || a[4] !== p || a[5] !== g ? ($ = function() {
			if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(g.threadType)) {
				E(!0), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(v.tables, g.threadKey, "MAWGroupInviteBlockedAccountsDialog.react", function(t, a) {
					o("MessageRequestsLog").logActionTapped(g, 1, (c || (c = o("I64"))).to_string(p.inviterId), o("WAJids").groupIdFromJid(o("WAJids").unsafeCoerceToGroupJid(a)));
					var l;
					return r("qex")._("5865") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "acceptGroupInvite", {
						chatJid: a,
						inviteCode: p.inviteCode,
						invitedParticipantUserId: (c || (c = o("I64"))).to_string(p.inviteeId),
						inviteExpirationTs: c.to_int32(c.div(p.inviteExpirationTimestampMs, c.of_int32(1e3))),
						inviterUserId: c.to_string(p.inviterId)
					}), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "acceptGroupInvite.direct.success"
					}), l = (e || (e = n("Promise"))).resolve()) : (l = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").jobSerializers.acceptGroupInvite(a, (c || (c = o("I64"))).to_string(p.inviterId), c.to_string(p.inviteeId), p.inviteCode, c.to_int32(c.div(p.inviteExpirationTimestampMs, c.of_int32(1e3))), { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })), l.then(C, y)), l.then(function() {
						return v.runInTransaction(function(e) {
							return o("MAWUpdateLSThreadCapabilities").clearGroupInviteTxn(e, g.threadKey);
						}, "readwrite", void 0, void 0, i.id + ":175");
					});
				})), E(!1);
				return;
			}
		}, a[3] = v, a[4] = p, a[5] = g, a[6] = $) : $ = a[6];
		var P = $, N = r("useMAWDeleteSecureThreadFromThreadList")(g, !k), M;
		a[7] === Symbol.for("react.memo_cache_sentinel") ? (M = s._(
			/*BTDS*/
			""
		), a[7] = M) : M = a[7];
		var w;
		a[8] !== P || a[9] !== d || a[10] !== _ ? (w = function() {
			P(), d(), _();
		}, a[8] = P, a[9] = d, a[10] = _, a[11] = w) : w = a[11];
		var A;
		a[12] !== L || a[13] !== w ? (A = {
			disabled: L,
			label: M,
			onPress: w,
			type: "primary"
		}, a[12] = L, a[13] = w, a[14] = A) : A = a[14];
		var F;
		a[15] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
			/*BTDS*/
			""
		), a[15] = F) : F = a[15];
		var O;
		a[16] !== d || a[17] !== v || a[18] !== N || a[19] !== p || a[20] !== _ || a[21] !== g ? (O = {
			label: F,
			onPress: function() {
				r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(v.tables, g.threadKey, "MAWGroupInviteBlockedAccountsDialog.react", function(t, r) {
					return o("MessageRequestsLog").logActionConfirmed(g, 8, (c || (c = o("I64"))).to_string(p.inviterId), o("WAJids").groupIdFromJid(o("WAJids").unsafeCoerceToGroupJid(r))), (e || (e = n("Promise"))).resolve();
				})), N(), d(), _();
			}
		}, a[16] = d, a[17] = v, a[18] = N, a[19] = p, a[20] = _, a[21] = g, a[22] = O) : O = a[22];
		var B;
		a[23] !== I ? (B = s._(
			/*BTDS*/
			"",
			[s._plural(I, "number")]
		), a[23] = I, a[24] = B) : B = a[24];
		var W, q;
		a[25] === Symbol.for("react.memo_cache_sentinel") ? (q = { className: "x78zum5 x1q0g3np xyamay9 xv54qhq x1l90r2v xf7dkkf" }, W = { className: "x1ys307a" }, a[25] = W, a[26] = q) : (W = a[25], q = a[26]);
		var U;
		a[27] !== g.threadKey ? (U = m.jsx(r("MWFacepileBadge.react"), {
			size: 10,
			threadKey: g.threadKey
		}), a[27] = g.threadKey, a[28] = U) : U = a[28];
		var V;
		a[29] !== l ? (V = l.map(h), a[29] = l, a[30] = V) : V = a[30];
		var H;
		a[31] !== l.length || a[32] !== U || a[33] !== V ? (H = m.jsx("div", babelHelpers.extends({}, W, { children: m.jsx(r("FDSFacepilePhoto.react"), {
			badge: U,
			size: 60,
			sources: V,
			totalItems: l.length
		}) })), a[31] = l.length, a[32] = U, a[33] = V, a[34] = H) : H = a[34];
		var G;
		a[35] === Symbol.for("react.memo_cache_sentinel") ? (G = r("XCometSettingsControllerRouteBuilder").buildURL({ tab: "blocking" }), a[35] = G) : G = a[35];
		var z;
		a[36] === Symbol.for("react.memo_cache_sentinel") ? (z = m.jsx(r("MWXLink.react"), {
			href: (r("CurrentEnvironment").facebookdotcom ? "" : "https://www.facebook.com") + G,
			target: "_blank",
			children: m.jsx(r("MWDialogText.react"), {
				color: "blueLink",
				type: "bodyLink",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), a[36] = z) : z = a[36];
		var j;
		a[37] !== x ? (j = m.jsxs(r("MWDialogText.react"), {
			color: "secondary",
			type: "body",
			children: [
				x,
				" ",
				z
			]
		}), a[37] = x, a[38] = j) : j = a[38];
		var K;
		a[39] !== H || a[40] !== j ? (K = m.jsxs("div", babelHelpers.extends({}, q, { children: [H, j] })), a[39] = H, a[40] = j, a[41] = K) : K = a[41];
		var Q;
		return a[42] !== _ || a[43] !== K || a[44] !== A || a[45] !== O || a[46] !== B ? (Q = m.jsx(r("MWXCardedDialog_DEPRECATED.react"), {
			onClose: _,
			primaryCallToAction: A,
			secondaryCallToAction: O,
			size: "small",
			title: B,
			withCloseButton: !0,
			children: K
		}), a[42] = _, a[43] = K, a[44] = A, a[45] = O, a[46] = B, a[47] = Q) : Q = a[47], Q;
	}
	function h(e) {
		return {
			alt: r("translatedServerString")(e.name),
			disabled: !1,
			source: r("getLSMediaContactProfilePictureUrl")(e)
		};
	}
	function y() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "acceptGroupInvite.MAWJobManager.failure"
		});
	}
	function C() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "acceptGroupInvite.MAWJobManager.success"
		});
	}
	function b(e) {
		var t = e.firstName;
		return t != null ? t : e.name;
	}
	l.default = g;
}), 226);
