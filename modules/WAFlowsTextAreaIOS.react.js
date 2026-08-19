__d("WAFlowsTextAreaIOS.react", [
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
	var e, u, c = u || (u = o("react")), d = {
		input: {
			paddingTop: "x16iloxs",
			paddingInlineEnd: "x5rn0o9",
			paddingBottom: "xpnabnx",
			paddingInlineStart: "x17yt3jr",
			"::placeholder_color": "x1hcheoe",
			"::placeholder_font": "xwqs2kq",
			$$css: !0
		},
		inputContainerSupportInfo: {
			display: "x78zum5",
			width: "xh8yej3",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xs9h3oa",
			paddingInlineStart: "x8945me",
			boxSizing: "x9f619",
			rowGap: "x1fc8kun",
			columnGap: "x4prdry",
			$$css: !0
		},
		errorMessageContainer: {
			width: "x1qrby5j",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		charCounterMaxLengthLimit: {
			color: "x30a034",
			$$css: !0
		},
		inputContainerCounter: {
			color: "xhslqc4",
			paddingTop: "x6t6vjn",
			paddingInlineEnd: "xeczgvc",
			paddingBottom: "xpb5cs5",
			paddingInlineStart: "xah6b9e",
			$$css: !0
		},
		helperText: {
			color: "xhslqc4",
			$$css: !0
		},
		helperTextWrapper: {
			marginTop: "x1mjqqkp",
			marginInlineEnd: "xpntml2",
			marginBottom: "xhbfen4",
			marginInlineStart: "x1mpj02h",
			$$css: !0
		},
		errorIconContainerDefaultLabel: {
			marginTop: "xj1urod",
			marginInlineEnd: "xpntml2",
			marginBottom: "xyi6m4r",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		errorIconContainerLargeLabel: {
			marginTop: "x18w2ern",
			marginInlineEnd: "xpntml2",
			marginBottom: "xyi6m4r",
			marginInlineStart: "x1lziwak",
			$$css: !0
		},
		errorMessage: {
			color: "x30a034",
			width: "x14atkfc",
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			$$css: !0
		},
		placeholderContent: {
			color: "xhslqc4",
			fontSize: "x1qlqyl8",
			lineHeight: "x1u7k74",
			$$css: !0
		},
		inputLabelLarge: {
			marginBottom: "xhbfen4",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.charsLeft, a = t.dataTestId, i = a === void 0 ? "" : a, l = t.enabled, u = l === void 0 ? !0 : l, m = t.error, p = m === void 0 ? "" : m, _ = t.helperText, f = _ === void 0 ? "" : _, g = t.label, h = t.labelVariant, y = t.name, C = t.required, b = C === void 0 ? !1 : C, v = t.value, S = o("WAFlowsEnvContext.react").useWAFlowsEnv(), R = S.env, L = o("WAFlowsTextAreaCommon.react").textAreaHasErrorFn(p), E = !1, k = typeof v == "string" && (v == null ? void 0 : v.length) > 0, I = h === o("WAFlowsComponentsCommon").WhatsAppFlowsTextEntryLabelVariant.LARGE;
		return c.jsxs("div", {
			className: "x78zum5 xdt5ytf",
			children: [
				I && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					text: g,
					htmlFor: y,
					fontWeight: "bold",
					xstyle: d.inputLabelLarge,
					maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXTAREA_LABEL_LARGE
				}),
				c.jsxs("div", {
					className: "x78zum5 xh8yej3 x6s0dn4 xdt5ytf x16w0wmm x1oe9cf5 x1ofsvvn x1xi8z3d xlwhlzo",
					children: [c.jsx(r("WAFlowsScrollable.react"), {
						id: "waf_textarea_scrollable_" + y,
						xstyle: o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.scrollable,
						nativeDraggingOnOverscroll: !1,
						nativeDraggingControl: !0,
						children: c.jsxs("div", {
							className: "x78zum5 x1cy8zhl xh8yej3 x1x7pkhd x14ug900",
							children: [c.jsxs("div", {
								className: "x1n2onr6 xh8yej3 x5yr21d x1plvlek xryxfnj xlbd4mo",
								children: [c.jsx(o("WAFlowsTextAreaCommon.react").WAFlowsTextAreaField, babelHelpers.extends({}, t, {
									autoCorrect: E,
									xstyle: d.input,
									placeholder: I && !b ? s._(
										/*BTDS*/
										""
									).toString() : void 0
								})), !k && !I && c.jsxs("div", {
									className: "xlbd4mo x10l6tqk x13vifvy xu96u03 x14atkfc xvcrhkp x1t33rgy x5rn0o9 x19z1p0o x17yt3jr x78zum5 x1a02dak xouci9l",
									"data-testid": void 0,
									children: [c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
										text: g,
										htmlFor: y,
										xstyle: d.placeholderContent,
										responsiveFont: !1
									}), b == null || !b && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
										text: "(" + o("WAFlowsLocalization").getOptionalFbt(R.platform).toString() + ")",
										htmlFor: y,
										xstyle: d.placeholderContent,
										responsiveFont: !1
									})]
								})]
							}), L && c.jsx(r("WAFlowsIcon.react"), {
								id: "waf_error",
								altText: s._(
									/*BTDS*/
									""
								),
								xstyle: [o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.errorIconContainer, I ? d.errorIconContainerLargeLabel : d.errorIconContainerDefaultLabel]
							})]
						})
					}), c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([d.inputContainerSupportInfo, o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.supportTextFontSize]), { children: [c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
						dataTestId: i + "-error-text",
						text: String(p),
						xstyle: d.errorMessage,
						htmlFor: y,
						responsiveFontContainerXStyle: d.errorMessageContainer
					}), n != null && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						text: String(n),
						xstyle: [
							o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.charCounterMaxLength,
							d.inputContainerCounter,
							n === 0 ? d.charCounterMaxLengthLimit : null,
							u ? null : o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.inputContainerCounterDisabled
						],
						htmlFor: y
					})] }))]
				}),
				f && c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
					dataTestId: i + "-helper-text",
					text: f,
					xstyle: [d.helperText, o("WAFlowsTextAreaCommon.react").waFlowsTextAreaCommonStyle.supportTextFontSize],
					htmlFor: y,
					responsiveFontContainerXStyle: d.helperTextWrapper,
					maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXTAREA_HELPER
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
