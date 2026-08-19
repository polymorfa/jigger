__d("MAWOfflineQueueThreadStatus", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = function(t, n) {
		return Object.entries(t).filter(function(e) {
			var t, r, o = e[0], a = e[1];
			return ((t = n[o]) == null ? void 0 : t.chatStatus) !== a.chatStatus || ((r = n[o]) == null ? void 0 : r.snippetStatus) !== a.snippetStatus;
		});
	}, l = function(t, n) {
		return t.reduce(function(e, t) {
			var n = t[0], r = t[1];
			return e[n] = {
				chatStatus: r.chatStatus,
				snippetStatus: r.snippetStatus
			}, e;
		}, n);
	};
	function s(t, n) {
		var r = t != null ? e(t, n) : null, o = r == null || r.length === 0 ? n : l(r, babelHelpers.extends({}, n));
		return o;
	}
	i.calculateOfflineQueueThreadStatus = s;
}), 66);
