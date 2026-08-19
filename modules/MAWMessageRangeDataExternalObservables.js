__d("MAWMessageRangeDataExternalObservables", ["ReplayLastSubjectWithMapper", "nullthrows"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e() {
			this.$1 = [];
		}
		var t = e.prototype;
		return t.getOrCreateExternalObservableForRange = function(t, n) {
			var e = this.$1.find(function(e) {
				var n = e[0], r = e[1];
				return t === n;
			});
			if (e != null) return e[1];
			var r = new (o("ReplayLastSubjectWithMapper")).ReplayLastSubjectWithMapper({
				range: t.value,
				rangeExternalIds: n
			}, function(e) {
				var t = e.range, n = e.rangeExternalIds;
				return {
					range: t,
					rangeExternalIds: n
				};
			});
			return this.$1.push([t, r]), r;
		}, t.updateExternalObservableWithRange = function(t, n) {
			var e = r("nullthrows")(this.$1.find(function(e) {
				var n = e[0], r = e[1];
				return r === t;
			}));
			e[0] !== n && (e[0] = n);
		}, e;
	})();
	l.MAWMessageRangeDataExternalObservables = e;
}), 98);
