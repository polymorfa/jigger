__d("WAFlowsTextAreaBase.react", [
	"fbt",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsScrollable.react",
	"WAFlowsTextAreaCommon.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["platformConfig", "platformStyles"], u, c, d = c || (c = o("react")), m = c.useState;
	function p(e, t, n, r, o, a, i, l) {
		return [
			e.inputLabelWrapper,
			t ? e.inputLabelTransformRTL : e.inputLabelTransformLTR,
			n && e.error,
			n && e.inputLabelError,
			(o || r) && [e.inputLabelFocused, t ? e.inputLabelFocusedRTL : e.inputLabelFocusedLTR],
			o && !n && e.focused,
			a && !r && !n && !o && i && l && e.hoverLabelColor
		];
	}
	function _(e, t, n, r, o, a) {
		return [
			e.inputWithErrorIconContainer,
			t ? e.borderWithError : n ? e.borderFocused : e.borderWithNoError,
			r && o && a && e.hoverBackgroundColor
		];
	}
	function f(e, t, n) {
		return e ? String(t) : n != null ? n : "";
	}
	function g(t) {
		var n, a = t.platformConfig, i = a.errorIconId, l = i === void 0 ? "waf_error" : i, c = a.labelLinesMax, g = a.supportsHover, h = t.platformStyles, y = babelHelpers.objectWithoutPropertiesLoose(t, e), C = y.charsLeft, b = y.dataTestId, v = b === void 0 ? "" : b, S = y.enabled, R = S === void 0 ? !0 : S, L = y.error, E = y.focused, k = E === void 0 ? !1 : E, I = y.helperText, T = I === void 0 ? "" : I, D = y.label, x = y.labelVariant, $ = y.maxLength, P = y.name, N = y.required, M = N === void 0 ? !1 : N, w = y.value, A = o("WAFlowsEnvContext.react").useWAFlowsEnv(), F = A.env, O = m(!1), B = O[0], W = O[1], q = o("WAFlowsTextAreaCommon.react").textAreaHasErrorFn(L), U = typeof w == "string" && (n = w == null ? void 0 : w.length) != null ? n : 0, V = w != null && U > 0, H = f(q, L, T), G = p(h, F.isRTL, q, V, k, g, R, B), z = x === o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE, j = g ? {
			onMouseEnter: function() {
				return W(!0);
			},
			onMouseLeave: function() {
				return W(!1);
			}
		} : {};
		return d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(h.inputContainer), j, { children: [d.jsxs("div", babelHelpers.extends({}, u.props(h.inputWithInfoContainer), { children: [
			z && d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				ariaLabel: D,
				text: D,
				htmlFor: P,
				fontWeight: "bold",
				xstyle: h.inputLabelLarge,
				maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXTAREA_LABEL_LARGE
			}),
			d.jsx(r("WAFlowsScrollable.react"), {
				id: "waf_textarea_scrollable_" + P,
				nativeDraggingOnOverscroll: !1,
				xstyle: _(h, q, k, g, R, B),
				nativeDraggingControl: !0,
				children: d.jsxs(d.Fragment, { children: [d.jsx(o("WAFlowsTextAreaCommon.react").WAFlowsTextAreaField, babelHelpers.extends({}, y, {
					value: w,
					xstyle: h.input,
					placeholder: z && !M ? s._(
						/*BTDS*/
						""
					).toString() : void 0
				})), q && d.jsx(r("WAFlowsIcon.react"), {
					id: l,
					altText: s._(
						/*BTDS*/
						""
					),
					xstyle: o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.errorIconContainer,
					responsiveFontContainerXStyle: h.errorIconContainer
				})] })
			}),
			x == null && d.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, (u || (u = r("stylex"))).props(G), { children: [d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				ariaLabel: D,
				text: D,
				htmlFor: P,
				xstyle: h.inputLabel,
				responsiveFont: !1,
				maxLines: c
			}), !M && d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: "(" + o("WAFlowsLocalization").getOptionalFbt(F.platform).toString() + ")",
				htmlFor: P,
				xstyle: h.inputLabel,
				responsiveFont: !1,
				maxLines: c
			})] }))
		] })), d.jsxs("div", babelHelpers.extends({}, u.props(h.additionalInfo, q ? h.error : h.notFocused), { children: [(q || T != null) && d.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			dataTestId: v + "-helper-text",
			ariaLabel: H,
			text: H,
			xstyle: [h.additionalInfoText, o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.supportTextFontSize],
			htmlFor: P,
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXTAREA_HELPER
		}), $ != null && C != null && !q && d.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			text: $ - C + " / " + $,
			xstyle: [
				o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.charCounterMaxLength,
				F.isRTL ? h.charCounterMaxLengthRTL : h.charCounterMaxLengthLTR,
				h.additionalInfoText,
				o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.supportTextFontSize,
				R ? null : o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.inputContainerCounterDisabled
			],
			htmlFor: P
		})] }))] }));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
