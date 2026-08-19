__d("MAWDbPendingStanzaTxns", [
	"MAWDbPendingStanza",
	"MAWDeleteThreadUtil",
	"MAWPendingStanzaCleaner",
	"WATimeUtils",
	"emptyFunction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t, n, r, a) {
		var i = o("MAWDbPendingStanza").getPendingSuffix(a);
		return e.pendingStanzas.where("externalIdWithType").equals(t + "_" + i).filter(function(e) {
			var t = e.pendingContent;
			return t.type === a && t.content.author === n && t.content.threadJid === r;
		}).first();
	}
	function s(t, n, r, a) {
		return e(t, n, r, a, o("MAWDbPendingStanza").PENDING_TYPE.REVOKED);
	}
	function u(t, n, r, a) {
		return e(t, n, r, a, o("MAWDbPendingStanza").PENDING_TYPE.DELETE_FOR_ME);
	}
	function c(e, t) {
		var n = t.map(function(e) {
			var t = e.expirationInSeconds;
			return o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + t);
		}), a = t.map(function(e, t) {
			var r = e.content, a = e.externalId, i = e.pendingStanzaType;
			return {
				deleteTs: n[t],
				externalIdWithType: a + "_" + o("MAWDbPendingStanza").getPendingSuffix(i),
				pendingContent: r
			};
		});
		return e.pendingStanzas.bulkAdd(a).then(function() {
			return n.forEach(o("MAWPendingStanzaCleaner").addNewPendingStanzaCleanerTimestamp);
		}).then(r("emptyFunction"));
	}
	function d(e, t, n, r, a) {
		var i = o("MAWDbPendingStanza").getPendingSuffix(a), l = o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + n), s = {
			deleteTs: l,
			externalIdWithType: r + "_" + i,
			pendingContent: t
		};
		return e.pendingStanzas.add(s).then(function() {
			o("MAWPendingStanzaCleaner").addNewPendingStanzaCleanerTimestamp(l);
		});
	}
	function m(e, t) {
		var n = o("MAWDbPendingStanza").getPendingSuffix(o("MAWDbPendingStanza").PENDING_TYPE.DELETE_THREAD);
		return e.pendingStanzas.where("externalIdWithType").equals(t + "_" + n).toArray().then(function(e) {
			return o("MAWDeleteThreadUtil").getLatestDeleteThreadInfo(e);
		});
	}
	function p(e) {
		return e.pendingStanzas.toArray();
	}
	function _(e, t) {
		var n = t.map(function(e) {
			return e.rowId;
		});
		return e.pendingStanzas.bulkDelete(n);
	}
	function f(e) {
		var t, n;
		return (e == null || (t = e.pendingContent) == null ? void 0 : t.type) === o("MAWDbPendingStanza").PENDING_TYPE.REVOKED ? e == null || (n = e.pendingContent) == null ? void 0 : n.content : null;
	}
	l.maybeGetPendingStanzaByExternalId = e, l.maybeGetPendingRevokedStanza = s, l.maybeGetPendingDeletedStanza = u, l.bulkPutPendingStanzas = c, l.putPendingStanza = d, l.maybeGetDeleteThreadFromPendingStanza = m, l.getAllPendingStanzas = p, l.deletePendingStanzas = _, l.getRevokedContent = f;
}), 98);
