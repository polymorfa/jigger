__d("WAWebBizBroadcastSendNowButton.react", [
	"fbt",
	"WAWebBizBroadcastCheckoutUtils",
	"WAWebBizBroadcastMediaProcessor",
	"WAWebBizBroadcastRecipientLimitCommon",
	"WAWebBizBroadcastSendContext.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsFileTypeValidator",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebClock",
	"WAWebFileUtils",
	"WAWebFlex.react",
	"WAWebMsgType",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWidToJid",
	"WDSButton.react",
	"WDSTooltip.react",
	"getErrorSafe",
	"react",
	"useWAWebBizBroadcastCreateCampaign",
	"useWAWebBizBroadcastOverlappingRecipients"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useMemo, p = c.useRef, _ = c.useState;
	function f() {
		var e, t = o("WAWebBizBroadcastSendContext.react").useWAWebBizBroadcastSendContext(), n = t.aiAssistedTextDraft, a = t.broadcastJids, i = t.budgetAmount, l = t.checkoutData, c = t.checkoutError, f = t.contacts, h = t.entryPoint, y = t.hasPendingBillingAction, C = t.isDuplicate, b = t.isLoadingCheckoutOrBilling, v = t.messageContent, S = t.onSendSuccess, R = t.selectedChats, L = t.sourceCampaignId, E = r("useWAWebBizBroadcastCreateCampaign")(), k = E.createCampaign, I = E.hasRequiredBusinessInfo, T = E.isCreatingCampaign, D = E.isLoadingBusinessInfo, x = _(function() {
			return o("WAWebClock").Clock.broadcastCampaignCreatedStr(Date.now() / 1e3).toString();
		}), $ = x[0], P = p(!1), N = m(function() {
			return Array.from(R).map(function(e) {
				var t, n = (t = e.broadcastMetadata) == null ? void 0 : t.recipients, r = {
					broadcastJid: o("WAWebWidToJid").widToBroadcastJid(e.id),
					recipientsCount: n ? n.toArray().length : 0
				};
				return r;
			});
		}, [R]), M = o("useWAWebBizBroadcastOverlappingRecipients").useWAWebBizBroadcastOverlappingRecipients(R), w = (v.body == null || v.body.trim() === "") && v.selectedMediaFile == null, A = a.length === 0, F = !I, O = f.length < o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS, B = f.length > o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit() || c === "too_many_recipients", W = y === !0, q = c != null && c !== "too_many_recipients", U = A || D || F || T || O || B || W || w || q, V = n != null, H = n != null && v.body.trim().length > 0 && v.body !== n;
		d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendBroadcastButtonViewed({
				aiAssistedText: V,
				aiAssistedTextEdited: H,
				checkoutFailed: q,
				isCreatingCampaign: T,
				isDisabled: U,
				isLoadingBusinessInfo: D,
				isMessageEmpty: w,
				missingBusinessInfo: F,
				noBroadcastJid: A,
				pendingBillingAction: W,
				recipientCount: f.length,
				selectedChatCount: R.size,
				tooFewRecipients: O,
				tooManyRecipients: B
			}, h);
		}, [
			V,
			H,
			q,
			f.length,
			h,
			T,
			U,
			D,
			w,
			F,
			A,
			W,
			R.size,
			O,
			B
		]);
		var G = (e = v.selectedMediaFile) == null ? void 0 : e.name, z = G != null ? o("WAWebFileUtils").getFileExtension(G) : null, j = g(v.mediaMimeType, v.selectedMediaFile != null), K = o("WAWebBizBroadcastMediaProcessor").getAttachmentType(v.catalogWid, v.productId, j), Q = function() {
			if (!(U || P.current)) {
				P.current = !0;
				try {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastSendClicked(a, f.length, h, K, M, C, L, V, H);
					var e = o("WAWebBizBroadcastCheckoutUtils").calculateCreditsAndPaidRecipients(l, f.length), t = e.numberOfCreditsUsed;
					k({
						audiences: N,
						budgetAmount: i,
						campaignName: $,
						contacts: f,
						existingBroadcastJid: a[0],
						freeReservedMsgs: t > 0 ? t : null,
						isDuplicate: C,
						messageContent: v,
						onError: function(t, n) {
							P.current = !1, o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendBroadcastResult(f.length, "failure", z, t, void 0, K, a.length, h, C, L, V, H);
							var e = n === !0 ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							);
							o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }));
						},
						onSuccess: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendBroadcastResult(f.length, "success", z, void 0, void 0, K, a.length, h, C, L, V, H), S();
						},
						sourceCampaignId: L
					});
				} catch (e) {
					P.current = !1;
					var n = r("getErrorSafe")(e);
					throw o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.sendBroadcastResult(f.length, "catch-block", z, n.message, void 0, K, a.length, h, C, L, V, H), e;
				}
			}
		}, X = o("WAWebBizBroadcastsCreationStrings").getSendNowButtonDisabledReason({
			broadcastJidIsNull: a.length === 0,
			checkoutFailed: q,
			contactsCount: f.length,
			hasPendingBillingAction: y === !0,
			hasRequiredBusinessInfo: I,
			isCreatingCampaign: T,
			isLoadingBusinessInfo: D,
			isMessageEmpty: w
		}), Y = u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "medium",
			type: "default",
			disabled: U,
			loading: T || b,
			onPress: Q,
			label: o("WAWebBizBroadcastsCreationStrings").getSendNowButtonLabel(T),
			testid: "biz-broadcasts-send-now-button"
		});
		return u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(r("WDSTooltip.react"), {
			disabled: !U,
			label: X != null ? X : "",
			children: Y
		}) });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e, t) {
		if (e != null) {
			if (o("WAWebBizBroadcastsFileTypeValidator").isAttachmentImageMimeType(e)) return o("WAWebMsgType").MSG_TYPE.IMAGE;
			if (o("WAWebBizBroadcastsFileTypeValidator").isAttachmentVideoMimeType(e)) return o("WAWebMsgType").MSG_TYPE.VIDEO;
		}
		return t ? o("WAWebMsgType").MSG_TYPE.DOCUMENT : null;
	}
	l.default = f;
}), 226);
