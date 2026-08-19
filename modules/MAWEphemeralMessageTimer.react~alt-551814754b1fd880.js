__d("MAWEphemeralMessageTimer.react", [
	"fbt",
	"I64",
	"MAWEphemeralConsts",
	"MWXText.react",
	"ScreenReaderText.react",
	"WATimeUtils",
	"react",
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
		var t = e.ephemeralDurationInSec, n = e.expirationTimestamp, a = e.handleMessageExpired, i = p(function() {
			return f(n, t);
		}), l = i[0], u = i[1], d = _(l), g = s._(
			/*BTDS*/
			"",
			[s._param("time", d)]
		);
		return m(function() {
			l > 0 && r("setTimeout")(function() {
				return u(l - 1);
			}, o("MAWEphemeralConsts").msPerSec), l === 0 && (a == null || a());
		}, [
			l,
			n,
			a
		]), l > 0 ? c.jsxs("div", {
			className: "x2b8uid xbkr7qi",
			children: [c.jsx(r("ScreenReaderText.react"), { text: g }), c.jsx("div", {
				"aria-hidden": !0,
				children: c.jsx(r("MWXText.react"), {
					testid: void 0,
					type: "meta1",
					children: d
				})
			})]
		}) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
