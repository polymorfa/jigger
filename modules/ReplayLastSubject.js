__d("ReplayLastSubject", ["relay-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = Object.freeze({}), s = (function() {
		function t(t) {
			var n = this;
			t === void 0 && (t = e), this.$1 = !1, this.$5 = new Set(), this.$3 = t, this.$4 = o("relay-runtime").Observable.create(function(t) {
				if (n.$1) {
					n.$2 != null ? t.error(n.$2) : t.complete();
					return;
				}
				return n.$5.add(t), n.$3 !== e && t.next(n.$3), function() {
					n.$5.delete(t);
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
		}, n.getObserverCount = function() {
			return this.$5.size;
		}, t;
	})();
	l.ReplayLastSubject = s;
}), 98);
