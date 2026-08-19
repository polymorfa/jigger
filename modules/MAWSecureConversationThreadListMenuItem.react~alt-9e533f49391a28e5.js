__d("MAWSecureConversationThreadListMenuItem.react", [
	"fbt",
	"FDSMenuSeparator.react",
	"I64",
	"MWPActor.react",
	"MWThreadListHoverButtonDropdownMenuIcons",
	"MWXMenuItem.react",
	"ReQL",
	"ReQLSuspense",
	"react",
	"useMAWComposeSecureThreadThenNavigate",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = u || (u = o("react"));
	function m(e, t, n) {
		return o("ReQLSuspense").useArray(function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(e.tables.participants, []).getKeyRange(t), o("ReQL").fromTableAscending(e.tables.contacts)).filter(function(e) {
				var t = e[0], r = e[1];
				return !(c || (c = o("I64"))).equal(r.id, n);
			}).map(function(e) {
				var t = e[0], n = e[1];
				return n;
			});
		}, [
			e,
			(c || (c = o("I64"))).to_string(t),
			n
		], i.id + ":30");
	}
	function p(t) {
		var n = t.onPress, a = t.thread, i = (e || (e = r("useReStore")))(), l = o("MWPActor.react").useActor(), u = a.threadKey, c = r("useMAWComposeSecureThreadThenNavigate")(), p = m(i, u, l);
		return d.jsxs(d.Fragment, { children: [d.jsx(r("FDSMenuSeparator.react"), {}), d.jsx(r("MWXMenuItem.react"), {
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
			onClick: function(t) {
				return n == null || n(t), c(p, []);
			},
			primaryText: s._(
				/*BTDS*/
				""
			),
			testid: void 0
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
