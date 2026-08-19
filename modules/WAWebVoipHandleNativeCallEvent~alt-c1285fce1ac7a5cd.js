__d("WAWebVoipHandleNativeCallEvent", [
	"WALogger",
	"WAWebABProps",
	"WAWebBackendApi",
	"WAWebCoreActionsODS",
	"WAWebVoipAudioCaptureBase",
	"WAWebVoipBatteryDiagnostics",
	"WAWebVoipBrowserMetrics",
	"WAWebVoipCallStateUtils",
	"WAWebVoipContactUtils",
	"WAWebVoipCrashRecovery",
	"WAWebVoipErrorLogUpload",
	"WAWebVoipFocusTracker",
	"WAWebVoipGatingUtils",
	"WAWebVoipHandleLidCallerDisplayInfo",
	"WAWebVoipHandleNativeCallEventCallLinkHandlers",
	"WAWebVoipHandleNativeCallEventCallLogHandlers",
	"WAWebVoipHandleNativeCallEventFieldstatsHandlers",
	"WAWebVoipHandleNativeCallEventMediaHandlers",
	"WAWebVoipLocalCallStateStore",
	"WAWebVoipP2PConnectionManager",
	"WAWebVoipPersistentFS",
	"WAWebVoipQplHelpers",
	"WAWebVoipSctpConnectionManager",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WAWebVoipThreadPoolManagerRegistry",
	"WAWebVoipVideoCameraCapture",
	"WAWebVoipVideoCaptureAndRendering",
	"WAWebVoipWaCallEnums",
	"WAWebVoipWasmHeapMonitor",
	"WAWebVoipWebTransportConnectionManager",
	"WAWebVoipWindowMetrics",
	"getErrorSafe",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W;
	function q(e) {
		return e === o("WAWebVoipWaCallEnums").CallState.None ? "None" : e === o("WAWebVoipWaCallEnums").CallState.Calling ? "Calling" : e === o("WAWebVoipWaCallEnums").CallState.PreacceptReceived ? "PreacceptReceived" : e === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ? "ReceivedCall" : e === o("WAWebVoipWaCallEnums").CallState.AcceptSent ? "AcceptSent" : e === o("WAWebVoipWaCallEnums").CallState.AcceptReceived ? "AcceptReceived" : e === o("WAWebVoipWaCallEnums").CallState.CallActive ? "CallActive" : e === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere ? "CallActiveElseWhere" : e === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer ? "ReceivedCallWithoutOffer" : e === o("WAWebVoipWaCallEnums").CallState.Rejoining ? "Rejoining" : e === o("WAWebVoipWaCallEnums").CallState.Link ? "Link" : e === o("WAWebVoipWaCallEnums").CallState.ConnectedLonely ? "ConnectedLonely" : e === o("WAWebVoipWaCallEnums").CallState.PreCalling ? "PreCalling" : e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding ? "CallStateEnding" : e === o("WAWebVoipWaCallEnums").CallState.CallBCallStarting ? "CallBCallStarting" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	var U = null, V = null;
	function H() {
		return {
			initStarted: !1,
			callIsActive: !1,
			relayListReceived: !1,
			cachedRelayListData: null
		};
	}
	var G = H(), z = 90, j = null, K = null, Q = 60, X = null, Y = null;
	function J() {
		V = null, o("WAWebVoipWasmHeapMonitor").stopWasmHeapMonitor();
	}
	function Z(t, n) {
		if (t === o("WAWebVoipWaCallEnums").CallState.None || t === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
			J();
			return;
		}
		if (!(V != null || t === o("WAWebVoipWaCallEnums").CallState.CallStateEnding)) {
			var a = n.callId;
			V = a, o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then(function(e) {
				V === a && o("WAWebVoipWasmHeapMonitor").startWasmHeapMonitor(e);
			}).catch(function(t) {
				V === a && (V = null), o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [WasmHeap] failed to start monitor"]))).catching(r("getErrorSafe")(t));
			});
		}
	}
	function ee() {
		j != null && (window.clearTimeout(j), j = null, K = null, o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: caller timeout cleared"]))));
	}
	async function te(e, t, n) {
		if (e.type === "web") {
			var a = o("WAWebVoipCallStateUtils").isCallTerminal(t) || o("WAWebVoipCallStateUtils").isCallActive(t);
			if (a) {
				ee();
				return;
			}
			var i = o("WAWebVoipCallStateUtils").isCallOutgoing(t), l = n.isCaller === !0, s = n.isGroupCall === !0;
			if (i && l && !s) {
				if (j != null) return;
				var g = n.callId;
				if (g == null) {
					o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: caller timeout not set, callId is null"])));
					return;
				}
				K = g;
				var h = z;
				try {
					var y = await e.getVoipParam("options.caller_timeout");
					if (y != null && y !== "") {
						var C = parseInt(y, 10);
						!isNaN(C) && C > 0 && (h = C);
					}
				} catch (e) {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: failed to get caller timeout param, using default: ", ""])), e);
				}
				if (K !== g) {
					o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: caller timeout skipped, state changed"])));
					return;
				}
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: setting caller timeout for outgoing call: ", "s"])), h), j = window.setTimeout(function() {
					if (K !== g) {
						o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: caller timeout fired but call ID changed, ignoring"])));
						return;
					}
					o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: caller timeout fired, ending call"]))), j = null, K = null, Promise.resolve(e.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Timeout, !0)).catch(function(e) {
						o("WALogger").ERROR(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: failed to end call on caller timeout"]))).catching(r("getErrorSafe")(e));
					});
				}, h * 1e3);
			}
		}
	}
	function ne() {
		X != null && (window.clearTimeout(X), X = null, Y = null, o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: callee ringing timeout cleared"]))));
	}
	function re(e) {
		var t = e.callInfo, n = e.callState, a = e.voipStackInterface;
		if (a.type === "web") {
			var i = o("WAWebVoipCallStateUtils").isCallTerminal(n) || o("WAWebVoipCallStateUtils").isCallActive(n) || o("WAWebVoipCallStateUtils").isCallConnecting(n);
			if (i) {
				ne();
				return;
			}
			if (n === o("WAWebVoipWaCallEnums").CallState.ReceivedCall && t.isCaller !== !0) {
				if (X != null) return;
				var l = t.callId;
				if (l == null) {
					o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: callee ringing timeout not set, callId is null"])));
					return;
				}
				Y = l;
				var s = Q;
				o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose([
					"voip: callee ringing timeout set: ",
					" (",
					"s)"
				])), l, s), X = window.setTimeout(function() {
					if (Y !== l) {
						o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: callee ringing timeout fired, callId changed"])));
						return;
					}
					o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: callee ringing timeout fired: ", ""])), l), X = null, Y = null, Promise.resolve(a.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Timeout, !0)).catch(function(e) {
						o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: failed to end call on callee ringing timeout"]))).catching(r("getErrorSafe")(e));
					}), o("WAWebBackendApi").frontendFireAndForget("setCallState", {
						callState: o("WAWebVoipWaCallEnums").CallState.None,
						callInfo: t
					});
				}, s * 1e3);
			}
		}
	}
	async function oe(e, t) {
		await (e === o("WAWebVoipWaCallEnums").CallEvent.CallStateChanged ? le(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SyncDevices ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleSyncDevices(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallEnding ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleCallEnding(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RejectedDecryptionFailure ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleRejectedDecryptionFailure(t) : e === o("WAWebVoipWaCallEnums").CallEvent.UpdateJoinableCallLog ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleUpdateJoinableCallLog(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallMissed ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleCallMissed(t) : e === o("WAWebVoipWaCallEnums").CallEvent.Update1to1CallLog ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleUpdate1to1CallLog(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RelayListUpdate ? se(t) : e === o("WAWebVoipWaCallEnums").CallEvent.FieldstatsReady ? o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").handleFieldstatsReady(t) : e === o("WAWebVoipWaCallEnums").CallEvent.GroupInfoChanged || e === o("WAWebVoipWaCallEnums").CallEvent.GroupParticipantLeft ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleGroupInfoChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SelfVideoStateChanged || e === o("WAWebVoipWaCallEnums").CallEvent.PeerVideoStateChanged || e === o("WAWebVoipWaCallEnums").CallEvent.VideoStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleVideoStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.PeerVideoPermissionChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handlePeerVideoPermissionChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallRejectReceived ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallRejectReceived(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallFatal ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallFatal(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RTCPByeReceived ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleRTCPByeReceived(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RelayBindsFailed ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleRelayBindsFailed(t) : e === o("WAWebVoipWaCallEnums").CallEvent.MuteStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleMuteStateChanged() : e === o("WAWebVoipWaCallEnums").CallEvent.ReactionStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleReactionStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RaiseHandStateChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleRaiseHandStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.SpeakerStatusChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleSpeakerStatusChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.AudioDriverRestart ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleAudioDriverRestart(t) : e === o("WAWebVoipWaCallEnums").CallEvent.ScreenShare ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleScreenShareStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.RxTrafficStateForPeerChanged ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleRxTrafficStateForPeerChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.NetHealthStatusChangedV2 ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleNetHealthStatusChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallLinkStateChanged ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallLinkStateChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallOfferNacked ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallOfferNacked(t) : e === o("WAWebVoipWaCallEnums").CallEvent.LinkQueryNacked || e === o("WAWebVoipWaCallEnums").CallEvent.LinkJoinNacked ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallLinkNacked(t) : e === o("WAWebVoipWaCallEnums").CallEvent.LobbyNacked ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleLobbyNacked() : e === o("WAWebVoipWaCallEnums").CallEvent.LobbyTimeout ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleLobbyTimeout() : e === o("WAWebVoipWaCallEnums").CallEvent.MuteRequestFailed ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleMuteRequestFailed() : e === o("WAWebVoipWaCallEnums").CallEvent.MutedByOthers ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleMutedByOthers(t) : e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomDenied ? void o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleWaitingRoomDenied() : e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomStateChanged ? void o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleWaitingRoomStateChanged() : e === o("WAWebVoipWaCallEnums").CallEvent.CallGridRankingChanged ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleCallGridRankingChanged() : e === o("WAWebVoipWaCallEnums").CallEvent.UpdateVoipSettings ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleUpdateVoipSettings() : e === o("WAWebVoipWaCallEnums").CallEvent.UserRemoved ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleUserRemoved(t) : e === o("WAWebVoipWaCallEnums").CallEvent.CallAutoConnect || e === o("WAWebVoipWaCallEnums").CallEvent.BotReconfigureSuccess || e === o("WAWebVoipWaCallEnums").CallEvent.AudioDeviceReady || e === o("WAWebVoipWaCallEnums").CallEvent.BotEarlyConnect || e === o("WAWebVoipWaCallEnums").CallEvent.MicrophoneDeviceReady || e === o("WAWebVoipWaCallEnums").CallEvent.SpeakerDeviceReady || e === o("WAWebVoipWaCallEnums").CallEvent.WearableAttributionStateChanged || e === o("WAWebVoipWaCallEnums").CallEvent.RxTranscriptMsg || e === o("WAWebVoipWaCallEnums").CallEvent.RemoveFailed || e === o("WAWebVoipWaCallEnums").CallEvent.E2EEStatusChanged || e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomToggleAcked || e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomAdmitAcked || e === o("WAWebVoipWaCallEnums").CallEvent.WaitingRoomDenyAcked || e === o("WAWebVoipWaCallEnums").CallEvent.LinkQueryAcked ? o("WAWebVoipHandleNativeCallEventCallLogHandlers").handleNoOpEvent(e) : e === o("WAWebVoipWaCallEnums").CallEvent.EncodeTargetFpsChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleEncodeTargetFpsChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.EncodeParamsChanged ? o("WAWebVoipHandleNativeCallEventMediaHandlers").handleEncodeParamsChanged(t) : e === o("WAWebVoipWaCallEnums").CallEvent.P2PTransportUpdate ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleP2PTransportUpdate(t) : e === o("WAWebVoipWaCallEnums").CallEvent.HandleGroupCallReminder ? o("WAWebVoipHandleNativeCallEventCallLinkHandlers").handleGroupCallReminder(t) : e === o("WAWebVoipWaCallEnums").CallEvent.LidCallerDisplayInfo ? ae(t) : e === o("WAWebVoipWaCallEnums").CallEvent.VoiceChatWaveReceived ? ie(t) : null);
	}
	async function ae(e) {
		o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: LidCallerDisplayInfo"]))), await o("WAWebVoipHandleLidCallerDisplayInfo").handleWAWebVoipLidCallerDisplayInfoJson(e).catch(function(e) {
			o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [LidCallerDisplayInfo] unhandled error"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-lid-caller-display-info-failed");
		});
	}
	async function ie(e) {
		if (o("WAWebABProps").getABPropConfigValue("group_calling_wave_receiving_enabled")) {
			var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
			if (t.type === "web") {
				var n = t.parsers.parseVoiceChatWaveReceivedData(e);
				if (n.silenceReason === "wave") {
					var a = n.callId, i = n.groupJid, l = n.senderWid;
					if (l == null) {
						o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: [wave] no sender jid; skip notif"]))).sendLogs("voip-wave-no-sender");
						return;
					}
					o("WAWebBackendApi").frontendFireAndForget("showVoiceChatWaveNotification", {
						senderWid: l,
						groupJid: i,
						callId: a
					});
				}
			}
		}
	}
	async function le(e) {
		var t, n = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface()), a = n.parsers.parseCallStateChangedData(e), i = (t = a.CallState) != null ? t : o("WAWebVoipWaCallEnums").CallState.None, l = a.call_info;
		o("WAWebVoipLocalCallStateStore").setLocalCallState(i);
		var s = o("WAWebVoipGatingUtils").isWebTransportEnabled();
		if (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(l.isGroupCall === !0), s && !o("WAWebVoipGatingUtils").isWebTransportEnabled()) {
			o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: [gating] group call detected, moving relay traffic to SCTP"]))), o("WAWebVoipWebTransportConnectionManager").closeAllConnections();
			var u = G.cachedRelayListData;
			u != null && o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(u).catch(function(e) {
				o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: [gating] SCTP relay list replay failed"]))).catching(r("getErrorSafe")(e));
			});
		}
		te(n, i, l).catch(function(e) {
			o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallerTimeout failed"]))).catching(r("getErrorSafe")(e));
		}), re({
			callInfo: l,
			callState: i,
			voipStackInterface: n
		});
		var c = o("WAWebVoipThreadPoolManagerRegistry").getVoipThreadPoolManager();
		c == null || c.onCallStateChanged(i), n.type === "web" && Z(i, l), o("WAWebVoipCallStateUtils").isCallTerminal(i) || (o("WAWebBackendApi").frontendFireAndForget("startAnrTracking", {}), o("WAWebBackendApi").frontendFireAndForget("startActivityTracking", {}), o("WAWebBackendApi").frontendFireAndForget("startUiActivityTracking", {}));
		var d = q(i);
		if (o("WAWebBackendApi").frontendFireAndForget("trackVoipCallStateChange", { stateName: d }), o("WAWebBackendApi").frontendFireAndForget("setCallState", {
			callState: i,
			callInfo: a.call_info
		}), i === o("WAWebVoipWaCallEnums").CallState.CallActive) try {
			var m = a.call_info.callId;
			U = m;
			var p = o("WAWebABProps").getABPropConfigValue("web_voip_dynamic_thread_preallocate_count"), _ = o("WAWebVoipGatingUtils").isWebKitBrowser(), f = p > 0 && !_ ? p : "disabled(webkit=" + String(_) + ", count=" + p + ")", g = o("WAWebABProps").getABPropConfigValue("enable_web_voip_proxy_and_sctp_workers"), h = o("WAWebABProps").getABPropConfigValue("enable_web_voip_dynamic_fps_throttle"), y = o("WAWebABProps").getABPropConfigValue("web_calling_perf_optimizations_bitmask"), C = o("WAWebABProps").getABPropConfigValue("web_voip_audio_capture_impl"), b = o("WAWebABProps").getABPropConfigValue("web_voip_audio_playback_impl");
			o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [CallActive] proxySctp=",
				" avSync=",
				" dynFps=",
				" perfBits=",
				""
			])), g, !0, h, y), o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [CallActive] abprops audioCap=",
				" audioPlay=",
				" dynPool=",
				""
			])), C, b, f), o("WAWebVoipCrashRecovery").markCallActive(m), o("WAWebVoipCrashRecovery").registerGracefulExitHandler(m), o("WAWebVoipFocusTracker").startVoipFocusTracking(), o("WAWebBackendApi").frontendFireAndForget("reloadVideoEnhancement", {}), n.type === "web" && o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then(function(e) {
				U === m && o("WAWebVoipPersistentFS").startPeriodicVoipSync(e);
			}).catch(function(e) {
				o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose(["voip: [IDBFS] Failed to start periodic sync"]))).catching(r("getErrorSafe")(e));
			}), o("WAWebVoipBrowserMetrics").startBrowserMetrics(), o("WAWebVoipWindowMetrics").startWindowMetrics(), o("WAWebVoipBatteryDiagnostics").startBatteryDiagnostics(), G.callIsActive = !0;
			var v = l.linkToken != null && l.linkToken !== "";
			v && l.videoEnabled && n.type === "web" && n.broadcastVideoState().catch(function(e) {
				o("WALogger").WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: [CallActive] broadcastVideoState for call link failed"]))).catching(r("getErrorSafe")(e));
			}), ue().catch(function(e) {
				var t = r("getErrorSafe")(e);
				o("WALogger").WARN(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: initP2PConnectionIfEnabled failed: ", ""])), t.message).catching(t);
			});
		} catch (e) {
			o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: [CallActive] backend setup failed"]))).catching(r("getErrorSafe")(e));
		}
		var S = o("WAWebVoipCallStateUtils").isCallTerminal(i);
		if (S && a.call_info.callDuration === 0 && o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").requestStoredFieldstatsSend(), i === o("WAWebVoipWaCallEnums").CallState.CallStateEnding && (o("WAWebVoipErrorLogUpload").captureWamCallResult(e), o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(), G.callIsActive = !1), i === o("WAWebVoipWaCallEnums").CallState.None) {
			o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_START), o("WAWebVoipErrorLogUpload").captureWamCallResult(e);
			var R = U != null ? U : "unknown";
			U = null, o("WAWebVoipFocusTracker").stopVoipFocusTracking(), o("WAWebVoipCrashRecovery").clearExitMarkers(R), o("WAWebVoipCrashRecovery").unregisterGracefulExitHandler(), o("WAWebVoipPersistentFS").stopPeriodicVoipSync(), o("WAWebVoipBrowserMetrics").stopBrowserMetrics(), o("WAWebVoipWindowMetrics").stopWindowMetrics(), o("WAWebVoipGatingUtils").isWebTransportEnabled() ? o("WAWebVoipWebTransportConnectionManager").closeAllConnections() : o("WAWebVoipSctpConnectionManager").cleanupAllConnections(), o("WAWebVoipGatingUtils").markCurrentCallAsFna(!1), o("WAWebVoipP2PConnectionManager").cleanupP2PConnection(), G = H(), o("WAWebBackendApi").frontendFireAndForget("cleanupPrewarmedCamera", {}), o("WAWebBackendApi").frontendFireAndForget("disableAVSync", {}), o("WAWebBackendApi").frontendFireAndForget("resetVideoEnhancementState", {}), o("WAWebVoipVideoCameraCapture").WAWebVoipVideoCameraCapture.scheduleCallEndCameraRelease(), o("WAWebVoipAudioCaptureBase").scheduleCallEndMicRelease(), o("WAWebVoipVideoCaptureAndRendering").releaseDesktopStreamJS(), n.type === "web" && o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").syncVoipPersistentFSWithIdleCallback(), o("WAWebVoipHandleNativeCallEventMediaHandlers").resetWebCodecsEncoderState(), o("WAWebVoipHandleNativeCallEventCallLinkHandlers").resetCallLinkHandlerState(), o("WAWebVoipErrorLogUpload").maybeUploadErrorLogs(), o("WAWebVoipQplHelpers").voipEndCallQplAddPoint(o("WAWebVoipQplHelpers").VoipEndCallQplPoint.CLEANUP_END), o("WAWebVoipQplHelpers").endVoipEndCallQplSuccess();
		}
	}
	async function se(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface()), n = t.parsers.parseRelayListUpdateData(e), a = n.relays.some(function(e) {
			return e.addresses.some(function(e) {
				return e.port === 3478 || e.port_v6 === 3478;
			});
		});
		a && o("WAWebCoreActionsODS").logCallRelayPort3478(), o("WAWebVoipGatingUtils").isWebTransportEnabled() ? o("WAWebVoipWebTransportConnectionManager").handleRelayListUpdate(n) : await o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(n), G.cachedRelayListData = n, G.relayListReceived = !0, ue().catch(function(e) {
			var t = r("getErrorSafe")(e);
			o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: initP2PConnectionIfEnabled failed: ", ""])), t.message).catching(t);
		});
	}
	async function ue() {
		if (!(G.initStarted || !G.callIsActive || !G.relayListReceived)) {
			G.initStarted = !0;
			try {
				await ce();
			} catch (e) {
				throw G.initStarted = !1, e;
			}
		}
	}
	async function ce() {
		var e = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (e.type === "web") {
			o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
				activity: "get_call_info",
				details: "p2p_init"
			});
			var t = await e.getCallInfo();
			if (t === "") {
				o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: initP2PConnectionIfEnabled: Failed to get call info"]))), G.initStarted = !1;
				return;
			}
			var n = e.parsers.parseCallInfo(t);
			if (n.isGroupCall) {
				G.initStarted = !1;
				return;
			}
			var a = n.callId, i = n.isCaller;
			if (await o("WAWebVoipP2PConnectionManager").refreshP2PEnablement(a), !o("WAWebVoipP2PConnectionManager").isP2PEnabled()) {
				o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: initP2PConnectionIfEnabled: P2P disabled for callId=", ""])), a);
				return;
			}
			var l = n.participants.find(function(e) {
				return e.isSelf !== !0;
			}), s = (l == null ? void 0 : l.devicePlatform) === o("WAWebVoipWaCallEnums").ClientPlatform.Web;
			if (!i && n.peerJid != null && await o("WAWebVoipContactUtils").isCallerNotContact(n.peerJid)) {
				o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: initP2PConnectionIfEnabled: non-contact, P2P gated ", ""])), a);
				return;
			}
			if (!G.callIsActive) {
				G.initStarted = !1;
				return;
			}
			o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose([
				"voip: initP2PConnectionIfEnabled: callId=",
				", isCaller=",
				", isPeerWebBrowser=",
				""
			])), a, String(i), String(s));
			var u = function(n, i, l, s, u) {
				e.sendWebP2PTransport(a, n, i, l, s, u).catch(function(e) {
					o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose(["voip: sendWebP2PTransport failed"]))).catching(r("getErrorSafe")(e));
				});
			}, c = 10, d = new Set();
			if (G.cachedRelayListData == null) {
				o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: initP2PConnectionIfEnabled: cachedRelayListData null"])));
				return;
			}
			var m = G.cachedRelayListData;
			for (var p of m.relays) {
				if (d.size >= c) break;
				for (var _ of p.addresses) {
					if (d.size >= c) break;
					_.ipv4 != null && _.port != null && d.add("stun:" + _.ipv4 + ":" + _.port), d.size < c && _.ipv6 != null && _.port_v6 != null && d.add("stun:[" + _.ipv6 + "]:" + _.port_v6);
				}
			}
			var f = Array.from(d, function(e) {
				return { urls: e };
			});
			await o("WAWebVoipP2PConnectionManager").initP2PConnection(i, s, f, u);
		}
	}
	l.requestStoredFieldstatsSend = o("WAWebVoipHandleNativeCallEventFieldstatsHandlers").requestStoredFieldstatsSend, l.handleWAWebVoipNativeCallEvent = oe;
}), 98);
