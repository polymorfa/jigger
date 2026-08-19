__d("WAWebLinkDeviceScreenPrimaryButton.react", [
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSButton.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(30), a = t.animate, i = t.disabled, l = t.icon, s = t.onClick, p = t.testId, _ = t.text, f = t.theme, g = t.useFullWidthSweep, h = t.xstyle, y = a === void 0 ? !0 : a, C = i === void 0 ? !1 : i, b = f === void 0 ? "default" : f, v = g === void 0 ? !1 : g;
		if (b === "wds") {
			var S;
			n[0] !== s ? (S = function() {
				return void s();
			}, n[0] = s, n[1] = S) : S = n[1];
			var R;
			return n[2] !== C || n[3] !== S || n[4] !== p || n[5] !== _ ? (R = u.jsx(r("WDSButton.react"), {
				label: _,
				variant: "filled",
				disabled: C,
				testid: p,
				onPress: S,
				widthMode: "fit",
				xstyle: d.horizontalSpace
			}), n[2] = C, n[3] = S, n[4] = p, n[5] = _, n[6] = R) : R = n[6], R;
		}
		var L = b === "dark-surface", E = L ? d.buttonAnimationsDarkSurface : d.buttonAnimations, k;
		if (n[7] !== y || n[8] !== E || n[9] !== C || n[10] !== l || n[11] !== L || n[12] !== s || n[13] !== p || n[14] !== _ || n[15] !== v || n[16] !== h) {
			var I = m(L, v), T;
			n[18] === Symbol.for("react.memo_cache_sentinel") ? (T = {
				"x-default-marker": "x-default-marker",
				$$css: !0
			}, n[18] = T) : T = n[18];
			var D = !C && y && E, x = C && d.buttonDisabled, $;
			n[19] !== D || n[20] !== x || n[21] !== h ? ($ = [
				T,
				d.button,
				D,
				x,
				c.paddingBlock10,
				o("WDSPaddings.stylex").wdsPaddings.paddingHor24,
				h
			], n[19] = D, n[20] = x, n[21] = h, n[22] = $) : $ = n[22];
			var P;
			n[23] !== _ ? (P = u.jsx(o("WAWebFlex.react").FlexItem, { children: _ }), n[23] = _, n[24] = P) : P = n[24];
			var N;
			n[25] !== l ? (N = l != null && u.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: [c.paddingInlineStart14, d.iconSpacing],
				children: l
			}), n[25] = l, n[26] = N) : N = n[26];
			var M;
			n[27] !== P || n[28] !== N ? (M = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				children: [P, N]
			}), n[27] = P, n[28] = N, n[29] = M) : M = n[29], k = u.jsxs(r("WAWebUnstyledButton.react"), {
				testid: p,
				xstyle: $,
				onClick: s,
				disabled: C,
				children: [M, y && !C && u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e || (e = r("stylex")), I)))]
			}), n[7] = y, n[8] = E, n[9] = C, n[10] = l, n[11] = L, n[12] = s, n[13] = p, n[14] = _, n[15] = v, n[16] = h, n[17] = k;
		} else k = n[17];
		return k;
	}
	l.default = p;
}), 98);
