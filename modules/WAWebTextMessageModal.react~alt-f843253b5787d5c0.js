__d("WAWebTextMessageModal.react", [
	"fbt",
	"WAWebComposeBoxPopupPanel.react",
	"WAWebComposeConstants",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebMediaLinkPreview.react",
	"WAWebModal.react",
	"WAWebRichTextField.react",
	"WAWebRound.react",
	"WAWebUimUie.react",
	"WAWebWdsIcSendFilledIcon.react",
	"react",
	"useWAWebLinkPreview"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useState, m = { buttonRefresh: {
		color: "x1pse0pq",
		backgroundColor: "xfn3atn",
		$$css: !0
	} };
	function p(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.ariaLabel, l = a.defaultText, u = a.onBack, p = a.onSend, _ = a.title, f = d(l), g = f[0], h = f[1], y = o("useWAWebLinkPreview").findFirstWebLink(g), C = o("useWAWebLinkPreview").useLinkPreview(y), b = C.clearLinkPreview, v = C.linkPreview, S = function(t) {
			var e = t.text;
			h(e);
		}, R = function() {
			g.length && p(g, v);
		}, L = _ ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: _,
			direction: "auto",
			titlify: !0,
			ellipsify: !0
		}) : null, E = v || {}, k = E.description, I = E.matchedText, T = E.thumbnail, D = E.title, x = v ? c.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "ComposeBoxLinkPreview",
			escapable: !0,
			requestDismiss: b,
			children: c.jsx(r("WAWebComposeBoxPopupPanel.react"), {
				onOmit: b,
				children: c.jsx(r("WAWebMediaLinkPreview.react"), {
					title: D,
					compose: !0,
					matchedText: I,
					description: k,
					thumbnailJpeg: T,
					isLoading: !1
				})
			})
		}) : null;
		return c.jsx(o("WAWebModal.react").Modal, {
			ref: n,
			type: o("WAWebModal.react").ModalTheme.Box,
			children: c.jsxs(r("WAWebDrawer.react"), {
				tsNavigationData: {
					surface: "unknown",
					viewName: "text-message"
				},
				children: [
					c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onBack: u,
						children: L
					}),
					c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
						className: "x78zum5 xdt5ytf x1egiwwb xs9asl8 x6ikm8r x10wlt62 xhjsbib",
						children: [c.jsx("div", {
							className: "x1iyjqo2 x9desvi xjfo4ez xs9asl8 xf7qf19 xw2csxc x1odjw0f xhjsbib",
							children: c.jsx(o("WAWebRichTextField.react").RichTextField, {
								testid: "text-message-modal-text-unput",
								value: g,
								ariaLabel: i != null ? i : _,
								maxLength: o("WAWebComposeConstants").MAX_TXT_MSG_SIZE,
								onChange: S,
								emojiBtnPosition: "side",
								multiline: !0,
								spellCheck: !0,
								showRemaining: !0,
								focusOnMount: !0,
								theme: "small",
								textFormatEnabled: !0
							})
						}), x]
					}) }),
					c.jsx("div", {
						className: "x1n2onr6 x12xzxwr x1x0gksc x1280gxy",
						children: c.jsx("div", {
							className: "x10l6tqk x145d82y x3h4tne",
							children: c.jsx(o("WAWebRound.react").Round, {
								large: !0,
								onClick: R,
								label: s._(
									/*BTDS*/
									""
								),
								xstyle: m.buttonRefresh,
								children: c.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, {
									width: 30,
									directional: !0
								})
							})
						})
					})
				]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
