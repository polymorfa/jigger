__d("ReplayLastSubjectWithMapper", ["relay-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = Object.freeze({}), s = (function() {
		function t(t, n) {
			var r = this;
			t === void 0 && (t = e), this.$1 = !1, this.$5 = new Set(), this.$3 = t, this.$6 = n, this.$4 = o("relay-runtime").Observable.create(function(t) {
				if (r.$1) {
					r.$2 != null ? t.error(r.$2) : t.complete();
					return;
				}
				return r.$5.add(t), r.$3 !== e && t.next(r.$6(r.$3)), function() {
					r.$5.delete(t);
				};
			});
		}
		var n = t.prototype;
		return n.next = function(t) {
			this.$1 || this.$3 !== t && (this.$3 = t, this.$5.forEach(function(e) {
				return e.next(t);
			}));
		}, n.error = function(t) {
			this.$1 || (this.$1 = !0, this.$2 = t, this.$5.forEach(function(e) {
				return e.error(t);
			}));
		}, n.complete = function() {
			this.$1 || (this.$1 = !0, this.$5.forEach(function(e) {
				return e.complete();
			}));
		}, n.subscribe = function(t) {
			return this.$4.subscribe(t);
		}, t;
	})();
	l.ReplayLastSubjectWithMapper = s;
}), 98);
