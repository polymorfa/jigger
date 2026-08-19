__d("WAWebWhatThisMeansInfoSectionForChannelGeosuspend.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNullFunc",
	"WAWebSettingsBlockedIcon.react",
	"WDSIconIcCheck.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.countryCount, a;
		t[0] !== n ? (a = {
			Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-geosuspend-1",
			text: o("WAWebNullFunc").returnNull,
			subtext: function() {
				return n === 1 ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
			}
		}, t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			Icon: r("WDSIconIcCheck.react"),
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-geosuspend-2",
			subtext: m,
			text: o("WAWebNullFunc").returnNull
		}, t[2] = i) : i = t[2];
		var l;
		t[3] !== a ? (l = [a, i], t[3] = a, t[4] = l) : l = t[4];
		var d = l, p;
		return t[5] !== d ? (p = u.jsx(o("WAWebFlex.react").FlexColumn, {
			testid: "what-this-means-geosuspend",
			justify: "stretch",
			marginTop: 12,
			children: u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: d })
		}, "what-this-means-geosuspend"), t[5] = d, t[6] = p) : p = t[6], p;
	}
	function m() {
		return s._(
			/*BTDS*/
			""
		);
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
