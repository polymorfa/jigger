__d("WAWebNewsletterSuspendedDetailedScreenDrawer.react", [
	"fbt",
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
	"WAWebRemediationOptionSection.react",
	"WAWebServerDrivenWhyThisHappenedInfoSection.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWhatThisMeansInfoSectionForChannelSuspension.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useEffect, m = {
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
	}, p = { container: {
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		$$css: !0
	} };
	function _(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.currentEnforcementAlert, u = i.onBack, _ = i.onClickSeeOptions;
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []);
		var f = (n = o("WAWebNewsletterIntegrityDrawerUiComponents.react")).DSAWhatYouNeedToKnowInfoSection(n.getDecisionModalCategoryForEnforcementSource(l.enforcementSource));
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: a,
			testid: "newsletter-suspended-details-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-suspended-detail"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: u,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: [
					p.container,
					m.paddingBlock36,
					m.paddingInline48
				],
				theme: "full-height",
				children: [
					c.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: l.enforcementType }),
					c.jsx(n.HeaderTitle, { content: s._(
						/*BTDS*/
						""
					) }),
					c.jsx(n.SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(l.enforcementCreationTime.toString()) }),
					c.jsx(r("WAWebWhatThisMeansInfoSectionForChannelSuspension.react"), {}),
					o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() ? c.jsx(r("WAWebServerDrivenWhyThisHappenedInfoSection.react"), { enforcementPolicyInformation: l.enforcementPolicyInformation }) : c.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
						enforcementType: l.enforcementType,
						enforcementViolationCategory: l.enforcementViolationCategory,
						enforcementSource: l.enforcementSource
					}),
					c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: f }, f.key),
					l.enforcementViolationCategory != null && c.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginHor12, o("WDSMargins.stylex").wdsMargins.marginTop12],
						justify: "center",
						children: c.jsx(r("WAWebRemediationOptionSection.react"), {
							buttonType: "primary",
							stretch: !1,
							enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND,
							onClickSeeOptions: function() {
								return _(l, l.appeal);
							}
						})
					})
				]
			}) })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.NewsletterSuspendedDetailedScreen = _;
}), 226);
