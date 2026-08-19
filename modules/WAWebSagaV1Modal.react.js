__d("WAWebSagaV1Modal.react", [
	"fbt",
	"WAWebCellV2.react",
	"WAWebConfirmPopup.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebModalManager",
	"WAWebSagaMessageMarker.react",
	"WAWebText.react",
	"WDSIconIcHelp.react",
	"WDSIconIcVolunteerActivism.react",
	"WDSIconWdsIcAi.react",
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
		color: "xhslqc4",
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
				children: [
					u.jsx(r("WAWebFlexItem.react"), {
						xstyle: c.marginBlock10,
						grow: 1,
						children: u.jsx(r("WAWebCellV2.react"), {
							interactive: !1,
							colorScheme: "lightest",
							size: "medium",
							detailLeft: u.jsx(r("WDSIconIcVolunteerActivism.react"), {
								iconXstyle: d.iconColor,
								height: 24,
								width: 24
							}),
							primary: u.jsx((e = o("WAWebText.react")).WAWebTextTitle, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							secondary: u.jsx(e.WAWebTextMuted, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					}),
					u.jsx(r("WAWebFlexItem.react"), {
						xstyle: c.marginTop10,
						grow: 1,
						children: u.jsx(r("WAWebCellV2.react"), {
							interactive: !1,
							colorScheme: "lightest",
							size: "medium",
							detailLeft: u.jsx(r("WDSIconWdsIcAi.react"), {
								iconXstyle: d.iconColor,
								height: 24,
								width: 24
							}),
							primary: u.jsx(e.WAWebTextTitle, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							secondary: u.jsx(e.WAWebTextMuted, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									"",
									[s._param("icon", u.jsx(r("WAWebSagaMessageMarker.react"), {
										height: 16,
										width: 16
									}))]
								)
							})
						})
					}),
					u.jsx(r("WAWebFlexItem.react"), {
						xstyle: c.marginTop10,
						grow: 1,
						children: u.jsx(r("WAWebCellV2.react"), {
							interactive: !1,
							colorScheme: "lightest",
							size: "medium",
							detailLeft: u.jsx(r("WDSIconIcHelp.react"), {
								iconXstyle: d.iconColor,
								height: 24,
								width: 24
							}),
							primary: u.jsx(e.WAWebTextTitle, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							}),
							secondary: u.jsx(e.WAWebTextMuted, {
								textWrap: "wrap",
								children: s._(
									/*BTDS*/
									""
								)
							})
						})
					})
				]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getSagaFaqUrl());
	}
	l.default = m;
}), 226);
