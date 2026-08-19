__d("WAWebWhatThisMeansInfoSectionForChannelSuspension.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNullFunc",
	"WAWebSettingsBlockedIcon.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		var e = [{
			Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-suspension-bullet-1",
			text: o("WAWebNullFunc").returnNull,
			subtext: function() {
				return s._(
					/*BTDS*/
					""
				);
			}
		}, {
			Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-suspension-bullet-2",
			subtext: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			text: o("WAWebNullFunc").returnNull
		}];
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			testid: "what-this-means-suspension",
			justify: "stretch",
			marginTop: 20,
			children: u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: e })
		}, "what-this-means-suspension");
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
