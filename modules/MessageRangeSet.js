__d("MessageRangeSet", [
	"I64",
	"ReplayLastSubject",
	"err"
], (function(t, n, r, o, a, i, l) {
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
	})(o("ReplayLastSubject").ReplayLastSubject), u = (function(e) {
		function t(t) {
			var n;
			n = e.call(this, t) || this;
			for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
			return o.forEach(function(e) {
				n.subscribe({
					complete: function() {
						return e.complete();
					},
					error: function(n) {
						return e.error(n);
					},
					next: function(n) {
						return e.next(n);
					}
				});
			}), n.next(t), n;
		}
		return babelHelpers.inheritsLoose(t, e), t;
	})(s), c = (function() {
		function t() {
			this.$1 = new Set();
		}
		var n = t.prototype;
		return n.$2 = function(n) {
			for (var t of this.$1) {
				var r = t.value;
				if ((e || (e = o("I64"))).le(r.minTimestampMs, n) && ((e || (e = o("I64"))).ge(r.maxTimestampMs, n) || !r.hasMoreAfter)) return t;
			}
			return null;
		}, n.getRangeForTimestamp = function(t) {
			return this.$2(t);
		}, n.upsertRange = function(t) {
			var e = Array.from(this.$1.values()).filter(function(e) {
				return m(e.value, t);
			});
			if (e.length === 0) {
				var n = new s(t);
				return this.$1.add(n), n;
			}
			var r = d.apply(void 0, e.map(function(e) {
				return e.value;
			}).concat([t]));
			if (e.length === 1) {
				var o = e[0];
				return o.next(r), o;
			}
			for (var a of e) this.$1.delete(a);
			var i = babelHelpers.construct(u, [r].concat(e));
			return this.$1.add(i), i;
		}, t;
	})();
	function d() {
		for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
		if (n.length === 0) throw r("err")("Cannot merge 0 ranges");
		for (var i = n[0].threadKey, l = n[0].minTimestampMs, s = n[0].hasMoreAfter, u = n[0].hasMoreBefore, c = n[0].maxMessageId, d = n[0].minMessageId, m = n[0].maxTimestampMs, p = 1; p < n.length; p++) {
			var _ = n[p];
			(e || (e = o("I64"))).le(_.minTimestampMs, l) && ((e || (e = o("I64"))).equal(_.minTimestampMs, l) ? u = u && _.hasMoreBefore : u = _.hasMoreBefore, l = _.minTimestampMs, d = _.minMessageId), (e || (e = o("I64"))).ge(_.maxTimestampMs, m) && ((e || (e = o("I64"))).equal(_.maxTimestampMs, m) ? s = s && _.hasMoreAfter : s = _.hasMoreAfter, m = _.maxTimestampMs, c = _.maxMessageId);
		}
		return {
			hasMoreAfter: s,
			hasMoreBefore: u,
			isLoadingAfter: !1,
			isLoadingBefore: !1,
			maxMessageId: c,
			maxTimestampMs: m,
			minMessageId: d,
			minTimestampMs: l,
			threadKey: i
		};
	}
	function m(t, n) {
		var r = (e || (e = o("I64"))).le(n.minTimestampMs, t.minTimestampMs), a = r ? n : t, i = r ? t : n;
		return !!p(a, i.minTimestampMs);
	}
	function p(t, n) {
		return (e || (e = o("I64"))).ge(n, t.minTimestampMs) && (e || (e = o("I64"))).le(n, t.maxTimestampMs);
	}
	l.MessageRangeSet = c, l.Subject = s;
}), 98);
