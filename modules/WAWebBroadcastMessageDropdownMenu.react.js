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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = r("JSResourceForInteraction")("WAWebBroadcastDetailsDrawerFromChat.react").__setRef("WAWebBroadcastMessageDropdownMenu.react"), _ = r("JSResourceForInteraction")("WAWebBroadcastDuplicateFromThreadHandler").__setRef("WAWebBroadcastMessageDropdownMenu.react");
	function f(e) {
		var t = o("react-compiler-runtime").c(34), n = e.msg, a = e.onStarClick, i = e.onUnstarClick, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1), t[0] = l) : l = t[0];
		var c = l, f = m(!1), h = f[0], y = f[1], C;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (C = [], t[1] = C) : C = t[1], d(g, C);
		var b, v;
		t[2] !== n.id.id ? (b = function() {
			c && o("WAWebBizBroadcastCampaignAPI").getBizBroadcastCampaignByMsgId(n.id.id).then(function(e) {
				y(e != null);
			});
		}, v = [c, n.id.id], t[2] = n.id.id, t[3] = b, t[4] = v) : (b = t[3], v = t[4]), d(b, v);
		var S, R;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (S = function() {
			c && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled() && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastTileViewed(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD);
		}, R = [c], t[5] = S, t[6] = R) : (S = t[5], R = t[6]), d(S, R);
		var L;
		if (t[7] !== h || t[8] !== n || t[9] !== a || t[10] !== i) {
			if (L = [], c && h) {
				var E;
				t[12] !== n ? (E = function() {
					var e = o("WAWebFrontendMsgGetters").getChat(n);
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerOpened(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, n.id.toString()), p.load().then(function(t) {
						o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(t, {
							chat: e,
							msgId: n.id.id
						}), { transition: "slide-left" });
					});
				}, t[12] = n, t[13] = E) : E = t[13];
				var k = E, I;
				t[14] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
					/*BTDS*/
					""
				), t[14] = I) : I = t[14];
				var T;
				t[15] !== k ? (T = u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcInfo.react"),
					title: I,
					onPress: k,
					testid: "mi-broadcast-details"
				}, "broadcast-details"), t[15] = k, t[16] = T) : T = t[16], L.push(T);
			}
			if (c && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled()) {
				var D;
				t[17] !== n ? (D = function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD), _.load().then(function(e) {
						return e(n);
					});
				}, t[17] = n, t[18] = D) : D = t[18];
				var x = D, $;
				t[19] === Symbol.for("react.memo_cache_sentinel") ? ($ = o("WAWebBizBroadcastsHomeStrings").getDuplicateBroadcastActionLabel(), t[19] = $) : $ = t[19];
				var P;
				t[20] !== x ? (P = u.jsx(r("WDSMenuItem.react"), {
					Icon: r("WDSIconIcContentCopy.react"),
					title: $,
					onPress: x,
					testid: "mi-duplicate-broadcast"
				}, "duplicate-broadcast"), t[20] = x, t[21] = P) : P = t[21], L.push(P);
			}
			if (o("WAWebMsgActionCapability").canStarMsg(n)) {
				var N;
				t[22] !== n.id || t[23] !== a ? (N = function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, n.id.toString(), !0), a();
				}, t[22] = n.id, t[23] = a, t[24] = N) : N = t[24];
				var M = N, w;
				t[25] !== n.id || t[26] !== i ? (w = function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.starMessageButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, n.id.toString(), !1), i();
				}, t[25] = n.id, t[26] = i, t[27] = w) : w = t[27];
				var A = w;
				if (n.star) {
					var F;
					t[28] === Symbol.for("react.memo_cache_sentinel") ? (F = s._(
						/*BTDS*/
						""
					), t[28] = F) : F = t[28];
					var O;
					t[29] !== A ? (O = u.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconWdsIcGradeSlash.react"),
						title: F,
						onPress: A,
						testid: "mi-msg-unstar"
					}, "star"), t[29] = A, t[30] = O) : O = t[30], L.push(O);
				} else if (!o("WAWebMsgGetters").getIsKept(n)) {
					var B;
					t[31] === Symbol.for("react.memo_cache_sentinel") ? (B = s._(
						/*BTDS*/
						""
					), t[31] = B) : B = t[31];
					var W;
					t[32] !== M ? (W = u.jsx(r("WDSMenuItem.react"), {
						Icon: r("WDSIconIcGrade.react"),
						title: B,
						onPress: M,
						testid: "mi-msg-star"
					}, "star"), t[32] = M, t[33] = W) : W = t[33], L.push(W);
				}
			}
			t[7] = h, t[8] = n, t[9] = a, t[10] = i, t[11] = L;
		} else L = t[11];
		return L;
	}
	function g() {
		o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.messageContextMenuOpened();
	}
	l.default = f;
}), 226);
