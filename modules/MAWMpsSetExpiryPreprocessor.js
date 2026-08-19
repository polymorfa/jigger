__d("MAWMpsSetExpiryPreprocessor", [
	"FBLogger",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"MpsTypes",
	"WAResultOrError",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n, r = e.payload, a = e.timestampMs, i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(r), l = (t = (n = i.encryptedTransportMessage()) == null || (n = n.proto.metadata) == null || (n = n.chatEphemeralSetting) == null ? void 0 : n.ephemeralExpiration) != null ? t : 0;
		if (!(l <= 0)) return o("MpsTypes").toTimestamp(a + l * 1e3);
	}
	function s(t) {
		var n = t.directive, r = t.insertionSource, a = t.message, i = n.actionType === o("MpsTypes").ActionType.UpsertTopLevel || n.actionType === o("MpsTypes").ActionType.DeleteTopLevel || n.actionType === o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder;
		if (!i) return t;
		var l = e(a);
		return l == null ? t : {
			directive: babelHelpers.extends({}, n, {
				expiryTimestampMs: l,
				isLocalOnly: !0
			}),
			insertionSource: r,
			message: a
		};
	}
	function u(e) {
		try {
			return o("WAResultOrError").makeResult(s(e));
		} catch (e) {
			var t = r("getErrorSafe")(e);
			return r("FBLogger")("mps").catching(t).mustfix("SetExpiry Preprocess failed"), o("WAResultOrError").makeError(t);
		}
	}
	var c = o("MpsPreprocessor").preprocessor(function(e) {
		var t = e.ctx, n = e.payloadList, r = new Map(), o = [];
		return n.forEach(function(e) {
			var t = u(e);
			t.success ? o.push(t.value) : r.set(e.message.messageId, t.error);
		}), {
			ctx: t,
			errors: r,
			payloadList: o
		};
	}, "set_expiry");
	l.getEphemerality = e, l.MAWMpsSetExpiryPreprocessor = c;
}), 98);
