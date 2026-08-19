__d("MAWMediaIncreaseCount", [
	"FBLogger",
	"I64",
	"asyncToGeneratorRuntime",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, a) {
		r("promiseDone")(t.then(function(t) {
			return t.runInTransaction((function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var n, i = yield t.client_media_status.get(a);
					if (i == null) {
						r("FBLogger")("messenger_web_media").mustfix("Trying to increase download retry count without pre-existing media status %s", a);
						return;
					}
					return t.client_media_status.put(babelHelpers.extends({}, i, { downloadRetryCount: (e || (e = o("I64"))).add((n = i.downloadRetryCount) != null ? n : (e || (e = o("I64"))).zero, e.one) }));
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})(), "readwrite", void 0, void 0, i.id + ":21");
		}));
	}
	l.call = s;
}), 98);
