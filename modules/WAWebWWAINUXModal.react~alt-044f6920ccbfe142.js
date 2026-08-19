__d("WAWebWWAINUXModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebWWAINUXState",
	"WAWebWWAIPrivateProcessingBadge.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { buttonGroup: {
		paddingTop: "xexx8yu",
		$$css: !0
	} };
	function m(e) {
		var t = e.onAccept, n = e.onDecline, a = c(function() {
			o("WAWebWWAINUXState").markWWAINuxSeen(), t();
		}, [t]);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			buttonGroupStyle: d.buttonGroup,
			cancelText: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: a,
			onCancel: n,
			onOverlayClick: n,
			type: o("WAWebModal.react").ModalTheme.Promote,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsx(r("WDSText.react"), {
						textAlign: "center",
						type: "Headline1",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(r("WDSText.react"), {
						textAlign: "center",
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, { children: u.jsx(r("WAWebWWAIPrivateProcessingBadge.react"), {}) })
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
