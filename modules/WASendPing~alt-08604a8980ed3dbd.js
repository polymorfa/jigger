__d("WASendPing", [
	"WAComms",
	"WALogger",
	"WASetClockSkewApi",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s() {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["sendPing: sending"]))), o("WAComms").sendPing();
	}
	async function u(e) {
		var t = e.clockSkew;
		o("WATimeUtils").setClockSkew(t), await o("WASetClockSkewApi").setClockSkew({ clockSkew: t });
	}
	l.sendPing = s, l.updateClockSkew = u;
}), 98);
