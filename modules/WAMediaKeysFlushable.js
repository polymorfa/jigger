__d("WAMediaKeysFlushable", ["WABulkPutMediaKeysApi", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (function() {
		function t() {
			this.$1 = [];
		}
		var r = t.prototype;
		return r.putMediaKey = function(t) {
			this.$1.push(t);
		}, r.flush = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
				if (n.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["flushing media keys payload"]))), this.$1.length !== 0) {
					var r = this.$1.slice();
					this.$1 = [], yield o("WABulkPutMediaKeysApi").bulkPutMediaKeys(r).catch(function(e) {
						throw n.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["failed to persist media Keys: ", ""])), e), e;
					});
				}
			});
			function r(e, n) {
				return t.apply(this, arguments);
			}
			return r;
		})(), t;
	})(), c = new u();
	l.MediaKeysFlushable = u, l.mediaKeysFlushable = c;
}), 98);
