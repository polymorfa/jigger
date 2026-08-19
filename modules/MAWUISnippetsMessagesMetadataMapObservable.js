__d("MAWUISnippetsMessagesMetadataMapObservable", ["I64", "ReplayLastSubject"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function(e) {
		function t(t) {
			var n;
			return n = e.call(this, t) || this, n.value = t, n;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.next = function(n) {
			this.value = n, e.prototype.next.call(this, n);
		}, t;
	})(o("ReplayLastSubject").ReplayLastSubject), u = (function() {
		function t() {
			this.$1 = new Map();
		}
		var n = t.prototype;
		return n.get = function(n) {
			var t = (e || (e = o("I64"))).to_string(n), r = this.$1.get(t);
			if (r == null) {
				var a = new s([]);
				return this.$1.set(t, a), a;
			}
			return r;
		}, n.set = function(t, n) {
			var e = this.get(t), r = e.value;
			if (r.length !== n.length) {
				e.next(n);
				return;
			}
			var o = r.every(function(e, t) {
				var r = n[t];
				return e.externalId === r.externalId && e.sortOrderMs === r.sortOrderMs;
			});
			o || e.next(n);
		}, t;
	})();
	l.Subject = s, l.MAWUISnippetsMessagesMetadataMapObservable = u;
}), 98);
