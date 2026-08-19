__d("WAWebPostMessageHighRetryCountMetric", [
	"WAWebMessageHighRetryCountWamEvent",
	"WAWebMessagingGatingUtils",
	"WAWebSessionScopeWamUtils",
	"WAWebWamEnumEncryptionTypeCode",
	"WAWebWamGroupMetricCache",
	"WAWebWamMsgUtils"
], (function(t, n, r, o, a, i, l) {
	var e = 5;
	async function s(t, n, r) {
		if (!(t < e)) {
			var a = new (o("WAWebMessageHighRetryCountWamEvent")).MessageHighRetryCountWamEvent({
				retryCount: t,
				messageType: o("WAWebWamMsgUtils").getMessageTypeFromMsgInfoType(n.type),
				sessionScope: o("WAWebSessionScopeWamUtils").sessionScopeToWamType(r)
			}), i = o("WAWebWamMsgUtils").getWamE2eSenderType(n.author);
			i != null && (a.e2eSenderType = i), n.author.isHosted() && (a.encryptionType = o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE.COEX);
			var l = n.chat;
			if (l != null && l.isGroup()) {
				var s = await o("WAWebWamGroupMetricCache").getGroupMetrics(l);
				(s == null ? void 0 : s.deviceSizeBucket) != null && (a.deviceSizeBucket = s.deviceSizeBucket), (s == null ? void 0 : s.participantCount) != null && s.participantCount > o("WAWebMessagingGatingUtils").getGroupSizeBypassingSampling() && (a.weight = 0);
			}
			a.commit();
		}
	}
	l.MAX_RETRY = e, l.maybePostMessageHighRetryCountMetric = s;
}), 98);
