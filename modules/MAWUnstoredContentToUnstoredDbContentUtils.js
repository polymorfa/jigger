__d("MAWUnstoredContentToUnstoredDbContentUtils", ["MAWUnstoredMediaUtils", "MAWUnstoredMsgUtils"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t, n = (t = o("MAWUnstoredMsgUtils")).getUnstoredMsg(e), r = o("MAWUnstoredMediaUtils").getUnstoredMedia(e.unstoredMedia), a = t.getUnstoredReaction(e), i = t.getUnstoredRavenActionMsg(e), l = o("MAWUnstoredMediaUtils").getUnstoredXMA(e), s = t.getGroupInvite(e), u = t.getUnstoredEditActionMsg(e.unstoredEditMsg), c = t.getUnstoredReceiverFetchInfo(e), d = t.getUnstoredGroupPollCreateInfo(e), m = t.getUnstoredDbGroupPollUpdateInfo(e);
		return s == null ? {
			contentTypeForLogging: e.contentTypeForLogging,
			unstoredDbEditActionMsg: u,
			unstoredDbGroupPollCreateInfo: d,
			unstoredDbGroupPollUpdateInfo: m,
			unstoredDbMedia: r,
			unstoredDbMsg: n,
			unstoredDbRavenActionMsg: i,
			unstoredDbReaction: a,
			unstoredDbReceiverFetchInfo: c,
			unstoredXMA: l,
			xmaTargetTypeForLogging: e.xmaTargetTypeForLogging
		} : {
			contentTypeForLogging: e.contentTypeForLogging,
			unstoredDbEditActionMsg: u,
			unstoredDbGroupPollCreateInfo: d,
			unstoredDbGroupPollUpdateInfo: m,
			unstoredDbMedia: r,
			unstoredDbMsg: n,
			unstoredDbRavenActionMsg: i,
			unstoredDbReaction: a,
			unstoredDbReceiverFetchInfo: c,
			unstoredIncomingDbGroupInvite: s,
			unstoredXMA: l,
			xmaTargetTypeForLogging: e.xmaTargetTypeForLogging
		};
	}
	l.unstoredContentToUnstoredDbContent = e;
}), 98);
