__d("WAWebCallLogIncomingCell.react", [
	"fbt",
	"WAWebCallsTabCallCell.react",
	"WAWebPipController",
	"WAWebVoipEventConstants",
	"react",
	"useWAWebEventTargetValue",
	"useWAWebVoipCallHandlers"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n = e.call, a = r("useWAWebEventTargetValue")(n, (t = o("WAWebVoipEventConstants")).getChangeEvent(t.VoipCallModelEvents.MSG), function() {
			return n.msg;
		}, [n]), i = r("useWAWebEventTargetValue")(n, t.getChangeEvent(t.VoipCallModelEvents.IS_VIDEO), function() {
			return n.isVideo;
		}, [n]), l = r("useWAWebVoipCallHandlers")({
			currentBannerJid: null,
			isDocPip: !1,
			isMuted: !1,
			isVideoCall: i,
			isVideoMuted: !i,
			popoutWindowEl: null
		}), c = l.handleClickAccept, d = l.isAccepting;
		if (a == null) return null;
		var m = s._(
			/*BTDS*/
			"",
			[s._enum(i ? "VIDEO" : "VOICE", {
				VOICE: "voice",
				VIDEO: "video"
			})]
		);
		return u.jsx(r("WAWebCallsTabCallCell.react"), {
			callLogMsg: a,
			isVideoCall: i,
			secondary: m,
			buttonLabel: s._(
				/*BTDS*/
				""
			),
			buttonDisabled: d,
			buttonVariant: "filled",
			onButtonPress: function() {
				c();
			},
			onCardClick: function() {
				r("WAWebPipController").openVoipUiPiP(a);
			},
			handleKeyboardClick: !0,
			bottomSpacing: !0,
			testid: "calls-tab-incoming-call-cell"
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
