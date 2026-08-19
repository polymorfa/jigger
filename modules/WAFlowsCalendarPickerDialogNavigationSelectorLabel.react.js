__d("WAFlowsCalendarPickerDialogNavigationSelectorLabel.react", [
	"fbt",
	"WAFlowsEnvContext.react",
	"WAFlowsIcon.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		dateTokenSelectorSelectedLabelWrapper: {
			display: "x78zum5",
			justifyContent: "x1qughib",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		dateTokenSelectorSelectedIcon: {
			transitionProperty: "x11xpdln",
			transitionDuration: "xq7dr57",
			transitionTimingFunction: "xogng7m",
			$$css: !0
		}
	}, m = {
		dateTokenSelectorSelectedIcon: {
			width: "x1jw3ynk",
			height: "xvle69y",
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		dateTokenSelectorSelectedIconLTR: {
			marginLeft: "x13zjp5t",
			marginInlineStart: null,
			marginInlineEnd: null,
			transform: "x19jd1h0",
			$$css: !0
		},
		dateTokenSelectorSelectedIconRTL: {
			marginRight: "xpoiemb",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		dateTokenSelectorSelectedIconExpandedLTR: {
			transform: "x1rbgqaq",
			$$css: !0
		},
		dateTokenSelectorSelectedIconExpandedRTL: {
			transform: "x9tu13d",
			$$css: !0
		}
	}, p = {
		dateTokenSelectorSelectedIconRTL: {
			transform: "x19jd1h0",
			$$css: !0
		},
		dateTokenSelectorSelectedIcon: {
			width: "xp8d6y2",
			height: "xam5rvr",
			backgroundColor: "x1518k6t",
			$$css: !0
		},
		dateTokenSelectorSelectedIconExpandedLTR: {
			transform: "x1iffjtl",
			$$css: !0
		},
		dateTokenSelectorSelectedIconExpandedRTL: {
			transform: "x1iffjtl",
			$$css: !0
		}
	}, _ = {
		dateTokenSelectorSelectedIcon: {
			width: "xp8d6y2",
			height: "xam5rvr",
			backgroundColor: "x1518k6t",
			transform: "x1iffjtl",
			$$css: !0
		},
		dateTokenSelectorSelectedLabelWrapper: {
			lineHeight: "x8r4c90",
			fontSize: "xkpwil5",
			$$css: !0
		}
	};
	function f(t) {
		var n = t.isSelectorExpanded, a = n === void 0 ? !1 : n, i = t.label, l = t.xstyle, u = o("WAFlowsEnvContext.react").useWAFlowsEnv(), m = u.env, p = g(m.platform);
		return c.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
			d.dateTokenSelectorSelectedLabelWrapper,
			p.dateTokenSelectorSelectedLabelWrapper,
			l
		]), { children: [s._(
			/*BTDS*/
			"",
			[s._param("token", i)]
		), c.jsx(r("WAFlowsIcon.react"), {
			id: m.platform === "ios" ? "waf_chevron_primary" : "waf_chevron_ternary",
			xstyle: [
				d.dateTokenSelectorSelectedIcon,
				p.dateTokenSelectorSelectedIcon,
				m.isRTL ? p.dateTokenSelectorSelectedIconRTL : p.dateTokenSelectorSelectedIconLTR,
				a && (m.isRTL ? p.dateTokenSelectorSelectedIconExpandedRTL : p.dateTokenSelectorSelectedIconExpandedLTR)
			]
		})] }));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = {
			android: p,
			ios: m,
			wa_web: _
		};
		return t[e];
	}
	l.default = f;
}), 226);
