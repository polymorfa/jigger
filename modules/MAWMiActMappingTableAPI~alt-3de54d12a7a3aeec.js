__d("MAWMiActMappingTableAPI", [
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWJids",
	"ReQL"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e, t) {
		return t == null ? Promise.resolve(null) : o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table).getKeyRange(t));
	}
	function u(e, t, n) {
		return s(e, t).then(function(e) {
			var t = e == null ? void 0 : e.jid;
			return t == null ? null : o("MAWJids").convertIntJidToChatJid(t, o("LSMessagingThreadTypeUtil").isGroup(n));
		});
	}
	function c(e, t) {
		return m(e, t).then(function(e) {
			return e == null ? void 0 : e.serverThreadKey;
		});
	}
	function d(e, t) {
		return t == null ? Promise.resolve(null) : o("ReQL").firstAsync(o("ReQL").fromTableAscending(e.mi_act_mapping_table.index("jid")).getKeyRange(t));
	}
	function m(e, t) {
		return d(e, o("MAWJids").convertChatJidToIntJid(t));
	}
	async function p(e, t) {
		var n = t.intJid, r = t.threadKey, o = await s(e, r);
		return o != null ? o : d(e, n);
	}
	function _(t) {
		return (e || (e = o("I64"))).le(t, e.zero);
	}
	function f(e, t) {
		return e.tables.mi_act_mapping_table.subscribe(function(e, n) {
			var r = e[0], o = e[1], a = e[2], i = n.operation;
			i === "delete" && !_(o) && t(o, r);
		});
	}
	l.getMappingRowForThreadKey = s, l.getChatJidForThreadKey = u, l.getThreadKeyForChatJid = c, l.getMappingRowForIntJid = d, l.getMappingRowForChatJid = m, l.getMappingRowForThreadKeyOrJid = p, l.subscribeToMappingDeletion = f;
}), 98);
