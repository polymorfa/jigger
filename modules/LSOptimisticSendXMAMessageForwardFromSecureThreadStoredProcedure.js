__d("LSOptimisticSendXMAMessageForwardFromSecureThreadStoredProcedure", [
	"LSOptimisticSendXMAMessageForwardFromSecureThread",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSOptimisticSendXMAMessageForwardFromSecureThread"), a.senderId, a.threadKey, a.threadType, a.text, a.isForwarded, a.source, a.attachments);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
