__d("WAIndexDBStorage", ["Promise", "err"], (function(t, n, r, o, a, i, l) {
	var e, s = "idb-storage-testing-db", u = "idb-storage-testing-store";
	function c() {
		return new (e || (e = (n("Promise"))))(function(e, t) {
			var n = indexedDB.open(s);
			n.onerror = function(e) {
				t(e.target.error);
			}, n.onupgradeneeded = function(e) {
				var t = e.target.result;
				t.createObjectStore(u);
			}, n.onsuccess = function(t) {
				var n = t.target.result;
				e(n);
			};
		});
	}
	function d(t) {
		var r = t.fileBuffer, o = t.idb, a = t.key;
		return new (e || (e = (n("Promise"))))(function(e, t) {
			var n = o.transaction([u], "readwrite");
			n.oncomplete = function() {
				e();
			}, n.onerror = function(e) {
				t(e.target.error);
			}, n.onabort = function(e) {
				t(e.target.error);
			};
			var i = n.objectStore(u), l = i.put(r, a);
			l.onerror = function(e) {
				t(e.target.error);
			}, l.onsuccess = function() {
				e();
			};
		});
	}
	function m(t) {
		var o = t.idb, a = t.key;
		return new (e || (e = (n("Promise"))))(function(e, t) {
			var n = o.transaction([u], "readonly");
			n.onerror = function(e) {
				t(e.target.error);
			}, n.onabort = function(e) {
				t(e.target.error);
			};
			var i = n.objectStore(u), l = i.get(a);
			l.onerror = function(e) {
				t(e.target.error);
			}, l.onsuccess = function() {
				if (!(l.result instanceof ArrayBuffer)) {
					t(r("err")("Result is not an ArrayBuffer"));
					return;
				}
				e(l.result);
			};
		});
	}
	function p(t) {
		var r = t.idb;
		return new (e || (e = (n("Promise"))))(function(e, t) {
			var n = r.transaction([u], "readwrite");
			n.oncomplete = function() {
				e();
			}, n.onerror = function(e) {
				t(e.target.error);
			}, n.onabort = function(e) {
				t(e.target.error);
			};
			var o = n.objectStore(u), a = o.clear();
			a.onerror = function(e) {
				t(e.target.error);
			}, a.onsuccess = function() {
				e();
			};
		});
	}
	function _(e) {
		var t = e.idb;
		t.close(), indexedDB.deleteDatabase(s);
	}
	l.prepareIDB = c, l.writeToIDB = d, l.readFromIDB = m, l.cleanupIDB = p, l.deleteIdb = _;
}), 98);
