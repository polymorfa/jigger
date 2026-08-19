__d("WAWebVoipBetaCallingUpsellPopover.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { paddingBottom14: {
		paddingBottom: "x1g2khh7",
		$$css: !0
	} }, d = {
		container: {
			minWidth: "x1h80ny7",
			$$css: !0
		},
		textContainer: {
			maxWidth: "x1jkqq1h",
			$$css: !0
		},
		buttonContainer: {
			height: "x5yr21d",
			$$css: !0
		}
	};
	function m(e) {
		var t, n = e.onClick;
		return u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
			xstyle: [
				d.container,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
				c.paddingBottom14,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop12
			],
			align: "center",
			justify: "all",
			children: [u.jsxs(t.FlexColumn, {
				xstyle: d.textContainer,
				children: [u.jsx(t.FlexItem, { children: u.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: s._(
						/*BTDS*/
						""
					)
				}) }), u.jsx(t.FlexItem, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginTop2,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: s._(
							/*BTDS*/
							""
						)
					})
				})]
			}), u.jsx(t.FlexColumn, {
				xstyle: d.buttonContainer,
				align: "center",
				justify: "center",
				children: u.jsx(t.FlexItem, {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart16,
					children: u.jsx(r("WDSButton.react"), {
						variant: "filled",
						size: "medium",
						label: s._(
							/*BTDS*/
							""
						),
						onPress: n
					})
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
