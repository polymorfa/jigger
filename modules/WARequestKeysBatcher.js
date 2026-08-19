__d("WARequestKeysBatcher", ["WAResolvable"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = {
		delayMs: 50,
		maxSize: 100
	};
	function s(t, n) {
		var r = n === void 0 ? e : n, a = r.delayMs, i = r.maxSize, l = null;
		function s(e) {
			return l && l.args === e && (l = null), t(e);
		}
		return function(e) {
			if (l != null) l.args.push(e);
			else {
				var t = [e], n = new (o("WAResolvable")).Resolvable(), r = n.promise.then(s), u = function() {
					return void n.resolve(t);
				}, c = setTimeout(u, a);
				l = {
					args: t,
					batchPromise: r,
					run: u,
					timer: c
				};
			}
			var d = l, m = d.args, p = d.batchPromise, _ = m.length - 1;
			if (m.length >= i) {
				var f;
				clearTimeout((f = l) == null ? void 0 : f.timer), l.run(), l = null;
			}
			return p.then(function(e) {
				return e[_];
			});
		};
	}
	l.makeSimpleBatcher = s;
}), 98);
