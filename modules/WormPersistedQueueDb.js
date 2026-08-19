__d("WormPersistedQueueDb", [
	"FBLogger",
	"Promise",
	"WAResolvable",
	"WormEAR",
	"WormPersistedQueueSchema",
	"asyncToGeneratorRuntime",
	"err",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = new (o("WAResolvable")).Resolvable();
	function c(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = t.blockingErrorThreshold, i = t.dbName, l = t.onBlockingError, c = t.qplEvent, d = t.strEncKey;
			try {
				var m = o("WormPersistedQueueSchema").makePersistedQueueSchema(i, d, a, l, function(t) {
					if (t instanceof o("WormEAR").DecryptionError) {
						var a, i, l = t;
						r("FBLogger")("messenger_web").mustfix("EAR decryption error in store: %s. Dropping corrupted entity", l.store), r("promiseDone")((a = (i = s) == null ? void 0 : i.runInTransaction([l.store], "readwrite", function(e) {
							var t = e.stores[l.store];
							return l.maybeHashedPk != null ? t.delete(l.maybeHashedPk) : t.clear();
						}, "delete-corrupted-entity")) != null ? a : (e || (e = n("Promise"))).resolve());
					}
				}, c);
				return s = m, yield m.init(), u.resolve(m), m;
			} catch (e) {
				throw r("FBLogger")("messenger_web").catching(r("getErrorSafe")(e)).mustfix("Error performing WORM PersistedQueue init"), e;
			}
		}), d.apply(this, arguments);
	}
	function m() {
		if (s == null) throw r("err")("PersistedQueue is not initialized");
		return s;
	}
	function p() {
		return u.promise;
	}
	l.makePersistedQueueDb = c, l.getPersistedQueues = m, l.getDbPromise = p;
}), 98);
