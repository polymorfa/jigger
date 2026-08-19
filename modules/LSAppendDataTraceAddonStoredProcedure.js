__d("LSAppendDataTraceAddonStoredProcedure", [
	"LSAppendDataTraceAddon",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSAppendDataTraceAddon"), a.dataTraceId, a.checkPointId, a.syncChannel, a.errorMessage, a.tags);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
