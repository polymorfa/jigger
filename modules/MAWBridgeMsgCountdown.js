__d("MAWBridgeMsgCountdown", [
	"MAWDbMsg",
	"MAWLoggerUtils",
	"MWFBLogger",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWLogger().tags(["bridge", o("MAWLoggerUtils").Tag.Countdown]);
	function c(t) {
		return { msgs: t.map(function(t) {
			var n, r = t.messageExpirationTs, a = (n = t.ephemeralSetting) == null ? void 0 : n.ephemeralExpirationInSec;
			if (!(r == null || a == null)) {
				var i = o("WATimeUtils").cappedMillisecondsUntil(r);
				if (i <= 0) {
					u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Calling the messages starting countdown bridge event with remaning time less or equal to 0 (expired message)"])));
					return;
				}
				var l = a * 1e3;
				return i > l && (i = l), u.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"createBridgeMsgsStartCountdown: msg ",
					", expiration ",
					", ms until countdown ",
					", duration ",
					""
				])), t.msgId, r, i, a), {
					countdownTs: r,
					millisecondsUntilCountdownTs: i,
					msgId: t.msgId,
					threadJid: t.threadJid,
					ts: o("MAWDbMsg").getCanonicalTsFromMsg(t)
				};
			}
		}).filter(Boolean) };
	}
	function d(e, t) {
		return {
			countdownTs: t,
			msgId: e
		};
	}
	l.createBridgeMsgsStartCountdown = c, l.createBridgeMsgClearCountdown = d;
}), 98);
