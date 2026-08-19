__d("WAWebSearchByDateUtils", [
	"WAWebDBSearchByDate",
	"WAWebMsgKey",
	"WAWebUserPrefsHistorySync"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		return Math.floor(e / 1e3);
	}
	function s(e) {
		var t = e.beforeSearch, n = e.incomingCandidate, o = e.outgoingCandidate, a = null;
		return n != null && o != null ? t ? a = n.t >= o.t ? n.id : o.id : a = n.t <= o.t ? n.id : o.id : n ? a = n.id : o && (a = o.id), a != null ? r("WAWebMsgKey").fromString(a) : null;
	}
	async function u(e, t, n, r) {
		var a = await o("WAWebDBSearchByDate").getClosestMessageBetweenDates({
			chatId: e,
			endTimestampSeconds: n,
			incoming: !0,
			searchingBefore: r,
			startTimestampSeconds: t
		}), i = await o("WAWebDBSearchByDate").getClosestMessageBetweenDates({
			chatId: e,
			endTimestampSeconds: n,
			incoming: !1,
			searchingBefore: r,
			startTimestampSeconds: t
		});
		return s({
			beforeSearch: r,
			incomingCandidate: a,
			outgoingCandidate: i
		});
	}
	async function c(t, n) {
		var r = e(n.getTime()), a = o("WAWebUserPrefsHistorySync").getHistorySyncEarliestDate() * 1e3, i = Date.now(), l = await u(t, r, i, !1);
		if (l != null) return l;
		var s = await u(t, a, r, !0);
		return s != null, s;
	}
	l.fromMillisecondsToSeconds = e, l.getClosestMessageFromDate = c;
}), 98);
