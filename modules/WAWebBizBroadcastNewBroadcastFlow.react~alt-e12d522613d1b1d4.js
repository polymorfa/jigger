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
		var t = e.chat, a = e.entryPoint, i = e.onBack, l = e.ref, u = e.sourceBroadcastMessageData;
		d(function() {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.FLOW_MOUNTED);
		}, []);
		var g = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, h = o("useWAWebFlow").useFlow(f.NewBroadcast, {
			onEnd: i,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}), y = h[0], C = h[1], b = p(t != null ? new Set([t]) : new Set()), v = b[0], S = b[1], R = p(null), L = R[0], E = R[1], k = p([]), I = k[0], T = k[1], D = p([]), x = D[0], $ = D[1], P = p([]), N = P[0], M = P[1], w = p(null), A = w[0], F = w[1], O = p(null), B = O[0], W = O[1], q = m(function() {
			var e;
			return new Map([
				[(e = o("WAWebAudienceExpressionTypes")).PREDICATE_TYPE_CHATTED_RECENTLY, "active_chats"],
				[e.PREDICATE_TYPE_NOT_MESSAGED_RECENTLY, "inactive_chats"],
				[e.PREDICATE_TYPE_LABEL, "largest_list"],
				[e.PREDICATE_TYPE_ALL_CONTACTS, "all_contacts"]
			]);
		}, []), U = m(function() {
			var e = new Set();
			for (var t of v) {
				var n, r = (n = t.broadcastMetadata) == null || (n = n.audienceExpression) == null ? void 0 : n.predicateType;
				if (r != null) {
					var o = q.get(r);
					o != null && e.add(o);
				}
			}
			return e;
		}, [q, v]), V = c(function(e) {
			W(null), E(e), C.push(f.UpsertAudience);
		}, [C]), H = c(function(e) {
			n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var t = yield o("WAWebSuggestedAudienceCards").resolveCardExpression(e), n = yield o("WAWebAudienceResolver").resolveAudienceExpression(t);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(e.id, t.predicateType, n.length, a);
					var r = n.map(function(e) {
						return e.split("@")[0];
					});
					W({
						initialRecipientIds: r,
						suggestedAudienceCardId: e.id
					}), E(null), C.push(f.UpsertAudience);
				} catch (t) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(e.id, e.id, a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME);
				}
			})();
		}, [a, C]), G = c(function() {
			C.pop();
		}, [C]), z = c(function(e) {
			var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			t != null && S(function(e) {
				var n = new Set(e);
				return n.add(t), n;
			});
		}, []), j = c(function(e, t) {
			z(e), G();
			var n = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(e, t, function() {
				S(function(e) {
					var t = new Set(e);
					return n != null && t.delete(n), t;
				});
			});
		}, [z, G]), K = c(function(e) {
			z(e), G();
		}, [z, G]), Q = c(function(e) {
			j(e, "import");
		}, [j]), X = c(function(e) {
			for (var t of e) z(t);
			var n = e[e.length - 1];
			n != null && o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(n, "import", null);
		}, [z]), Y = c(function(e) {
			j(e, "create");
		}, [j]), J = c(function(e) {
			var t = e.audienceList, n = e.originalBroadcastName, r = e.originalRecipientContactData;
			z(t), G(), o("WAWebBizBroadcastsAudienceUtils").showUpdateAudienceSuccessToast(t.broadcastJid, n, r, function() {
				return z({
					audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: t.broadcastJid,
					lastBroadcastTimestamp: null,
					name: n,
					recipientCount: r.length
				});
			});
		}, [z, G]), Z = r("useWAWebBizBroadcastExitConfirmation")(), ee = Z.showExitConfirmation, te = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(a), ee().then(function(e) {
				e ? (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(a), o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.drop(), C.end()) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(a);
			});
		}, [
			a,
			C,
			ee
		]), ne = c(function() {
			C.end();
		}, [C]), re = c(function(e, t, n, r, i) {
			if (T(e), $(t), F(r != null ? r : null), n != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: e,
					context: n,
					entryPoint: a,
					errorList: t,
					importLoggingContext: r,
					maxContactsPerAudience: i,
					onReviewAudience: function(t, n) {
						T(t), $(n), F(r != null ? r : null), C.push(f.ImportAudience);
					},
					onReviewAudiences: function(t) {
						var e = t.length === _ ? t[0] : null;
						if (e != null) {
							var n;
							T(e.contacts), $((n = e.errorList) != null ? n : []), F(r != null ? r : null), C.push(f.ImportAudience);
							return;
						}
						M(t), F(r != null ? r : null), C.push(f.ImportAudiences);
					}
				});
				return;
			}
			C.push(f.ImportAudience);
		}, [a, C]), oe = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(a), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: a,
				onCancel: function(t, n) {
					n === void 0 && (n = !1), o("WAWebModalManager").ModalManager.close(), n !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(a);
				},
				onUploadSuccess: re
			}));
		}, [a, re]), ae = c(function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastExistingAudiencesModalLoadable").WAWebBizBroadcastExistingAudiencesModalLoadable, {
				entryPoint: a,
				onClose: o("WAWebModalManager").closeModalManager,
				selectedChats: v,
				setSelectedChats: S
			}));
		}, [a, v]), ie;
		if (u != null && u.isDuplicateBroadcast === !0 ? ie = o("WAWebBizBroadcastsCreationStrings").getDuplicateBroadcastDrawerTitle() : t != null ? ie = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastDrawerTitle() : ie = o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(), C.step == null) return null;
		var le = C.step === f.UpsertAudience ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
			audienceConfig: {
				kind: "core",
				onNewAudienceSuccess: Y,
				onSendBroadcast: K,
				onUpdateAudienceSuccess: J
			},
			chat: L,
			entryPoint: a,
			isBBCreationFlow: !0,
			onBack: G,
			suggestedAudienceData: B
		}) : C.step === f.ImportAudience ? s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
			entryPoint: a,
			onClose: G,
			onCreateAudienceSuccess: Q,
			validContactsData: I,
			errorList: x,
			importLoggingContext: A,
			isBBCreationFlow: !0,
			onSendBroadcast: K
		}) : C.step === f.ImportAudiences ? s.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: N,
			entryPoint: a,
			importLoggingContext: A,
			onClose: G,
			onCreateAudiencesSuccess: function(t) {
				G(), X(t);
			}
		}) : null;
		return s.jsx(o("WAWebBizLoggerProjectContext.react").BizLoggerProjectProvider, {
			project: "npm_web",
			children: s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
				entryPoint: a,
				onClose: i,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
				children: [s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
					sourceBroadcastMessageData: u,
					ref: l,
					selectedChats: v,
					setSelectedChats: S,
					entryPoint: a,
					onBack: te,
					onOpenUpsertAudience: V,
					onOpenImportAudience: oe,
					onOpenExistingAudiences: ae,
					onSendSuccess: ne,
					onSuggestedAudiencePress: g ? H : void 0,
					selectedCardIds: U,
					title: ie
				}), s.jsx(y, {
					flow: C,
					children: le
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
