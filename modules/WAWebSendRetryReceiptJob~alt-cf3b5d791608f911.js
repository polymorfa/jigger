__d("WAWebSendRetryReceiptJob", [
	"$InternalEnum",
	"WALogger",
	"WAWap",
	"WAWebAdvSignatureApi",
	"WAWebCommsAckParser",
	"WAWebCommsWapMd",
	"WAWebCryptoCurve25519",
	"WAWebDeprecatedSendIqWorkerCompatible",
	"WAWebEphemeralDecodeBroadcastSetting",
	"WAWebHandleMsgError",
	"WAWebKyberPreKeyStore",
	"WAWebPQGatingUtils",
	"WAWebSendReceiptJobCommon",
	"WAWebSignalCommonErrors",
	"WAWebSignalConst",
	"WAWebSignalKeyApi",
	"WAWebSignalProtocolStore",
	"WAWebSignalStoreApi",
	"WAWebSignalUtilsApi",
	"WAWebUserPrefsMeUser",
	"WAWebWidFactory",
	"cr:10198",
	"cr:4533",
	"err",
	"gkx"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = 2, d = n("$InternalEnum")({
		UnknownError: 0,
		SignalErrorNoSession: 1,
		SignalErrorInvalidKey: 2,
		SignalErrorInvalidKeyId: 3,
		SignalErrorInvalidMessage: 4,
		SignalErrorInvalidSignature: 5,
		SignalErrorFutureMessage: 6,
		SignalErrorBadMac: 7,
		SignalErrorInvalidSession: 8,
		SignalErrorInvalidMsgKey: 9,
		BadBroadcastEphemeralSetting: 10,
		UnknownCompanionNoPrekey: 11,
		AdvFailure: 12,
		StatusRevokeDelay: 13
	});
	async function m(t) {
		var a = t.externalId, i = t.isPeer, l = i === void 0 ? !1 : i, u = t.isStateless, c = u === void 0 ? !1 : u, d = t.participant, m = t.rawTs, _ = t.receiptModeBitmask, f = t.recipient, g = t.retryCount, h = t.retryReason, y = t.to;
		if (r("gkx")("26258") || n("cr:10198") == null || n("cr:10198").injectDebug(y, "RetryReceiptSent", "externalId:" + a), !r("gkx")("26258")) {
			var C = n("cr:4533") == null ? void 0 : n("cr:4533").getDebugDoNotSendRetryReceipt();
			if (C != null && C > 0) return n("cr:4533") == null || n("cr:4533").setDebugDoNotSendRetryReceipt(C - 1), Promise.resolve();
		}
		try {
			var b = o("WAWebSignalProtocolStore").getSignalProtocolStore(), v = await Promise.all([b.getLocalRegistrationId(), b.getIdentityKeyPair()]), S = v[0], R = v[1];
			if (S == null || R == null) throw r("err")("No registration info found");
			var L = y.isUser() && !y.isBot() && !o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").asUserWidOrThrow(y)), E;
			try {
				E = await p(g, o("WAWebCryptoCurve25519").toCurveKeyPair(R), c, L);
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])), t).sendLogs("sendRetryReceipt: error while creating key section in retry receipt");
			}
			var k = !y.isBot() && !!(d != null && d.isBot());
			if (k) return;
			var I = o("WAWap").DROP_ATTR, T = o("WAWap").DROP_ATTR, D = o("WAWap").DROP_ATTR, x, $ = !1;
			if (y.isUser()) {
				if (x = o("WAWebCommsWapMd").DEVICE_JID(y), o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebWidFactory").asUserWidOrThrow(y))) if (l) I = "peer", $ = !0;
				else if (f) T = o("WAWebCommsWapMd").USER_JID(f);
				else return Promise.reject(r("err")("sendRetryReceipt: send retry to peer device without recipient"));
			} else x = o("WAWebCommsWapMd").CHAT_JID(y), D = d ? o("WAWebCommsWapMd").DEVICE_JID(d) : o("WAWap").DROP_ATTR;
			var P = $ ? null : o("WAWebSendReceiptJobCommon").genReceiptMetaModeNode(_ != null ? _ : 0), N = o("WAWap").wap("receipt", {
				id: o("WAWap").CUSTOM_STRING(a),
				to: x,
				participant: D,
				recipient: T,
				type: "retry",
				category: I
			}, o("WAWap").wap("retry", {
				v: "1",
				count: o("WAWap").INT(g),
				id: o("WAWap").CUSTOM_STRING(a),
				t: o("WAWap").CUSTOM_STRING(m),
				error: h != null ? o("WAWap").INT(h) : o("WAWap").DROP_ATTR
			}), o("WAWap").wap("registration", null, o("WAWap").BIG_ENDIAN_CONTENT(S)), E, P);
			return o("WAWebDeprecatedSendIqWorkerCompatible").deprecatedSendStanzaAndWaitForAck(N, o("WAWebCommsAckParser").toCoreAckTemplate({
				id: a,
				class: "receipt",
				from: y,
				participant: d,
				type: "retry"
			}));
		} catch (e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["error: ", ""])), e).sendLogs("sendRetryReceipt: error while creating or sending the retry message");
		}
	}
	async function p(e, t, n, r) {
		n === void 0 && (n = !1), r === void 0 && (r = !1);
		var a = await _({
			identityKeyPair: t,
			is1on1: r,
			isStateless: n,
			retryCount: e
		}), i = a[0], l = a[1];
		return l && (await o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(l.keyId), await o("WAWebSignalStoreApi").waSignalStore.markPreKeyAsDirectDistribution(l.keyId)), i;
	}
	async function _(e) {
		var t = e.identityKeyPair, n = e.is1on1, a = n === void 0 ? !1 : n, i = e.isStateless, l = i === void 0 ? !1 : i, s = e.retryCount, d = l || s >= c;
		if (!d) return Promise.resolve([null, null]);
		try {
			var m = await Promise.all([
				o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
				o("WAWebSignalStoreApi").waSignalStore.getOrGenSinglePreKey(o("WAWebSignalKeyApi").generatePreKeyPair),
				o("WAWebAdvSignatureApi").getADVEncodedIdentity().then(function(e) {
					return (e == null || e.byteLength === 0) && o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["getADVEncodedIdentity: sending empty device-identity"]))).sendLogs("sending-retry-response-with-empty-device-identity", { sampling: r("gkx")("26259") ? 1 : .1 }), o("WAWap").wap("device-identity", null, e);
				})
			]), p = m[0], _ = m[1], f = m[2];
			if (!p) throw r("err")("Signed pre key is not available");
			var g = null;
			if (a && o("WAWebPQGatingUtils").isPq1on1MessageEnabled() && await o("WAWebKyberPreKeyStore").isPQMigrated()) {
				var h = await o("WAWebKyberPreKeyStore").loadLatestKyberLastResortKey();
				h != null && (g = o("WAWebSignalUtilsApi").xmppPqPreKey(h));
			}
			var y = o("WAWap").wap("keys", null, o("WAWap").wap("type", null, o("WAWebSignalConst").KEY_BUNDLE_TYPE), o("WAWap").wap("identity", null, t.pubKey), o("WAWebSignalUtilsApi").xmppPreKey(_), o("WAWebSignalUtilsApi").xmppSignedPreKey(p), g, f);
			return [y, _];
		} catch (e) {
			throw r("err")("Could not create keys section for retry");
		}
	}
	function f(e) {
		if (e instanceof o("WAWebHandleMsgError").UnknownDeviceMessageError) return d.UnknownCompanionNoPrekey;
		if (e instanceof o("WAWebSignalCommonErrors").SignalDecryptionError) return e.message === "errSignalNoSession" || e.message === "errLoadSenderKeySession" ? d.SignalErrorNoSession : e.message === "errSignalInvalidMsg" ? d.SignalErrorInvalidMessage : e.message === "errSignalInvalidKey" ? d.SignalErrorInvalidKey : e.message === "errSignalTooManyMessagesInFuture" || e.message === "errSignalGrpTooManyMessagesInFuture" ? d.SignalErrorFutureMessage : e.message === "errInvalidMacWithDecryptedPlaintext" || e.message === "errInvalidMacInvalidCipherKey" || e.message === "errInvalidMacInvalidCipherKeyNewChain" ? d.SignalErrorBadMac : void 0;
		if (e instanceof o("WAWebEphemeralDecodeBroadcastSetting").BroadcastEphSettingsError) return d.BadBroadcastEphemeralSetting;
	}
	l.RetryReason = d, l.sendRetryReceipt = m, l.getRetryReasonFromError = f;
}), 98);
