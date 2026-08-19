__d("MAWIsFBXMA", ["LSIntEnum", "LSXmaContentType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		if (t == null) return !1;
		switch ((e || (e = o("LSIntEnum"))).toNumber(t)) {
			case r("LSXmaContentType").FB_FEED_SHARE:
			case r("LSXmaContentType").FB_SHORT:
			case r("LSXmaContentType").MSG_RECEIVER_FETCH: return !0;
			default: return !1;
		}
	}
	l.isFBXMA = s;
}), 98);
