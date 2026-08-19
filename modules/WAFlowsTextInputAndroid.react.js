__d("WAFlowsTextInputAndroid.react", [
	"WAFlowsComponentConstants",
	"WAFlowsTextInputBase.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "xp573u8-B", c = "xo8bzhn-B", d = "inset 0px 0px 0px", m = {
		inputContainer: {
			width: "xh8yej3",
			position: "x1n2onr6",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			$$css: !0
		},
		inputWithInfoContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			position: "x1n2onr6",
			width: "xh8yej3",
			$$css: !0
		},
		inputWithErrorIconContainer: {
			display: "x78zum5",
			position: "x1n2onr6",
			alignItems: "x6s0dn4",
			width: "xh8yej3",
			minHeight: "x1euvnc0",
			boxSizing: "x9f619",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			backgroundColor: "x16w0wmm",
			marginTop: "x1mjqqkp",
			$$css: !0
		},
		input: {
			caretColor: "x15se5ov",
			paddingTop: "x1epxsj4",
			paddingInlineEnd: "x5rn0o9",
			paddingBottom: "x17af09j",
			paddingInlineStart: "x17yt3jr",
			boxSizing: "x9f619",
			fontSize: "x1uxerd5",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		inputWithLeadIconLTR: {
			paddingLeft: "x1uhho1l",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		inputWithLeadIconRTL: {
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		borderWithError: {
			boxShadow: "x18vvd8t",
			$$css: !0
		},
		borderWithNoError: {
			boxShadow: "xwbogjz",
			$$css: !0
		},
		borderFocused: {
			boxShadow: "xu8d7ss",
			$$css: !0
		},
		inputLabelTransformRTL: {
			transform: "xbsr1l6",
			$$css: !0
		},
		inputLabelTransformLTR: {
			transform: "xhae8ej",
			$$css: !0
		},
		inputLabelWrapper: {
			color: "xhslqc4",
			position: "x10l6tqk",
			top: "xeh43l7",
			width: "x14atkfc",
			display: "xrvj5dj",
			gridTemplateColumns: "x52fmzj",
			maxWidth: "xvcrhkp",
			height: "x1l36t39",
			$$css: !0
		},
		inputLabelWithLead: {
			maxWidth: "xy6qgwj",
			$$css: !0
		},
		inputLabelWrapperOptional: {
			columnGap: "xwa9g9b",
			$$css: !0
		},
		inputLabel: {
			width: "xeq5yr9",
			color: "x1heor9g",
			fontSize: "x174ylx0",
			lineHeight: "x1159mfc",
			$$css: !0
		},
		inputLabelLarge: {
			lineHeight: "x1evy7pa",
			$$css: !0
		},
		inputLabelError: {
			maxWidth: "xy6qgwj",
			$$css: !0
		},
		inputLabelWithLeadIconLTR: {
			left: "x1kgeab4",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		inputLabelWithLeadIconRTL: {
			right: "x5btmg7",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		error: {
			borderTopColor: "x113kvv2",
			borderInlineEndColor: "xce17vl",
			borderBottomColor: "x61tcke",
			borderInlineStartColor: "x1kfnm9f",
			color: "x1atp6f4",
			$$css: !0
		},
		focused: {
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			color: "x1v5yvga",
			$$css: !0
		},
		notFocused: {
			color: "xhslqc4",
			$$css: !0
		},
		additionalInfo: {
			paddingTop: "x1849fr",
			paddingBottom: "x1j85h84",
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			lineHeight: "xo5v014",
			$$css: !0
		},
		inputLabelFocusedLTR: {
			animationName: "x115p7d7",
			$$css: !0
		},
		inputLabelFocusedRTL: {
			animationName: "x7qujnn",
			$$css: !0
		},
		inputLabelFocused: {
			animationDuration: "x4afe7t",
			animationFillMode: "x10e4vud",
			$$css: !0
		},
		clearIcon: {
			width: "x1axo8wv",
			height: "x15o1h39",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		clearBtnResponsiveLayer: {
			width: "xtgf0zi",
			height: "x1gwfqwn",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		errorIcon: {
			marginInlineStart: "x1mpj02h",
			marginInlineEnd: "xpntml2",
			marginLeft: null,
			marginRight: null,
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
	function p(e) {
		return s.jsx(r("WAFlowsTextInputBase.react"), babelHelpers.extends({}, e, {
			platformStyles: m,
			platformConfig: {
				labelLinesMax: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_LABEL_ANDROID,
				supportsHover: !1
			}
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
