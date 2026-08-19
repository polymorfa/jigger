__d("WAWebRequestPhoneNumberModal.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebConfirmPopup.react",
	"WAWebLogRequestPhoneNumber",
	"WAWebModalManager",
	"WAWebSendRequestPhoneNumberChatAction",
	"WAWebStateUtils",
	"WAWebWamEnumPnhActionType",
	"WAWebWamEnumPnhChatTypeType",
	"WAWebWamEnumPnhMessageChatParty",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.entryPoint, n = o("WAWebChatCollection").ChatCollection.getActive();
		c(function() {
			t && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.REQUEST_DIALOG_APPEAR,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: t
			});
		}, [t]);
		var r = function() {
			n && (o("WAWebSendRequestPhoneNumberChatAction").sendRequestPhoneNumber(o("WAWebStateUtils").unproxy(n)), t != null && o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper({
				action: o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SEND_REQUEST,
				chatParty: o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
				chatType: o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
				entryPoint: t
			})), o("WAWebModalManager").ModalManager.close();
		}, a = s._(
			/*BTDS*/
			""
		), i = s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			""
		), d = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "request-phone-number"
			},
			onOK: r,
			okText: l,
			onCancel: o("WAWebModalManager").closeModalManager,
			cancelText: d,
			title: a,
			children: i
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
