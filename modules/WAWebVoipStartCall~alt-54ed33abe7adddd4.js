__d("WAWebVoipStartCall", [
	"fbt",
	"WAComms",
	"WALogger",
	"WAPromiseRaceAbort",
	"WARandomHex",
	"WAWebAdvSyncDeviceListApi",
	"WAWebApiDeviceList",
	"WAWebBlockedParticipantCallWarning",
	"WAWebBuildConstants",
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebContactMutator",
	"WAWebCoreActionsODS",
	"WAWebEnsureVoipInited",
	"WAWebEnvironment",
	"WAWebFbtIntlList",
	"WAWebFindChatAction",
	"WAWebFrontendContactGetters",
	"WAWebLidMigrationUtils",
	"WAWebNoop",
	"WAWebNotificationIconUtils",
	"WAWebOpenCoexCallingFirstTimeModalUtils",
	"WAWebPageVisibilityRecency",
	"WAWebPipController",
	"WAWebSendMsgDatabaseJob",
	"WAWebSendTcTokenChatAction",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WAWebUsernameTypes",
	"WAWebVoipAcquireMediaStream",
	"WAWebVoipActionWriteCallLogEventUpdateJoinable",
	"WAWebVoipActivityTracker",
	"WAWebVoipCallBlockedModals",
	"WAWebVoipCancelOutgoingCall",
	"WAWebVoipGatingUtils",
	"WAWebVoipOngoingCallCollection",
	"WAWebVoipOutgoingCallQpl",
	"WAWebVoipOutgoingSetupLatencyMode",
	"WAWebVoipOutgoingSetupLatencyStore",
	"WAWebVoipPeerTcToken",
	"WAWebVoipStackInterface",
	"WAWebVoipUiLoadable",
	"WAWebVoipUiVideoCallLoadable",
	"WAWebVoipUiVideoGroupCallLoadable",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWidFactory",
	"WAWebWindowsHybridBridgeInitiator",
	"cr:17219",
	"getErrorSafe",
	"nullthrows",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee = Z || (Z = o("react")), te = "#aa6627", ne = 3e4, re = 6e4, oe = (e = n("cr:17219")) != null ? e : {}, ae = oe.getWindowsBridge, ie = 5;
	function le() {
		var e, t;
		return (e = (t = globalThis.performance) == null ? void 0 : t.now()) != null ? e : null;
	}
	function se(e, t) {
		return e != null && t != null ? t - e : null;
	}
	function ue(e, t) {
		var n = t.coexModalMs, r = t.devicePermissionsMs, a = t.intentTs, i = t.successTs;
		if (!(a == null || i == null)) {
			var l = i - a - (r != null ? r : 0) - (n != null ? n : 0);
			l < 0 || o("WAWebVoipOutgoingSetupLatencyStore").setOutgoingCallSetupActiveMs(Math.round(l), e);
		}
	}
	function ce(e, t) {
		return e().then(function() {}, function(e) {
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: bundle preload failed"]))).catching(r("getErrorSafe")(e)).sendLogs(t);
		});
	}
	function de() {
		return ce(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-preload-group-call-bundle");
	}
	function me() {
		return Promise.all([ce(o("WAWebVoipUiLoadable").requireBundle, "voip-preload-call-link-ui"), ce(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-preload-call-link-video")]).then(function() {});
	}
	function pe(e) {
		r("WAWebEnvironment").isWindows || (r("WAWebCallCollection").setPendingOutgoingCall({
			abortController: e.abortController,
			isGroup: e.isGroup,
			isJoin: e.isJoin,
			isVideo: e.isVideo
		}), r("WAWebPipController").openVoipUiPiPForOutgoing());
	}
	async function _e(e) {
		if (r("WAWebCallCollection").pendingOutgoingCall != null) return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: outgoing call already pending; ignoring duplicate start"]))).color(te), null;
		var t = new AbortController();
		pe({
			abortController: t,
			isGroup: e.isGroup,
			isJoin: e.isJoin,
			isVideo: e.isVideo
		});
		var n = o("WAWebEnsureVoipInited").ensureVoipInitialized("call", t.signal);
		n.catch(r("WAWebNoop"));
		try {
			await r("WAPromiseRaceAbort")(n, t.signal);
		} catch (e) {
			return t.signal.aborted ? (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: outgoing call cancelled while waiting for VoIP init"]))).color(te), null) : (o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(), e instanceof o("WAWebEnsureVoipInited").VoipInitUnavailableError ? (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: outgoing call stopped because VoIP init requires reload"]))).color(te), null) : (o("WALogger").ERROR(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: outgoing call: VoIP init failed, aborting"]))).catching(r("getErrorSafe")(e)).sendLogs("voip-outgoing-ensure-init-failed"), o("WAWebVoipCallBlockedModals").showCouldNotPlaceCallModal(), null));
		}
		return t;
	}
	async function fe(e, t, n, r, a) {
		var i, l;
		n === void 0 && (n = 0), r === void 0 && (r = 0), a === void 0 && (a = null);
		var s = (i = (l = globalThis.document) == null ? void 0 : l.visibilityState) != null ? i : "unknown", u = o("WAWebVoipOutgoingCallQpl").startVoipOutgoingCallQpl({
			bool: {
				is_video: t,
				is_hidden_at_start: s !== "visible",
				socket_connected_at_start: o("WAComms").isSocketConnected(),
				was_hidden_within_30s: o("WAWebPageVisibilityRecency").wasDocumentHiddenWithinMs(ne)
			},
			int: {
				call_from_ui: n != null ? n : 0,
				ms_since_visibility_visible: Math.round(o("WAWebPageVisibilityRecency").getMsSinceDocumentVisible()),
				last_hidden_duration_ms: Math.round(o("WAWebPageVisibilityRecency").getLastHiddenDurationMs()),
				ms_since_last_socket_rx: Math.round(o("WAComms").getMsSinceLastInboundRx())
			},
			string: { visibility_state_at_start: s }
		});
		try {
			await ye(u, e, t, n, r, a);
		} catch (e) {
			throw u.isActive() && o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(u, "unexpected_error"), e;
		}
	}
	function ge(e) {
		if (o("WAWebVoipOutgoingSetupLatencyMode").isSocketHealthCheckEnabled()) {
			o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SOCKET_HEALTH_CHECK_START);
			var t = !1;
			(!o("WAComms").isSocketConnected() || o("WAComms").getMsSinceLastInboundRx() > re) && (o("WAComms").forceAbortSocketConnection(), o("WAComms").forceResetSocketLoop(), t = !0), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, { bool: { socket_reconnect_triggered: t } }), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SOCKET_HEALTH_CHECK_END);
		}
	}
	async function he(e, t) {
		if (o("WAWebVoipOutgoingSetupLatencyMode").isCacheAwareSyncEnabled()) try {
			var n = await o("WAWebApiDeviceList").getDeviceRecord(e);
			if (n != null && n.deleted === !1 && n.expectedTs == null && n.advAccountType != null) {
				var r = n.advAccountType;
				o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, { bool: { device_list_cache_hit: !0 } }), o("WAWebContactMutator").updateContactAdvAccountType({
					contactId: o("WAWebWidFactory").asUserWidOrThrow(e),
					advAccountType: r
				});
				return;
			}
			o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, { bool: { device_list_cache_hit: !1 } });
		} catch (e) {
			o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(t, { bool: { device_list_cache_error: !0 } }), o("WALogger").WARN(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: cache-aware device sync failed, falling back to network sync: ", ""])), e);
		}
		await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
			wids: [e],
			context: "voip",
			phash: null
		});
	}
	async function ye(e, t, n, a, i, l) {
		var s = le();
		if (await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
			o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "call_blocked");
			return;
		}
		o("WAWebVoipActivityTracker").startActivityTracking(), o("WAWebVoipActivityTracker").startUiActivityTracking(), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.VOIP_READY_START);
		var u = await _e({
			isGroup: !1,
			isJoin: !1,
			isVideo: n
		});
		if (u == null) {
			o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "voip_not_ready");
			return;
		}
		o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.VOIP_READY_END);
		var c = u.signal;
		ge(e);
		var d = le();
		o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_START);
		var m = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(n);
		o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.DEVICE_PERMISSIONS_END);
		var p = se(d, le());
		if (!m) {
			o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "permission_denied"), o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
			return;
		}
		var _ = l != null ? l : Ie(), R = o("WAWebLidMigrationUtils").toLid(t), L = o("WAWebLidMigrationUtils").toPn(t);
		if (R == null) if (o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: toLid() returned null, attempting usync for LID resolution"]))).color(te), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.LID_RESOLUTION_SYNC_START), await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
			wids: [t],
			context: "voip",
			phash: null
		}), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.LID_RESOLUTION_SYNC_END), R = o("WAWebLidMigrationUtils").toLid(t), R != null) o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: usync resolved LID successfully"]))).color(te);
		else {
			o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: LID resolution failed after usync, aborting call"]))).sendLogs("voip: startWAWebVoipCall: LID failed after usync, call aborted"), o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "lid_resolution_failed"), o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
			return;
		}
		var E = R != null ? R : L;
		if (E == null) {
			o("WALogger").ERROR(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: peerWid is null"]))).sendLogs("voip: startWAWebVoipCall: peerWid is null"), o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "peer_wid_null"), o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
			return;
		}
		o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SYNC_DEVICE_LIST_START), await he(E, e), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SYNC_DEVICE_LIST_END);
		var k = le();
		o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.COEX_FIRST_TIME_MODAL_START);
		var I = await o("WAWebOpenCoexCallingFirstTimeModalUtils").maybeShowCoexCallingSMBFirstTimeModal(), T = await o("WAWebOpenCoexCallingFirstTimeModalUtils").maybeShowCoexCallingConsumerFirstTimeModal(t);
		(I || T) && o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddAnnotations(e, { bool: { coex_first_time_modal_shown: !0 } }), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.COEX_FIRST_TIME_MODAL_END);
		var D = se(k, le());
		o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_START), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_STACK_INTERFACE_START), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_FANOUT_LIST_START), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_GET_TC_TOKEN_START), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_SEND_TC_TOKEN_START), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_UI_BUNDLE_PRELOAD_START), n && o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_VIDEO_BUNDLE_PRELOAD_START);
		var x = Promise.all([
			o("WAWebVoipStackInterface").getVoipStackInterface().then(function(t) {
				return o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_STACK_INTERFACE_END), t;
			}),
			o("WAWebSendMsgDatabaseJob").getFanOutListJob([E]).then(function(t) {
				return o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_FANOUT_LIST_END), t;
			}),
			o("WAWebVoipPeerTcToken").fetchPeerTcToken(t).then(function(t) {
				return o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_GET_TC_TOKEN_END), t;
			}),
			o("WAWebSendTcTokenChatAction").sendTcToken(E).then(function(t) {
				return o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_SEND_TC_TOKEN_END), t;
			}),
			ce(o("WAWebVoipUiLoadable").requireBundle, "voip-start-call-preload-ui").then(function(t) {
				return o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_UI_BUNDLE_PRELOAD_END), t;
			}),
			n ? ce(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-start-call-preload-video").then(function(t) {
				return o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_VIDEO_BUNDLE_PRELOAD_END), t;
			}) : void 0
		]);
		x.catch(r("WAWebNoop"));
		try {
			var $ = await r("WAPromiseRaceAbort")(x, c), P = $[0], N = $[1], M = $[2];
			if (o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.SETUP_END), P == null) {
				o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: voipStackInterface is null"]))).sendLogs("voip: startWAWebVoipCall: voipStackInterface is null"), o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "voip_stack_interface_null"), o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
				return;
			}
			var w = ke(N, "callStart");
			if (o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: Placing LID call"]))).color(te), o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
				var A;
				o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [HYBRID+] placing 1:1 call via \"", "\" stack (expect \"web\" = WASM)"])), (A = P == null ? void 0 : P.type) != null ? A : "null");
			}
			o("WAWebVoipActivityTracker").trackActivity(n ? o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_VIDEO_CALL : o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_AUDIO_CALL), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_INITIATE_OUTGOING_CALL), o("WAWebCoreActionsODS").logCallAttempt(), n ? o("WAWebCoreActionsODS").logCallOutgoingVideo() : o("WAWebCoreActionsODS").logCallOutgoingAudio(), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.START_CALL_START), await P.startCall(E, w, _, n, (L != null ? L : E).toString({ legacy: !0 }), !1, M, a, i, null), o("WAWebVoipOutgoingCallQpl").voipOutgoingCallQplAddPoint(e, o("WAWebVoipOutgoingCallQpl").VoipOutgoingCallQplPoint.START_CALL_END), ue(_, {
				coexModalMs: D,
				devicePermissionsMs: p,
				intentTs: s,
				successTs: le()
			}), o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplSuccess(e);
		} catch (t) {
			if (c.aborted) {
				o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: cancelled before signaling"]))).color(te), o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplCancel(e, "aborted_before_signaling");
				return;
			}
			throw o("WAWebVoipOutgoingCallQpl").endVoipOutgoingCallQplFail(e, "setup_or_signaling_error"), o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(), t;
		}
		await Ee(n);
	}
	async function Ce(e, t, n, a, i, l) {
		i === void 0 && (i = 0), l === void 0 && (l = 0), o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipCall: Placing Group call"]))).color(te), o("WAWebVoipActivityTracker").startActivityTracking(), o("WAWebVoipActivityTracker").startUiActivityTracking(), o("WAWebVoipActivityTracker").trackActivity(t ? o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_VIDEO_GROUP_CALL : o("WAWebVoipActivityTracker").VoipActivity.START_OUTGOING_AUDIO_GROUP_CALL), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_INITIATE_OUTGOING_CALL);
		var s = await _e({
			isGroup: !0,
			isJoin: !1,
			isVideo: t
		});
		if (s != null) {
			var u = s.signal, c = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(t);
			if (!c) {
				o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall();
				return;
			}
			var d = Ie(), m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), p = m ? o("WAWebContactCollection").ContactCollection.get(m) : null, _ = p ? o("WAWebFrontendContactGetters").getUsername(p) : null, f = Promise.all([
				o("WAWebVoipStackInterface").getVoipStackInterface(),
				Te(e),
				ce(o("WAWebVoipUiLoadable").requireBundle, "voip-start-group-call-preload-ui"),
				t ? ce(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-start-group-call-preload-video") : void 0,
				t ? ce(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-start-group-call-preload-video-group") : void 0
			]);
			f.catch(r("WAWebNoop"));
			try {
				var g, h = await r("WAPromiseRaceAbort")(f, u), y = h[0], C = h[1], b = C.gcDeviceJidsCsv, v = C.gcUserJids, S = C.gcUserPnJids;
				await Promise.all(v.map(function(e) {
					return o("WAWebSendTcTokenChatAction").sendTcToken(e);
				}));
				var I = (g = a == null ? void 0 : a.toString({ legacy: !0 })) != null ? g : "";
				o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
					"voip: startWAWebVoipGroupCall: gid=",
					" users=",
					" name=",
					""
				])), I, v, n).color(te);
				var T = a ? await o("WAWebNotificationIconUtils").getNotificationIconByWid(a, new AbortController().signal, o("WAWebNotificationIconUtils").USER_DEFAULT_ICON) : o("WAWebNotificationIconUtils").USER_DEFAULT_ICON;
				if (u.aborted) {
					o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipGroupCall: cancelled before signaling"]))).color(te);
					return;
				}
				o("WAWebCoreActionsODS").logCallAttempt(), t ? o("WAWebCoreActionsODS").logCallOutgoingGroupVideo() : o("WAWebCoreActionsODS").logCallOutgoingGroupAudio(), await (y == null ? void 0 : y.startGroupCall(S.map(function(e) {
					var t;
					return (t = e == null ? void 0 : e.toString({ legacy: !0 })) != null ? t : "";
				}), v.map(function(e) {
					return e.toString({ legacy: !0 });
				}), b, d, t, I, !1, "", n, T, i, l, o("WAWebUsernameTypes").serializeMaybeUsername(_)));
			} catch (e) {
				if (u.aborted) {
					o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipGroupCall: cancelled before signaling"]))).color(te);
					return;
				}
				throw o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(), e;
			}
			await Ee(t);
		}
	}
	async function be(e, t, n, r) {
		var a, i;
		if (n === void 0 && (n = 0), r === void 0 && (r = 0), !await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded() && await o("WAWebBlockedParticipantCallWarning").maybeShowBlockedParticipantCallWarning(e, "start")) {
			var l = (a = (i = e.groupMetadata) == null ? void 0 : i.participants.toArray()) != null ? a : [];
			await Ce(l.map(function(e) {
				return e.id;
			}), t, e.name || e.formattedTitle, e.id, n, r);
		}
	}
	async function ve(e, t, n, a) {
		if (n === void 0 && (n = 0), a === void 0 && (a = 0), !await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
			var i = e.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e.id);
			});
			if (i.length !== 0) {
				if (i.length === 1) {
					await fe(i[0].id, t, n, a);
					return;
				}
				var l = r("WAWebFbtIntlList")(i.map(function(e) {
					return o("WAWebFrontendContactGetters").getFormattedShortName(e);
				}), r("WAWebFbtIntlList").CONJUNCTIONS.NONE, r("WAWebFbtIntlList").DELIMITERS.COMMA);
				await Ce(i.map(function(e) {
					return e.id;
				}), t, l.toString(), void 0, n, a);
			}
		}
	}
	async function Se(e, t, n, r) {
		if (n === void 0 && (n = 0), r === void 0 && (r = 0), !await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
			var a = e.filter(function(e) {
				return !o("WAWebUserPrefsMeUser").isMeAccount(e) && !e.isBot();
			});
			if (a.length !== 0) {
				if (a.length === 1) {
					await fe(a[0], t, n, r);
					return;
				}
				await Ce(a, t, "", void 0, n, r);
			}
		}
	}
	async function Re(e) {
		var t;
		o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingCallByCallId: callId=", ""])), e).color(te), o("WAWebVoipActivityTracker").startActivityTracking(), o("WAWebVoipActivityTracker").startUiActivityTracking(), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL);
		var n = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(e);
		if (n == null) {
			o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingCallByCallId: no call for ", ""])), e).color(te), o("WAWebToastManager").ToastManager.open(ee.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), o("WAWebVoipActivityTracker").clearAllActivityTracking();
			return;
		}
		var r = n.to;
		if (r == null) {
			o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingCallByCallId: No chat found for call ID ", ""])), e).color(te), o("WAWebToastManager").ToastManager.open(ee.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) })), o("WAWebVoipActivityTracker").clearAllActivityTracking();
			return;
		}
		var a = await o("WAWebFindChatAction").findOrCreateLatestChat(r, "voipNotification"), i = a.chat, l = (t = n.isVideoCall) != null ? t : !1;
		await Le({
			callId: e,
			chat: i,
			isDeviceSwitch: !0,
			isVideo: l,
			lobbyEntryPoint: o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.SECOND_NOTIFICATION
		});
	}
	async function Le(e) {
		var t, n = e.callId, a = e.chat, i = e.isDeviceSwitch, l = i === void 0 ? !1 : i, u = e.isVideo, c = e.joinAndAccept, d = c === void 0 ? !1 : c, m = e.lobbyEntryPoint, p = m === void 0 ? 0 : m;
		if (l && !o("WAWebVoipGatingUtils").isDeviceSwitchEntryPointShown()) {
			o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: device switch entry point hidden, blocking rejoin"]))).color(te), o("WAWebVoipActivityTracker").clearAllActivityTracking();
			return;
		}
		if (!await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
			var _ = await o("WAWebBlockedParticipantCallWarning").maybeShowBlockedParticipantCallWarning(a, "join");
			if (!_) {
				o("WAWebVoipActivityTracker").clearAllActivityTracking();
				return;
			}
			o("WAWebVoipActivityTracker").startActivityTracking(), o("WAWebVoipActivityTracker").startUiActivityTracking();
			var f = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(u);
			if (!f) {
				o("WAWebVoipActivityTracker").clearAllActivityTracking();
				return;
			}
			if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) {
				var g, h = ae == null || (g = ae(r("WAWebWindowsHybridBridgeInitiator").WAWebVoipStartCall)) == null ? void 0 : g.voip;
				if (h == null) {
					o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: VoIP bridge is null"]))).color(te), o("WAWebVoipActivityTracker").clearAllActivityTracking();
					return;
				}
				if (!("joinOngoingCall" in h) || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2511") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2514") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2515") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2516") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2557") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2558") || o("WAWebBuildConstants").WINDOWS_BUILD != null && o("WAWebBuildConstants").WINDOWS_BUILD.startsWith("2559")) {
					o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: unsupported"]))).color(te), o("WAWebVoipActivityTracker").clearAllActivityTracking();
					return;
				}
			}
			if (!o("WAWebVoipGatingUtils").isWinHybridJoinableCallsEnabled()) {
				o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: not enabled"]))), o("WAWebVoipActivityTracker").clearAllActivityTracking();
				return;
			}
			var y = o("WAWebVoipOngoingCallCollection").WAWebVoipOngoingCallCollection.getByCallId(n);
			if (y == null) {
				o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: no call ", ""])), n).color(te), o("WAWebVoipActivityTracker").clearAllActivityTracking();
				return;
			} else if (y.callCreator == null) {
				o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: no creator ", ""])), n).color(te), await o("WAWebVoipActionWriteCallLogEventUpdateJoinable").cleanupJoinableCallLog(n), o("WAWebToastManager").ToastManager.open(ee.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), o("WAWebVoipActivityTracker").clearAllActivityTracking();
				return;
			}
			o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: joining"]))).color(te), o("WAWebVoipActivityTracker").trackUiActivity(o("WAWebVoipActivityTracker").VoipUiActivity.USER_JOIN_ONGOING_CALL);
			var C = (t = y.callParticipants) != null ? t : [], b = [o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()].concat(C.map(function(e) {
				var t = o("WAWebLidMigrationUtils").toPn(e.participant);
				return t == null && o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: participant dropped - toPn() returned null"]))).sendLogs("voip: StartPNCall: group join participant toPn failed"), t;
			}).filter(function(e) {
				return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
			})), v = await _e({
				isGroup: !0,
				isJoin: !0,
				isVideo: u
			});
			if (v != null) {
				var S = v.signal, R = Promise.all([
					o("WAWebVoipStackInterface").getVoipStackInterface(),
					Te(b, !0),
					ce(o("WAWebVoipUiLoadable").requireBundle, "voip-join-group-call-preload-ui"),
					u ? ce(o("WAWebVoipUiVideoCallLoadable").requireBundle, "voip-join-group-call-preload-video") : void 0,
					u ? ce(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-join-group-call-preload-video-group") : void 0
				]);
				R.catch(r("WAWebNoop"));
				try {
					var L, E = await r("WAPromiseRaceAbort")(R, S), k = E[0], I = E[1], T = I.gcDeviceJidsCsv, D = I.gcUserJids, q = I.gcUserPnJids;
					await Promise.all(D.map(function(e) {
						return o("WAWebSendTcTokenChatAction").sendTcToken(e);
					}));
					var U = a.id.isGroup() ? a.id.toString({ legacy: !0 }) : "";
					if (o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: startWAWebVoipGroupCallPN: groupJid: ", ""])), U).color(te), S.aborted) {
						o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling"]))).color(te);
						return;
					}
					o("WAWebCoreActionsODS").logCallGroupJoin(), await (k == null ? void 0 : k.joinOngoingCall(n, r("nullthrows")(y.callCreator).toString({
						legacy: !0,
						formatIncludeDevice: !0
					}), "", q.map(function(e) {
						var t;
						return (t = e == null ? void 0 : e.toString({ legacy: !0 })) != null ? t : "";
					}), D.map(function(e) {
						return e.toString({ legacy: !0 });
					}), T, u, U, 0, !0, (L = y.callLinkToken) != null ? L : "", !1, "", d, a.name || a.formattedTitle, p, l));
				} catch (e) {
					if (S.aborted) {
						o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingWAWebVoipGroupCallPN: cancelled before signaling"]))).color(te);
						return;
					}
					throw o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall(), e;
				}
			}
		}
	}
	async function Ee(e) {
		try {
			if ("permissions" in navigator) {
				if (e) {
					var t = await navigator.permissions.query({ name: "camera" }), n = t.state === "granted";
					n || o("WALogger").LOG(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: JS doesn't have camera permissions for a video call"])));
				}
				var r = await navigator.permissions.query({ name: "microphone" }), a = r.state === "granted";
				a || o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose(["voip: JS doesn't have microphone permissions for a call"])));
			}
		} catch (e) {
			o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose(["voip: failed to check device permissions: ", ""])), e);
		}
	}
	function ke(e, t) {
		return e.length > ie ? (o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose(["voip:", ": too many devices, removing companions"])), t), e.filter(function(e) {
			return !e.isCompanion();
		}).map(function(e) {
			return e.toString({
				legacy: !0,
				formatIncludeDevice: !0
			});
		})) : e.map(function(e) {
			return e.toString({
				legacy: !0,
				formatIncludeDevice: !0
			});
		});
	}
	function Ie() {
		var e = "00" + o("WARandomHex").randomHex(16).substr(2);
		return o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose(["voip:generateCallId: ", ""])), e).color(te), e;
	}
	async function Te(e, t) {
		t === void 0 && (t = !1);
		var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), r = e.map(function(e) {
			return o("WAWebLidMigrationUtils").toLid(e);
		}), a = e.filter(function(e, t) {
			return r[t] == null;
		});
		if (a.length > 0) {
			o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose(["voip: getVoipParticipantJids: ", " participants unresolved, attempting usync"])), a.length).color(te), await Promise.all(a.map(function(e) {
				return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
					wids: [e],
					context: "voip",
					phash: null
				});
			})), r = e.map(function(e) {
				return o("WAWebLidMigrationUtils").toLid(e);
			});
			var i = e.filter(function(e, t) {
				return r[t] == null;
			});
			i.length > 0 ? o("WALogger").ERROR(j || (j = babelHelpers.taggedTemplateLiteralLoose(["voip: getVoipParticipantJids: ", " participants still unresolved after usync, stripping"])), i.length).sendLogs("voip: getVoipParticipantJids: participants stripped after usync") : o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose(["voip: getVoipParticipantJids: usync resolved all participants successfully"]))).color(te);
		}
		var l = [].concat(t ? [n] : [], r.filter(function(e) {
			return e != null && !o("WAWebUserPrefsMeUser").isMeAccount(e);
		})), s = l.map(function(e) {
			return o("WAWebLidMigrationUtils").toPn(e);
		});
		await Promise.all(l.map(function(e) {
			return o("WAWebAdvSyncDeviceListApi").syncDeviceList({
				wids: [e],
				context: "voip",
				phash: null
			});
		}));
		var u = await Promise.all(l.map(function(e) {
			return o("WAWebSendMsgDatabaseJob").getFanOutListJob([e]);
		})), c = u.map(function(e) {
			var t = ke(e, "callStart"), n = t.join(",");
			return n;
		});
		return {
			gcUserJids: l,
			gcUserPnJids: s,
			gcDeviceJidsCsv: c
		};
	}
	async function De(e) {
		if (!await o("WAWebVoipCallBlockedModals").showCallBlockedModalIfNeeded()) {
			o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["voip: inviteToCall called for chat: ", ""])), e.toString());
			try {
				var t, n = e.toString(), a = "", i = "";
				if (e.isLid()) {
					var l, s, u, c;
					i = (l = (s = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : s.toString()) != null ? l : n, a = (u = (c = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : c.toString()) != null ? u : "";
				} else {
					var d, m, p, _;
					if (a = (d = (m = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : m.toString()) != null ? d : n, i = (p = (_ = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : _.toString()) != null ? p : "", !i) {
						var f, g;
						await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
							wids: [e],
							context: "voip",
							phash: null
						}), i = (f = (g = o("WAWebLidMigrationUtils").toLid(e)) == null ? void 0 : g.toString()) != null ? f : "";
					}
				}
				if (!i) {
					o("WALogger").ERROR(X || (X = babelHelpers.taggedTemplateLiteralLoose(["voip: inviteToCall: LID resolution failed for participant, aborting invite"]))).sendLogs("voip: inviteToCall: LID expected but missing");
					return;
				}
				var h = (t = o("WAWebLidMigrationUtils").toLid(e)) != null ? t : e, y = await Promise.all([
					o("WAWebVoipStackInterface").getVoipStackInterface(),
					o("WAWebAdvSyncDeviceListApi").syncDeviceList({
						wids: [h],
						context: "voip",
						phash: null
					}),
					ce(o("WAWebVoipUiLoadable").requireBundle, "voip-invite-to-call-preload-ui"),
					ce(o("WAWebVoipUiVideoGroupCallLoadable").requireBundle, "voip-invite-to-call-preload-video-group")
				]), C = y[0];
				if (!a) {
					var b, v;
					a = (b = (v = o("WAWebLidMigrationUtils").toPn(e)) == null ? void 0 : v.toString()) != null ? b : "";
				}
				var S = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([h]), R = ke(S, "inviteToCall");
				await (C == null ? void 0 : C.inviteToCall(a, i, R)), o("WALogger").LOG(Y || (Y = babelHelpers.taggedTemplateLiteralLoose(["voip: inviteToCall completed successfully for ", ""])), e.toString());
			} catch (t) {
				throw o("WALogger").ERROR(J || (J = babelHelpers.taggedTemplateLiteralLoose(["voip: inviteToCall failed for ", ""])), e.toString()).catching(r("getErrorSafe")(t)), t;
			}
		}
	}
	l.preloadGroupCallBundle = de, l.preloadCallLinkBundles = me, l.startWAWebVoipCall = fe, l.startWAWebVoipGroupCallFromChat = be, l.startWAWebVoipGroupCallFromContacts = ve, l.startWAWebVoipGroupCallFromWids = Se, l.joinOngoingCallByCallId = Re, l.joinOngoingWAWebVoipGroupCallPN = Le, l.inviteToCall = De;
}), 226);
