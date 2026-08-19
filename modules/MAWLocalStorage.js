__d("MAWLocalStorage", [
	"LocalStorageWrapper",
	"MWLocalStorageErrorHandler",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		o("WALogger").LOG([e]);
	}
	function u(e) {
		o("WALogger").ERROR([e]);
	}
	function c() {
		return o("LocalStorageWrapper").getStorage(s);
	}
	function d() {
		return o("LocalStorageWrapper").isLocalStorageAvailable(s);
	}
	function m(e, t, n) {
		return o("LocalStorageWrapper").setItemGuarded(e, t, n, u, o("MWLocalStorageErrorHandler").onQuotaExceeded);
	}
	function p(t, n) {
		t == null ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["not storage found"]))) : t.removeItem(n);
	}
	l.getStorage = c, l.isLocalStorageAvailable = d, l.setItemGuarded = m, l.removeItemGuarded = p;
}), 98);
