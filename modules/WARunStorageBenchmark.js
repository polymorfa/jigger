__d("WARunStorageBenchmark", [
	"Promise",
	"WAIndexDBStorage",
	"WAOpfsSyncStorage",
	"WATestBenchmark",
	"WAWebCacheStorage",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a, i, l) {
			var s = 1024 * a, u = new Blob([new Uint8Array(s).fill(255)]), c = yield u.arrayBuffer();
			t("datapoints: " + i + " repetitions: " + l + " blob size: " + a + "KB");
			var d = yield o("WAIndexDBStorage").prepareIDB();
			yield o("WAIndexDBStorage").cleanupIDB({ idb: d }), yield o("WAWebCacheStorage").cleanupCache();
			var m = yield o("WAWebCacheStorage").prepareCache(), p = yield o("WAOpfsSyncStorage").prepareFileSystem();
			t("start write benchmark...");
			var _ = yield o("WATestBenchmark").createBenchmark(i, l, (function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					yield e("IndexedDB write", (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
							yield o("WAIndexDBStorage").writeToIDB({
								idb: d,
								fileBuffer: yield c,
								key: e + "_" + t
							});
						});
						return function(t, n) {
							return e.apply(this, arguments);
						};
					})()), yield e("Web Cache write", (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
							yield o("WAWebCacheStorage").writeToCache({
								cache: m,
								fileBuffer: c,
								key: e + "_" + t
							});
						});
						return function(t, n) {
							return e.apply(this, arguments);
						};
					})()), yield e("OPFS Sync write", (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
							yield o("WAOpfsSyncStorage").writeToFileSystem({
								directoryHandle: p,
								fileBuffer: c,
								fileName: e + "_" + t
							});
						});
						return function(t, n) {
							return e.apply(this, arguments);
						};
					})());
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})());
			t("end write benchmark..."), r ? o("WATestBenchmark").printAsCSVInMS(t, _) : o("WATestBenchmark").printReport(t, _), t("start read benchmark...");
			var f = yield o("WATestBenchmark").createBenchmark(i, l, (function() {
				var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
					var r;
					yield t("IndexedDB read", (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
							r = yield o("WAIndexDBStorage").readFromIDB({
								idb: d,
								key: e + "_" + t
							});
						});
						return function(t, n) {
							return e.apply(this, arguments);
						};
					})());
					var a;
					yield t("Web Cache read", (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
							a = yield o("WAWebCacheStorage").readFromCache({
								cache: m,
								key: e + "_" + t
							});
						});
						return function(t, n) {
							return e.apply(this, arguments);
						};
					})());
					var i;
					if (yield t("OPFS Sync read", (function() {
						var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
							i = yield o("WAOpfsSyncStorage").readFromFileSystem({
								directoryHandle: p,
								fileName: e + "_" + t
							}), yield o("WAOpfsSyncStorage").cleanupFileSystem({
								directoryHandle: p,
								fileName: e + "_" + t
							});
						});
						return function(t, n) {
							return e.apply(this, arguments);
						};
					})()), !(r instanceof ArrayBuffer && a instanceof ArrayBuffer && i instanceof ArrayBuffer)) return (e || (e = n("Promise"))).reject("read result is not ArrayBuffer");
				});
				return function(e) {
					return t.apply(this, arguments);
				};
			})());
			t("end read benchmark..."), r ? o("WATestBenchmark").printAsCSVInMS(t, f) : o("WATestBenchmark").printReport(t, f);
		});
		return function(n, r, o, a, i) {
			return t.apply(this, arguments);
		};
	})();
	l.runStorageBenchmark = s;
}), 98);
