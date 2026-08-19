__d("useWAWebBroadcastCampaignsCollection", [
	"WAWebBizBroadcastCampaignCollection",
	"WAWebBizBroadcastCampaignInsightsCollection",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useState;
	function u() {
		"use no forget";
		var e = s(function() {
			return !r("WAWebBizBroadcastCampaignCollection").bootstrapped;
		}), t = e[0], n = e[1], a = s(function() {
			return [].concat(r("WAWebBizBroadcastCampaignCollection").getModelsArray());
		}), i = a[0], l = a[1];
		return o("useWAWebListener").useListener(r("WAWebBizBroadcastCampaignCollection"), [
			"add",
			"remove",
			"reset",
			"sort",
			"change",
			"bootstrapped"
		], function() {
			l([].concat(r("WAWebBizBroadcastCampaignCollection").getModelsArray())), n(!r("WAWebBizBroadcastCampaignCollection").bootstrapped);
		}), o("useWAWebListener").useListener(r("WAWebBizBroadcastCampaignInsightsCollection"), [
			"change",
			"add",
			"remove",
			"reset"
		], function(e) {
			if (e != null) {
				var t = e.id, n = r("WAWebBizBroadcastCampaignCollection").get(t);
				if (n == null) return;
			}
			l([].concat(r("WAWebBizBroadcastCampaignCollection").getModelsArray()));
		}), {
			campaigns: i,
			loading: t
		};
	}
	l.default = u;
}), 98);
