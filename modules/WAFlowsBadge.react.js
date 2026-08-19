__d("WAFlowsBadge.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useMemo, d = {
		label: {
			fontSize: "xxwx4ir",
			lineHeight: "x1827zv3",
			$$css: !0
		},
		container: {
			borderStartStartRadius: "x1olvaoz",
			borderStartEndRadius: "xjp8vmc",
			borderEndEndRadius: "x5g0mfp",
			borderEndStartRadius: "xxahmv3",
			lineHeight: "xdpg8n2",
			$$css: !0
		}
	}, m = {
		label: {
			fontSize: "xw23nyj",
			letterSpacing: "ximi1cr",
			lineHeight: "x1827zv3",
			$$css: !0
		},
		container: {
			borderStartStartRadius: "xlg2s8c",
			borderStartEndRadius: "x1rcx0f8",
			borderEndEndRadius: "x1bqiyuo",
			borderEndStartRadius: "xt6ftvx",
			lineHeight: "xl2ypbo",
			$$css: !0
		}
	}, p = { container: {
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		width: "xeq5yr9",
		paddingTop: "xrhwvvd",
		paddingInlineEnd: "x8dwtsl",
		paddingBottom: "xnw97ix",
		paddingInlineStart: "xe6o68h",
		$$css: !0
	} };
	function _(e) {
		switch (e) {
			case "alert": return "badge-alert";
			case "tag": return "badge-tag";
			default: return "badge-primary";
		}
	}
	function f(e) {
		switch (e) {
			case "alert": return "--WDS-secondary-negative";
			case "tag": return "--WDS-surface-highlight";
			default: return "--WDS-accent-deemphasized";
		}
	}
	function g(t) {
		var n = t.badgeType, a = n === void 0 ? "primary" : n, i = t.text, l = o("WAFlowsEnvContext.react").useWAFlowsEnv(), s = l.env, d = h(s.platform), m = c(function() {
			return _(a);
		}, [a]), g = { backgroundColor: "var(" + f(a) + ", var(--waf-wds-" + (a != null ? a : "primary") + "-badge-background))" };
		return u.jsx("div", {
			className: (e || (e = r("stylex")))([p.container, d.container]),
			style: g,
			children: u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: i,
				textColor: m,
				fontWeight: "medium",
				xstyle: d.label
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e === "ios" ? d : m;
	}
	l.default = g;
}), 98);
