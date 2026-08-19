__d("MAWParseRavenActionNotificationMsg", [
	"FBLogger",
	"MAWMsg",
	"WAStanzaUtils",
	"WATimeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n, a, i, l = e.content, s = e.meta, u = (t = l.ravenActionNotifMessage) == null ? void 0 : t.actionType, c = o("MAWMsg").MAWRavenActionNotifType.cast(u), d = (n = l.ravenActionNotifMessage) == null ? void 0 : n.actionTimestamp, m;
		if (d != null) {
			var p = Number(d);
			p > o("WATimeUtils").MAX_INT ? m = o("WATimeUtils").castMilliSecondsToUnixTime(p) : m = o("WATimeUtils").castToUnixTime(p);
		}
		var _ = ((a = l.ravenActionNotifMessage) == null || (a = a.key) == null ? void 0 : a.id) != null ? o("WAStanzaUtils").toStanzaId((i = l.ravenActionNotifMessage) == null || (i = i.key) == null ? void 0 : i.id) : null;
		if (c == null) throw r("FBLogger")("messenger_web").mustfixThrow("Error when getting actionType for RavenNotificationMessage " + s.id.externalId);
		if (m == null) throw r("FBLogger")("messenger_web").mustfixThrow("Error when getting actionTimestamp for RavenNotificationMessage " + s.id.externalId);
		if (_ == null) throw r("FBLogger")("messenger_web").mustfixThrow("Error when getting ravenActionToMsgExternalId for RavenNotificationMessage " + s.id.externalId);
		var f = {
			ack: s.ack,
			actionTimestamp: m,
			actionType: c,
			id: s.id,
			ravenActionToMsgExternalId: _,
			sentTs: s.sentTs,
			serverTs: s.serverTs,
			ts: s.serverTs,
			type: "RavenAction"
		};
		return {
			unstoredMedia: null,
			unstoredMsg: f,
			unstoredQuotedMedia: null,
			unstoredXMA: null
		};
	}
	l.parseRavenActionNotificationMessage = e;
}), 98);
