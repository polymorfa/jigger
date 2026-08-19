__d("LSIssueAttachmentRestoreTaskStoredProcedure", [
	"LSIssueAttachmentRestoreTask",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSIssueAttachmentRestoreTask"), a.backupEntFbid, a.deliveryObjectId, a.productType, a.mediaType, a.messageId, a.threadId, a.sortOrder, a.traceId, a.serverThreadKey, a.source);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
