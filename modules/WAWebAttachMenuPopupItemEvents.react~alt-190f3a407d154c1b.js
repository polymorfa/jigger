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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { icon: {
		color: "xvzgjlx",
		$$css: !0
	} };
	function d(e) {
		var t = e.chat, n = function() {
			var e = o("WAWebChatGetters").getIsGroup(t) ? o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint.GroupChatAttachmentTray : o("WAWebSharableEventGatingUtils").SharableEventCreationEntryPoint.IndividualChatAttachmentTray;
			if (o("WAWebSharableEventGatingUtils").isSharableEventCreationEnabled(e) && !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled()) {
				o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebSharableEventCreationNotSupportedModal.react").SharableEventCreationNotSupportedModal, {}));
				return;
			}
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebEventsCreateEventModalFlow.react"), { preselectedChat: t }), { blockClose: !0 }), o("WAWebPrepareMessageSendingAction").prepareChatForMessageSending(t);
		}, a = function() {
			n();
		};
		return u.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-events",
			onPress: a,
			Icon: r("WDSIconIcCalendarMonthFilled.react"),
			iconXstyle: c.icon,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
