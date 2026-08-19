__d("WDSNativeResponsiveWrapper.react", ["react", "stylex"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		heading: {
			font: "x1yh3f9c",
			$$css: !0
		},
		subheading: {
			font: "xrbaqz7",
			$$css: !0
		},
		body: {
			font: "xlbd4mo",
			$$css: !0
		},
		"body-2": {
			font: "x187slcc",
			$$css: !0
		},
		"body-small": {
			font: "x1rfzkh3",
			$$css: !0
		},
		"body-subtitle": {
			font: "x1fcezug",
			$$css: !0
		},
		caption: {
			font: "x1rfzkh3",
			$$css: !0
		},
		largeTitle1: {
			font: "x1f0r51q",
			$$css: !0
		},
		largeTitle2: {
			font: "xmznjsd",
			$$css: !0
		},
		headline1: {
			font: "xxd9nly",
			$$css: !0
		},
		headline2: {
			font: "xcjt30n",
			$$css: !0
		},
		body1: {
			font: "x3r8bie",
			$$css: !0
		},
		body1Emphasized: {
			font: "x3r8bie",
			$$css: !0
		},
		body2: {
			font: "xcyvzip",
			$$css: !0
		},
		body2Emphasized: {
			font: "xcyvzip",
			$$css: !0
		},
		body3: {
			font: "xsdaw9i",
			$$css: !0
		},
		body3Emphasized: {
			font: "xsdaw9i",
			$$css: !0
		}
	};
	function d(t) {
		var n = t.children, o = t.ref, a = t.responsiveFont, i = t.type, l = i === void 0 ? "body1" : i, s = t.xstyle;
		return u.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(s, a === !1 ? null : c[l]), {
			ref: o,
			children: n
		}));
	}
	d.displayName = d.name + " [from " + i.id + "]", l.WDSNativeResponsiveWrapper = d;
}), 98);
