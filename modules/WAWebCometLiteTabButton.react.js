__d("WAWebCometLiteTabButton.react", [
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(14), n = e.Icon, a = e.isActive, i = e.label, l = e.onPress, c = e.testid, d;
		t[0] !== a ? (d = m(a), t[0] = a, t[1] = d) : d = t[1];
		var p = d, _ = p.colorName, f = p.pillXstyle, g;
		t[2] !== f ? (g = [u.tabPill, f], t[2] = f, t[3] = g) : g = t[3];
		var h;
		t[4] !== _ || t[5] !== i ? (h = s.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: _,
			selectable: !1,
			maxLines: 1,
			xstyle: u.tabLabel,
			children: i
		}), t[4] = _, t[5] = i, t[6] = h) : h = t[6];
		var y;
		return t[7] !== n || t[8] !== a || t[9] !== l || t[10] !== g || t[11] !== h || t[12] !== c ? (y = s.jsx(r("WDSButton.react"), {
			variant: "borderless",
			size: "large",
			Icon: n,
			onPress: l,
			testid: c,
			xstyle: g,
			"aria-pressed": a,
			children: h
		}), t[7] = n, t[8] = a, t[9] = l, t[10] = g, t[11] = h, t[12] = c, t[13] = y) : y = t[13], y;
	}
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
