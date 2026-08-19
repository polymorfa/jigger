__d("WAWebScheduledMsgDecryptInnerProto", [
	"WALogger",
	"WAWebProtobufsE2E.pb",
	"WAWebScheduledMsgCrypto",
	"decodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	async function u(e, t, n) {
		var r, o = await c(e, t, n);
		return (r = o == null ? void 0 : o.proto) != null ? r : null;
	}
	async function c(t, n, a) {
		var i;
		try {
			i = await o("WAWebScheduledMsgCrypto").decryptWithRevealKey(d(t), d(n), a);
		} catch (t) {
			return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] reveal payload decrypt failed"]))).catching(r("getErrorSafe")(t)).sendLogs("scheduled-msg-reveal-payload-decrypt-failed"), null;
		}
		var l = new Uint8Array(i);
		try {
			return {
				proto: o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, l),
				protoBytes: l
			};
		} catch (e) {
			return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[scheduled_msg] reveal payload decode failed"]))).catching(r("getErrorSafe")(e)).sendLogs("scheduled-msg-reveal-payload-decode-failed"), null;
		}
	}
	function d(e) {
		return e instanceof ArrayBuffer ? e : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
	}
	l.decryptAndDecodeRevealPayload = u, l.decryptAndDecodeRevealPayloadWithBytes = c;
}), 98);
