__d("LSIssueThreadRemoveStoredProcedure", [
	"LSIssueThreadRemove",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSIssueThreadRemove"), a.actThreadId, a.sortKey, a.source, a.traceId, a.error);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
