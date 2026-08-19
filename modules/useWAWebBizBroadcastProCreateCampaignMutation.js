__d("useWAWebBizBroadcastProCreateCampaignMutation", [
	"CometRelay",
	"WAWebBizBroadcastProPrepareMedia",
	"WAWebBizBroadcastProValidationUtils",
	"WAWebClock",
	"WAWebMsgType",
	"err",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastProCreateCampaignMutation.graphql",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useState, m = e !== void 0 ? e : e = n("useWAWebBizBroadcastProCreateCampaignMutation.graphql");
	function p(e, t) {
		var n = o("react-compiler-runtime").c(8), a = o("CometRelay").useMutation(m), i = a[0], l = d(!1), s = l[0], u = l[1], c = r("useWAWebUnmountSignal")(), p;
		n[0] !== i || n[1] !== e || n[2] !== t || n[3] !== c ? (p = function(a) {
			var n = a.attachmentData, l = a.buttonData, s = a.customAudienceIDs, d = a.lifetimeBudget, m = a.message, p = a.rateCard, g = a.recipientCount, h = a.startTime;
			if (!o("WAWebBizBroadcastProValidationUtils").validateAttachmentData(n)) {
				t == null || t(r("err")("Unsupported attachment type for BB Pro campaign creation"));
				return;
			}
			u(!0), r("WAWebBizBroadcastProPrepareMedia")(n, c).then(function(a) {
				if (!c.aborted) {
					var y = a == null ? null : {
						file_ext: a.extension,
						media_type: f(n == null ? void 0 : n.mediaType),
						mime_type: a.mimeType,
						raw_media_bytes: a.mediaData
					}, C = o("WAWebClock").Clock.broadcastCampaignCreatedStr(Date.now() / 1e3).toString();
					i({
						onCompleted: function(o, a) {
							var n;
							if (!c.aborted) {
								if (u(!1), a != null && a.length > 0) {
									t == null || t(r("err")(a[0].message));
									return;
								}
								var i = o == null || (n = o.create_wa_bb_pro_campaign) == null ? void 0 : n.id;
								if (i == null) {
									t == null || t(r("err")("BB Pro campaign creation returned null response"));
									return;
								}
								e == null || e(i);
							}
						},
						onError: function(n) {
							c.aborted || (u(!1), t == null || t(n));
						},
						variables: {
							attachment_data: y,
							campaign_name: C,
							cta_button_data: _(l),
							custom_audience_ids: s,
							lifetime_budget: d,
							rate_card: p,
							recipient_count: g,
							start_time: h != null ? h : null,
							text_content: m
						}
					});
				}
			}).catch(function(e) {
				c.aborted || (u(!1), t == null || t(r("getErrorSafe")(e)));
			});
		}, n[0] = i, n[1] = e, n[2] = t, n[3] = c, n[4] = p) : p = n[4];
		var g = p, h;
		return n[5] !== g || n[6] !== s ? (h = [g, s], n[5] = g, n[6] = s, n[7] = h) : h = n[7], h;
	}
	function _(e) {
		return e == null ? null : e.type === "cta_url" ? {
			displayText: e.displayText,
			linkTrackingEnabled: e.linkTrackingEnabled,
			type: "CTA_URL",
			url: e.url
		} : e.type === "cta_call" ? {
			displayText: e.displayText,
			phoneNumber: e.phoneNumber,
			type: "CTA_CALL"
		} : e.type === "quick_reply" ? {
			displayText: e.displayText,
			type: "QUICK_REPLY"
		} : null;
	}
	function f(e) {
		e: {
			if (e === o("WAWebMsgType").MSG_TYPE.IMAGE) return "IMAGE";
			if (e === o("WAWebMsgType").MSG_TYPE.VIDEO) return "VIDEO";
			throw r("err")("Unsupported attachment media type for BB Pro campaign: " + String(e));
		}
	}
	l.default = p;
}), 98);
