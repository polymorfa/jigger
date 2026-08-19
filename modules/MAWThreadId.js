__d("MAWThreadId", [
	"LSMessagingThreadTypeUtil",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
			return n == null ? void 0 : n.threadType;
		}), s.apply(this, arguments);
	}
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			var r = yield e(t, n);
			return r == null ? !1 : o("LSMessagingThreadTypeUtil").isArmadilloSecure(r);
		}), c.apply(this, arguments);
	}
	function d(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
	}
	l.isSecureThreadKey = u, l.getThread = d;
}), 98);
