__d("MAWEphemeralMsgUtils", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		return function(t) {
			return !e.has(t.msgId) && t.ephemeralMsgDisappeared !== !0;
		};
	}
	i.filterNonExpiredMsg = e;
}), 66);
