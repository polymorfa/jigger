__d("WAWebCallTimer.react", [
	"fbt",
	"WALogger",
	"WAWebCallCollection",
	"WAWebClock",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipJsonParsersWeb",
	"WAWebVoipStackInterface",
	"WAWebVoipWaCallEnums",
	"react",
	"stylex",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState, f = null;
	function g() {
		return f || (f = {
			startTime: null,
			intervalId: null,
			subscribers: new Set()
		}), f;
	}
	function h(e) {
		f != null && (f.startTime = e, f.subscribers.forEach(function(e) {
			return e();
		}));
	}
	function y(e) {
		e.intervalId != null && (window.clearInterval(e.intervalId), e.intervalId = null);
	}
	function C() {
		f != null && y(f), f = null;
	}
	function b(e) {
		y(e), queueMicrotask(function() {
			f === e && e.subscribers.size === 0 && C();
		});
	}
	var v = { timerContainer: {
		minWidth: "x2c5eco",
		fontSize: "x1f6kntn",
		fontWeight: "xo1l8bm",
		textAlign: "x2b8uid",
		$$css: !0
	} };
	function S(t) {
		var n = t.callState, a = t.xstyle, i = _(function() {
			if (!o("WAWebVoipCallStateUtils").isCallActive(n)) return null;
			var e = f;
			if ((e == null ? void 0 : e.startTime) != null) {
				var t = e.startTime;
				return Math.floor((Date.now() - t) / 1e3);
			}
			return null;
		}), l = i[0], c = i[1];
		p(function() {
			if (!o("WAWebVoipCallStateUtils").isCallActive(n)) {
				C();
				return;
			}
			var t = !0, a = g();
			a.startTime == null && (async function() {
				try {
					var n = await o("WAWebVoipStackInterface").getVoipStackInterface();
					if (!t) return;
					if ((n == null ? void 0 : n.type) === "web") {
						o("WAWebVoipActivityTracker").trackActivity(o("WAWebVoipActivityTracker").VoipActivity.GET_CALL_INFO, "call_timer");
						var i = await n.getCallInfo();
						if (!t) return;
						if (i) {
							var l = r("WAWebVoipJsonParsersWeb").parseCallInfo(i), s = Math.floor(l.callActiveDuration / 1e3), u = Date.now() - s * 1e3;
							h(u), t && c(s);
						}
					}
				} catch (t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebCallTimer: Failed to get initial call duration"]))), a.startTime == null && h(Date.now());
				}
			})();
			var i = function() {
				var e = a.startTime;
				if (e != null) {
					var t = Math.floor((Date.now() - e) / 1e3);
					c(t);
				}
			};
			return a.subscribers.add(i), a.intervalId == null && (a.intervalId = window.setInterval(function() {
				a.subscribers.forEach(function(e) {
					return e();
				});
			}, 1e3)), function() {
				t = !1, a.subscribers.delete(i), a.subscribers.size === 0 && b(a);
			};
		}, [n]);
		var m = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), function() {
			var e = r("WAWebCallCollection").activeCall;
			return (e == null ? void 0 : e.peerJid) == null ? null : e.getPeerReconnectingState(e.peerJid);
		});
		if (!o("WAWebVoipCallStateUtils").isCallActive(n) || l == null) return null;
		var y = (m == null ? void 0 : m.isReconnecting) === !0 && (m == null ? void 0 : m.option) === o("WAWebVoipWaCallEnums").ReconnectingOption.Text;
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(v.timerContainer, a), {
			"data-testid": "voip-call-timer",
			role: "timer",
			children: y ? s._(
				/*BTDS*/
				""
			) : o("WAWebClock").Clock.durationStr(l)
		}));
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
