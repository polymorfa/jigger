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
	"react-compiler-runtime",
	"useWAWebBizBroadcastCampaignByMsg",
	"useWAWebBroadcastInsights"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = r("JSResourceForInteraction")("WAWebBroadcastDetailsDrawerFromChat.react").__setRef("WAWebBroadcastInsightsChip.react");
	function m(e) {
		var t = o("react-compiler-runtime").c(8), n = e.msg, a = r("useWAWebBizBroadcastCampaignByMsg")(n.id.id), i, l;
		if (t[0] !== a || t[1] !== n ? (i = o("WAWebFrontendMsgGetters").getChat(n), l = !o("WAWebMsgGetters").getIsSentByMe(n) || i == null || !o("WAWebChatGetters").getIsBroadcast(i) || a == null || !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled(), t[0] = a, t[1] = n, t[2] = i, t[3] = l) : (i = t[2], l = t[3]), l) return null;
		var s;
		return t[4] !== a || t[5] !== i || t[6] !== n ? (s = u.jsx(p, {
			campaignId: a,
			chat: i,
			msg: n
		}), t[4] = a, t[5] = i, t[6] = n, t[7] = s) : s = t[7], s;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(21), n = e.campaignId, a = e.chat, i = e.msg, l = r("useWAWebBroadcastInsights")(n), c = l.insights, m;
		t[0] !== n || t[1] !== a || t[2] !== i.id ? (m = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.inThreadInsightMetricsChipClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, n, i.id.toString()), d.load().then(function(e) {
				o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(e, {
					chat: a,
					msgId: i.id.id
				}), { transition: "slide-left" });
			});
		}, t[0] = n, t[1] = a, t[2] = i.id, t[3] = m) : m = t[3];
		var p = m;
		if (c == null) return null;
		var _ = c.deliveredCount, f = c.readCount, g = c.repliedCount;
		if (_ === 0 && f === 0 && g === 0) return null;
		var h;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), t[4] = h) : h = t[4];
		var y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx(r("WDSIconWdsIcRead.react"), {
			colorName: "contentDeemphasized",
			height: 14,
			width: 14
		}), t[5] = y) : y = t[5];
		var C = String(_), b;
		t[6] !== C ? (b = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 2,
			children: [y, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: C
			})]
		}), t[6] = C, t[7] = b) : b = t[7];
		var v;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WDSIconIcVisibility.react"), {
			colorName: "contentDeemphasized",
			height: 14,
			width: 14
		}), t[8] = v) : v = t[8];
		var S = String(f), R;
		t[9] !== S ? (R = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 2,
			children: [v, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: S
			})]
		}), t[9] = S, t[10] = R) : R = t[10];
		var L;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSIconIcReply.react"), {
			colorName: "contentDeemphasized",
			directional: !0,
			height: 14,
			width: 14
		}), t[11] = L) : L = t[11];
		var E = String(g), k;
		t[12] !== E ? (k = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 2,
			children: [L, u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: E
			})]
		}), t[12] = E, t[13] = k) : k = t[13];
		var I;
		t[14] !== k || t[15] !== b || t[16] !== R ? (I = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 4,
			children: [
				b,
				R,
				k
			]
		}), t[14] = k, t[15] = b, t[16] = R, t[17] = I) : I = t[17];
		var T;
		return t[18] !== p || t[19] !== I ? (T = u.jsx(r("WAWebAddOnBubble.react"), { children: u.jsx(r("WAWebUnstyledButton.react"), {
			"aria-label": h,
			onClick: p,
			testid: "broadcast_insights_chip",
			children: I
		}) }), t[18] = p, t[19] = I, t[20] = T) : T = t[20], T;
	}
	l.default = m;
}), 226);
