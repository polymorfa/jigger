__d("WAWebRightsManagerRequestReviewReasonDrawer.react", [
	"WAWebButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebNewsletterRequestReviewReasons",
	"WAWebRadio.react",
	"WAWebRequestReviewReasonScreenDrawer.react",
	"WAWebWamEnumInteractionSurface",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = { paddingInline48: {
		paddingInlineStart: "x1oiqv2n",
		paddingInlineEnd: "x15zmtp0",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, _ = { container: {
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		alignItems: "x6s0dn4",
		justifyContent: "x1nhvcw1",
		$$css: !0
	} };
	function f(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = a.onNext, s = a.serverAppealReasons;
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.REQUEST_REVIEW_REASON_SCREEN);
		}, []);
		var c = m(null), f = c[0], g = c[1], h = s != null && s.length > 0 ? s.map(function(e) {
			var t = e.label, n = e.reason;
			return {
				value: n,
				getLabel: function() {
					return t;
				}
			};
		}) : null, y = h != null ? h : o("WAWebNewsletterRequestReviewReasons").RM_ENFORCEMENT_APPEAL_REASONS_LIST;
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "newsletter-rm-request-review-reason-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-rights-review-reason"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: r("WAWebFbtCommon")("Request review"),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: function() {
					i == null || i();
				}
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				theme: "full-height",
				animation: !1,
				xstyle: [
					_.container,
					o("WDSPaddings.stylex").wdsPaddings.paddingVer24,
					p.paddingInline48,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				children: [
					u.jsx(o("WAWebRequestReviewReasonScreenDrawer.react").InAppReviewReasonHeaderSection, {}),
					u.jsx(o("WAWebRadio.react").RadioGroup, {
						name: "appeal-radio-group",
						testid: "rm-appeal-reason",
						theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
						checkedValue: f,
						options: y.map(function(e) {
							var t = e.getLabel, n = e.value;
							return {
								value: n,
								label: t(),
								onChange: function() {
									return g(n);
								}
							};
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						xstyle: [o("WDSMargins.stylex").wdsMargins.margin8, o("WDSPaddings.stylex").wdsPaddings.paddingTop16],
						align: "center",
						justify: "center",
						children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							disabled: f == null,
							onClick: function() {
								return l(f);
							},
							testid: "newsletter-rm-request-review-step2-next",
							children: r("WAWebFbtCommon")("Next")
						})
					})
				]
			}) })]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
