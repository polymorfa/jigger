__d("WAWebRightsManagerRequestReviewDescriptionDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebRequestReviewDescriptionScreenDrawer.react",
	"WAWebRequestReviewHeader.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WDSIconIcInfo.react",
	"WDSIconIcSchedule.react",
	"WDSMargins.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
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
			alignItems: "x6s0dn4",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		header: {
			textAlign: "x2b8uid",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function p(e) {
		var t, n = e.onBack, a = e.onNext, i = e.ref;
		c(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.REQUEST_REVIEW_DESCRIPTION_SCREEN);
		}, []);
		var l = [{
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
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "newsletter-rm-request-review-drawer",
			theme: "gallery",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-rights-review-description"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				onBack: n,
				title: r("WAWebFbtCommon")("Request review"),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				xstyle: [
					m.container,
					d.paddingBlock36,
					d.paddingInline48,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				children: [
					u.jsx((t = o("WAWebFlex.react")).FlexRow, {
						align: "center",
						justify: "center",
						children: u.jsx(r("WAWebRequestReviewHeader.react"), {
							height: 88,
							width: 88
						})
					}),
					u.jsx(t.FlexRow, {
						align: "center",
						justify: "center",
						children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
							color: "primary",
							padding: 16,
							weight: "medium",
							xstyle: m.header,
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsx(t.FlexRow, {
						align: "center",
						justify: "center",
						xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
						children: u.jsx(o("WAWebText.react").WAWebTextTitle, {
							color: "primary",
							marginTop: 8,
							xstyle: m.header,
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					l.map(function(e, t) {
						var n = e.Icon, r = e.description, a = e.iconSize;
						return u.jsx(o("WAWebRequestReviewDescriptionScreenDrawer.react").AppealHeaderSectionRow, {
							description: r,
							icon: u.jsx(n, {
								height: a,
								width: a,
								xstyle: o("WDSMargins.stylex").wdsMargins.marginVer8,
								iconXstyle: m.secondaryColor
							}),
							testid: "newsletter-request-review-description-drawer-" + t
						}, t);
					}),
					u.jsx(t.FlexRow, {
						align: "center",
						justify: "center",
						xstyle: o("WDSMargins.stylex").wdsMargins.margin8,
						children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							onClick: a,
							testid: "newsletter-rm-request-review-step1-next",
							children: r("WAWebFbtCommon")("Next")
						})
					})
				]
			}) })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
