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
	"asyncToGeneratorRuntime",
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
		var a = t.callState, i = t.xstyle, l = _(function() {
			if (!o("WAWebVoipCallStateUtils").isCallActive(a)) return null;
			var e = f;
			if ((e == null ? void 0 : e.startTime) != null) {
				var t = e.startTime;
				return Math.floor((Date.now() - t) / 1e3);
			}
			return null;
		}), c = l[0], m = l[1];
		p(function() {
			if (!o("WAWebVoipCallStateUtils").isCallActive(a)) {
				C();
				return;
			}
			var t = !0, i = g();
			i.startTime == null && n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				try {
					var n = yield o("WAWebVoipStackInterface").getVoipStackInterface();
					if (!t) return;
					if ((n == null ? void 0 : n.type) === "web") {
						o("WAWebVoipActivityTracker").trackActivity(o("WAWebVoipActivityTracker").VoipActivity.GET_CALL_INFO, "call_timer");
						var a = yield n.getCallInfo();
						if (!t) return;
						if (a) {
							var l = r("WAWebVoipJsonParsersWeb").parseCallInfo(a), s = Math.floor(l.callActiveDuration / 1e3), u = Date.now() - s * 1e3;
							h(u), t && m(s);
						}
					}
				} catch (t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebCallTimer: Failed to get initial call duration"]))), i.startTime == null && h(Date.now());
				}
			})();
			var l = function() {
				var e = i.startTime;
				if (e != null) {
					var t = Math.floor((Date.now() - e) / 1e3);
					m(t);
				}
			};
			return i.subscribers.add(l), i.intervalId == null && (i.intervalId = window.setInterval(function() {
				i.subscribers.forEach(function(e) {
					return e();
				});
			}, 1e3)), function() {
				t = !1, i.subscribers.delete(l), i.subscribers.size === 0 && b(i);
			};
		}, [a]);
		var y = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_RECONNECTING), function() {
			var e = r("WAWebCallCollection").activeCall;
			return (e == null ? void 0 : e.peerJid) == null ? null : e.getPeerReconnectingState(e.peerJid);
		});
		if (!o("WAWebVoipCallStateUtils").isCallActive(a) || c == null) return null;
		var S = (y == null ? void 0 : y.isReconnecting) === !0 && (y == null ? void 0 : y.option) === o("WAWebVoipWaCallEnums").ReconnectingOption.Text;
		return d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(v.timerContainer, i), {
			"data-testid": "voip-call-timer",
			role: "timer",
			children: S ? s._(
				/*BTDS*/
				""
			) : o("WAWebClock").Clock.durationStr(c)
		}));
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = S;
}), 226);
