__d("EBMessageProbeSamplingPreprocessor", [
	"EBMessageContentType",
	"EBMessageProbe",
	"FBLogger",
	"MAWEBLSInWorkerSwitch",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"MpsTypes",
	"WAJids",
	"WATimeUtils",
	"getErrorSafe",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n = e.insertionSource, a = e.message, i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(a.payload), l = (t = i.proto.metadata) == null ? void 0 : t.timestampMs, u = l != null ? Number(l) : a.timestampMs, c = o("EBMessageContentType").determineMessageType(i), d = o("WAJids").unsafeCoerceToChatJid(a.threadId), m = a.messageId;
		if (c === "revoked") {
			var p = s(i);
			if (p == null) return r("FBLogger")("wmi_eb").mustfix("Revoked message missing original message ID, skipping sampling"), null;
			m = p;
		}
		return {
			chatJid: d,
			insertionSource: String(n),
			markers: [],
			messageId: m,
			messageType: c != null ? c : "unknown",
			senderId: a.senderId,
			timestampMs: o("WATimeUtils").castToMillisTime(u)
		};
	}
	function s(e) {
		var t, n = e.payload();
		if ((n == null ? void 0 : n.kind) !== "messageApplication") return null;
		var r = n.subProtocol();
		if ((r == null ? void 0 : r.kind) !== "consumerApplication") return null;
		var a = (t = r.payload) == null || (t = t.applicationData) == null || (t = t.revoke) == null || (t = t.key) == null ? void 0 : t.id;
		return a != null ? o("MpsTypes").toMessageId(a) : null;
	}
	function u(e) {
		return o("EBMessageContentType").isDeleteMessageType(e) ? r("gkx")("7963") : !0;
	}
	function c(t) {
		try {
			var n = e(t);
			if (n == null || !u(n.messageType)) return null;
			var a = o("EBMessageProbe").getEBMessageProbeInstance();
			return a.sample(n), a.hasStarted() || a.start(), null;
		} catch (e) {
			return r("getErrorSafe")(e);
		}
	}
	function d(e) {
		return e === o("MpsTypes").ActionType.UpsertTopLevel || e === o("MpsTypes").ActionType.DeleteTopLevel || e === o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder || e === o("MpsTypes").ActionType.DeleteSupplemental;
	}
	var m = o("MpsPreprocessor").preprocessor(function(e) {
		var t = e.ctx, n = e.payloadList;
		return r("MAWEBLSInWorkerSwitch").isEnabled() ? n.forEach(function(e) {
			if (d(e.directive.actionType) && !e.directive.isLocalOnly) {
				var t = c(e);
				t != null && r("FBLogger")("wmi_eb").warn("Failed to sample message for probe: %s", t.message);
			}
		}) : t.messageToQpl.all().addPoint("eb_message_probe_sampling_skipped"), {
			ctx: t,
			errors: new Map(),
			payloadList: n
		};
	}, "eb_message_probe_sampling");
	l.determineMessageType = o("EBMessageContentType").determineMessageType, l.isDeleteMessageType = o("EBMessageContentType").isDeleteMessageType, l.EBMessageProbeSamplingPreprocessor = m;
}), 98);
