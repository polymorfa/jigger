__d("WAWebStatusMuteContactPopup.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebStatusGatingUtils",
	"WAWebText.react",
	"react",
	"useWAWebContactValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginBottom32: {
		marginBottom: "xg6s713",
		$$css: !0
	} };
	function d(e) {
		var t = e.contact, n = e.isNewsletter, r = e.onCancel, a = e.onMute, i = o("useWAWebContactValues").useContactValues(t.id, [o("WAWebFrontendContactGetters").getFormattedName]), l = i[0], d = s._(
			/*BTDS*/
			""
		), m = s._(
			/*BTDS*/
			""
		), p;
		n ? p = s._(
			/*BTDS*/
			"",
			[s._param("name-of-channel-being-hidden", l)]
		) : o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() ? p = s._(
			/*BTDS*/
			""
		) : p = s._(
			/*BTDS*/
			"",
			[s._param("name-of-contact-being-muted", l)]
		);
		var _ = n || o("WAWebStatusGatingUtils").isStatusHideStringEnabled(), f;
		return n ? f = s._(
			/*BTDS*/
			"",
			[s._param("name-of-channel-being-hidden", l)]
		) : _ ? f = s._(
			/*BTDS*/
			"",
			[s._param("name-of-contact-being-hidden", l)]
		) : f = s._(
			/*BTDS*/
			"",
			[s._param("name-of-contact-being-muted", l)]
		), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.StatusReport,
			title: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: f }),
			okText: _ ? m : d,
			onOK: a,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: r,
			children: u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
					xstyle: c.marginBottom32,
					children: u.jsx(o("WAWebEmojiText.react").EmojiText, { text: p })
				})
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
