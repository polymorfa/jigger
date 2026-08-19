__d("MWAnimatedImageControlsUtil", [
	"$InternalEnum",
	"CometRelay",
	"MWAnimatedImageControlsUtilCometSettingsQuery.graphql",
	"asyncToGeneratorRuntime",
	"gkx",
	"promiseDone",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState, m = n("$InternalEnum").Mirrored([
		"NOT_FETCHED_YET",
		"OFF",
		"ON"
	]);
	function p() {
		var e = o("react-compiler-runtime").c(3), t = o("CometRelay").useRelayEnvironment(), n = d(null), a = n[0], i = n[1], l = r("gkx")("20836"), s, u;
		if (e[0] !== t ? (s = function() {
			l || r("promiseDone")(_(t).then(i));
		}, u = [t, l], e[0] = t, e[1] = s, e[2] = u) : (s = e[1], u = e[2]), c(s, u), l) return m.ON;
		switch (a) {
			case null: return m.NOT_FETCHED_YET;
			case !0: return m.ON;
			case !1: return m.OFF;
			default: return m.NOT_FETCHED_YET;
		}
	}
	function _(e) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var r, a = yield o("CometRelay").fetchQuery(t, e !== void 0 ? e : e = n("MWAnimatedImageControlsUtilCometSettingsQuery.graphql"), {}).toPromise(), i = a == null || (r = a.viewer) == null || (r = r.video_settings) == null ? void 0 : r.autoplay_setting_www;
			return i === "on";
		}), f.apply(this, arguments);
	}
	l.MWAutoplayAnimationsSetting = m, l.useGetMessengerAutoplaySetting = p;
}), 98);
