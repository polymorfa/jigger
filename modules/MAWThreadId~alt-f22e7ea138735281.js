__d("MAWThreadId", ["LSMessagingThreadTypeUtil", "ReQL"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e, t) {
		var n = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
		return n == null ? void 0 : n.threadType;
	}
	async function s(t, n) {
		var r = await e(t, n);
		return r == null ? !1 : o("LSMessagingThreadTypeUtil").isArmadilloSecure(r);
	}
	function u(e, t) {
		return o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.threads).getKeyRange(t));
	}
	l.isSecureThreadKey = s, l.getThread = u;
}), 98);
