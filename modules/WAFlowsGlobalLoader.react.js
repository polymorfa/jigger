__d("WAFlowsGlobalLoader.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsTestingIds",
	"WDSFlex.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		strips: 4,
		stripWidth: 2,
		animationDuration: 1.2
	}, d = {
		strips: 8,
		stripHeight: 6,
		stripSeparation: 1.4,
		animationDuration: 1
	}, m = {
		android: {
			regular: babelHelpers.extends({}, c, { size: 24 }),
			small: babelHelpers.extends({}, c, { size: 20 })
		},
		ios: {
			regular: babelHelpers.extends({}, d, {
				size: 22,
				stripWidth: 2.5
			}),
			small: babelHelpers.extends({}, d, {
				size: 21,
				stripWidth: 2
			})
		}
	}, p = function(t) {
		var e = t.animationDuration / t.strips;
		return {
			ios: function(r) {
				return {
					transform: "rotate(" + 360 / t.strips * r + "deg)",
					animationDelay: "-" + e * (t.strips - r - 1) + "s"
				};
			},
			android: function(n) {
				return { animationDelay: "-" + .15 * (t.strips - n - 1) + "s" };
			},
			wa_web: function(n) {
				return { animationDelay: "-" + .15 * (t.strips - n - 1) + "s" };
			}
		};
	}, _ = {
		root: {
			height: "x5yr21d",
			color: "x14ug900",
			fontStyle: "x1k4tb9n",
			$$css: !0
		},
		strip: {
			animationIterationCount: "xa4qsjk",
			$$css: !0
		}
	}, f = "x17qceat-B", g = {
		spinner: {
			color: "xnyy3c7",
			display: "x1rg5ohu",
			position: "x1n2onr6",
			$$css: !0
		},
		strip: {
			animationName: "xvma63k",
			animationTimingFunction: "x1esw782",
			":after_content": "x5l10my",
			":after_display": "xieozyd",
			":after_position": "x1x824oc",
			":after_borderStartStartRadius": "x1h0m4i2",
			":after_borderStartEndRadius": "x1ormnv4",
			":after_borderEndEndRadius": "x1din57n",
			":after_borderEndStartRadius": "xid6zfm",
			":after_backgroundColor": "x122gcwt",
			$$css: !0
		},
		stripRegular: {
			transformOrigin: "x12chhrc",
			":after_top": "xzzj3zt",
			":after_left": "x335i7a",
			":after_insetInlineStart": null,
			":after_insetInlineEnd": null,
			":after_width": "xlbwbo4",
			":after_height": "xqiu1f8",
			$$css: !0
		},
		stripSmall: {
			transformOrigin: "x15vg6e8",
			":after_top": "xzzj3zt",
			":after_left": "x1xvnk4m",
			":after_insetInlineStart": null,
			":after_insetInlineEnd": null,
			":after_width": "x1kdb8dj",
			":after_height": "xqiu1f8",
			$$css: !0
		}
	}, h = "xqng64z-B", y = {
		spinner: {
			display: "x1rg5ohu",
			position: "x1n2onr6",
			$$css: !0
		},
		strip: {
			boxSizing: "x9f619",
			display: "x1lliihq",
			position: "x10l6tqk",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			animationTimingFunction: "x147wac7",
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			animationName: "x1ka1v4i",
			$$css: !0
		},
		stripRegular: {
			width: "xvy4d1p",
			height: "xxk0z11",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		},
		stripSmall: {
			width: "xw4jnvo",
			height: "x1qx5ct2",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		}
	}, C = {
		spinner: {
			display: "x1rg5ohu",
			position: "x1n2onr6",
			$$css: !0
		},
		strip: {
			boxSizing: "x9f619",
			display: "x1lliihq",
			position: "x10l6tqk",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			animationTimingFunction: "x147wac7",
			borderTopColor: "x1uebkx7",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			animationName: "x1ka1v4i",
			$$css: !0
		},
		stripRegular: {
			width: "xvy4d1p",
			height: "xxk0z11",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		},
		stripSmall: {
			width: "xw4jnvo",
			height: "x1qx5ct2",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			$$css: !0
		}
	};
	function b(t) {
		var n = t.small, a = n === void 0 ? !1 : n, i = t.xstyle, l = o("WAFlowsEnvContext.react").useWAFlowsEnv(), s = l.env, c = v(s.platform), d = s.platform === "android" || s.platform === "wa_web" ? "android" : "ios", f = m[d][a ? "small" : "regular"];
		return u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.root, o("WDSFlex.stylex").wdsFlex.flexCenter, i), {
			"data-testid": void 0,
			children: u.jsx("div", {
				className: e(c.spinner),
				style: {
					width: f.size,
					height: f.size
				},
				children: Array.from(new Array(f.strips)).map(function(t, n) {
					return u.jsx("div", {
						className: (e || (e = r("stylex")))(_.strip, c.strip, a ? c.stripSmall : c.stripRegular),
						style: babelHelpers.extends({ animationDuration: f.animationDuration + "s" }, p(f)[s.platform](n))
					}, n);
				})
			})
		}));
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = {
			android: y,
			ios: g,
			wa_web: C
		};
		return t[e];
	}
	l.default = b;
}), 98);
