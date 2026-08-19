__d("WAFlowsTextInputBase.react", [
	"fbt",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsIconButton.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsTextInputCommon.react",
	"justknobx",
	"react",
	"stylex",
	"useButtonFocusOnFocusOut.react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = ["platformConfig", "platformStyles"], u, c, d = c || (c = o("react")), m = c, p = m.useRef, _ = m.useState;
	function f(e, t, n) {
		return e ? n.borderWithError : t ? n.borderFocused : n.borderWithNoError;
	}
	function g(e, t, n, r, a, i, l, s, u, c) {
		return [
			e.inputLabelWrapper,
			t ? e.inputLabelTransformRTL : e.inputLabelTransformLTR,
			n === !0 && !r && a && i && e.hoverLabelColor,
			l && e.error,
			!s && e.inputLabelWrapperOptional,
			l && e.inputLabelError,
			(u || r) && [e.inputLabelFocused, t ? e.inputLabelFocusedRTL : e.inputLabelFocusedLTR],
			u && !l && e.focused,
			!a && o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.disabled,
			c != null && [t ? e.inputLabelWithLeadIconRTL : e.inputLabelWithLeadIconLTR, e.inputLabelWithLead]
		];
	}
	function h(t) {
		var n = t.platformConfig, a = n.errorIconId, i = a === void 0 ? "waf_error" : a, l = n.labelLinesMax, c = n.supportsHover, m = t.platformStyles, h = babelHelpers.objectWithoutPropertiesLoose(t, e), y = h.dataTestId, C = y === void 0 ? "" : y, b = h.enabled, v = b === void 0 ? !0 : b, S = h.error, R = S === void 0 ? "" : S, L = h.focused, E = L === void 0 ? !1 : L, k = h.helperText, I = k === void 0 ? "" : k, T = h.helperTextWrapperXstyle, D = h.inputLabelXstyle, x = h.inputType, $ = h.label, P = h.labelVariant, N = h.leadIcon, M = h.name, w = h.onClick, A = h.required, F = A === void 0 ? !1 : A, O = h.showClearButtonOnBlur, B = O === void 0 ? !1 : O, W = h.trailIcon, q = h.useCustomBlur, U = q === void 0 ? !1 : q, V = h.value, H = o("WAFlowsEnvContext.react").useWAFlowsEnv(), G = H.env, z = _(!1), j = z[0], K = z[1], Q = p(), X = p(), Y = typeof V == "string" ? V.length : 0, J = o("WAFlowsTextInputCommon.react").textInputHasErrorFn(R), Z = V != null && Y > 0, ee = r("useButtonFocusOnFocusOut.react")(X, Q, E, Z, r("justknobx")._("147")), te = (B || E || ee) && Z, ne = (u || (u = r("stylex")))(m.inputWithErrorIconContainer, c === !0 && v && j && m.hoverBackgroundColor, f(J, E, m)), re = g(m, G.isRTL, c, Z, v, j, J, F, E, N), oe = J ? String(R) : I || "", ae = [
			o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.supportTextFontSize,
			m.additionalInfo,
			J ? m.error : m.notFocused
		], ie = [m.input, N && (G.isRTL ? m.inputWithLeadIconRTL : m.inputWithLeadIconLTR)], le = P === o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE, se = c === !0 ? {
			onMouseEnter: function() {
				return K(!0);
			},
			onMouseLeave: function() {
				return K(!1);
			}
		} : {};
		return d.jsxs(d.Fragment, { children: [d.jsx("div", babelHelpers.extends({}, u.props(m.inputContainer), { children: d.jsxs("div", babelHelpers.extends({}, u.props(m.inputWithInfoContainer), { children: [
			le && d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: $,
				htmlFor: M,
				ariaLabel: $,
				xstyle: m.inputLabelLarge,
				fontWeight: "bold",
				maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_LABEL_LARGE
			}),
			d.jsxs("div", babelHelpers.extends({ className: ne }, se, { children: [
				N,
				d.jsx(o("WAFlowsTextInputCommon.react").WAFlowsTextInputField, babelHelpers.extends({}, h, w && v ? { onClick: w } : {}, {
					xstyle: ie,
					inputType: x,
					ref: Q,
					placeholder: le && !F ? s._(
						/*BTDS*/
						""
					).toString() : void 0
				})),
				J && d.jsx(r("WAFlowsIcon.react"), {
					id: i,
					altText: s._(
						/*BTDS*/
						""
					),
					xstyle: [
						o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.iconContainer,
						o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.errorIconContainerNew,
						o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.errorIcon
					],
					responsiveFontContainerXStyle: [m.errorIcon, o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.errorIconContainer]
				}),
				!J && !te && W,
				!J && d.jsx(r("WAFlowsIconButton.react"), {
					buttonRef: X,
					iconID: "waf_cancel",
					altText: s._(
						/*BTDS*/
						""
					),
					ariaLabel: s._(
						/*BTDS*/
						""
					),
					dataTestId: "waf-text-input-clear-btn",
					onClick: function() {
						var e;
						t.onClear == null || t.onClear(), E && !U && (Q == null || (e = Q.current) == null || e.focus());
					},
					xstyleBackground: [
						o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.iconContainer,
						o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.clearBtn,
						te ? m.clearBtnActive : o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.clearBtnHidden,
						v && j && c && m.hoverClearButtonBackgroundColor
					],
					xstyleIcon: m.clearIcon,
					xstyleResponsiveLayer: m.clearBtnResponsiveLayer,
					enabled: te
				})
			] })),
			P == null && d.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, (u || (u = r("stylex"))).props(re, D), { children: [d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: $,
				ariaLabel: $,
				htmlFor: M,
				xstyle: m.inputLabel,
				responsiveFont: !1,
				maxLines: l
			}), !F && d.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: "(" + o("WAFlowsLocalization").getOptionalFbt(G.platform).toString() + ")",
				ariaLabel: "(" + o("WAFlowsLocalization").getOptionalFbt(G.platform).toString() + ")",
				htmlFor: M,
				xstyle: m.inputLabel,
				responsiveFont: !1,
				maxLines: l
			})] }))
		] })) })), (J === !0 || I) && d.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			ariaLabel: oe,
			dataTestId: C + "-helper-text",
			text: oe,
			xstyle: ae,
			responsiveFontContainerXStyle: T,
			htmlFor: M,
			maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_HELPER
		})] });
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
