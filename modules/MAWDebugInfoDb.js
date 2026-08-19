__d("MAWDebugInfoDb", [
	"FBLogger",
	"MAWCurrentUser",
	"MAWIndexedDbMetadata",
	"MAWWormOdsLogger",
	"MessengerWebInitData",
	"WAHex",
	"Worm",
	"WormEAR",
	"WormIDbDriver",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { initRestore: {
		indexes: {},
		primaryKey: "key"
	} }, s = null;
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			if (s != null) return s;
			var a = "maw_debug_info", i = new (o("WormEAR")).WormEAR(e, a, t), l = new (o("WormIDbDriver")).WormIDbDriver(o("MAWIndexedDbMetadata").MAWDebugInfoDBName(o("MAWCurrentUser").getID()), a, e, i, o("MAWWormOdsLogger").wormOdsWorkerLogger, {
				onBlockingError: function(t) {
					r("FBLogger")("MAWDebugInfoDb").warn("Blocking error: %s", t);
				},
				onTransactionError: function(t) {
					r("FBLogger")("MAWDebugInfoDb").warn("Transaction error: %s", t.message);
				}
			}), u = new (o("Worm")).WormDatabase(l, n);
			return s = u, yield u.init(), u;
		}), c.apply(this, arguments);
	}
	function d() {
		return u(o("WAHex").parseHex(r("MessengerWebInitData").accountKeyV2), r("qpl")._(1056840657, "2716"));
	}
	l.getMAWDebugInfoDb = d;
}), 98);
