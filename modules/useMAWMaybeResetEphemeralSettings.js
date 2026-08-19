__d("useMAWMaybeResetEphemeralSettings", [
	"DateConsts",
	"Int64Hooks",
	"MAWEphemeralGatingUtil",
	"MAWGetEphemeralSettings",
	"MAWMiActOnActThreadReady",
	"MWFBLogger",
	"Promise",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"updateEphemeralDuration",
	"useAsyncReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c || (c = o("react"))).useRef, m = 0;
	function p(e) {
		var t = o("react-compiler-runtime").c(4), n = r("useAsyncReStore")(), a = d(null), i, l;
		t[0] !== n || t[1] !== e ? (i = function() {
			(a.current == null || a.current !== e) && (a.current = e, o("MAWEphemeralGatingUtil").isResetEphemeralSettingsEnabled() && r("promiseDone")(n, function(t) {
				return r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(t.tables, e, "useMAWResetEphemeralSettings", function(t, n) {
					return _(e, n);
				}));
			}));
		}, l = [e, n], t[0] = n, t[1] = e, t[2] = i, t[3] = l) : (i = t[2], l = t[3]), o("Int64Hooks").useEffectInt64(i, l);
	}
	function _(t, a) {
		var i = o("MAWEphemeralGatingUtil").getExpirationOptions();
		return a != null ? o("MAWGetEphemeralSettings").getEphemeralSetting(a, t).then(function(n) {
			n && n.ephemeralExpirationInSec > 0 && n.ephemeralExpirationInSec < o("DateConsts").SEC_PER_DAY && !i.includes(n.ephemeralExpirationInSec) && r("promiseDone")(r("updateEphemeralDuration")(a, m, !0, function() {
				o("MWFBLogger").MWLogger().DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"[reset ephemeral settings]: success to reset settings for chatJid ",
					", previous settings was ",
					""
				])), a, n.ephemeralExpirationInSec);
			}, function() {
				o("MWFBLogger").MWLogger().DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"[reset ephemeral settings]: fail to reset settings for chatJid ",
					", previous settings was ",
					""
				])), a, n.ephemeralExpirationInSec);
			}, t));
		}) : (u || (u = n("Promise"))).resolve();
	}
	l.default = p;
}), 98);
