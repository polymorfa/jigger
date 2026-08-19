__d("WAWebSupportAIStartChatErrorModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebSupportAiSessionWamEvent",
	"WAWebText.react",
	"WAWebWamEnumSupportAiEventType",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect;
	function d(e) {
		var t = e.onEmail;
		return c(function() {
			new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_ERROR_DIALOG_SHOWN }).commit();
		}, []), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			tsNavigationData: {
				surface: "unknown",
				viewName: "support-chat-error"
			},
			children: u.jsx(o("WAWebFlex.react").FlexColumn, { children: u.jsx(r("WAWebFlexItem.react"), {
				align: "center",
				children: u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
					/*BTDS*/
					"",
					[s._param("contact_via_email_link", u.jsx(o("WAWebText.react").WAWebClickableText, {
						color: "teal",
						onClick: function() {
							new (o("WAWebSupportAiSessionWamEvent")).SupportAiSessionWamEvent({ supportAiEventType: o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE.CONTACT_US_ERROR_DIALOG_EMAIL_BUTTON_CLICKED }).commit(), t();
						},
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				) })
			}) })
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
