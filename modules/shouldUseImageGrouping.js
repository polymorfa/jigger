__d("shouldUseImageGrouping", ["I64", "LSIntEnum"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n) {
		var r, a = t.displayedContentTypes, i = t.groupId, l = (e || (e = o("I64"))).to_int32((r = t.groupSize) != null ? r : (e || (e = o("I64"))).zero);
		return n && (e || (e = o("I64"))).equal(a, (s || (s = o("LSIntEnum"))).ofNumber(2)) && i != null && t.groupIndex != null && t.groupSize != null && l > 1;
	}
	l.default = u;
}), 98);
