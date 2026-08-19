__d("LSUpsertAttachmentRangeStoredProcedure", [
	"LSSynchronousPromise",
	"LSUpsertAttachmentRange",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSUpsertAttachmentRange"), a.threadKey, a.mediaGroup, a.newMinTs, a.hasMoreBefore, a.newLastLoadedMessageId);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
