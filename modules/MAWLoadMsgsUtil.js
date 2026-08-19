__d("MAWLoadMsgsUtil", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t, n) {
		var r = 0, o = 0, a = !1, i = null;
		return function(l) {
			return o++, i != null && i === l.sortOrderMs ? !1 : o > t && l.sortOrderMs !== e || (l.msgId === n && (a = !0), a && r++, r > t) ? !0 : (i = l.sortOrderMs, !1);
		};
	}
	function l(e) {
		var t = !0, n = 0, r = null;
		return function(o) {
			if (r === null) n++;
			else {
				if (r === o.sortOrderMs) return n += t ? 0 : 1, !1;
				n++, t = !1;
			}
			return n > e ? !0 : (r = o.sortOrderMs, !1);
		};
	}
	i.makeUntilWithRangeExtension = e, i.makeUntilWithRangeExtensionBothDirections = l;
}), 66);
