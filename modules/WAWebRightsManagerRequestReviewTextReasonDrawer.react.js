__d("WAWebRightsManagerRequestReviewTextReasonDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebNewsletterIntegrityUtils",
	"WAWebRequestReviewReasonScreenDrawer.react",
	"WAWebRichTextField.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = { paddingInline48: {
		paddingInlineStart: "x1oiqv2n",
		paddingInlineEnd: "x15zmtp0",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, f = {
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
		textArea: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.onBack, a = e.onSubmit, i = e.onSuccess, l = e.ref;
		d(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.REQUEST_REVIEW_TEXT_REASON_SCREEN);
		}, []);
		var c = m(), g = p(""), h = g[0], y = g[1], C = p(!1), b = C[0], v = C[1], S = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				v(!0);
				try {
					yield a(h), o("WAWebNewsletterIntegrityUtils").showReviewSubmissionSuccessToast(), i();
				} catch (e) {
					o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
				} finally {
					v(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return u.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: l,
			testid: "newsletter-rm-request-review-text-reason-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-rights-review-text"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: r("WAWebFbtCommon")("Request review"),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: function() {
					t == null || t();
				}
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				theme: "full-height",
				animation: !1,
				xstyle: [
					f.container,
					o("WDSPaddings.stylex").wdsPaddings.paddingVer24,
					_.paddingInline48,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				children: [
					u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
							weight: "medium",
							xstyle: f.header,
							padding: 12,
							alignSelf: "center",
							color: "primary",
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						containerXstyle: f.textArea,
						maxLength: 250,
						onChange: function(t) {
							var e = t.text;
							y(e);
						},
						ref: c,
						multiline: !0,
						enterIsNewLine: !0,
						minVisibleLines: 3,
						placeholder: s._(
							/*BTDS*/
							""
						),
						value: h,
						focusOnMount: !0
					}),
					u.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						justify: "center",
						xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
						children: u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
							color: "secondaryLighter",
							marginTop: 8,
							xstyle: f.header,
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsx(o("WAWebRequestReviewReasonScreenDrawer.react").InAppReviewFooterSection, {
						onSubmit: S,
						isDisabled: !1,
						submittingReview: b
					})
				]
			}) })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
