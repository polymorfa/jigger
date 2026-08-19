__d("MAWBridgeParticipants", [
	"MAWBridgeParticipantsUpdatedHandler",
	"WAJids",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.deliveredWatermarkTs, n = e.threadJid, r = e.type, a = e.userJid;
		return babelHelpers.extends({
			deliveredWatermarkTs: t || o("WATimeUtils").castToUnixTime(0),
			fbid: o("WAJids").extractUserId(a)
		}, o("MAWBridgeParticipantsUpdatedHandler").mawToLsParticipantTypeConversion(r), {
			lastReadActionTs: o("WATimeUtils").castToUnixTime(0),
			readWatermarkTs: o("WATimeUtils").castToUnixTime(0),
			threadJid: n
		});
	}
	function s(t) {
		return { participants: t.map(function(t) {
			return e(t);
		}) };
	}
	l.createBridgeParticipant = e, l.createBridgeParticipants = s;
}), 98);
