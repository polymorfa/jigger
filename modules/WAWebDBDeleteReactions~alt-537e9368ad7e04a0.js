__d("WAWebDBDeleteReactions", ["WAWebModelStorageUtils"], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = [];
		return o("WAWebModelStorageUtils").getStorage().lock(["reactions"], async function(n) {
			var r = n[0], o = await r.equals(["parentMsgKey"], e);
			return o.forEach(function(e) {
				return t.push([e.parentMsgKey, e.senderUserJid]);
			}), r.bulkRemove(t);
		});
	}
	function s(e) {
		var t = [];
		return o("WAWebModelStorageUtils").getStorage().lock(["reactions"], async function(n) {
			var r = n[0], o = await r.anyOf(["parentMsgKey"], e);
			return o.forEach(function(e) {
				return t.push([e.parentMsgKey, e.senderUserJid]);
			}), await r.bulkRemove(t), o.map(function(e) {
				return e.msgKey;
			});
		});
	}
	function u(e) {
		return o("WAWebModelStorageUtils").getStorage().lock(["reactions"], async function(t) {
			var n = t[0];
			await n.bulkRemove(e);
		});
	}
	l.deleteReactionsByParentMessageKey = e, l.deleteReactionsByParentMessageKeys = s, l.deleteReactionsByRecords = u;
}), 98);
