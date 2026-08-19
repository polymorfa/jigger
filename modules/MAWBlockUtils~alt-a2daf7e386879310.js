__d("MAWBlockUtils", [
	"I64",
	"LSContactUserBlockAction",
	"LSIntEnum",
	"LSThreadBitOffset",
	"ReQL",
	"promiseDone",
	"react",
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
		var t = (e || (e = r("useReStore")))();
		return d(function(e, n) {
			r("promiseDone")((async function() {
				var a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.participants).getKeyRange(e));
				if (a != null) {
					var l = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.tables.threads).getKeyRange(a.threadKey).filter(function(e) {
						return (s || (s = o("I64"))).equal(e.threadType, (u || (u = o("LSIntEnum"))).ofNumber(15));
					}));
					if (l != null) {
						var c = (s || (s = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactUserBlockAction").MN_BLOCK)) ? o("LSThreadBitOffset").clear(m, l.capabilities, l.capabilities2, l.capabilities3, l.capabilities4, l.capabilities5) : (s || (s = o("I64"))).equal(n, (u || (u = o("LSIntEnum"))).ofNumber(r("LSContactUserBlockAction").FB_BLOCK)) ? o("LSThreadBitOffset").clear(p, l.capabilities, l.capabilities2, l.capabilities3, l.capabilities4, l.capabilities5) : o("LSThreadBitOffset").set(_, l.capabilities, l.capabilities2, l.capabilities3, l.capabilities4, l.capabilities5), d = c[0], f = c[1];
						await t.runInTransaction(function(e) {
							var t = babelHelpers.extends({}, l, {
								capabilities: d,
								capabilities2: f
							});
							return e.threads.put(t);
						}, "readwrite", void 0, void 0, i.id + ":137");
					}
				}
			})());
		}, [t]);
	}
	l.clearedMnBlockCapabilities = m, l.clearedFbBlockCapabilities = p, l.useChangeThreadBlockCapabilities = f;
}), 98);
