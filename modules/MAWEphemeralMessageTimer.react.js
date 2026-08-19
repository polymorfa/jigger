__d("MAWEphemeralMessageTimer.react", [
	"fbt",
	"I64",
	"MAWEphemeralConsts",
	"MWXText.react",
	"ScreenReaderText.react",
	"WATimeUtils",
	"react",
	"react-compiler-runtime",
	"setTimeout"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = e || (e = o("react")), d = e, m = d.useEffect, p = d.useState;
	function _(e) {
		return e < o("MAWEphemeralConsts").oneMinuteInSeconds ? s._(
			/*BTDS*/
			"",
			[s._param("seconds", String(e).concat("s"))]
		) : e < o("MAWEphemeralConsts").oneHourInSeconds ? s._(
			/*BTDS*/
			"",
			[s._param("minutes", String(Math.floor(e / o("MAWEphemeralConsts").oneMinuteInSeconds)).concat("m"))]
		) : e < o("MAWEphemeralConsts").oneDayInSeconds ? s._(
			/*BTDS*/
			"",
			[s._param("hours", String(Math.floor(e / o("MAWEphemeralConsts").oneHourInSeconds)).concat("h"))]
		) : s._(
			/*BTDS*/
			"",
			[s._param("days", String(Math.floor(e / o("MAWEphemeralConsts").oneDayInSeconds)).concat("d"))]
		);
	}
	function f(e, t) {
		var n = (u || (u = o("I64"))).to_int32(u.sub(e, u.of_float(o("WATimeUtils").unixTime())));
		return t != null && n > (u || (u = o("I64"))).to_int32(t) ? (u || (u = o("I64"))).to_int32(t) : n;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(17), n = e.ephemeralDurationInSec, a = e.expirationTimestamp, i = e.handleMessageExpired, l;
		t[0] !== n || t[1] !== a ? (l = function() {
			return f(a, n);
		}, t[0] = n, t[1] = a, t[2] = l) : l = t[2];
		var u = p(l), d = u[0], g = u[1], h, y;
		t[3] !== d ? (y = _(d), h = s._(
			/*BTDS*/
			"",
			[s._param("time", y)]
		), t[3] = d, t[4] = h, t[5] = y) : (h = t[4], y = t[5]);
		var C = h, b;
		t[6] !== i || t[7] !== d ? (b = function() {
			d > 0 && r("setTimeout")(function() {
				return g(d - 1);
			}, o("MAWEphemeralConsts").msPerSec), d === 0 && (i == null || i());
		}, t[6] = i, t[7] = d, t[8] = b) : b = t[8];
		var v;
		t[9] !== a || t[10] !== i || t[11] !== d ? (v = [
			d,
			a,
			i
		], t[9] = a, t[10] = i, t[11] = d, t[12] = v) : v = t[12], m(b, v);
		var S;
		return t[13] !== C || t[14] !== d || t[15] !== y ? (S = d > 0 ? c.jsxs("div", {
			className: "x2b8uid xbkr7qi",
			children: [c.jsx(r("ScreenReaderText.react"), { text: C }), c.jsx("div", {
				"aria-hidden": !0,
				children: c.jsx(r("MWXText.react"), {
					testid: void 0,
					type: "meta1",
					children: y
				})
			})]
		}) : null, t[13] = C, t[14] = d, t[15] = y, t[16] = S) : S = t[16], S;
	}
	l.default = g;
}), 226);
