__d("WAWebRobotoVariableFontLoadable", [
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useEffect, u = r("WAWebLazyLoadedRetriable")(async function() {
		var e = await r("JSResourceForInteraction")("WDSLoadRobotoVariableFont").__setRef("WAWebRobotoVariableFontLoadable").load();
		return e;
	}, "WDSLoadRobotoVariableFont");
	function c() {
		u();
	}
	function d() {
		var e = o("react-compiler-runtime").c(1), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0], s(m, t);
	}
	function m() {
		c();
	}
	l.requireRobotoVariableFont = u, l.applyRobotoFont = c, l.useApplyRobotoFont = d;
}), 98);
