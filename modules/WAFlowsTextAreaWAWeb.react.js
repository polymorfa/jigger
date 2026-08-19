__d("WAFlowsTextAreaWAWeb.react", [
	"WAFlowsComponentConstants",
	"WAFlowsTextAreaBase.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "x1dfbqvs-B", c = "x1vwck4t-B", d = "inset 0px 0px 0px", m = {
		inputContainer: {
			width: "xh8yej3",
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x1cy8zhl",
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
			width: "xh8yej3",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			height: "x415kv8",
			marginTop: "xecx8xk",
			marginInlineEnd: "x11t971q",
			marginBottom: "xx86319",
			marginInlineStart: "xvc5jky",
			backgroundColor: "x16w0wmm",
			paddingTop: "x1b58sdr",
			paddingBottom: "xmnamis",
			$$css: !0
		},
		input: {
			fontSize: "x1uxerd5",
			caretColor: "x15se5ov",
			color: "x9n2qya",
			paddingInlineStart: "x17yt3jr",
			paddingInlineEnd: "x5rn0o9",
			paddingLeft: null,
			paddingRight: null,
			paddingBottom: "x17af09j",
			zIndex: "x1vjfegm",
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
			top: "xm3se36",
			width: "x14atkfc",
			lineHeight: "xo5v014",
			display: "xrvj5dj",
			gridTemplateColumns: "x52fmzj",
			columnGap: "xouci9l",
			maxWidth: "xvcrhkp",
			height: "xam5rvr",
			zIndex: "x1vjfegm",
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			$$css: !0
		},
		inputLabel: {
			width: "xeq5yr9",
			color: "x1heor9g",
			fontSize: "x174ylx0",
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
		errorIconContainer: {
			paddingInlineStart: "x1m83qfk",
			paddingInlineEnd: "xkyoe5z",
			paddingLeft: null,
			paddingRight: null,
			paddingBottom: "xsaxbkt",
			paddingTop: "x1iul6r4",
			alignItems: "x1cy8zhl",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		error: {
			borderTopColor: "x113kvv2",
			borderInlineEndColor: "xce17vl",
			borderBottomColor: "x61tcke",
			borderInlineStartColor: "x1kfnm9f",
			color: "x30a034",
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
			display: "x78zum5",
			justifyContent: "x1qughib",
			width: "x1t0p1hu",
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		additionalInfoText: {
			color: "x1heor9g",
			lineHeight: "xo5v014",
			paddingBottom: "x1j85h84",
			$$css: !0
		},
		charCounterMaxLengthLTR: {
			paddingLeft: "xcpk43y",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		charCounterMaxLengthRTL: {
			paddingRight: "x1nx2rwh",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		inputLabelFocused: {
			animationDuration: "x4afe7t",
			animationFillMode: "x10e4vud",
			$$css: !0
		},
		inputLabelFocusedLTR: {
			animationName: "x1fx0chg",
			$$css: !0
		},
		inputLabelFocusedRTL: {
			animationName: "xfcl44q",
			$$css: !0
		},
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
		}
	};
	function p(e) {
		return s.jsx(r("WAFlowsTextAreaBase.react"), babelHelpers.extends({}, e, {
			platformStyles: m,
			platformConfig: {
				labelLinesMax: o("WAFlowsComponentConstants").LABEL_LINES_MAX.TEXTAREA_LABEL_WA_WEB,
				supportsHover: !0,
				errorIconId: "waf_error_refresh"
			}
		}));
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
