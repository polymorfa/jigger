__d("WAWebSendMsgToVerifyIdentityPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebFbtCommon",
	"WAWebModalManager",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.name, n = e.onOK, a = function() {
			o("WAWebModalManager").ModalManager.close(), n();
		}, i = t || s._(
			/*BTDS*/
			""
		), l = s._(
			/*BTDS*/
			"",
			[s._param("name", i)]
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "verify-identity"
			},
			onOK: a,
			okText: r("WAWebFbtCommon")("OK"),
			children: u.jsx("div", { children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: l }) })
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
