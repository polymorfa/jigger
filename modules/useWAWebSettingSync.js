__d("useWAWebSettingSync", [
	"WALogger",
	"WAWebSettingsSyncBridge",
	"react",
	"react-compiler-runtime",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useCallback;
	function c(e, t, n) {
		var r = o("react-compiler-runtime").c(4), a = n === void 0 ? "app" : n, i;
		return r[0] !== t || r[1] !== e || r[2] !== a ? (i = {
			settingName: e,
			originalSetter: t,
			toProtobufValue: m,
			target: a
		}, r[0] = t, r[1] = e, r[2] = a, r[3] = i) : i = r[3], d(i);
	}
	function d(t) {
		var n = t.originalSetter, a = t.settingName, i = t.target, l = i === void 0 ? "app" : i, s = t.toProtobufValue, c = r("useWAWebStableCallback")(n), d = r("useWAWebStableCallback")(s);
		return u(function(t) {
			for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
			c.apply(void 0, [t].concat(r)), o("WAWebSettingsSyncBridge").sendSettingChange(a, d(t), l).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[settings-sync] Error sending mutation for ",
					": ",
					""
				])), a, String(t)).tags("settings-sync");
			});
		}, [
			a,
			l,
			c,
			d
		]);
	}
	function m(e) {
		return e;
	}
	l.useSettingSync = c, l.useMappedSettingSync = d;
}), 98);
