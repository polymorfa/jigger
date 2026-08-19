__d("WASyncAbProps", [
	"WAAbPropsSync",
	"WALogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		return u.apply(this, arguments);
	}
	function u() {
		return u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var n = t.sendHash;
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Syncing ABProps"]))), yield o("WAAbPropsSync").syncAbProps({ sendHash: n });
		}), u.apply(this, arguments);
	}
	l.syncAbProps = s;
}), 98);
