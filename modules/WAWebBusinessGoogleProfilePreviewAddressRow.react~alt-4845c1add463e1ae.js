__d("WAWebBusinessGoogleProfilePreviewAddressRow.react", [
	"WAWebFlex.react",
	"WDSIconIcLocationOn.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		addressIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		addressRow: {
			alignItems: "x1cy8zhl",
			boxSizing: "x9f619",
			columnGap: "xs2akgl",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		}
	};
	function c(e) {
		var t = e.address;
		return t == null || t === "" ? null : s.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-address-row",
			xstyle: u.addressRow,
			children: [s.jsx("div", {
				className: "x6s0dn4 x78zum5 x2lah0s x1nqnulx xl56j7k x1xvr5cs",
				"data-testid": "biz-profile-google-address-icon",
				children: s.jsx(r("WDSIconIcLocationOn.react"), {
					height: 24,
					iconXstyle: u.addressIcon,
					width: 24
				})
			}), s.jsx("div", {
				className: "x6s0dn4 x78zum5 x1iyjqo2 xjl1d3b xeuugli",
				children: s.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentActionEmphasized",
					dir: "auto",
					children: t
				})
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
