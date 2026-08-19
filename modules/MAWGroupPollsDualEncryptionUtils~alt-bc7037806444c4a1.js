__d("MAWGroupPollsDualEncryptionUtils", [
	"MAWDbPoll",
	"WABase64",
	"WAConsumerApplication.pb",
	"WACryptoAesGcm",
	"WACryptoSha256",
	"WAResultOrError",
	"WAUseCaseSecret",
	"decodeProtobuf",
	"encodeProtobuf",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t, n) {
		if (e.encIv == null || e.encPayload == null) return o("WAResultOrError").makeError("invalid_poll_enc_value");
		var a = e.encIv, i = e.encPayload;
		try {
			var l = await o("WACryptoAesGcm").gcmDecrypt(t, a, i, n);
			return o("WAResultOrError").makeResult(l);
		} catch (e) {
			return o("WAResultOrError").DEPRECATED_makeError("decryption_error", r("getErrorSafe")(e));
		}
	}
	async function s(e, t, n) {
		try {
			var a = self.crypto.getRandomValues(new Uint8Array(12)), i = await o("WACryptoAesGcm").gcmEncrypt(t, a, e, n);
			return o("WAResultOrError").makeResult({
				encIv: a.buffer,
				encPayload: i
			});
		} catch (e) {
			return o("WAResultOrError").DEPRECATED_makeError("encryption_error", r("getErrorSafe")(e));
		}
	}
	function u(e, t) {
		var n = e + "\0" + t;
		return new TextEncoder().encode(n).buffer;
	}
	async function c(e, t) {
		var n = t.pollCreationMessageKey, r = t.pollCreationSenderJid, a = t.pollCreationStanzaId, i = t.pollUpdateSenderJid, l = t.pollUpdateStanzaId, c = await o("WAUseCaseSecret").createUseCaseSecret({
			messageSecret: n,
			modificationSender: i,
			modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
			parentMsgOriginalSender: r,
			stanzaId: a
		}), d = u(l, i), m = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollVoteMessageSpec, e).readBuffer();
		return s(m, c, d);
	}
	async function d(t, n) {
		var a = n.pollCreationMessageKey, i = n.pollCreationSenderJid, l = n.pollCreationStanzaId, s = n.pollUpdateSenderJid, c = n.pollUpdateStanzaId, d = await o("WAUseCaseSecret").createUseCaseSecret({
			messageSecret: a,
			modificationSender: s,
			modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
			parentMsgOriginalSender: i,
			stanzaId: l
		}), m = u(c, s), p = await e(t, d, m);
		if (!p.success) return p;
		try {
			return o("WAResultOrError").makeResult(o("decodeProtobuf").decodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollVoteMessageSpec, p.value));
		} catch (e) {
			return o("WAResultOrError").DEPRECATED_makeError("protobuf_decode_error", r("getErrorSafe")(e));
		}
	}
	async function m(e, t) {
		var n = t.pollCreationMessageKey, r = t.pollCreationSenderJid, a = t.pollCreationStanzaId, i = t.pollUpdateSenderJid, l = t.pollUpdateStanzaId, c = await o("WAUseCaseSecret").createUseCaseSecret({
			messageSecret: n,
			modificationSender: i,
			modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
			parentMsgOriginalSender: r,
			stanzaId: a
		}), d = u(l, i), m = o("encodeProtobuf").encodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollAddOptionMessageSpec, e).readBuffer();
		return s(m, c, d);
	}
	async function p(t, n) {
		var a = n.pollCreationMessageKey, i = n.pollCreationSenderJid, l = n.pollCreationStanzaId, s = n.pollUpdateSenderJid, c = n.pollUpdateStanzaId, d = await o("WAUseCaseSecret").createUseCaseSecret({
			messageSecret: a,
			modificationSender: s,
			modificationType: o("WAUseCaseSecret").UseCaseSecretModificationType.POLL_VOTE,
			parentMsgOriginalSender: i,
			stanzaId: l
		}), m = u(c, s), p = await e(t, d, m);
		if (!p.success) return p;
		try {
			return o("WAResultOrError").makeResult(o("decodeProtobuf").decodeProtobuf(o("WAConsumerApplication.pb").ConsumerApplication$PollAddOptionMessageSpec, p.value));
		} catch (e) {
			return o("WAResultOrError").DEPRECATED_makeError("protobuf_decode_error", r("getErrorSafe")(e));
		}
	}
	async function _(e) {
		var t = await o("WACryptoSha256").sha256(new TextEncoder("utf8").encode(e));
		return f(t);
	}
	function f(e) {
		return o("MAWDbPoll").convertStringToOptionHash(o("WABase64").encodeB64(e));
	}
	l.encryptGroupPollVote = c, l.decryptGroupPollVote = d, l.encryptGroupPollAddOption = m, l.decryptGroupPollAddOption = p, l.getHashForOptionName = _, l.getBase64EncodedHash = f;
}), 98);
