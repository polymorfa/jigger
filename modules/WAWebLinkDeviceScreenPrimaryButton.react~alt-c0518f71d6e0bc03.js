__d("WAWebLinkDeviceScreenPrimaryButton.react", [
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSPaddings.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		paddingInlineStart14: {
			paddingInlineStart: "x1onr9mi",
			$$css: !0
		}
	}, d = {
		button: {
			color: "xowvryd",
			fontWeight: "xk50ysn",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "x1ipd3cv",
			borderInlineEndColor: "xdx94on",
			borderBottomColor: "xqutoja",
			borderInlineStartColor: "xsiszko",
			borderStartStartRadius: "x17m9png",
			borderStartEndRadius: "x91sizk",
			borderEndEndRadius: "x1vva9xg",
			borderEndStartRadius: "x1jfkl46",
			fontSize: "x1jchvi3",
			lineHeight: "x1d3mw78",
			height: "xdd8jsf",
			minWidth: "x1wfn8jh",
			whiteSpace: "x126k92a",
			backgroundColor: "xq4q3us",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			position: "x1n2onr6",
			zIndex: "x1vjfegm",
			$$css: !0
		},
		buttonDisabled: {
			backgroundColor: "x12hhv0b",
			cursor: "x1h6gzvc",
			color: "x1ur0v9m",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			$$css: !0
		},
		buttonAnimations: {
			transition: "xeh1a47",
			color: "xowvryd xmp5vt6",
			backgroundColor: "xq4q3us x19qpkoy",
			transitionDelay: "xine9no",
			outline: "xdfradd",
			outlineOffset: "x12ijfkc",
			$$css: !0
		},
		sweepBase: {
			position: "x10l6tqk",
			zIndex: "x8knxv4",
			top: "x13vifvy",
			insetInlineStart: "x1o0tod",
			left: null,
			right: null,
			transformOrigin: "x1g0ag68",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			transition: "x1f4dtem",
			$$css: !0
		},
		sweepFixedSize: {
			minHeight: "x1u74lcz",
			minWidth: "xajigtk",
			transform: "xyz1g3t x1y3a7h5",
			$$css: !0
		},
		sweepFullWidth: {
			width: "xh8yej3",
			aspectRatio: "x1y5e3q9",
			transform: "x1ww78zk xet2qw0",
			$$css: !0
		},
		sweepLight: {
			backgroundColor: "x37n5ga",
			$$css: !0
		},
		sweepDark: {
			backgroundColor: "xb1i3fl",
			$$css: !0
		},
		buttonAnimationsDarkSurface: {
			transition: "xeh1a47",
			color: "xowvryd x1i44hl6",
			backgroundColor: "xq4q3us xl29h7w",
			transitionDelay: "xine9no",
			outline: "xdfradd",
			outlineOffset: "x12ijfkc",
			$$css: !0
		},
		iconSpacing: {
			marginTop: "x1kgmq87",
			letterSpacing: "x72az59",
			$$css: !0
		},
		horizontalSpace: {
			width: "x1tdqgrh",
			$$css: !0
		}
	};
	function m(e, t) {
		return [
			d.sweepBase,
			t ? d.sweepFullWidth : d.sweepFixedSize,
			e ? d.sweepDark : d.sweepLight
		];
	}
	function p(t) {
		var n = t.animate, a = n === void 0 ? !0 : n, i = t.disabled, l = i === void 0 ? !1 : i, s = t.icon, p = t.onClick, _ = t.testId, f = t.text, g = t.theme, h = g === void 0 ? "default" : g, y = t.useFullWidthSweep, C = y === void 0 ? !1 : y, b = t.xstyle;
		if (h === "wds") return u.jsx(r("WDSButton.react"), {
			label: f,
			variant: "filled",
			disabled: l,
			testid: _,
			onPress: function() {
				return void p();
			},
			widthMode: "fit",
			xstyle: d.horizontalSpace
		});
		var v = h === "dark-surface", S = v ? d.buttonAnimationsDarkSurface : d.buttonAnimations, R = m(v, C);
		return u.jsxs(r("WAWebUnstyledButton.react"), {
			testid: _,
			xstyle: [
				{
					"x-default-marker": "x-default-marker",
					$$css: !0
				},
				d.button,
				!l && a && S,
				l && d.buttonDisabled,
				c.paddingBlock10,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
				b
			],
			onClick: p,
			disabled: l,
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: [u.jsx(o("WAWebFlex.react").FlexItem, { children: f }), s != null && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: [c.paddingInlineStart14, d.iconSpacing],
					children: s
				})]
			}), a && !l && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), R)))]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
