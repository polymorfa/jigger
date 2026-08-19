__d("WAWebUprPaymentMethodInfo.react", [
	"WAWebClickable.react",
	"WAWebFlex.react",
	"WAWebUprPaymentMethodRenderData",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		row: {
			backgroundColor: "x4wrhlh",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "xv8gdss",
			paddingBottom: "xgb8hzy",
			columnGap: "x1aj3ljl",
			width: "xh8yej3",
			boxSizing: "x9f619",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		selected: {
			outline: "xagbzdv",
			$$css: !0
		},
		info: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.accountType, n = e.identifierType, a = e.onSelect, i = e.paymentKey, l = e.selected, c = l === void 0 ? !1 : l, d = o("WAWebUprPaymentMethodRenderData").getUprMethodRenderData(t, n), m = d == null ? void 0 : d.icon, p = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: [u.row, c && u.selected],
			children: [m != null && s.jsx(o("WAWebFlex.react").FlexColumn, { children: s.jsx(m, {
				height: 40,
				width: 40
			}) }), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: u.info,
				children: [
					s.jsx("div", {
						className: "x14ug900 x13m54ha x6ikm8r x10wlt62 xlyipyv xuxw1ft",
						children: i.institution_name
					}),
					s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: i.key
					}),
					s.jsx(r("WDSText.react"), {
						type: "Body3",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: i.full_name_on_account
					})
				]
			})]
		});
		return a != null ? s.jsx(o("WAWebClickable.react").Clickable, {
			dataTestId: "upr_key_picker_row",
			onClick: a,
			children: p
		}) : p;
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
