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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.isStatusContent, l = a.onBack, s = a.onSubmit, c = a.onSuccess, m = a.reviewType, C = a.serverAppealReasons;
		p(function() {
			r("WAWebEnforcementActionLogging").setSurface(o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE.REQUEST_REVIEW_REASON_SCREEN);
		}, []);
		var b = _(null), v = b[0], S = b[1], R = _(!1), L = R[0], E = R[1], k = async function() {
			if (v == null) {
				o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
				return;
			}
			E(!0);
			try {
				await s(v), o("WAWebNewsletterIntegrityUtils").showReviewSubmissionSuccessToast(), c();
			} catch (e) {
				o("WAWebNewsletterIntegrityUtils").showReviewSubmissionFailureToast();
			} finally {
				E(!1);
			}
		}, I, T = C != null && C.length > 0 ? C.map(function(e) {
			var t = e.label, n = e.reason;
			return {
				value: n,
				getLabel: function() {
					return t;
				}
			};
		}) : null;
		switch (m) {
			case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT:
				I = T != null ? T : o("WAWebNewsletterRequestReviewReasons").RESPONSE_REPORT_APPEAL_REASON_LIST;
				break;
			case o("WAWebCommonNewsletterEnums").ReviewType.REPORT:
				I = T != null ? T : o("WAWebNewsletterRequestReviewReasons").REPORT_APPEAL_REASON_LIST;
				break;
			case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
				I = T != null ? T : o("WAWebNewsletterRequestReviewReasons").STATUS_REPORT_APPEAL_REASON_LIST;
				break;
			case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT:
				I = T != null ? T : i === !0 ? o("WAWebNewsletterRequestReviewReasons").STATUS_ENFORCEMENT_APPEAL_REASONS_LIST : o("WAWebNewsletterRequestReviewReasons").ENFORCEMENT_APPEAL_REASONS_LIST;
				break;
		}
		if (!I) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[RequestReviewReasonScreen] reasonList unavailable"])));
			return;
		}
		return d.jsxs(r("WAWebDrawer.react"), {
			theme: "gallery",
			ref: n,
			testid: "newsletter-request-review-reason-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "newsletter-review-reason"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: r("WAWebFbtCommon")("Request review"),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: function() {
					l == null || l();
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
						checkedValue: v,
						options: I.map(function(e) {
							var t = e.getLabel, n = e.value;
							return {
								value: n,
								label: t(),
								onChange: function() {
									return S(n);
								}
							};
						})
					}),
					d.jsx(h, {
						onSubmit: k,
						isDisabled: v == null || L,
						submittingReview: L
					})
				]
			}) })]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.InAppReviewFooterSection = h, l.InAppReviewReasonHeaderSection = y, l.RequestReviewReasonScreen = C;
}), 226);
