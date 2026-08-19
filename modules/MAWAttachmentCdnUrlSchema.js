__d("MAWAttachmentCdnUrlSchema", [
	"FBLogger",
	"MAWWormOdsLogger",
	"Promise",
	"WAHex",
	"Worm",
	"WormEAR",
	"WormIDbDriver",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		autoIncrement: !1,
		indexes: {},
		primaryKey: "objectId",
		secure: !0
	}, u = { attachmentCdnUrls: s };
	function c(t) {
		var a = t.blockingErrorThreshold, i = t.dbName, l = t.onBlockingError, s = t.qplEvent, c = t.strEncKey, d = o("WAHex").parseHex(c), m = "maw_attachment_cdn_urls", p = new (o("WormEAR")).WormEAR(u, m, d), _ = null, f = new (o("Worm")).WormDatabase(new (o("WormIDbDriver")).WormIDbDriver(i, m, u, p, o("MAWWormOdsLogger").wormOdsWorkerLogger, {
			blockingErrorThreshold: a,
			onBlockingError: l,
			onTransactionError: function(a) {
				if (a instanceof o("WormEAR").DecryptionError && (r("FBLogger")("wmi").mustfix("EAR decryption error in store: %s. Dropping corrupted entity %s", a.store, a.maybeHashedPk), a.store === "attachmentCdnUrls")) {
					var t, i, l = a.maybeHashedPk;
					r("promiseDone")((t = (i = _) == null ? void 0 : i.runInTransaction(["attachmentCdnUrls"], "readwrite", function(e) {
						return l != null ? e.stores.attachmentCdnUrls.delete(l) : e.stores.attachmentCdnUrls.clear();
					}, "delete-corrupted-entity")) != null ? t : (e || (e = n("Promise"))).resolve());
				}
			}
		}), s);
		return _ = f, f;
	}
	l.makeSchema = c;
}), 98);
