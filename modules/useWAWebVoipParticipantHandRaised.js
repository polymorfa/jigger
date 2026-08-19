__d("useWAWebVoipParticipantHandRaised", [
	"WAWebCallCollection",
	"WAWebVoipEventConstants",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES), t[0] = n) : n = t[0];
		var a;
		return t[1] !== e ? (a = function() {
			var t = r("WAWebCallCollection").activeCall;
			if (t == null) return !1;
			var n = e();
			return n == null ? !1 : t.isHandRaisedForParticipant(n);
		}, t[1] = e, t[2] = a) : a = t[2], r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, n, a);
	}
	l.default = e;
}), 98);
