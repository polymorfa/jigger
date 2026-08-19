__d("MAWForwardMessage", [
	"MAWBridgeSendAndReceive",
	"MAWCreateOneToOneThread",
	"MAWExternalId",
	"MAWGetEphemeralSettings",
	"MAWGetProtocolMsgIdByMsgIdInUI",
	"MAWMessageSendReporter",
	"MAWMiActOnActThreadReady",
	"MAWSecureAttachmentGroupingUtils",
	"MAWThreadId",
	"WAResultOrError",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n, r) {
		var a = await o("MAWThreadId").isSecureThreadKey(e.tables, t);
		if (!a) {
			var i = await o("MAWCreateOneToOneThread").call(e, t, void 0, "MAWForwardMessage", r), l = i.jid;
			return n(l, !0);
		}
		var s = await o("MAWMiActOnActThreadReady").waitForACTThreadReady(e.tables, t, "MAWForwardMessage"), u = s.chatJid;
		return n(u, !1);
	}
	function s(e, t, n, r, o, a) {
		return c(e, t, n, r, o, void 0, a);
	}
	async function u(e, t, n, r, a) {
		var i = o("MAWSecureAttachmentGroupingUtils").generateMediaGroupMetadataForMessageIds(n);
		await Promise.allSettled([n.map(function(n) {
			return c(e, t, n, r, a, i.get(n));
		})]);
	}
	function c(t, n, a, i, l, s, u) {
		var c = o("MAWExternalId").generateExternalId();
		return e(t, n, function(e, d) {
			return o("MAWGetProtocolMsgIdByMsgIdInUI").getProtocolMsgIdByMsgIdUI(a).then(function(a) {
				return a != null ? o("MAWGetEphemeralSettings").getEphemeralSetting(e, n).then(function(n) {
					var m = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "forwardMsg", {
						args: {
							args: {
								mediaGroupMetadata: s,
								source: i
							},
							chatJid: e,
							ephemeralSetting: n != null ? n : void 0,
							externalId: c,
							isFirstMsg: d,
							protocolMsgId: a,
							textWithSubstitutions: u
						},
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: l
					});
					return o("MAWMessageSendReporter").MAWMessageSendReporter({
						chatJid: e,
						externalId: c
					}, m, {
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: l
					}, t);
				}) : o("WAResultOrError").makeResult({
					description: "unexpected null protocolMsgId",
					messageType: "fixMe"
				});
			});
		}, l);
	}
	l.maybeCreateNewThreadAndCallback = e, l.forwardMessage = s, l.forwardMessageBatch = u;
}), 98);
