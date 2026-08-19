__d("MAWBlockUtils", [
	"I64",
	"LSContactUserBlockAction",
	"LSIntEnum",
	"LSThreadBitOffset",
	"ReQL",
	"promiseDone",
	"react",
	"react-compiler-runtime",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = (c || (c = o("react"))).useCallback, m = [
		0,
		31,
		35,
		55,
		56,
		58,
		24,
		25,
		19,
		85
	], p = [
		0,
		31,
		35,
		55,
		56,
		58,
		24,
		25,
		19,
		85,
		8,
		22
	], _ = [
		35,
		19,
		85,
		56,
		24,
		25
	];
	function f() {
		var t = o("react-compiler-runtime").c(2), n = (e || (e = r("useReStore")))(), a;
		return t[0] !== n ? (a = function(t, a) {
			r("promiseDone")((async function() {
				var e = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.participants).getKeyRange(t));
				if (e != null) {
					var l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(n.tables.threads).getKeyRange(e.threadKey).filter(g));
					if (l != null) {
						var c = (s || (s = o("I64"))).equal(a, (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactUserBlockAction").MN_BLOCK)) ? o("LSThreadBitOffset").clear(m, l.capabilities, l.capabilities2, l.capabilities3, l.capabilities4, l.capabilities5) : (s || (s = o("I64"))).equal(a, (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactUserBlockAction").FB_BLOCK)) ? o("LSThreadBitOffset").clear(p, l.capabilities, l.capabilities2, l.capabilities3, l.capabilities4, l.capabilities5) : o("LSThreadBitOffset").set(_, l.capabilities, l.capabilities2, l.capabilities3, l.capabilities4, l.capabilities5), d = c[0], f = c[1];
						await n.runInTransaction(function(e) {
							var t = babelHelpers.extends({}, l, {
								capabilities: d,
								capabilities2: f
							});
							return e.threads.put(t);
						}, "readwrite", void 0, void 0, i.id + ":137");
					}
				}
			})());
		}, t[0] = n, t[1] = a) : a = t[1], a;
	}
	function g(e) {
		return (s || (s = o("I64"))).equal(e.threadType, (u || (u = o("LSIntEnum"))).ofNumber(15));
	}
	l.clearedMnBlockCapabilities = m, l.clearedFbBlockCapabilities = p, l.useChangeThreadBlockCapabilities = f;
}), 98);
