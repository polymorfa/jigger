__d("WAWebBizAdCreationTargetingModalSelectableRow.react", [
	"WAWebFlex.react",
	"WDSButton.react",
	"WDSIconIcEdit.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		return s.jsx(r("WDSIconIcEdit.react"), {
			colorName: "contentDeemphasized",
			height: 20,
			width: 20
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
	function c(e) {
		var t = e.ariaLabel, n = e.onEditClick, a = e.subtitle, i = e.testid, l = e.title, c = e.xstyle;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			testid: i,
			xstyle: c,
			children: [s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [s.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1Emphasized",
				children: l
			}), s.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body2",
				children: a
			})] }), s.jsx(r("WDSButton.react"), {
				Icon: u,
				"aria-label": t ? String(t) : void 0,
				onPress: n,
				size: "medium",
				testid: i != null ? i + "_edit_button" : void 0,
				variant: "borderless"
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
