__d("MAWDbLogTransactionsMiddleware", [
	"ErrorNormalizeUtils",
	"ExecutionEnvironment",
	"MAWDexieTable",
	"WADevToolsBridge",
	"cr:1265",
	"err",
	"performance"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u() {
		var t = (e || (e = r("ExecutionEnvironment"))).isInWorker ? o("WADevToolsBridge").getDevToolBridge() : null, a = function(t, n) {
			var e, a, i = (e = (a = t._transactorMeta) == null ? void 0 : a.opQueue) != null ? e : [], l = {
				end: null,
				name: n,
				start: (s || (s = r("performance"))).timeOrigin + s.now()
			};
			return i.push(l), t._transactorMeta = babelHelpers.extends({}, t._transactorMeta, {
				name: o("MAWDexieTable").getDexiePSDItem("transactorName"),
				opQueue: i,
				requested: o("MAWDexieTable").getDexiePSDItem("transactionRequested")
			}), function(e) {
				return l.end = (s || (s = r("performance"))).timeOrigin + s.now(), e;
			};
		};
		return {
			create: function(i) {
				return babelHelpers.extends({}, i, {
					table: function(t) {
						var e = i.table(t);
						return babelHelpers.extends({}, e, {
							count: function(r) {
								var n = a(r.trans, t + ":count");
								return e.count(r).then(n);
							},
							get: function(r) {
								var n = a(r.trans, t + ":get");
								return e.get(r).then(n);
							},
							getMany: function(r) {
								var n = a(r.trans, t + ":getMany");
								return e.getMany(r).then(n);
							},
							mutate: function(r) {
								var n = a(r.trans, t + ":mutate");
								return o("MAWDexieTable").dexieResolve(null).then(function() {
									return e.mutate(r);
								}).then(n);
							},
							openCursor: function(r) {
								var n = a(r.trans, t + ":openCursor");
								return e.openCursor(r).then(n);
							},
							query: function(r) {
								var n = a(r.trans, t + ":query");
								return e.query(r).then(n);
							}
						});
					},
					transaction: function(o, a) {
						for (var e = {
							afterLockTs: 0,
							callstack: r("ErrorNormalizeUtils").normalizeError(r("err")("Error for Callstack")),
							dexieRequested: (s || (s = r("performance"))).timeOrigin + s.now(),
							end: 0,
							mode: a === "readwrite" ? "rw" : "r",
							name: "empty",
							opSequence: [],
							requested: void 0,
							source: t != null ? "Worker" : "UI",
							tableChanges: void 0,
							tables: o
						}, l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), c = 2; c < l; c++) u[c - 2] = arguments[c];
						var d = i.transaction.apply(i, [o, a].concat(u));
						return d.addEventListener("complete", function() {
							var o, a, i, l, u;
							e.end = (s || (s = r("performance"))).timeOrigin + s.now(), e.opSequence = [].concat((o = (a = d._transactorMeta) == null ? void 0 : a.opQueue) != null ? o : []), e.name = (i = (l = d._transactorMeta) == null ? void 0 : l.name) != null ? i : "unknown", e.requested = (u = d._transactorMeta) == null ? void 0 : u.requested, t != null ? t.fireAndForget("mawDbDevTool", "logTransaction", {
								ts: (s || (s = r("performance"))).timeOrigin + s.now(),
								type: "transaction",
								val: e
							}, !0) : n("cr:1265") == null || n("cr:1265").recordDexieTransaction(e);
						}), d;
					}
				});
			},
			name: "MAWDbUILogTransactionsMiddleware",
			stack: "dbcore"
		};
	}
	l.default = u;
}), 98);
