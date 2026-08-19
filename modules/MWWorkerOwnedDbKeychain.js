__d("MWWorkerOwnedDbKeychain", [
	"Deferred",
	"MAWCryptoConsts",
	"MWFBLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = {
		accountKey: null,
		databaseEncryptionKeys: new Map(),
		dbReady: new (r("Deferred"))(),
		latestVersion: o("MAWCryptoConsts").VERSION
	}, u = babelHelpers.extends({}, s), c = "uninitialized", d = o("MWFBLogger").MWLogger().tags(["MWWorkerOwnedDbKeychain"]);
	function m() {
		return u;
	}
	function p(t) {
		d.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["handleEARKeyChange"]))), c = "initialized", u = t;
	}
	function _() {
		return c === "initialized";
	}
	function f() {
		return u.latestVersion;
	}
	l.getEARKey = m, l.handleEARKeyChange = p, l.isInitialised = _, l.getLatestVersion = f;
}), 98);
