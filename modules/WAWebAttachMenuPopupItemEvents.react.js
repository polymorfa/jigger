__d("WAWebAttachMenuPopupItemEvents.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebEventsCreateEventModalFlow.react",
	"WAWebModalManager",
	"WAWebPrepareMessageSendingAction",
	"WAWebSharableEventCreationNotSupportedModal.react",
	"WAWebSharableEventGatingUtils",
	"WDSIconIcCalendarMonthFilled.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "xvzgjlx",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.chat, a;
		if (t[0] !== n) {
			var i = function() {
				var e = o("WAWebChatGetters").getIsGroup(n) ? o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint.GroupChatAttachmentTray : o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint.IndividualChatAttachmentTray;
				if (o("WAWebSharableEventGatingUtils").isSharableEventCreationEnabled(e) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
					o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharableEventCreationNotSupportedModal.react").SharableEventCreationNotSupportedModal, {}));
					return;
				}
				o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebEventsCreateEventModalFlow.react"), { preselectedChat: n }), { blockClose: !0 }), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(n);
			};
			a = function() {
				i();
			}, t[0] = n, t[1] = a;
		} else a = t[1];
		var l = a, d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[2] = d) : d = t[2];
		var m;
		return t[3] !== l ? (m = u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-events",
			onPress: l,
			Icon: r("WDSIconIcCalendarMonthFilled.react"),
			iconXstyle: c.icon,
			title: d
		}), t[3] = l, t[4] = m) : m = t[4], m;
	}
	l.default = d;
}), 226);
