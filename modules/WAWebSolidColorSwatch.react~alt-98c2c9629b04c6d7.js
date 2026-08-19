__d("WAWebSolidColorSwatch.react", [
	"WAWebUnstyledButton.react",
	"WDSFlex.stylex",
	"WDSIconIcCheckCircleFilled.react",
	"bx",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("bx").getURL(r("bx")("89515")), d = "200% auto", m = {
		cardWrapper: {
			width: "xh8yej3",
			maxWidth: "x1kbpmyu",
			$$css: !0
		},
		card: {
			position: "x1n2onr6",
			boxSizing: "x9f619",
			width: "xh8yej3",
			maxWidth: "x1kbpmyu",
			aspectRatio: "xoob0kj",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			cursor: "x1ypdohk",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			boxShadow: "xvg832a",
			$$css: !0
		},
		cardDefault: {
			backgroundColor: "x1q80dvb",
			$$css: !0
		},
		cardSelected: {
			outlineWidth: "x1de99jn",
			outlineStyle: "xaatb59",
			outlineColor: "xkco1y8 xtnn1bt",
			outlineOffset: "x1hl8ikr",
			$$css: !0
		},
		cardHover: {
			outlineWidth: "x1vhszaq",
			outlineStyle: "xt4zopc",
			outlineColor: "xz0q4bt",
			outlineOffset: "x1kduly6",
			$$css: !0
		},
		cardFocusRing: {
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			outlineWidth: "x784prv",
			outlineStyle: "x9v5kkp",
			outlineColor: "xtnn1bt",
			outlineOffset: "x7s97pk",
			$$css: !0
		},
		dynamicBg: function(t) {
			return [{
				backgroundColor: t != null ? "xl8spv7" : t,
				$$css: !0
			}, { "--x-backgroundColor": t != null ? t : void 0 }];
		}
	};
	function p(t) {
		var n = t.colorHex, a = t.colorName, i = t.doodleOpacity, l = t.isDefault, s = t.isSelected, p = t.onBlur, _ = t.onClick, f = t.onFocus, g = t.ref, h = t.role, y = h === void 0 ? "radio" : h, C = t.showDoodle, b = t.tabIndex, v = C, S = "url(\"" + c + "\")", R = {
			opacity: i,
			backgroundColor: l ? void 0 : "white",
			WebkitMaskImage: S,
			maskImage: S,
			WebkitMaskRepeat: "repeat",
			maskRepeat: "repeat",
			WebkitMaskSize: d,
			maskSize: d,
			WebkitMaskMode: "alpha",
			maskMode: "alpha"
		};
		return u.jsx(r("WAWebUnstyledButton.react"), {
			ref: g,
			role: y,
			"aria-checked": y === "radio" ? s : void 0,
			"aria-label": a,
			tabIndex: b,
			testid: "solid-color-swatch-" + (l ? "default" : n),
			xstyle: [
				m.cardWrapper,
				m.cardFocusRing,
				s && m.cardSelected
			],
			onClick: s ? void 0 : _,
			onFocus: f,
			onBlur: p,
			children: u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flexColumnCenter), { children: u.jsxs("span", babelHelpers.extends({ title: a }, e.props(o("WDSFlex.stylex").wdsFlex.flexColumn, m.card, l && m.cardDefault, !l && m.dynamicBg(n), !s && m.cardHover), { children: [s && u.jsx("div", {
				"aria-hidden": "true",
				className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x78zum5 x6s0dn4 xl56j7k x1vjfegm x14ug900",
				children: u.jsx(r("WDSIconIcCheckCircleFilled.react"), {})
			}), v && u.jsx("span", {
				className: {
					0: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fmog5m xu25z0z x140muxe xo1y3bh",
					1: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1fmog5m xu25z0z x140muxe xo1y3bh x1fast2d"
				}[!!l << 0],
				style: R
			})] })) }))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
