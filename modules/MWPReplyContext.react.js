__d("MWPReplyContext.react", [
	"I64",
	"emptyFunction",
	"react",
	"react-compiler-runtime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = e || (e = o("react")), c = e, d = c.createContext, m = c.useCallback, p = c.useMemo, _ = c.useState, f = r("requireDeferred")("MWPReplyLogging").__setRef("MWPReplyContext.react"), g = d({
		clearReply: r("emptyFunction"),
		reply: void 0,
		setReply: r("emptyFunction")
	});
	function h(e) {
		try {
			return JSON.parse(e);
		} catch (e) {
			return;
		}
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(17), n = e.children, r = e.clearThreadReply, a = e.getRepliesState, i = e.persistRepliesState, l = e.senderId, c = e.threadKey, d;
		t[0] !== a || t[1] !== c ? (d = a != null && c != null ? h(a((s || (s = o("I64"))).to_string(c))) : void 0, t[0] = a, t[1] = c, t[2] = d) : d = t[2];
		var m = d, p = _(m), y = p[0], C = p[1], b;
		t[3] !== r || t[4] !== y ? (b = function(t, n) {
			if (f.onReady(function(e) {
				e.logClearReply(n, t, y != null);
			}), C(), r != null) return r((s || (s = o("I64"))).to_string(t));
		}, t[3] = r, t[4] = y, t[5] = b) : b = t[5];
		var v = b, S;
		t[6] !== i || t[7] !== y || t[8] !== l ? (S = function(t, n) {
			if (f.onReady(function(e) {
				e.logSetReply(y, t, n);
			}), C(t), i != null) return i({
				messageId: t.messageId,
				offlineThreadingId: t.offlineThreadingId,
				senderId: l,
				sendStatusV2: t.sendStatusV2,
				threadKey: (s || (s = o("I64"))).to_string(n),
				timestampMs: t.timestampMs
			});
		}, t[6] = i, t[7] = y, t[8] = l, t[9] = S) : S = t[9];
		var R = S, L;
		t[10] !== v || t[11] !== y || t[12] !== R ? (L = {
			clearReply: v,
			reply: y,
			setReply: R
		}, t[10] = v, t[11] = y, t[12] = R, t[13] = L) : L = t[13];
		var E = L, k;
		return t[14] !== n || t[15] !== E ? (k = u.jsx(g.Provider, {
			value: E,
			children: n
		}), t[14] = n, t[15] = E, t[16] = k) : k = t[16], k;
	}
	l.MWPReplyContext = g, l.MWPReplyContextProvider = y;
}), 98);
