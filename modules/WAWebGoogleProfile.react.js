__d("WAWebGoogleProfile.react", [
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebGoogleBusinessHours.react",
	"WAWebMap.react",
	"WAWebURLUtils",
	"WDSIconIcLogoGoogleMapsAttribution.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(18), n = e.address, a = e.hasCoverPhoto, i = e.isProfileLinked, l = e.latitude, m = e.longitude, p = e.website, _ = e.weekdayHours, f;
		t[0] !== a || t[1] !== i || t[2] !== _ ? (f = s.jsx(r("WAWebGoogleBusinessHours.react"), {
			weekdayHours: _,
			isProfileLinked: i,
			hasCoverPhoto: a
		}), t[0] = a, t[1] = i, t[2] = _, t[3] = f) : f = t[3];
		var g;
		t[4] !== n ? (g = n != null ? s.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "biz_google_profile_address_content",
			xstyle: [d.item, d.address],
			children: s.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				dir: "auto",
				children: n
			})
		}) : null, t[4] = n, t[5] = g) : g = t[5];
		var h;
		t[6] !== n || t[7] !== l || t[8] !== m ? (h = l != null && m != null ? s.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "biz_google_profile_address_map",
			xstyle: d.mapRow,
			children: s.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				xstyle: d.mapFrame,
				children: s.jsx(r("WAWebMap.react"), {
					lat: l,
					lng: m,
					name: n != null ? n : "",
					width: u,
					height: c,
					testid: "biz_google_profile_map"
				})
			})
		}) : null, t[6] = n, t[7] = l, t[8] = m, t[9] = h) : h = t[9];
		var y;
		t[10] !== p ? (y = p != null ? s.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "biz_google_profile_website",
			xstyle: d.website,
			children: s.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: r("WAWebURLUtils").toMaliciousSiteRedirect(p),
				testid: "biz_google_profile_website_link",
				children: s.jsx(r("WDSText.react"), {
					type: "Body1Emphasized",
					colorName: "contentActionEmphasized",
					dir: "auto",
					children: p
				})
			})
		}) : null, t[10] = p, t[11] = y) : y = t[11];
		var C;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (C = s.jsx(o("WAWebFlex.react").FlexRow, {
			testid: "biz_google_profile_maps_logo",
			xstyle: d.mapsLogo,
			children: s.jsx(r("WDSIconIcLogoGoogleMapsAttribution.react"), { iconXstyle: d.mapsLogoIcon })
		}), t[12] = C) : C = t[12];
		var b;
		return t[13] !== f || t[14] !== g || t[15] !== h || t[16] !== y ? (b = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			testid: "biz_google_profile_section",
			xstyle: d.section,
			children: [
				f,
				g,
				h,
				y,
				C
			]
		}), t[13] = f, t[14] = g, t[15] = h, t[16] = y, t[17] = b) : b = t[17], b;
	}
	l.default = m;
}), 98);
