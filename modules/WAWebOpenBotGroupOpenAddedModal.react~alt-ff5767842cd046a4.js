__d("WAWebOpenBotGroupOpenAddedModal.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		headerText: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		sectionTitle: {
			width: "xdzyupr",
			lineHeight: "x1o2sk6j",
			$$css: !0
		}
	};
	function m() {
		var t, n, a, i = function() {
			o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getOpenGroupLearnMoreUrl()), o("WAWebModalManager").ModalManager.close();
		}, l = r("useWAWebFocusOnMount")(), u = s._(
			/*BTDS*/
			""
		);
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: i,
			cancelText: s._(
				/*BTDS*/
				""
			),
			onCancel: o("WAWebModalManager").closeModalManager,
			type: o("WAWebModal.react").ModalTheme.Promote,
			ref: l,
			children: c.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
				align: "center",
				xstyle: [(n = o("WDSMargins.stylex")).wdsMargins.marginVerAuto, o("WDSPaddings.stylex").wdsPaddings.paddingBottom16],
				children: [
					c.jsx(r("WAWebBox.react"), {
						xstyle: [
							d.headerText,
							n.wdsMargins.marginHor8,
							n.wdsMargins.marginTop16,
							n.wdsMargins.marginBottom8
						],
						children: c.jsx((a = o("WAWebText.react")).WAWebTextLarge, {
							weight: "bold",
							children: u
						})
					}),
					c.jsx(t.FlexRow, {
						className: (e || (e = r("stylex")))(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
						children: c.jsxs(o("WAWebFlex.react").FlexItem, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle],
							children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								""
							) })]
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexRow, {
						className: e(o("WDSMargins.stylex").wdsMargins.marginHor8, o("WDSMargins.stylex").wdsMargins.marginVer16),
						children: c.jsxs(o("WAWebFlex.react").FlexItem, {
							xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor8, d.sectionTitle],
							children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
								/*BTDS*/
								""
							) }), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
								/*BTDS*/
								""
							) })]
						})
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
