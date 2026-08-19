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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(11), n = e.description, a = e.icon, i = e.testid, l, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = (u || (u = r("stylex"))).props([_.row, o("WDSMargins.stylex").wdsMargins.marginVer8]), s = { className: "x78zum5 xl56j7k x1849jeq x1gnnpzl" }, t[0] = l, t[1] = s) : (l = t[0], s = t[1]);
		var c;
		t[2] !== a ? (c = d.jsx("div", babelHelpers.extends({}, s, { children: a })), t[2] = a, t[3] = c) : c = t[3];
		var m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = (u || (u = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart24), t[4] = m) : m = t[4];
		var p;
		t[5] !== n || t[6] !== i ? (p = d.jsx("div", babelHelpers.extends({}, m, { children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
			color: "secondaryLighter",
			testid: i,
			children: n
		}) })), t[5] = n, t[6] = i, t[7] = p) : p = t[7];
		var f;
		return t[8] !== c || t[9] !== p ? (f = d.jsxs("div", babelHelpers.extends({}, l, { children: [c, p] })), t[8] = c, t[9] = p, t[10] = f) : f = t[10], f;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(16), n = e.isStatusContent, a = e.reviewType, i = a === o("WAWebCommonNewsletterEnums").ReviewType.REPORT || a === o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT || a === o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT, l;
		if (i) {
			var u;
			t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = [], t[0] = u) : u = t[0], l = u;
		} else if (n === !0) {
			var c;
			t[1] === Symbol.for("react.memo_cache_sentinel") ? (c = [{
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
			}], t[1] = c) : c = t[1], l = c;
		} else {
			var m;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = [{
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
			}], t[2] = m) : m = t[2], l = m;
		}
		var p;
		e: switch (a) {
			case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT: {
				var f;
				t[3] === Symbol.for("react.memo_cache_sentinel") ? (f = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				), t[3] = f) : f = t[3], p = f;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
			case o("WAWebCommonNewsletterEnums").ReviewType.REPORT: {
				var g;
				t[4] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				), t[4] = g) : g = t[4], p = g;
				break e;
			}
			case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT: {
				var h;
				t[5] !== n ? (h = n === !0 ? s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
						onClick: b,
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
						onClick: b,
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				), t[5] = n, t[6] = h) : h = t[6], p = h;
			}
		}
		var C;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			children: d.jsx(r("WAWebRequestReviewHeader.react"), {
				height: 88,
				width: 88
			})
		}), t[7] = C) : C = t[7];
		var v;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = d.jsx(o("WAWebFlex.react").FlexRow, {
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
		}), t[8] = v) : v = t[8];
		var S;
		t[9] !== p ? (S = d.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
			children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
				color: "secondaryLighter",
				marginTop: 8,
				testid: "newsletter-request-review-subtitle",
				xstyle: _.header,
				children: p
			})
		}), t[9] = p, t[10] = S) : S = t[10];
		var R;
		t[11] !== l ? (R = l.map(y), t[11] = l, t[12] = R) : R = t[12];
		var L;
		return t[13] !== S || t[14] !== R ? (L = d.jsxs(d.Fragment, { children: [
			C,
			v,
			S,
			R
		] }), t[13] = S, t[14] = R, t[15] = L) : L = t[15], L;
	}
	function y(e, t) {
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
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
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
	C.displayName = C.name + " [from " + i.id + "]";
	function b() {
		r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
	}
	l.AppealHeaderSectionRow = g, l.RequestReviewDescriptionScreen = C;
}), 226);
