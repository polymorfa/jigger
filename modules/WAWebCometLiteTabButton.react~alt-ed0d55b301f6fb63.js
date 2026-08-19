__d("WAWebCometLiteTabButton.react", [
	"WDSButton.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		tabPill: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		tabLabel: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		}
	}, c = {
		active: {
			color: "x1r8hjv8",
			backgroundColor: "x5byq67",
			$$css: !0
		},
		inactive: {
			color: "x14ug900",
			backgroundColor: "x1h3rtpe",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.Icon, n = e.isActive, o = e.label, a = e.onPress, i = e.testid, l = m(n), c = l.colorName, d = l.pillXstyle;
		return s.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "large",
			Icon: t,
			onPress: a,
			testid: i,
			xstyle: [u.tabPill, d],
			"aria-pressed": n,
			children: s.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: c,
				selectable: !1,
				maxLines: 1,
				xstyle: u.tabLabel,
				children: o
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		return e ? {
			colorName: "persistentAlwaysBranded",
			pillXstyle: c.active
		} : {
			colorName: "contentDefault",
			pillXstyle: c.inactive
		};
	}
	l.default = d;
}), 98);
