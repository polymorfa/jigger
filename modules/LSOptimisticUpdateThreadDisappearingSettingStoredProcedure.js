__d("LSOptimisticUpdateThreadDisappearingSettingStoredProcedure", [
	"LSOptimisticUpdateThreadDisappearingSetting",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		a === void 0 && (a = {});
		var i = t.storedProcedure(r("LSOptimisticUpdateThreadDisappearingSetting"), a.threadKey, a.disappearingTtl, a.updatedTimestamp, a.updatedBy);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
