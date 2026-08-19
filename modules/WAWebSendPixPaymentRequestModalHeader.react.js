__d("WAWebSendPixPaymentRequestModalHeader.react", [
	"fbt",
	"WAWebCloseRefreshedIcon.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcArrowBack.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { row: {
		height: "xn3w4p2",
		$$css: !0
	} };
	function d(e) {
		var t = e.headerButton;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.row,
			gap: 16,
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				paddingEnd: 2,
				children: u.jsx(r("WDSButton.react"), {
					"aria-label": t.type === "back" ? s._(
						/*BTDS*/
						""
					) : r("WAWebFbtCommon")("Close"),
					Icon: t.type === "back" ? r("WDSIconIcArrowBack.react") : o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
					onPress: function() {
						t.onClick();
					},
					variant: "borderless"
				})
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				paddingStart: 12,
				children: u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
