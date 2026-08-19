__d("WAWebBizAdCreationLocationTypeRadio.react", [
	"WAWebPencilRefreshedIcon.react",
	"WAWebRadio.react",
	"WDSButton.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.checked, n = e.label, a = e.onChange, i = e.onEditPress, l = e.secondaryLabel, u = e.testid, c = e.value;
		return s.jsxs("div", {
			"data-testid": u,
			className: "x6s0dn4 x78zum5 x1q0g3np x1n2onr6 xh8yej3",
			children: [s.jsx(o("WAWebRadio.react").RadioWithLabel, {
				checked: t,
				label: n,
				name: "location-type",
				onChange: a,
				secondaryLabel: l,
				theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
				value: c
			}), s.jsx("div", {
				className: "xvc5jky",
				children: s.jsx(r("WDSButton.react"), {
					Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
					onPress: i,
					size: "medium",
					variant: "borderless"
				})
			})]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
