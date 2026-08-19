__d("WAWebSagaModal.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebText.react",
	"WDSIconWdsIcAiFilled.react",
	"WDSIconWdsIcChatSupport.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		marginBlock10: {
			marginTop: "x1anpbxc",
			marginBottom: "xyorhqc",
			$$css: !0
		},
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		}
	}, d = { iconColor: {
		color: "x1v5yvga",
		$$css: !0
	} };
	function m() {
		var e;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: s._(
				/*BTDS*/
				""
			),
			okText: r("WAWebFbtCommon")("OK"),
			onOK: o("WAWebModalManager").closeModalManager,
			cancelText: r("WAWebFbtCommon")("Learn more"),
			onCancel: p,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				children: [u.jsx(r("WAWebFlexItem.react"), {
					xstyle: c.marginBlock10,
					grow: 1,
					children: u.jsx(r("WAWebCellV2.react"), {
						interactive: !1,
						colorScheme: "lightest",
						size: "medium",
						detailLeft: u.jsx(r("WDSIconWdsIcChatSupport.react"), { iconXstyle: d.iconColor }),
						primary: u.jsx((e = o("WAWebText.react")).WAWebTextTitle, { children: s._(
							/*BTDS*/
							""
						) }),
						secondary: u.jsx(e.WAWebTextMuted, {
							textWrap: "wrap",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				}), u.jsx(r("WAWebFlexItem.react"), {
					xstyle: c.marginTop10,
					grow: 1,
					children: u.jsx(r("WAWebCellV2.react"), {
						interactive: !1,
						colorScheme: "lightest",
						size: "medium",
						detailLeft: u.jsx(r("WDSIconWdsIcAiFilled.react"), {
							colorName: "accent",
							height: 24,
							width: 24
						}),
						primary: u.jsx(e.WAWebTextTitle, { children: s._(
							/*BTDS*/
							""
						) }),
						secondary: u.jsx(e.WAWebTextMuted, {
							textWrap: "wrap",
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				})]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSagaFaqUrl());
	}
	l.default = m;
}), 226);
