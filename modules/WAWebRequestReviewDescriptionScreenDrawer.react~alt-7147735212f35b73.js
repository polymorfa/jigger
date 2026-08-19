__d("WAWebRequestReviewDescriptionScreenDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCommonNewsletterEnums",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebRequestReviewHeader.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WDSIconIcInfo.react",
	"WDSIconIcSchedule.react",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useEffect, p = {
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
	}, _ = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x6s0dn4",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		row: {
			display: "x78zum5",
			width: "xh8yej3",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.onNext;
		return d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: o("WDSMargins.stylex").wdsMargins.margin8,
			children: d.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				onClick: t,
				testid: "newsletter-request-review-step1-next",
				children: r("WAWebFbtCommon")("Next")
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.description, n = e.icon, a = e.testid;
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props([_.row, o("WDSMargins.stylex").wdsMargins.marginVer8]), { children: [d.jsx("div", {
			className: "x78zum5 xl56j7k x1849jeq x1gnnpzl",
			children: n
		}), d.jsx("div", babelHelpers.extends({}, u.props(o("WDSMargins.stylex").wdsMargins.marginStart24), { children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "secondaryLighter",
			testid: a,
			children: t
		}) }))] }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.isStatusContent, n = e.reviewType, a = n === o("WAWebCommonNewsletterEnums").ReviewType.REPORT || n === o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT || n === o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT, i;
		a ? i = [] : t === !0 ? i = [{
			description: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcInfo.react"),
			iconSize: 24
		}, {
			description: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcSchedule.react"),
			iconSize: 24
		}] : i = [{
			description: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcInfo.react"),
			iconSize: 24
		}, {
			description: s._(
				/*BTDS*/
				""
			),
			Icon: r("WDSIconIcSchedule.react"),
			iconSize: 24
		}];
		var l;
		switch (n) {
			case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT: {
				l = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				break;
			}
			case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
			case o("WAWebCommonNewsletterEnums").ReviewType.REPORT: {
				l = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				break;
			}
			case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT: {
				l = t === !0 ? s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: C,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				) : s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: C,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				);
				break;
			}
		}
		return d.jsxs(d.Fragment, { children: [
			d.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: d.jsx(r("WAWebRequestReviewHeader.react"), {
					height: 88,
					width: 88
				})
			}),
			d.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: d.jsx(o("WAWebText.react").WAWebTextLarge, {
					color: "primary",
					padding: 16,
					weight: "medium",
					xstyle: _.header,
					children: s._(
						/*BTDS*/
						""
					)
				})
			}),
			d.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
				children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
					color: "secondaryLighter",
					marginTop: 8,
					testid: "newsletter-request-review-subtitle",
					xstyle: _.header,
					children: l
				})
			}),
			i.map(function(e, t) {
				var n = e.Icon, r = e.description, a = e.iconSize;
				return d.jsx(g, {
					description: r,
					icon: d.jsx(n, {
						height: a,
						width: a,
						xstyle: o("WDSMargins.stylex").wdsMargins.marginVer8,
						iconXstyle: _.secondaryColor
					}),
					testid: "newsletter-request-review-description-drawer-" + t
				}, t);
			})
		] });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.isStatusContent, l = a.onBack, s = a.onNext, u = a.reviewType;
		return m(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.REQUEST_REVIEW_DESCRIPTION_SCREEN);
		}, []), d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "newsletter-request-review-description-drawer",
			theme: "gallery",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-review-description"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				onBack: l,
				title: r("WAWebFbtCommon")("Request review"),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				xstyle: [
					_.container,
					p.paddingBlock36,
					p.paddingInline48,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				children: [d.jsx(h, {
					reviewType: u,
					isStatusContent: i
				}), d.jsx(f, { onNext: s })]
			}) })]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
	}
	l.AppealHeaderSectionRow = g, l.RequestReviewDescriptionScreen = y;
}), 226);
