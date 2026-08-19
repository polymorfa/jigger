__d("MAWMediaSetRetryingAndIncreaseCount", [
	"FBLogger",
	"I64",
	"LSIntEnum",
	"asyncToGeneratorRuntime",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t, a) {
		r("promiseDone")(t.then(function(t) {
			return t.runInTransaction((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n, i = yield t.client_media_status.get(a);
					if (i == null) {
						r("FBLogger")("messenger_web_media").mustfix("Trying to increase download retry count without pre-existing media status %s", a);
						return;
					}
					return t.client_media_status.put({
						downloadRetryCount: (e || (e = o("I64"))).add((n = i.downloadRetryCount) != null ? n : (e || (e = o("I64"))).zero, e.one),
						id: a,
						mainMediaStatus: (s || (s = o("LSIntEnum"))).ofNumber(5),
						mainMediaStatusDetails: "manual_retry"
					});
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":23");
		}));
	}
	l.call = u;
}), 98);
