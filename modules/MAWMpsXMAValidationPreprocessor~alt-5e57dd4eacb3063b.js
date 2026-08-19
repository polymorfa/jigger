__d("MAWMpsXMAValidationPreprocessor", [
	"ACTSanitizerApiLazyLoader",
	"ACTSanitizerApiTypes",
	"FBLogger",
	"MAWParseXMAFBConfig",
	"MAWParseXMAProtocol",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"WAResultOrError",
	"err",
	"getErrorSafe",
	"getMediaTypeFromConsumerMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		if (e.payload != null) {
			var t = new (o("MAWProtobufDeserializers")).DeserializedMessageApplication(e.payload), n = t.subProtocol();
			if ((n == null ? void 0 : n.kind) === "consumerApplication") return n.proto;
		}
	}
	function s() {
		var t = null;
		return async function(n) {
			try {
				if (t == null) {
					var a = await o("ACTSanitizerApiLazyLoader").loadACTSanitizerApi();
					t = a.isXMAValid;
				}
				var i = t, l = i(n);
				if (l !== o("ACTSanitizerApiTypes").ACTSanitizerValidationResult.Valid) throw r("FBLogger")("mps").mustfixThrow("XMA validation failed - extendedContentMessage does not have valid XMA content");
				var s = n.associatedMessage, u = n.sentWithMessageId, c = n.targetType, d = n.xmaDataclass;
				if (c == null || !o("MAWParseXMAFBConfig").isFBSupportedTargetType({
					fbTargetType: c,
					xmaDataclass: d
				})) return r("FBLogger")("mps").warn("XMA Validation - found futureproof message"), o("WAResultOrError").makeResult();
				if (s != null && u == null) throw r("FBLogger")("mps").mustfixThrow("XMA validation failed - XMA associatedMessage cannot be received without sentWithMessageId field");
				if (s != null) {
					var m = e(s);
					if (o("getMediaTypeFromConsumerMessage").getMediaTypeFromConsumerMessage(m) != null && !o("MAWParseXMAProtocol").SUPPORTED_XMA_ASSOC_MEDIA_TARGET_TYPES.has(c)) throw r("FBLogger")("mps").mustfixThrow("XMA validation failed - XMA associated msg has unsupported media type");
				}
				return o("WAResultOrError").makeResult();
			} catch (e) {
				var p = r("getErrorSafe")(e);
				return r("FBLogger")("mps").catching(r("getErrorSafe")(p)).mustfix("XMA Validation failed for message"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", p);
			}
		};
	}
	var u = o("MpsPreprocessor").preprocessor(async function(e) {
		var t = e.ctx, n = e.payloadList, a = new Map(), i = new Array(n.length), l = s(), u = n.map(function(e, t) {
			var n, s = (n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e.message.payload).encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null || (n = n.content) == null ? void 0 : n.extendedContentMessage;
			if (s == null) {
				i[t] = e;
				return;
			}
			return l(s).then(function(n) {
				if (n.success) i[t] = e;
				else {
					var o;
					a.set(e.message.messageId, (o = n.payload) != null ? o : r("err")("XMA validation failed for message - runtime error"));
				}
			});
		}).filter(Boolean);
		return u.length > 0 && await Promise.all(u), {
			ctx: t,
			errors: a,
			payloadList: i.filter(Boolean)
		};
	}, "xma_validator");
	l.xmaValidator = s, l.MAWMpsXMAValidationPreprocessor = u;
}), 98);
