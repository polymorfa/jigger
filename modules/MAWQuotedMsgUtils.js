__d("MAWQuotedMsgUtils", ["WATimeUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.content.type === "NoteReply" ? e.content.msgContent == null ? e : babelHelpers.extends({}, e, { content: babelHelpers.extends({}, e.content, { msgContent: void 0 }) }) : e;
	}
	function s(t) {
		return t.content.expirationTs == null || t.content.expirationTs > o("WATimeUtils").unixTime() ? t : e(t);
	}
	l.dbQuotedMsgWithoutExpirableContent = e, l.dbQuotedMsgWithoutExpiredContent = s;
}), 98);
