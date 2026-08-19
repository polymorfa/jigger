__d("MAWRestoreMsgsUiUpdator", [
	"MAWBridgeEventTransmitter",
	"MAWDbMsg",
	"MAWDbThread",
	"MAWDexieTable",
	"MAWFolderTypes",
	"MAWInMemoryThreadStore",
	"MAWThreadSnippetBuildTxns",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, a, i, l, c, m, p, _, f) {
		var g = s(e, i, n, a, c, m);
		return g.then(function(n) {
			if (m == null || l) {
				var r = d(n);
				return r && o("MAWBridgeEventTransmitter").updateThreadOutsideTxn(n.cannotReplyReason, o("MAWFolderTypes").FOLDER_ID.INBOX, n.jid), u(e, t, n, p, _, f, m).then(function() {
					return n;
				});
			}
			return n;
		}).then(function(t) {
			return o("MAWThreadSnippetBuildTxns").refreshThreadSnippet(e, t);
		}).then(r("emptyFunction"));
	}
	function s(e, t, n, r, a, i) {
		var l = babelHelpers.extends({}, t, {
			lastReadMsg: a,
			lastReadMsgTs: r,
			newestMsgTs: n,
			oldestMsg: i,
			threadOrder: o("MAWDbThread").craftThreadOrder(n, t.jid)
		});
		return o("MAWInMemoryThreadStore").isInMemoryThreadsStoreExperiment() && o("MAWInMemoryThreadStore").getReadwriteInMemoryThreadsStore().compareAndStore(l, {
			lastReadMsg: a,
			lastReadMsgTs: r,
			newestMsgTs: n,
			oldestMsg: i,
			threadOrder: l.threadOrder
		}, "MAWRestoreMsgsUiUpdator.updateThread"), o("MAWInMemoryThreadStore").shouldUseInMemoryThreadsExclusively() ? o("MAWDexieTable").dexieResolve(l) : e.threads.put(l).then(function() {
			return l;
		});
	}
	function u(e, t, n, r, a, i, l) {
		var s = t.map(function(e) {
			return e;
		}).reverse(), u = n.jid;
		if (r != null) {
			var d = o("MAWDbMsg").toMsgId(r);
			if (d != null) return e.messages.get({ msgId: d }).then(function(t) {
				if (t != null) {
					var r = t.sortOrderMs, o = e.messages.where(["threadJid", "sortOrderMs"]).between([u, s[0].sortOrderMs], [u, r], !1, !1).count();
					return o.then(function(e) {
						e === 0 && c(s, a, n);
					});
				}
			});
		}
		return o("MAWDexieTable").dexieResolve();
	}
	function c(e, t, n) {
		var r = t == null ? void 0 : t.sortOrderMs, o = e[e.length - 1], a = o.sortOrderMs;
		t != null && o != null && r != null && a != null && r < a && e.push(t);
	}
	function d(e) {
		return e.archived === !0 && e.cannotReplyReason !== "viewer_not_subscribed";
	}
	l.updateThreadAndMessages = e;
}), 98);
