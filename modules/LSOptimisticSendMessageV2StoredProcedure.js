__d("LSOptimisticSendMessageV2StoredProcedure", [
	"LSOptimisticSendMessageV2",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSOptimisticSendMessageV2"), a.senderId, a.threadKey, a.threadType, a.mailboxType, a.text, a.snippet, a.extraSendMessageParams, a.dataclassParams, a.metadataDataclass);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
