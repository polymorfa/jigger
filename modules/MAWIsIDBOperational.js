__d("MAWIsIDBOperational", [
	"FBLogger",
	"WebAsyncStorage",
	"asyncToGeneratorRuntime",
	"promiseDone",
	"react",
	"react-compiler-runtime"
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
		var e = o("react-compiler-runtime").c(2), t = c(p), n = t[0], a = t[1], i, l;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			r("promiseDone")(d().then(function(e) {
				a(e), p = e;
			}));
		}, l = [a], e[0] = i, e[1] = l) : (i = e[0], l = e[1]), u(i, l), n;
	}
	l.isIDBOperational = d, l.useIsIDBOperational = _;
}), 98);
