__d("WAWebBusinessGoogleProfilePreviewWebsiteRow.react", [
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebURLUtils",
	"WDSIconIcPublic.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		websiteIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		websiteRow: {
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
		var t = e.website;
		return t == null || t === "" ? null : s.jsxs(o("WAWebFlex.react").FlexRow, {
			testid: "biz-profile-google-website-row",
			xstyle: u.websiteRow,
			children: [s.jsx("div", {
				className: "x6s0dn4 x78zum5 x2lah0s x1nqnulx xl56j7k x1xvr5cs",
				"data-testid": "biz-profile-google-website-icon",
				children: s.jsx(r("WDSIconIcPublic.react"), {
					height: 24,
					iconXstyle: u.websiteIcon,
					width: 24
				})
			}), s.jsx("div", {
				className: "x6s0dn4 x78zum5 x1iyjqo2 xjl1d3b xeuugli",
				children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: r("WAWebURLUtils").toMaliciousSiteRedirect(t),
					testid: "biz-profile-google-website-link",
					children: s.jsx(r("WDSText.react"), {
						type: "Body1Emphasized",
						colorName: "contentActionEmphasized",
						dir: "auto",
						children: t
					})
				})
			})]
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
