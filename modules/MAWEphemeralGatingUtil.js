__d("MAWEphemeralGatingUtil", [
	"$InternalEnum",
	"MetaConfig",
	"gkx",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = n("$InternalEnum")({
		SEEN_BASED: 0,
		SEND_BASED: 1
	}), s = "0,60,900,86400";
	function u() {
		var e = r("MetaConfig")._("56");
		e === "" && (e = s);
		var t = e.replace("\"", "").split(",").map(function(e) {
			return parseInt(e, 10);
		});
		return r("gkx")("2260") && t.push(10, 30, 60, 120), t;
	}
	function c() {
		var e = r("MetaConfig")._("65");
		return r("justknobx")._("1546") && e;
	}
	l.EphemeralityType = e, l.getExpirationOptions = u, l.isResetEphemeralSettingsEnabled = c;
}), 98);
