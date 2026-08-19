__d("WAFlowsFooter.react", [
	"WAFlowsButton.react",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsConfigurationContext.react",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsFormContext",
	"WAFlowsIcon.react",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsReactPortal.react",
	"WAFlowsStateProvider.react",
	"WAFlowsText.react",
	"WDSFlex.stylex",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = "x18re5ia-B", d = {
		footerContainer: {
			width: "xh8yej3",
			paddingTop: "x1q57ora",
			paddingRight: "xuax084",
			paddingBottom: "xmnamis",
			paddingLeft: "xirhts3",
			boxSizing: "x9f619",
			animationName: "xqcmdr3",
			animationDuration: "xs96ltj",
			animationFillMode: "x10e4vud",
			animationTimingFunction: "x1debuo4",
			$$css: !0
		},
		captionNormal: {
			fontSize: "x6prxxf",
			$$css: !0
		},
		captionBold: {
			fontSize: "x197yli1",
			color: "x14ug900",
			$$css: !0
		}
	}, m = {
		footerContainerStroke: {
			borderTopWidth: "x10b6y01",
			borderTopColor: "xx42vgk",
			borderTopStyle: "x13fuv20",
			$$css: !0
		},
		footerCTAPadding: {
			paddingBottom: "xdhoqf5",
			$$css: !0
		}
	}, p = { footerCTAPadding: {
		paddingBottom: "x117aka2",
		$$css: !0
	} }, _ = {
		footerContainer: {
			paddingBottom: "xsaxbkt",
			$$css: !0
		},
		captionNormal: {
			fontSize: "x1f6kntn",
			$$css: !0
		},
		icon: {
			backgroundColor: "xep993w",
			$$css: !0
		},
		notScrolling: {
			borderTopWidth: "x10b6y01",
			borderTopStyle: "x13fuv20",
			borderTopColor: "x1v8p93f",
			transitionDuration: "xq7dr57",
			willChange: "xw7we9",
			$$css: !0
		},
		scrolling: {
			borderTopColor: "xx42vgk",
			$$css: !0
		}
	}, f = function(t) {
		return t != null && t.length > 0;
	}, g = function(t, n, r) {
		return f(t) || f(n) || f(r);
	};
	function h(t) {
		var n = t.boldCaptions, a = t.centerCaption, i = t.centerCaptionDataTestId, l = t.enabled, s = t.leftCaption, c = t.leftCaptionDataTestId, m = t.rightCaption, p = t.rightCaptionDataTestId, _ = t.shoppingCaptionBottomContainer, h = t.shoppingCaptionTopContainer, y = o("WAFlowsEnvContext.react").useWAFlowsEnv(), C = y.env, v = b(C.platform), S = [n ? d.captionBold : d.captionNormal, v.captionNormal];
		return g(s, a, m) ? u.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1cvbfqh" },
			1: {}
		}[!!l << 0], { children: [
			h,
			u.jsxs("div", babelHelpers.extends({ role: "note" }, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexRow, !_ && o("WDSPaddings.stylex").wdsPaddings.paddingBottom12, f(s) && f(m) ? o("WDSFlex.stylex").wdsFlex.justifyBetween : o("WDSFlex.stylex").wdsFlex.justifyCenter), { children: [
				f(s) && u.jsx(o("WAFlowsText.react").WAFlowsTextCaption, {
					text: s != null ? s : "",
					xstyle: S,
					fontWeight: n ? "semibold" : "normal",
					"data-testid": void 0
				}),
				f(a) && u.jsx(o("WAFlowsText.react").WAFlowsTextCaption, {
					text: a != null ? a : "",
					xstyle: S,
					fontWeight: n ? "medium" : "normal",
					"data-testid": void 0
				}),
				f(m) && u.jsx(o("WAFlowsText.react").WAFlowsTextCaption, {
					text: m != null ? m : "",
					xstyle: S,
					fontWeight: n ? "medium" : "normal",
					"data-testid": void 0
				})
			] })),
			_
		] })) : u.jsx(u.Fragment, {});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t, n = e.bizCardCaptionDataTestId, r = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController().flowInitData, a = r[0], i = a == null || (t = a.environment) == null ? void 0 : t.flow_entry_point, l = o("WAFlowsInitEnvironmentTypes").FlowEntryPoint.cast(i) === o("WAFlowsInitEnvironmentTypes").FlowEntryPoint.BIZ_CARD_CTA;
		return null;
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.boldCaptions, a = n === void 0 ? !1 : n, i = t.centerCaption, l = t.dataTestId, s = l === void 0 ? "wae-footer-data-testid" : l, c = t.enabled, m = c === void 0 ? !0 : c, p = t.icon, f = t.isOverlayVisible, g = f === void 0 ? !1 : f, C = t.label, v = t.leftCaption, S = t.onClick, R = t.rightCaption, L = t.shoppingCaptionBottomContainer, E = t.shoppingCaptionTopContainer, k = t.xstyleButton, I = o("WAFlowsFormContext").useWAFlowsForm(), T = I.isFormValid, D = o("WAFlowsEnvContext.react").useWAFlowsEnv(), x = D.env, $ = o("WAFlowsConfigurationContext.react").useWAFlowsConfiguration(), P = $.allowCopyFieldsInSMBResponse, N = $.hideBranding, M = $.responseFooterAction, w = o("WAFlowsStateProvider.react").useWAFlowsState(), A = w.internal.scrollConfig, F = b(x.platform), O = M === "download" ? u.jsx(r("WAFlowsIcon.react"), {
			altText: "icon",
			id: "waf_download_icon",
			xstyle: _.icon
		}) : p, B = x.platform === "wa_web" ? {
			"data-testid": s + "-button",
			text: C,
			size: "medium",
			onClick: S,
			icon: M === "download" ? "waf_download_icon" : void 0,
			xstyle: [o("WDSFlex.stylex").wdsFlex.flexGrow1, k],
			disabled: !m || !T()
		} : {
			"data-testid": s + "-button",
			label: C,
			enabled: m && T(),
			onClick: S,
			labelMaxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.FOOTER_LABEL,
			icon: O,
			xstyle: k
		};
		return u.jsx(o("WAFlowsReactPortal.react").WAFlowsReactPortal, {
			targetId: "wae-portal-footer",
			children: g ? u.jsx(u.Fragment, {}) : u.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, (e || (e = r("stylex"))).props(d.footerContainer, o("WDSFlex.stylex").wdsFlex.flexColumn, F.footerContainerStroke, N && P && F.footerCTAPadding, F.footerContainer, F.notScrolling, (A == null ? void 0 : A.scrollTop) != null && A.scrollTop > 0 && F.scrolling), { children: [
				u.jsx(y, { bizCardCaptionDataTestId: s + "-biz-card-caption" }),
				u.jsx(h, {
					leftCaption: v,
					leftCaptionDataTestId: s + "-left-caption",
					centerCaption: i,
					centerCaptionDataTestId: s + "-center-caption",
					rightCaption: R,
					rightCaptionDataTestId: s + "-right-caption",
					boldCaptions: a,
					shoppingCaptionTopContainer: E,
					shoppingCaptionBottomContainer: L,
					enabled: m
				}),
				u.jsx(r("WAFlowsButton.react"), { props: B })
			] }))
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = {
			android: m,
			ios: p,
			wa_web: _
		};
		return t[e];
	}
	var v = "Footer", S = {
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			label: {
				type: "string",
				minLength: 1
			},
			helperText: { type: "string" },
			rightCaption: { type: "string" },
			leftCaption: { type: "string" },
			centerCaption: { type: "string" },
			visible: { type: "boolean" },
			screenID: { type: "string" },
			onClick: { instanceof: "Function" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		allOf: [{ not: { required: ["leftCaption", "centerCaption"] } }, { not: { required: ["rightCaption", "centerCaption"] } }],
		if: { required: ["leftCaption"] },
		then: { required: ["rightCaption"] },
		else: {
			if: { required: ["rightCaption"] },
			then: { required: ["leftCaption"] }
		},
		required: [
			"label",
			"onClick",
			"isSoftValidationMode"
		],
		additionalProperties: !1
	};
	l.WAFlowsFooter = C, l.TYPE = v, l.SCHEMA = S;
}), 98);
