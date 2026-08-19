__d("WAWebVoipUiVideoCallCenteredParticipantInfo.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebCallLogUtils",
	"WAWebCallParticipantInfo.react",
	"WAWebOutgoingGroupCallParticipantInfo.react",
	"WAWebVoipEventConstants",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.callLogMsg, n = e.callState, a = e.chatId, i = e.isCallLinkLobby, l = e.isCompactLayout, c = e.outgoingGroupCallNameOverride, d = e.outgoingGroupCallParticipants, m = e.unnamedGroupCallNameOverride, p = r("useWAWebEventTargetValue")(r("WAWebCallCollection").activeCall, o("WAWebVoipEventConstants").getChangeEvent(o("WAWebVoipEventConstants").VoipCallModelEvents.STATE), function() {
			var e;
			return ((e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.peerBusy) === !0;
		}), _ = p ? s._(
			/*BTDS*/
			""
		) : null;
		return i ? u.jsx(r("WAWebCallParticipantInfo.react"), {
			showCallStateTextOnly: !0,
			callStateText: s._(
				/*BTDS*/
				""
			)
		}) : d != null && d.length > 1 ? u.jsx(r("WAWebOutgoingGroupCallParticipantInfo.react"), {
			callStateText: t != null ? o("WAWebCallLogUtils").getCallStateText(n, t) : void 0,
			compact: l,
			imageSize: l ? 48 : "auto",
			nameText: c,
			participantWids: d
		}) : t != null ? u.jsx(r("WAWebCallParticipantInfo.react"), {
			userId: a != null ? a : void 0,
			imageSize: "small",
			textAlign: "center",
			nameOverride: m,
			callStateText: _ != null ? _ : o("WAWebCallLogUtils").getCallStateText(n, t)
		}) : null;
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 226);
