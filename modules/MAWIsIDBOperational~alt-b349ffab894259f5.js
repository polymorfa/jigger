__d("MAWIsIDBOperational", [
	"FBLogger",
	"WebAsyncStorage",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			if (e === void 0 && (e = !1), e && !r("WebAsyncStorage").isOpenPromiseSettled()) return !1;
			var t = yield r("WebAsyncStorage").isOperational();
			return t.success ? !0 : (r("FBLogger")("messenger_web").catching(t.error).warn("Marking MAW IDB as unavailable: %s", t.error.message), !1);
		}), m.apply(this, arguments);
	}
	var p = !1;
	function _() {
		var e = c(p), t = e[0], n = e[1];
		return u(function() {
			r("promiseDone")(d().then(function(e) {
				n(e), p = e;
			}));
		}, [n]), t;
	}
	l.isIDBOperational = d, l.useIsIDBOperational = _;
}), 98);
