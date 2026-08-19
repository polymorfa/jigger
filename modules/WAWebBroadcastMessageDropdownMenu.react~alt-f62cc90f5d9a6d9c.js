__d("WAWebBroadcastMessageDropdownMenu.react", [
	"fbt",
	"JSResourceForInteraction",
	"WAWebBizBroadcastCampaignAPI",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebDrawerManager",
	"WAWebFrontendMsgGetters",
	"WAWebMsgActionCapability",
	"WAWebMsgGetters",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSIconIcContentCopy.react",
	"WDSIconIcGrade.react",
	"WDSIconIcInfo.react",
	"WDSIconWdsIcGradeSlash.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = r("JSResourceForInteraction")("WAWebBroadcastDetailsDrawerFromChat.react").__setRef("WAWebBroadcastMessageDropdownMenu.react"), _ = r("JSResourceForInteraction")("WAWebBroadcastDuplicateFromThreadHandler").__setRef("WAWebBroadcastMessageDropdownMenu.react");
	function f(e) {
		var t = e.msg, n = e.onStarClick, a = e.onUnstarClick, i = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), l = m(!1), c = l[0], f = l[1];
		d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.messageContextMenuOpened();
		}, []), d(function() {
			i && o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(t.id.id).then(function(e) {
				f(e != null);
			});
		}, [i, t.id.id]), d(function() {
			i && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled() && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastTileViewed(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD);
		}, [i]);
		var g = [];
		if (i && c) {
			var h = function() {
				var e = o("WAWebFrontendMsgGetters").getChat(t);
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, t.id.toString()), p.load().then(function(n) {
					o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(n, {
						chat: e,
						msgId: t.id.id
					}), { transition: "slide-left" });
				});
			};
			g.push(u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcInfo.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: h,
				testid: "mi-broadcast-details"
			}, "broadcast-details"));
		}
		if (i && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled()) {
			var y = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD), _.load().then(function(e) {
					return e(t);
				});
			};
			g.push(u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcContentCopy.react"),
				title: o("WAWebBizBroadcastsHomeStrings").getDuplicateBroadcastActionLabel(),
				onPress: y,
				testid: "mi-duplicate-broadcast"
			}, "duplicate-broadcast"));
		}
		if (o("WAWebMsgActionCapability").canStarMsg(t)) {
			var C = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, t.id.toString(), !0), n();
			}, b = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, t.id.toString(), !1), a();
			};
			t.star ? g.push(u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconWdsIcGradeSlash.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: b,
				testid: "mi-msg-unstar"
			}, "star")) : o("WAWebMsgGetters").getIsKept(t) || g.push(u.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcGrade.react"),
				title: s._(
					/*BTDS*/
					""
				),
				onPress: C,
				testid: "mi-msg-star"
			}, "star"));
		}
		return g;
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
