__d("MAWIsIDBOperational", [
	"FBLogger",
	"WebAsyncStorage",
	"promiseDone",
	"react"
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
		var e = c(m), t = e[0], n = e[1];
		return u(function() {
			r("promiseDone")(d().then(function(e) {
				n(e), m = e;
			}));
		}, [n]), t;
	}
	l.isIDBOperational = d, l.useIsIDBOperational = p;
}), 98);
