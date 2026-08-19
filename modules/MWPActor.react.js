__d("MWPActor.react", [
	"Actor",
	"CurrentMessengerUser",
	"I64",
	"gkx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.createContext, m = c.useContext, p = c.useMemo, _ = d();
	function f() {
		var e = o("react-compiler-runtime").c(4), t = m(_), n = o("Actor").useActor(), r = n[0], a;
		e[0] !== r ? (a = (s || (s = o("I64"))).of_string(r), e[0] = r, e[1] = a) : a = e[1];
		var i = a, l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = o("CurrentMessengerUser").getPageMessagingMailboxId(), e[2] = l) : l = e[2];
		var u = l, c;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (c = u !== "0" ? (s || (s = o("I64"))).of_string(u) : null, e[3] = c) : c = e[3];
		var d = c, p = t != null ? t : d != null ? d : i;
		return p;
	}
	function g() {
		return y() != null;
	}
	function h() {
		return r("gkx")("3378");
	}
	function y() {
		var e = o("CurrentMessengerUser").getPageMessagingMailboxId();
		return e === "0" ? null : e;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(3), n = e.actorId, r = e.children, a;
		return t[0] !== n || t[1] !== r ? (a = n != null ? u.jsx(_.Provider, {
			value: n,
			children: r
		}, (s || (s = o("I64"))).to_string(n)) : r, t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	l.useActor = f, l.isAPPlus = g, l.isPromode = h, l.getAPPlusMailboxId = y, l.MWPActorProvider = C;
}), 98);
