__d("WASmaxInDevicesFetchUserResponseFailureMixin", [
	"WAResultOrError",
	"WASmaxInDevicesFetchOrFetchNonRetryableUserErrorMixinGroup",
	"WASmaxParseJid",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = o("WASmaxParseUtils").assertTag(e, "user");
		if (!t.success) return t;
		var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
		if (!n.success) return n;
		var r = o("WASmaxParseJid").attrUserJid(e, "jid");
		if (!r.success) return r;
		var a = o("WASmaxInDevicesFetchOrFetchNonRetryableUserErrorMixinGroup").parseFetchOrFetchNonRetryableUserErrorMixinGroup(n.value);
		return a.success ? o("WAResultOrError").makeResult({
			jid: r.value,
			errorFetchOrFetchNonRetryableUserErrorMixinGroup: a.value
		}) : a;
	}
	l.parseFetchUserResponseFailureMixin = e;
}), 98);
