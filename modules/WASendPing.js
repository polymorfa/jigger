__d("WASendPing", [
	"WAComms",
	"WALogger",
	"WASetClockSkewApi",
	"WATimeUtils",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendPing: sending"]))), o("WAComms").sendPing();
	}
	function u(e) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.clockSkew;
			o("WATimeUtils").setClockSkew(t), yield o("WASetClockSkewApi").setClockSkew({ clockSkew: t });
		}), c.apply(this, arguments);
	}
	l.sendPing = s, l.updateClockSkew = u;
}), 98);
