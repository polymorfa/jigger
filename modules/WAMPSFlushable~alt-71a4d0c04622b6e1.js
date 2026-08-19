__d("WAMPSFlushable", [
	"MpsTypes",
	"WebMps",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function() {
		function e() {
			this.$1 = [], this.$2 = new Map(), this.$3 = new Set();
		}
		var t = e.prototype;
		return t.enqueue = function(t, n, r) {
			t != null && (this.$1.push(t), this.$2.set(t.messageId, n), this.$3.add(r));
		}, t.flush = async function(t, n, a, i) {
			if (this.$1.length !== 0) {
				var e = this.$1, l = Array.from(this.$3).join(", "), s = this.$2;
				this.$1 = [], this.$2 = new Map(), this.$3 = new Set();
				try {
					var u = await o("WebMps").mps().saveNewMessages(e.map(function(e) {
						return {
							directive: null,
							message: e,
							insertionSource: o("MpsTypes").InsertionSource.Receive
						};
					}), { source: l });
					s.forEach(function(e, t) {
						e(u.get(t));
					});
				} catch (e) {
					var c = r("getErrorSafe")(e);
					s.forEach(function(e) {
						e(c);
					});
				}
			}
		}, e;
	})(), s = new e();
	l.MPSFlushable = e, l.mpsFlushable = s;
}), 98);
