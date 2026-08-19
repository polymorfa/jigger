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
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useRef;
	function m(e) {
		var t = e.chat, n = d(!1);
		if (c(function() {
			n.current || (n.current = !0, o("WAWebBizBroadcastNewBroadcastFlowLoadable").prefetchNewBroadcastFlow());
		}, []), !o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1)) return null;
		var a = function() {
			o("WAWebBizBroadcastCreationQPLLogger").BizBroadcastCreationQPLLogger.start(o("WAWebBizBroadcastCreationQPLLogger").CreateBroadcastEntryPoint.BB_THREAD_HEADER, !0), o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(s.jsx(o("WAWebBizBroadcastNewBroadcastFlowLoadable").WAWebBizBroadcastNewBroadcastFlowLoadable, {
				chat: t,
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
				onBack: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
				}
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, i = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastTosModalLoadable").WAWebBizBroadcastTosModalLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD,
				onAccept: function() {
					o("WAWebModalManager").ModalManager.close(), a();
				},
				onDismiss: o("WAWebModalManager").closeModalManager,
				broadcastJid: t.id.toString()
			}), { transition: "modal-flow" });
		};
		return s.jsx("div", {
			className: "x150mmf0",
			children: s.jsx(r("WDSButton.react"), {
				label: o("WAWebBizBroadcastsCreationStrings").getNewBroadcastButtonLabel(),
				onPress: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newBroadcastButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_THREAD, o("WAWebWidToJid").widToBroadcastJid(t.id)), o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() ? a() : i();
				},
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				testid: "new-broadcast-header-button"
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
