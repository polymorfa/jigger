__d("WAFlowsGroupComponentLabel.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLabelHeader.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		container: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			alignItems: "x1cy8zhl",
			$$css: !0
		},
		containerRowGap: {
			rowGap: "x1fc8kun",
			$$css: !0
		},
		title: {
			color: "x14ug900",
			$$css: !0
		},
		supportingText: {
			color: "x1itf3cd",
			$$css: !0
		},
		label: {
			fontFeatureSettings: "x1cc3yi2",
			fontStyle: "x1j61x8r",
			$$css: !0
		},
		labelTruncationImprovementsEnabled: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		error: {
			color: "x30a034",
			$$css: !0
		},
		validationStringContainer: {
			paddingTop: "x1b58sdr",
			$$css: !0
		}
	}, d = {
		container: {
			paddingBottom: "xmnamis",
			$$css: !0
		},
		containerNoLabel: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		labelAndDescriptionContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			rowGap: "xxs79tx",
			$$css: !0
		},
		label: {
			fontSize: "xkpwil5",
			lineHeight: "x8r4c90",
			letterSpacing: "ximi1cr",
			$$css: !0
		},
		title: {
			fontWeight: "x12ioufu",
			letterSpacing: "x17wp8dx",
			lineHeight: "x17mssa0",
			$$css: !0
		},
		description: {
			fontWeight: "x10vqnp0",
			letterSpacing: "ximi1cr",
			lineHeight: "x8r4c90",
			$$css: !0
		},
		limit: {
			fontWeight: "x10vqnp0",
			letterSpacing: "ximi1cr",
			$$css: !0
		}
	}, m = {
		container: {
			paddingBottom: "xmnamis",
			paddingLeft: "xf00w7v",
			paddingRight: "x1d60ukw",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		containerNoLabel: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		title: {
			lineHeight: "xh7oz0i",
			letterSpacing: "xty6byi",
			$$css: !0
		},
		labelAndDescriptionContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			rowGap: "x5qd032",
			$$css: !0
		},
		label: {
			fontSize: "xuegzgz",
			color: "xhslqc4",
			fontWeight: "x10vqnp0",
			lineHeight: "x19br3l",
			$$css: !0
		}
	}, p = {
		container: {
			paddingBottom: "xmnamis",
			$$css: !0
		},
		containerNoLabel: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		labelAndDescriptionContainer: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			rowGap: "xxs79tx",
			$$css: !0
		},
		label: {
			fontSize: "x197yli1",
			letterSpacing: "x11xsogm",
			lineHeight: "x193rm8m",
			$$css: !0
		},
		title: {
			fontSize: "x197yli1",
			letterSpacing: "x11xsogm",
			lineHeight: "x193rm8m",
			$$css: !0
		},
		description: {
			fontSize: "xox1ui6",
			fontWeight: "x12ioufu",
			letterSpacing: "x11xsogm",
			lineHeight: "x193rm8m",
			$$css: !0
		},
		limit: {
			fontSize: "xox1ui6",
			fontWeight: "x12ioufu",
			letterSpacing: "x11xsogm",
			lineHeight: "x193rm8m",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.dataTestId, a = n === void 0 ? "waf-group-component" : n, i = t.description, l = t.enabled, s = l === void 0 ? !0 : l, d = t.errorMessage, m = t.isNavList, p = m === void 0 ? !1 : m, _ = t.label, g = t.required, h = g === void 0 ? !1 : g, y = t.validationString, C = o("WAFlowsEnvContext.react").useWAFlowsEnv(), b = C.env, v = f(b.platform), S = o("WAFlowsComponentConstants").LABEL_LINES_MAX.SELECT_LIST_GROUP_DESCRIPTION;
		return _ == null && i == null && y == null ? null : u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(c.container, v.container, (i != null || d != null) && c.containerRowGap, p && _ == null && v.containerNoLabel), { children: [u.jsxs("div", babelHelpers.extends({}, e.props(v.labelAndDescriptionContainer), { children: [
			_ != null && u.jsx(o("WAFlowsLabelHeader.react").WAFlowsLabelHeader, {
				enabled: s,
				label: _,
				fontWeight: b.platform === "android" ? "medium" : "semibold",
				required: h,
				labelXStyle: v.title,
				wrapperXStyle: [
					c.label,
					c.labelTruncationImprovementsEnabled,
					v.title,
					c.title
				],
				dataTestId: a + "-label"
			}),
			i != null && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				enabled: s,
				text: i,
				xstyle: [
					c.label,
					v.label,
					v.description,
					c.supportingText
				],
				maxLines: S,
				dataTestId: a + "-description"
			}),
			y != null && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: y,
				enabled: s,
				xstyle: [
					c.label,
					v.label,
					v.limit,
					c.supportingText,
					i != null && c.validationStringContainer
				],
				dataTestId: a + "-validation-label"
			})
		] })), d != null && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			text: d.toString(),
			enabled: s,
			xstyle: [
				c.label,
				v.label,
				b.platform !== "wa_web" && v.limit,
				c.supportingText,
				c.error
			],
			dataTestId: a + "-error-label"
		})] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = {
			android: d,
			ios: m,
			wa_web: p
		};
		return t[e];
	}
	l.WAFlowsGroupComponentLabel = _;
}), 98);
