__d("WAWebNewsletterProfilePictureDeletionDetailScreenDrawer.react", [
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
	"WAWebServerDrivenWhyThisHappenedInfoSection.react",
	"WAWebWamEnumInteractionSurface",
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
	}, p = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		btnDrawer: {
			backgroundColor: "x18sjwge",
			textAlign: "x2b8uid",
			$$css: !0
		}
	};
	function _(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.currentEnforcementAlert, u = i.onBack, _ = i.onClickSeeOptions;
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []);
		var f = (n = o("WAWebNewsletterIntegrityDrawerUiComponents.react")).DSAWhatYouNeedToKnowInfoSection(n.getDecisionModalCategoryForEnforcementSource(l.enforcementSource));
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: a,
			testid: "newsletter-profile-picture-deletion-details-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-pfp-deletion"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: u,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				xstyle: [
					p.container,
					m.paddingBlock36,
					m.paddingInline48
				],
				children: [
					c.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: l.enforcementType }),
					c.jsx(n.HeaderTitle, { content: s._(
						/*BTDS*/
						""
					) }),
					c.jsx(n.SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(l.enforcementCreationTime.toString()) }),
					o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() ? c.jsx(r("WAWebServerDrivenWhyThisHappenedInfoSection.react"), { enforcementPolicyInformation: l.enforcementPolicyInformation }) : c.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
						enforcementType: l.enforcementType,
						enforcementViolationCategory: l.enforcementViolationCategory,
						enforcementSource: l.enforcementSource
					}),
					c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: f }, f.key),
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: p.btnDrawer,
						align: "center",
						children: c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").EnforcementDetailsFooter, {
							enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.PROFILE_PICTURE_DELETION,
							onClickSeeOptions: function() {
								return _(l, l.appeal);
							}
						})
					})
				]
			}) })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
