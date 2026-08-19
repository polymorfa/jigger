__d("MAWMediaRestoreEBRange", [
	"I64",
	"MpsTypes",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = 0xffffffffffff, u = {
		hasMoreBefore: !0,
		isDefault: !0,
		nextTimestampMsBefore: o("MpsTypes").toTimestamp(s)
	}, c = new Map(), d = (function() {
		function t() {
			this.$1 = new Map();
		}
		var n = t.prototype;
		return n.updateRange = function(n, r) {
			this.$1.set((e || (e = o("I64"))).to_string(n), r);
		}, n.updatePageSize = function(t, n) {
			var e = this.getRange(t);
			this.updateRange(t, babelHelpers.extends({}, e, { pageSize: n }));
		}, n.getRange = function(n) {
			var t;
			return (t = this.$1.get((e || (e = o("I64"))).to_string(n))) != null ? t : u;
		}, n.resetRange = function(n) {
			this.$1.set((e || (e = o("I64"))).to_string(n), u);
		}, t;
	})();
	function m(e) {
		if (c.has(e)) return r("nullthrows")(c.get(e));
		var t = new d();
		return c.set(e, t), t;
	}
	l.getMediaRestoreEBRange = m;
}), 98);
