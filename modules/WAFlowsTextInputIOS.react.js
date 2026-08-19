__d("WAFlowsTextInputIOS.react", [
	"fbt",
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsIconButton.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsTextInputCommon.react",
	"WDSMargins.stylex",
	"justknobx",
	"react",
	"useButtonFocusOnFocusOut.react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useRef, d = {
		input: {
			paddingTop: "x1fzx2rs",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xs9h3oa",
			paddingInlineStart: "x8945me",
			minHeight: "xm4gzq9",
			"::placeholder_color": "x1hcheoe",
			"::placeholder_font": "xwqs2kq",
			"::placeholder_fontSize": "xdggqi8",
			$$css: !0
		},
		readOnlyInput: {
			pointerEvents: "x47corl",
			opacity: "x1u564od",
			$$css: !0
		},
		readOnlyInputWithValue: {
			"-webkit-text-fill-color": "x1o12k7e",
			$$css: !0
		},
		inputGrow: {
			flexGrow: "xgyuaek",
			$$css: !0
		},
		inputShrink: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		inputLabel: {
			color: "x14ug900",
			fontWeight: "x1xq4eza",
			minWidth: "x1i70mun",
			flexShrink: "x2lah0s",
			marginTop: "x1pneszp",
			marginBottom: "xfc6v5b",
			marginLeft: "x1rbinjs",
			marginInlineStart: null,
			marginInlineEnd: null,
			boxSizing: "x1afcbsf",
			alignItems: "x6s0dn4",
			wordWrap: "xp5j34i",
			overflowWrap: "x1h4wwuj",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			width: "x18itk1x",
			display: "x104kibb",
			$$css: !0
		},
		helperTextWrapper: {
			marginTop: "x1mjqqkp",
			marginInlineEnd: "xpntml2",
			marginBottom: "xhbfen4",
			marginInlineStart: "x1mpj02h",
			$$css: !0
		},
		helperText: {
			color: "xhslqc4",
			$$css: !0
		},
		errorMessage: {
			color: "x30a034",
			width: "xh8yej3",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xs9h3oa",
			paddingInlineStart: "x8945me",
			marginTop: "xch2pb1",
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			textAlign: "x1yc453h",
			direction: "x1epdd7z",
			$$css: !0
		},
		errorContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		clearIcon: {
			width: "x4l342p",
			height: "xst1q5n",
			backgroundColor: "x16w0wmm",
			WebkitMaskSize: "x1at36vg",
			$$css: !0
		},
		clearBtnResponsiveLayer: {
			width: "x4l342p",
			height: "xst1q5n",
			borderStartStartRadius: "xvs2etk",
			borderStartEndRadius: "xg3wpu6",
			borderEndEndRadius: "x1jwbhkm",
			borderEndStartRadius: "xgg4q86",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		errorIconLTR: {
			marginRight: "x1t5w0y4",
			marginLeft: "x1lj0y6e",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		errorIconRTL: {
			marginLeft: "xt3xpxm",
			marginRight: "x4u3zk5",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		inputLabelLarge: {
			marginBottom: "xhbfen4",
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		clearBtnActive: {
			opacity: "x1hc1fzr",
			backgroundColor: "x16w0wmm",
			zIndex: "x1vjfegm",
			display: "x1lliihq",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.dataTestId, n = t === void 0 ? "" : t, a = e.enabled, i = a === void 0 ? !0 : a, l = e.error, m = l === void 0 ? "" : l, f = e.focused, g = f === void 0 ? !1 : f, h = e.helperText, y = h === void 0 ? "" : h, C = e.helperTextWrapperXstyle, b = e.inputLabelXstyle, v = e.label, S = e.labelVariant, R = e.leadIcon, L = e.name, E = e.onClear, k = e.onClick, I = e.readOnly, T = e.required, D = T === void 0 ? !1 : T, x = e.showClearButtonOnBlur, $ = x === void 0 ? !1 : x, P = e.trailIcon, N = e.triggerClickOnTouchTabbable, M = N === void 0 ? !1 : N, w = e.useCustomBlur, A = w === void 0 ? !1 : w, F = e.value, O = c(), B = c(), W = o("WAFlowsEnvContext.react").useWAFlowsEnv(), q = W.env, U = D ? "" : o("WAFlowsLocalization").getOptionalFbt(q.platform).toString(), V = o("WAFlowsTextInputCommon.react").textInputHasErrorFn(m), H = _(F), G = S === o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE, z = r("useButtonFocusOnFocusOut.react")(B, O, g, H, r("justknobx")._("147")), j = ($ || g || z) && H, K = !1;
		return u.jsxs("div", {
			className: "x78zum5 xdt5ytf xm4gzq9",
			children: [
				G && u.jsx(p, {
					ariaLabel: v,
					enabled: i,
					readOnly: I,
					onClick: k,
					children: u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						ariaLabel: v,
						text: v,
						fontWeight: "bold",
						xstyle: [
							d.inputLabelLarge,
							b,
							!i && o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.disabled
						],
						htmlFor: L,
						maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_LABEL_LARGE
					})
				}),
				u.jsxs("div", babelHelpers.extends({}, {
					0: { className: "x78zum5 xh8yej3 x9f619 x6s0dn4 xdt5ytf x16w0wmm x1oe9cf5 x1ofsvvn x1xi8z3d xlwhlzo x5yr21d" },
					1: { className: "x78zum5 xh8yej3 x9f619 x6s0dn4 xdt5ytf x16w0wmm x1oe9cf5 x1ofsvvn x1xi8z3d xlwhlzo x1rqwxy8" }
				}[(m == null) << 0], { children: [u.jsxs("div", {
					className: "x78zum5 xh8yej3 x14ug900",
					children: [!G && u.jsx(p, {
						ariaLabel: v,
						enabled: i,
						readOnly: I,
						onClick: k,
						children: u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
							ariaLabel: v,
							dataTestId: n + "-label",
							text: v,
							xstyle: [
								d.inputLabel,
								b,
								!i && o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.disabled
							],
							htmlFor: L,
							maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_LABEL_IOS
						})
					}), u.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1qughib xh8yej3 x1n2onr6 xlbd4mo",
						children: [
							R,
							u.jsx(p, {
								ariaLabel: v + ", " + String(F) + ", " + (D ? "" : o("WAFlowsLocalization").getOptionalFbt(q.platform).toString()),
								enabled: i,
								readOnly: I,
								isInputFieldTouchTabbable: !0,
								triggerClickOnTouchTabbable: M,
								onClick: k,
								children: u.jsx(o("WAFlowsTextInputCommon.react").WAFlowsTextInputField, babelHelpers.extends({}, e, k && i ? { onClick: k } : {}, {
									readOnly: !1,
									enabled: i && I !== !0,
									placeholder: U,
									autoCorrect: K,
									autoComplete: o("WAFlowsTextInputCommon.react").KEYBOARD_AUTO_COMPLETE.OFF,
									ref: O,
									xstyle: [
										d.input,
										V ? d.inputShrink : d.inputGrow,
										i && I === !0 && d.readOnlyInput,
										i && I === !0 && H && d.readOnlyInputWithValue
									]
								}))
							}),
							V && u.jsx(r("WAFlowsIcon.react"), {
								id: "waf_error",
								altText: s._(
									/*BTDS*/
									""
								),
								xstyle: [
									o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.iconContainer,
									o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.errorIconContainerNew,
									o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.errorIcon
								],
								responsiveFontContainerXStyle: [q.isRTL ? d.errorIconRTL : d.errorIconLTR, o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.errorIconContainer]
							}),
							!V && !j && P,
							!V && u.jsx(r("WAFlowsIconButton.react"), {
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
								onMouseDown: function() {
									var e;
									E == null || E(), !A && (O == null || (e = O.current) == null || e.focus());
								},
								xstyleBackground: [
									o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.iconContainer,
									o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.clearBtn,
									j && d.clearBtnActive,
									j ? d.clearBtnActive : o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.clearBtnHidden,
									o("WDSMargins.stylex").wdsMargins.marginEnd16
								],
								xstyleIcon: d.clearIcon,
								xstyleResponsiveLayer: d.clearBtnResponsiveLayer,
								enabled: j,
								buttonRef: B
							})
						]
					})]
				}), m != null && String(m).length > 0 && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					dataTestId: n + "-error-text",
					text: String(m),
					xstyle: [d.errorMessage, o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.supportTextFontSize],
					htmlFor: L,
					responsiveFontContainerXStyle: d.errorContainer
				})] })),
				y && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					dataTestId: n + "-helper-text",
					text: y,
					responsiveFontContainerXStyle: [d.helperTextWrapper, C],
					xstyle: [d.helperText, o("WAFlowsTextInputCommon.react").waFlowsTextInputCommonStyles.supportTextFontSize],
					htmlFor: L,
					maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_HELPER
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.ariaLabel, n = e.children, r = e.enabled, a = e.isInputFieldTouchTabbable, i = a === void 0 ? !1 : a, l = e.onClick, s = e.readOnly, d = e.triggerClickOnTouchTabbable, m = d === void 0 ? !1 : d, p = c(null), _ = c(null), f = function(t) {
			if ((t.target === p.current || t.target === _.current) && (t.preventDefault(), r)) {
				var e, n;
				m && (l == null || l()), (e = p.current) == null || e.blur(), (n = _.current) == null || n.blur();
			}
		};
		if (s === !0) {
			var g = u.jsx("button", {
				"aria-label": t,
				role: "textbox",
				"aria-readonly": "true",
				onClick: l && r === !0 ? l : null,
				type: "button",
				className: "x10l6tqk x13vifvy xu96u03 xh8yej3 x5yr21d x1md70p1 x1ejq31n x18oe1m7 x1sy0etr xstzfhl x1vjfegm xexx8yu xyri2b x18d9i69 x1c1uobl"
			});
			return u.jsxs("div", {
				className: "x1n2onr6 x78zum5",
				children: [n, i ? u.jsxs(u.Fragment, { children: [
					u.jsx("input", {
						id: "focusable_hidden_input_top",
						ref: p,
						inputMode: "text",
						autoCorrect: o("WAFlowsTextInputCommon.react").KEYBOARD_AUTO_CORRECT.OFF,
						enterKeyHint: o("WAFlowsTextInputCommon.react").IOS_KEYBOARD_ENTER_KEY_HINT.NEXT,
						autoComplete: o("WAFlowsTextInputCommon.react").KEYBOARD_AUTO_COMPLETE.OFF,
						"aria-hidden": "true",
						type: "text",
						onFocus: f,
						className: "x10l6tqk x1md70p1 x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl x1ja2u2z xivnzek x1qzpy72 x8yj6t5 x1kylyg1 x1a2a7pz xjfk50j xg01cxk x87ps6o x1winvzj xfhdo5w"
					}),
					u.jsx("input", {
						id: "focusable_hidden_input_bottom",
						ref: _,
						inputMode: "text",
						autoCorrect: o("WAFlowsTextInputCommon.react").KEYBOARD_AUTO_CORRECT.OFF,
						enterKeyHint: o("WAFlowsTextInputCommon.react").IOS_KEYBOARD_ENTER_KEY_HINT.NEXT,
						autoComplete: o("WAFlowsTextInputCommon.react").KEYBOARD_AUTO_COMPLETE.OFF,
						"aria-hidden": "true",
						type: "text",
						onFocus: f,
						className: "x10l6tqk x1md70p1 x1ejq31n x18oe1m7 x1sy0etr xstzfhl xexx8yu xyri2b x18d9i69 x1c1uobl x1ja2u2z xivnzek x8yj6t5 x1kylyg1 x1a2a7pz xjfk50j xg01cxk x87ps6o x1winvzj xfhdo5w x1dnh324"
					}),
					g
				] }) : g]
			});
		}
		return n;
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		return e != null && e.toString().length > 0;
	}
	l.default = m;
}), 226);
