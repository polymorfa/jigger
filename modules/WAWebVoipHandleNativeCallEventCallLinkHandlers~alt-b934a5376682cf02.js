__d("WAWebVoipHandleNativeCallEventCallLinkHandlers", [
	"WALogger",
	"WAThrottle",
	"WAWebBackendApi",
	"WAWebCoreActionsODS",
	"WAWebUserPrefsMeUser",
	"WAWebVoipP2PConnectionManager",
	"WAWebVoipSignalingEnums",
	"WAWebVoipStackInterface",
	"WAWebVoipWaCallEnums",
	"getErrorSafe",
	"nullthrows"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C = [], b = 2e3, v = "busy", S = 5e3, R = null, L = null, E = new Set();
	function k() {
		L != null && (window.clearTimeout(L), L = null), R != null && (window.clearTimeout(R), R = null, o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {})), E.clear();
	}
	async function I(t) {
		var n = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface()), a = n.parsers.parseGroupInfoChangedData(t);
		if (o("WAWebBackendApi").frontendFireAndForget("generateCallLogFromEventGroupInfoChanged", { groupInfoChangedData: a }), n.type === "web") {
			var i, l;
			o("WAWebBackendApi").frontendFireAndForget("handleGroupInfoChangedGroupCall", { groupInfoChangedPayload: a });
			var s = (i = (l = a.CallParticipants) == null ? void 0 : l.filter(function(e) {
				return e.outcome === o("WAWebVoipWaCallEnums").CallParticipantState.Connected;
			}).map(function(e) {
				return e.participant.toString();
			})) != null ? i : C, u = s.some(function(e) {
				return !E.has(e);
			});
			if (u) {
				var c = await n.getCallInfo();
				if (c !== "") {
					var d = n.parsers.parseCallInfo(c), m = d.linkToken != null && d.linkToken !== "";
					m && d.videoEnabled && (s.forEach(function(e) {
						return E.add(e);
					}), L != null && window.clearTimeout(L), L = window.setTimeout(function() {
						L = null, n.broadcastVideoState().catch(function(t) {
							o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [GroupInfoChanged] broadcastVideoState failed"]))).catching(r("getErrorSafe")(t));
						});
					}, b));
				}
			}
		}
	}
	var T = 50, D = o("WAThrottle").throttle(function() {
		P().catch(function(e) {
			o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallGridRankingChanged: dispatch failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-grid-ranking-dispatch-failed");
		});
	}, T, {
		leading: !0,
		trailing: !0
	}), x = 0;
	function $() {
		D();
	}
	async function P() {
		var e = ++x, t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
				activity: "get_call_info",
				details: "grid_ranking"
			});
			var n = await t.getCallInfo();
			if (n !== "" && e === x) {
				var a = t.parsers.parseCallInfo(n);
				o("WAWebBackendApi").frontendFireAndForget("handleCallGridRankingChanged", { callInfo: a });
			}
		}
	}
	async function N(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseRxTrafficStateForPeerChangedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleRxTrafficStateForPeerChanged", n);
		}
	}
	async function M(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseNetHealthStatusChangedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleNetHealthStatusChanged", n);
		}
	}
	async function w(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseCallLinkStateChangedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleCallLinkStateChanged", n), o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
				activity: "get_call_info",
				details: "call_link_state"
			});
			var a = await t.getCallInfo();
			if (a === "") return;
			var i = t.parsers.parseCallInfo(a);
			o("WAWebBackendApi").frontendFireAndForget("handleIsInWaitingRoomChanged", { isInWaitingRoom: i.isInWaitingRoom });
		}
	}
	async function A(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseCallLinkNackedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleCallLinkNacked", { nackCode: n.nackCode }), await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
		}
	}
	async function F(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseCallOfferNackedData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleCallOfferNacked", { callOfferNackedData: n });
		}
	}
	function O() {
		o("WAWebCoreActionsODS").logCallGroupJoinError(), o("WAWebBackendApi").frontendFireAndForget("handleLobbyNacked", {});
	}
	function B() {
		o("WAWebCoreActionsODS").logCallGroupJoinError(), o("WAWebBackendApi").frontendFireAndForget("handleLobbyTimeout", {});
	}
	async function W() {
		o("WAWebBackendApi").frontendFireAndForget("handleWaitingRoomDenied", {});
	}
	async function q() {
		var e = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (e.type === "web") {
			o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
				activity: "get_call_info",
				details: "waiting_room_state"
			});
			var t = await e.getCallInfo();
			if (t === "") return;
			var n = e.parsers.parseCallInfo(t);
			o("WAWebBackendApi").frontendFireAndForget("handleWaitingRoomStateChanged", {
				isWaitingRoomEnabled: n.isWaitingRoomEnabled,
				isWaitingRoomAdmin: n.isWaitingRoomAdmin,
				waitingRoomFilter: n.waitingRoomFilter,
				isInWaitingRoom: n.isInWaitingRoom,
				waitingRoomUsers: n.waitingRoomUsers,
				waitingRoomUsersCount: n.waitingRoomUsersCount
			});
		}
	}
	async function U(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseCallRejectReceivedData(e);
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"voip: handleCallRejectReceived: callId=",
				", reason=",
				""
			])), n.callId, n.reason);
			var a = await t.getCallInfo();
			if (a === "") {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: no call info, ending"]))), await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
				return;
			}
			var i = t.parsers.parseCallInfo(a), l = i.isGroupCall === !0;
			if (l) {
				o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: skip endCall (group)"])));
				return;
			}
			if (n.reason === v) {
				o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: peer busy, showing busy UI"]))), o("WAWebBackendApi").frontendFireAndForget("setPeerBusy", {}), o("WAWebBackendApi").frontendFireAndForget("playBusyTone", {}), R != null && window.clearTimeout(R);
				var s = n.callId;
				R = window.setTimeout(function() {
					R = null, o("WAWebBackendApi").frontendFireAndForget("stopBusyTone", {}), (async function() {
						try {
							var e = await t.getCallInfo();
							if (e === "") {
								o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: no active call at busy timeout, skipping endCall for callId=", ""])), s);
								return;
							}
							var n = t.parsers.parseCallInfo(e).callId;
							if (n !== s) {
								o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: active call changed, skipping endCall for callId=", ""])), s);
								return;
							}
							o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: busy tone timeout, ending callId=", ""])), s), await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
						} catch (e) {
							o("WALogger").ERROR(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: handleCallRejectReceived: busy timeout callback failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-busy-timeout-failed");
						}
					})();
				}, S);
				return;
			}
			await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
		}
	}
	async function V(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseCallFatalData(e);
			o("WAWebCoreActionsODS").logCallErrorTerminal();
			var a = n.reasonCode === o("WAWebVoipWaCallEnums").CallFatalReasonCode.TxTimeout || n.reasonCode === o("WAWebVoipWaCallEnums").CallFatalReasonCode.RxTimeout ? o("WAWebVoipSignalingEnums").EndCallReason.Timeout : o("WAWebVoipSignalingEnums").EndCallReason.Unknown;
			await t.endCall(a, !0);
		}
	}
	async function H(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		t.type === "web" && (await new Promise(function(e) {
			return window.setTimeout(e, 2500);
		}), await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Timeout, !1));
	}
	async function G(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseRelayBindsFailedData(e);
			o("WAWebCoreActionsODS").logCallErrorTerminal(), await o("WAWebBackendApi").frontendSendAndReceive("handleRelayBindsFailed", {}), await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !1);
		}
	}
	async function z(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseP2PTransportUpdateData(e);
			o("WAWebVoipP2PConnectionManager").handleRemoteCredentials({
				ufrag: n.ice_ufrag,
				pwd: n.ice_pwd,
				algorithm: n.cert_algorithm,
				fingerprint: n.cert_fingerprint
			});
			for (var a of n.candidates) o("WAWebVoipP2PConnectionManager").handleRemoteCandidate(a);
		}
	}
	async function j(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseGroupCallReminderData(e);
			o("WAWebBackendApi").frontendFireAndForget("handleGroupCallReminder", n);
		}
	}
	async function K(e) {
		var t = r("nullthrows")(await o("WAWebVoipStackInterface").getVoipStackInterface());
		if (t.type === "web") {
			var n = t.parsers.parseUserRemovedData(e);
			if (o("WAWebUserPrefsMeUser").isMeAccount(n.removeeJid)) {
				var a, i = n.removerJid, l = (a = i == null ? void 0 : i.toString()) != null ? a : null;
				o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: User was removed from call by ", ""])), l != null ? l : "unknown"), o("WAWebBackendApi").frontendFireAndForget("showUserRemovedDialog", { removerJid: l }), await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Unknown, !0);
			} else {
				var s = n.removeeJid;
				o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: Participant ", " was removed from call"])), s.toString()), o("WAWebBackendApi").frontendFireAndForget("showParticipantRemovedToast", { removeeJid: s.toString() });
			}
		}
	}
	l.resetCallLinkHandlerState = k, l.handleGroupInfoChanged = I, l.handleCallGridRankingChanged = $, l.handleRxTrafficStateForPeerChanged = N, l.handleNetHealthStatusChanged = M, l.handleCallLinkStateChanged = w, l.handleCallLinkNacked = A, l.handleCallOfferNacked = F, l.handleLobbyNacked = O, l.handleLobbyTimeout = B, l.handleWaitingRoomDenied = W, l.handleWaitingRoomStateChanged = q, l.handleCallRejectReceived = U, l.handleCallFatal = V, l.handleRTCPByeReceived = H, l.handleRelayBindsFailed = G, l.handleP2PTransportUpdate = z, l.handleGroupCallReminder = j, l.handleUserRemoved = K;
}), 98);
