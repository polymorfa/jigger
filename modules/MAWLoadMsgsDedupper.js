__d("MAWLoadMsgsDedupper", ["MAWDbMsgUtil", "WAMsg"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = new Set();
		return function(t) {
			var n = o("MAWDbMsgUtil").getProtocolMsgIdFromDbMsg(t);
			if (n == null) return !0;
			var r = o("WAMsg").craftWAMsgIdString(n);
			if (r != null) {
				if (e.has(r)) return !1;
				e.add(r);
			}
			return !0;
		};
	}
	l.default = e;
}), 98);
