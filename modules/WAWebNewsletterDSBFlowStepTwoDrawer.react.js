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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { header: {
		textAlign: "x2b8uid",
		lineHeight: "x1evy7pa",
		$$css: !0
	} };
	function f(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = l.entityId, d = l.onBack, f = l.onClickGetReferenceNumber, h = p(!1), y = h[0], C = h[1];
		m(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.DSB_FLOW_SCREEN_2);
		}, []);
		var b = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled()) {
					f(u);
					return;
				}
				C(!0);
				try {
					var e = yield o("WAWebGetDsbInfoAction").getDsbInfoAction(u);
					f(e);
				} catch (e) {
					o("WAWebNewsletterIntegrityUtils").showDsbReferenceNumberFailureToast();
				} finally {
					C(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return c.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: i,
			testid: "newsletter-dsb-flow-step2-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-dsb-step-2"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebCommonNewsletterIntegrityStrings").getNewsletterDSBDrawerTitle(),
				onBack: d,
				testid: "newsletter-dsb-flow-step2-drawer",
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
				animation: !1,
				theme: "full-height",
				children: [
					c.jsx((a = o("WAWebFlex.react")).FlexRow, {
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
					c.jsx(a.FlexColumn, {
						align: "center",
						justify: "center",
						paddingStart: 24,
						paddingEnd: 24,
						children: c.jsx(o("WAWebNewsletterIntegrityDrawerUiComponents.react").DSBList, { points: g() })
					}),
					c.jsx(a.FlexColumn, {
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
					c.jsx(a.FlexColumn, {
						paddingStart: 24,
						paddingEnd: 24,
						margin: 24,
						align: "center",
						testid: "newsletter-dsb-flow-step2-get-reference-number",
						justify: "center",
						children: c.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							onClick: b,
							spinner: y === !0,
							disabled: y === !0,
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
