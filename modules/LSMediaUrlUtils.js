__d("LSMediaUrlUtils", ["I64", "ServerTime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		if ((e || (e = o("I64"))).gt(t, (e || (e = o("I64"))).zero)) {
			var n = (e || (e = o("I64"))).of_float(o("ServerTime").getMillis() / 1e3);
			return e.lt(t, n);
		}
		return !1;
	}
	function u(t) {
		if ((e || (e = o("I64"))).gt(t, (e || (e = o("I64"))).zero)) {
			var n = (e || (e = o("I64"))).of_float(o("ServerTime").getMillis());
			return e.lt(t, n);
		}
		return !1;
	}
	function c(e, t) {
		return e != null && t != null && !u(t);
	}
	l.isTimestampExpired = s, l.hasValidReceiverFetchPreviewUrl = c;
}), 98);
