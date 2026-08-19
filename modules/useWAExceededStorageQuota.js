__d("useWAExceededStorageQuota", [
	"MAWUnrecoverableDbErrors",
	"WAExceededStorageQuota",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = s.useEffect, c = s.useMemo, d = s.useState;
	function m() {
		var e = o("react-compiler-runtime").c(5), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAExceededStorageQuota").getExceededStorageQuota(), e[0] = t) : t = e[0];
		var n = d(t), r = n[0], a = n[1], i, l;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = function() {
			var e = function(t) {
				a(t);
			}, t = o("WAExceededStorageQuota").subscribe(e);
			return (function() {
				t();
			});
		}, l = [], e[1] = i, e[2] = l) : (i = e[1], l = e[2]), u(i, l);
		var s;
		return e[3] !== r ? (s = r ? new (o("MAWUnrecoverableDbErrors")).WAExceededStorageQuotaError() : null, e[3] = r, e[4] = s) : s = e[4], s;
	}
	l.default = m;
}), 98);
