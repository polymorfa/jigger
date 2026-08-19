__d("LSInsertNewMediaSendStoredProcedure", [
	"LSInsertNewMediaSend",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSInsertNewMediaSend"), a.offlineAttachmentId, a.offlineThreadingId, a.inMessageIndex, a.attachmentType, a.shouldTranscode, a.useDoublePhase, a.sendByServer, a.isSecure);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
