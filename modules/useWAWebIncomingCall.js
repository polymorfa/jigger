__d("useWAWebIncomingCall", [
	"WAWebCallCollection",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipGatingUtils",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("react-compiler-runtime").c(5), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL), e[0] = t) : t = e[0];
		var n = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), t, s), a;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (a = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), e[1] = a) : a = e[1];
		var i, l;
		e[2] !== n ? (i = function() {
			return n == null ? void 0 : n.getState();
		}, l = [n], e[2] = n, e[3] = i, e[4] = l) : (i = e[3], l = e[4]);
		var u = r("useWAWebEventTargetValue")(n, a, i, l);
		return n == null || !o("WAWebVoipCallStateUtils").isCallIncoming(u) || !o("WAWebVoipGatingUtils").isWebCallingUiEnabled() ? null : n;
	}
	function s() {
		return r("WAWebCallCollection").activeCall;
	}
	l.default = e;
}), 98);
