__d("MAWFTSIsMessageValidForSearch", ["MAWMsgType"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.ephemeralSetting != null && e.ephemeralSetting.ephemeralExpirationInSec > 0;
	}
	function s(t) {
		var n = t.msgContent, r = t.sortOrderMs, a = t.type, i = n == null ? void 0 : n.content;
		return i == null || r == null || a !== o("MAWMsgType").MSG_TYPE.TEXT && a !== o("MAWMsgType").MSG_TYPE.XMA || e(t) ? null : {
			content: i,
			sortOrderMs: r
		};
	}
	l.verifyMessageValidity = s;
}), 98);
