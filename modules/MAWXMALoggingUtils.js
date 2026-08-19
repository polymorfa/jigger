__d("MAWXMALoggingUtils", ["WAArmadilloXMA.pb", "objectEntries"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("objectEntries")(o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE).reduce(function(e, t) {
		var n = t[0], r = t[1];
		return e.set(r, n), e;
	}, new Map());
	function s(t) {
		return t != null ? e.get(t) : void 0;
	}
	l.getXmaTargetTypeStringFromEnum = s;
}), 98);
