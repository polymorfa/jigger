__d("WAWebKeyManagementHandleKeyRequestApi", [
	"WALogger",
	"WASyncdKeyTypes",
	"WAWebPersistedJobDefinitions",
	"WAWebPersistedJobManagerWorkerCompatible",
	"WAWebSyncdCryptoUtils",
	"WAWebSyncdHandleKeyRequest",
	"WAWebUserPrefsMeUser",
	"compactMap"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	async function d(t, n) {
		if (!o("WAWebUserPrefsMeUser").isMeAccount(n)) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["syncd: key request wid error"]))).sendLogs("syncd: key request wid error");
			return;
		}
		var a = t.keyIds;
		if (a) {
			var i = r("compactMap")(a, function(e) {
				return e.keyId;
			}).map(o("WASyncdKeyTypes").toSyncKeyId);
			if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[syncd] handleAppStateSyncKeyRequest device=",
				" keyIds=[",
				"]"
			])), n.getDeviceId(), i.map(o("WAWebSyncdCryptoUtils").syncKeyIdToHex)), i) {
				var l = await o("WAWebSyncdHandleKeyRequest").getKeysForKeyRequest(i), d = l.keys, m = l.orphanKeys;
				return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[syncd] handleAppStateSyncKeyRequest -> share device=", ""])), n.getDeviceId()), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
					"[syncd] keys=[",
					"] orphans=[",
					"]"
				])), d.map(function(e) {
					return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
				}), m.map(function(e) {
					return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e);
				})), o("WAWebPersistedJobManagerWorkerCompatible").getJobManager().waitUntilPersisted(o("WAWebPersistedJobDefinitions").jobSerializers.sendRequestedKeyShare(d, m, n));
			}
		}
	}
	l.handleAppStateSyncKeyRequest = d;
}), 98);
