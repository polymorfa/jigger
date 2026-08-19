__d("WAWebNewsletterDSBFlowStepTwoDrawer.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebFlex.react",
	"WAWebGetDsbInfoAction",
	"WAWebNewsletterGatingUtils",
	"WAWebNewsletterIntegrityDrawerUiComponents.react",
	"WAWebNewsletterIntegrityUtils",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { header: {
		textAlign: "x2b8uid",
		lineHeight: "x1evy7pa",
		$$css: !0
	} };
	function f(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.entityId, u = i.onBack, d = i.onClickGetReferenceNumber, f = p(!1), h = f[0], y = f[1];
		m(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.DSB_FLOW_SCREEN_2);
		}, []);
		var C = async function() {
			if (!o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled()) {
				d(l);
				return;
			}
			y(!0);
			try {
				var e = await o("WAWebGetDsbInfoAction").getDsbInfoAction(l);
				d(e);
			} catch (e) {
				o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
			} finally {
				y(!1);
			}
		};
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: a,
			testid: "newsletter-dsb-flow-step2-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-dsb-step-2"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterDSBDrawerTitle(),
				onBack: u,
				testid: "newsletter-dsb-flow-step2-drawer",
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [
					c.jsx((n = o("WAWebFlex.react")).FlexRow, {
						align: "center",
						justify: "center",
						wrap: "wrap",
						margin: 24,
						paddingStart: 24,
						paddingEnd: 24,
						children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
							xstyle: _.header,
							testid: "newsletter-dsb-flow-step-2-header",
							weight: "medium",
							color: "primary",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsx(n.FlexColumn, {
						align: "center",
						justify: "center",
						paddingStart: 24,
						paddingEnd: 24,
						children: c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSBList, { points: g() })
					}),
					c.jsx(n.FlexColumn, {
						paddingStart: 24,
						paddingEnd: 24,
						margin: 24,
						align: "center",
						justify: "center",
						children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
							xstyle: _.header,
							paddingTop: 12,
							testid: "newsletter-dsb-flow-step2-consent",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					c.jsx(n.FlexColumn, {
						paddingStart: 24,
						paddingEnd: 24,
						margin: 24,
						align: "center",
						testid: "newsletter-dsb-flow-step2-get-reference-number",
						justify: "center",
						children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							onClick: C,
							spinner: h === !0,
							disabled: h === !0,
							children: s._(
								/*BTDS*/
								""
							)
						})
					})
				]
			}) })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g() {
		return [
			{
				testid: "newsletter-dsb-flow-step2-bulletpoint-1",
				text: function() {
					return s._(
						/*BTDS*/
						""
					);
				},
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			},
			{
				testid: "newsletter-dsb-flow-step2-bulletpoint-2",
				text: function() {
					return s._(
						/*BTDS*/
						""
					);
				},
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			},
			{
				testid: "newsletter-dsb-flow-step2-bulletpoint-3",
				text: function() {
					return s._(
						/*BTDS*/
						""
					);
				},
				subtext: function() {
					return s._(
						/*BTDS*/
						""
					);
				}
			}
		];
	}
	l.WAWebNewsletterDSBFlowStepTwoDrawer = f;
}), 226);
