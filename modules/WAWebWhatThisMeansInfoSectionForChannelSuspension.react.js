__d("WAWebWhatThisMeansInfoSectionForChannelSuspension.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebNewsletterModalsUtils.react",
	"WAWebNullFunc",
	"WAWebSettingsBlockedIcon.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { secondaryColor: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [{
			Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-suspension-bullet-1",
			text: o("WAWebNullFunc").returnNull,
			subtext: p
		}, {
			Icon: o("WAWebSettingsBlockedIcon.react").SettingsBlockedIcon,
			iconXstyle: c.secondaryColor,
			iconSize: 24,
			testid: "what-this-means-suspension-bullet-2",
			subtext: m,
			text: o("WAWebNullFunc").returnNull
		}], e[0] = t) : t = e[0];
		var n = t, r;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebFlex.react").FlexColumn, {
			testid: "what-this-means-suspension",
			justify: "stretch",
			marginTop: 20,
			children: u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, { bullets: n })
		}, "what-this-means-suspension"), e[1] = r) : r = e[1], r;
	}
	function m() {
		return s._(
			/*BTDS*/
			""
		);
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p() {
		return s._(
			/*BTDS*/
			""
		);
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = d;
}), 226);
