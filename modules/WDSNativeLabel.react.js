__d("WDSNativeLabel.react", [
	"WAFlowsEmbeddedLink.react",
	"WDSNativeResponsiveWrapper.react",
	"filterObject",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s = ["ref"], u = ["ref"], c = [
		"ref",
		"type",
		"ariaHidden",
		"ariaLabel",
		"dataTestId",
		"enabled",
		"fontWeight",
		"htmlFor",
		"idOverrideFn",
		"isRTL",
		"linkOnClick",
		"linkText",
		"linkUrl",
		"linkXStyle",
		"maxLines",
		"platform",
		"responsiveFont",
		"responsiveFontContainerXStyle",
		"role",
		"strikethrough",
		"text",
		"textAlign",
		"textColor",
		"xstyle"
	], d, m, p = m || (m = o("react")), _ = {
		start: "left",
		center: "center",
		end: "right"
	}, f = {
		rootSingleLine: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		labelSingleLine: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		label: {
			wordWrap: "x1vvkbs",
			position: "x1n2onr6",
			width: "xh8yej3",
			fontFamily: "x8t4l1e",
			fontWeight: "x10vqnp0",
			overflowWrap: "xj0a0fe",
			boxSizing: "x9f619",
			display: "x104kibb",
			WebkitBoxOrient: "x1ua5tub",
			wordBreak: "x13faqbe",
			$$css: !0
		},
		labelTruncationImprovementsEnabled: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		labelAlignmentLTR: {
			textAlign: "xdpxx8g",
			$$css: !0
		},
		labelAlignmentRTL: {
			textAlign: "x1hr2gdg",
			$$css: !0
		},
		visuallyhidden: {
			clip: "xeh89do",
			marginTop: "x1y332i5",
			marginInlineEnd: "xjn30re",
			marginBottom: "x1jyxor1",
			marginInlineStart: "x1hb08if",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			pointerEvents: "x47corl",
			position: "x10l6tqk",
			height: "xo6jp7v",
			$$css: !0
		},
		linkText: {
			whiteSpace: "xuxw1ft",
			fontSize: "xrv4cvt",
			height: "xt7dq6l",
			minHeight: "x65nank",
			$$css: !0
		}
	}, g = { visuallyhidden: {
		top: "x13vifvy",
		left: "xu96u03",
		width: "x1qrby5j",
		height: "x3igimt",
		$$css: !0
	} }, h = {
		body: {
			letterSpacing: "x11xsogm",
			lineHeight: "x193rm8m",
			$$css: !0
		},
		"body-small": {
			letterSpacing: "xj96hs2",
			lineHeight: "x1o9prue",
			$$css: !0
		},
		caption: {
			letterSpacing: "xi8r2on",
			lineHeight: "x1qfl8hi",
			textAlign: "xdpxx8g",
			$$css: !0
		}
	}, y = {
		body: {
			color: "x14ug900",
			$$css: !0
		},
		"body-small": {
			color: "x14ug900",
			$$css: !0
		},
		caption: {
			color: "xorj6pj",
			$$css: !0
		}
	};
	function C(e) {
		switch (e) {
			case "badge-alert": return "var(--WDS-content-on-accent)";
			case "badge-primary": return "var(--WDS-content-action-emphasized)";
			case "badge-tag": return "var(--WDS-content-deemphasized)";
			default: return null;
		}
	}
	function b(t) {
		var n = t.ref, r = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return p.jsx(R, babelHelpers.extends({ type: "body" }, r, { ref: n }));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, s);
		return p.jsx(R, babelHelpers.extends({ type: "body-small" }, n, { ref: t }));
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		var t = e.ref, n = babelHelpers.objectWithoutPropertiesLoose(e, u);
		return p.jsx(R, babelHelpers.extends({
			textColor: "secondary",
			type: "caption"
		}, n, { ref: t }));
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.ref, n = e.type, a = e.ariaHidden, i = e.ariaLabel, l = e.dataTestId, s = e.enabled, u = s === void 0 ? !0 : s, m = e.fontWeight, b = e.htmlFor, v = e.idOverrideFn, S = e.isRTL, R = e.linkOnClick, L = e.linkText, E = e.linkUrl, k = e.linkXStyle, I = e.maxLines, T = e.platform, D = e.responsiveFont, x = e.responsiveFontContainerXStyle, $ = e.role, P = e.strikethrough, N = P === void 0 ? !1 : P, M = e.text, w = e.textAlign, A = e.textColor, F = e.xstyle, O = babelHelpers.objectWithoutPropertiesLoose(e, c), B = h[n + "-disabled"], W = I === 1, q = r("filterObject")(babelHelpers.extends({
			fontWeight: m != null ? "var(--waf-wds-text-font-weight-" + m + ")" : null,
			textAlign: w != null ? _[w] : null,
			textDecoration: N ? "line-through" : null
		}, A ? { color: C(A) } : null, {
			fontSize: "var(--waf-wds-text-font-size-" + n + ")",
			WebkitLineClamp: I != null ? I : null
		}), function(e) {
			return e != null;
		}), U = L != null && (E !== null || R !== null) && p.jsx("span", {
			style: babelHelpers.extends({}, q, { fontSize: W ? q.fontSize : "inherit" }),
			children: p.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
				text: " " + L.toString(),
				href: E,
				onClick: R,
				xstyle: [
					h[n],
					f.linkText,
					k
				],
				responsiveFont: !1,
				inline: !0
			})
		});
		return p.jsxs(p.Fragment, { children: [T !== "ios" && b !== null && p.jsx("h1", {
			tabIndex: T === "wa_web" ? -1 : 0,
			"aria-hidden": !0,
			className: "xeh89do x1y332i5 xjn30re x1jyxor1 x1hb08if xexx8yu xyri2b x18d9i69 x1c1uobl x6ikm8r x10wlt62 x47corl x10l6tqk xo6jp7v",
			children: i
		}), p.jsxs(o("WDSNativeResponsiveWrapper.react").WDSNativeResponsiveWrapper, {
			type: n,
			responsiveFont: D,
			xstyle: [x, W && f.rootSingleLine],
			ref: t,
			children: [p.jsxs("label", babelHelpers.extends({}, O, {
				role: $,
				dir: "auto",
				"aria-label": T !== "ios" ? i : void 0,
				"aria-hidden": a,
				style: q,
				"data-testid": void 0,
				htmlFor: v ? v(b) : b,
				className: (d || (d = r("stylex")))(h[n], y[n], f.label, f.labelTruncationImprovementsEnabled, W && f.labelSingleLine, F, S ? f.labelAlignmentRTL : f.labelAlignmentLTR, u === !1 && B),
				children: [
					T === "ios" && (b !== null || i != null) && p.jsx("h1", {
						tabIndex: 0,
						"aria-hidden": !0,
						className: (d || (d = r("stylex")))([f.visuallyhidden, g.visuallyhidden]),
						children: i
					}),
					M,
					!W && U
				]
			})), W && U]
		})] });
	}
	R.displayName = R.name + " [from " + i.id + "]", l.WDSLabel = b, l.WDSLabelSmall = v, l.WDSLabelCaption = S;
}), 98);
