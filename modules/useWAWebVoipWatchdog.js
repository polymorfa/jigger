__d("useWAWebVoipWatchdog", [
	"WALogger",
	"WAWebCallCollection",
	"WAWebVoipCallStateUtils",
	"WAWebVoipEventConstants",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipWatchdog",
	"WAWebVoipWatchdogParticipantPush",
	"getErrorSafe",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useRef;
	function m(t) {
		var n, a = d(new Map()), i = d(new Map()), l = (n = r("useWAWebEventTargetValue")(r("WAWebCallCollection"), "change:activeCall", function() {
			var e, t;
			return (e = (t = r("WAWebCallCollection").activeCall) == null || (t = t.id) == null ? void 0 : t.toString()) != null ? e : null;
		})) != null ? n : null, s = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.getState();
		});
		c(function() {
			if (l != null) return o("WAWebVoipWatchdog").rendererInvariantWatchdog.start(l, o("WAWebVoipVideoRendererInterface").selfPreviewJid), a.current.clear(), i.current.clear(), function() {
				o("WAWebVoipWatchdog").rendererInvariantWatchdog.stop();
			};
		}, [l]), c(function() {
			if (!(l == null || !o("WAWebVoipCallStateUtils").isCallConnected(s) || !o("WAWebVoipWatchdog").rendererInvariantWatchdog.isActive())) {
				var t = r("WAWebCallCollection").activeCall;
				if (t != null) {
					var n = function() {
						try {
							var n = [], l = o("WAWebVoipWatchdogParticipantPush").buildParticipantSnapshots({
								activeCall: {
									isGroup: t.isGroup,
									groupCallParticipantsConnected: t.groupCallParticipantsConnected,
									peerJid: t.peerJid,
									peerVideoState: t.peerVideoState,
									peerMicMuted: t.peerMicMuted,
									selfVideoState: t.selfVideoState,
									selfMicMuted: t.selfMicMuted,
									isParticipantVideoMuted: function(n) {
										return t.isParticipantVideoMuted(n);
									},
									isParticipantMicMuted: function(n) {
										return t.isParticipantMicMuted(n);
									}
								},
								joinTs: a.current,
								leaveTs: i.current,
								nowMs: window.performance.now(),
								prunedKeys: n
							});
							for (var s of l) o("WAWebVoipWatchdog").rendererInvariantWatchdog.pushParticipantState(s);
							for (var u of n) o("WAWebVoipWatchdog").rendererInvariantWatchdog.removeParticipantState(u);
						} catch (t) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip:watchdog: participant push failed"]))).catching(r("getErrorSafe")(t)).sendLogs("voip-watchdog-participant-push-threw");
						}
					};
					n();
					var u = o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANT_STATES) + " " + (o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.GROUP_CALL_PARTICIPANTS_CONNECTED) + " ") + "participantMicStateChange participantVideoStateChange " + (o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.VIDEO_STATE) + " ") + (o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_VIDEO_STATE) + " ") + (o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.PEER_MIC_MUTED) + " ") + ("" + o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.SELF_MIC_MUTED));
					return t.on(u, n), function() {
						t.off(u, n);
					};
				}
			}
		}, [l, s]), c(function() {
			o("WAWebVoipWatchdog").rendererInvariantWatchdog.noteSettlingEvent(t);
		}, [t]);
	}
	l.default = m;
}), 98);
