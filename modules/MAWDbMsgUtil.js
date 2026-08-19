__d("MAWDbMsgUtil", [
	"WAJids",
	"WALogger",
	"WAMsgMap"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		return t.reduce(function(t, n) {
			var r = n.threadJid;
			return r == null ? (o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Missing jid prevents adding message to array map"]))), t) : n.author === "@system" ? (o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Invalid author when converting msg array to map"]))), t) : (t.set({
				author: n.author,
				chat: r,
				externalId: n.externalId
			}, n), t);
		}, new (o("WAMsgMap")).MsgMap());
	}
	function c(e) {
		return o("WAJids").isAuthorSystem(e.author) || e.threadJid == null ? null : {
			author: e.author,
			chat: e.threadJid,
			externalId: e.externalId
		};
	}
	l.convertMsgArrayToMap = u, l.getProtocolMsgIdFromDbMsg = c;
}), 98);
