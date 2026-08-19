__d("MAWAdminMsgTxns", [
	"MAWDbMsg",
	"MAWDbThread",
	"MAWDbThreadTxns",
	"MAWExternalId",
	"MAWLocalizationType",
	"MAWLocalizationUtils",
	"MAWTimeUtils",
	"MAWWriteBulkWriteIncomingAdminMsgTxns",
	"MAWWriteMsgTxns",
	"WALogger",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t, n) {
		var r = e.ts, a = o("WATimeUtils").castUnixTimeToMillisTime(r), i = o("MAWTimeUtils").ensureValidMillisTime(n) || o("WATimeUtils").castToMillisTime(0), l = a > i ? a : i;
		return babelHelpers.extends({}, t, {
			newestMsgTs: l,
			oldestMsg: e.msgId,
			snippetMsg: e.msgId,
			snippetMsgTs: o("WATimeUtils").castUnixTimeToMillisTime(o("MAWDbMsg").getCanonicalTsFromMsg(e)),
			threadOrder: o("MAWDbThread").craftThreadOrder(l, t.jid)
		});
	}
	function u(t, n) {
		return o("MAWDbThreadTxns").getThread(t, n).then(function(n) {
			if (!n.success) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["writeReachabilityErrorAdminMsg failed to create or get 1:1 thread"])));
				return;
			}
			var a = n.value, i = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg({
				adminMsgContent: [],
				adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.REACHABILITY_ERROR,
				version: 0
			}, a.jid, o("MAWExternalId").generateExternalId(), o("WATimeUtils").castMillisTimeToUnixTime(o("WATimeUtils").millisTime()));
			return o("MAWWriteMsgTxns").writeMsg(t, i, a).then(r("emptyFunction"));
		});
	}
	function c(e, t, n) {
		return o("MAWWriteBulkWriteIncomingAdminMsgTxns").writeE2EEAdminMsgsForIncomingCreatedThreadsWithAfterTxns(e, [t], n).then(function(e) {
			var t = e[0];
			return t;
		});
	}
	function d(e) {
		var t = o("MAWDbMsg").craftE2eeAdminMsgAltIndex(e.chatId), n = o("MAWLocalizationUtils").buildUnstoredDbAdminMsg({
			adminMsgContent: [],
			adminType: o("MAWLocalizationType").LOCALIZATION_TYPE.E2EE_THREAD_DESCRIPTION,
			version: 0
		}, e.jid, o("MAWExternalId").generateExternalId(), o("WATimeUtils").castToUnixTime(0), t);
		return babelHelpers.extends({}, n, {
			msgId: o("MAWDbMsg").craftMsgIdV2(e.chatId, 1, n),
			sortOrderMs: 0
		});
	}
	l.getUpdatedThreadForAdminMsg = s, l.writeReachabilityErrorAdminMsg = u, l.writeE2EEThreadDescriptionMsg = c, l.buildE2EEThreadDescriptionMsg = d;
}), 98);
