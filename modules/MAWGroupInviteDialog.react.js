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
	"react-compiler-runtime",
	"requireDeferred",
	"useMWXLazyDialog",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useMemo, y = _.useState, C = r("requireDeferred")("MessageRequestsLog").__setRef("MAWGroupInviteDialog.react");
	function b(t) {
		var a = o("react-compiler-runtime").c(117), l = t.onClose, c = t.thread, m = (u || (u = r("useReStore")))(), _ = o("MWPActor.react").useActor(), f = y(!1), h = f[0], b = f[1], P;
		a[0] !== m.tables.contacts || a[1] !== m.tables.participants || a[2] !== c.threadKey ? (P = function() {
			return o("ReQL").fromTableAscending(m.tables.participants).getKeyRange(c.threadKey).take(20).map(function(e) {
				var t = o("ReQLSuspense").firstExn(o("ReQL").fromTableAscending(m.tables.contacts).getKeyRange(e.contactId), i.id + ":89");
				return [e, t];
			});
		}, a[0] = m.tables.contacts, a[1] = m.tables.participants, a[2] = c.threadKey, a[3] = P) : P = a[3];
		var N;
		a[4] !== m || a[5] !== c.threadKey ? (N = [m, c.threadKey], a[4] = m, a[5] = c.threadKey, a[6] = N) : N = a[6];
		var M = o("ReQLSuspense").useArray(P, N, i.id + ":83"), w;
		if (a[7] !== _ || a[8] !== M) {
			var A;
			a[10] !== _ ? (A = function(t) {
				var e = t[1];
				return !(d || (d = o("I64"))).equal(e.id, _);
			}, a[10] = _, a[11] = A) : A = a[11], w = M.filter(A), a[7] = _, a[8] = M, a[9] = w;
		} else w = a[9];
		var F = w, O;
		a[12] !== m.tables.group_invites || a[13] !== c.threadKey ? (O = function() {
			return o("ReQL").fromTableDescending(m.tables.group_invites).getKeyRange(c.threadKey);
		}, a[12] = m.tables.group_invites, a[13] = c.threadKey, a[14] = O) : O = a[14];
		var B;
		a[15] !== m || a[16] !== c.threadKey ? (B = [m, c.threadKey], a[15] = m, a[16] = c.threadKey, a[17] = B) : B = a[17];
		var W = o("ReQLSuspense").useArray(O, B, i.id + ":105"), q;
		a[18] !== M ? (q = M.filter($).map(x), a[18] = M, a[19] = q) : q = a[19];
		var U = q, V;
		a[20] === Symbol.for("react.memo_cache_sentinel") ? (V = r("JSResourceForInteraction")("MAWGroupInviteBlockedAccountsDialog.react").__setRef("MAWGroupInviteDialog.react"), a[20] = V) : V = a[20];
		var H = r("useMWXLazyDialog")(V), G = H[0], z;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (z = r("JSResourceForInteraction")("MAWGroupInviteDeleteConfirmationDialog.react").__setRef("MAWGroupInviteDialog.react"), a[21] = z) : z = a[21];
		var j = r("useMWXLazyDialog")(z), K = j[0], Q = W[0], X;
		a[22] !== Q.inviteExpirationTimestampMs ? (X = (d || (d = o("I64"))).lt(Q.inviteExpirationTimestampMs, d.of_float(o("ServerTime").getMillis())), a[22] = Q.inviteExpirationTimestampMs, a[23] = X) : X = a[23];
		var Y = X, J;
		a[24] !== m || a[25] !== Q.inviteCode || a[26] !== Q.inviteExpirationTimestampMs || a[27] !== Q.inviteeId || a[28] !== Q.inviterId || a[29] !== c ? (J = function() {
			if (o("LSMessagingThreadTypeUtil").isArmadilloSecure(c.threadType)) {
				b(!0), r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, c.threadKey, "MAWGroupInviteDialog_acceptGroupInvite", function(t, a) {
					var l = o("WAJids").interpretAsGroupJid(a);
					l != null && r("promiseDone")(C.load().then(function(e) {
						e.logActionTapped(c, 1, (d || (d = o("I64"))).to_string(Q.inviterId), o("WAJids").groupIdFromJid(l));
					}));
					var s;
					return r("qex")._("5865") === !0 ? (o("MAWBridgeFireAndForget").fireAndForget("backend", "acceptGroupInvite", {
						chatJid: a,
						inviteCode: Q.inviteCode,
						invitedParticipantUserId: (d || (d = o("I64"))).to_string(Q.inviteeId),
						inviteExpirationTs: d.to_int32(d.div(Q.inviteExpirationTimestampMs, d.of_int32(1e3))),
						inviterUserId: d.to_string(Q.inviterId)
					}), o("MAWODSProxy").odsBumpEntityKey({
						entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
						key: "acceptGroupInvite.direct.success"
					}), s = (e || (e = n("Promise"))).resolve()) : (s = o("MAWTimedJob").TimedUIJobStarters.waitUntilPersisted(o("MAWJobDefinitions").jobSerializers.acceptGroupInvite(a, (d || (d = o("I64"))).to_string(Q.inviterId), d.to_string(Q.inviteeId), Q.inviteCode, d.to_int32(d.div(Q.inviteExpirationTimestampMs, d.of_int32(1e3))), { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION })), s.then(D, T)), s.then(function() {
						return m.runInTransaction(function(e) {
							return r("LSOptimisticAcceptMessageRequestStoredProcedure")(r("LSFactory")(e), { threadKey: c.threadKey });
						}, "readwrite", void 0, void 0, i.id + ":217");
					});
				})), b(!1);
				return;
			}
		}, a[24] = m, a[25] = Q.inviteCode, a[26] = Q.inviteExpirationTimestampMs, a[27] = Q.inviteeId, a[28] = Q.inviterId, a[29] = c, a[30] = J) : J = a[30];
		var Z = J, ee;
		a[31] !== c.threadType ? (ee = r("mwCMIsAnyCMThread")(c.threadType), a[31] = c.threadType, a[32] = ee) : ee = a[32];
		var te = !ee, ne = F.length, re = F.filter(I).map(k)[0], oe;
		a[33] !== F ? (oe = function(t) {
			return F.filter(function(e) {
				var n = e[1];
				return (d || (d = o("I64"))).equal(t.inviterId, n.id);
			}).map(E)[0];
		}, a[33] = F, a[34] = oe) : oe = a[34];
		var ae = W.map(oe), ie = ae.length, le = F.filter(L).length, se = ie === 1 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter", ae[0])]
		) : ie === 2 ? s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", ae[0]), s._param("GroupInviter2", ae[1])]
		) : s._(
			/*BTDS*/
			"",
			[s._param("GroupInviter1", ae[0]), s._param("GroupInviter2", ae[1])]
		), ue;
		a[35] !== m.tables || a[36] !== Q.inviterId || a[37] !== c ? (ue = function() {
			r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, c.threadKey, "MAWGroupInviteDialog_msgRequest", (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					var n = o("WAJids").interpretAsGroupJid(t);
					if (n != null) {
						var r = yield C.load();
						r.logMessageRequestInfoShown(c, (d || (d = o("I64"))).to_string(Q.inviterId), o("WAJids").groupIdFromJid(n));
					}
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})()));
		}, a[35] = m.tables, a[36] = Q.inviterId, a[37] = c, a[38] = ue) : ue = a[38];
		var ce;
		a[39] !== m || a[40] !== Q.inviterId || a[41] !== c ? (ce = [
			m,
			Q.inviterId,
			c
		], a[39] = m, a[40] = Q.inviterId, a[41] = c, a[42] = ce) : ce = a[42], g(ue, ce);
		var de = r("MWXDialog.react"), me = h || Y, pe;
		a[43] === Symbol.for("react.memo_cache_sentinel") ? (pe = s._(
			/*BTDS*/
			""
		), a[43] = pe) : pe = a[43];
		var _e;
		a[44] !== Z || a[45] !== U || a[46] !== Q || a[47] !== l || a[48] !== G || a[49] !== c ? (_e = function() {
			return U.length > 0 ? G({
				blockedContacts: U,
				closeParentDialogCallback: function() {
					return l();
				},
				inviter: Q,
				thread: c
			}, R) : (Z(), l());
		}, a[44] = Z, a[45] = U, a[46] = Q, a[47] = l, a[48] = G, a[49] = c, a[50] = _e) : _e = a[50];
		var fe;
		a[51] !== me || a[52] !== _e ? (fe = {
			disabled: me,
			label: pe,
			onPress: _e,
			testid: "maw-group-invite-join-button",
			type: "primary"
		}, a[51] = me, a[52] = _e, a[53] = fe) : fe = a[53];
		var ge;
		a[54] === Symbol.for("react.memo_cache_sentinel") ? (ge = s._(
			/*BTDS*/
			""
		), a[54] = ge) : ge = a[54];
		var he;
		a[55] !== m.tables || a[56] !== Q || a[57] !== l || a[58] !== K || a[59] !== c ? (he = {
			label: ge,
			onPress: function() {
				return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, c.threadKey, "MAWGroupInviteDialog_deleteButton", (function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
						var n = o("WAJids").interpretAsGroupJid(t);
						if (n != null) {
							var r = yield C.load();
							r.logActionTapped(c, 8, (d || (d = o("I64"))).to_string(Q.inviterId), o("WAJids").groupIdFromJid(n));
						}
					});
					return function(t, n) {
						return e.apply(this, arguments);
					};
				})())), K({
					closeParentDialogCallback: function() {
						return l();
					},
					inviter: Q,
					thread: c
				}, S);
			},
			testid: "maw-group-invite-delete-button"
		}, a[55] = m.tables, a[56] = Q, a[57] = l, a[58] = K, a[59] = c, a[60] = he) : he = a[60];
		var ye;
		a[61] !== fe || a[62] !== he ? (ye = p.jsx(r("MWXDialogFooter.react"), {
			callToActionGroupDirection: "backward",
			primaryCallToAction: fe,
			secondaryCallToAction: he
		}), a[61] = fe, a[62] = he, a[63] = ye) : ye = a[63];
		var Ce;
		a[64] === Symbol.for("react.memo_cache_sentinel") ? (Ce = s._(
			/*BTDS*/
			""
		), a[64] = Ce) : Ce = a[64];
		var be;
		a[65] !== l ? (be = p.jsx(r("MWXDialogHeader.react"), {
			onClose: l,
			title: Ce,
			withCloseButton: !0
		}), a[65] = l, a[66] = be) : be = a[66];
		var ve = "medium", Se, Re;
		a[67] === Symbol.for("react.memo_cache_sentinel") ? (Se = { className: "xyamay9 x1l90r2v" }, Re = { className: "xwib8y2 x2b8uid" }, a[67] = Se, a[68] = Re) : (Se = a[67], Re = a[68]);
		var Le;
		a[69] !== c.threadKey ? (Le = p.jsx("div", babelHelpers.extends({}, Re, { children: p.jsx(r("MWThreadPicture.react"), {
			badgeSize: 10,
			photoSize: 60,
			threadKey: c.threadKey
		}) })), a[69] = c.threadKey, a[70] = Le) : Le = a[70];
		var Ee;
		a[71] === Symbol.for("react.memo_cache_sentinel") ? (Ee = { className: "x1l90r2v x2b8uid" }, a[71] = Ee) : Ee = a[71];
		var ke;
		a[72] !== c ? (ke = p.jsx("div", babelHelpers.extends({}, Ee, { children: p.jsx(r("MWDialogText.react"), {
			color: "primary",
			isSemanticHeading: !0,
			numberOfLines: 1,
			type: "headlineEmphasized",
			children: p.jsx(r("LSThreadTitle.react"), { thread: c })
		}) })), a[72] = c, a[73] = ke) : ke = a[73];
		var Ie;
		a[74] === Symbol.for("react.memo_cache_sentinel") ? (Ie = { className: "xwib8y2 x2b8uid" }, a[74] = Ie) : Ie = a[74];
		var Te = s._(
			/*BTDS*/
			"",
			[s._param("GroupCreator", re)]
		), De;
		a[75] !== Te ? (De = p.jsx("div", babelHelpers.extends({}, Ie, { children: p.jsx(r("MWDialogText.react"), {
			color: "primary",
			type: "body",
			children: Te
		}) })), a[75] = Te, a[76] = De) : De = a[76];
		var xe;
		a[77] === Symbol.for("react.memo_cache_sentinel") ? (xe = { className: "xwib8y2 x2b8uid" }, a[77] = xe) : xe = a[77];
		var $e = r("MWDialogText.react"), Pe = "secondary", Ne = "body", Me = s._(
			/*BTDS*/
			"",
			[s._plural(le, "number")]
		), we;
		a[78] !== $e || a[79] !== Me ? (we = p.jsx($e, {
			color: Pe,
			type: Ne,
			children: Me
		}), a[78] = $e, a[79] = Me, a[80] = we) : we = a[80];
		var Ae;
		a[81] !== xe || a[82] !== we ? (Ae = p.jsx("div", babelHelpers.extends({}, xe, { children: we })), a[81] = xe, a[82] = we, a[83] = Ae) : Ae = a[83];
		var Fe;
		a[84] === Symbol.for("react.memo_cache_sentinel") ? (Fe = { className: "xwib8y2 x2b8uid" }, a[84] = Fe) : Fe = a[84];
		var Oe;
		a[85] === Symbol.for("react.memo_cache_sentinel") ? (Oe = p.jsx("div", babelHelpers.extends({}, Fe, { children: p.jsx(r("MWDialogText.react"), {
			color: "secondary",
			type: "body",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), a[85] = Oe) : Oe = a[85];
		var Be;
		a[86] !== Se || a[87] !== Le || a[88] !== ke || a[89] !== De || a[90] !== Ae ? (Be = p.jsxs("div", babelHelpers.extends({}, Se, { children: [
			Le,
			ke,
			De,
			Ae,
			Oe
		] })), a[86] = Se, a[87] = Le, a[88] = ke, a[89] = De, a[90] = Ae, a[91] = Be) : Be = a[91];
		var We;
		a[92] !== ne ? (We = s._(
			/*BTDS*/
			"",
			[s._param("GroupSize", ne, [0])]
		), a[92] = ne, a[93] = We) : We = a[93];
		var qe;
		a[94] !== F ? (qe = F.map(v), a[94] = F, a[95] = qe) : qe = a[95];
		var Ue;
		a[96] !== l || a[97] !== te || a[98] !== qe || a[99] !== c ? (Ue = p.jsx(r("MWLSGroupMembershipMemberList.react"), {
			onClose: l,
			participantsAndContacts: qe,
			showAdmodIndicator: te,
			showAdmodsOnly: !1,
			showHostsOnly: !1,
			showInvitedByViewerOnly: !1,
			thread: c
		}), a[96] = l, a[97] = te, a[98] = qe, a[99] = c, a[100] = Ue) : Ue = a[100];
		var Ve;
		a[101] !== We || a[102] !== Ue ? (Ve = p.jsx(r("FDSDialogSection.react"), {
			headline: We,
			children: Ue
		}), a[101] = We, a[102] = Ue, a[103] = Ve) : Ve = a[103];
		var He, Ge;
		a[104] === Symbol.for("react.memo_cache_sentinel") ? (He = { className: "x1iorvi4 xjkvuk6" }, Ge = { className: "xwib8y2 x2b8uid" }, a[104] = He, a[105] = Ge) : (He = a[104], Ge = a[105]);
		var ze;
		a[106] === Symbol.for("react.memo_cache_sentinel") ? (ze = s._(
			/*BTDS*/
			""
		), a[106] = ze) : ze = a[106];
		var je;
		a[107] !== se ? (je = p.jsx("div", babelHelpers.extends({}, He, { children: p.jsx("div", babelHelpers.extends({}, Ge, { children: p.jsx(r("MWXTextPairing.react"), {
			body: ze,
			bodyColor: "secondary",
			headline: se,
			headlineColor: "secondary",
			level: 4,
			textAlign: "center"
		}) })) })), a[107] = se, a[108] = je) : je = a[108];
		var Ke;
		return a[109] !== de || a[110] !== l || a[111] !== ye || a[112] !== be || a[113] !== Be || a[114] !== Ve || a[115] !== je ? (Ke = p.jsxs(de, {
			footer: ye,
			header: be,
			onClose: l,
			size: ve,
			children: [
				Be,
				Ve,
				je
			]
		}), a[109] = de, a[110] = l, a[111] = ye, a[112] = be, a[113] = Be, a[114] = Ve, a[115] = je, a[116] = Ke) : Ke = a[116], Ke;
	}
	function v(e) {
		var t = e[0], n = e[1];
		return {
			contact: n,
			participant: t,
			type: o("MWGroupMembershipListItem").MWGroupMembershipMemberTypes.ParticipantAndContact
		};
	}
	function S() {}
	function R() {}
	function L(e) {
		var t = e[1];
		return (d || (d = o("I64"))).lt(t.contactViewerRelationship, d.of_string("2"));
	}
	function E(e) {
		var t = e[1];
		return t.name;
	}
	function k(e) {
		var t = e[1];
		return t.name;
	}
	function I(e) {
		var t = e[0], n = t.isSuperAdmin, r = t.subscribeSource;
		return n != null && r != null ? n : !1;
	}
	function T() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "acceptGroupInvite.MAWJobManager.failure"
		});
	}
	function D() {
		o("MAWODSProxy").odsBumpEntityKey({
			entity: o("WAOdsEnums").Entity.MAW_JOB_MANAGER,
			key: "acceptGroupInvite.MAWJobManager.success"
		});
	}
	function x(e) {
		var t = e[1];
		return t;
	}
	function $(e) {
		var t = e[1];
		return !(d || (d = o("I64"))).equal(t.blockedByViewerStatus, (c || (c = o("LSIntEnum"))).ofNumber(r("LSContactBlockedByViewerStatus").UNBLOCKED));
	}
	l.default = b;
}), 226);
