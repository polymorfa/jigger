__d("WAWebBusinessContactDisclosureSection.react", [
	"fbt",
	"WAWebChevronIcon.react",
	"WAWebCommonCTWAConsumerTransparency",
	"WAWebConsumerTransparencyModalDialog.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebSingleChevronInCircleIcon.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, d = {
		businessAccount: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		iconColour: {
			color: "xhslqc4",
			$$css: !0
		},
		iconNewColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.chat;
		if (!o("WAWebCommonCTWAConsumerTransparency").shouldShowConsumerTransparencyDisclosure(t) || o("WAWebCommonCTWAConsumerTransparency").shouldShowROWConsumerDisclosure()) return null;
		var n = u.jsx(o("WAWebSingleChevronInCircleIcon.react").SingleChevronInCircleIcon, {
			height: 24,
			width: 24,
			xstyle: [d.iconNewColor, o("WDSMargins.stylex").wdsMargins.marginEnd20]
		});
		return u.jsx(r("WAWebDrawerSection.react"), {
			xstyle: [d.businessAccount, c.marginTop10],
			children: u.jsx(r("WAWebDrawerBlock.react"), {
				testid: "about-business-chat",
				onClick: o("WAWebConsumerTransparencyModalDialog.react").showConsumerTransparencyModalDialog,
				side: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
					height: 21,
					xstyle: d.iconColour
				}),
				children: u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [n, s._(
						/*BTDS*/
						""
					)]
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
