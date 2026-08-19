__d("MAWMpsXMAValidationPreprocessor", [
	"ACTSanitizerApiLazyLoader",
	"ACTSanitizerApiTypes",
	"FBLogger",
	"MAWParseXMAFBConfig",
	"MAWParseXMAProtocol",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"Promise",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"getMediaTypeFromConsumerMessage"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		if (e.payload != null) {
			var t = new (o("MAWProtobufDeserializers")).DeserializedMessageApplication(e.payload), n = t.subProtocol();
			if ((n == null ? void 0 : n.kind) === "consumerApplication") return n.proto;
		}
	}
	function u() {
		var e = null;
		return (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
				try {
					if (e == null) {
						var n = yield o("ACTSanitizerApiLazyLoader").loadACTSanitizerApi();
						e = n.isXMAValid;
					}
					var a = e, i = a(t);
					if (i !== o("ACTSanitizerApiTypes").ACTSanitizerValidationResult.Valid) throw r("FBLogger")("mps").mustfixThrow("XMA validation failed - extendedContentMessage does not have valid XMA content");
					var l = t.associatedMessage, u = t.sentWithMessageId, c = t.targetType, d = t.xmaDataclass;
					if (c == null || !o("MAWParseXMAFBConfig").isFBSupportedTargetType({
						fbTargetType: c,
						xmaDataclass: d
					})) return r("FBLogger")("mps").warn("XMA Validation - found futureproof message"), o("WAResultOrError").makeResult();
					if (l != null && u == null) throw r("FBLogger")("mps").mustfixThrow("XMA validation failed - XMA associatedMessage cannot be received without sentWithMessageId field");
					if (l != null) {
						var m = s(l);
						if (o("getMediaTypeFromConsumerMessage").getMediaTypeFromConsumerMessage(m) != null && !o("MAWParseXMAProtocol").SUPPORTED_XMA_ASSOC_MEDIA_TARGET_TYPES.has(c)) throw r("FBLogger")("mps").mustfixThrow("XMA validation failed - XMA associated msg has unsupported media type");
					}
					return o("WAResultOrError").makeResult();
				} catch (e) {
					var p = r("getErrorSafe")(e);
					return r("FBLogger")("mps").catching(r("getErrorSafe")(p)).mustfix("XMA Validation failed for message"), o("WAResultOrError").DEPRECATED_makeError("runtime-error", p);
				}
			});
			return function(e) {
				return t.apply(this, arguments);
			};
		})();
	}
	var c = o("MpsPreprocessor").preprocessor((function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.ctx, i = t.payloadList, l = new Map(), s = new Array(i.length), c = u(), d = i.map(function(e, t) {
				var n, a = (n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e.message.payload).encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null || (n = n.content) == null ? void 0 : n.extendedContentMessage;
				if (a == null) {
					s[t] = e;
					return;
				}
				return c(a).then(function(n) {
					if (n.success) s[t] = e;
					else {
						var o;
						l.set(e.message.messageId, (o = n.payload) != null ? o : r("err")("XMA validation failed for message - runtime error"));
					}
				});
			}).filter(Boolean);
			return d.length > 0 && (yield (e || (e = n("Promise"))).all(d)), {
				ctx: a,
				errors: l,
				payloadList: s.filter(Boolean)
			};
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	})(), "xma_validator");
	l.xmaValidator = u, l.MAWMpsXMAValidationPreprocessor = c;
}), 98);
