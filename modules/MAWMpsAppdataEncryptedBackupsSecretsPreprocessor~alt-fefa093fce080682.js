__d("MAWMpsAppdataEncryptedBackupsSecretsPreprocessor", [
	"FBLogger",
	"MAWHandleEncryptedBackupsSecretsApi",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"MpsTypes",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.backupId, n = e.epoch, a = e.mailboxRootKey, i = e.obliviousValidationToken, l = e.serverDataId, s = e.tempOcmfClientState;
		if (t == null || n == null || a == null || i == null || l == null || s == null) return r("FBLogger")("mps").warn("Cannot process encrypted backups secrets - mandatory data missing"), Promise.resolve();
		var u = n.map(function(e) {
			var t = e.anonId, n = e.id, o = e.rootKey, a = e.status;
			return t == null || n == null || o == null || a == null ? (r("FBLogger")("mps").warn("Encountered invalid epoch when processing encrypted backups secrets"), null) : {
				anonId: t,
				id: n,
				rootKey: o,
				status: a
			};
		}).filter(Boolean), c = {
			backupId: t,
			epoch: u,
			mailboxRootKey: a,
			obliviousValidationToken: i,
			serverDataId: l,
			tempOcmfClientState: s
		};
		return o("MAWHandleEncryptedBackupsSecretsApi").handleEncryptedBackupsSecret(c);
	}
	async function s(t, n) {
		return await e(n), {
			directive: {
				actionType: o("MpsTypes").ActionType.Noop,
				debugFlags: ["WA"],
				isLocalOnly: !1,
				isTransportErrorPlaceholder: !1,
				tags: [],
				targetMessageId: t.message.messageId
			},
			insertionSource: t.insertionSource,
			message: t.message
		};
	}
	var u = o("MpsPreprocessor").preprocessor(async function(e) {
		var t = e.ctx, n = e.payloadList, a = new Map(), i = new Array(n.length), l = n.map(function(e, t) {
			var n, l = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e.message.payload);
			if (l.payload().kind !== "messageApplication") {
				i[t] = e;
				return;
			}
			var u = (n = l.encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null || (n = n.signal) == null ? void 0 : n.encryptedBackupsSecrets;
			if (u == null) {
				i[t] = e;
				return;
			}
			return s(e, u).then(function(e) {
				i[t] = e;
			}).catch(function(t) {
				a.set(e.message.messageId, r("getErrorSafe")(t));
			});
		});
		return l.length > 0 && await Promise.all(l), {
			ctx: t,
			errors: a,
			payloadList: i
		};
	}, "eb_appdata_secret");
	l.MAWMpsAppdataEncryptedBackupsSecretsPreprocessor = u;
}), 98);
