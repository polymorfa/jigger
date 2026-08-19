__d("WAWebViolatingMessagesScreenDrawer.react", [
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
	"WAWebMsgCollection",
	"WAWebNewsletterEnforcementInformMsg.react",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WAWebWhatThisMeansInfoSectionForChannelHidden.react",
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
	}, p = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.currentEnforcementAlert, s = a.onBack, u = a.onClickSeeOptions;
		if (d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.ENFORCEMENT_DETAIL_SCREEN);
		}, []), l.targetMsgMapForEvidence == null) return null;
		var m = Array.from(l.targetMsgMapForEvidence.values()), p = m.reduce(function(e, t) {
			if (t.appealState === "CONTENT_UNAVAILABLE") return e;
			if (t.msgData != null) {
				var n = o("WAWebMsgCollection").MsgCollection.gadd(t.msgData);
				e.push(c.jsx(r("WAWebNewsletterEnforcementInformMsg.react"), {
					currentEnforcementAlert: l,
					currentEnforcementAppeal: t,
					msg: n,
					onClickSeeOptions: u,
					title: o("WAWebNewsletterIntegrityDrawerUiComponents.react").getMessageTitleForViolatingMessage(i)
				}, n.id.toString()));
			}
			return e;
		}, []);
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "newsletter-violating-messages-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-violating-messages"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterAlertsDrawerTitle(),
				onBack: s,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [c.jsx(f, { currentEnforcementAlert: l }), p] })]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n = e.currentEnforcementAlert, a = (t = o("WAWebNewsletterIntegrityDrawerUiComponents.react")).DSAWhatYouNeedToKnowInfoSection(t.getDecisionModalCategoryForEnforcementSource(n.enforcementSource));
		return c.jsxs(r("WAWebDrawerSection.react"), {
			animation: !1,
			xstyle: [
				p.container,
				m.paddingBlock36,
				m.paddingInline48,
				o("WDSMargins.stylex").wdsMargins.marginBottom0
			],
			children: [
				c.jsx(r("WAWebEnforcementHeader.react"), { enforcementType: o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG }),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
						weight: "medium",
						xstyle: p.header,
						padding: 16,
						color: "primary",
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsx(t.SubHeaderTitle, { content: o("WAWebDSADateUtils").getDSADateDisplayString(n.enforcementCreationTime.toString()) }),
				c.jsx(r("WAWebWhatThisMeansInfoSectionForChannelHidden.react"), {}),
				c.jsx(r("WAWebDSAWhyThisHappenedInfoSection.react"), {
					enforcementType: n.enforcementType,
					enforcementSource: n.enforcementSource
				}),
				c.jsx(t.InfoSection, { section: a }, a.key)
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
