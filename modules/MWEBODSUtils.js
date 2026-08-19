__d("MWEBODSUtils", [
	"CurrentMessengerUser",
	"MWEBODSCategory",
	"ODS"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n, a) {
		var i = o("CurrentMessengerUser").getAppID(), l = i != null ? i.toString() : "unknown", s = t + "." + l;
		(e || (e = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), s, n, a != null ? a : 1), e.bumpEntityKey(r("MWEBODSCategory"), t, n, a != null ? a : 1);
	}
	l.markODSForEB = s;
}), 98);
