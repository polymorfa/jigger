__d("MAWTimeUtils", [
	"FBLogger",
	"I64",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		return (e || (e = o("I64"))).of_float(t * 1e3);
	}
	function u(e) {
		var t = Number(e);
		return t <= o("WATimeUtils").MAX_INT && t !== -1e3 && t !== 0;
	}
	function c(t) {
		return u(t) ? (Number(t) !== -1 && r("FBLogger")("messenger_web").mustfix("Invalid timestamp supplied to millisTimeToTimestamp: %s", Number(t)), s(t)) : (e || (e = o("I64"))).of_float(t);
	}
	function d(e) {
		if (e != null) return u(e) ? (Number(e) !== -1 && r("FBLogger")("messenger_web").mustfix("Invalid timestamp supplied to ensureValidMillisTime: %s", Number(e)), o("WATimeUtils").castToMillisTime(e * 1e3)) : e;
	}
	l.toTimestamp = s, l.millisTimeToTimestamp = c, l.ensureValidMillisTime = d;
}), 98);
