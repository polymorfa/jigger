__d("useWAWebBizBroadcastIsDelivering", [
	"WAWebBroadcastInsightStatus",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebChatGetters",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastCampaignByMsg",
	"useWAWebBroadcastInsights"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useState;
	function u(e) {
		var t = o("react-compiler-runtime").c(8), n = r("useWAWebBizBroadcastCampaignByMsg")(e.id.id), a = r("useWAWebBroadcastInsights")(n != null ? n : ""), i = a.insights, l = s(c), u = l[0], d = o("WAWebFrontendMsgGetters").getChat(e);
		if (!o("WAWebMsgGetters").getIsSentByMe(e) || d == null || !o("WAWebChatGetters").getIsBroadcast(d) || n == null || i == null) return !1;
		var m = o("WAWebMsgGetters").getT(e) * 1e3, p;
		t[0] !== i.deliveredCount || t[1] !== i.readCount || t[2] !== i.recipientCount || t[3] !== u || t[4] !== m ? (p = o("WAWebBroadcastInsightStatus").getInsightStatus(m, i.deliveredCount, i.recipientCount, i.readCount, u), t[0] = i.deliveredCount, t[1] = i.readCount, t[2] = i.recipientCount, t[3] = u, t[4] = m, t[5] = p) : p = t[5];
		var _ = p !== o("WAWebBroadcastInsightStatus").InsightStatus.SENT, f;
		return t[6] !== _ ? (f = _ && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled(), t[6] = _, t[7] = f) : f = t[7], f;
	}
	function c() {
		return Date.now();
	}
	l.default = u;
}), 98);
