__d("LSGetLatestThreadIds.nop", [
	"I64",
	"LSVec",
	"MAWBridgeSafeActionsWorkerAndUI",
	"Promise",
	"ReQL",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(e, t) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var i = [], l = yield o("ReQL").toArrayAsync(o("ReQL").fromTableAscending(a.mi_act_mapping_table)).then(function(e) {
				return e.map(function(e) {
					var t = e.jid;
					return (s || (s = o("I64"))).to_string(t);
				});
			});
			if (l.length > 0) {
				var u = new Set(l);
				t.forEach(function(e) {
					u.has(e) && i.push(e);
				});
			}
			return (e || (e = n("Promise"))).resolve([r("LSVec").ofArray(i), !0]);
		}), c.apply(this, arguments);
	}
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("MAWBridgeSafeActionsWorkerAndUI").sendAndReceiveBackendWorkerAndUIShared("getLatestThreadIds", { numThreads: (s || (s = o("I64"))).to_int32(e) });
			return t;
		}), m.apply(this, arguments);
	}
	function p(e, t, n, r, o) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i, l, c) {
			if (c === void 0 && (c = !1), (s || (s = o("I64"))).gt(l, (s || (s = o("I64"))).zero)) try {
				var m = yield d(l);
				return c ? u(m, t) : (e || (e = n("Promise"))).resolve([r("LSVec").ofArray(m), !0]);
			} catch (t) {
				return (e || (e = n("Promise"))).resolve([r("LSVec").ofArray([]), !1]);
			}
			return (e || (e = n("Promise"))).resolve([r("LSVec").ofArray([]), !0]);
		}), _.apply(this, arguments);
	}
	var f = p;
	p.__nop_name__ = "getLatestThreadIds", l.default = f;
}), 98);
