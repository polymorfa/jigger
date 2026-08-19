__d("WDSNativeEmbeddedLink.react", [
	"fbt",
	"WDSNativeFlowsIcon.react",
	"WDSNativeResponsiveWrapper.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		root: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x1qjc9v5",
			color: "xo1mcw5",
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			textAlign: "x2b8uid",
			$$css: !0
		},
		link: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			minHeight: "xrg34sf",
			boxSizing: "x9f619",
			color: "x1heor9g",
			textDecoration: "x1hl2dhg",
			WebkitTapHighlightColor: "x1i10hfl",
			":hover_textDecoration": "x1lku1pv",
			$$css: !0
		},
		rootInline: {
			display: "xt0psk2",
			$$css: !0
		},
		rootBlock: {
			display: "x78zum5",
			$$css: !0
		},
		linkSpacing: {
			paddingInlineStart: "x1znate",
			paddingInlineEnd: "x1do52mm",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		linkInlinePlaceholder: {
			visibility: "xlshs6z",
			fontFamily: "xjb2p0i",
			$$css: !0
		},
		linkInline: {
			position: "x10l6tqk",
			top: "xwa60dl",
			left: "xu96u03",
			insetInlineStart: null,
			insetInlineEnd: null,
			transform: "x1cb1t30",
			display: "x78zum5",
			$$css: !0
		},
		linkBlock: {
			position: "xariadc",
			width: "xh8yej3",
			justifyContent: "xl56j7k",
			paddingTop: "x1b58sdr",
			paddingInlineEnd: "x167vaf5",
			paddingBottom: "xmnamis",
			paddingInlineStart: "x8945me",
			$$css: !0
		},
		ctaIcon: {
			backgroundColor: "xnj6ddq",
			paddingRight: "x1arb9wb",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		}
	}, m = {
		link: {
			fontSize: "x1ygijvp",
			":active_opacity": "x1tmayz8",
			$$css: !0
		},
		linkBlock: {
			fontWeight: "x1xq4eza",
			$$css: !0
		},
		fontWeight: {
			fontWeight: "x12ioufu",
			$$css: !0
		}
	}, p = {
		link: {
			lineHeight: "xo5v014",
			fontSize: "xpnff17",
			textDecoration: "x92akz8",
			":before_content": "x1gftdam",
			":before_position": "x1te0kx0",
			":before_top": "x1ehtkf2",
			":before_left": "xi3eztc",
			":before_insetInlineStart": null,
			":before_insetInlineEnd": null,
			":before_zIndex": "xjcw38s",
			":before_width": "xy7dqi3",
			":before_height": "xw22vqi",
			":active:before_backgroundColor": "xaf8843",
			$$css: !0
		},
		linkBlock: {
			":before_borderStartStartRadius": "x1e6t811",
			":before_borderStartEndRadius": "x1m2eepp",
			":before_borderEndEndRadius": "x1wzj2vf",
			":before_borderEndStartRadius": "x1i3ppro",
			$$css: !0
		},
		fontWeight: {
			fontWeight: "x12ioufu",
			$$css: !0
		}
	}, _ = {
		root: {
			display: "x78zum5",
			justifyContent: "xl56j7k",
			alignItems: "x1qjc9v5",
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			textAlign: "x2b8uid",
			width: "xeq5yr9",
			justifySelf: "x7v7x1q",
			$$css: !0
		},
		link: {
			minHeight: "x65nank",
			fontSize: "xpnff17",
			textDecoration: "x1hl2dhg",
			":hover_textDecoration": "xt0b8zv",
			":before_content": "x1gftdam",
			":before_position": "x1te0kx0",
			":before_top": "x1ehtkf2",
			":before_left": "xi3eztc",
			":before_insetInlineStart": null,
			":before_insetInlineEnd": null,
			":before_zIndex": "xjcw38s",
			":before_width": "xy7dqi3",
			":before_height": "xw22vqi",
			":focus-visible_outline": "xk2swo9",
			":focus-visible_backgroundColor": "xn69kzl",
			":focus-visible_textDecoration": "xbvygy2",
			":focus-visible_color": "x17n1omk",
			$$css: !0
		},
		linkBlock: {
			lineHeight: "x1m59w3q",
			letterSpacing: "x1o2c50j",
			":focus-visible_textDecoration": "xbvygy2",
			":focus-visible_color": "x17n1omk",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			marginTop: "x1muziq7",
			marginInlineEnd: "xa6g792",
			marginBottom: "xa7kimb",
			marginInlineStart: "x4qatp2",
			$$css: !0
		},
		ctaIcon: {
			paddingRight: "x1xpa7k",
			paddingLeft: "x15u6esi",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			$$css: !0
		},
		ctaIconContainer: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		fontWeight: {
			fontWeight: "x1xlr1w8",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.dataTestId, a = n === void 0 ? "embbeded-link" : n, i = t.href, l = t.inline, s = l === void 0 ? !1 : l, u = t.isExternalLink, m = u === void 0 ? !1 : u, p = t.onClick, _ = t.platform, f = t.responsiveFont, y = t.text, C = t.xstyle, b = h(_);
		return c.jsx(o("WDSNativeResponsiveWrapper.react").WDSNativeResponsiveWrapper, {
			type: "body",
			responsiveFont: f,
			children: c.jsx("span", babelHelpers.extends({ "data-testid": void 0 }, (e || (e = r("stylex"))).props(d.root, b.root, s ? d.rootInline : d.rootBlock), { children: s ? c.jsxs("span", {
				className: "x1rg5ohu x1n2onr6 xuxw1ft",
				children: [c.jsx("label", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.linkSpacing, d.linkInlinePlaceholder, C), { children: y })), c.jsx(g, {
					text: y,
					platform: _,
					href: i,
					onClickAction: p,
					isExternalLink: m,
					xstyle: [
						d.linkSpacing,
						d.linkInline,
						C
					],
					dataTestId: a + "-inline"
				})]
			}) : c.jsx(g, {
				text: y,
				platform: _,
				href: i,
				onClickAction: p,
				isExternalLink: m,
				xstyle: [
					d.linkBlock,
					b.linkBlock,
					C
				],
				dataTestId: a + "-block"
			}) }))
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.dataTestId, a = t.href, i = t.isExternalLink, l = i === void 0 ? !1 : i, u = t.onClickAction, m = t.platform, p = t.text, _ = t.xstyle, f = h(m), g = a != null ? { href: a } : { onClick: u };
		return c.jsx("a", babelHelpers.extends({
			"aria-label": m === "wa_web" ? p.toString() : y(p.toString()),
			"data-testid": void 0,
			className: (e || (e = r("stylex")))(d.link, f.link, f.fontWeight, _),
			href: a != null ? a : ""
		}, g, { children: c.jsxs("span", babelHelpers.extends({}, {
			0: {},
			1: { className: "x78zum5 x1q0g3np x1yc453h" }
		}[!!l << 0], { children: [l && c.jsx(o("WDSNativeFlowsIcon.react").WDSNativeFlowsIcon, {
			id: "waf_external_link",
			altText: s._(
				/*BTDS*/
				""
			),
			xstyle: [d.ctaIcon, f.ctaIcon],
			responsiveFontContainerXStyle: f.ctaIconContainer,
			platform: m
		}), c.jsx("span", {
			className: "xh0615m x1ua5tub x104kibb x6ikm8r x10wlt62 xamitd3",
			children: p
		})] })) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = {
			android: p,
			ios: m,
			wa_web: _
		};
		return t[e];
	}
	function y(e) {
		return s._(
			/*BTDS*/
			"",
			[s._param("label", e)]
		);
	}
	l.WDSNativeEmbeddedLink = f;
}), 226);
