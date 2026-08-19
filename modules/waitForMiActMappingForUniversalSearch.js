__d("waitForMiActMappingForUniversalSearch", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSFactory",
	"LSThreadPointQueryAndRestoreMessagesWithGroupJIDStoredProcedure",
	"LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure",
	"MAWCurrentUser",
	"MAWJids",
	"Promise",
	"ReQL",
	"WAJids",
	"asyncToGeneratorRuntime",
	"emptyFunction",
	"err",
	"getErrorSafe",
	"promiseDone"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 3e4, c = 3e4;
	function d(e) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = yield o("ReQL").toArrayAsync(e);
			return t.some(function(e) {
				return e == null || (s || (s = o("I64"))).lt(e.authorityLevel, (s || (s = o("I64"))).of_int32(r("LSAuthorityLevel").AUTHORITATIVE));
			}) === !1;
		}), m.apply(this, arguments);
	}
	function p(e, t, n, r) {
		return _.apply(this, arguments);
	}
	function _() {
		return _ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a, i) {
			a === void 0 && (a = r("emptyFunction")), i === void 0 && (i = r("emptyFunction"));
			var l = (s || (s = o("I64"))).of_string(o("MAWCurrentUser").getID()), u = o("ReQL").leftJoin(o("ReQL").fromTableAscending(e.tables.participants, ["contactId"]).getKeyRange(t.serverThreadKey).filter(function(e) {
				return !(s || (s = o("I64"))).equal(e.contactId, l);
			}), o("ReQL").fromTableAscending(e.tables.contacts)).map(function(e) {
				var t = e[0], n = e[1];
				return n;
			}), m = null, p = { contents: function() {} };
			function _() {
				a(t), p.contents();
			}
			if (yield d(u)) return _();
			p.contents = u.subscribe((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
					if (t.operation !== "delete" && (m != null && window.clearTimeout(m), yield d(u))) return _();
				});
				return function(t, n) {
					return e.apply(this, arguments);
				};
			})()), m = window.setTimeout(function() {
				p.contents(), i(r("err")("Contacts timed out"));
			}, c);
		}), _.apply(this, arguments);
	}
	function f(e, t) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
			var l = o("MAWJids").convertChatJidToIntJid(a), s = o("WAJids").interpretAsGroupJid(a) != null, c = o("ReQL").fromTableAscending(t.tables.mi_act_mapping_table.index("jid")).getKeyRange(l), d = yield o("ReQL").firstAsync(c);
			if (d != null) return yield p(t, d), (e || (e = n("Promise"))).resolve(d);
			var m = null, _ = new (e || (e = (n("Promise"))))(function(e, o) {
				var a = { contents: function() {} };
				function i(t) {
					a.contents(), e(t);
				}
				function l(e) {
					a.contents(), o(e);
				}
				a.contents = c.subscribe((function() {
					var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
						n.operation !== "delete" && (m != null && window.clearTimeout(m), yield p(t, n.value, i, l));
					});
					return function(t, n) {
						return e.apply(this, arguments);
					};
				})()), m = window.setTimeout(function() {
					l(r("err")("MiActMapping timed out"));
				}, u);
			});
			r("promiseDone")(t.runInTransaction(function(e) {
				return s ? r("LSThreadPointQueryAndRestoreMessagesWithGroupJIDStoredProcedure")(r("LSFactory")(e), { waJid: l }) : r("LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure")(r("LSFactory")(e), { waJid: l });
			}, "readwrite", void 0, void 0, i.id + ":150"));
			try {
				d = yield _;
			} catch (e) {
				r("FBLogger")("messenger_web").warn("[FTS] Issue waiting for mi_act_mapping to be ready", r("getErrorSafe")(e).message);
			}
			return d;
		}), g.apply(this, arguments);
	}
	l.default = f;
}), 98);
