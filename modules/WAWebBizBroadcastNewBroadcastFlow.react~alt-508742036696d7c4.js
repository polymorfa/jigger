__d("WAWebBizBroadcastNewBroadcastFlow.react", [
	"$InternalEnum",
	"WAWebAudienceExpressionTypes",
	"WAWebAudienceResolver",
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastExistingAudiencesModalLoadable",
	"WAWebBizBroadcastNewBroadcastDrawer.react",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsEligibilityGate.react",
	"WAWebBizBroadcastsImportAudienceScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable",
	"WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable",
	"WAWebBizBroadcastsUploadModalLoadable.react",
	"WAWebBizBroadcastsUpsertAudienceScreen.react",
	"WAWebBizLoggerProjectContext.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatCollection",
	"WAWebModalManager",
	"WAWebSuggestedAudienceCards",
	"WAWebWamEnumSurfaceType",
	"WAWebWidFactory",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue",
	"useWAWebBizBroadcastExitConfirmation",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState, _ = 1, f = n("$InternalEnum").Mirrored([
		"NewBroadcast",
		"UpsertAudience",
		"ImportAudience",
		"ImportAudiences"
	]);
	function g(e) {
		var t = o("react-compiler-runtime").c(84), n = e.chat, a = e.entryPoint, i = e.onBack, l = e.ref, u = e.sourceBroadcastMessageData, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [], t[0] = c) : c = t[0], d(y, c);
		var m = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, g;
		t[1] !== i ? (g = {
			onEnd: i,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}, t[1] = i, t[2] = g) : g = t[2];
		var C = o("useWAWebFlow").useFlow(f.NewBroadcast, g), b = C[0], v = C[1], S;
		t[3] !== n ? (S = n != null ? new Set([n]) : new Set(), t[3] = n, t[4] = S) : S = t[4];
		var R = p(S), L = R[0], E = R[1], k = p(null), I = k[0], T = k[1], D;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (D = [], t[5] = D) : D = t[5];
		var x = p(D), $ = x[0], P = x[1], N;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (N = [], t[6] = N) : N = t[6];
		var M = p(N), w = M[0], A = M[1], F;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (F = [], t[7] = F) : F = t[7];
		var O = p(F), B = O[0], W = O[1], q = p(null), U = q[0], V = q[1], H = p(null), G = H[0], z = H[1], j;
		if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
			var K;
			j = new Map([
				[(K = o("WAWebAudienceExpressionTypes")).PREDICATE_TYPE_CHATTED_RECENTLY, "active_chats"],
				[K.PREDICATE_TYPE_NOT_MESSAGED_RECENTLY, "inactive_chats"],
				[K.PREDICATE_TYPE_LABEL, "largest_list"],
				[K.PREDICATE_TYPE_ALL_CONTACTS, "all_contacts"]
			]), t[8] = j;
		} else j = t[8];
		var Q = j, X;
		if (t[9] !== L) {
			X = new Set();
			for (var Y of L) {
				var J, Z = (J = Y.broadcastMetadata) == null || (J = J.audienceExpression) == null ? void 0 : J.predicateType;
				if (Z != null) {
					var ee = Q.get(Z);
					ee != null && X.add(ee);
				}
			}
			t[9] = L, t[10] = X;
		} else X = t[10];
		var te = X, ne;
		t[11] !== v ? (ne = function(t) {
			z(null), T(t), v.push(f.UpsertAudience);
		}, t[11] = v, t[12] = ne) : ne = t[12];
		var re = ne, oe;
		t[13] !== a || t[14] !== v ? (oe = function(t) {
			(async function() {
				try {
					var e = await o("WAWebSuggestedAudienceCards").resolveCardExpression(t), n = await o("WAWebAudienceResolver").resolveAudienceExpression(e);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(t.id, e.predicateType, n.length, a);
					var r = n.map(h);
					z({
						initialRecipientIds: r,
						suggestedAudienceCardId: t.id
					}), T(null), v.push(f.UpsertAudience);
				} catch (e) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(t.id, t.id, a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME);
				}
			})();
		}, t[13] = a, t[14] = v, t[15] = oe) : oe = t[15];
		var ae = oe, ie;
		t[16] !== v ? (ie = function() {
			v.pop();
		}, t[16] = v, t[17] = ie) : ie = t[17];
		var le = ie, se;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (se = function(t) {
			var e = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t.broadcastJid));
			e != null && E(function(t) {
				var n = new Set(t);
				return n.add(e), n;
			});
		}, t[18] = se) : se = t[18];
		var ue = se, ce;
		t[19] !== le ? (ce = function(t, n) {
			ue(t), le();
			var e = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t.broadcastJid));
			o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(t, n, function() {
				E(function(t) {
					var n = new Set(t);
					return e != null && n.delete(e), n;
				});
			});
		}, t[19] = le, t[20] = ce) : ce = t[20];
		var de = ce, me;
		t[21] !== le ? (me = function(t) {
			ue(t), le();
		}, t[21] = le, t[22] = me) : me = t[22];
		var pe = me, _e;
		t[23] !== de ? (_e = function(t) {
			de(t, "import");
		}, t[23] = de, t[24] = _e) : _e = t[24];
		var fe = _e, ge;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (ge = function(t) {
			for (var e of t) ue(e);
			var n = t[t.length - 1];
			n != null && o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(n, "import", null);
		}, t[25] = ge) : ge = t[25];
		var he = ge, ye;
		t[26] !== de ? (ye = function(t) {
			de(t, "create");
		}, t[26] = de, t[27] = ye) : ye = t[27];
		var Ce = ye, be;
		t[28] !== le ? (be = function(t) {
			var e = t.audienceList, n = t.originalBroadcastName, r = t.originalRecipientContactData;
			ue(e), le(), o("WAWebBizBroadcastsAudienceUtils").showUpdateAudienceSuccessToast(e.broadcastJid, n, r, function() {
				return ue({
					audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: e.broadcastJid,
					lastBroadcastTimestamp: null,
					name: n,
					recipientCount: r.length
				});
			});
		}, t[28] = le, t[29] = be) : be = t[29];
		var ve = be, Se = r("useWAWebBizBroadcastExitConfirmation")(), Re = Se.showExitConfirmation, Le;
		t[30] !== a || t[31] !== v || t[32] !== Re ? (Le = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(a), Re().then(function(e) {
				e ? (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(a), o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.drop(), v.end()) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(a);
			});
		}, t[30] = a, t[31] = v, t[32] = Re, t[33] = Le) : Le = t[33];
		var Ee = Le, ke;
		t[34] !== v ? (ke = function() {
			v.end();
		}, t[34] = v, t[35] = ke) : ke = t[35];
		var Ie = ke, Te;
		t[36] !== a || t[37] !== v ? (Te = function(t, n, r, i, l) {
			if (P(t), A(n), V(i != null ? i : null), r != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: t,
					context: r,
					entryPoint: a,
					errorList: n,
					importLoggingContext: i,
					maxContactsPerAudience: l,
					onReviewAudience: function(t, n) {
						P(t), A(n), V(i != null ? i : null), v.push(f.ImportAudience);
					},
					onReviewAudiences: function(t) {
						var e = t.length === _ ? t[0] : null;
						if (e != null) {
							var n;
							P(e.contacts), A((n = e.errorList) != null ? n : []), V(i != null ? i : null), v.push(f.ImportAudience);
							return;
						}
						W(t), V(i != null ? i : null), v.push(f.ImportAudiences);
					}
				});
				return;
			}
			v.push(f.ImportAudience);
		}, t[36] = a, t[37] = v, t[38] = Te) : Te = t[38];
		var De = Te, xe;
		t[39] !== a || t[40] !== De ? (xe = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(a), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: a,
				onCancel: function(t, n) {
					var e = n === void 0 ? !1 : n;
					o("WAWebModalManager").ModalManager.close(), e !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(a);
				},
				onUploadSuccess: De
			}));
		}, t[39] = a, t[40] = De, t[41] = xe) : xe = t[41];
		var $e = xe, Pe;
		t[42] !== a || t[43] !== L ? (Pe = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastExistingAudiencesModalLoadable").WAWebBizBroadcastExistingAudiencesModalLoadable, {
				entryPoint: a,
				onClose: o("WAWebModalManager").closeModalManager,
				selectedChats: L,
				setSelectedChats: E
			}));
		}, t[42] = a, t[43] = L, t[44] = Pe) : Pe = t[44];
		var Ne = Pe, Me;
		if (u != null && u.isDuplicateBroadcast === !0) {
			var we;
			t[45] === Symbol.for("react.memo_cache_sentinel") ? (we = o("WAWebBizBroadcastsCreationStrings").getDuplicateBroadcastDrawerTitle(), t[45] = we) : we = t[45], Me = we;
		} else if (n != null) {
			var Ae;
			t[46] === Symbol.for("react.memo_cache_sentinel") ? (Ae = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastDrawerTitle(), t[46] = Ae) : Ae = t[46], Me = Ae;
		} else {
			var Fe;
			t[47] === Symbol.for("react.memo_cache_sentinel") ? (Fe = o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(), t[47] = Fe) : Fe = t[47], Me = Fe;
		}
		if (v.step == null) return null;
		var Oe;
		t[48] !== B || t[49] !== a || t[50] !== w || t[51] !== v.step || t[52] !== le || t[53] !== pe || t[54] !== U || t[55] !== fe || t[56] !== Ce || t[57] !== ve || t[58] !== I || t[59] !== G || t[60] !== $ ? (Oe = v.step === f.UpsertAudience ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
			audienceConfig: {
				kind: "core",
				onNewAudienceSuccess: Ce,
				onSendBroadcast: pe,
				onUpdateAudienceSuccess: ve
			},
			chat: I,
			entryPoint: a,
			isBBCreationFlow: !0,
			onBack: le,
			suggestedAudienceData: G
		}) : v.step === f.ImportAudience ? s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
			entryPoint: a,
			onClose: le,
			onCreateAudienceSuccess: fe,
			validContactsData: $,
			errorList: w,
			importLoggingContext: U,
			isBBCreationFlow: !0,
			onSendBroadcast: pe
		}) : v.step === f.ImportAudiences ? s.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: B,
			entryPoint: a,
			importLoggingContext: U,
			onClose: le,
			onCreateAudiencesSuccess: function(t) {
				le(), he(t);
			}
		}) : null, t[48] = B, t[49] = a, t[50] = w, t[51] = v.step, t[52] = le, t[53] = pe, t[54] = U, t[55] = fe, t[56] = Ce, t[57] = ve, t[58] = I, t[59] = G, t[60] = $, t[61] = Oe) : Oe = t[61];
		var Be = Oe, We = m ? ae : void 0, qe;
		t[62] !== Me || t[63] !== a || t[64] !== Ee || t[65] !== Ne || t[66] !== Ie || t[67] !== $e || t[68] !== re || t[69] !== l || t[70] !== te || t[71] !== L || t[72] !== u || t[73] !== We ? (qe = s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
			sourceBroadcastMessageData: u,
			ref: l,
			selectedChats: L,
			setSelectedChats: E,
			entryPoint: a,
			onBack: Ee,
			onOpenUpsertAudience: re,
			onOpenImportAudience: $e,
			onOpenExistingAudiences: Ne,
			onSendSuccess: Ie,
			onSuggestedAudiencePress: We,
			selectedCardIds: te,
			title: Me
		}), t[62] = Me, t[63] = a, t[64] = Ee, t[65] = Ne, t[66] = Ie, t[67] = $e, t[68] = re, t[69] = l, t[70] = te, t[71] = L, t[72] = u, t[73] = We, t[74] = qe) : qe = t[74];
		var Ue;
		t[75] !== b || t[76] !== v || t[77] !== Be ? (Ue = s.jsx(b, {
			flow: v,
			children: Be
		}), t[75] = b, t[76] = v, t[77] = Be, t[78] = Ue) : Ue = t[78];
		var Ve;
		return t[79] !== a || t[80] !== i || t[81] !== qe || t[82] !== Ue ? (Ve = s.jsx(o("WAWebBizLoggerProjectContext.react").BizLoggerProjectProvider, {
			project: "npm_web",
			children: s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
				entryPoint: a,
				onClose: i,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
				children: [qe, Ue]
			})
		}), t[79] = a, t[80] = i, t[81] = qe, t[82] = Ue, t[83] = Ve) : Ve = t[83], Ve;
	}
	function h(e) {
		return e.split("@")[0];
	}
	function y() {
		o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.FLOW_MOUNTED);
	}
	l.default = g;
}), 98);
