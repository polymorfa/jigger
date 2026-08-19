__d("WATestBenchmark", ["asyncToGeneratorRuntime"], (function(t, n, r, o, a, i) {
	var e = function() {
		return performance.now();
	};
	function l(e, t, n) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
			var a = {}, i = [], l = (function() {
				var o = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n, o) {
					i.push(n), a[n] = [];
					for (var l = 0; l < t; l++) {
						for (var s = e(), u = 0; u < r; u++) yield o(l, u);
						var c = e();
						a[n].push((c - s) / r);
					}
				});
				return function(t, n) {
					return o.apply(this, arguments);
				};
			})();
			return yield o(l), i.map(function(e) {
				var t = a[e].sort(function(e, t) {
					return e - t;
				}), n = t.length;
				return {
					name: e,
					min: t[0],
					p50: t[Math.floor(n / 2)],
					avg: t.reduce(function(e, t) {
						return e + t;
					}, 0) / n
				};
			});
		}), s.apply(this, arguments);
	}
	function u(e) {
		if (e < 1) {
			var t = Math.round(e * 1e4);
			return t + "μs";
		}
		var n = Math.round(e);
		return n + "ms";
	}
	function c(e, t) {
		t.forEach(function(t) {
			var n = t.avg, r = t.min, o = t.name, a = t.p50;
			e("[" + o + "] min: " + u(r) + ", avg: " + u(n) + ", p50: " + u(a));
		});
	}
	function d(e, t) {
		var n = "\n";
		t.forEach(function(e) {
			var t = e.avg, r = e.min, o = e.name, a = e.p50;
			n += o + "," + Math.round(r) + "," + Math.round(t) + "," + Math.round(a) + "\n";
		}), e(n);
	}
	i.createBenchmark = l, i.printReport = c, i.printAsCSVInMS = d;
}), 66);
