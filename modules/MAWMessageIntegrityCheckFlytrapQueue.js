__d("MAWMessageIntegrityCheckFlytrapQueue", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"MAWMessageIntegrityCheckFlytrapResultCache",
	"MAWMessageIntegrityEBFetchStatus",
	"Promise",
	"WATimeUtils",
	"asyncToGeneratorRuntime",
	"justknobx",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = r("requireDeferred")("MAWMessageIntegrityFetchAndCompareData").__setRef("MAWMessageIntegrityCheckFlytrapQueue"), d = r("justknobx")._("3629"), m = [], p = null;
	function _(e) {
		var t = o("MAWMessageIntegrityCheckFlytrapResultCache").generateMessageIntegrityCheckPageKey(e.threadKey, e.uiMessages);
		t != null && (m.push([t, e]), m.length > d && m.shift());
	}
	function f() {
		return p != null || (p = new (u || (u = (n("Promise"))))((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				try {
					var n = [].concat(m), r = yield g(n.reverse());
					e(r);
				} catch (e) {
					t(e);
				} finally {
					p = null;
				}
			});
			return function(t, n) {
				return e.apply(this, arguments);
			};
		})())), p;
	}
	function g(e) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
			var a = yield c.load(), i = yield (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton, l = yield (u || (u = n("Promise"))).all(t.map((function() {
				var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
					var t = e[0], n = e[1], l = n.lastItemFromPreviousPage, u = n.pageSize, c = n.threadKey, d = n.uiMessages, m = l != null ? {
						lastItemFromPreviousPage: l,
						type: "lastItemFromPreviousPage"
					} : {
						timeOfSnapshotMs: o("WATimeUtils").millisTime(),
						type: "latestPageSnapshot"
					}, p = o("MAWMessageIntegrityEBFetchStatus").hasEBFailure(c), _ = yield a.fetchAndCompareMessagesData({
						db: i,
						fromReferencePoint: m,
						hasEbFetchFailed: p,
						localMessages: d,
						pageSize: u,
						threadKey: c
					});
					return _.success === !1 ? (r("FBLogger")("messenger_web_missing_messages").info("Message Integrity Check skipped for threadKey %s, reason %s", (s || (s = o("I64"))).to_float(c), _.error), null) : [c];
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			})()));
			return y(l.filter(Boolean));
		}), h.apply(this, arguments);
	}
	function y(e) {
		return { numPagesChecked: e.length };
	}
	l.enqueueFlytrapMessageIntegrityCheck = _, l.getFlytrapMissingMessageReport = f;
}), 98);
