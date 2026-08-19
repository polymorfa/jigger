__d("useWAWebReadABPropFromIdb", [
	"Promise",
	"WAPromiseTimeout",
	"WAWebABPropsConfigs",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState, m = "model-storage", p = "abpropConfigs", _ = 3e3;
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n = d(null), r = n[0], a = n[1], i = d(e), l = i[0], s = i[1];
		e !== l && (s(e), a(null));
		var u, m;
		return t[0] !== e ? (u = function() {
			var t = !1;
			return o("WAPromiseTimeout").promiseTimeout(h(e), _).catch(g).then(function(e) {
				t || a(e);
			}), (function() {
				t = !0;
			});
		}, m = [e], t[0] = e, t[1] = u, t[2] = m) : (u = t[1], m = t[2]), c(u, m), r;
	}
	function g() {
		return !1;
	}
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t = o("WAWebABPropsConfigs").ABPropConfigs[e];
				if (t == null) return !1;
				var n = t[0];
				return indexedDB === void 0 || !(yield C()) ? !1 : yield S(String(n));
			} catch (e) {
				return !1;
			}
		}), y.apply(this, arguments);
	}
	function C() {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (typeof indexedDB.databases != "function") return !0;
			try {
				var e = yield indexedDB.databases();
				return e.some(function(e) {
					return e.name === m;
				});
			} catch (e) {
				return !0;
			}
		}), b.apply(this, arguments);
	}
	function v(e) {
		if (e == null || typeof e != "object") return !1;
		var t = e.configValue;
		return typeof t != "string" ? !1 : t === "1" || t === "True" || t === "true";
	}
	function S(t) {
		return new (e || (e = (n("Promise"))))(function(e) {
			var n = !1, r = function(r) {
				n || (n = !0, e(r));
			}, o;
			try {
				o = indexedDB.open(m);
			} catch (e) {
				r(!1);
				return;
			}
			o.onerror = function() {
				return r(!1);
			}, o.onblocked = function() {
				return r(!1);
			}, o.onupgradeneeded = function() {
				try {
					var e;
					(e = o.transaction) == null || e.abort();
				} catch (e) {}
				try {
					indexedDB.deleteDatabase(m);
				} catch (e) {}
				r(!1);
			}, o.onsuccess = function() {
				var e = o.result, n = function(n) {
					try {
						e.close();
					} catch (e) {}
					r(n);
				};
				try {
					if (!e.objectStoreNames.contains(p)) {
						n(!1);
						return;
					}
					var a = e.transaction(p, "readonly");
					a.onerror = function() {
						return n(!1);
					}, a.onabort = function() {
						return n(!1);
					};
					var i = a.objectStore(p), l = i.get(t);
					l.onerror = function() {
						return n(!1);
					}, l.onsuccess = function() {
						n(v(l.result));
					};
				} catch (e) {
					n(!1);
				}
			};
		});
	}
	l.useWAWebReadABPropFromIdb = f;
}), 98);
