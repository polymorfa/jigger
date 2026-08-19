__d("useWAWebBizBroadcastCampaignByMsg", [
	"WAWebBizBroadcastCampaignAPI",
	"WAWebBroadcastConsts",
	"WAWebCmd",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useState;
	function d(e) {
		var t = c(null), r = t[0], a = t[1], i = c(e), l = i[0], s = i[1];
		return l !== e && (s(e), a(null)), u(function() {
			var t = 0, r = !1;
			function i() {
				return l.apply(this, arguments);
			}
			function l() {
				return l = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
					var n = ++t, i = yield o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(e);
					n === t && (r = i != null, a(i != null ? i.campaignId : null));
				}), l.apply(this, arguments);
			}
			i();
			var s = function() {
				r || i();
			};
			return o("WAWebCmd").Cmd.on(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, s), function() {
				t++, o("WAWebCmd").Cmd.off(o("WAWebBroadcastConsts").BIZ_BROADCAST_CAMPAIGN_UPDATED_EVENT, s);
			};
		}, [e]), r;
	}
	l.default = d;
}), 98);
