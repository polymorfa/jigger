__d("useSecureThreadDetailGetDevices", [
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"ReQL",
	"ReQLSuspense",
	"WAJids",
	"WMIWABridgeApi",
	"promiseDone",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e || (e = o("react")), d = c.useEffect, m = c.useRef;
	function p(e, t) {
		var n = o("react-compiler-runtime").c(11), a;
		n[0] !== t.tables.contacts || n[1] !== t.tables.participants || n[2] !== e.threadKey ? (a = function() {
			return o("ReQL").mergeJoin(o("ReQL").fromTableAscending(t.tables.participants, ["contactId"]).getKeyRange(e.threadKey), o("ReQL").fromTableAscending(t.tables.contacts)).map(_).filter(Boolean);
		}, n[0] = t.tables.contacts, n[1] = t.tables.participants, n[2] = e.threadKey, n[3] = a) : a = n[3];
		var l;
		n[4] !== t || n[5] !== e.threadKey ? (l = [t, e.threadKey], n[4] = t, n[5] = e.threadKey, n[6] = l) : l = n[6];
		var s = o("ReQLSuspense").useArray(a, l, i.id + ":30"), u;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (u = new Set(), n[7] = u) : u = n[7];
		var c = m(u), p, f;
		n[8] !== s ? (p = function() {
			var e = c.current.size !== s.length || !s.every(function(e) {
				return c.current.has(e);
			});
			if (!(!e && s.length > 2)) {
				var t = new Set(s);
				c.current = t, r("promiseDone")(r("WMIWABridgeApi").getDevices({
					ignoreDhash: !1,
					reason: "details-participants-changed",
					users: t
				}));
			}
		}, f = [s], n[8] = s, n[9] = p, n[10] = f) : (p = n[9], f = n[10]), d(p, f);
	}
	function _(e) {
		var t = e[0], n = e[1], a = t.contactId;
		return (s || (s = o("I64"))).ge(n.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").AUTHORITATIVE)) ? o("WAJids").toMsgrUserJid((s || (s = o("I64"))).to_string(a)) : null;
	}
	l.default = p;
}), 98);
