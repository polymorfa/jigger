__d("WAWebVoipHandleNativeCallEventFieldstatsHandlers", [
	"WALogger",
	"WAWebBackendApi",
	"WAWebBrowserApi",
	"WAWebCallWamEvent",
	"WAWebCoreActionsODS",
	"WAWebJoinableCallWamEvent",
	"WAWebPonyfillsIdleCallback",
	"WAWebReleaseToEventLoop",
	"WAWebVoipBatteryDiagnostics",
	"WAWebVoipBrowserMetrics",
	"WAWebVoipCallRatingStore",
	"WAWebVoipDeviceClassUtils",
	"WAWebVoipErrorLogUpload",
	"WAWebVoipFocusTracker",
	"WAWebVoipGatingUtils",
	"WAWebVoipJsonParserPayloads",
	"WAWebVoipLobbyEntryPointStore",
	"WAWebVoipPersistentFS",
	"WAWebVoipStackInterface",
	"WAWebVoipVideoEncoderType",
	"WAWebVoipWebTransportCallSummary",
	"WAWebVoipWindowMetrics",
	"WAWebWamEnumFieldStatsRowType",
	"getErrorSafe",
	"isEmptyObject"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x = 0, $ = 6, P = 10, N = 15, M = 17, w = 3e4, A = new WeakSet(), F = new WeakMap(), O = null;
	async function B(e) {
		var t = o("WAWebBrowserApi").getNumCpu(), n = o("WAWebBrowserApi").getMemClass(), r = n != null ? Math.round(n / 1e3) : null, a = o("WAWebVoipDeviceClassUtils").computeDeviceClass(t, r), i = babelHelpers.extends({}, e);
		t != null && (i.numCpuCores = t), r != null && (i.totalMemoryGb = r), a != null && (i.deviceClass = a), i.webTransportUsed = o("WAWebVoipGatingUtils").isWebTransportEnabled();
		var l = o("WAWebVoipFocusTracker").snapshotFocusStats();
		l != null && (i = babelHelpers.extends({}, i, l));
		var s = o("WAWebVoipBrowserMetrics").snapshotBrowserMetrics();
		s != null && (i = babelHelpers.extends({}, i, s));
		var u = o("WAWebVoipWindowMetrics").snapshotWindowMetrics();
		u != null && (i = babelHelpers.extends({}, i, u));
		var c = o("WAWebVoipBatteryDiagnostics").snapshotBatteryDiagnostics();
		c != null && (i = babelHelpers.extends({}, i, c)), W();
		var d = await o("WAWebBackendApi").frontendSendAndReceive("consumeAudioPlaybackMetrics");
		return d != null && (i = babelHelpers.extends({}, i, d)), i;
	}
	function W() {
		o("WAWebVoipFocusTracker").resetFocusStats(), o("WAWebVoipBrowserMetrics").resetBrowserMetrics(), o("WAWebVoipWindowMetrics").resetWindowMetrics(), o("WAWebVoipBatteryDiagnostics").resetBatteryDiagnostics();
	}
	function q(e) {
		try {
			var t = JSON.parse(e);
			return t.is_last_field_stats_report === !0;
		} catch (e) {
			return !1;
		}
	}
	async function U(t) {
		var n = o("WAWebVoipCallRatingStore").setPendingFieldstatsJsonStr(t);
		Z(n);
		var r = q(t);
		r && X(n);
		var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
		if (a == null || a.type !== "web") {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] stack unavailable, dropping"])));
			return;
		}
		var i = a.parsers.parseFieldstatsData(t), l = i.stats.groupCallSegmentIdx, u = i.stats.fieldStatsRowType, c = i.isLastFieldStatsReport;
		if (c) {
			o("WAWebCoreActionsODS").logCallFieldstatsFinalReceived(), r || X(n), i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call && (V(i.stats), G(i.stats)), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] last segment stored for rating"])));
			return;
		}
		r && J(n), await o("WAWebReleaseToEventLoop").releaseToEventLoop();
		var d = u === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.SELF || u === o("WAWebWamEnumFieldStatsRowType").FIELD_STATS_ROW_TYPE.BOTH, m = d ? await B(i.stats) : babelHelpers.extends({}, i.stats);
		i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call && m.callTermReason === x && delete m.callTermReason;
		var p = typeof m.callId == "string" ? m.callId : null, _ = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(p);
		if (_ != null && (m.lobbyEntryPoint = _), i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
			var f = await o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
			f != null && (m.unifiedSessionId = f);
		}
		var g = i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call ? new (o("WAWebCallWamEvent")).CallWamEvent(m) : z(m);
		g.commit();
	}
	function V(e) {
		var t = e.callEndReconnecting, n = e.callResult, r = e.groupCallIsLastSegment, a = e.maxConnectedParticipants;
		if (!(typeof t != "boolean" || typeof n != "number" || typeof r != "boolean" || typeof a != "number")) {
			var i = e.callId, l = e.callT, s = e.groupCallSegmentIdx, u = e.groupCallTotalCallTSinceCallStart;
			o("WAWebVoipErrorLogUpload").maybeUploadGroupCallCerLogs({
				callEndReconnecting: t,
				callId: typeof i == "string" ? i : null,
				callResult: n,
				callT: typeof l == "number" ? l : null,
				groupCallIsLastSegment: r,
				groupCallSegmentIdx: typeof s == "number" ? s : null,
				groupCallTotalCallTSinceCallStart: typeof u == "number" ? u : null,
				maxConnectedParticipants: a
			});
		}
	}
	function H(e, t) {
		return e === P ? "anc" : e === $ && (t === N || t === M) ? "relay_bind" : null;
	}
	function G(e) {
		if (o("WAWebVoipWebTransportCallSummary").hasWtActivityThisCall()) {
			var t = e.callResult, n = e.callSetupErrorType, r = e.maxConnectedParticipants;
			if (!(e.groupCallIsLastSegment !== !0 || typeof t != "number" || typeof r != "number")) {
				var a = H(t, n);
				if (a != null) {
					var i = o("WAWebVoipWebTransportCallSummary").getWtCallSummary(), l = typeof e.callId == "string" ? e.callId : null;
					o("WAWebCoreActionsODS").logCallWebtransportGroupCallAnc(), o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WtGroupCallAnc] kind=",
						" callId=",
						" callResult=",
						" callSetupErrorType=",
						" maxConnectedParticipants=",
						" numRelayAttempts=",
						" numOpened=",
						" attempts=",
						""
					])), a, String(l), t, String(n != null ? n : "n/a"), r, i.numRelayAttempts, i.numOpened, JSON.stringify(i.attempts)).sendLogs("webtransport-group-call-anc");
				}
			}
		}
	}
	function z(e) {
		var t = new (o("WAWebJoinableCallWamEvent")).JoinableCallWamEvent();
		return t.set(e), t;
	}
	function j(e) {
		var t = o("WAWebVoipCallRatingStore").getPendingFieldstats();
		return t == null ? (o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: No pending fieldstats to send"]))), Promise.resolve()) : K(t, e);
	}
	function K(e, t) {
		var n = F.get(e);
		if (n != null) return n;
		var r = ee(e, t);
		return F.set(e, r), r.then(function() {
			F.get(e) === r && F.delete(e);
		}, function() {
			F.get(e) === r && F.delete(e);
		}), r;
	}
	function Q(e) {
		j(e).catch(function(e) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] send request failed"]))).catching(r("getErrorSafe")(e));
		});
	}
	function X(e) {
		if (!A.has(e)) {
			O != null && window.clearTimeout(O.timeoutId);
			var t = window.setTimeout(function() {
				var t;
				if (((t = O) == null ? void 0 : t.fieldstats) === e) {
					O = null;
					var n = F.get(e);
					if (n != null) {
						n.catch(function() {
							Y(e);
						});
						return;
					}
					o("WAWebCoreActionsODS").logCallFieldstatsWatchdogSend(), K(e).catch(function(t) {
						o("WALogger").WARN(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] watchdog send failed"]))).catching(r("getErrorSafe")(t)), Y(e);
					});
				}
			}, w);
			O = {
				fieldstats: e,
				timeoutId: t
			};
		}
	}
	function Y(e) {
		!A.has(e) && o("WAWebVoipCallRatingStore").getPendingFieldstats() === e && X(e);
	}
	function J(e) {
		var t = O;
		t != null && t.fieldstats === e && (window.clearTimeout(t.timeoutId), O = null);
	}
	function Z(e) {
		var t = O;
		t != null && t.fieldstats !== e && (window.clearTimeout(t.timeoutId), O = null);
	}
	async function ee(e, t) {
		var n = e.jsonDataStr;
		o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: Sending stored fieldstats with rating: ", ""])), t != null ? t : "none");
		try {
			var a = await o("WAWebVoipStackInterface").getVoipStackInterface();
			if (a == null || a.type !== "web") {
				o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] web stack unavailable, skipping pending fieldstats"]))), Y(e);
				return;
			}
			var i = a.parsers.parseFieldstatsData(n), l = babelHelpers.extends({}, i.stats);
			if (t != null && i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
				var s = l.call_ended_stats;
				s != null && typeof s == "object" ? l.call_ended_stats = babelHelpers.extends({}, s, { userRating: t }) : l.userRating = t;
			}
			var u = await B(l), c = o("WAWebVoipBatteryDiagnostics").getBatteryLevelAtCallStart();
			if (c != null) {
				var d = u.browserBatteryLevelEndPct;
				u.callStartBatteryPct = c, u.callEndBatteryPct = d, typeof d == "number" && (u.callBatteryChangePct = d - c);
			}
			o("WAWebVoipFocusTracker").stopVoipFocusTracking(), await o("WAWebVoipBrowserMetrics").stopBrowserMetrics(), o("WAWebVoipWindowMetrics").stopWindowMetrics(), await o("WAWebVoipBatteryDiagnostics").stopBatteryDiagnostics();
			var m = await o("WAWebBackendApi").frontendSendAndReceive("consumeAVSyncMetrics");
			m != null && (u = babelHelpers.extends({}, u, m));
			var k = await o("WAWebBackendApi").frontendSendAndReceive("consumeWebCodecsFatalErrorCount");
			k != null && (u.videoWebcodecsDecFatalErrorNum = k), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebCodecs] video_webcodecs_dec_fatal_error_num=", ""])), k != null ? k : 0);
			var I = await a.consumeVideoCaptureFps();
			I != null && (u = babelHelpers.extends({}, u, I), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [VideoCapture] video_capture_avg_fps=", ""])), I.videoCaptureAvgFps));
			var T = o("WAWebVoipVideoEncoderType").getActiveVideoEncoderType();
			T != null && (u.webVideoEncoderType = T, o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [VideoEncoder] web_video_encoder_type=", ""])), T));
			var D = typeof u.callId == "string" ? u.callId : null, x = o("WAWebVoipLobbyEntryPointStore").getLobbyEntryPointForCall(D);
			if (x != null && (u.lobbyEntryPoint = x, o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] lobby_entry_point=", ""])), x)), i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
				var $ = await o("WAWebBackendApi").frontendSendAndReceive("getUnifiedSessionId");
				$ != null && (u.unifiedSessionId = $);
				var P = await o("WAWebBackendApi").frontendSendAndReceive("consumeOutgoingCallSetupActiveMs", { callId: D });
				P != null && (u.outgoingCallSetupActiveMs = P, o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] outgoing_call_setup_active_ms=", ""])), P));
			}
			var N = await o("WAWebBackendApi").frontendSendAndReceive("consumeAnrCount");
			o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: ANR count for this call: ", ""])), N != null ? N : 0);
			var M = null, w = null, F = null, O = null, W = null;
			if (N != null && N > 0) {
				var q = await o("WAWebBackendApi").frontendSendAndReceive("consumeActivityData");
				q != null && (M = q.lastVoipActivity, w = q.lastVoipActivityTimestampSec, F = q.timeFirstAnrSinceCallStartSec, o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose([
					"voip: ANR data act=",
					" actT=",
					"s firstAnrT=",
					"s"
				])), M != null ? M : "none", w != null ? w : "none", F != null ? F : "none"));
				var U = await o("WAWebBackendApi").frontendSendAndReceive("consumeUiActivityData");
				U != null && (O = U.lastVoipUiActivity, W = U.lastVoipUiActivityTimestampSec, o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose([
					"voip: ANR uiAct=",
					" uiActT=",
					"s"
				])), O != null ? O : "none", W != null ? W : "none"));
			} else o("WAWebBackendApi").frontendFireAndForget("clearAllActivityTracking", {});
			var V;
			if (i.eventType === o("WAWebVoipJsonParserPayloads").FieldstatsPayloadType.Call) {
				var H = new (o("WAWebCallWamEvent")).CallWamEvent(u), G = {};
				N != null && (G.numAnrs = N), M != null && (G.lastVoipActivity = M), w != null && (G.lastVoipActivityTimestampSec = w), F != null && (G.timeFirstAnrSinceCallStartSec = F), O != null && (G.lastVoipUiActivity = O), W != null && (G.lastVoipUiActivityTimestampSec = W), r("isEmptyObject")(G) || (H.set(G), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose([
					"voip: ANR fields set n=",
					" act=",
					" actT=",
					"s firstT=",
					" uiAct=",
					" uiActT=",
					"s"
				])), N != null ? N : "null", M != null ? M : "null", w != null ? w : "null", F != null ? F : "null", O != null ? O : "null", W != null ? W : "null")), V = H;
			} else V = z(u);
			await V.commitAndWaitForFlush(i.uploadInRealtime), o("WAWebVoipCallRatingStore").markPersistedFieldstatsHandedOff(n), A.add(e), J(e), o("WAWebVoipCallRatingStore").clearPendingFieldstats(e), o("WAWebCoreActionsODS").logCallFieldstatsHandoffCompleted(), o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: Fieldstats sent successfully with user rating: ", ""])), t != null ? t : "none"), await te();
		} catch (e) {
			throw o("WAWebCoreActionsODS").logCallFieldstatsHandoffFailed(), o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] terminal WAM handoff failed"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-fieldstats-wam-handoff-failed", {
				employeeSampling: 1,
				sampling: .01,
				sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
			}), e;
		}
	}
	async function te() {
		try {
			var e = await o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm");
			e.cleanupUnfinishedCallStats(), await o("WAWebVoipPersistentFS").syncPersistentFS(e), o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] cleaned up persisted fieldstats after WAM handoff"])));
		} catch (e) {
			o("WAWebCoreActionsODS").logCallFieldstatsPersistenceCleanupFailed(), o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: [Fieldstats] failed to clean up persisted fieldstats after WAM handoff"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-fieldstats-persistence-cleanup-failed", {
				employeeSampling: 1,
				sampling: .01,
				sendLogsType: o("WALogger").SendLogsType.INVESTIGATION
			});
		}
	}
	function ne() {
		o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
			var e = Date.now();
			o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm").then(function(e) {
				return o("WAWebVoipPersistentFS").syncPersistentFS(e);
			}).then(function() {
				var t = Date.now() - e;
				o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["voip: [IDBFS] Successfully synced filesystem in ", "ms"])), t);
			}).catch(function(e) {
				o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["voip: [IDBFS] Failed to sync filesystem"]))).catching(r("getErrorSafe")(e));
			});
		});
	}
	l.handleFieldstatsReady = U, l.sendStoredFieldstats = j, l.requestStoredFieldstatsSend = Q, l.syncVoipPersistentFSWithIdleCallback = ne;
}), 98);
