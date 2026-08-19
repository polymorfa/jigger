__d("MWEncryptedBackupsRetrieveQplLoggingAnnotations", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MWEncryptedBackupsDeferLocalStorageUpsell",
	"MWEncryptedBackupsFirstRestoreUpsellTime",
	"MWEncryptedBackupsLocalStorageEntryEnum",
	"MWEncryptedBackupsSharedState",
	"Promise",
	"ReQL",
	"gkx",
	"promiseDone",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("requireDeferred")("MWEBUseLocalStorage").__setRef("MWEncryptedBackupsRetrieveQplLoggingAnnotations"), d = r("gkx")("609");
	function m(t) {
		var a = t.db, i = t.onFetch, l = t.upsellType;
		r("promiseDone")((u || (u = n("Promise"))).all([o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(a.tables.experiences_shared_state)), o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(a.tables.secure_encrypted_backups_client_state))]), function(t) {
			var n = t[0], u = t[1], m = u[0], p = o("MWEncryptedBackupsFirstRestoreUpsellTime").getFirstRestoreUpsellTime(), _ = o("MWEncryptedBackupsSharedState").getEntryValueFromSharedState({
				db: a,
				sharedStateTable: n,
				stateKey: r("MWEncryptedBackupsLocalStorageEntryEnum").ENCRYPTED_BACKUPS_ONBOARDED_SUCCESSFULLY
			}), f = o("MWEncryptedBackupsSharedState").getIsEntryPresentInSharedState({
				db: a,
				sharedStateTable: n,
				stateKey: "auto_restored"
			});
			c.onReady(function(t) {
				var u = t.mwEBGetIsLocalStorageEntryValuePresent, c = t.mwEBGetLocalStorageEntryValue, g = c(r("MWEncryptedBackupsLocalStorageEntryEnum").EBSM_CORRUPTION_WIPE), h = u(r("MWEncryptedBackupsLocalStorageEntryEnum").MW_EB_HAS_RESTORED_IN_CURRENT_SESSION), y = u(r("MWEncryptedBackupsLocalStorageEntryEnum").MW_EB_HAS_RESTORED_IN_CURRENT_SESSION_2), C = _ != null, b = l && o("MWEncryptedBackupsDeferLocalStorageUpsell").getUpsellImpressions({
					db: a,
					sharedStateTable: n,
					upsellType: l
				}), v = m != null && (e || (e = o("I64"))).equal(m.authorityLevel, (s || (s = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE));
				i({
					ebsmWiped: g != null ? g : "false",
					firstUpsellTime: p,
					hasEbKeysLocally: f ? "false" : v.toString(),
					hasEBSM: d.toString(),
					hasPDB: "false",
					hasUserOnboardedBefore: C.toString(),
					hasUserRestoredBefore: h.toString(),
					hasUserRestoredBeforeTemp: y.toString(),
					impressionsCount: b != null ? b : "0"
				});
			});
		}, function() {
			r("FBLogger")("wmi_eb").mustfix("[Encrypted Backups] Failed to fetch QPL annotations from Shared State");
		});
	}
	l.encryptedBackupsRetrieveQplLoggingAnnotations = m;
}), 98);
