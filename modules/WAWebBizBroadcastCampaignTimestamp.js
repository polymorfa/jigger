__d("WAWebBizBroadcastCampaignTimestamp", [], (function(t, n, r, o, a, i) {
	var e = 0xe8d4a51000;
	function l(t) {
		return t > 0 && t < e ? t * 1e3 : t;
	}
	function s(e) {
		return e != null ? l(e) : null;
	}
	i.campaignTimestampToMillis = l, i.campaignTimestampToMillisOrNull = s;
}), 66);
