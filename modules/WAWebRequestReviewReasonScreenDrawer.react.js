__d("WAWebRequestReviewReasonScreenDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebButton.react",
	"WAWebCommonNewsletterEnums",
	"WAWebCommonNewsletterIntegrityStrings",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEnforcementActionLogging",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebNewsletterIntegrityUtils",
	"WAWebNewsletterRequestReviewReasons",
	"WAWebRadio.react",
	"WAWebText.react",
	"WAWebWamEnumInteractionSurface",
	"WDSMargins.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState, f = {
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
	}, g = {
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
		}
	};
	function h(e) {
		var t = o("react-compiler-runtime").c(5), n = e.isDisabled, r = e.onSubmit, a = e.submittingReview, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebCommonNewsletterIntegrityStrings").getRequestAppealButtonText(), t[0] = i) : i = t[0];
		var l;
		return t[1] !== n || t[2] !== r || t[3] !== a ? (l = d.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: o("WDSMargins.stylex").wdsMargins.margin20,
			align: "center",
			justify: "center",
			children: d.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				testid: "newsletter-submit-review-button",
				onClick: r,
				disabled: n,
				spinner: a,
				children: i
			})
		}), t[1] = n, t[2] = r, t[3] = a, t[4] = l) : l = t[4], l;
	}
	function y() {
		var e = o("react-compiler-runtime").c(1), t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: d.jsx(o("WAWebText.react").WAWebTextLarge, {
				weight: "medium",
				xstyle: g.header,
				padding: 16,
				alignSelf: "center",
				color: "primary",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), e[0] = t) : t = e[0], t;
	}
	function C(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = i.isStatusContent, s = i.onBack, c = i.onSubmit, m = i.onSuccess, C = i.reviewType, b = i.serverAppealReasons;
		p(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.REQUEST_REVIEW_REASON_SCREEN);
		}, []);
		var v = _(null), S = v[0], R = v[1], L = _(!1), E = L[0], k = L[1], I = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (S == null) {
					o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
					return;
				}
				k(!0);
				try {
					yield c(S), o("WAWebNewsletterIntegrityUtils").showReviewSubmissionSuccessToast(), m();
				} catch (e) {
					o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
				} finally {
					k(!1);
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), T, D = b != null && b.length > 0 ? b.map(function(e) {
			var t = e.label, n = e.reason;
			return {
				value: n,
				getLabel: function() {
					return t;
				}
			};
		}) : null;
		switch (C) {
			case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT:
				T = D != null ? D : o("WAWebNewsletterRequestReviewReasons").RESPONSE_REPORT_APPEAL_REASON_LIST;
				break;
			case o("WAWebCommonNewsletterEnums").ReviewType.REPORT:
				T = D != null ? D : o("WAWebNewsletterRequestReviewReasons").REPORT_APPEAL_REASON_LIST;
				break;
			case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
				T = D != null ? D : o("WAWebNewsletterRequestReviewReasons").STATUS_REPORT_APPEAL_REASON_LIST;
				break;
			case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT:
				T = D != null ? D : l === !0 ? o("WAWebNewsletterRequestReviewReasons").STATUS_ENFORCEMENT_APPEAL_REASONS_LIST : o("WAWebNewsletterRequestReviewReasons").ENFORCEMENT_APPEAL_REASONS_LIST;
				break;
		}
		if (!T) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[RequestReviewReasonScreen] reasonList unavailable"])));
			return;
		}
		return d.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: a,
			testid: "newsletter-request-review-reason-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-review-reason"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: r("WAWebFbtCommon")("Request review"),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: function() {
					s == null || s();
				}
			}), d.jsx(r("WAWebDrawerBody.react"), { children: d.jsxs(r("WAWebDrawerSection.react"), {
				theme: "full-height",
				animation: !1,
				xstyle: [
					g.container,
					f.paddingBlock36,
					f.paddingInline48,
					o("WDSMargins.stylex").wdsMargins.marginBottom0
				],
				children: [
					d.jsx(y, {}),
					d.jsx(o("WAWebRadio.react").RadioGroup, {
						name: "appeal-radio-group",
						testid: "appeal-reason",
						theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
						checkedValue: S,
						options: T.map(function(e) {
							var t = e.getLabel, n = e.value;
							return {
								value: n,
								label: t(),
								onChange: function() {
									return R(n);
								}
							};
						})
					}),
					d.jsx(h, {
						onSubmit: I,
						isDisabled: S == null || E,
						submittingReview: E
					})
				]
			}) })]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.InAppReviewFooterSection = h, l.InAppReviewReasonHeaderSection = y, l.RequestReviewReasonScreen = C;
}), 226);
