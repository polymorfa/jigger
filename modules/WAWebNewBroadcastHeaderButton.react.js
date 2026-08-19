__d("WAWebNewBroadcastHeaderButton.react", [
	"WAWebBizBroadcastCreationQPLLogger",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBizBroadcastNewBroadcastFlowLoadable",
	"WAWebBizBroadcastTos",
	"WAWebBizBroadcastTosModalLoadable",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDrawerManager",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebTabOrder",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WAWebWidToJid",
	"WDSButton.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.chat, a = d(!1), i, l;
		if (t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			a.current || (a.current = !0, o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow());
		}, l = [], t[0] = i, t[1] = l) : (i = t[0], l = t[1]), c(i, l), !o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1)) return null;
		var u;
		t[2] !== n ? (u = function() {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_HEADER, !0), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
				chat: n,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
				onBack: p
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, t[2] = n, t[3] = u) : u = t[3];
		var m = u, _;
		t[4] !== n.id || t[5] !== m ? (_ = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastTosModalLoadable").WAWebBizBroadcastTosModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
				onAccept: function() {
					o("WAWebModalManager").ModalManager.close(), m();
				},
				onDismiss: o("WAWebModalManager").closeModalManager,
				broadcastJid: n.id.toString()
			}), { transition: "modal-flow" });
		}, t[4] = n.id, t[5] = m, t[6] = _) : _ = t[6];
		var f = _, g;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x150mmf0" }, t[7] = g) : g = t[7];
		var h;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebBizBroadcastsCreationStrings").getNewBroadcastButtonLabel(), t[8] = h) : h = t[8];
		var y;
		return t[9] !== n.id || t[10] !== m || t[11] !== f ? (y = s.jsx("div", babelHelpers.extends({}, g, { children: s.jsx(r("WDSButton.react"), {
			label: h,
			onPress: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newBroadcastButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, o("WAWebWidToJid").widToBroadcastJid(n.id)), o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() ? m() : f();
			},
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			testid: "new-broadcast-header-button"
		}) })), t[9] = n.id, t[10] = m, t[11] = f, t[12] = y) : y = t[12], y;
	}
	function p() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
	}
	l.default = m;
}), 98);
