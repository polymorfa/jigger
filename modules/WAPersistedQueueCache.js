__d("WAPersistedQueueCache", [
	"WAResolvable",
	"WAShiftTimer",
	"WATagsLogger",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t, r, a) {
		var i = o("WATagsLogger").TAGS([
			"PersistedQueue",
			t,
			"cache"
		]), l = [], s = new (o("WAResolvable")).Resolvable(), u = a != null ? a : {}, c = new (o("WAShiftTimer")).ShiftTimer(function() {
			p();
		});
		return {
			commit: function() {
				return p();
			},
			add: function(t) {
				l.push(t);
				var e = s;
				return d(), m(), e.promise;
			},
			config: function(t) {
				u = t;
			}
		};
		function d() {
			u.cacheSize != null && l.length >= u.cacheSize && p();
		}
		function m() {
			if (u.maxDelay != null) {
				var e = u.maxDelay;
				c.cancel(), c.onOrAfter(e);
			}
		}
		function p() {
			return _.apply(this, arguments);
		}
		function _() {
			return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (l.length !== 0) {
					c.cancel();
					var t = l;
					l = [];
					var n = s;
					s = new (o("WAResolvable")).Resolvable();
					try {
						yield r(t), n.resolve();
					} catch (t) {
						throw i.ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Error during flush: ", ""])), t), n.reject(t), t;
					}
				}
			}), _.apply(this, arguments);
		}
	}
	l.makePersistedQueueCache = s;
}), 98);
