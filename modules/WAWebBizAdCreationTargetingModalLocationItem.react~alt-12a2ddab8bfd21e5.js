__d("WAWebBizAdCreationTargetingModalLocationItem.react", [
	"WAWebBizAdCreationTargetingModalLocationDisplayUtils",
	"WAWebFlex.react",
	"WAWebNoop",
	"WDSBaseCheckbox.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		locationRow: {
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		},
		locationText: {
			flex: "x98rzlu",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.isSelected, n = e.location, a = e.onToggle, i = e.showSubtitle, l = i ? o("WAWebBizAdCreationTargetingModalLocationDisplayUtils").buildLocationSubtitle(n) : "";
		return s.jsx("div", {
			className: "x6s0dn4 x1ypdohk x16ovd2e x12xbjc7 xh8yej3",
			"aria-pressed": t,
			"data-testid": "biz_native_ads_location_item",
			onClick: function() {
				return a(n.key, !t);
			},
			onKeyDown: function(r) {
				(r.key === "Enter" || r.key === " ") && (r.preventDefault(), a(n.key, !t));
			},
			role: "button",
			tabIndex: 0,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				xstyle: u.locationRow,
				children: [s.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: u.locationText,
					children: [s.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body1",
						children: n.name
					}), l.length > 0 ? s.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						children: l
					}) : null]
				}), s.jsx(r("WDSBaseCheckbox.react"), {
					onChange: r("WAWebNoop"),
					shape: "circle",
					value: t
				})]
			})
		}, n.key);
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
