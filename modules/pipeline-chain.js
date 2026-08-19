__d("pipeline-chain", ["Promise", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i) {
	"use strict";
	var e, l = (function() {
		function t(e, t) {
			this.$1 = e, this.$2 = t;
		}
		var r = t.prototype;
		return r.pipe = function(o) {
			var r = this.$1, a = this.$2, i = function(a, i) {
				var t = r(a, i);
				return t instanceof (e || (e = n("Promise"))) ? t.then(function(e) {
					return o(e, i);
				}) : o(t, i);
			};
			return new t(i, a);
		}, r.run = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t = yield this.$1(e, this.$2);
				return t;
			});
			function t(t) {
				return e.apply(this, arguments);
			}
			return t;
		})(), t;
	})();
	function s(e, t) {
		return new l(e, t);
	}
	function u(e) {
		return e;
	}
	i.Pipeline = l, i.pipeline = s, i.pipeNoop = u;
}), 66);
