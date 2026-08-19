__d("MAWBridgeUIEventDataValidation", [
	"FBLogger",
	"I64",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		try {
			return (e || (e = o("I64"))).of_string(t);
		} catch (e) {
			var n = r("getErrorSafe")(e);
			r("FBLogger")("messenger_web").catching(n).mustfix("Cannot convert string to i64: %s", t);
		}
	}
	l.stringToI64Opt = s;
}), 98);
