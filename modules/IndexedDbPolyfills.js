__d("IndexedDbPolyfills", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = (function() {
		function e() {
			this.onsuccess = null, this.onerror = null, this.$1 = new Map();
		}
		var t = e.prototype;
		return t.emit = function(t) {
			for (var e = this.$1.get(t), n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
			if (e !== void 0) for (var a of e) a.apply(void 0, r);
			t === "success" && this.onsuccess != null ? this.onsuccess.apply(this, r) : t === "error" && this.onerror != null && this.onerror.apply(this, r);
		}, t.addEventListener = function(t, n, r) {
			var e = this;
			r === void 0 && (r = {});
			var o = r, a = o.signal, i = this.$1.get(t);
			i === void 0 && (i = new Set(), this.$1.set(t, i)), i.add(n), a != null && (a.onabort = function() {
				e.removeEventListener(t, n);
			});
		}, t.removeEventListener = function(t, n) {
			var e = this.$1.get(t);
			e !== void 0 && e.delete(n);
		}, e;
	})(), l = function() {
		return function(t, n) {
			var r = this.openCursor(t != null ? t : null), o = [], a = new e();
			return r.onsuccess = function(e) {
				var t = e.target.result;
				if (t != null && (n === void 0 || o.length < n)) o.push(t.value), t.continue();
				else {
					a.result = o, a.onsuccess == null || a.onsuccess({ target: {
						readyState: "done",
						result: o
					} });
					return;
				}
			}, r.onerror = function(e) {
				a.onerror == null || a.onerror(e);
			}, a;
		};
	}, s = typeof window != "undefined" ? window : self;
	typeof s.IDBObjectStore != "undefined" && s.IDBObjectStore.prototype.getAll === void 0 && (s.IDBObjectStore.prototype.getAll = l()), i.IDBRequest = e, i.getAll = l;
}), 66);
