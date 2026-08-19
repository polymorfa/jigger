__d("MAWCacheServiceDB", [
	"FBLogger",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWWormOdsLogger",
	"MessengerWebInitData",
	"WAHex",
	"Worm",
	"WormDump",
	"WormEAR",
	"WormIDbDriver",
	"getErrorSafe",
	"promiseDone",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		autoIncrement: !0,
		indexes: { key: {
			fields: ["key"],
			unique: !0
		} },
		primaryKey: "id",
		secure: !0
	}, s = { snippets: e }, u = null, c = function(t, n, a) {
		var e = "maw_cache_service", i = new (o("WormEAR")).WormEAR(a, e, n), l = new (o("WormIDbDriver")).WormIDbDriver(t, e, a, i, o("MAWWormOdsLogger").wormOdsWorkerLogger, { onTransactionError: m });
		return new (o("Worm")).WormDatabase(l, r("qpl")._(1056840657, "2716"));
	};
	function d() {
		return u !== null || (u = new Promise(async function(e, t) {
			try {
				var n = c(o("MAWIndexedDbMetadata").MAWcacheServiceDbName(o("MAWCurrentUser").getID()), o("WAHex").parseHex(r("MessengerWebInitData").accountKeyV2), s);
				await n.init(), e(n);
			} catch (e) {
				var a = r("getErrorSafe")(e);
				r("FBLogger")("messenger_web").catching(a).mustfix("Failed to create cache service DB"), u = null, t(a);
			}
		})), u;
	}
	function m(e) {
		if (e instanceof o("WormEAR").DecryptionError) {
			var t = e;
			r("FBLogger")("MAWCacheService").mustfix("EAR decryption error in store: %s. Attempting to delete the store:", t.store), r("promiseDone")(d().then(function(e) {
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
	function p(e) {
		return e.map(function(e) {
			var t = e[0], n = e[1];
			return n;
		});
	}
	async function _() {
		var e = await d();
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
	}
	l.getOrSetupMAWCacheDB = d, l.convertCacheValueToDBRawValue = p, l.getDbDump = _;
}), 98);
