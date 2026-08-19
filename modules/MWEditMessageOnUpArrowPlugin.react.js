__d("MWEditMessageOnUpArrowPlugin.react", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"Lexical",
	"MWPActor.react",
	"ReQL",
	"ReQLSuspense",
	"react",
	"react-compiler-runtime",
	"useMWPCanUserEditMessage",
	"useReStore",
	"useTriggerEditAction"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = c || (c = o("react")), m = c.useEffect;
	function p(t) {
		var n = o("react-compiler-runtime").c(17), a = t.containerThreadKey, l = t.editor, c = t.hasStuffToSend, m = t.thread, p = (e || (e = r("useReStore")))(), f = o("MWPActor.react").useActor(), g;
		n[0] !== p.tables.messages || n[1] !== m.threadKey || n[2] !== f ? (g = function() {
			return o("ReQL").fromTableDescending(p.tables.messages).getKeyRange(m.threadKey).filter(function(e) {
				return (s || (s = o("I64"))).equal(e.senderId, f);
			});
		}, n[0] = p.tables.messages, n[1] = m.threadKey, n[2] = f, n[3] = g) : g = n[3];
		var h;
		n[4] !== p || n[5] !== m.threadKey || n[6] !== f ? (h = [
			p,
			m.threadKey,
			f
		], n[4] = p, n[5] = m.threadKey, n[6] = f, n[7] = h) : h = n[7];
		var y = o("ReQLSuspense").useFirst(g, h, i.id + ":55"), C;
		n[8] !== y ? (C = y != null && y.isUnsent === !1 && (s || (s = o("I64"))).equal(y.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)), n[8] = y, n[9] = C) : C = n[9];
		var b = C, v;
		return n[10] !== a || n[11] !== l || n[12] !== c || n[13] !== b || n[14] !== y || n[15] !== m ? (v = y != null && b ? d.jsx(_, {
			containerThreadKey: a,
			editor: l,
			hasStuffToSend: c,
			latestUserMessage: y,
			thread: m
		}) : null, n[10] = a, n[11] = l, n[12] = c, n[13] = b, n[14] = y, n[15] = m, n[16] = v) : v = n[16], v;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(7), n = e.containerThreadKey, a = e.editor, i = e.hasStuffToSend, l = e.latestUserMessage, s = e.thread, u = r("useMWPCanUserEditMessage")(l, s, n), c = r("useTriggerEditAction")(l, s.threadType), d, p;
		return t[0] !== u || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== c ? (d = function() {
			return a.registerCommand(o("Lexical").KEY_ARROW_UP_COMMAND, function(e) {
				return i || l == null || !u || e.altKey ? !1 : (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), c(), !0);
			}, o("Lexical").COMMAND_PRIORITY_LOW);
		}, p = [
			a,
			i,
			l,
			u,
			c
		], t[0] = u, t[1] = a, t[2] = i, t[3] = l, t[4] = c, t[5] = d, t[6] = p) : (d = t[5], p = t[6]), m(d, p), null;
	}
	l.default = p;
}), 98);
