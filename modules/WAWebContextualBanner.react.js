__d("WAWebContextualBanner.react", [
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebIcLightbulbIcon.react",
	"WAWebXIcon.react",
	"WDSButton.react",
	"WDSIconIcScience.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = {
		paddingInlineEnd10: {
			paddingInlineEnd: "x2vl965",
			$$css: !0
		},
		marginInlineEnd10: {
			marginInlineEnd: "x1sa5p1d",
			$$css: !0
		}
	}, d = 30, m = {
		action: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		icon: {
			minWidth: "x17s4nb9",
			$$css: !0
		},
		banner: {
			minHeight: "x1wjjzik",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xbfgalr",
			borderInlineEndColor: "xaokvkl",
			borderBottomColor: "xgx2mzv",
			borderInlineStartColor: "x18h18lu",
			backgroundColor: "xjp690a",
			borderStartStartRadius: "x16qb05n",
			borderStartEndRadius: "xi7iut8",
			borderEndEndRadius: "x1dm3dyd",
			borderEndStartRadius: "x1pv694p",
			$$css: !0
		},
		dismiss: {
			color: "x5x39s7",
			minWidth: "xnei2rj",
			$$css: !0
		}
	};
	function p(e) {
		var t = o("react-compiler-runtime").c(2), n = e.name;
		switch (n) {
			case "experiment": {
				var a;
				return t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSIconIcScience.react"), {
					width: d,
					height: d
				}), t[0] = a) : a = t[0], a;
			}
			default: {
				var i;
				return t[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebIcLightbulbIcon.react").IcLightbulbIcon, {
					width: d,
					height: d
				}), t[1] = i) : i = t[1], i;
			}
		}
	}
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.canShow, l = a.config, s = a.onClick, d = a.onDismiss, _ = l.actionText, f = l.dismissable, g = l.iconName, h = l.showIcon, y = l.title, C = function() {
			s();
		}, b = function() {
			d();
		}, v = u.jsx(r("WDSButton.react"), {
			"aria-label": r("WAWebFbtCommon")("Close"),
			Icon: o("WAWebXIcon.react").XIcon,
			onPress: b,
			variant: "borderless"
		}), S = h ? u.jsx(p, { name: g }) : null, R = y != null ? u.jsx("div", {
			className: "x6prxxf xdod15v x14ug900",
			children: y
		}) : null, L = _ != null ? u.jsx("div", {
			className: "x1f6kntn x17fgdl5 x1ph7ams x1ok221b",
			children: _
		}) : null;
		return i ? u.jsx("div", {
			ref: n,
			className: "x1okw0bk x6ikm8r x10wlt62 x1dp6rp6 x1280gxy xvahy20 x1a4sjiy x889kno x1a8lsjc",
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: [m.banner, o("WDSPaddings.stylex").wdsPaddings.padding12],
				children: [
					u.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 0,
						xstyle: [
							m.action,
							h && m.icon,
							c.paddingInlineEnd10
						],
						children: S && u.jsx("div", {
							onClick: C,
							"aria-hidden": !0,
							children: S
						})
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						xstyle: [m.action, c.marginInlineEnd10],
						children: u.jsxs("div", {
							onClick: C,
							tabIndex: 0,
							role: "button",
							children: [R, L]
						})
					}),
					f && u.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 0,
						xstyle: m.dismiss,
						children: v
					})
				]
			})
		}) : null;
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
