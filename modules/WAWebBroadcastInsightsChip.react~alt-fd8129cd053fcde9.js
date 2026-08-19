__d("WAWebBroadcastInsightsChip.react", [
	"fbt",
	"JSResourceForInteraction",
	"WAWebAddOnBubble.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebChatGetters",
	"WAWebDrawerManager",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumEntryPoint",
	"WDSIconIcReply.react",
	"WDSIconIcVisibility.react",
	"WDSIconWdsIcRead.react",
	"WDSText.react",
	"react",
	"useWAWebBizBroadcastCampaignByMsg",
	"useWAWebBroadcastInsights"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = r("JSResourceForInteraction")("WAWebBroadcastDetailsDrawerFromChat.react").__setRef("WAWebBroadcastInsightsChip.react");
	function m(e) {
		var t = e.msg, n = r("useWAWebBizBroadcastCampaignByMsg")(t.id.id), a = o("WAWebFrontendMsgGetters").getChat(t);
		return !o("WAWebMsgGetters").getIsSentByMe(t) || a == null || !o("WAWebChatGetters").getIsBroadcast(a) || n == null || !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled() ? null : u.jsx(p, {
			campaignId: n,
			chat: a,
			msg: t
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.campaignId, n = e.chat, a = e.msg, i = r("useWAWebBroadcastInsights")(t), l = i.insights, m = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.inThreadInsightMetricsChipClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, t, a.id.toString()), d.load().then(function(e) {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(e, {
					chat: n,
					msgId: a.id.id
				}), { transition: "slide-left" });
			});
		}, [
			t,
			n,
			a.id
		]);
		if (l == null) return null;
		var p = l.deliveredCount, _ = l.readCount, f = l.repliedCount;
		return p === 0 && _ === 0 && f === 0 ? null : u.jsx(r("WAWebAddOnBubble.react"), { children: u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onClick: m,
			testid: "broadcast_insights_chip",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 4,
				children: [
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 2,
						children: [u.jsx(r("WDSIconWdsIcRead.react"), {
							colorName: "contentDeemphasized",
							height: 14,
							width: 14
						}), u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: String(p)
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 2,
						children: [u.jsx(r("WDSIconIcVisibility.react"), {
							colorName: "contentDeemphasized",
							height: 14,
							width: 14
						}), u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: String(_)
						})]
					}),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 2,
						children: [u.jsx(r("WDSIconIcReply.react"), {
							colorName: "contentDeemphasized",
							directional: !0,
							height: 14,
							width: 14
						}), u.jsx(r("WDSText.react"), {
							type: "Body3",
							colorName: "contentDeemphasized",
							children: String(f)
						})]
					})
				]
			})
		}) });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
