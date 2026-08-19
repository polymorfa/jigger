__d("MAWMediaSetRetryingAndIncreaseCount", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, n) {
		r("promiseDone")(t.then(function(t) {
			return t.runInTransaction(async function(t) {
				var a, i = await t.client_media_status.get(n);
				if (i == null) {
					r("FBLogger")("messenger_web_media").mustfix("Trying to increase download retry count without pre-existing media status %s", n);
					return;
				}
				return t.client_media_status.put({
					downloadRetryCount: (e || (e = o("I64"))).add((a = i.downloadRetryCount) != null ? a : (e || (e = o("I64"))).zero, e.one),
					id: n,
					mainMediaStatus: (s || (s = o("LSIntEnum"))).ofNumber(5),
					mainMediaStatusDetails: "manual_retry"
				});
			}, "readwrite", void 0, void 0, i.id + ":23");
		}));
	}
	l.call = u;
}), 98);
