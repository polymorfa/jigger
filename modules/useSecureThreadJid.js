__d("useSecureThreadJid", [
	"I64",
	"Int64Hooks",
	"LSMessagingThreadTypeUtil",
	"MAWMiActOnActThreadReady",
	"Promise",
	"ReQL",
	"ReQLSuspense",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c || (c = o("react"))).useRef;
	function m(t, a) {
		var l, c = o("react-compiler-runtime").c(13), m = (s || (s = r("useReStore")))(), p = d(), _ = (l = o("ReQLSuspense").useFirst(function() {
			return o("ReQL").fromTableAscending(m.tables.threads, ["threadType"]).getKeyRange(t);
		}, [m, t], i.id + ":35")) == null ? void 0 : l.threadType, f;
		c[0] !== _ ? (f = _ != null ? o("LSMessagingThreadTypeUtil").isArmadilloSecure(_) : !1, c[0] = _, c[1] = f) : f = c[1];
		var g = f, h;
		c[2] !== m.tables || c[3] !== a || c[4] !== g || c[5] !== t ? (h = function() {
			t == null || (u || (u = o("I64"))).equal(t, (u || (u = o("I64"))).zero || !g) || r("promiseDone")(o("MAWMiActOnActThreadReady").onActThreadReady(m.tables, t, "useSecureThreadJid: " + a, function(t, r) {
				return p.current = r, (e || (e = n("Promise"))).resolve();
			}));
		}, c[2] = m.tables, c[3] = a, c[4] = g, c[5] = t, c[6] = h) : h = c[6];
		var y;
		c[7] !== m || c[8] !== a || c[9] !== g || c[10] !== t ? (y = [
			m,
			t,
			g,
			a
		], c[7] = m, c[8] = a, c[9] = g, c[10] = t, c[11] = y) : y = c[11], o("Int64Hooks").useEffectInt64(h, y);
		var C;
		return c[12] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			return p.current;
		}, c[12] = C) : C = c[12], C;
	}
	l.default = m;
}), 98);
