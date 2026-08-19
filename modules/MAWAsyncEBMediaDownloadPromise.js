__d("MAWAsyncEBMediaDownloadPromise", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = new Map();
	function l(t) {
		var n = t.messageId, r = t.objectId, o = t.plaintextHash, a = t.threadId, i = e.get(r);
		e.set(r, i != null ? [].concat(i, [{
			messageId: n,
			plaintextHash: o,
			threadId: a
		}]) : [{
			messageId: n,
			plaintextHash: o,
			threadId: a
		}]);
	}
	function s(t) {
		var n;
		return (n = e.get(t)) == null ? void 0 : n.pop();
	}
	i.setMediaDownloadPayload = l, i.retrieveMediaDownloadPayload = s;
}), 66);
