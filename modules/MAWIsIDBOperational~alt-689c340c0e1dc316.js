__d("MAWIsIDBOperational", [
	"FBLogger",
	"WebAsyncStorage",
	"promiseDone",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	async function d(e) {
		if (e === void 0 && (e = !1), e && !r("WebAsyncStorage").isOpenPromiseSettled()) return !1;
		var t = await r("WebAsyncStorage").isOperational();
		return t.success ? !0 : (r("FBLogger")("messenger_web").catching(t.error).warn("Marking MAW IDB as unavailable: %s", t.error.message), !1);
	}
	var m = !1;
	function p() {
		var e = o("react-compiler-runtime").c(2), t = c(m), n = t[0], a = t[1], i, l;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			r("promiseDone")(d().then(function(e) {
				a(e), m = e;
			}));
		}, l = [a], e[0] = i, e[1] = l) : (i = e[0], l = e[1]), u(i, l), n;
	}
	l.isIDBOperational = d, l.useIsIDBOperational = p;
}), 98);
