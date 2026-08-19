__d("WAWebVoipStackInterfaceWorkerProxy", [
	"WABase64",
	"WALogger",
	"WAWap",
	"WAWebABProps",
	"WAWebBackendApi",
	"WAWebBweMLModelManager",
	"WAWebCoreActionsODS",
	"WAWebLowEndDeviceExperimentGating",
	"WAWebNoop",
	"WAWebUA",
	"WAWebVisibilityAwareTimeout",
	"WAWebVoipABPropConfig",
	"WAWebVoipAudioCaptureAndPlayback",
	"WAWebVoipGatingUtils",
	"WAWebVoipJsWorkerThread",
	"WAWebVoipJsonParsersWeb",
	"WAWebVoipLobbyEntryPointStore",
	"WAWebVoipLogDrainer",
	"WAWebVoipMessagePortRpc",
	"WAWebVoipP2PConnectionManager",
	"WAWebVoipPerfOptimizations",
	"WAWebVoipQplHelpers",
	"WAWebVoipRelayConnectionUtils",
	"WAWebVoipRelayOverrides",
	"WAWebVoipScreenShareStreamKey",
	"WAWebVoipSctpConnectionManager",
	"WAWebVoipStorageInit",
	"WAWebVoipTransportFallbackTracker",
	"WAWebVoipVideoCaptureFpsTracker",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"WAWebVoipVideoWebCodecsRenderer",
	"WAWebVoipWasmHeapMonitor",
	"WAWebVoipWebCodecsEncoderState",
	"WAWebVoipWebTransportConnectionManager",
	"err",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j;
	function K() {
		var t = {};
		for (var n of r("WAWebVoipABPropConfig")) {
			var a = n.abProp, i = n.type, l = n.wasmKey;
			try {
				t[l] = {
					value: o("WAWebABProps").getABPropConfigValue(a),
					type: i
				};
			} catch (t) {
				o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: skipping unknown AB prop ", ""])), a);
			}
		}
		return t;
	}
	var Q = 9e4, X = 300 * 1e3, Y = 45 * 1e3, J = 600 * 1e3, Z = 9e4, ee = 300 * 1e3;
	function te() {
		return "hidden=" + String(document.hidden) + " visibility=" + document.visibilityState + " focus=" + String(document.hasFocus());
	}
	function ne(e) {
		e === "foreground" ? o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutForeground() : o("WAWebCoreActionsODS").logCallVoipRpcReadyTimeoutAbsolute();
	}
	function re(e) {
		e === "foreground" ? o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutForeground() : o("WAWebCoreActionsODS").logCallVoipRpcInitTimeoutAbsolute();
	}
	function oe() {
		try {
			return r("justknobx")._("1699");
		} catch (e) {
			return !1;
		}
	}
	function ae() {
		var e, t = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"), n = 0, a = null, i = !1;
		function l(e, t, n) {
			return new Promise(function(a, i) {
				var l = !1, p = null, _ = !1, f = null, g = function() {
					var t = p;
					t != null && (e.worker.removeMessageListener("voipRpcReady", t), p = null);
				}, h = function() {
					f != null && (f.cancel(), f = null);
				}, y = function(a, u) {
					if (!l) {
						l = !0, g(), h(), n.close("RPC ready timeout"), ne(a);
						var e = a === "foreground" ? "foreground timeout" : "absolute timeout";
						o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [WorkerProxy] RPC ready timeout token=",
							" reason=",
							" wallElapsed=",
							"ms visibleElapsed=",
							"ms ",
							""
						])), t, e, u.wallMs.toFixed(1), u.visibleMs.toFixed(1), te()), i(r("err")("voip: [WorkerProxy] timeout waiting for RPC ready (token=" + t + ", reason=" + e + ")"));
					}
				}, C = function(n) {
					o("WAWebCoreActionsODS").logCallVoipRpcReadyHiddenGraceStarted(), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WorkerProxy] RPC ready deferring teardown while hidden token=",
						" wallElapsed=",
						"ms ",
						""
					])), t, n.wallMs.toFixed(1), te()), f = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
						foregroundMs: Y,
						absoluteMs: J,
						onTimeout: function(t, r) {
							t === "foreground" ? o("WAWebCoreActionsODS").logCallVoipRpcReadyHiddenGraceExhaustedForeground() : o("WAWebCoreActionsODS").logCallVoipRpcReadyHiddenGraceExhaustedAbsolute(), y("absolute", {
								wallMs: n.wallMs + r.wallMs,
								visibleMs: n.visibleMs + r.visibleMs,
								wasBackgroundPaused: n.wasBackgroundPaused || r.wasBackgroundPaused
							});
						}
					});
				}, b = o("WAWebVisibilityAwareTimeout").startVisibilityAwareTimeout({
					foregroundMs: Q,
					absoluteMs: X,
					onTimeout: function(t, n) {
						if (!l) {
							if (oe() && t === "absolute" && document.hidden && !_) {
								_ = !0, C(n);
								return;
							}
							y(t, n);
						}
					},
					onPause: function(n) {
						o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [WorkerProxy] RPC ready wait paused token=",
							" visibleElapsed=",
							"ms ",
							""
						])), t, n.visibleMs.toFixed(1), te());
					},
					onResume: function(n) {
						o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [WorkerProxy] RPC ready wait resumed token=",
							" visibleElapsed=",
							"ms ",
							""
						])), t, n.visibleMs.toFixed(1), te());
					}
				});
				p = e.worker.addMessageListener("voipRpcReady", function(e) {
					if (e.token === t && !l) {
						l = !0;
						var n = b.cancel();
						g(), _ && o("WAWebCoreActionsODS").logCallVoipRpcReadyHiddenGraceRecovered(), h(), n.wasBackgroundPaused && o("WAWebCoreActionsODS").logCallVoipRpcReadyBackgroundPauseSuccess(), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [WorkerProxy] RPC ready ack token=",
							" wallElapsed=",
							"ms visibleElapsed=",
							"ms ",
							""
						])), t, n.wallMs.toFixed(1), n.visibleMs.toFixed(1), te()), a();
					}
				});
			});
		}
		function ae() {
			var e = a;
			if (e != null) return e;
			var s = (async function() {
				var e = await t;
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [WorkerProxy] WASM loaded, creating JsWorkerThread"]))), e.initVoipLogging(), o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_START);
				var a = await r("WAWebVoipJsWorkerThread").create(e).finally(function() {
					o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WORKER_CREATE_END);
				});
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [WorkerProxy] JsWorkerThread created"])));
				var s = new MessageChannel(), u = new (o("WAWebVoipMessagePortRpc")).MessagePortRpc(s.port1);
				u.start(), o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_START);
				var c = n++, d = l(a, c, u);
				o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [WorkerProxy] posting startVoipRpc token=",
					" ",
					""
				])), c, te()), a.worker.postMessage({
					type: "cmd",
					cmd: "jsWorkerCmd",
					jsWorkerCmd: "startVoipRpc",
					rpcPort: s.port2,
					token: c
				}, [s.port2]);
				try {
					await d.finally(function() {
						o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.RPC_SETUP_END);
					});
				} catch (e) {
					throw u.close("RPC ready failure"), o("WAWebCoreActionsODS").logCallVoipRpcReadyCleanupShutdownAttempted(), a.shutdown().catch(function(e) {
						o("WAWebCoreActionsODS").logCallVoipRpcReadyCleanupShutdownFailed(), o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [WorkerProxy] shutdown after RPC fail: ", ""])), String(e));
					}), e;
				}
				return o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [WorkerProxy] RPC channel ready"]))), i && (i = !1, o("WAWebCoreActionsODS").logCallVoipRpcReadyRetrySuccess()), {
					jsWorker: a,
					rpc: u
				};
			})();
			return a = s, s.catch(function(e) {
				a === s && (a = null, i = !0, o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [WorkerProxy] cleared failed worker lifecycle: ",
					" ",
					""
				])), String(e), te()));
			}), s;
		}
		async function ie(e, t, n) {
			var r = await ae(), o = r.rpc;
			o.fire(e, t, n);
		}
		async function le(e, t, n) {
			var r = await ae(), o = r.rpc;
			return o.invoke(e, t, n);
		}
		async function se(e, t, n) {
			var r = await ae(), a = r.rpc;
			return a.invokeWithVisibilityAwareTimeout(e, t, {
				foregroundMs: Z,
				absoluteMs: ee,
				onTimeout: re,
				onBackgroundPauseSuccess: o("WAWebCoreActionsODS").logCallVoipRpcInitBackgroundPauseSuccess
			}, n);
		}
		function ue(e) {
			var t = a;
			t != null && (a = null, i = !0, o("WAWebVoipLogDrainer").stopLogDrainer(), o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [WorkerProxy] cleared worker lifecycle after init failure: ",
				" ",
				""
			])), String(e), te()), t.then(function(e) {
				var t = e.jsWorker, n = e.rpc;
				n.close("VoIP init failure"), t.shutdown().catch(function(e) {
					o("WALogger").WARN(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [WorkerProxy] worker shutdown after init failure failed: ", ""])), String(e));
				});
			}).catch(r("WAWebNoop")));
		}
		var ce = {
			onVoipReady: e = r("WAWebNoop"),
			onCallEvent: e,
			initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback").initCaptureDriverJS,
			startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
			stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS
		};
		return {
			type: "web",
			parsers: r("WAWebVoipJsonParsersWeb"),
			voipInit: async function(n, r, a) {
				var e = await ae(), i = e.rpc, l = await t;
				o("WAWebVoipGatingUtils").resetWebTransportFallbackState(), o("WAWebVoipGatingUtils").isWebTransportEnabled() && (o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(function(e, t, n) {
					i.fire("handleOnTransportMessage", {
						packet: e,
						ip: t,
						port: n
					}, [e]);
				}), o("WAWebVoipGatingUtils").isWebTransportFallbackEnabled() ? (o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Registering SCTP fallback handler (abprop on, worker proxy)"]))), o("WAWebVoipWebTransportConnectionManager").registerFallbackHandler(function(e) {
					o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Falling back to SCTP after connect failure (worker proxy)"]))).sendLogs("webtransport-fallback-handler-invoked"), o("WAWebVoipGatingUtils").markWebTransportFellBack(), o("WAWebVoipTransportFallbackTracker").markFallbackTriggered(), o("WAWebVoipWebTransportConnectionManager").closeAllConnections(), e != null ? o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(e) : o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Fallback handler had no cached relay list to replay"]))).sendLogs("webtransport-fallback-no-relay-list");
				})) : o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] SCTP fallback disabled (abprop off) — no handler registered"])))), o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.LOG_RING_BUFFER) && o("WAWebVoipLogDrainer").startLogDrainer(l), o("WAWebVoipStorageInit").initVoipStorageAndMLCache(l);
				var s = !1, u = !1;
				o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WEBCODECS_PROBE_START);
				try {
					await o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.init();
					var c = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.getRendererType();
					s = c === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264;
					var d = o("WAWebABProps").getABPropConfigValue("enable_webcodec_video_encode"), m = s || await o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer.checkAvailability();
					u = !o("WAWebUA").UA.isFirefox && m && d === !0 ? await o("WAWebVoipWebCodecsEncoderState").checkEncoderSupport() : !1;
				} catch (e) {
					o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: video cap detect failed, passthrough off: ", ""])), e);
				}
				o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.WEBCODECS_PROBE_END), o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [WorkerProxy] dec=",
					" enc=",
					""
				])), s, u), o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] enabled=", ""])), u), o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(u), o("WALogger").LOG(T || (T = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] WebCodecs encoder state ", ""])), u);
				var p = K();
				p.enable_passthrough_video_decoder = {
					value: s,
					type: "bool"
				}, p.enable_webcodec_video_encode = {
					value: u,
					type: "bool"
				}, o("WAWebLowEndDeviceExperimentGating").shouldDisableSoftwareAudioProcessing() && (p.ns_builtin_available = {
					value: !0,
					type: "bool"
				}, p.disable_sw_ns_when_builtin_available = {
					value: !0,
					type: "bool"
				}, p.ml_ns_skip_processing = {
					value: !0,
					type: "bool"
				}, p.disable_agc = {
					value: !0,
					type: "bool"
				}, p.hw_aec_available = {
					value: !0,
					type: "bool"
				}, p.disable_sw_ec_when_builtin_available = {
					value: !0,
					type: "bool"
				}, p.disable_standalone_agc = {
					value: !0,
					type: "bool"
				}, p.disable_eq = {
					value: !0,
					type: "bool"
				}), o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_START);
				try {
					await se("voipInit", {
						selfJid: n,
						selfUserJid: r,
						selfLid: a,
						abProps: p
					});
				} catch (e) {
					throw ue(e), e;
				} finally {
					o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END);
				}
				o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(l, "voip_stack_init");
				var _ = l.getWebP2PVirtualIpv4(), f = l.getWebP2PVirtualIpv6(), g = l.getWebP2PVirtualPort();
				o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(_, f, g), o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(function(e) {
					ie("handleOnTransportMessage", {
						packet: e,
						ip: _,
						port: g
					}, [e]);
				});
				var h = !1;
				o("WAWebVoipP2PConnectionManager").registerOnDataChannelStateChange(function(e) {
					e === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ? (h = !0, o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose(["voip: P2P DataChannel opened, notifying WASM active=true"]))), ie("notifyWebP2PChannelReady", {
						active: !0,
						useIPv6: !1
					})) : h && (h = !1, o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["voip: P2P DataChannel ", " (was open), WASM active=false"])), e), ie("notifyWebP2PChannelReady", {
						active: !1,
						useIPv6: !1
					}));
				});
			},
			setHideMyIp: async function(t) {
				o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: setHideMyIp called with hideMyIp=", ""])), t), await se("setHideMyIp", { hideMyIp: t });
			},
			handleSignOut: function() {
				if (o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: handleSignOut: cleaning up all connections"]))), i = !1, o("WAWebVoipLogDrainer").stopLogDrainer(), o("WAWebVoipGatingUtils").isWebTransportEnabled() ? o("WAWebVoipWebTransportConnectionManager").closeAllConnections() : (o("WAWebVoipWebTransportConnectionManager").closeAllConnections(), o("WAWebVoipSctpConnectionManager").cleanupAllConnections()), o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(), o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(), o("WAWebVoipGatingUtils").resetWebTransportFallbackState(), a != null) {
					var e = a;
					a = null, e.then(function(e) {
						var t = e.jsWorker, n = e.rpc;
						return n.close("sign out"), t.shutdown();
					}).catch(function(e) {
						o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: [handleSignOut] worker shutdown error: ", ""])), e);
					});
				}
			},
			startCall: async function(n, r, a, i, l, s, u) {
				o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1), o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint();
				var e = await t;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				}), await ie("startCall", {
					peerJid: n.toString({ legacy: !0 }),
					deviceJids: r,
					callId: a,
					useVideo: i,
					phoneNumberJid: l,
					isFromDialer: s,
					tcToken: u
				});
			},
			startGroupCall: async function(n, r, a, i, l, s, u, c, d, m, p, _, f) {
				if (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0), !o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
					o("WALogger").ERROR(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: startGroupCall: Web group calling is not enabled"])));
					return;
				}
				o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(_ != null ? _ : null, i);
				var e = await t;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				}), await ie("startGroupCall", {
					pnUserJids: n,
					lidUserJids: r,
					deviceJidsCsv: a,
					callId: i,
					useVideo: l,
					groupJid: s,
					isLightWeight: u,
					scheduleId: c,
					chatName: d,
					chatIcon: m,
					callFromUI: p != null ? p : 0,
					lobbyEntryType: _ != null ? _ : 0,
					username: f != null ? f : ""
				});
			},
			acceptCall: async function(t, n) {
				o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint(), await ie("acceptCall", {
					isMicEnabled: t,
					isCameraEnabled: n
				});
			},
			rejectCall: async function() {
				await ie("rejectCall", {});
			},
			endCall: async function(t, n) {
				o("WAWebVoipGatingUtils").isWebTransportEnabled() && o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
				try {
					await ie("endCall", {
						endCallReason: t,
						sendTerminate: n
					});
				} finally {
					o("WAWebVoipGatingUtils").isWebTransportEnabled() && o("WAWebVoipWebTransportConnectionManager").closeAllConnections(), o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(), o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(), o("WAWebVoipGatingUtils").resetWebTransportFallbackState();
				}
			},
			rejectCallWithoutCallContext: async function(t, n, r, o, a, i, l) {
				await ie("rejectCallWithoutCallContext", {
					callId: t,
					isGroupCall: n,
					peerJid: r,
					callCreatorJid: o,
					reason: a,
					retryCount: i,
					registration: l
				});
			},
			joinOngoingCall: async function(t, n, r, a, i, l, s, u, c, d, m, p, _, f, g, h, y) {
				if (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0), !o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
					o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingCall: Web group calling is not enabled"])));
					return;
				}
				o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(h != null ? h : null, t), await ie("joinOngoingCall", {
					callId: t,
					callCreatorJid: n,
					initialPeerJid: r,
					groupParticipantsPnUserJid: a,
					groupParticipantsLidUserJid: i,
					groupParticipantsDeviceJidsCsv: l,
					hasVideo: s,
					groupJid: u,
					initialGroupTransactionId: c,
					callCreatorIsNotContact: d,
					callLinkCode: m,
					isLightweight: p,
					scheduledId: _,
					joinAndAccept: f,
					chatName: g,
					lobbyEntryType: h != null ? h : 0,
					isDeviceSwitch: y != null ? y : !1
				});
			},
			simulateNativeAnr: e,
			handleDeviceJidList: e,
			previewCallLink: async function(t, n, r, a, i) {
				if (!o("WAWebVoipGatingUtils").callLinksEnabled()) return o("WALogger").ERROR(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: previewCallLink: Call link feature is not enabled"]))), -1;
				var e = 22;
				if (t.length !== e) return o("WALogger").ERROR(B || (B = babelHelpers.taggedTemplateLiteralLoose([
					"voip: previewCallLink: invalid token length ",
					", expected ",
					""
				])), t.length, e), -1;
				o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(r != null ? r : null, null);
				var l = await le("previewCallLink", {
					token: t,
					videoEnabled: n,
					lobbyEntryType: r != null ? r : 0,
					username: a != null ? a : "",
					videoMuted: i != null ? i : !1
				});
				return l !== 0 && (o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: previewCallLink: failed with status ", ""])), String(l)), o("WAWebVoipLobbyEntryPointStore").resetLobbyEntryPoint()), Number(l);
			},
			joinCallLink: async function() {
				if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
					o("WALogger").ERROR(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: joinCallLink: Call link feature is not enabled"])));
					return;
				}
				await ie("joinCallLink", {});
			},
			previewAndJoinCallLink: async function(n, r, a, i, l, s) {
				if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
					o("WALogger").ERROR(U || (U = babelHelpers.taggedTemplateLiteralLoose(["voip: previewAndJoinCallLink: call links disabled"])));
					return;
				}
				o("WAWebVoipLobbyEntryPointStore").setLobbyEntryPoint(a != null ? a : null, null);
				var e = await t;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(V || (V = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				}), await ie("previewAndJoinCallLink", {
					token: n,
					videoEnabled: r,
					lobbyEntryType: a != null ? a : 0,
					username: i != null ? i : "",
					videoMuted: l != null ? l : !1,
					pushName: s != null ? s : ""
				});
			},
			handleIncomingSignalingOffer: async function(n, a, i, l, s, u, c, d, m) {
				var e = await t;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(H || (H = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				});
				var p = n.node();
				r("justknobx")._("360") && o("WAWebVoipRelayOverrides").overrideRelayIp(p);
				var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)), f = l != null ? String(l) : "0", g = s != null ? String(s) : "0";
				await ie("handleIncomingSignalingOffer", {
					b64Stanza: _,
					msgPlatform: a,
					msgVersion: i,
					msgEStr: f,
					msgTStr: g,
					msgOffline: u,
					isOfferNotContact: c,
					peerJid: d,
					tcToken: m
				});
			},
			handleIncomingSignalingMessage: async function(t, n, a, i, l, s, u, c) {
				var e = t.node();
				r("justknobx")._("360") && o("WAWebVoipRelayOverrides").overrideRelayIp(e);
				var d = o("WABase64").encodeB64(o("WAWap").encodeStanza(e)), m = i != null ? String(i) : "0", p = l != null ? String(l) : "0";
				await ie("handleIncomingSignalingMessage", {
					b64Stanza: d,
					msgPlatform: n,
					msgVersion: a,
					msgEStr: m,
					msgTStr: p,
					msgOffline: s,
					peerJid: u,
					tcToken: c
				});
			},
			handleIncomingSignalingAck: async function(t) {
				var e = t.ackInfoError, n = t.ackInfoType, a = t.peerJid, i = t.tcToken, l = t.xmlNode, s = l.node();
				r("justknobx")._("360") && o("WAWebVoipRelayOverrides").overrideRelayIp(s);
				var u = o("WABase64").encodeB64(o("WAWap").encodeStanza(s));
				await ie("handleIncomingSignalingAck", {
					b64Stanza: u,
					ackInfoError: e,
					ackInfoType: n,
					peerJid: a,
					tcToken: i
				});
			},
			handleIncomingSignalingReceipt: async function(t, n, a) {
				var e = t.node();
				r("justknobx")._("360") && o("WAWebVoipRelayOverrides").overrideRelayIp(e);
				var i = o("WABase64").encodeB64(o("WAWap").encodeStanza(e));
				await ie("handleIncomingSignalingReceipt", {
					b64Stanza: i,
					peerJid: n,
					tcToken: a
				});
			},
			resendOfferOnDecryptionFailure: async function(t, n) {
				await ie("resendOfferOnDecryptionFailure", {
					peerJid: t,
					callId: n
				});
			},
			resendEncRekeyRetry: async function(t, n) {
				await ie("resendEncRekeyRetry", {
					peerJid: t,
					retryCount: n
				});
			},
			notifyDeviceIdentityChangedOrDeleted: e,
			handleOnTransportMessage: async function(t, n, r) {
				await ie("handleOnTransportMessage", {
					packet: t,
					ip: n,
					port: r
				}, [t]);
			},
			markRelayConnected: async function(t, n) {
				await ie("markRelayConnected", {
					ip: t,
					port: n
				});
			},
			setCallMute: async function(t) {
				var e = await le("setCallMute", { enable: t });
				return Number(e);
			},
			setCallVideoMute: async function(t) {
				var e = await le("setCallVideoMute", { enable: t });
				return Number(e);
			},
			videoStreamPause: async function() {
				var e = await le("videoStreamPause", {});
				return Number(e);
			},
			videoStreamResume: async function() {
				var e = await le("videoStreamResume", {});
				return Number(e);
			},
			broadcastVideoState: async function() {
				var e = await le("broadcastVideoState", {});
				return Number(e);
			},
			sendReaction: async function(t) {
				await ie("sendReaction", { reaction: t });
			},
			raiseHand: async function(t) {
				await ie("raiseHand", { isHandRaised: t });
			},
			notifyUiViewChange: async function(t, n) {
				var e = await le("notifyUiViewChange", {
					viewMode: t,
					pinnedPeerJid: n != null ? n : ""
				});
				return Number(e);
			},
			requestVideoUpgrade: async function() {
				var e = await le("requestVideoUpgrade", {});
				return Number(e);
			},
			getCallInfo: async function() {
				var e = await le("getCallInfo", {});
				return e === "" && o("WALogger").ERROR(G || (G = babelHelpers.taggedTemplateLiteralLoose(["voip: getCallInfo() failed to retrieve call info"]))), String(e != null ? e : "");
			},
			acceptPeerVideo: async function(t) {
				var e = await le("acceptPeerVideo", { jid: t.jid });
				return e !== 0 && o("WALogger").ERROR(z || (z = babelHelpers.taggedTemplateLiteralLoose(["voip: acceptPeerVideo: Failed with status ", ""])), String(e)), Number(e);
			},
			requestPeerMute: async function(t) {
				var e = await le("requestPeerMute", { peerJid: t });
				return Number(e);
			},
			removeCallParticipant: async function(t) {
				var e = await le("removeCallParticipant", { peerJid: t });
				return Number(e);
			},
			waitingRoomAdmit: async function(t) {
				var e = await le("waitingRoomAdmit", { peerJid: t });
				return Number(e);
			},
			waitingRoomDeny: async function(t) {
				var e = await le("waitingRoomDeny", { peerJid: t });
				return Number(e);
			},
			waitingRoomAdmitAll: async function() {
				var e = await le("waitingRoomAdmitAll", {});
				return Number(e);
			},
			waitingRoomToggleActiveCall: async function(t) {
				var e = await le("waitingRoomToggleActiveCall", { enabled: t });
				return Number(e);
			},
			startScreenShare: async function() {
				var e = await le("startScreenShare", {});
				return Number(e);
			},
			stopScreenShare: async function() {
				var e = await le("stopScreenShare", {});
				return Number(e);
			},
			startVideoPreview: async function(t, n) {
				var e = await le("startVideoPreview", {
					callId: t,
					selfJid: n
				});
				return Number(e);
			},
			requestKeyFrame: async function(t) {
				var e = o("WAWebVoipScreenShareStreamKey").getBaseJidFromStreamKey(t), n = await le(o("WAWebVoipScreenShareStreamKey").isScreenShareStreamKey(t) ? "requestAuxiliaryKeyFrame" : "requestKeyFrame", { userJid: e });
				return Number(n);
			},
			updateParticipantsRxSubscription: async function(t, n) {
				var e = await le("updateParticipantsRxSubscription", {
					participantJids: t,
					videoQualities: n
				});
				return Number(e);
			},
			updateNetworkMedium: async function(t, n) {
				await ie("updateNetworkMedium", {
					networkMedium: t,
					networkMtu: n
				});
			},
			getNetworkConditionerState: async function() {
				try {
					var e = await le("getNetworkConditionerState", {});
					if (e == null) return null;
					var t = JSON.stringify(e);
					return t == null ? null : JSON.parse(t);
				} catch (e) {
					return null;
				}
			},
			getShortStatisticString: async function() {
				try {
					var e = await le("getShortStatisticString", {});
					return String(e != null ? e : "");
				} catch (e) {
					return "";
				}
			},
			getDebugStatisticString: async function() {
				try {
					var e = await le("getDebugStatisticString", {});
					return String(e != null ? e : "");
				} catch (e) {
					return "";
				}
			},
			consumeVideoCaptureFps: async function() {
				return o("WAWebVoipVideoCaptureFpsTracker").consumeVideoCaptureFpsSnapshot();
			},
			getVoipParam: async function(t) {
				try {
					var e = await le("getVoipParam", { paramPath: t });
					return String(e != null ? e : "");
				} catch (e) {
					return "";
				}
			},
			isWebP2PEnabled: async function(t) {
				try {
					var e = await le("isWebP2PEnabled", { callId: t });
					return e === !0;
				} catch (e) {
					return o("WALogger").WARN(j || (j = babelHelpers.taggedTemplateLiteralLoose(["voip: [WorkerProxy] isWebP2PEnabled RPC failed, defaulting to false: ", ""])), String(e)), !1;
				}
			},
			callbacks: ce,
			inviteToCall: async function(t, n, r) {
				await ie("inviteToCall", {
					invitedParticipantPnUserJid: t,
					invitedParticipantLidUserJid: n,
					deviceJids: r
				});
			},
			checkOngoingCalls: async function(t, n) {
				await ie("checkOngoingCalls", {
					callIds: t,
					callCreatorJids: n
				});
			},
			sendWebP2PTransport: async function(t, n, r, o, a, i) {
				await ie("sendWebP2PTransport", {
					callId: t,
					ufrag: n,
					pwd: r,
					algo: o,
					fingerprint: a,
					candidatesJson: JSON.stringify(i)
				});
			}
		};
	}
	l.createWorkerProxyStackInterface = ae;
}), 98);
