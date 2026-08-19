__d("MAWMediaIncreaseCount", [
	"FBLogger",
	"I64",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, n) {
		r("promiseDone")(t.then(function(t) {
			return t.runInTransaction(async function(t) {
				var a, i = await t.client_media_status.get(n);
				if (i == null) {
					r("FBLogger")("messenger_web_media").mustfix("Trying to increase download retry count without pre-existing media status %s", n);
					return;
				}
				return t.client_media_status.put(babelHelpers.extends({}, i, { downloadRetryCount: (e || (e = o("I64"))).add((a = i.downloadRetryCount) != null ? a : (e || (e = o("I64"))).zero, e.one) }));
			}, "readwrite", void 0, void 0, i.id + ":21");
		}));
	}
	l.call = s;
}), 98);
