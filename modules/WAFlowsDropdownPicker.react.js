__d("WAFlowsDropdownPicker.react", [
	"fbt",
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState, _ = !0, f = !1, g = {
		container: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			textAlign: "xdpxx8g",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			width: "xh8yej3",
			minHeight: "xm4gzq9",
			":focus_outline": "x1uvtmcs",
			$$css: !0
		},
		responsiveFont: {
			paddingTop: "x1t1m017",
			paddingBottom: "xmnamis",
			$$css: !0
		},
		label: {
			boxSizing: "x1afcbsf",
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			$$css: !0
		},
		labelWrapperTruncationImprovementsEnabled: {
			display: "xrvj5dj",
			gridTemplateColumns: "x52fmzj",
			columnGap: "xwa9g9b",
			maxWidth: "x193iq5w",
			$$css: !0
		},
		labelTruncationImprovementsEnabled: {
			color: "x3lt289",
			$$css: !0
		},
		value: {
			flexGrow: "x1iyjqo2",
			alignSelf: "xamitd3",
			$$css: !0
		},
		emptyValue: {
			color: "xhslqc4",
			$$css: !0
		},
		filledValue: {
			color: "x14ug900",
			$$css: !0
		},
		clearBtnLTR: {
			marginRight: "xt5b8yg",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		clearBtnRTL: {
			marginLeft: "x1spiraj",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		flexRow: {
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			$$css: !0
		},
		centerContent: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		disabled: {
			opacity: "x147zg04",
			$$css: !0
		},
		chevron: {
			marginLeft: "xuqiktq",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		chevronRTL: {
			transform: "x19jd1h0",
			$$css: !0
		},
		hoverBackgroundColor: {
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		rotate90: {
			transform: "x1rbgqaq",
			$$css: !0
		},
		supportTextFontSize: {
			fontSize: "x8ucyde",
			$$css: !0
		}
	}, h = {
		container: {
			width: "xh8yej3",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		containerLTR: {
			paddingLeft: "x9dzeaa",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		containerRTL: {
			paddingLeft: "x1uhho1l",
			paddingRight: "x52dz5p",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		label: {
			width: "x18itk1x",
			minWidth: "x1i70mun",
			fontWeight: "x1xq4eza",
			color: "x14ug900",
			boxSizing: "x1afcbsf",
			wordWrap: "xp5j34i",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			$$css: !0
		},
		labelTruncationImprovementsEnabled: {
			fontWeight: "x138pvxp",
			fontSize: "x1x8n0w7",
			$$css: !0
		},
		labelWithFilledValue: {
			whiteSpace: "x17etxam",
			$$css: !0
		},
		labelContainerWithFilledValue: { $$css: !0 },
		labelWithEmptyValue: {
			width: "x14atkfc",
			minWidth: "x1i70mun",
			display: "x78zum5",
			$$css: !0
		},
		labelWithEmptyValueTruncationImprovementsEnabled: {
			width: "x18itk1x",
			$$css: !0
		},
		labelContainerWithEmptyValue: { $$css: !0 },
		value: {
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		valueContainer: {
			width: "xh8yej3",
			minWidth: "xeuugli",
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		clearIcon: {
			width: "x4l342p",
			height: "xst1q5n",
			backgroundColor: "x16w0wmm",
			$$css: !0
		},
		errorMessage: {
			color: "x30a034",
			width: "xh8yej3",
			fontSize: "xrbjrd1",
			display: "x78zum5",
			justifyContent: "x1nhvcw1",
			paddingBottom: "xv6r821",
			direction: "x1epdd7z",
			$$css: !0
		},
		chevron: {
			marginRight: "x1t5w0y4",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		clearBtn: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x1uyzme7",
			height: "x1gwfqwn",
			"::before_content": "x1cpjm7i",
			"::before_width": "xy3obib",
			"::before_height": "xg412ff",
			"::before_position": "x1hmns74",
			"::before_borderStartStartRadius": "xn4w8fp",
			"::before_borderStartEndRadius": "x17issv1",
			"::before_borderEndEndRadius": "xxslzl9",
			"::before_borderEndStartRadius": "xwjlxly",
			"::before_backgroundColor": "x1oi0s10",
			$$css: !0
		}
	}, y = {
		container: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			backgroundColor: "xw6alqk",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			marginTop: "x1mjqqkp",
			width: "xh8yej3",
			$$css: !0
		},
		containerLTR: {
			paddingLeft: "x9dzeaa",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		containerRTL: {
			paddingLeft: "x1uhho1l",
			paddingRight: "x52dz5p",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		labelTruncationImprovementsEnabled: {
			fontWeight: "x1cqbqt",
			fontSize: "x174ylx0",
			$$css: !0
		},
		containerWithError: {
			borderTopColor: "x113kvv2",
			borderInlineEndColor: "xce17vl",
			borderBottomColor: "x61tcke",
			borderInlineStartColor: "x1kfnm9f",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		},
		label: {
			width: "x14atkfc",
			lineHeight: "xal1hqk",
			$$css: !0
		},
		labelWithError: {
			color: "x30a034",
			$$css: !0
		},
		labelWithEmptyValueTruncationImprovementsEnabled: {
			width: "xeq5yr9",
			$$css: !0
		},
		value: { $$css: !0 },
		valueContainer: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		iconContainer: {
			paddingLeft: "x15u6esi",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		iconContainerRTL: {
			paddingRight: "x1arb9wb",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		labelWithEmptyValue: {
			color: "xhslqc4",
			$$css: !0
		},
		labelContainerWithEmptyValue: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		labelWithFilledValue: {
			maxWidth: "xthy2uy",
			position: "x10l6tqk",
			top: "x13vifvy",
			transform: "x1cb1t30",
			paddingInlineStart: "x72w8aw",
			paddingInlineEnd: "x104xvgj",
			paddingLeft: null,
			paddingRight: null,
			fontSize: "xw23nyj",
			backgroundColor: "xw6alqk",
			color: "xorj6pj",
			$$css: !0
		},
		clearIcon: {
			width: "x1axo8wv",
			height: "x15o1h39",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		clearBtn: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			width: "x1uyzme7",
			height: "x1gwfqwn",
			$$css: !0
		},
		labelWithFilledValueRTL: {
			right: "xi9gaw1",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		labelWithFilledValueLTR: {
			left: "xb7ufyx",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		errorMessage: {
			color: "x1atp6f4",
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1b58sdr",
			$$css: !0
		},
		chevron: {
			marginRight: "xdh7pzt",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		}
	}, C = {
		container: {
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			backgroundColor: "x1280gxy",
			borderTopColor: "x1pyc6se",
			borderInlineEndColor: "x1mlb2bo",
			borderBottomColor: "x16pkwpw",
			borderInlineStartColor: "xqe4bef",
			marginTop: "x1mjqqkp",
			width: "xh8yej3",
			$$css: !0
		},
		labelTruncationImprovementsEnabled: {
			fontWeight: "x1cqbqt",
			fontSize: "x174ylx0",
			$$css: !0
		},
		containerWithError: {
			borderTopColor: "x113kvv2",
			borderInlineEndColor: "xce17vl",
			borderBottomColor: "x61tcke",
			borderInlineStartColor: "x1kfnm9f",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		},
		containerLTR: {
			paddingLeft: "x79ra4s",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		containerRTL: {
			paddingLeft: "x1uhho1l",
			paddingRight: "x33uob6",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		label: {
			width: "x14atkfc",
			lineHeight: "xal1hqk",
			$$css: !0
		},
		labelWithError: {
			color: "x30a034",
			$$css: !0
		},
		labelWithEmptyValueTruncationImprovementsEnabled: {
			width: "xeq5yr9",
			$$css: !0
		},
		value: { $$css: !0 },
		valueContainer: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		iconContainer: {
			width: "x1sw5npo",
			height: "x1vqgdyp",
			paddingLeft: "x15u6esi",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		iconContainerRTL: {
			paddingRight: "x1arb9wb",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		labelWithEmptyValue: {
			color: "xhslqc4",
			$$css: !0
		},
		labelContainerWithEmptyValue: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		labelWithFilledValue: {
			maxWidth: "xthy2uy",
			position: "x10l6tqk",
			top: "x13vifvy",
			transform: "x1cb1t30",
			paddingInlineStart: "x72w8aw",
			paddingInlineEnd: "x104xvgj",
			paddingLeft: null,
			paddingRight: null,
			fontSize: "xw23nyj",
			backgroundColor: "xw6alqk",
			color: "xorj6pj",
			$$css: !0
		},
		clearIcon: {
			width: "x1axo8wv",
			height: "x15o1h39",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		clearBtn: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			width: "x1uyzme7",
			height: "x1vqgdyp",
			$$css: !0
		},
		labelWithFilledValueRTL: {
			right: "xi9gaw1",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		labelWithFilledValueLTR: {
			left: "xb7ufyx",
			insetInlineStart: null,
			insetInlineEnd: null,
			$$css: !0
		},
		errorMessage: {
			color: "x1atp6f4",
			paddingInlineStart: "x8945me",
			paddingInlineEnd: "x167vaf5",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1b58sdr",
			$$css: !0
		},
		chevron: {
			marginRight: "xdh7pzt",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		}
	};
	function b(t) {
		var n = t.ref, a = t.isDropdownListShown, i = t.onClick, l = t.name, u = t.label, d = t.selectedValue, h = d === void 0 ? "" : d, y = t.enabled, C = y === void 0 ? _ : y, b = t.required, E = b === void 0 ? f : b, k = t.onClear, I = t.errorMessage, T = I === void 0 ? "" : I, D = t.hideClearButton, x = D === void 0 ? !1 : D, $ = p(!1), P = $[0], N = $[1], M = o("WAFlowsEnvContext.react").useWAFlowsEnv(), w = M.env, A = v(w.platform), F = R(T), O = m(function() {
			return L(u, h, E, w.platform);
		}, [
			u,
			h,
			E,
			w.platform
		]), B = O[0], W = O[1], q = w.platform === "android" ? "waf_chevron_ternary" : "waf_chevron_secondary", U = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), V = U.flowInstanceId, H = S(A, h, w.isRTL, C, F, w.platform), G = H.labelResponsiveContainerStyle, z = H.labelStyle, j = w.platform === "wa_web" ? {
			onMouseEnter: function() {
				return N(!0);
			},
			onMouseLeave: function() {
				return N(!1);
			}
		} : {};
		return c.jsxs("div", babelHelpers.extends({ "data-testid": void 0 }, j, { children: [c.jsxs("button", babelHelpers.extends({
			ref: n,
			disabled: !C,
			onClick: function(t) {
				t.preventDefault(), i(t);
			},
			"aria-haspopup": "true",
			"aria-expanded": a,
			id: V(l),
			"aria-controls": l
		}, (e || (e = r("stylex"))).props(g.container, w.isRTL ? A.containerRTL : A.containerLTR, A.container, R(T) && A.containerWithError, P && g.hoverBackgroundColor), { children: [c.jsxs("div", {
			className: "x78zum5 x1q0g3np",
			children: [
				c.jsxs("div", babelHelpers.extends({}, e.props(z, g.labelWrapperTruncationImprovementsEnabled, A.labelWithEmptyValueTruncationImprovementsEnabled), { children: [c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					ariaLabel: u,
					text: B,
					htmlFor: l,
					maxLines: w.platform === "android" ? o("WAFlowsComponentConstants").LABEL_LINES_MAX.DROPDOWN_LABEL_ANDROID : o("WAFlowsComponentConstants").LABEL_LINES_MAX.DROPDOWN_LABEL_IOS,
					xstyle: [g.labelTruncationImprovementsEnabled, A.labelTruncationImprovementsEnabled],
					responsiveFontContainerXStyle: G
				}), w.platform === "android" && (E == null || !E) && c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					text: "(" + o("WAFlowsLocalization").getOptionalFbt(w.platform).toString() + ")",
					ariaLabel: u,
					htmlFor: l,
					maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.DROPDOWN_LABEL_ANDROID,
					xstyle: [g.labelTruncationImprovementsEnabled, A.labelTruncationImprovementsEnabled],
					responsiveFontContainerXStyle: G
				})] })),
				c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
					xstyle: [
						g.value,
						A.value,
						h.length ? g.filledValue : g.emptyValue,
						C ? null : g.disabled
					],
					ariaLabel: W,
					text: W,
					htmlFor: V(l),
					maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.DROPDOWN_VALUE,
					responsiveFontContainerXStyle: [A.valueContainer, w.platform !== "wa_web" && g.responsiveFont],
					dataTestId: l + "-value"
				}),
				c.jsx("div", babelHelpers.extends({}, e.props(g.flexRow, w.isRTL ? A.iconContainerRTL : A.iconContainer), { children: !x && h.length > 0 && !F ? c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.centerContent, A.clearBtn, w.isRTL ? g.clearBtnRTL : g.clearBtnLTR), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					children: c.jsx(r("WAFlowsIcon.react"), {
						id: "waf_cancel",
						altText: s._(
							/*BTDS*/
							""
						),
						onClick: function(t) {
							t.preventDefault(), t.stopPropagation(), k();
						},
						xstyle: A.clearIcon
					})
				})) : c.jsx(r("WAFlowsIcon.react"), {
					id: q,
					altText: s._(
						/*BTDS*/
						""
					),
					xstyle: [
						g.chevron,
						A.chevron,
						w.isRTL && g.chevronRTL,
						w.platform === "wa_web" && g.rotate90
					]
				}) }))
			]
		}), w.platform === "ios" && F && c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			text: String(T),
			xstyle: A.errorMessage,
			htmlFor: l
		})] })), w.platform !== "ios" && F && c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
			text: String(T),
			xstyle: [A.errorMessage, w.platform === "wa_web" && g.supportTextFontSize],
			htmlFor: l
		})] }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = {
			android: y,
			ios: h,
			wa_web: C
		};
		return t[e];
	}
	function S(e, t, n, r, o, a) {
		var i = [
			g.centerContent,
			g.label,
			e.label,
			t.length ? [e.labelWithFilledValue, n ? e.labelWithFilledValueRTL : e.labelWithFilledValueLTR] : e.labelWithEmptyValue,
			r ? null : g.disabled,
			o && e.labelWithError
		], l = [a !== "wa_web" && g.responsiveFont, t.length ? e.labelContainerWithFilledValue : e.labelContainerWithEmptyValue];
		return {
			labelStyle: i,
			labelResponsiveContainerStyle: l
		};
	}
	function R(e) {
		return e != null && e.toString().length > 0;
	}
	function L(e, t, n, r) {
		if (r === "android") {
			var a = e;
			return [n != null && n ? e : a, t];
		}
		return t.length === 0 && (n == null || !n) ? [e, o("WAFlowsLocalization").getOptionalFbt(r).toString()] : [e, t];
	}
	l.default = b;
}), 226);
