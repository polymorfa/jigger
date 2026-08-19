__d("WAFlowsTickInput.react", [
	"fbt",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"WAFlowsInstanceIdContext.react",
	"WAFlowsNoop",
	"WDSNativeResponsiveWrapper.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(e) {
		return e === "radio" ? "radio" : e === "checkbox" ? "checkbox" : e === "ios-dropdown" ? "ios-dropdown" : "android-dropdown";
	}
	var p = {
		root: {
			height: "x14t7r9w",
			width: "x10sz4vv",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		rootDisabled: {
			opacity: "x1cvbfqh",
			$$css: !0
		},
		hidden: {
			visibility: "xlshs6z",
			$$css: !0
		}
	}, _ = {
		iconWrapper: {
			position: "x1n2onr6",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		iconBackground: {
			position: "x10l6tqk",
			height: "x1l36t39",
			width: "xcdlrvm",
			zIndex: "x1ja2u2z",
			$$css: !0
		},
		iconBackgroundHover: {
			backgroundColor: "xs7vtfe",
			opacity: "x1ptxcow",
			$$css: !0
		},
		iconBackgroundFocused: {
			backgroundColor: "x1qe8gl4",
			$$css: !0
		},
		unticked: {
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		iconBackgroundHoverBorderRadius: {
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.checked, a = n === void 0 ? !1 : n, i = t.dataTestId, l = t.enabled, u = l === void 0 ? !0 : l, _ = t.id, f = t.isContainerHovered, h = f === void 0 ? !1 : f, y = t.name, C = t.onChange, b = t.type, v = t.xstyle, S = o("WAFlowsEnvContext.react").useWAFlowsEnv(), R = S.env, L = o("WAFlowsInstanceIdContext.react").useWAFlowsInstance(), E = L.flowInstanceId, k = d(!1), I = k[0], T = k[1], D = d(!1), x = D[0], $ = D[1], P = g(R.platform), N = {
			radio: {
				checked: "waf_check",
				unchecked: "waf_uncheck"
			},
			checkbox: {
				checked: "waf_check_circle",
				unchecked: "waf_circle"
			},
			"android-dropdown": {
				checked: "waf_tick",
				unchecked: null
			},
			"ios-dropdown": {
				checked: "waf_check_circle",
				unchecked: "waf_circle"
			}
		}, M = a ? "checked" : "unchecked", w = m(b), A = w === "ios-dropdown" ? "radio" : w, F = R.platform === "ios" && (w === "radio" || w === "ios-dropdown") && !a, O = R.platform === "wa_web" ? {
			onFocus: function() {
				return $(!0);
			},
			onBlur: function() {
				return $(!1);
			},
			onKeyDown: function(t) {
				t.key === "Enter" && u && C != null && (t.stopPropagation(), t.preventDefault(), C(), $(!1));
			}
		} : {}, B = R.platform === "wa_web" ? {
			onMouseEnter: function() {
				return T(!0);
			},
			onMouseLeave: function() {
				return T(!1);
			}
		} : {};
		return c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(p.root, !u && p.rootDisabled, v), O, { children: c.jsxs(o("WDSNativeResponsiveWrapper.react").WDSNativeResponsiveWrapper, {
			type: "body",
			children: [c.jsx("input", {
				type: A,
				name: y,
				id: E(_),
				"data-testid": void 0,
				checked: a,
				disabled: !u,
				className: "x10l6tqk xnalus7 xqtp20y xg01cxk xjyslct xdj266r x14z9mp xat24cr x1lziwak xrvj5dj x2lah0s x11x033",
				onChange: function() {
					C ? (C(), $(!1)) : r("WAFlowsNoop")();
				}
			}), c.jsxs("div", babelHelpers.extends({}, e.props(P == null ? void 0 : P.iconWrapper), B, { children: [R.platform === "wa_web" && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(P == null ? void 0 : P.iconBackground, (h || I) && (P == null ? void 0 : P.iconBackgroundHover), w === "radio" && (P == null ? void 0 : P.iconBackgroundHoverBorderRadius)))), c.jsx(r("WAFlowsIcon.react"), {
				xstyle: [
					F ? p.hidden : void 0,
					w === "checkbox" && (!a || !u) && (P == null ? void 0 : P.unticked),
					x && (P == null ? void 0 : P.iconBackgroundFocused)
				],
				id: N[w][M],
				altText: s._(
					/*BTDS*/
					""
				),
				onClick: C
			})] }))]
		}) }));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		if (e === "wa_web") return _;
	}
	l.default = f;
}), 226);
