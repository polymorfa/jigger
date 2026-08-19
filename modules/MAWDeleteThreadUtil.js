__d("MAWDeleteThreadUtil", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e) {
		var t = [];
		if (e.forEach(function(e) {
			if (e.pendingContent.type === "DeleteThread") {
				var n = e.pendingContent.content.metaSyncMessageRange.lastMessageTimestamp;
				n != null && t.push(n);
			}
		}), t.length === 0) return null;
		t.sort(function(e, t) {
			return t - e;
		});
		var n = t[0];
		return { lastMessageTimestamp: n };
	}
	function l(e, t) {
		return t != null && t.lastMessageTimestamp >= e;
	}
	i.getLatestDeleteThreadInfo = e, i.isMsgDeletedViaDeleteThread = l;
}), 66);
