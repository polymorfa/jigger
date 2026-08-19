__d("WAFlowsContentBlock.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		body1: {
			lineHeight: "x3gokd0",
			letterSpacing: "xuev49c",
			$$css: !0
		},
		body2: {
			lineHeight: "x19br3l",
			$$css: !0
		}
	}, d = {
		body1: {
			lineHeight: "x17mssa0",
			$$css: !0
		},
		body2: {
			lineHeight: "x8r4c90",
			letterSpacing: "ximi1cr",
			$$css: !0
		}
	}, m = {
		body1: {
			lineHeight: "x17mssa0",
			letterSpacing: "x11xsogm",
			$$css: !0
		},
		body2: {
			lineHeight: "x8r4c90",
			letterSpacing: "x1o2c50j",
			$$css: !0
		}
	}, p = {
		body1: {
			letterSpacing: "x17wp8dx",
			$$css: !0
		},
		body2: {
			color: "xhslqc4",
			fontSize: "xkpwil5",
			$$css: !0
		}
	};
	function _(t) {
		var n = t.description, a = t.metadata, i = t.title, l = t.xstyle, s = o("WAFlowsEnvContext.react").useWAFlowsEnv(), c = s.env, d = f(c.platform);
		return n == null && a == null && i == null ? null : u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(l), { children: [
			i != null && u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				text: i,
				xstyle: [p.body1, d.body1]
			}),
			n != null && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: n,
				xstyle: [p.body2, d.body2]
			}),
			a != null && u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				text: a,
				xstyle: [p.body2, d.body2]
			})
		] }));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = {
			android: d,
			ios: c,
			wa_web: m
		};
		return t[e];
	}
	l.default = _;
}), 98);
