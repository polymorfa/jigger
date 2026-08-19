__d("WAWebPluginDebugHelper", ["WAArrayUtils", "sumBy"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [];
	function s() {
		e.length = 0;
	}
	function u() {
		var t = o("WAArrayUtils").groupBy(e, function(e) {
			return e.plugin + ":" + e.functionName;
		}), n = t.entries().toArray().map(function(e) {
			var t = e[0], n = e[1], o = n.length, a = r("sumBy")(n, function(e) {
				return e.duration;
			}), i = a / o;
			return {
				name: t,
				count: o,
				avgTime: i,
				sumTime: a
			};
		}), a = n.sort(function(e, t) {
			return t.sumTime - e.sumTime;
		});
		console.table([].concat(a));
	}
	l.resetLog = s, l.prettyPrintLogs = u;
}), 98);
