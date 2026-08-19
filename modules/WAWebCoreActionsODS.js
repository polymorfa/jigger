__d("WAWebCoreActionsODS", ["WAWebODS"], (function(t, n, r, o, a, i, l) {
	function e() {
		r("WAWebODS").incr("web.status.send");
	}
	function s() {
		r("WAWebODS").incr("web.mc_migration.control");
	}
	function u() {
		r("WAWebODS").incr("web.mc_migration.test");
	}
	function c() {
		r("WAWebODS").incr("web.group.create");
	}
	function d() {
		r("WAWebODS").incr("web.group.create.error");
	}
	function m() {
		r("WAWebODS").incr("web.msg.send.channel");
	}
	function p() {
		r("WAWebODS").incr("web.group.add_participant");
	}
	function _() {
		r("WAWebODS").incr("web.group.add_participant.error");
	}
	function f() {
		r("WAWebODS").incr("web.search.has_results");
	}
	function g() {
		r("WAWebODS").incr("web.search.error");
	}
	function h() {
		r("WAWebODS").incr("web.msg.send.error");
	}
	function y() {
		r("WAWebODS").incr("web.msg.send.error.upload");
	}
	var C = !1;
	function b() {
		C = !0;
	}
	function v() {
		return C;
	}
	function S() {
		r("WAWebODS").incr("web.page_load.success");
	}
	function R() {
		r("WAWebODS").incr("web.page_load.success.main");
	}
	function L() {
		r("WAWebODS").incr("web.page_load.success.qr");
	}
	var E = !1;
	function k() {
		E || (E = !0, r("WAWebODS").incr("web.page_load.error"));
	}
	function I() {
		k(), r("WAWebODS").incr("web.page_load.error.storage_init");
	}
	function T() {
		k(), r("WAWebODS").incr("web.page_load.error.js_exception");
	}
	function D() {
		k(), r("WAWebODS").incr("web.page_load.error.unhandled_rejection");
	}
	function x() {
		k(), r("WAWebODS").incr("web.page_load.error.forced_logout");
	}
	function $() {
		k(), r("WAWebODS").incr("web.page_load.error.service_unavailable");
	}
	function P() {
		k(), r("WAWebODS").incr("web.page_load.error.timeout");
	}
	function N() {
		k(), r("WAWebODS").incr("web.page_load.error.history_sync_incomplete");
	}
	function M() {
		r("WAWebODS").incr("web.pair.success");
	}
	function w() {
		r("WAWebODS").incr("web.pair.error");
	}
	function A() {
		r("WAWebODS").incr("web.session.forced_logout");
	}
	function F() {
		r("WAWebODS").incr("web.media.upload.success");
	}
	function O() {
		r("WAWebODS").incr("web.media.upload.error");
	}
	function B() {
		r("WAWebODS").incr("web.media.upload.error.server");
	}
	function W() {
		r("WAWebODS").incr("web.media.upload.error.network");
	}
	function q() {
		r("WAWebODS").incr("web.media.download.success");
	}
	function U() {
		r("WAWebODS").incr("web.media.download.error");
	}
	function V() {
		r("WAWebODS").incr("web.media.download.error.expired");
	}
	function H() {
		r("WAWebODS").incr("web.media.download.error.network");
	}
	function G() {
		r("WAWebODS").incr("web.call.success");
	}
	function z() {
		r("WAWebODS").incr("web.call.error.terminal");
	}
	function j() {
		r("WAWebODS").incr("web.call.attempt");
	}
	function K() {
		r("WAWebODS").incr("web.call.fieldstats.final_received");
	}
	function Q() {
		r("WAWebODS").incr("web.call.fieldstats.wam_handoff_completed");
	}
	function X() {
		r("WAWebODS").incr("web.call.fieldstats.wam_handoff_failed");
	}
	function Y() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_found");
	}
	function J() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_completed");
	}
	function Z() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_failed");
	}
	function ee() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_init_failed");
	}
	function te() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_cleanup_failed");
	}
	function ne() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_parse_failed");
	}
	function re() {
		r("WAWebODS").incr("web.call.fieldstats.persistence_cleanup_failed");
	}
	function oe() {
		r("WAWebODS").incr("web.call.fieldstats.dedup_marker_failed");
	}
	function ae() {
		r("WAWebODS").incr("web.call.fieldstats.recovery_duplicate_suppressed");
	}
	function ie() {
		r("WAWebODS").incr("web.call.fieldstats.watchdog_send");
	}
	function le() {
		r("WAWebODS").incr("web.call.outgoing.audio");
	}
	function se() {
		r("WAWebODS").incr("web.call.outgoing.video");
	}
	function ue() {
		r("WAWebODS").incr("web.call.outgoing.group.audio");
	}
	function ce() {
		r("WAWebODS").incr("web.call.outgoing.group.video");
	}
	function de(e) {
		e ? r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.enabled.attempt") : r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.disabled.attempt");
	}
	function me(e) {
		e ? r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.enabled.failure") : r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.disabled.failure");
	}
	function pe(e) {
		e ? r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.enabled.success") : r("WAWebODS").incr("web.call.video_capture.with_converter.dom_attach.disabled.success");
	}
	function _e() {
		r("WAWebODS").incr("web.call.incoming.accept");
	}
	function fe() {
		r("WAWebODS").incr("web.call.incoming.decline");
	}
	function ge() {
		r("WAWebODS").incr("web.call.incoming.missed");
	}
	function he() {
		r("WAWebODS").incr("web.call.group.join");
	}
	function ye() {
		r("WAWebODS").incr("web.call.group.join_error");
	}
	function Ce() {
		r("WAWebODS").incr("web.call.voip_init.success");
	}
	function be() {
		r("WAWebODS").incr("web.call.voip_init.error");
	}
	function ve() {
		r("WAWebODS").incr("web.call.voip_init.skip_unsupported");
	}
	function Se() {
		r("WAWebODS").incr("web.call.voip_init.wasm_contract_mismatch");
	}
	function Re() {
		r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.bx_key_missing");
	}
	function Le() {
		r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.bx_lookup_failure");
	}
	function Ee() {
		r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.load_attempt");
	}
	function ke() {
		r("WAWebODS").incr("web.call.voip_init.wasm_artifact.content_addressed.load_success");
	}
	function Ie() {
		r("WAWebODS").incr("web.call.voip_init.wasm_artifact.unversioned.load_attempt");
	}
	function Te() {
		r("WAWebODS").incr("web.call.voip_init.wasm_artifact.unversioned.load_success");
	}
	function De() {
		r("WAWebODS").incr("web.call.voip_init.retry_attempt");
	}
	function xe() {
		r("WAWebODS").incr("web.call.voip_init.retry_success");
	}
	function $e() {
		r("WAWebODS").incr("web.call.voip_init.retry_exhausted");
	}
	function Pe() {
		r("WAWebODS").incr("web.call.voip_init.retry_failure");
	}
	function Ne() {
		r("WAWebODS").incr("web.call.voip_init.visibility_retry_attempt");
	}
	function Me() {
		r("WAWebODS").incr("web.call.voip_init.visibility_retry_suppressed");
	}
	function we() {
		r("WAWebODS").incr("web.call.voip_init.visibility_retry_success");
	}
	function Ae() {
		r("WAWebODS").incr("web.call.voip_stack_interface.load_attempt_failure");
	}
	function Fe() {
		r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_exhausted");
	}
	function Oe() {
		r("WAWebODS").incr("web.call.voip_stack_interface.load_retry_success");
	}
	function Be() {
		r("WAWebODS").incr("web.call.browser_unsupported.missing_shared_array_buffer");
	}
	function We(e) {
		e === !0 ? r("WAWebODS").incr("web.call.browser_capability.missing_sab.cross_origin_isolated") : e === !1 ? r("WAWebODS").incr("web.call.browser_capability.missing_sab.not_cross_origin_isolated") : r("WAWebODS").incr("web.call.browser_capability.missing_sab.isolation_unsupported");
	}
	function qe(e) {
		e === !0 ? r("WAWebODS").incr("web.call.browser_capability.missing_atomics.cross_origin_isolated") : e === !1 ? r("WAWebODS").incr("web.call.browser_capability.missing_atomics.not_cross_origin_isolated") : r("WAWebODS").incr("web.call.browser_capability.missing_atomics.isolation_unsupported");
	}
	function Ue(e) {
		e === !0 ? r("WAWebODS").incr("web.call.browser_capability.missing_rtc.cross_origin_isolated") : e === !1 ? r("WAWebODS").incr("web.call.browser_capability.missing_rtc.not_cross_origin_isolated") : r("WAWebODS").incr("web.call.browser_capability.missing_rtc.isolation_unsupported");
	}
	function Ve(e) {
		e === !0 ? r("WAWebODS").incr("web.call.browser_capability.broken_wasm.cross_origin_isolated") : e === !1 ? r("WAWebODS").incr("web.call.browser_capability.broken_wasm.not_cross_origin_isolated") : r("WAWebODS").incr("web.call.browser_capability.broken_wasm.isolation_unsupported");
	}
	function He() {
		r("WAWebODS").incr("web.call.browser_unsupported.missing_atomics");
	}
	function Ge() {
		r("WAWebODS").incr("web.call.browser_unsupported.missing_rtc_peer_connection");
	}
	function ze() {
		r("WAWebODS").incr("web.call.browser_unsupported.broken_voip_wasm");
	}
	function je() {
		r("WAWebODS").incr("web.call.permission.denied");
	}
	function Ke() {
		r("WAWebODS").incr("web.call.permission.device_error");
	}
	function Qe() {
		r("WAWebODS").incr("web.call.screen_share.denied");
	}
	function Xe() {
		r("WAWebODS").incr("web.call.wasm_crash");
	}
	function Ye() {
		r("WAWebODS").incr("web.call.media.mic_error");
	}
	function Je() {
		r("WAWebODS").incr("web.call.media.camera_error");
	}
	function Ze() {
		r("WAWebODS").incr("web.call.network_offline");
	}
	function et() {
		r("WAWebODS").incr("web.call.relay.port_3478");
	}
	function tt() {
		r("WAWebODS").incr("web.call.ice.started.port_3478");
	}
	function nt() {
		r("WAWebODS").incr("web.call.ice.started.port_3480");
	}
	function rt() {
		r("WAWebODS").incr("web.call.ice.connected.port_3478");
	}
	function ot() {
		r("WAWebODS").incr("web.call.ice.connected.port_3480");
	}
	function at() {
		r("WAWebODS").incr("web.call.ice.failed.port_3478");
	}
	function it() {
		r("WAWebODS").incr("web.call.ice.failed.port_3480");
	}
	function lt() {
		r("WAWebODS").incr("web.call.dtls.started.port_3478");
	}
	function st() {
		r("WAWebODS").incr("web.call.dtls.started.port_3480");
	}
	function ut() {
		r("WAWebODS").incr("web.call.dtls.connected.port_3478");
	}
	function ct() {
		r("WAWebODS").incr("web.call.dtls.connected.port_3480");
	}
	function dt() {
		r("WAWebODS").incr("web.call.dtls.failed.stall.port_3478");
	}
	function mt() {
		r("WAWebODS").incr("web.call.dtls.failed.stall.port_3480");
	}
	function pt() {
		r("WAWebODS").incr("web.call.dtls.failed.pc_failed.port_3478");
	}
	function _t() {
		r("WAWebODS").incr("web.call.dtls.failed.pc_failed.port_3480");
	}
	function ft() {
		r("WAWebODS").incr("web.call.sctp.connection_failed.port_3478");
	}
	function gt() {
		r("WAWebODS").incr("web.call.sctp.connection_failed.port_3480");
	}
	function ht() {
		r("WAWebODS").incr("web.call.sctp.connection_cleaned_up.port_3478");
	}
	function yt() {
		r("WAWebODS").incr("web.call.sctp.connection_cleaned_up.port_3480");
	}
	function Ct() {
		r("WAWebODS").incr("web.call.sctp.data_channel_relay_error");
	}
	function bt() {
		r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.no_first_response_timeout");
	}
	function vt() {
		r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.onerror");
	}
	function St() {
		r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.remote_close");
	}
	function Rt() {
		r("WAWebODS").incr("web.call.sctp.data_channel_relay_error.rx_stall_timeout");
	}
	function Lt(e) {
		e: {
			if (e === "retained") {
				r("WAWebODS").incr("web.call.sctp.obsolete_relay.retained");
				break e;
			}
			if (e === "transport_failed") {
				r("WAWebODS").incr("web.call.sctp.obsolete_relay.transport_failed");
				break e;
			}
			if (e === "reconnect_attempted") {
				r("WAWebODS").incr("web.call.sctp.obsolete_relay.reconnect.attempted");
				break e;
			}
			if (e === "reconnect_succeeded") {
				r("WAWebODS").incr("web.call.sctp.obsolete_relay.reconnect.succeeded");
				break e;
			}
			if (e === "reconnect_exhausted") {
				r("WAWebODS").incr("web.call.sctp.obsolete_relay.reconnect.exhausted");
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		}
	}
	function Et() {
		r("WAWebODS").incr("web.call.webtransport.connect.attempted");
	}
	function kt() {
		r("WAWebODS").incr("web.call.webtransport.connect.succeeded");
	}
	function It() {
		r("WAWebODS").incr("web.call.webtransport.connect.failed");
	}
	function Tt(e) {
		e: {
			if (e === "handshake_timeout") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.handshake_timeout");
				break e;
			}
			if (e === "immediate_reject") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.immediate_reject");
				break e;
			}
			if (e === "session_error") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.session_error");
				break e;
			}
			if (e === "stream_error") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.stream_error");
				break e;
			}
			if (e === "aborted") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.aborted");
				break e;
			}
			if (e === "unknown") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.unknown");
				break e;
			}
			if (e === "connection_timeout") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.connection_timeout");
				break e;
			}
			if (e === "invalid_config") {
				r("WAWebODS").incr("web.call.webtransport.connect.fail.invalid_config");
				break e;
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		}
	}
	function Dt() {
		r("WAWebODS").incr("web.call.webtransport.relays.ipv6_only");
	}
	function xt() {
		r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.triggered");
	}
	function $t() {
		r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.skipped_disabled");
	}
	function Pt() {
		r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.sctp_connected");
	}
	function Nt() {
		r("WAWebODS").incr("web.call.webtransport.fallback_to_sctp.sctp_failed");
	}
	function Mt() {
		r("WAWebODS").incr("web.call.webtransport.group_call_anc");
	}
	function wt() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.timeout.foreground");
	}
	function At() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.timeout.absolute");
	}
	function Ft() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.cleanup_shutdown.attempted");
	}
	function Ot() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.cleanup_shutdown.failed");
	}
	function Bt() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.retry_success");
	}
	function Wt() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.background_pause_success");
	}
	function qt() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.started");
	}
	function Ut() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.recovered");
	}
	function Vt() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.exhausted.foreground");
	}
	function Ht() {
		r("WAWebODS").incr("web.call.voip.rpc_ready.hidden_grace.exhausted.absolute");
	}
	function Gt() {
		r("WAWebODS").incr("web.call.voip.rpc_init.timeout.foreground");
	}
	function zt() {
		r("WAWebODS").incr("web.call.voip.rpc_init.timeout.absolute");
	}
	function jt() {
		r("WAWebODS").incr("web.call.voip.rpc_init.background_pause_success");
	}
	function Kt() {
		r("WAWebODS").incr("web.calendar.open.date_marker");
	}
	function Qt() {
		r("WAWebODS").incr("web.calendar.open.search_drawer");
	}
	function Xt() {
		r("WAWebODS").incr("web.calendar.date_selected.date_marker");
	}
	function Yt() {
		r("WAWebODS").incr("web.calendar.date_selected.search_drawer");
	}
	function Jt() {
		r("WAWebODS").incr("web.calendar.open.sticky_date_marker");
	}
	function Zt() {
		r("WAWebODS").incr("web.calendar.date_selected.sticky_date_marker");
	}
	l.logStatusSend = e, l.logMCMigrationControl = s, l.logMCMigrationTest = u, l.logGroupCreate = c, l.logGroupCreateError = d, l.logChannelMsgSend = m, l.logGroupAddParticipant = p, l.logGroupAddParticipantError = _, l.logGlobalSearchHasResults = f, l.logGlobalSearchError = g, l.logMsgSendError = h, l.logMsgSendErrorUpload = y, l.markPageLoadComplete = b, l.isPageLoadComplete = v, l.logPageLoadSuccess = S, l.logPageLoadSuccessMain = R, l.logPageLoadSuccessQr = L, l.logPageLoadError = k, l.logPageLoadErrorStorageInit = I, l.logPageLoadErrorJsException = T, l.logPageLoadErrorUnhandledRejection = D, l.logPageLoadErrorForcedLogout = x, l.logPageLoadErrorServiceUnavailable = $, l.logPageLoadErrorTimeout = P, l.logPageLoadErrorHistorySyncIncomplete = N, l.logPairSuccess = M, l.logPairError = w, l.logSessionForcedLogout = A, l.logMediaUploadSuccess = F, l.logMediaUploadError = O, l.logMediaUploadErrorServer = B, l.logMediaUploadErrorNetwork = W, l.logMediaDownloadSuccess = q, l.logMediaDownloadError = U, l.logMediaDownloadErrorExpired = V, l.logMediaDownloadErrorNetwork = H, l.logCallSuccess = G, l.logCallErrorTerminal = z, l.logCallAttempt = j, l.logCallFieldstatsFinalReceived = K, l.logCallFieldstatsHandoffCompleted = Q, l.logCallFieldstatsHandoffFailed = X, l.logCallFieldstatsRecoveryFound = Y, l.logCallFieldstatsRecoveryCompleted = J, l.logCallFieldstatsRecoveryFailed = Z, l.logCallFieldstatsRecoveryInitFailed = ee, l.logCallFieldstatsRecoveryCleanupFailed = te, l.logCallFieldstatsRecoveryParseFailed = ne, l.logCallFieldstatsPersistenceCleanupFailed = re, l.logCallFieldstatsDedupMarkerFailed = oe, l.logCallFieldstatsRecoveryDuplicateSuppressed = ae, l.logCallFieldstatsWatchdogSend = ie, l.logCallOutgoingAudio = le, l.logCallOutgoingVideo = se, l.logCallOutgoingGroupAudio = ue, l.logCallOutgoingGroupVideo = ce, l.logCallVideoCaptureWithConverterPlayAttempt = de, l.logCallVideoCaptureWithConverterPlayFailure = me, l.logCallVideoCaptureWithConverterPlaySuccess = pe, l.logCallIncomingAccept = _e, l.logCallIncomingDecline = fe, l.logCallIncomingMissed = ge, l.logCallGroupJoin = he, l.logCallGroupJoinError = ye, l.logCallVoipInitSuccess = Ce, l.logCallVoipInitError = be, l.logCallVoipInitSkipUnsupported = ve, l.logCallVoipInitWasmContractMismatch = Se, l.logCallVoipInitWasmArtifactContentAddressedBxKeyMissing = Re, l.logCallVoipInitWasmArtifactContentAddressedBxLookupFailure = Le, l.logCallVoipInitWasmArtifactContentAddressedLoadAttempt = Ee, l.logCallVoipInitWasmArtifactContentAddressedLoadSuccess = ke, l.logCallVoipInitWasmArtifactUnversionedLoadAttempt = Ie, l.logCallVoipInitWasmArtifactUnversionedLoadSuccess = Te, l.logCallVoipInitRetryAttempt = De, l.logCallVoipInitRetrySuccess = xe, l.logCallVoipInitRetryExhausted = $e, l.logCallVoipInitRetryFailure = Pe, l.logCallVoipInitVisibilityRetryAttempt = Ne, l.logCallVoipInitVisibilityRetrySuppressed = Me, l.logCallVoipInitVisibilityRetrySuccess = we, l.logCallVoipStackInterfaceLoadAttemptFailure = Ae, l.logCallVoipStackInterfaceLoadRetryExhausted = Fe, l.logCallVoipStackInterfaceLoadRetrySuccess = Oe, l.logCallBrowserUnsupportedMissingSAB = Be, l.logCallBrowserCapabilityMissingSAB = We, l.logCallBrowserCapabilityMissingAtomics = qe, l.logCallBrowserCapabilityMissingRTC = Ue, l.logCallBrowserCapabilityBrokenWasm = Ve, l.logCallBrowserUnsupportedMissingAtomics = He, l.logCallBrowserUnsupportedMissingRTC = Ge, l.logCallBrowserUnsupportedBrokenWasm = ze, l.logCallPermissionDenied = je, l.logCallPermissionDeviceError = Ke, l.logCallScreenShareDenied = Qe, l.logCallWasmCrash = Xe, l.logCallMediaMicError = Ye, l.logCallMediaCameraError = Je, l.logCallNetworkOffline = Ze, l.logCallRelayPort3478 = et, l.logCallIceStartedPort3478 = tt, l.logCallIceStartedPort3480 = nt, l.logCallIceConnectedPort3478 = rt, l.logCallIceConnectedPort3480 = ot, l.logCallIceFailedPort3478 = at, l.logCallIceFailedPort3480 = it, l.logCallDtlsStartedPort3478 = lt, l.logCallDtlsStartedPort3480 = st, l.logCallDtlsConnectedPort3478 = ut, l.logCallDtlsConnectedPort3480 = ct, l.logCallDtlsFailedStallPort3478 = dt, l.logCallDtlsFailedStallPort3480 = mt, l.logCallDtlsFailedPcFailedPort3478 = pt, l.logCallDtlsFailedPcFailedPort3480 = _t, l.logCallSctpConnectionFailedPort3478 = ft, l.logCallSctpConnectionFailedPort3480 = gt, l.logCallSctpConnectionCleanedUpPort3478 = ht, l.logCallSctpConnectionCleanedUpPort3480 = yt, l.logCallDataChannelRelayError = Ct, l.logCallDataChannelRelayErrorNoFirstResponseTimeout = bt, l.logCallDataChannelRelayErrorOnError = vt, l.logCallDataChannelRelayErrorRemoteClose = St, l.logCallDataChannelRelayErrorRxStallTimeout = Rt, l.logCallSctpObsoleteRelayEvent = Lt, l.logCallWebtransportConnectAttempted = Et, l.logCallWebtransportConnectSucceeded = kt, l.logCallWebtransportConnectFailed = It, l.logCallWebtransportConnectFailByCategory = Tt, l.logCallWebtransportRelaysIpv6Only = Dt, l.logCallWebtransportFallbackToSctpTriggered = xt, l.logCallWebtransportFallbackToSctpSkippedDisabled = $t, l.logCallWebtransportFallbackToSctpSctpConnected = Pt, l.logCallWebtransportFallbackToSctpSctpFailed = Nt, l.logCallWebtransportGroupCallAnc = Mt, l.logCallVoipRpcReadyTimeoutForeground = wt, l.logCallVoipRpcReadyTimeoutAbsolute = At, l.logCallVoipRpcReadyCleanupShutdownAttempted = Ft, l.logCallVoipRpcReadyCleanupShutdownFailed = Ot, l.logCallVoipRpcReadyRetrySuccess = Bt, l.logCallVoipRpcReadyBackgroundPauseSuccess = Wt, l.logCallVoipRpcReadyHiddenGraceStarted = qt, l.logCallVoipRpcReadyHiddenGraceRecovered = Ut, l.logCallVoipRpcReadyHiddenGraceExhaustedForeground = Vt, l.logCallVoipRpcReadyHiddenGraceExhaustedAbsolute = Ht, l.logCallVoipRpcInitTimeoutForeground = Gt, l.logCallVoipRpcInitTimeoutAbsolute = zt, l.logCallVoipRpcInitBackgroundPauseSuccess = jt, l.logCalendarOpenFromDateMarker = Kt, l.logCalendarOpenFromSearchDrawer = Qt, l.logCalendarDateSelectedFromDateMarker = Xt, l.logCalendarDateSelectedFromSearchDrawer = Yt, l.logCalendarOpenFromStickyDateMarker = Jt, l.logCalendarDateSelectedFromStickyDateMarker = Zt;
}), 98);
