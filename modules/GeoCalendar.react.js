__d("GeoCalendar.react", [
	"AbstractCalendar.react",
	"GeoCalendarUtils",
	"GeoPrivateCalendarDayRendererContext",
	"GeoPrivateMakeComponent",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useGeoTheme"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["dateRestraints", "highlightedDates"], s, u, c = u || (u = o("react")), d = u.useContext, m = o("GeoCalendarUtils").getGeoCalendarDayRenderer({}), p = {
		root: {
			display: "x1rg5ohu",
			$$css: !0
		},
		row: {
			display: "x78zum5",
			flexWrap: "xozqiw3",
			justifyContent: "x1qughib",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function _(t) {
		var n = o("react-compiler-runtime").c(21), a, i, l;
		n[0] !== t ? (a = t.dateRestraints, i = t.highlightedDates, l = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l) : (a = n[1], i = n[2], l = n[3]);
		var u = d(r("GeoPrivateCalendarDayRendererContext")), _ = r("useGeoTheme")(), f = _.selectFont, g = _.selectTextColor, h, y;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (h = "x78zum5 xozqiw3 x1qughib xh8yej3 x1k70j0n", y = "x6s0dn4 x1ypdohk x78zum5 x1c4vz4f x2lah0s xl56j7k x2b8uid x1td3qas x1y9ukl5", n[4] = h, n[5] = y) : (h = n[4], y = n[5]);
		var C;
		n[6] !== f || n[7] !== g ? (C = (s || (s = r("stylex")))(p.row, g({
			color: "placeholder",
			isDisabled: !1
		}), f({ size: "valueDescription" })), n[6] = f, n[7] = g, n[8] = C) : C = n[8];
		var b;
		n[9] !== f ? (b = (s || (s = r("stylex")))(f({ size: "value" }), p.root), n[9] = f, n[10] = b) : b = n[10];
		var v;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (v = "x6s0dn4 x1ypdohk x78zum5 x1c4vz4f x2lah0s xl56j7k x2b8uid x1td3qas x1y9ukl5", n[11] = v) : v = n[11];
		var S;
		n[12] !== C || n[13] !== b ? (S = { classNames: {
			row: h,
			dayName: y,
			dayNames: C,
			root: b,
			spacer: v
		} }, n[12] = C, n[13] = b, n[14] = S) : S = n[14];
		var R = S, L = a, E = i, k = u != null ? u : m, I;
		return n[15] !== R || n[16] !== L || n[17] !== E || n[18] !== l || n[19] !== k ? (I = c.jsx(r("AbstractCalendar.react"), babelHelpers.extends({}, R, l, {
			allowDuplicateSelection: !0,
			dateRestraints: L,
			dayRenderer: k,
			highlightedDates: E
		})), n[15] = R, n[16] = L, n[17] = E, n[18] = l, n[19] = k, n[20] = I) : I = n[20], I;
	}
	var f = o("GeoPrivateMakeComponent").makeGeoComponent("GeoCalendar", _);
	l.default = f;
}), 98);
