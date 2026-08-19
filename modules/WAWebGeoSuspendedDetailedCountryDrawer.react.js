__d("WAWebGeoSuspendedDetailedCountryDrawer.react", [
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDSADateUtils",
	"WAWebDSAWhyThisHappenedInfoSection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebEnforcementHeader.react",
	"WAWebFlex.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebServerDrivenWhyThisHappenedInfoSection.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWhatThisMeansInfoSectionForChannelGeosuspend.react",
	"WAWebWhereThisHappenedInfoSectionForChannelGeosuspend.react",
	"WDSMargins.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useEffect, d = {
		paddingBlock36: {
			paddingTop: "xijc0j3",
			paddingBottom: "xq1608w",
			$$css: !0
		},
		paddingInline48: {
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, m = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x1nhvcw1",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		btnContainer: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function p(e) {
		var t, n, a, i, l, s = e.currentEnforcementAlert, c = e.onClickSeeOptions, p = ((t = s.enforcementExtraData) == null ? void 0 : t.enforcementOriginLegalBasis) != null ? o("WAWebCommonNewsletterEnums").NewsletterDSADecisionModalCategory.LEGAL_TDR : o("WAWebNewsletterIntegrityDrawerUiComponents.react").getDecisionModalCategoryForEnforcementSource(s.enforcementSource), _ = o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSAWhatYouNeedToKnowInfoSection(p);
		return u.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			theme: "full-height",
			xstyle: [
				m.container,
				d.paddingBlock36,
				d.paddingInline48,
				o("WDSMargins.stylex").wdsMargins.marginBottom0
			],
			children: [
				u.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: s.enforcementType }),
				s.countryCodes != null && u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").HeaderTitle, { content: o("WAWebCommonNewsletterIntegrityStrings").getGeosuspensionStringForChannelAlertsDrawer(s.countryCodes) }),
				u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(s.enforcementCreationTime.toString()) }),
				u.jsx(r("WAWebWhatThisMeansInfoSectionForChannelGeosuspend.react"), { countryCount: (n = (a = s.countryCodes) == null ? void 0 : a.length) != null ? n : 0 }),
				s.countryCodes != null && s.countryCodes.length > 1 && u.jsx(r("WAWebWhereThisHappenedInfoSectionForChannelGeosuspend.react"), { countryNames: (i = s.countryCodes) == null ? void 0 : i.map(function(e) {
					return e.countryName;
				}) }),
				o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() ? u.jsx(r("WAWebServerDrivenWhyThisHappenedInfoSection.react"), { enforcementPolicyInformation: s.enforcementPolicyInformation }) : u.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
					enforcementType: s.enforcementType,
					enforcementSource: s.enforcementSource,
					enforcementOriginLegalBasis: (l = s.enforcementExtraData) == null ? void 0 : l.enforcementOriginLegalBasis
				}),
				u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: _ }, _.key),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					paddingTop: 8,
					xstyle: m.btnContainer,
					align: "center",
					children: s.appeal != null && u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").EnforcementDetailsFooter, {
						enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND,
						onClickSeeOptions: function() {
							return c(s, s.appeal);
						}
					})
				})
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(t) {
		var n = o("react-compiler-runtime").c(15), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.currentEnforcementAlert, d = l.onBack, m = l.onClickSeeOptions, _;
		if (n[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = [], n[3] = _) : _ = n[3], c(f, _), s.countryCodes == null) return null;
		var g;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (g = {
			surface: "unknown",
			viewName: "newsletter-geosuspend-country"
		}, n[4] = g) : g = n[4];
		var h;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (h = o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(), n[5] = h) : h = n[5];
		var y;
		n[6] !== d ? (y = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: h,
			onBack: d,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[6] = d, n[7] = y) : y = n[7];
		var C;
		n[8] !== s || n[9] !== m ? (C = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(p, {
			onClickSeeOptions: m,
			currentEnforcementAlert: s
		}) }), n[8] = s, n[9] = m, n[10] = C) : C = n[10];
		var b;
		return n[11] !== i || n[12] !== y || n[13] !== C ? (b = u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "newsletter-geosuspended-detailed-drawer",
			tsNavigationData: g,
			children: [y, C]
		}), n[11] = i, n[12] = y, n[13] = C, n[14] = b) : b = n[14], b;
	}
	function f() {
		r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
	}
	l.NewsletterGeoSuspendedDetailCountryScreen = _;
}), 98);
