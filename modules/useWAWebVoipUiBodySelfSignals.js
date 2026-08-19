__d("useWAWebVoipUiBodySelfSignals", [
	"WALogger",
	"WAWebCallCollection",
	"WAWebUserPrefsMeUser",
	"WAWebVoipEventConstants",
	"err",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = u || (u = o("react")), d = c.useEffect, m = c.useState;
	function p() {
		var t = o("react-compiler-runtime").c(6), n = m(null), a = n[0], i = n[1], l, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			var t = r("WAWebCallCollection").activeCall;
			if (t) {
				var n = function() {
					try {
						var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), a = t.getReactionForParticipant(n);
						i(a);
					} catch (t) {
						var l = t;
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: Failed to get self LID for reaction lookup"]))).catching(l instanceof Error ? l : r("err")(String(l)));
					}
				};
				return n(), t.on(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), n), (function() {
					t.off(o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.REACTION_STATES), n);
				});
			}
		}, s = [], t[0] = l, t[1] = s) : (l = t[0], s = t[1]), d(l, s);
		var u;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (u = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.RAISED_HAND_STATES), t[2] = u) : u = t[2];
		var c = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, u, _), p;
		return t[3] !== c || t[4] !== a ? (p = {
			isSelfHandRaised: c,
			selfReaction: a
		}, t[3] = c, t[4] = a, t[5] = p) : p = t[5], p;
	}
	function _() {
		var e = r("WAWebCallCollection").activeCall;
		if (e == null) return !1;
		try {
			var t = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
			return e.isHandRaisedForParticipant(t);
		} catch (e) {
			var n = e;
			return o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: UI: Unable to get self JID for raised hand state"]))).catching(n instanceof Error ? n : r("err")(String(n))), !1;
		}
	}
	l.default = p;
}), 98);
