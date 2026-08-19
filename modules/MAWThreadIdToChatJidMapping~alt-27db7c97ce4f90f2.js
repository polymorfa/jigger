__d("MAWThreadIdToChatJidMapping", [
	"I64",
	"MAWJidUtils",
	"ReQL",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = new Map();
	async function m(t, n, r) {
		if (d.has(n)) return d.get(n);
		var a = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.mi_act_mapping_table.index("jid")).getKeyRange((c || (c = o("I64"))).of_string(n)));
		if (a == null) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[labyrinth_web] Cannot find MI ACT mapping table entry for threadId ",
			", called from ",
			""
		])), n, r), null;
		var i = a.serverThreadKey, l = a.jid, m = await o("ReQL").firstAsync(o("ReQL").fromTableAscending(t.threads).getKeyRange(i));
		if (m == null) return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"[labyrinth_web] Cannot find thread with serverThreadKey ",
			", called from ",
			""
		])), (c || (c = o("I64"))).to_string(i), r), null;
		var p = o("MAWJidUtils").LSJidtoChatJid(l, m.threadType);
		return p != null ? (d.set(n, p), p) : (o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Cannot generate ChatJid from threadKey, called from ", ""])), r), null);
	}
	l.genChatJidFromThreadId = m;
}), 98);
