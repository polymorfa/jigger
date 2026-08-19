__d("WAWebUnnamedNewGroupAlreadyExistsModal.react", [
	"fbt",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebComposeBoxActions",
	"WAWebConfirmPopup.react",
	"WAWebFindChatAction",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.existingUnnamedGroup, n = e.onCancel, r = e.onCreateNewGroupClick, a = e.onEnd, i = e.ref, l = {
			text: s._(
				/*BTDS*/
				""
			),
			onClick: r
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "unnamed-group-exists"
			},
			ref: i,
			title: s._(
				/*BTDS*/
				""
			),
			onOK: function() {
				a(), o("WAWebFindChatAction").findOrCreateLatestChat(t, "existingUnnamedGroup").then(function(e) {
					var t = e.chat;
					o("WAWebCmd").Cmd.openChatBottom({
						chat: t,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ExistingGroupRedirect
					}).then(function(e) {
						e && (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t), o("WAWebCmd").Cmd.endFlow());
					});
				});
			},
			onCancel: n,
			onOverlayClick: n,
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: s._(
				/*BTDS*/
				""
			),
			extraButtonProps: l,
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
