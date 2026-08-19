__d("WASignalDB", [
	"BrowserLockManager",
	"QPLFlow",
	"WAHandleFailureUtils",
	"WAHex",
	"WAIDBTypes",
	"WALogger",
	"WAResolvable",
	"Worm",
	"WormEAR",
	"WormIDbDriver",
	"WormIDbUtils",
	"asyncToGeneratorRuntime",
	"err",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		identity: {
			primaryKey: "deviceJid",
			indexes: { userJid: {
				fields: ["userJid"],
				unique: !1
			} }
		},
		contacts: {
			primaryKey: "contactJid",
			indexes: {}
		},
		session: {
			indexes: {},
			primaryKey: "id"
		},
		senderKeySessions: {
			primaryKey: "id",
			indexes: {
				groupJid: {
					fields: ["groupJid"],
					unique: !1
				},
				userJid: {
					fields: ["userJid"],
					unique: !1
				}
			}
		},
		prekey: {
			indexes: {},
			primaryKey: "keyId"
		},
		prekeyGeneration: {
			indexes: {},
			primaryKey: "generationId"
		},
		signedPrekey: {
			indexes: {},
			primaryKey: "keyId"
		},
		meta: {
			indexes: {},
			primaryKey: "key"
		},
		plaintextMeta: {
			indexes: {},
			primaryKey: "key",
			secure: !1
		},
		personalSenderKeyStatuses: {
			indexes: {},
			primaryKey: "groupJid"
		},
		sentBytesCache: {
			primaryKey: "waMsgId",
			indexes: { ts: {
				fields: ["ts"],
				unique: !1
			} },
			nonEncryptedFields: ["ts"]
		},
		receipts: {
			autoIncrement: !0,
			primaryKey: "pk",
			indexes: { "waMsgId+deviceJid": {
				fields: ["waMsgId", "deviceJid"],
				unique: !0
			} }
		}
	}, u, c = new (o("WAResolvable")).Resolvable();
	function d(e, t, n, r, o, a) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, d, m) {
			var p = m != null ? o("QPLFlow").startQPLFlow(m, {
				timeoutInMs: r("justknobx")._("3415"),
				annotations: { string: { operationType: "initDb" } }
			}) : null;
			try {
				yield g(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var e = o("WAHex").parseHex(a), n = "signalDb", r = new (o("WormEAR")).WormEAR(s, n, e), _ = new (o("Worm")).WormDatabase(new (o("WormIDbDriver")).WormIDbDriver(t, n, s, r, d, {
						blockingErrorThreshold: i,
						onBlockingError: l,
						safeToDeleteStores: new Set([
							"stanzaQueue",
							"danglingQueue",
							"migration"
						]),
						onTransactionError: function(n) {
							n instanceof o("WormEAR").DecryptionError && o("WormIDbUtils").promisifyIDbRequest(o("WAIDBTypes").idb().deleteDatabase(t)).then(function() {
								return o("WAHandleFailureUtils").reregisterPhone();
							});
						}
					}), m);
					u = _, yield _.init({ eventFlow: p }), c.resolve(_), p == null || p.endSuccess();
				}));
			} catch (t) {
				throw p == null || p.endFail("error"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WORM] Error performing initDb: ", ""])), t), t;
			}
		}), m.apply(this, arguments);
	}
	function p() {
		if (u == null) throw r("err")("Signal Db v3 is not initialized");
		return u;
	}
	function _() {
		return c.promise;
	}
	function f(e) {
		return "Signal - " + e;
	}
	function g(e) {
		return r("BrowserLockManager") != null ? r("BrowserLockManager").request("wajs_make_signal_v3_db", e) : e();
	}
	l.makeSignalDb = d, l.getDb = p, l.getDbPromise = _, l.signalOp = f;
}), 98);
