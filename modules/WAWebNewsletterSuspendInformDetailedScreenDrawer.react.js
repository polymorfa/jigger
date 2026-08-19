__d("WAWebNewsletterSuspendInformDetailedScreenDrawer.react", [
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
	"WAWebMsgCollection",
	"WAWebNewsletterEnforcementInformMsg.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWhatThisMeansInfoSectionForChannelSuspension.react",
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
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.chat, _ = l.currentEnforcementAlert, f = l.onBack, g = l.onClickSeeOptions;
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []);
		var h = Array.from((n = (a = _.targetMsgMapForEvidence) == null ? void 0 : a.values()) != null ? n : []);
		if (h.length === 0) return null;
		var y = o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSAWhatYouNeedToKnowInfoSection(o("WAWebNewsletterIntegrityDrawerUiComponents.react").getDecisionModalCategoryForEnforcementSource(h[0].enforcementSource));
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "newsletter-suspended-inform-details-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-suspend-inform"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: f,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				xstyle: [
					p.container,
					m.paddingBlock36,
					m.paddingInline48
				],
				theme: "full-height",
				children: [
					c.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM }),
					c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").HeaderTitle, { content: s._(
						/*BTDS*/
						""
					) }),
					c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(_.enforcementCreationTime.toString()) }),
					c.jsx(r("WAWebWhatThisMeansInfoSectionForChannelSuspension.react"), {}),
					c.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
						enforcementType: _.enforcementType,
						enforcementSource: _.enforcementSource
					}),
					c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").InfoSection, { section: y }, y.key)
				]
			}), h.map(function(e) {
				if (e.msgData == null) return null;
				var t = o("WAWebMsgCollection").MsgCollection.gadd(e.msgData);
				return c.jsx(r("WAWebNewsletterEnforcementInformMsg.react"), {
					currentEnforcementAlert: _,
					currentEnforcementAppeal: e,
					msg: t,
					onClickSeeOptions: g,
					title: o("WAWebNewsletterIntegrityDrawerUiComponents.react").getMessageTitleForViolatingMessage(u)
				}, t.id.toString());
			})] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.NewsletterSuspendInformDetailedScreen = _;
}), 226);
