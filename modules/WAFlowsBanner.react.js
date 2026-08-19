__d("WAFlowsBanner.react", [
	"fbt",
	"WAFlowsIcon.react",
	"WAFlowsLabel.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = {
		rootContainerWarning: {
			paddingBottom: "xsaxbkt",
			fontSize: "x1jchvi3",
			$$css: !0
		},
		rootContainerError: {
			paddingTop: "x1b58sdr",
			fontSize: "x1jchvi3",
			$$css: !0
		},
		iconWarning: {
			backgroundColor: "x9odf04",
			$$css: !0
		},
		iconError: {
			backgroundColor: "xk0ssx3",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.text, a = t.type, i = a === void 0 ? "warning" : a, l = t.xstyle, u = i === "error";
		return c.jsx("div", babelHelpers.extends({
			"data-testid": void 0,
			dir: "auto"
		}, (e || (e = r("stylex"))).props(u ? d.rootContainerError : d.rootContainerWarning, l), { children: c.jsxs("div", babelHelpers.extends({}, {
			0: { className: "x1b58sdr x167vaf5 xmnamis x8945me x1rajyc1 x1qndgat x1kprl8i x13matbc x78zum5 x6s0dn4 xj44v4f" },
			1: { className: "x1b58sdr x167vaf5 xmnamis x8945me x1rajyc1 x1qndgat x1kprl8i x13matbc x78zum5 x6s0dn4 xrkjzwr" }
		}[!!u << 0], { children: [c.jsx(r("WAFlowsIcon.react"), {
			id: u ? "waf_cancel" : "waf_warning",
			altText: u ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			xstyle: u ? d.iconError : d.iconWarning,
			"data-testid": void 0,
			responsive: !1
		}), c.jsx("div", {
			className: "x8945me x167vaf5",
			children: c.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: n,
				responsiveFont: !1
			})
		})] })) }));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
