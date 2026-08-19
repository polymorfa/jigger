__d("EBGetClientState", [
	"EBLogger",
	"EBMinosInterfaceTypes",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u;
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var a = n != null ? yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.secure_encrypted_backups_client_state)) : yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.secure_encrypted_backups_client_state)), i = n != null ? yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(n.secure_encrypted_backups_epochs)) : yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(t.tables.secure_encrypted_backups_epochs)), l = i.filter(function(e) {
				return (s || (s = o("I64"))).equal(e.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE));
			}).map(function(e) {
				return (s || (s = o("I64"))).to_string(e.epochId);
			});
			if (a == null) {
				o("EBLogger").EBLogger("wmi").MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth][web Client state is null - unable to proceed with GQL restore"])));
				return;
			}
			var c = (a == null ? void 0 : a.deviceId) != null ? o("EBMinosInterfaceTypes").unsafeCastToDeviceId((s || (s = o("I64"))).to_string(a == null ? void 0 : a.deviceId)) : null, d = a.mailboxRootKeyBlob, m = a.ocmfClientStateBlob, p = o("EBMinosInterfaceTypes").unsafeCastToBackupFbid((s || (s = o("I64"))).to_string(a.backupId)), _ = a.encryptionVersion;
			return {
				backupId: p,
				deviceId: c,
				encryptionVersion: _,
				locally_available_epochs: l,
				mailboxRootKey: d,
				ocmfClientStateBlob: m
			};
		}), d.apply(this, arguments);
	}
	l.getClientState = c;
}), 98);
