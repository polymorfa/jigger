__d("MAWMpsAppdataEncryptedBackupsSecretsPreprocessor", [
	"FBLogger",
	"MAWHandleEncryptedBackupsSecretsApi",
	"MAWProtobufDeserializers",
	"MpsPreprocessor",
	"MpsTypes",
	"Promise",
	"asyncToGeneratorRuntime",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		var a = t.backupId, i = t.epoch, l = t.mailboxRootKey, s = t.obliviousValidationToken, u = t.serverDataId, c = t.tempOcmfClientState;
		if (a == null || i == null || l == null || s == null || u == null || c == null) return r("FBLogger")("mps").warn("Cannot process encrypted backups secrets - mandatory data missing"), (e || (e = n("Promise"))).resolve();
		var d = i.map(function(e) {
			var t = e.anonId, n = e.id, o = e.rootKey, a = e.status;
			return t == null || n == null || o == null || a == null ? (r("FBLogger")("mps").warn("Encountered invalid epoch when processing encrypted backups secrets"), null) : {
				anonId: t,
				id: n,
				rootKey: o,
				status: a
			};
		}).filter(Boolean), m = {
			backupId: a,
			epoch: d,
			mailboxRootKey: l,
			obliviousValidationToken: s,
			serverDataId: u,
			tempOcmfClientState: c
		};
		return o("MAWHandleEncryptedBackupsSecretsApi").handleEncryptedBackupsSecret(m);
	}
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			return yield s(t), {
				directive: {
					actionType: o("MpsTypes").ActionType.Noop,
					debugFlags: ["WA"],
					isLocalOnly: !1,
					isTransportErrorPlaceholder: !1,
					tags: [],
					targetMessageId: e.message.messageId
				},
				insertionSource: e.insertionSource,
				message: e.message
			};
		}), c.apply(this, arguments);
	}
	var d = o("MpsPreprocessor").preprocessor((function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.ctx, i = t.payloadList, l = new Map(), s = new Array(i.length), c = i.map(function(e, t) {
				var n, a = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(e.message.payload);
				if (a.payload().kind !== "messageApplication") {
					s[t] = e;
					return;
				}
				var i = (n = a.encryptedTransportMessage()) == null || (n = n.armadillo()) == null || (n = n.payload) == null || (n = n.signal) == null ? void 0 : n.encryptedBackupsSecrets;
				if (i == null) {
					s[t] = e;
					return;
				}
				return u(e, i).then(function(e) {
					s[t] = e;
				}).catch(function(t) {
					l.set(e.message.messageId, r("getErrorSafe")(t));
				});
			});
			return c.length > 0 && (yield (e || (e = n("Promise"))).all(c)), {
				ctx: a,
				errors: l,
				payloadList: s
			};
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	})(), "eb_appdata_secret");
	l.MAWMpsAppdataEncryptedBackupsSecretsPreprocessor = d;
}), 98);
