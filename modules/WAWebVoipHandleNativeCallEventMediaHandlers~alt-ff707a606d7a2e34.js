__d("WAWebVoipHandleNativeCallEventMediaHandlers", [
	"WALogger",
	"WAThrottle",
	"WAWebBackendApi",
	"WAWebUserPrefsMeUser",
	"WAWebVoipDualStreamScreenShareState",
	"WAWebVoipEncodeTargetFpsState",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoCaptureAndRendering",
	"WAWebVoipWaCallEnums",
	"WAWebVoipWebCodecsEncoderState",
	"getErrorSafe",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = 50;
	async function c(t) {
		var n = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (n.type === "web") {
			var a = n.parsers.parseVideoStateChangedData(t);
			o("WAWebBackendApi").frontendFireAndForget("handleVideoStateChange", { videoStateData: a }), a.isSelf === !0 && d().catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: handleUpdateVoipSettings: dispatch failed"]))).catching(r("getErrorSafe")(t));
			});
		}
	}
	async function d() {
		var e = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (e.type === "web") {
			var t = await e.getCallInfo();
			if (t !== "") {
				var n = e.parsers.parseCallInfo(t);
				o("WAWebBackendApi").frontendFireAndForget("handleVoipSettingsUpdate", {
					callId: n.callId,
					isDualStreamSsEnabled: n.isDualStreamSsEnabled
				});
			}
		}
	}
	async function m(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parsePeerVideoPermissionChangedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handlePeerVideoPermissionChange", { peerVideoPermissionData: n });
		}
	}
	var p = o("WAThrottle").throttle(function() {
		g().catch(function(e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: handleMuteStateChanged: dispatch failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-mute-state-dispatch-failed");
		});
	}, u, {
		leading: !0,
		trailing: !0
	}), _ = 0;
	function f() {
		p();
	}
	async function g() {
		var e = ++_, t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
				activity: "get_call_info",
				details: "mute_state"
			});
			var n = await t.getCallInfo();
			if (n !== "" && e === _) {
				var a = t.parsers.parseCallInfo(n);
				o("WAWebBackendApi").frontendFireAndForget("handleMuteStateChange", { callInfo: a });
			}
		}
	}
	async function h(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseAudioDriverRestartData(e);
			n.isDueToSilenceDetected && o("WAWebBackendApi").frontendFireAndForget("showMicrophoneSilenceToast", {});
		}
	}
	async function y(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseSpeakerStatusChangedData(e);
			for (var a of n.Participants) a.AudioLevel > 0 && o("WAWebBackendApi").frontendFireAndForget("handleAudioLevelChange", { participantJid: a.Jid });
		}
	}
	async function C(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseReactionStateChangedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleReactionStateChange", { reactionData: n });
		}
	}
	async function b(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseScreenShareStateChangedData(e);
			o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid) && o("WAWebVoipDualStreamScreenShareState").setSelfDualStreamScreenShareActive(n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Started && Number(n.sharer_version) >= Number(o("WAWebVoipWaCallEnums").ScreenShareVersion.Version3)), n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped && o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid) && (o("WAWebVoipVideoCaptureAndRendering").stopDesktopCaptureJS(), o("WAWebVoipVideoCaptureAndRendering").releaseDesktopStreamJS()), o("WAWebBackendApi").frontendFireAndForget("handleScreenShareStateChange", n);
		}
	}
	async function v(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseRaiseHandStateChangedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleRaiseHandStateChange", { raiseHandData: n });
		}
	}
	async function S(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseEncodeTargetFpsChangedData(e);
			o("WAWebVoipEncodeTargetFpsState").updateEncodeTargetFps(n.targetFps);
		}
	}
	async function R(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseEncodeParamsChangedData(e);
			o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
		}
	}
	l.handleVideoStateChanged = c, l.handleUpdateVoipSettings = d, l.handlePeerVideoPermissionChanged = m, l.handleMuteStateChanged = f, l.handleAudioDriverRestart = h, l.handleSpeakerStatusChanged = y, l.handleReactionStateChanged = C, l.handleScreenShareStateChanged = b, l.handleRaiseHandStateChanged = v, l.handleEncodeTargetFpsChanged = S, l.handleEncodeParamsChanged = R, l.resetWebCodecsEncoderState = o("WAWebVoipWebCodecsEncoderState").resetWebCodecsEncoderState;
}), 98);
