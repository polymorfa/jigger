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
	"react-compiler-runtime",
	"useMAWComposeSecureThreadThenNavigate",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = u || (u = o("react"));
	function m(e, t, n) {
		var r = o("react-compiler-runtime").c(10), a;
		r[0] !== n || r[1] !== e || r[2] !== t ? (a = function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(e.tables.participants, []).getKeyRange(t), o("ReQL").fromTableAscending(e.tables.contacts)).filter(function(e) {
				var t = e[1];
				return !(c || (c = o("I64"))).equal(t.id, n);
			}).map(p);
		}, r[0] = n, r[1] = e, r[2] = t, r[3] = a) : a = r[3];
		var l;
		r[4] !== t ? (l = (c || (c = o("I64"))).to_string(t), r[4] = t, r[5] = l) : l = r[5];
		var s;
		return r[6] !== n || r[7] !== e || r[8] !== l ? (s = [
			e,
			l,
			n
		], r[6] = n, r[7] = e, r[8] = l, r[9] = s) : s = r[9], o("ReQLSuspense").useArray(a, s, i.id + ":30");
	}
	function p(e) {
		var t = e[1];
		return t;
	}
	function _(t) {
		var n = o("react-compiler-runtime").c(8), a = t.onPress, i = t.thread, l = (e || (e = r("useReStore")))(), u = o("MWPActor.react").useActor(), c = i.threadKey, p = r("useMAWComposeSecureThreadThenNavigate")(), _ = m(l, c, u), f;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (f = d.jsx(r("FDSMenuSeparator.react"), {}), n[0] = f) : f = n[0];
		var g;
		n[1] !== _ || n[2] !== p || n[3] !== a ? (g = function(t) {
			return a == null || a(t), p(_, []);
		}, n[1] = _, n[2] = p, n[3] = a, n[4] = g) : g = n[4];
		var h;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (h = s._(
			/*BTDS*/
			""
		), n[5] = h) : h = n[5];
		var y;
		return n[6] !== g ? (y = d.jsxs(d.Fragment, { children: [f, d.jsx(r("MWXMenuItem.react"), {
			icon: r("MWThreadListHoverButtonDropdownMenuIcons").SecretConversation,
			onClick: g,
			primaryText: h,
			testid: void 0
		})] }), n[6] = g, n[7] = y) : y = n[7], y;
	}
	l.default = _;
}), 226);
