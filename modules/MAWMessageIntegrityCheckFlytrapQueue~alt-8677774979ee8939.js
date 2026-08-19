__d("MAWMessageIntegrityCheckFlytrapQueue", [
	"FBLogger",
	"I64",
	"LSDatabaseSingleton",
	"MAWMessageIntegrityCheckFlytrapResultCache",
	"MAWMessageIntegrityEBFetchStatus",
	"WATimeUtils",
	"justknobx",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = r("requireDeferred")("MAWMessageIntegrityFetchAndCompareData").__setRef("MAWMessageIntegrityCheckFlytrapQueue"), c = r("justknobx")._("3629"), d = [], m = null;
	function p(e) {
		var t = o("MAWMessageIntegrityCheckFlytrapResultCache").generateMessageIntegrityCheckPageKey(e.threadKey, e.uiMessages);
		t != null && (d.push([t, e]), d.length > c && d.shift());
	}
	function _() {
		return m != null || (m = new Promise(async function(e, t) {
			try {
				var n = [].concat(d), r = await f(n.reverse());
				e(r);
			} catch (e) {
				t(e);
			} finally {
				m = null;
			}
		})), m;
	}
	async function f(t) {
		var n = await u.load(), a = await (e || (e = o("LSDatabaseSingleton"))).LSDatabaseSingleton, i = await Promise.all(t.map(async function(e) {
			var t = e[0], i = e[1], l = i.lastItemFromPreviousPage, u = i.pageSize, c = i.threadKey, d = i.uiMessages, m = l != null ? {
				lastItemFromPreviousPage: l,
				type: "lastItemFromPreviousPage"
			} : {
				timeOfSnapshotMs: o("WATimeUtils").millisTime(),
				type: "latestPageSnapshot"
			}, p = o("MAWMessageIntegrityEBFetchStatus").hasEBFailure(c), _ = await n.fetchAndCompareMessagesData({
				db: a,
				fromReferencePoint: m,
				hasEbFetchFailed: p,
				localMessages: d,
				pageSize: u,
				threadKey: c
			});
			return _.success === !1 ? (r("FBLogger")("messenger_web_missing_messages").info("Message Integrity Check skipped for threadKey %s, reason %s", (s || (s = o("I64"))).to_float(c), _.error), null) : [c];
		}));
		return g(i.filter(Boolean));
	}
	function g(e) {
		return { numPagesChecked: e.length };
	}
	l.enqueueFlytrapMessageIntegrityCheck = p, l.getFlytrapMissingMessageReport = _;
}), 98);
