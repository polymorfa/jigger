__d("LSLocalApplyOptimisticMessageWithAttachmentsStoredProcedure", [
	"LSLocalApplyOptimisticMessageWithAttachments",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSLocalApplyOptimisticMessageWithAttachments"), a.senderId, a.threadKey, a.threadType, a.text, a.snippet, a.snippetHasEmoji, a.stickerId, a.replySourceId, a.replySourceType, a.replySourceTypeV2, a.isForwarded, a.attachments, a.mentionData);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
