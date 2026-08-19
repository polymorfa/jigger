__d("EBMinosDb", [
	"ExecutionEnvironment",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWWormOdsLogger",
	"MessengerWebInitData",
	"QPLFlow",
	"WAHex",
	"WALogger",
	"WAResolvable",
	"Worm",
	"WormEAR",
	"WormIDbDriver",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = {
		secure_mandrake_mmk: {
			indexes: {
				contact_id: {
					fields: ["contact_id"],
					unique: !1
				},
				mmk_fbid: {
					fields: ["mmk_fbid"],
					unique: !1
				}
			},
			primaryKey: "mmk_key",
			secure: !0
		},
		secure_minos_mailbox_keys: {
			indexes: {},
			primaryKey: "contact_id",
			secure: !0
		},
		secure_minos_message_epoch_heads: {
			indexes: { "[thread_id+message_id]": {
				fields: ["thread_id", "message_id"],
				unique: !0
			} },
			primaryKey: "message_id",
			secure: !0
		},
		secure_minos_thread_message_encryption_keys_v2: {
			indexes: { "[roster_hash+minos_thread_id]": {
				fields: ["roster_hash", "minos_thread_id"],
				unique: !1
			} },
			primaryKey: "mek_id_blob",
			secure: !0
		}
	}, c = null, d = 1e4;
	function m() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (c != null) return c.promise;
			var t = new (o("WAResolvable")).Resolvable();
			c = t;
			var n = o("MAWIndexedDbMetadata").ebMinosDbName(o("MAWCurrentUser").getID()), a = r("qpl")._(1056840657, "2716"), i = o("WAHex").parseHex(r("MessengerWebInitData").accountKeyV2), l = o("QPLFlow").startQPLFlow(a, {
				annotations: {
					bool: { isInSharedWorker: (s || (s = r("ExecutionEnvironment"))).isInSharedWorker },
					string: { operationType: "initEBMinosDbSchema" }
				},
				timeoutInMs: d
			});
			try {
				var m = "ebMinosDev", p = new (o("WormEAR")).WormEAR(u, m, i), _ = new (o("Worm")).WormDatabase(new (o("WormIDbDriver")).WormIDbDriver(n, m, u, p, o("MAWWormOdsLogger").wormOdsWorkerLogger, {}), a);
				return yield _.init({ eventFlow: l }), l.endSuccess(), t.resolve(_), _;
			} catch (n) {
				throw l.endFail("error"), c = null, t.reject(n), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error performing makeEBMinosDb: ", ""])), n), n;
			}
		}), p.apply(this, arguments);
	}
	function _() {
		return m();
	}
	l.schema = u, l.makeEBMinosDb = m, l.getEBMinosDb = _;
}), 98);
