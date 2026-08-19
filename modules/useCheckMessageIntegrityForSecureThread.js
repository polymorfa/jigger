__d("useCheckMessageIntegrityForSecureThread", [
	"Int64Hooks",
	"MAWMessageIntegrityCheckDeferred",
	"MAWMessageIntegrityCheckFlytrapQueue",
	"MetaConfig",
	"Random",
	"WATimeUtils",
	"cr:10710",
	"react-compiler-runtime",
	"useMWEntrypoint"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (e = n("cr:10710") == null ? void 0 : n("cr:10710").getIntegrityCheckSampleRate()) != null ? e : r("MetaConfig")._("59");
	function u(e, t, n) {
		var a = o("react-compiler-runtime").c(6), i = r("useMWEntrypoint")(), l, u;
		return a[0] !== e || a[1] !== i || a[2] !== t || a[3] !== n ? (l = function(a, l, u, c) {
			if (o("MAWMessageIntegrityCheckFlytrapQueue").enqueueFlytrapMessageIntegrityCheck({
				lastItemFromPreviousPage: a,
				pageSize: u,
				threadKey: t,
				uiMessages: l
			}), !!o("Random").coinflip(s)) {
				var r = o("WATimeUtils").millisTime();
				o("MAWMessageIntegrityCheckDeferred").runMessageIntegrityCheckDeferred(e, t, n, i, u, a, l, c, r);
			}
		}, u = [
			e,
			t,
			n,
			i
		], a[0] = e, a[1] = i, a[2] = t, a[3] = n, a[4] = l, a[5] = u) : (l = a[4], u = a[5]), o("Int64Hooks").useCallbackInt64(l, u);
	}
	l.default = u;
}), 98);
