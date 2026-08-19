__d("WAWebGoogleProfile.react", [
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebGoogleBusinessHours.react",
	"WAWebMap.react",
	"WAWebURLUtils",
	"WDSIconIcLogoGoogleMapsAttribution.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 590, c = 120, d = {
		item: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			boxSizing: "x9f619",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		address: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		mapRow: {
			alignSelf: "xkh2ocl",
			boxSizing: "x9f619",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xyo0t3i",
			paddingTop: "x16ovd2e",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		mapFrame: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			height: "x1wkxgih",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		mapsLogo: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			boxSizing: "x9f619",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		mapsLogoIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		section: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		website: {
			alignItems: "x6s0dn4",
			alignSelf: "xkh2ocl",
			boxSizing: "x9f619",
			columnGap: "x1aj3ljl",
			height: "xwa7hi",
			minHeight: "xvkrg5o",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.address, n = e.hasCoverPhoto, a = e.isProfileLinked, i = e.latitude, l = e.longitude, m = e.website, p = e.weekdayHours;
		return s.jsxs(o("WAWebFlex.react").FlexColumn, {
			testid: "biz_google_profile_section",
			xstyle: d.section,
			children: [
				s.jsx(r("WAWebGoogleBusinessHours.react"), {
					weekdayHours: p,
					isProfileLinked: a,
					hasCoverPhoto: n
				}),
				t != null ? s.jsx(o("WAWebFlex.react").FlexRow, {
					testid: "biz_google_profile_address_content",
					xstyle: [d.item, d.address],
					children: s.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						dir: "auto",
						children: t
					})
				}) : null,
				i != null && l != null ? s.jsx(o("WAWebFlex.react").FlexRow, {
					testid: "biz_google_profile_address_map",
					xstyle: d.mapRow,
					children: s.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: d.mapFrame,
						children: s.jsx(r("WAWebMap.react"), {
							lat: i,
							lng: l,
							name: t != null ? t : "",
							width: u,
							height: c,
							testid: "biz_google_profile_map"
						})
					})
				}) : null,
				m != null ? s.jsx(o("WAWebFlex.react").FlexRow, {
					testid: "biz_google_profile_website",
					xstyle: d.website,
					children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: r("WAWebURLUtils").toMaliciousSiteRedirect(m),
						testid: "biz_google_profile_website_link",
						children: s.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentActionEmphasized",
							dir: "auto",
							children: m
						})
					})
				}) : null,
				s.jsx(o("WAWebFlex.react").FlexRow, {
					testid: "biz_google_profile_maps_logo",
					xstyle: d.mapsLogo,
					children: s.jsx(r("WDSIconIcLogoGoogleMapsAttribution.react"), { iconXstyle: d.mapsLogoIcon })
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
