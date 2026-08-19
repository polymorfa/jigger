__d("useMWLSMarkThreadAsUnread", [
	"LSFactory",
	"LSOptimisticMarkThreadUnreadStoredProcedure",
	"MWThreadKey.react",
	"MessengerWebUXLogger",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = (s || (s = o("react"))).useCallback;
	function c() {
		var t = o("react-compiler-runtime").c(4), n = (e || (e = r("useReStore")))(), a = o("MWThreadKey.react").useMWThreadKeyMemoizedExn(), l = r("MessengerWebUXLogger").useInteractionLogger(), s;
		return t[0] !== n || t[1] !== l || t[2] !== a ? (s = function() {
			l == null || l({ eventName: "mark_thread_as_unread" }), r("promiseDone")(n.runInTransaction(function(e) {
				return r("LSOptimisticMarkThreadUnreadStoredProcedure")(r("LSFactory")(e), { threadKey: a });
			}, "readwrite", void 0, void 0, i.id + ":31"));
		}, t[0] = n, t[1] = l, t[2] = a, t[3] = s) : s = t[3], s;
	}
	l.default = c;
}), 98);
