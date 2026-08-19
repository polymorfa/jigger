__d("WAWebMsgProcessingDecryptEnc", [
	"WAWebBackendJobs.flow",
	"WAWebBotMessageSecret",
	"WAWebMsgProcessingApiUtils",
	"WAWebOrphanBotMsgError",
	"WAWebSignal",
	"WAWebWasaRootSecretWriter",
	"err"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.enc, n = e.from, a = e.parsedMsgPayload, i = e.participant, l = e.sessionScope, u = t.ciphertext, c = t.e2eType;
		return c === o("WAWebBackendJobs.flow").CiphertextType.Skmsg ? (function() {
			return n.isGroup() || n.isBroadcast() ? i ? o("WAWebSignal").Cipher.decryptGroupSignalProto({
				ciphertext: u,
				sender: i,
				target: n
			}) : Promise.reject(r("err")("['messaging'] decryptEnc: receive msg from " + n.toString() + " without participant")) : Promise.reject(r("err")("['messaging'] decryptEnc: Can not do skmsg for non group " + n.toString()));
		})() : c === o("WAWebBackendJobs.flow").CiphertextType.Pkmsg || c === o("WAWebBackendJobs.flow").CiphertextType.Msg ? (function() {
			var e = n.isUser() ? n : i;
			if (!e) return Promise.reject(r("err")("['messaging'] decryptEnc: receive msg from " + n.toString() + " without participant"));
			var s = o("WAWebMsgProcessingApiUtils").shouldOmitSessionPersistence(c, a, t, e);
			return o("WAWebSignal").Cipher.decryptSignalProto(e, c, u, s, l);
		})() : c === o("WAWebBackendJobs.flow").CiphertextType.Msmsg ? s(u, a) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + c);
		})();
	}
	async function s(e, t) {
		try {
			return await o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
		} catch (a) {
			if (!(a instanceof r("WAWebOrphanBotMsgError"))) throw a;
			var n = await u(t);
			if (n) return o("WAWebBotMessageSecret").decryptMsmsgBotMessage(e, t);
			throw a;
		}
	}
	async function u(e) {
		var t, n = e.msgInfo, r = e.msgMeta, a = r.targetId;
		if (a == null) return !1;
		var i = (t = r.targetChatJid) != null ? t : n.chat;
		return o("WAWebWasaRootSecretWriter").maybeRecoverWasaRootSecretFromStore(i, a);
	}
	l.decryptEnc = e;
}), 98);
