__d("WAWebVoipStackInterfaceWeb", [
	"WABase64",
	"WALogger",
	"WAOnceWithReset",
	"WAWap",
	"WAWebABProps",
	"WAWebBackendApi",
	"WAWebBweMLModelManager",
	"WAWebCoreActionsODS",
	"WAWebEnvironment",
	"WAWebLowEndDeviceExperimentGating",
	"WAWebNoop",
	"WAWebReleaseToEventLoop",
	"WAWebUA",
	"WAWebVoipAudioCaptureAndPlayback",
	"WAWebVoipGatingUtils",
	"WAWebVoipJsonParsersWeb",
	"WAWebVoipLogDrainer",
	"WAWebVoipNativeStackTraceLogger",
	"WAWebVoipP2PConnectionManager",
	"WAWebVoipPerfOptimizations",
	"WAWebVoipQplHelpers",
	"WAWebVoipRelayConnectionUtils",
	"WAWebVoipScreenShareStreamKey",
	"WAWebVoipSctpConnectionManager",
	"WAWebVoipStackInterfaceWebCallbacks",
	"WAWebVoipStackInterfaceWebHelpers",
	"WAWebVoipStackInterfaceWorkerProxy",
	"WAWebVoipStorageInit",
	"WAWebVoipTransportFallbackTracker",
	"WAWebVoipVideoCaptureFpsTracker",
	"WAWebVoipVideoRendererInterface",
	"WAWebVoipVideoRendererRegistry",
	"WAWebVoipVideoWebCodecsRenderer",
	"WAWebVoipWasmHeapBuffer",
	"WAWebVoipWasmHeapMonitor",
	"WAWebVoipWebCodecsEncoderState",
	"WAWebVoipWebTransportConnectionManager",
	"err",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U = r("WAOnceWithReset")(function() {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[VoipStackInterfaceWeb] created on Windows Hybrid - selected factory does not match runtime environment"]))).sendLogs("voip-stack-interface-web-created-on-windows");
	});
	function V() {
		if (r("WAWebEnvironment").isWindows && !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()) throw U(), r("err")("createWAWebVoipStackInterface: Attempted to create Web stack in Windows environment");
		if (!o("WAWebVoipGatingUtils").isVoipDownloadEnabled()) throw r("err")("createWAWebVoipStackInterface: VoIP download is not enabled");
		var e = {
			onVoipReady: r("WAWebNoop"),
			onCallEvent: r("WAWebNoop"),
			initCaptureDriverJS: o("WAWebVoipAudioCaptureAndPlayback").initCaptureDriverJS,
			startCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").startCaptureJS,
			stopCaptureJS: o("WAWebVoipAudioCaptureAndPlayback").stopCaptureJS
		};
		window.WhatsAppVoipWasmCallbacks = e, window.WhatsAppVoipWasmWorkerCompatibleCallbacks = o("WAWebVoipStackInterfaceWebCallbacks").createWorkerCompatibleCallbacks();
		var t = o("WAWebABProps").getABPropConfigValue("enable_web_voip_proxy_and_sctp_workers") === !0;
		if (o("WAWebVoipQplHelpers").voipInitQplAnnotateExecutionMode(t), t) {
			var a = n("WAWebVoipStackInterfaceWorkerProxy");
			return a.createWorkerProxyStackInterface();
		}
		var i = o("WAWebVoipWasmHeapBuffer").createHeapBufferState(), l = o("WAWebBackendApi").frontendSendAndReceive("initializeVoipWasm"), V = null;
		function G() {
			o("WAWebVoipWebTransportConnectionManager").registerPacketHandler(function(e, t, n) {
				var r = V;
				if (r == null) {
					o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Dropping inbound packet: WASM not initialized"])));
					return;
				}
				var a = new Uint8Array(e), l = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(r, i, a.byteLength);
				l !== 0 && (r.GROWABLE_HEAP_U8().set(a, l), r.handleOnMessageFromHeap(l, a.byteLength, t, n));
			});
		}
		return {
			type: "web",
			parsers: r("WAWebVoipJsonParsersWeb"),
			voipInit: async function(t, n, r) {
				var e = await l;
				V = e, o("WAWebVoipGatingUtils").resetWebTransportFallbackState(), e.initVoipLogging(), o("WAWebVoipGatingUtils").isWebTransportEnabled() && (G(), o("WAWebVoipGatingUtils").isWebTransportFallbackEnabled() ? (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Registering SCTP fallback handler (abprop on)"]))), o("WAWebVoipWebTransportConnectionManager").registerFallbackHandler(function(e) {
					o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Falling back to SCTP after connect failure"]))).sendLogs("webtransport-fallback-handler-invoked"), o("WAWebVoipGatingUtils").markWebTransportFellBack(), o("WAWebVoipTransportFallbackTracker").markFallbackTriggered(), o("WAWebVoipWebTransportConnectionManager").closeAllConnections(), e != null ? o("WAWebVoipSctpConnectionManager").handleRelayListUpdate(e) : o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] Fallback handler had no cached relay list to replay"]))).sendLogs("webtransport-fallback-no-relay-list");
				})) : o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransport] SCTP fallback disabled (abprop off) — no handler registered"])))), o("WAWebVoipStorageInit").initVoipStorageAndMLCache(e);
				var a = !1, s = !1;
				try {
					await o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.init();
					var C = o("WAWebVoipVideoRendererRegistry").videoRendererRegistry.getRendererType();
					a = C === o("WAWebVoipVideoRendererInterface").WAWebVoipVideoRendererType.WEBCODECS_H264;
					var b = o("WAWebABProps").getABPropConfigValue("enable_webcodec_video_encode"), v = a || await o("WAWebVoipVideoWebCodecsRenderer").WAWebVoipVideoWebCodecsRenderer.checkAvailability();
					s = !o("WAWebUA").UA.isFirefox && v && b === !0 ? await o("WAWebVoipWebCodecsEncoderState").checkEncoderSupport() : !1;
				} catch (e) {
					o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: video capability detection failed, disabling passthrough encode/decode: ", ""])), e);
				}
				o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
					"voip: voipInit: ptDec=",
					" ptEnc=",
					""
				])), a, s), o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] enabled=", ""])), s), o("WAWebVoipWebCodecsEncoderState").setWebCodecsEncoderEnabled(s), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [webcodec-encode] WebCodecs encoder state ", ""])), s), await o("WAWebReleaseToEventLoop").releaseToEventLoop(), o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_START);
				try {
					o("WAWebVoipStackInterfaceWebHelpers").setABPropsOnWasm(e), e.setABPropBool("enable_passthrough_video_decoder", a), e.setABPropBool("enable_webcodec_video_encode", s), o("WAWebLowEndDeviceExperimentGating").shouldDisableSoftwareAudioProcessing() && (e.setABPropBool("ns_builtin_available", !0), e.setABPropBool("disable_sw_ns_when_builtin_available", !0), e.setABPropBool("ml_ns_skip_processing", !0), e.setABPropBool("disable_agc", !0), e.setABPropBool("hw_aec_available", !0), e.setABPropBool("disable_sw_ec_when_builtin_available", !0), e.setABPropBool("disable_standalone_agc", !0), e.setABPropBool("disable_eq", !0)), e.initVoipStack(t, n, r);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				} finally {
					o("WAWebVoipQplHelpers").voipInitQplAddPoint(o("WAWebVoipQplHelpers").VoipInitQplPoint.VOIP_STACK_INIT_END);
				}
				o("WAWebVoipWasmHeapMonitor").logWasmHeapSnapshot(e, "voip_stack_init"), o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.LOG_RING_BUFFER) && o("WAWebVoipLogDrainer").startLogDrainer(e);
				var S = e.getWebP2PVirtualIpv4(), R = e.getWebP2PVirtualIpv6(), L = e.getWebP2PVirtualPort();
				o("WAWebVoipP2PConnectionManager").initP2PVirtualAddresses(S, R, L), o("WAWebVoipP2PConnectionManager").registerOnDataChannelMessage(function(t) {
					var n = new Uint8Array(t), r = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(e, i, n.byteLength);
					e.GROWABLE_HEAP_U8().set(n, r), e.handleOnMessageFromHeap(r, n.byteLength, S, L);
				});
				var E = !1;
				o("WAWebVoipP2PConnectionManager").registerOnDataChannelStateChange(function(t) {
					t === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ? (E = !0, o("WALogger").LOG(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: P2P DataChannel opened, notifying WASM active=true"]))), e.notifyWebP2PChannelReady(!0, !1)) : E && (E = !1, o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: P2P DataChannel state changed to ", " after being open, notifying WASM active=false"])), t), e.notifyWebP2PChannelReady(!1, !1));
				});
			},
			setHideMyIp: async function(t) {
				o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: setHideMyIp called with hideMyIp=", ""])), t);
				var e = await l;
				e.setHideMyIp(t);
			},
			handleSignOut: function() {
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: handleSignOut: cleaning up all connections"]))), o("WAWebVoipLogDrainer").stopLogDrainer(), o("WAWebVoipGatingUtils").isWebTransportEnabled() ? o("WAWebVoipWebTransportConnectionManager").closeAllConnections() : (o("WAWebVoipWebTransportConnectionManager").closeAllConnections(), o("WAWebVoipSctpConnectionManager").cleanupAllConnections()), o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(), o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(), o("WAWebVoipGatingUtils").resetWebTransportFallbackState(), l.then(function(e) {
					o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(e, i);
				}).catch(r("WAWebNoop"));
			},
			startCall: async function(t, n, r, a, i, s, u) {
				o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!1);
				var e = await l;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				});
				var c = new e.StringList();
				n.forEach(function(e) {
					c.push_back(e);
				});
				var d = H(e, u);
				try {
					e.startVoipCall(t.toString({ legacy: !0 }), c, r, a, i, s, d);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				} finally {
					c.delete();
				}
			},
			startGroupCall: async function(t, n, r, a, i, s, u, c, d, m, p, _, f) {
				if (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0), !o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
					o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: startGroupCall: Web group calling is not enabled"])));
					return;
				}
				var e = await l;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				});
				var g = new e.StringList();
				t.forEach(function(e) {
					g.push_back(e);
				});
				var h = new e.StringList();
				n.forEach(function(e) {
					h.push_back(e);
				});
				var y = new e.StringList();
				r.forEach(function(e) {
					y.push_back(e);
				});
				var C = e.startVoipGroupCall(g, h, y, a, i, s, u, c, d, m, p != null ? p : 0, _ != null ? _ : 0, f != null ? f : "");
				C !== 0 && o("WALogger").ERROR(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: startGroupCall: failed to start group call"]))).sendLogs("voip-start-group-call-failed"), g.delete(), h.delete(), y.delete();
			},
			acceptCall: async function(t, n) {
				var e = await l;
				try {
					e.acceptCall(t, n);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			rejectCall: async function() {
				var e = await l;
				try {
					e.rejectCall();
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			endCall: async function(t, n) {
				var e = await l;
				o("WAWebVoipGatingUtils").isWebTransportEnabled() && o("WAWebVoipWebTransportConnectionManager").prepareForEndCall();
				try {
					e.endCall(t, n);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				} finally {
					o("WAWebVoipGatingUtils").isWebTransportEnabled() && o("WAWebVoipWebTransportConnectionManager").closeAllConnections(), o("WAWebVoipTransportFallbackTracker").finalizeFallbackOutcome(), o("WAWebVoipTransportFallbackTracker").resetFallbackTracker(), o("WAWebVoipGatingUtils").resetWebTransportFallbackState();
				}
			},
			rejectCallWithoutCallContext: async function(t, n, r, o, a, i, s) {
				var e = await l;
				e.rejectCallWithoutCallContext(t, n, r, o, a, i, s);
			},
			joinOngoingCall: async function(t, n, a, i, s, u, c, d, m, p, _, f, g, h, y, C, b) {
				if (o("WAWebVoipGatingUtils").markCurrentCallAsGroup(!0), !o("WAWebVoipGatingUtils").isGroupCallingEnabled()) {
					o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingCall: Web group calling is not enabled"])));
					return;
				}
				var e = await l, v = new e.StringList();
				i.forEach(function(e) {
					v.push_back(e);
				});
				var S = new e.StringList();
				s.forEach(function(e) {
					S.push_back(e);
				});
				var R = new e.StringList();
				u.forEach(function(e) {
					R.push_back(e);
				});
				try {
					var L = e.joinVoipOngoingCall(t, n, a, v, S, R, c, d, m, p, _, f, g, h, y, C != null ? C : 0, b != null ? b : !1);
					if (L !== 0) throw r("err")("voip: joinOngoingCall: failed to join ongoing call");
				} catch (e) {
					o("WAWebCoreActionsODS").logCallGroupJoinError(), o("WALogger").ERROR(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: joinOngoingCall: failed to join ongoing call ", ""])), e).sendLogs("voip-join-ongoing-call-failed");
				} finally {
					v.delete(), S.delete(), R.delete();
				}
			},
			simulateNativeAnr: r("WAWebNoop"),
			handleDeviceJidList: r("WAWebNoop"),
			previewCallLink: async function(t, n, r, a, i) {
				if (!o("WAWebVoipGatingUtils").callLinksEnabled()) return o("WALogger").ERROR(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: previewCallLink: Call link feature is not enabled"]))), -1;
				var e = 22;
				if (t.length !== e) return o("WALogger").ERROR(T || (T = babelHelpers.taggedTemplateLiteralLoose([
					"voip: previewCallLink: invalid token length ",
					", expected ",
					""
				])), t.length, e), -1;
				var s = await l;
				try {
					var u = s.previewCallLink(t, n, r != null ? r : 0, a != null ? a : "", i != null ? i : !1);
					return u !== 0 && o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose(["voip: previewCallLink: failed with status ", ""])), u).sendLogs("voip-preview-call-link-failed"), u;
				} catch (e) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(s, e), e;
				}
			},
			joinCallLink: async function() {
				if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
					o("WALogger").ERROR(x || (x = babelHelpers.taggedTemplateLiteralLoose(["voip: joinCallLink: Call link feature is not enabled"])));
					return;
				}
				var e = await l;
				try {
					var t = e.joinCallLink();
					t !== 0 && o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: joinCallLink: failed with status ", ""])), t).sendLogs("voip-join-call-link-failed");
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			previewAndJoinCallLink: async function(t, n, r, a, i, s) {
				if (!o("WAWebVoipGatingUtils").callLinksEnabled()) {
					o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: previewAndJoinCallLink: call links disabled"])));
					return;
				}
				var e = await l;
				try {
					o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
						o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
					});
					var u = e.previewAndJoinCallLink(t, n, r != null ? r : 0, a != null ? a : "", i != null ? i : !1, s != null ? s : "");
					u !== 0 && o("WALogger").ERROR(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: previewAndJoinCallLink: failed with status ", ""])), u).sendLogs("voip-preview-and-join-call-link-failed");
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			handleIncomingSignalingOffer: async function(t, n, a, i, s, u, c, d, m) {
				var e = await l;
				o("WAWebBweMLModelManager").initBweMLModelsForCall(e).catch(function(e) {
					o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: [initBweMLModelsForCall] unhandled error: ", ""])), e);
				});
				var p = t.node();
				r("justknobx")._("360") && o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(p);
				var _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)), f = H(e, m), g = i != null ? String(i) : "0", h = s != null ? String(s) : "0";
				try {
					e.handleIncomingSignalingOffer(_, n, a, g, h, u, c, d, f);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			handleIncomingSignalingMessage: async function(t, n, r, a, i, s, u, c) {
				var e = await l, d = o("WABase64").encodeB64(o("WAWap").encodeStanza(t.node())), m = H(e, c), p = a != null ? String(a) : "0", _ = i != null ? String(i) : "0";
				try {
					e.handleIncomingSignalingMessage(d, n, r, p, _, s, u, m);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			handleIncomingSignalingAck: async function(t) {
				var e = t.ackInfoError, n = t.ackInfoType, a = t.peerJid, i = t.tcToken, s = t.xmlNode, u = await l, c = s.node();
				r("justknobx")._("360") && o("WAWebVoipStackInterfaceWebHelpers").overrideRelayIp(c);
				var d = o("WABase64").encodeB64(o("WAWap").encodeStanza(c)), m = H(u, i);
				try {
					u.handleIncomingSignalingAck(d, e, n, a, m);
				} catch (e) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(u, e), e;
				}
			},
			handleIncomingSignalingReceipt: async function(t, n, r) {
				var e = await l, a = o("WABase64").encodeB64(o("WAWap").encodeStanza(t.node())), i = H(e, r);
				try {
					e.handleIncomingSignalingReceipt(a, n, i);
				} catch (t) {
					throw o("WAWebVoipNativeStackTraceLogger").logNativeStackTrace(e, t), t;
				}
			},
			resendOfferOnDecryptionFailure: async function(t, n) {
				var e = await l;
				e.resendOfferOnDecryptionFailure(t, n);
			},
			resendEncRekeyRetry: async function(t, n) {
				var e = await l;
				e.resendEncRekeyRetry(t, n);
			},
			notifyDeviceIdentityChangedOrDeleted: r("WAWebNoop"),
			handleOnTransportMessage: async function(t, n, r) {
				var e = V != null ? V : await l, a = new Uint8Array(t), s = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(e, i, a.byteLength);
				s !== 0 && (e.GROWABLE_HEAP_U8().set(a, s), e.handleOnMessageFromHeap(s, a.byteLength, n, r));
			},
			markRelayConnected: async function(t, n) {
				var e = V != null ? V : await l;
				e.markRelayConnected(t, n);
			},
			setCallMute: async function(t) {
				var e = await l, n = e.setCallMute(t);
				return n;
			},
			setCallVideoMute: async function(t) {
				var e = await l, n = e.setCallVideoMute(t);
				return n;
			},
			videoStreamPause: async function() {
				var e = await l, t = e.videoStreamPause();
				return t;
			},
			videoStreamResume: async function() {
				var e = await l, t = e.videoStreamResume();
				return t;
			},
			broadcastVideoState: async function() {
				var e = await l, t = e.broadcastVideoState();
				return t;
			},
			sendReaction: async function(t) {
				var e = await l;
				e.sendReaction(t);
			},
			raiseHand: async function(t) {
				var e = await l;
				e.raiseHand(t);
			},
			notifyUiViewChange: async function(t, n) {
				var e = await l, r = e.notifyUiViewChange(t, n != null ? n : "");
				return r;
			},
			requestVideoUpgrade: async function() {
				var e = await l, t = e.requestVideoUpgrade();
				return t;
			},
			getCallInfo: async function() {
				var e = await l, t = e.getCallInfo();
				return t === "" && o("WALogger").ERROR(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: getCallInfo() failed to retrieve call info"]))), t;
			},
			acceptPeerVideo: async function(t) {
				var e = t.jid, n = await l, r = n.acceptPeerVideo(e);
				return r !== 0 && o("WALogger").ERROR(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: acceptPeerVideo: Failed with status ", ""])), r), r;
			},
			requestPeerMute: async function(t) {
				var e = await l, n = e.requestPeerMute(t);
				return n;
			},
			removeCallParticipant: async function(t) {
				var e = await l, n = e.removeCallParticipant(t);
				return n;
			},
			waitingRoomAdmit: async function(t) {
				var e = await l, n = e.waitingRoomAdmit(t);
				return n;
			},
			waitingRoomDeny: async function(t) {
				var e = await l, n = e.waitingRoomDeny(t);
				return n;
			},
			waitingRoomAdmitAll: async function() {
				var e = await l, t = e.waitingRoomAdmitAll();
				return t;
			},
			waitingRoomToggleActiveCall: async function(t) {
				var e = await l, n = e.waitingRoomToggleActiveCall(t);
				return n;
			},
			updateParticipantsRxSubscription: async function(t, n) {
				var e = await l, r = new e.StringList();
				t.forEach(function(e) {
					r.push_back(e);
				});
				var o = new e.IntList();
				n.forEach(function(e) {
					o.push_back(e);
				});
				try {
					var a = e.updateParticipantsRxSubscription(r, o);
					return a;
				} finally {
					r.delete(), o.delete();
				}
			},
			startScreenShare: async function() {
				var e = await l, t = e.startScreenShare();
				return t;
			},
			stopScreenShare: async function() {
				var e = await l, t = e.stopScreenShare();
				return t;
			},
			startVideoPreview: async function(t, n) {
				var e = await l, r = e.startVideoPreview(t, n);
				return r;
			},
			requestKeyFrame: async function(t) {
				var e = await l, n = o("WAWebVoipScreenShareStreamKey").getBaseJidFromStreamKey(t), r = o("WAWebVoipScreenShareStreamKey").isScreenShareStreamKey(t), a = r ? e.requestAuxiliaryKeyFrame(n) : e.requestKeyFrame(n);
				return a;
			},
			updateNetworkMedium: async function(t, n) {
				var e = await l;
				e.updateNetworkMedium(t, 0), o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: updateNetworkMedium: medium=", ", mtu=0"])), t);
			},
			getNetworkConditionerState: async function() {
				try {
					var e = await l, t = e.isTxNetworkConditionerOn(), n = e.isRxNetworkConditionerOn(), r = null, o = null;
					return t && (r = e.getCurrentTxNetworkConditionerParameters()), n && (o = e.getCurrentRxNetworkConditionerParameters()), {
						isTxOn: t,
						isRxOn: n,
						txParams: r,
						rxParams: o
					};
				} catch (e) {
					return null;
				}
			},
			getShortStatisticString: async function() {
				try {
					var e = await l;
					return e.getShortStatisticString();
				} catch (e) {
					return "";
				}
			},
			getDebugStatisticString: async function() {
				try {
					var e = await l;
					return e.getDebugStatisticString();
				} catch (e) {
					return "";
				}
			},
			consumeVideoCaptureFps: async function() {
				return o("WAWebVoipVideoCaptureFpsTracker").consumeVideoCaptureFpsSnapshot();
			},
			getVoipParam: async function(t) {
				try {
					var e = await l, n = e.getVoipParam(t);
					return o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose([
						"voip: getVoipParam(",
						") = ",
						""
					])), t, n), n;
				} catch (e) {
					return o("WALogger").ERROR(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: getVoipParam: error=", ""])), e), "";
				}
			},
			isWebP2PEnabled: async function(t) {
				try {
					var e = await l;
					return e.isWebP2PEnabled(t) === !0;
				} catch (e) {
					return o("WALogger").ERROR(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: isWebP2PEnabled: error=", ""])), e), !1;
				}
			},
			sendWebP2PTransport: async function(t, n, r, o, a, i) {
				var e = await l, s = JSON.stringify(i);
				e.sendWebP2PTransport(t, n, r, o, a, s);
			},
			callbacks: e,
			inviteToCall: async function(t, n, r) {
				var e = await l, o = new e.StringList();
				r.forEach(function(e) {
					return o.push_back(e);
				});
				var a = e.inviteToCall(t, n, o);
			},
			checkOngoingCalls: async function(t, n) {
				var e = await l, r = new e.StringList();
				t.forEach(function(e) {
					return r.push_back(e);
				});
				var o = new e.StringList();
				n.forEach(function(e) {
					return o.push_back(e);
				});
				try {
					e.checkOngoingCalls(r, o);
				} finally {
					r.delete(), o.delete();
				}
			}
		};
	}
	function H(e, t) {
		var n = new e.Uint8List();
		if (t) {
			var r = new Uint8Array(t);
			r.forEach(function(e) {
				return n.push_back(e);
			});
		}
		return n;
	}
	l.createWAWebVoipStackInterface = V;
}), 98);
