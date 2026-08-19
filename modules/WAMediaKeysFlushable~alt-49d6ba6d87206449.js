__d("WAMediaKeysFlushable", ["WABulkPutMediaKeysApi"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (function() {
		function t() {
			this.$1 = [];
		}
		var n = t.prototype;
		return n.putMediaKey = function(t) {
			this.$1.push(t);
		}, n.flush = async function(n, r) {
			if (r.LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["flushing media keys payload"]))), this.$1.length !== 0) {
				var t = this.$1.slice();
				this.$1 = [], await o("WABulkPutMediaKeysApi").bulkPutMediaKeys(t).catch(function(e) {
					throw r.ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["failed to persist media Keys: ", ""])), e), e;
				});
			}
		}, t;
	})(), c = new u();
	l.MediaKeysFlushable = u, l.mediaKeysFlushable = c;
}), 98);
