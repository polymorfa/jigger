__d("MAWBridgeRunMediaStorageShadowTestHandler", ["Promise", "WAResultOrError"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return (e || (e = n("Promise"))).resolve(o("WAResultOrError").makeError({ errorName: "gk-inconsistency" }));
	}
	l.fetchMediaStorageResults = s;
}), 98);
