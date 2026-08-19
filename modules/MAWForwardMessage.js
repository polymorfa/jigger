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
	"Promise",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n, r) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			var a = yield o("MAWThreadId").isSecureThreadKey(e.tables, t);
			if (!a) {
				var i = yield o("MAWCreateOneToOneThread").call(e, t, void 0, "MAWForwardMessage", r), l = i.jid;
				return n(l, !0);
			}
			var s = yield o("MAWMiActOnActThreadReady").waitForACTThreadReady(e.tables, t, "MAWForwardMessage"), u = s.chatJid;
			return n(u, !1);
		}), u.apply(this, arguments);
	}
	function c(e, t, n, r, o, a) {
		return p(e, t, n, r, o, void 0, a);
	}
	function d(e, t, n, r, o) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i, l) {
			var s = o("MAWSecureAttachmentGroupingUtils").generateMediaGroupMetadataForMessageIds(a);
			yield (e || (e = n("Promise"))).allSettled([a.map(function(e) {
				return p(t, r, e, i, l, s.get(e));
			})]);
		}), m.apply(this, arguments);
	}
	function p(e, t, n, a, i, l, u) {
		var c = o("MAWExternalId").generateExternalId();
		return s(e, t, function(s, d) {
			return o("MAWGetProtocolMsgIdByMsgIdInUI").getProtocolMsgIdByMsgIdUI(n).then(function(n) {
				return n != null ? o("MAWGetEphemeralSettings").getEphemeralSetting(s, t).then(function(t) {
					var m = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "forwardMsg", {
						args: {
							args: {
								mediaGroupMetadata: l,
								source: a
							},
							chatJid: s,
							ephemeralSetting: t != null ? t : void 0,
							externalId: c,
							isFirstMsg: d,
							protocolMsgId: n,
							textWithSubstitutions: u
						},
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: i
					});
					return o("MAWMessageSendReporter").MAWMessageSendReporter({
						chatJid: s,
						externalId: c
					}, m, {
						qplEventType: r("qpl")._(25313175, "1551"),
						qplInstanceKey: i
					}, e);
				}) : o("WAResultOrError").makeResult({
					description: "unexpected null protocolMsgId",
					messageType: "fixMe"
				});
			});
		}, i);
	}
	l.maybeCreateNewThreadAndCallback = s, l.forwardMessage = c, l.forwardMessageBatch = d;
}), 98);
