__d("MAWCacheServiceDB", [
	"FBLogger",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWWormOdsLogger",
	"MessengerWebInitData",
	"Promise",
	"WAHex",
	"Worm",
	"WormDump",
	"WormEAR",
	"WormIDbDriver",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		autoIncrement: !0,
		indexes: { key: {
			fields: ["key"],
			unique: !0
		} },
		primaryKey: "id",
		secure: !0
	}, u = { snippets: s }, c = null, d = function(t, n, a) {
		var e = "maw_cache_service", i = new (o("WormEAR")).WormEAR(a, e, n), l = new (o("WormIDbDriver")).WormIDbDriver(t, e, a, i, o("MAWWormOdsLogger").wormOdsWorkerLogger, { onTransactionError: p });
		return new (o("Worm")).WormDatabase(l, r("qpl")._(1056840657, "2716"));
	};
	function m() {
		return c !== null || (c = new (e || (e = (n("Promise"))))((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					var n = d(o("MAWIndexedDbMetadata").MAWcacheServiceDbName(o("MAWCurrentUser").getID()), o("WAHex").parseHex(r("MessengerWebInitData").accountKeyV2), u);
					yield n.init(), e(n);
				} catch (e) {
					var a = r("getErrorSafe")(e);
					r("FBLogger")("messenger_web").catching(a).mustfix("Failed to create cache service DB"), c = null, t(a);
				}
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})())), c;
	}
	function p(e) {
		if (e instanceof o("WormEAR").DecryptionError) {
			var t = e;
			r("FBLogger")("MAWCacheService").mustfix("EAR decryption error in store: %s. Attempting to delete the store:", t.store), r("promiseDone")(m().then(function(e) {
				return e.runInTransaction([t.store], "readwrite", function(e) {
					return e.stores[t.store].clear();
				}, "delete-corrupted-entity");
			}).then(function() {
				r("FBLogger")("MAWCacheService").info("Successfully deleted corrupted store %s", t.store);
			}).catch(function(e) {
				var n = r("getErrorSafe")(e);
				r("FBLogger")("MAWCacheService").catching(n).mustfix("Failed to delete corrupted store %s, err: %s", t.store, n.message);
			}));
		}
	}
	function _(e) {
		return e.map(function(e) {
			var t = e[0], n = e[1];
			return n;
		});
	}
	function f() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield m();
			return e.dump({ snippets: { customFields: {
				id: o("WormDump").wormNonSensitiveField,
				key: o("WormDump").wormNonSensitiveField,
				timestamp: o("WormDump").wormNonSensitiveField,
				value: function(t) {
					var e;
					return {
						snippet: (e = o("WormDump")).wormRedact(t.snippet),
						snippetMsgAckLevel: e.wormNonSensitiveField(t.snippetMsgAckLevel),
						snippetMsgId: e.wormNonSensitiveField(t.snippetMsgId),
						snippetNewestIncomingMsgs: e.wormNonSensitiveField(t.snippetNewestIncomingMsgs),
						snippetReactionId: e.wormRedact(t.snippetReactionId)
					};
				}
			} } });
		}), g.apply(this, arguments);
	}
	l.getOrSetupMAWCacheDB = m, l.convertCacheValueToDBRawValue = _, l.getDbDump = f;
}), 98);
