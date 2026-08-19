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
	"react-compiler-runtime",
	"requireDeferred",
	"useMWXLazyDialog",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = d || (d = o("react")), p = d, _ = p.useCallback, f = p.useEffect, g = p.useMemo, h = p.useState, y = r("requireDeferred")("MessageRequestsLog").__setRef("MAWGroupInviteDialog.react");
	function C(t) {
		var n = o("react-compiler-runtime").c(117), a = t.onClose, l = t.thread, c = (e || (e = r("useReStore")))(), d = o("MWPActor.react").useActor(), p = h(!1), _ = p[0], g = p[1], C;
		n[0] !== c.tables.contacts || n[1] !== c.tables.participants || n[2] !== l.threadKey ? (C = function() {
			return o("ReQL").fromTableAscending(c.tables.participants).getKeyRange(l.threadKey).take(20).map(function(e) {
				var t = o("ReQLSuspense").firstExn(o("ReQL").fromTableAscending(c.tables.contacts).getKeyRange(e.contactId), i.id + ":89");
				return [e, t];
			});
		}, n[0] = c.tables.contacts, n[1] = c.tables.participants, n[2] = l.threadKey, n[3] = C) : C = n[3];
		var $;
		n[4] !== c || n[5] !== l.threadKey ? ($ = [c, l.threadKey], n[4] = c, n[5] = l.threadKey, n[6] = $) : $ = n[6];
		var P = o("ReQLSuspense").useArray(C, $, i.id + ":83"), N;
		if (n[7] !== d || n[8] !== P) {
			var M;
			n[10] !== d ? (M = function(t) {
				var e = t[1];
				return !(u || (u = o("I64"))).equal(e.id, d);
			}, n[10] = d, n[11] = M) : M = n[11], N = P.filter(M), n[7] = d, n[8] = P, n[9] = N;
		} else N = n[9];
		var w = N, A;
		n[12] !== c.tables.group_invites || n[13] !== l.threadKey ? (A = function() {
			return o("ReQL").fromTableDescending(c.tables.group_invites).getKeyRange(l.threadKey);
		}, n[12] = c.tables.group_invites, n[13] = l.threadKey, n[14] = A) : A = n[14];
		var F;
		n[15] !== c || n[16] !== l.threadKey ? (F = [c, l.threadKey], n[15] = c, n[16] = l.threadKey, n[17] = F) : F = n[17];
		var O = o("ReQLSuspense").useArray(A, F, i.id + ":105"), B;
		n[18] !== P ? (B = P.filter(x).map(D), n[18] = P, n[19] = B) : B = n[19];
		var W = B, q;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (q = r("JSResourceForInteraction")("MAWGroupInviteBlockedAccountsDialog.react").__setRef("MAWGroupInviteDialog.react"), n[20] = q) : q = n[20];
		var U = r("useMWXLazyDialog")(q), V = U[0], H;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (H = r("JSResourceForInteraction")("MAWGroupInviteDeleteConfirmationDialog.react").__setRef("MAWGroupInviteDialog.react"), n[21] = H) : H = n[21];
		var G = r("useMWXLazyDialog")(H), z = G[0], j = O[0], K;
		n[22] !== j.inviteExpirationTimestampMs ? (K = (u || (u = o("I64"))).lt(j.inviteExpirationTimestampMs, u.of_float(o("ServerTime").getMillis())), n[22] = j.inviteExpirationTimestampMs, n[23] = K) : K = n[23];
		var Q = K, X;
		n[24] !== c || n[25] !== j.inviteCode || n[26] !== j.inviteExpirationTimestampMs || n[27] !== j.inviteeId || n[28] !== j.inviterId || n[29] !== l ? (X = function() {
			if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(l.threadType)) {
				g(!0), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(c.tables, l.threadKey, "MAWGroupInviteDialog_acceptGroupInvite", function(e, t) {
					var n = o("WAJids").interpretAsGroupJid(t);
					n != null && r("promiseDone")(y.load().then(function(e) {
						e.logActionTapped(l, 1, (u || (u = o("I64"))).to_string(j.inviterId), o("WAJids").groupIdFromJid(n));
					}));
					var a;
					return r("qex")._("5865") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "acceptGroupInvite", {
						chatJid: t,
						inviteCode: j.inviteCode,
						invitedParticipantUserId: (u || (u = o("I64"))).to_string(j.inviteeId),
						inviteExpirationTs: u.to_int32(u.div(j.inviteExpirationTimestampMs, u.of_int32(1e3))),
						inviterUserId: u.to_string(j.inviterId)
					}), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "acceptGroupInvite.direct.success"
					}), a = Promise.resolve()) : (a = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").jobSerializers.acceptGroupInvite(t, (u || (u = o("I64"))).to_string(j.inviterId), u.to_string(j.inviteeId), j.inviteCode, u.to_int32(u.div(j.inviteExpirationTimestampMs, u.of_int32(1e3))), { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })), a.then(T, I)), a.then(function() {
						return c.runInTransaction(function(e) {
							return r("LSOptimisticAcceptMessageRequestStoredProcedure")(r("LSFactory")(e), { threadKey: l.threadKey });
						}, "readwrite", void 0, void 0, i.id + ":217");
					});
				})), g(!1);
				return;
			}
		}, n[24] = c, n[25] = j.inviteCode, n[26] = j.inviteExpirationTimestampMs, n[27] = j.inviteeId, n[28] = j.inviterId, n[29] = l, n[30] = X) : X = n[30];
		var Y = X, J;
		n[31] !== l.threadType ? (J = r("mwCMIsAnyCMThread")(l.threadType), n[31] = l.threadType, n[32] = J) : J = n[32];
		var Z = !J, ee = w.length, te = w.filter(k).map(E)[0], ne;
		n[33] !== w ? (ne = function(t) {
			return w.filter(function(e) {
				var n = e[1];
				return (u || (u = o("I64"))).equal(t.inviterId, n.id);
			}).map(L)[0];
		}, n[33] = w, n[34] = ne) : ne = n[34];
		var re = O.map(ne), oe = re.length, ae = w.filter(R).length, ie = oe === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter", re[0])]
		) : oe === 2 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", re[0]), s._param("GroupInviter2", re[1])]
		) : s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", re[0]), s._param("GroupInviter2", re[1])]
		), le;
		n[35] !== c.tables || n[36] !== j.inviterId || n[37] !== l ? (le = function() {
			r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(c.tables, l.threadKey, "MAWGroupInviteDialog_msgRequest", async function(e, t) {
				var n = o("WAJids").interpretAsGroupJid(t);
				if (n != null) {
					var r = await y.load();
					r.logMessageRequestInfoShown(l, (u || (u = o("I64"))).to_string(j.inviterId), o("WAJids").groupIdFromJid(n));
				}
			}));
		}, n[35] = c.tables, n[36] = j.inviterId, n[37] = l, n[38] = le) : le = n[38];
		var se;
		n[39] !== c || n[40] !== j.inviterId || n[41] !== l ? (se = [
			c,
			j.inviterId,
			l
		], n[39] = c, n[40] = j.inviterId, n[41] = l, n[42] = se) : se = n[42], f(le, se);
		var ue = r("MWXDialog.react"), ce = _ || Q, de;
		n[43] === Symbol.for("react.memo_cache_sentinel") ? (de = s._(
			/*BTDS*/
			""
		), n[43] = de) : de = n[43];
		var me;
		n[44] !== Y || n[45] !== W || n[46] !== j || n[47] !== a || n[48] !== V || n[49] !== l ? (me = function() {
			return W.length > 0 ? V({
				blockedContacts: W,
				closeParentDialogCallback: function() {
					return a();
				},
				inviter: j,
				thread: l
			}, S) : (Y(), a());
		}, n[44] = Y, n[45] = W, n[46] = j, n[47] = a, n[48] = V, n[49] = l, n[50] = me) : me = n[50];
		var pe;
		n[51] !== ce || n[52] !== me ? (pe = {
			disabled: ce,
			label: de,
			onPress: me,
			testid: "maw-group-invite-join-button",
			type: "primary"
		}, n[51] = ce, n[52] = me, n[53] = pe) : pe = n[53];
		var _e;
		n[54] === Symbol.for("react.memo_cache_sentinel") ? (_e = s._(
			/*BTDS*/
			""
		), n[54] = _e) : _e = n[54];
		var fe;
		n[55] !== c.tables || n[56] !== j || n[57] !== a || n[58] !== z || n[59] !== l ? (fe = {
			label: _e,
			onPress: function() {
				return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(c.tables, l.threadKey, "MAWGroupInviteDialog_deleteButton", async function(e, t) {
					var n = o("WAJids").interpretAsGroupJid(t);
					if (n != null) {
						var r = await y.load();
						r.logActionTapped(l, 8, (u || (u = o("I64"))).to_string(j.inviterId), o("WAJids").groupIdFromJid(n));
					}
				})), z({
					closeParentDialogCallback: function() {
						return a();
					},
					inviter: j,
					thread: l
				}, v);
			},
			testid: "maw-group-invite-delete-button"
		}, n[55] = c.tables, n[56] = j, n[57] = a, n[58] = z, n[59] = l, n[60] = fe) : fe = n[60];
		var ge;
		n[61] !== pe || n[62] !== fe ? (ge = m.jsx(r("MWXDialogFooter.react"), {
			callToActionGroupDirection: "backward",
			primaryCallToAction: pe,
			secondaryCallToAction: fe
		}), n[61] = pe, n[62] = fe, n[63] = ge) : ge = n[63];
		var he;
		n[64] === Symbol.for("react.memo_cache_sentinel") ? (he = s._(
			/*BTDS*/
			""
		), n[64] = he) : he = n[64];
		var ye;
		n[65] !== a ? (ye = m.jsx(r("MWXDialogHeader.react"), {
			onClose: a,
			title: he,
			withCloseButton: !0
		}), n[65] = a, n[66] = ye) : ye = n[66];
		var Ce = "medium", be, ve;
		n[67] === Symbol.for("react.memo_cache_sentinel") ? (be = { className: "xyamay9 x1l90r2v" }, ve = { className: "xwib8y2 x2b8uid" }, n[67] = be, n[68] = ve) : (be = n[67], ve = n[68]);
		var Se;
		n[69] !== l.threadKey ? (Se = m.jsx("div", babelHelpers.extends({}, ve, { children: m.jsx(r("MWThreadPicture.react"), {
			badgeSize: 10,
			photoSize: 60,
			threadKey: l.threadKey
		}) })), n[69] = l.threadKey, n[70] = Se) : Se = n[70];
		var Re;
		n[71] === Symbol.for("react.memo_cache_sentinel") ? (Re = { className: "x1l90r2v x2b8uid" }, n[71] = Re) : Re = n[71];
		var Le;
		n[72] !== l ? (Le = m.jsx("div", babelHelpers.extends({}, Re, { children: m.jsx(r("MWDialogText.react"), {
			color: "primary",
			isSemanticHeading: !0,
			numberOfLines: 1,
			type: "headlineEmphasized",
			children: m.jsx(r("LSThreadTitle.react"), { thread: l })
		}) })), n[72] = l, n[73] = Le) : Le = n[73];
		var Ee;
		n[74] === Symbol.for("react.memo_cache_sentinel") ? (Ee = { className: "xwib8y2 x2b8uid" }, n[74] = Ee) : Ee = n[74];
		var ke = s._(
			/*BTDS*/
			"",
			[s._param("GroupCreator", te)]
		), Ie;
		n[75] !== ke ? (Ie = m.jsx("div", babelHelpers.extends({}, Ee, { children: m.jsx(r("MWDialogText.react"), {
			color: "primary",
			type: "body",
			children: ke
		}) })), n[75] = ke, n[76] = Ie) : Ie = n[76];
		var Te;
		n[77] === Symbol.for("react.memo_cache_sentinel") ? (Te = { className: "xwib8y2 x2b8uid" }, n[77] = Te) : Te = n[77];
		var De = r("MWDialogText.react"), xe = "secondary", $e = "body", Pe = s._(
			/*BTDS*/
			"",
			[s._plural(ae, "number")]
		), Ne;
		n[78] !== De || n[79] !== Pe ? (Ne = m.jsx(De, {
			color: xe,
			type: $e,
			children: Pe
		}), n[78] = De, n[79] = Pe, n[80] = Ne) : Ne = n[80];
		var Me;
		n[81] !== Te || n[82] !== Ne ? (Me = m.jsx("div", babelHelpers.extends({}, Te, { children: Ne })), n[81] = Te, n[82] = Ne, n[83] = Me) : Me = n[83];
		var we;
		n[84] === Symbol.for("react.memo_cache_sentinel") ? (we = { className: "xwib8y2 x2b8uid" }, n[84] = we) : we = n[84];
		var Ae;
		n[85] === Symbol.for("react.memo_cache_sentinel") ? (Ae = m.jsx("div", babelHelpers.extends({}, we, { children: m.jsx(r("MWDialogText.react"), {
			color: "secondary",
			type: "body",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), n[85] = Ae) : Ae = n[85];
		var Fe;
		n[86] !== be || n[87] !== Se || n[88] !== Le || n[89] !== Ie || n[90] !== Me ? (Fe = m.jsxs("div", babelHelpers.extends({}, be, { children: [
			Se,
			Le,
			Ie,
			Me,
			Ae
		] })), n[86] = be, n[87] = Se, n[88] = Le, n[89] = Ie, n[90] = Me, n[91] = Fe) : Fe = n[91];
		var Oe;
		n[92] !== ee ? (Oe = s._(
			/*BTDS*/
			"",
			[s._param("GroupSize", ee, [0])]
		), n[92] = ee, n[93] = Oe) : Oe = n[93];
		var Be;
		n[94] !== w ? (Be = w.map(b), n[94] = w, n[95] = Be) : Be = n[95];
		var We;
		n[96] !== a || n[97] !== Z || n[98] !== Be || n[99] !== l ? (We = m.jsx(r("MWLSGroupMembershipMemberList.react"), {
			onClose: a,
			participantsAndContacts: Be,
			showAdmodIndicator: Z,
			showAdmodsOnly: !1,
			showHostsOnly: !1,
			showInvitedByViewerOnly: !1,
			thread: l
		}), n[96] = a, n[97] = Z, n[98] = Be, n[99] = l, n[100] = We) : We = n[100];
		var qe;
		n[101] !== Oe || n[102] !== We ? (qe = m.jsx(r("FDSDialogSection.react"), {
			headline: Oe,
			children: We
		}), n[101] = Oe, n[102] = We, n[103] = qe) : qe = n[103];
		var Ue, Ve;
		n[104] === Symbol.for("react.memo_cache_sentinel") ? (Ue = { className: "x1iorvi4 xjkvuk6" }, Ve = { className: "xwib8y2 x2b8uid" }, n[104] = Ue, n[105] = Ve) : (Ue = n[104], Ve = n[105]);
		var He;
		n[106] === Symbol.for("react.memo_cache_sentinel") ? (He = s._(
			/*BTDS*/
			""
		), n[106] = He) : He = n[106];
		var Ge;
		n[107] !== ie ? (Ge = m.jsx("div", babelHelpers.extends({}, Ue, { children: m.jsx("div", babelHelpers.extends({}, Ve, { children: m.jsx(r("MWXTextPairing.react"), {
			body: He,
			bodyColor: "secondary",
			headline: ie,
			headlineColor: "secondary",
			level: 4,
			textAlign: "center"
		}) })) })), n[107] = ie, n[108] = Ge) : Ge = n[108];
		var ze;
		return n[109] !== ue || n[110] !== a || n[111] !== ge || n[112] !== ye || n[113] !== Fe || n[114] !== qe || n[115] !== Ge ? (ze = m.jsxs(ue, {
			footer: ge,
			header: ye,
			onClose: a,
			size: Ce,
			children: [
				Fe,
				qe,
				Ge
			]
		}), n[109] = ue, n[110] = a, n[111] = ge, n[112] = ye, n[113] = Fe, n[114] = qe, n[115] = Ge, n[116] = ze) : ze = n[116], ze;
	}
	function b(e) {
		var t = e[0], n = e[1];
		return {
			contact: n,
			participant: t,
			type: o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact
		};
	}
	function v() {}
	function S() {}
	function R(e) {
		var t = e[1];
		return (u || (u = o("I64"))).lt(t.contactViewerRelationship, u.of_string("2"));
	}
	function L(e) {
		var t = e[1];
		return t.name;
	}
	function E(e) {
		var t = e[1];
		return t.name;
	}
	function k(e) {
		var t = e[0], n = t.isSuperAdmin, r = t.subscribeSource;
		return n != null && r != null ? n : !1;
	}
	function I() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "acceptGroupInvite.MAWJobManager.failure"
		});
	}
	function T() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "acceptGroupInvite.MAWJobManager.success"
		});
	}
	function D(e) {
		var t = e[1];
		return t;
	}
	function x(e) {
		var t = e[1];
		return !(u || (u = o("I64"))).equal(t.blockedByViewerStatus, (c || (c = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED));
	}
	l.default = C;
}), 226);
