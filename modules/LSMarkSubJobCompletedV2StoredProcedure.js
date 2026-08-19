__d("LSMarkSubJobCompletedV2StoredProcedure", [
	"LSMarkSubJobCompletedV2",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSMarkSubJobCompletedV2"), a.offlineAttachmentId, a.fbid, a.messageId, a.metadata, a.error);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
