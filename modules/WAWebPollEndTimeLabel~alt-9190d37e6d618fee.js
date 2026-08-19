__d("WAWebPollEndTimeLabel", [
	"fbt",
	"WAWebClock",
	"WAWebFlex.react",
	"WDSIconIcScheduleFilled.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { container: {
		flex: "x3psx0u",
		paddingTop: "x1iorvi4",
		paddingBottom: "xjkvuk6",
		$$css: !0
	} }, d = 1e3, m = 3600, p = 24 * m;
	function _(e) {
		var t = e.isPollEnded, n = e.pollEndTime, a = e.trailingSeparator, i = n - o("WAWebClock").Clock.getServerTimeMs(), l = Math.max(0, Math.ceil(i / d)), p = l < m && !t;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.container,
			testid: t ? "poll-ended-label" : "poll-end-time-label",
			children: [u.jsx(r("WDSIconIcScheduleFilled.react"), {
				width: 12,
				height: 12,
				colorName: p ? "secondaryNegative" : "contentDeemphasized"
			}), u.jsxs("span", babelHelpers.extends({}, {
				0: { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" },
				1: { className: "x1pg5gke x1d3mw78 x30a034 xaso8d8" }
			}[!!p << 0], { children: [t ? s._(
				/*BTDS*/
				""
			) : f(l), a ? u.jsx("span", {
				className: "x135b78x x11lfxj5",
				children: "·"
			}) : null] }))]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		if (e < m) return s._(
			/*BTDS*/
			""
		);
		if (e < p) {
			var t = Math.floor(e / m);
			return s._(
				/*BTDS*/
				"",
				[s._param("hours", t)]
			);
		}
		var n = Math.floor(e / p);
		return s._(
			/*BTDS*/
			"",
			[s._param("days", n)]
		);
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
