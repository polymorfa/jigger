__d("WAWebWhatThisMeansInfoSectionForChannelGeosuspend.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNullFunc",
	"WAWebSettingsBlockedIcon.react",
	"WDSIconIcCheck.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t = e.countryCount, n = [{
			Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-geosuspend-1",
			text: o("WAWebNullFunc").returnNull,
			subtext: function() {
				return t === 1 ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
			}
		}, {
			Icon: r("WDSIconIcCheck.react"),
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-geosuspend-2",
			subtext: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			text: o("WAWebNullFunc").returnNull
		}];
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			testid: "what-this-means-geosuspend",
			justify: "stretch",
			marginTop: 12,
			children: u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: n })
		}, "what-this-means-geosuspend");
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
