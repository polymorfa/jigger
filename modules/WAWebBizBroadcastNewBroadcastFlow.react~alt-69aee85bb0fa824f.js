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
		var t = e.chat, n = e.entryPoint, a = e.onBack, i = e.ref, l = e.sourceBroadcastMessageData;
		d(function() {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.pointOnce(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastQPLPoints.FLOW_MOUNTED);
		}, []);
		var u = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, g = o("useWAWebFlow").useFlow(f.NewBroadcast, {
			onEnd: a,
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight
		}), h = g[0], y = g[1], C = p(t != null ? new Set([t]) : new Set()), b = C[0], v = C[1], S = p(null), R = S[0], L = S[1], E = p([]), k = E[0], I = E[1], T = p([]), D = T[0], x = T[1], $ = p([]), P = $[0], N = $[1], M = p(null), w = M[0], A = M[1], F = p(null), O = F[0], B = F[1], W = m(function() {
			var e;
			return new Map([
				[(e = o("WAWebAudienceExpressionTypes")).PREDICATE_TYPE_CHATTED_RECENTLY, "active_chats"],
				[e.PREDICATE_TYPE_NOT_MESSAGED_RECENTLY, "inactive_chats"],
				[e.PREDICATE_TYPE_LABEL, "largest_list"],
				[e.PREDICATE_TYPE_ALL_CONTACTS, "all_contacts"]
			]);
		}, []), q = m(function() {
			var e = new Set();
			for (var t of b) {
				var n, r = (n = t.broadcastMetadata) == null || (n = n.audienceExpression) == null ? void 0 : n.predicateType;
				if (r != null) {
					var o = W.get(r);
					o != null && e.add(o);
				}
			}
			return e;
		}, [W, b]), U = c(function(e) {
			B(null), L(e), y.push(f.UpsertAudience);
		}, [y]), V = c(function(e) {
			(async function() {
				try {
					var t = await o("WAWebSuggestedAudienceCards").resolveCardExpression(e), r = await o("WAWebAudienceResolver").resolveAudienceExpression(t);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardClicked(e.id, t.predicateType, r.length, n);
					var a = r.map(function(e) {
						return e.split("@")[0];
					});
					B({
						initialRecipientIds: a,
						suggestedAudienceCardId: e.id
					}), L(null), y.push(f.UpsertAudience);
				} catch (t) {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(e.id, e.id, n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME);
				}
			})();
		}, [n, y]), H = c(function() {
			y.pop();
		}, [y]), G = c(function(e) {
			var t = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			t != null && v(function(e) {
				var n = new Set(e);
				return n.add(t), n;
			});
		}, []), z = c(function(e, t) {
			G(e), H();
			var n = o("WAWebChatCollection").ChatCollection.get(o("WAWebWidFactory").createWid(e.broadcastJid));
			o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(e, t, function() {
				v(function(e) {
					var t = new Set(e);
					return n != null && t.delete(n), t;
				});
			});
		}, [G, H]), j = c(function(e) {
			G(e), H();
		}, [G, H]), K = c(function(e) {
			z(e, "import");
		}, [z]), Q = c(function(e) {
			for (var t of e) G(t);
			var n = e[e.length - 1];
			n != null && o("WAWebBizBroadcastsAudienceUtils").showCreateAudienceSuccessToast(n, "import", null);
		}, [G]), X = c(function(e) {
			z(e, "create");
		}, [z]), Y = c(function(e) {
			var t = e.audienceList, n = e.originalBroadcastName, r = e.originalRecipientContactData;
			G(t), H(), o("WAWebBizBroadcastsAudienceUtils").showUpdateAudienceSuccessToast(t.broadcastJid, n, r, function() {
				return G({
					audienceExpression: o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
					broadcastJid: t.broadcastJid,
					lastBroadcastTimestamp: null,
					name: n,
					recipientCount: r.length
				});
			});
		}, [G, H]), J = r("useWAWebBizBroadcastExitConfirmation")(), Z = J.showExitConfirmation, ee = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastBackClicked(n), Z().then(function(e) {
				e ? (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationConfirmed(n), o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.drop(), y.end()) : o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastExitConfirmationDismissed(n);
			});
		}, [
			n,
			y,
			Z
		]), te = c(function() {
			y.end();
		}, [y]), ne = c(function(e, t, r, a, i) {
			if (I(e), x(t), A(a != null ? a : null), r != null) {
				o("WAWebBizBroadcastsSmartCSVImportSetupFlowLoadable").openSmartCSVImportSetupFlowLoadable({
					contacts: e,
					context: r,
					entryPoint: n,
					errorList: t,
					importLoggingContext: a,
					maxContactsPerAudience: i,
					onReviewAudience: function(t, n) {
						I(t), x(n), A(a != null ? a : null), y.push(f.ImportAudience);
					},
					onReviewAudiences: function(t) {
						var e = t.length === _ ? t[0] : null;
						if (e != null) {
							var n;
							I(e.contacts), x((n = e.errorList) != null ? n : []), A(a != null ? a : null), y.push(f.ImportAudience);
							return;
						}
						N(t), A(a != null ? a : null), y.push(f.ImportAudiences);
					}
				});
				return;
			}
			y.push(f.ImportAudience);
		}, [n, y]), re = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(n), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: n,
				onCancel: function(t, r) {
					r === void 0 && (r = !1), o("WAWebModalManager").ModalManager.close(), r !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(n);
				},
				onUploadSuccess: ne
			}));
		}, [n, ne]), oe = c(function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastExistingAudiencesModalLoadable").WAWebBizBroadcastExistingAudiencesModalLoadable, {
				entryPoint: n,
				onClose: o("WAWebModalManager").closeModalManager,
				selectedChats: b,
				setSelectedChats: v
			}));
		}, [n, b]), ae;
		if (l != null && l.isDuplicateBroadcast === !0 ? ae = o("WAWebBizBroadcastsCreationStrings").getDuplicateBroadcastDrawerTitle() : t != null ? ae = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastDrawerTitle() : ae = o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(), y.step == null) return null;
		var ie = y.step === f.UpsertAudience ? s.jsx(r("WAWebBizBroadcastsUpsertAudienceScreen.react"), {
			audienceConfig: {
				kind: "core",
				onNewAudienceSuccess: X,
				onSendBroadcast: j,
				onUpdateAudienceSuccess: Y
			},
			chat: R,
			entryPoint: n,
			isBBCreationFlow: !0,
			onBack: H,
			suggestedAudienceData: O
		}) : y.step === f.ImportAudience ? s.jsx(o("WAWebBizBroadcastsImportAudienceScreenLoadable").WAWebBizBroadcastsImportAudienceScreenLoadable, {
			entryPoint: n,
			onClose: H,
			onCreateAudienceSuccess: K,
			validContactsData: k,
			errorList: D,
			importLoggingContext: w,
			isBBCreationFlow: !0,
			onSendBroadcast: j
		}) : y.step === f.ImportAudiences ? s.jsx(o("WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable").WAWebBizBroadcastsSmartCSVImportAudiencesScreenLoadable, {
			audiences: P,
			entryPoint: n,
			importLoggingContext: w,
			onClose: H,
			onCreateAudiencesSuccess: function(t) {
				H(), Q(t);
			}
		}) : null;
		return s.jsx(o("WAWebBizLoggerProjectContext.react").BizLoggerProjectProvider, {
			project: "npm_web",
			children: s.jsxs(r("WAWebBizBroadcastsEligibilityGate.react"), {
				entryPoint: n,
				onClose: a,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
				children: [s.jsx(r("WAWebBizBroadcastNewBroadcastDrawer.react"), {
					sourceBroadcastMessageData: l,
					ref: i,
					selectedChats: b,
					setSelectedChats: v,
					entryPoint: n,
					onBack: ee,
					onOpenUpsertAudience: U,
					onOpenImportAudience: re,
					onOpenExistingAudiences: oe,
					onSendSuccess: te,
					onSuggestedAudiencePress: u ? V : void 0,
					selectedCardIds: q,
					title: ae
				}), s.jsx(h, {
					flow: y,
					children: ie
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
