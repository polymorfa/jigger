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
	"react"
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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.currentEnforcementAlert, l = a.onBack, s = a.onClickSeeOptions;
		return c(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []), i.countryCodes == null ? null : u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "newsletter-geosuspended-detailed-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-geosuspend-country"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: l,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(p, {
				onClickSeeOptions: s,
				currentEnforcementAlert: i
			}) })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.NewsletterGeoSuspendedDetailCountryScreen = _;
}), 98);
