__d("LSSerializeAttachmentBackupPayloadStoredProcedure", [
	"LSSerializeAttachmentBackupPayload",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSSerializeAttachmentBackupPayload"), a.attachmentInfos, a.messageId, a.threadId, a.productType, a.error, a.errorMessage);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
