__d("WAFlowsHorizontalDivider.react", [
	"WAFlowsEnvContext.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		horizontalDivider: {
			backgroundColor: "x3x0x6p",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			$$css: !0
		},
		defaultDividerHeight: {
			height: "xjm9jq1",
			$$css: !0
		},
		responseViewDividerHeight: {
			height: "x28ko6u",
			$$css: !0
		}
	}, d = {
		marginRight: {
			marginRight: "xh1goz3",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		},
		marginLeft: {
			marginLeft: "xfb5sle",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		}
	}, m = {
		marginRight: { $$css: !0 },
		marginLeft: { $$css: !0 }
	};
	function p(t) {
		var n = t.containerXStyle, a = t.isResponseView, i = a === void 0 ? !1 : a, l = t.xstyle, s = o("WAFlowsEnvContext.react").useWAFlowsEnv(), p = s.env, _ = p.isRTL, f = p.platform, g = f === "ios" ? d : m;
		return u.jsx("div", {
			"data-root-component-type": "HorizontalDivider",
			className: n,
			children: u.jsx("hr", babelHelpers.extends({}, (e || (e = r("stylex"))).props([
				c.horizontalDivider,
				i ? c.responseViewDividerHeight : c.defaultDividerHeight,
				_ ? g.marginLeft : g.marginRight
			])))
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.WAFlowsHorizontalDivider = p;
}), 98);
