__d("MAWBridgeHandleReceiverFetchXMA", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"LSXmaContentType",
	"MAWBridgeXMAUtils",
	"MAWConvertMSGDataclassContentTypeToLSXmaContentType",
	"MSGDataclassTypes.flow",
	"MessagingAttachmentType",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t, n) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			var i, l, u, c = n.contentRef, d = n.defaultPreviewMediaId, m = n.msgId, p = n.subtitleText, _ = n.titleText, f = n.xmaId;
			if (m != null) {
				var g = (i = n == null || (l = n.defaultCTA) == null ? void 0 : l.actionUrl) != null ? i : n == null || (u = n.defaultCTA) == null ? void 0 : u.nativeUrl, h = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.attachments).getKeyRange(a, m)), y = String(f), C = (e || (e = o("I64"))).zero, b = n.xmaDataclass, v = r("LSXmaContentType").MSG_RECEIVER_FETCH, S;
				if (c != null) try {
					var R = JSON.parse(c);
					R != null && (S = JSON.stringify(R));
				} catch (e) {
					r("FBLogger")("messenger_web_sharing").mustfix("Failed to parse msg.contentRef as XmsgMsgrXmaContentRefDataclass");
				}
				else r("FBLogger")("messenger_web_sharing").mustfix("contentRef is empty for a MSG_RECEIVER_FETCH XMA");
				if (b != null) try {
					var L, E = JSON.parse(b), k = g != null ? {
						__typename: "XMSGXmaCta",
						action_url: g,
						cta_type: o("MSGDataclassTypes.flow").XmsgctaType.XmaWebUrl
					} : (L = E.content) == null ? void 0 : L.default_cta, I = o("MAWConvertMSGDataclassContentTypeToLSXmaContentType").convertMSGDataclassContentTypeToLSXmaContentType(E.target_type);
					I != null && (v = I), b = JSON.stringify(babelHelpers.extends({}, E, { content: babelHelpers.extends({}, E.content, { default_cta: k }) }));
				} catch (e) {
					r("FBLogger")("messenger_web_sharing").mustfix("Failed to parse cached receiver fetch xma dataclass"), b = void 0;
				}
				var T = yield o("MAWBridgeXMAUtils").addAttachmentCtas(t, n, a, m, y, {}), D = T.attachmentCta1Id, x = T.attachmentCta2Id, $ = T.attachmentCta3Id, P = T.defaultCtaId, N = {
					actionUrl: g != null ? g : void 0,
					attachmentCta1Id: D,
					attachmentCta2Id: x,
					attachmentCta3Id: $,
					attachmentFbid: y,
					attachmentIndex: e.zero,
					attachmentType: (s || (s = o("LSIntEnum"))).ofNumber(r("MessagingAttachmentType").XMA),
					authorityLevel: e.zero,
					defaultCtaId: P,
					hasMedia: !1,
					hasXma: !0,
					hasXmaPreview: d != null,
					isSharable: !0,
					messageId: m,
					receiverFetchId: S,
					subtitleText: p,
					threadKey: a,
					timestampMs: C,
					titleText: _,
					transportKey: "WhatsApp",
					xmaContentType: s.ofNumber(v),
					xmaDataclass: b
				};
				h != null ? yield t.attachments.upsert([
					h.threadKey,
					h.messageId,
					h.attachmentFbid
				], N) : yield t.attachments.add(N);
			}
		}), c.apply(this, arguments);
	}
	l.call = u;
}), 98);
