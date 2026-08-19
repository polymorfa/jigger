__d("MAWDebugThreadListMenuItem", [
	"Clipboard",
	"I64",
	"LSMessagingThreadTypeUtil",
	"MAWThreadCutover",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"ReQL",
	"ReQLSuspense",
	"WAJids",
	"react",
	"toMsgrUserJid",
	"useReStore"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = s || (s = o("react")), d = s, m = d.useEffect, p = d.useState, _ = function(t) {
		return t != null ? (u || (u = o("I64"))).to_string(t) : void 0;
	};
	function f(e) {
		var t = e.label, n = e.value;
		return n != null && c.jsx(r("MWXMenuItem.react"), {
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
			onClick: function() {
				o("Clipboard").copy(n);
			},
			primaryText: "[Employee-Only] Copy " + t,
			secondaryText: n
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.thread, a = (e || (e = r("useReStore")))(), l = n.threadKey, s = o("MAWThreadCutover").useGetCutoverMapping(l), d = o("ReQLSuspense").useFirst(function() {
			return o("ReQL").fromTableAscending(a.tables.mi_act_mapping_table).getKeyRange(l);
		}, [a, l], i.id + ":52"), g = o("ReQLSuspense").useFirst(function() {
			return o("ReQL").fromTableAscending(a.tables.threads).getKeyRange(l);
		}, [a, l], i.id + ":56"), h = _(s == null ? void 0 : s.openThreadId), y = _(l), C = p(), b = C[0], v = C[1];
		return m(function() {
			if (g != null && d != null) {
				var e = (u || (u = o("I64"))).to_string(d == null ? void 0 : d.jid);
				v(o("LSMessagingThreadTypeUtil").isGroup(g == null ? void 0 : g.threadType) ? o("WAJids").toGroupJid(e) : r("toMsgrUserJid")(e));
			}
		}, [d, g]), c.jsxs(c.Fragment, { children: [
			c.jsx(f, {
				label: (d ? "Occamadillo " : "") + "Thread ID",
				value: y
			}),
			c.jsx(f, {
				label: "Pre-Cutover Thread ID",
				value: h
			}),
			c.jsx(f, {
				label: "Thread JID",
				value: b
			})
		] });
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
