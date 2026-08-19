__d("WAFlowsTextInputWAWeb.react", [
	"WAFlowsComponentConstants",
	"WAFlowsTextInputBase.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "x1tbikvu-B", c = "x1f3jwi8-B", d = "inset 0px 0px 0px", m = {
		hoverClearButtonBackgroundColor: {
			backgroundColor: "xjbqb8w",
			$$css: !0
		},
		hoverBackgroundColor: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		hoverLabelColor: {
			color: "x14ug900",
			$$css: !0
		},
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
			minHeight: "x1ddzyv0",
			boxSizing: "x9f619",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			backgroundColor: "x1280gxy",
			marginTop: "x1mjqqkp",
			$$css: !0
		},
		input: {
			caretColor: "x15se5ov",
			paddingTop: "xq9fr8g",
			paddingInlineEnd: "x10pb5rk",
			paddingBottom: "x1jfhl93",
			paddingInlineStart: "x9itrr7",
			boxSizing: "x9f619",
			fontSize: "x1fvot60",
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
			transform: "xd7pgcg",
			$$css: !0
		},
		inputLabelTransformLTR: {
			transform: "ximhpk1",
			$$css: !0
		},
		inputLabelWrapper: {
			color: "xhslqc4",
			position: "x10l6tqk",
			top: "xm3se36",
			width: "x14atkfc",
			display: "xrvj5dj",
			gridTemplateColumns: "x52fmzj",
			maxWidth: "xvcrhkp",
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
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
		disabled: {
			color: "x18cpw0e",
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
			animationName: "x14iw8az",
			$$css: !0
		},
		inputLabelFocusedRTL: {
			animationName: "x10dgkt1",
			$$css: !0
		},
		inputLabelFocused: {
			animationDuration: "x4afe7t",
			animationFillMode: "x10e4vud",
			$$css: !0
		},
		clearIcon: {
			width: "xlzg99y",
			height: "x45qjag",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		clearBtnResponsiveLayer: {
			width: "x1td3qas",
			height: "x45qjag",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		errorIcon: {
			marginInlineStart: "xa2hx6n",
			marginInlineEnd: "xx9do5w",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		clearBtnActive: {
			opacity: "x1hc1fzr",
			backgroundColor: "xjbqb8w",
			zIndex: "x1vjfegm",
			display: "x1lliihq",
			$$css: !0
		}
	};
	function p(e) {
		return s.jsx(r("WAFlowsTextInputBase.react"), babelHelpers.extends({}, e, {
			platformStyles: m,
			platformConfig: {
				labelLinesMax: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXT_INPUT_LABEL_WA_WEB,
				supportsHover: !0,
				errorIconId: "waf_error_refresh"
			}
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
