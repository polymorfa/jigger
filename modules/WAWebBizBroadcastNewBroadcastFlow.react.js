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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(84), a = e.chat, i = e.entryPoint, l = e.onBack, u = e.ref, c = e.sourceBroadcastMessageData, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = [], t[0] = m) : m = t[0], d(y, m);
		var g = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, C;
		t[1] !== l ? (C = {
			onEnd: l,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}, t[1] = l, t[2] = C) : C = t[2];
		var b = o("useWAWebFlow").useFlow(f.NewBroadcast, C), v = b[0], S = b[1], R;
		t[3] !== a ? (R = a != null ? new Set([a]) : new Set(), t[3] = a, t[4] = R) : R = t[4];
		var L = p(R), E = L[0], k = L[1], I = p(null), T = I[0], D = I[1], x;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (x = [], t[5] = x) : x = t[5];
		var $ = p(x), P = $[0], N = $[1], M;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (M = [], t[6] = M) : M = t[6];
		var w = p(M), A = w[0], F = w[1], O;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (O = [], t[7] = O) : O = t[7];
		var B = p(O), W = B[0], q = B[1], U = p(null), V = U[0], H = U[1], G = p(null), z = G[0], j = G[1], K;
		if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
			var Q;
			K = new Map([
				[(Q = o("WAWebAudienceExpressionTypes")).PREDICATE_TYPE_CHATTED_RECENTLY, "active_chats"],
				[Q.PREDICATE_TYPE_NOT_MESSAGED_RECENTLY, "inactive_chats"],
				[Q.PREDICATE_TYPE_LABEL, "largest_list"],
				[Q.PREDICATE_TYPE_ALL_CONTACTS, "all_contacts"]
			]), t[8] = K;
		} else K = t[8];
		var X = K, Y;
		if (t[9] !== E) {
			Y = new Set();
			for (var J of E) {
				var Z, ee = (Z = J.broadcastMetadata) == null || (Z = Z.audienceExpression) == null ? void 0 : Z.predicateType;
				if (ee != null) {
					var te = X.get(ee);
					te != null && Y.add(te);
				}
			}
			t[9] = E, t[10] = Y;
		} else Y = t[10];
		var ne = Y, re;
		t[11] !== S ? (re = function(t) {
			j(null), D(t), S.push(f.UpsertAudience);
		}, t[11] = S, t[12] = re) : re = t[12];
		var oe = re, ae;
		t[13] !== i || t[14] !== S ? (ae = function(t) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var e = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(t), n = yield o("WAWebAudienceResolver").resolveAudienceExpression(e);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(t.id, e.predicateType, n.length, i);
					var r = n.map(h);
					j({
						initialRecipientIds: r,
						suggestedAudienceCardId: t.id
					}), D(null), S.push(f.UpsertAudience);
				} catch (e) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(t.id, t.id, i, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME);
				}
			})();
		}, t[13] = i, t[14] = S, t[15] = ae) : ae = t[15];
		var ie = ae, le;
		t[16] !== S ? (le = function() {
			S.pop();
		}, t[16] = S, t[17] = le) : le = t[17];
		var se = le, ue;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (ue = function(t) {
			var e = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t.broadcastJid));
			e != null && k(function(t) {
				var n = new Set(t);
				return n.add(e), n;
			});
		}, t[18] = ue) : ue = t[18];
		var ce = ue, de;
		t[19] !== se ? (de = function(t, n) {
			ce(t), se();
			var e = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(t.broadcastJid));
			o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(t, n, function() {
				k(function(t) {
					var n = new Set(t);
					return e != null && n.delete(e), n;
				});
			});
		}, t[19] = se, t[20] = de) : de = t[20];
		var me = de, pe;
		t[21] !== se ? (pe = function(t) {
			ce(t), se();
		}, t[21] = se, t[22] = pe) : pe = t[22];
		var _e = pe, fe;
		t[23] !== me ? (fe = function(t) {
			me(t, "import");
		}, t[23] = me, t[24] = fe) : fe = t[24];
		var ge = fe, he;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (he = function(t) {
			for (var e of t) ce(e);
			var n = t[t.length - 1];
			n != null && o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(n, "import", null);
		}, t[25] = he) : he = t[25];
		var ye = he, Ce;
		t[26] !== me ? (Ce = function(t) {
			me(t, "create");
		}, t[26] = me, t[27] = Ce) : Ce = t[27];
		var be = Ce, ve;
		t[28] !== se ? (ve = function(t) {
			var e = t.audienceList, n = t.originalBroadcastName, r = t.originalRecipientContactData;
			ce(e), se(), o("WAWebBizBroadcastsAudienceUtils").showUpdateAudienceSuccessToast(e.broadcastJid, n, r, function() {
				return ce({
					audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: e.broadcastJid,
					lastBroadcastTimestamp: null,
					name: n,
					recipientCount: r.length
				});
			});
		}, t[28] = se, t[29] = ve) : ve = t[29];
		var Se = ve, Re = r("useWAWebBizBroadcastExitConfirmation")(), Le = Re.showExitConfirmation, Ee;
		t[30] !== i || t[31] !== S || t[32] !== Le ? (Ee = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(i), Le().then(function(e) {
				e ? (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(i), o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.drop(), S.end()) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(i);
			});
		}, t[30] = i, t[31] = S, t[32] = Le, t[33] = Ee) : Ee = t[33];
		var ke = Ee, Ie;
		t[34] !== S ? (Ie = function() {
			S.end();
		}, t[34] = S, t[35] = Ie) : Ie = t[35];
		var Te = Ie, De;
		t[36] !== i || t[37] !== S ? (De = function(t, n, r, a, l) {
			if (N(t), F(n), H(a != null ? a : null), r != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: t,
					context: r,
					entryPoint: i,
					errorList: n,
					importLoggingContext: a,
					maxContactsPerAudience: l,
					onReviewAudience: function(t, n) {
						N(t), F(n), H(a != null ? a : null), S.push(f.ImportAudience);
					},
					onReviewAudiences: function(t) {
						var e = t.length === _ ? t[0] : null;
						if (e != null) {
							var n;
							N(e.contacts), F((n = e.errorList) != null ? n : []), H(a != null ? a : null), S.push(f.ImportAudience);
							return;
						}
						q(t), H(a != null ? a : null), S.push(f.ImportAudiences);
					}
				});
				return;
			}
			S.push(f.ImportAudience);
		}, t[36] = i, t[37] = S, t[38] = De) : De = t[38];
		var xe = De, $e;
		t[39] !== i || t[40] !== xe ? ($e = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(i), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: i,
				onCancel: function(t, n) {
					var e = n === void 0 ? !1 : n;
					o("WAWebModalManager").ModalManager.close(), e !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(i);
				},
				onUploadSuccess: xe
			}));
		}, t[39] = i, t[40] = xe, t[41] = $e) : $e = t[41];
		var Pe = $e, Ne;
		t[42] !== i || t[43] !== E ? (Ne = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastExistingAudiencesModalLoadable").WAWebBizBroadcastExistingAudiencesModalLoadable, {
				entryPoint: i,
				onClose: o("WAWebModalManager").closeModalManager,
				selectedChats: E,
				setSelectedChats: k
			}));
		}, t[42] = i, t[43] = E, t[44] = Ne) : Ne = t[44];
		var Me = Ne, we;
		if (c != null && c.isDuplicateBroadcast === !0) {
			var Ae;
			t[45] === Symbol.for("react.memo_cache_sentinel") ? (Ae = o("WAWebBizBroadcastsCreationStrings").getDuplicateBroadcastDrawerTitle(), t[45] = Ae) : Ae = t[45], we = Ae;
		} else if (a != null) {
			var Fe;
			t[46] === Symbol.for("react.memo_cache_sentinel") ? (Fe = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastDrawerTitle(), t[46] = Fe) : Fe = t[46], we = Fe;
		} else {
			var Oe;
			t[47] === Symbol.for("react.memo_cache_sentinel") ? (Oe = o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(), t[47] = Oe) : Oe = t[47], we = Oe;
		}
		if (S.step == null) return null;
		var Be;
		t[48] !== W || t[49] !== i || t[50] !== A || t[51] !== S.step || t[52] !== se || t[53] !== _e || t[54] !== V || t[55] !== ge || t[56] !== be || t[57] !== Se || t[58] !== T || t[59] !== z || t[60] !== P ? (Be = S.step === f.UpsertAudience ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
			audienceConfig: {
				kind: "core",
				onNewAudienceSuccess: be,
				onSendBroadcast: _e,
				onUpdateAudienceSuccess: Se
			},
			chat: T,
			entryPoint: i,
			isBBCreationFlow: !0,
			onBack: se,
			suggestedAudienceData: z
		}) : S.step === f.ImportAudience ? s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
			entryPoint: i,
			onClose: se,
			onCreateAudienceSuccess: ge,
			validContactsData: P,
			errorList: A,
			importLoggingContext: V,
			isBBCreationFlow: !0,
			onSendBroadcast: _e
		}) : S.step === f.ImportAudiences ? s.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: W,
			entryPoint: i,
			importLoggingContext: V,
			onClose: se,
			onCreateAudiencesSuccess: function(t) {
				se(), ye(t);
			}
		}) : null, t[48] = W, t[49] = i, t[50] = A, t[51] = S.step, t[52] = se, t[53] = _e, t[54] = V, t[55] = ge, t[56] = be, t[57] = Se, t[58] = T, t[59] = z, t[60] = P, t[61] = Be) : Be = t[61];
		var We = Be, qe = g ? ie : void 0, Ue;
		t[62] !== we || t[63] !== i || t[64] !== ke || t[65] !== Me || t[66] !== Te || t[67] !== Pe || t[68] !== oe || t[69] !== u || t[70] !== ne || t[71] !== E || t[72] !== c || t[73] !== qe ? (Ue = s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
			sourceBroadcastMessageData: c,
			ref: u,
			selectedChats: E,
			setSelectedChats: k,
			entryPoint: i,
			onBack: ke,
			onOpenUpsertAudience: oe,
			onOpenImportAudience: Pe,
			onOpenExistingAudiences: Me,
			onSendSuccess: Te,
			onSuggestedAudiencePress: qe,
			selectedCardIds: ne,
			title: we
		}), t[62] = we, t[63] = i, t[64] = ke, t[65] = Me, t[66] = Te, t[67] = Pe, t[68] = oe, t[69] = u, t[70] = ne, t[71] = E, t[72] = c, t[73] = qe, t[74] = Ue) : Ue = t[74];
		var Ve;
		t[75] !== v || t[76] !== S || t[77] !== We ? (Ve = s.jsx(v, {
			flow: S,
			children: We
		}), t[75] = v, t[76] = S, t[77] = We, t[78] = Ve) : Ve = t[78];
		var He;
		return t[79] !== i || t[80] !== l || t[81] !== Ue || t[82] !== Ve ? (He = s.jsx(o("WAWebBizLoggerProjectContext.react").BizLoggerProjectProvider, {
			project: "npm_web",
			children: s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
				entryPoint: i,
				onClose: l,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
				children: [Ue, Ve]
			})
		}), t[79] = i, t[80] = l, t[81] = Ue, t[82] = Ve, t[83] = He) : He = t[83], He;
	}
	function h(e) {
		return e.split("@")[0];
	}
	function y() {
		o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.FLOW_MOUNTED);
	}
	l.default = g;
}), 98);
