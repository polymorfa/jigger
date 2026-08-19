__d("MAWGroupPollsDualEncryptionUtils", [
	"MAWDbPoll",
	"WABase64",
	"WAConsumerApplication.pb",
	"WACryptoAesGcm",
	"WACryptoSha256",
	"WAResultOrError",
	"WAUseCaseSecret",
	"asyncToGeneratorRuntime",
	"decodeProtobuf",
	"encodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			if (e.encIv == null || e.encPayload == null) return o("WAResultOrError").makeError("invalid_poll_enc_value");
			var a = e.encIv, i = e.encPayload;
			try {
				var l = yield o("WACryptoAesGcm").gcmDecrypt(t, a, i, n);
				return o("WAResultOrError").makeResult(l);
			} catch (e) {
				return o("WAResultOrError").DEPRECATED_makeError("decryption_error", r("getErrorSafe")(e));
			}
		}), s.apply(this, arguments);
	}
	function u(e, t, n) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			try {
				var a = self.crypto.getRandomValues(new Uint8Array(12)), i = yield o("WACryptoAesGcm").gcmEncrypt(t, a, e, n);
				return o("WAResultOrError").makeResult({
					encIv: a.buffer,
					encPayload: i
				});
			} catch (e) {
				return o("WAResultOrError").DEPRECATED_makeError("encryption_error", r("getErrorSafe")(e));
			}
		}), c.apply(this, arguments);
	}
	function d(e, t) {
		var n = e + "\0" + t;
		return new TextEncoder().encode(n).buffer;
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.pollCreationMessageKey, r = t.pollCreationSenderJid, a = t.pollCreationStanzaId, i = t.pollUpdateSenderJid, l = t.pollUpdateStanzaId, s = yield o("WAUseCaseSecret").createUseCaseSecret({
				messageSecret: n,
				modificationSender: i,
				modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
				parentMsgOriginalSender: r,
				stanzaId: a
			}), c = d(l, i), m = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollVoteMessageSpec, e).readBuffer();
			return u(m, s, c);
		}), p.apply(this, arguments);
	}
	function _(e, t) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a = n.pollCreationMessageKey, i = n.pollCreationSenderJid, l = n.pollCreationStanzaId, s = n.pollUpdateSenderJid, u = n.pollUpdateStanzaId, c = yield o("WAUseCaseSecret").createUseCaseSecret({
				messageSecret: a,
				modificationSender: s,
				modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
				parentMsgOriginalSender: i,
				stanzaId: l
			}), m = d(u, s), p = yield e(t, c, m);
			if (!p.success) return p;
			try {
				return o("WAResultOrError").makeResult(o("decodeProtobuf").decodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollVoteMessageSpec, p.value));
			} catch (e) {
				return o("WAResultOrError").DEPRECATED_makeError("protobuf_decode_error", r("getErrorSafe")(e));
			}
		}), f.apply(this, arguments);
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = t.pollCreationMessageKey, r = t.pollCreationSenderJid, a = t.pollCreationStanzaId, i = t.pollUpdateSenderJid, l = t.pollUpdateStanzaId, s = yield o("WAUseCaseSecret").createUseCaseSecret({
				messageSecret: n,
				modificationSender: i,
				modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
				parentMsgOriginalSender: r,
				stanzaId: a
			}), c = d(l, i), m = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollAddOptionMessageSpec, e).readBuffer();
			return u(m, s, c);
		}), h.apply(this, arguments);
	}
	function y(e, t) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a = n.pollCreationMessageKey, i = n.pollCreationSenderJid, l = n.pollCreationStanzaId, s = n.pollUpdateSenderJid, u = n.pollUpdateStanzaId, c = yield o("WAUseCaseSecret").createUseCaseSecret({
				messageSecret: a,
				modificationSender: s,
				modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
				parentMsgOriginalSender: i,
				stanzaId: l
			}), m = d(u, s), p = yield e(t, c, m);
			if (!p.success) return p;
			try {
				return o("WAResultOrError").makeResult(o("decodeProtobuf").decodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollAddOptionMessageSpec, p.value));
			} catch (e) {
				return o("WAResultOrError").DEPRECATED_makeError("protobuf_decode_error", r("getErrorSafe")(e));
			}
		}), C.apply(this, arguments);
	}
	function b(e) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("WACryptoSha256").sha256(new TextEncoder("utf8").encode(e));
			return S(t);
		}), v.apply(this, arguments);
	}
	function S(e) {
		return o("MAWDbPoll").convertStringToOptionHash(o("WABase64").encodeB64(e));
	}
	l.encryptGroupPollVote = m, l.decryptGroupPollVote = _, l.encryptGroupPollAddOption = g, l.decryptGroupPollAddOption = y, l.getHashForOptionName = b, l.getBase64EncodedHash = S;
}), 98);
