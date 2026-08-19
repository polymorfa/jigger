__d("WAWebNewsletterGeosuspendInformDetailedScreenDrawer.react", [
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDSADateUtils",
	"WAWebDSAWhyThisHappenedInfoSection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebEnforcementHeader.react",
	"WAWebMsgCollection",
	"WAWebNewsletterEnforcementInformMsg.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWhatThisMeansInfoSectionForChannelGeosuspend.react",
	"WAWebWhereThisHappenedInfoSectionForChannelGeosuspend.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
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
	}, m = { container: {
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		$$css: !0
	} };
	function p(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.chat, p = l.currentEnforcementAlert, _ = l.onBack, f = l.onClickSeeOptions;
		c(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []);
		var g = o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSAWhatYouNeedToKnowInfoSection(o("WAWebNewsletterIntegrityDrawerUiComponents.react").getDecisionModalCategoryForEnforcementSource(p.enforcementSource)), h = Array.from((n = (a = p.targetMsgMapForEvidence) == null ? void 0 : a.values()) != null ? n : []);
		return h.length === 0 ? null : u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "newsletter-geosuspend-inform-detailed-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-geosuspend-detail"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: _,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: [
					m.container,
					d.paddingBlock36,
					d.paddingInline48
				],
				theme: "full-height",
				children: [
					u.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: p.enforcementType }),
					p.countryCodes != null && u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").HeaderTitle, { content: o("WAWebCommonNewsletterIntegrityStrings").getGeosuspensionStringForChannelAlertsDrawer(p.countryCodes) }),
					u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(p.enforcementCreationTime) }),
					p.countryCodes != null && u.jsx(r("WAWebWhatThisMeansInfoSectionForChannelGeosuspend.react"), { countryCount: p.countryCodes.length }),
					p.countryCodes != null && p.countryCodes.length > 1 && u.jsx(r("WAWebWhereThisHappenedInfoSectionForChannelGeosuspend.react"), { countryNames: p.countryCodes.map(function(e) {
						return e.countryName;
					}) }),
					u.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
						enforcementSource: p.enforcementSource,
						enforcementType: p.enforcementType
					}),
					u.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: g }, g.key)
				]
			}), h.map(function(e) {
				if (e.msgData == null) return null;
				var t = o("WAWebMsgCollection").MsgCollection.gadd(e.msgData);
				return u.jsx(r("WAWebNewsletterEnforcementInformMsg.react"), {
					currentEnforcementAlert: p,
					currentEnforcementAppeal: e,
					msg: t,
					onClickSeeOptions: f,
					title: o("WAWebNewsletterIntegrityDrawerUiComponents.react").getMessageTitleForViolatingMessage(s)
				}, t.id.toString());
			})] })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.NewsletterGeosuspendInformDetailedScreenDrawer = p;
}), 98);
