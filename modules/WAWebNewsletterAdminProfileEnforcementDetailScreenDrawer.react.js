__d("WAWebNewsletterAdminProfileEnforcementDetailScreenDrawer.react", [
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
	"WAWebNewsletterAdminProfileDetailsView.react",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebServerDrivenWhyThisHappenedInfoSection.react",
	"WAWebWamEnumInteractionSurface",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useEffect, d = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		btnDrawer: {
			backgroundColor: "x18sjwge",
			textAlign: "x2b8uid",
			$$css: !0
		},
		adminProfileName: {
			fontSize: "x1jchvi3",
			fontWeight: "xfjzk2p",
			lineHeight: "x17mssa0",
			color: "x14ug900",
			marginTop: "x1de0gy",
			$$css: !0
		},
		sectionPadding: {
			paddingTop: "xijc0j3",
			paddingBottom: "xq1608w",
			paddingInlineStart: "x1oiqv2n",
			paddingInlineEnd: "x15zmtp0",
			$$css: !0
		}
	};
	function m(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.currentEnforcementAlert, s = i.onBack, m = i.onClickSeeOptions;
		c(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []);
		var p = o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSAWhatYouNeedToKnowInfoSection(o("WAWebNewsletterIntegrityDrawerUiComponents.react").getDecisionModalCategoryForEnforcementSource(l.enforcementSource)), _ = (n = l.enforcementExtraData) == null ? void 0 : n.adminProfileData, f = _ == null ? void 0 : _.name;
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: a,
			testid: "newsletter-admin-profile-details-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-admin-profile"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: s,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				xstyle: [d.container, d.sectionPadding],
				children: [
					u.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: l.enforcementType }),
					u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").HeaderTitle, { content: o("WAWebCommonNewsletterIntegrityStrings").getAdminProfileRemovedTextForList() }),
					u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(l.enforcementCreationTime.toString()) }),
					o("WAWebNewsletterGatingUtils").isNewsletterEnforcementPolicyEducationEnabled() ? u.jsx(r("WAWebServerDrivenWhyThisHappenedInfoSection.react"), { enforcementPolicyInformation: l.enforcementPolicyInformation }) : u.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
						enforcementType: l.enforcementType,
						enforcementViolationCategory: l.enforcementViolationCategory,
						enforcementSource: l.enforcementSource
					}),
					_ != null && f != null && f !== "" && u.jsx("div", {
						className: "x1sk1jro x12xbjc7",
						children: u.jsx(r("WAWebNewsletterAdminProfileDetailsView.react"), {
							nameXstyle: d.adminProfileName,
							size: 96,
							newsletterAdminProfile: {
								id: _.id,
								name: f,
								pictureId: _.pictureId,
								pictureDirectPath: _.pictureDirectPath
							}
						})
					}),
					u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: p }, p.key),
					u.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: d.btnDrawer,
						align: "center",
						children: u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").EnforcementDetailsFooter, {
							enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.ADMIN_PROFILE,
							onClickSeeOptions: function() {
								return m(l, l.appeal);
							}
						})
					})
				]
			}) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
