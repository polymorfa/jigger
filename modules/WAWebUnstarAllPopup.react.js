__d("WAWebUnstarAllPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebModalManager",
	"WAWebSendUnstarAllChatAction",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.chat, n = e.msgs, r = function() {
			t && t.pendingAction++, o("WAWebSendUnstarAllChatAction").unstarAllMessages(n, t).finally(function() {
				t && t.pendingAction--;
			}), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "unstar-all"
			},
			onOK: r,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			children: u.jsx("div", { children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: s._(
				/*BTDS*/
				""
			) }) })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
