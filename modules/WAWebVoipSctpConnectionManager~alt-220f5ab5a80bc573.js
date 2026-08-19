__d("WAWebVoipSctpConnectionManager", [
	"WALogger",
	"WAWebABProps",
	"WAWebCoreActionsODS",
	"WAWebReleaseToEventLoop",
	"WAWebVoipGatingUtils",
	"WAWebVoipRelayConnectQpl",
	"WAWebVoipRelayConnectionUtils",
	"WAWebVoipSctpBufferDrain",
	"WAWebVoipSctpConnectionManagerConstants",
	"WAWebVoipSctpConnectionState",
	"WAWebVoipSctpConnectionTeardown",
	"WAWebVoipSctpDataChannelThreadManager",
	"WAWebVoipSctpDiagnostics",
	"WAWebVoipSctpInboundMessageHandler",
	"WAWebVoipSctpOdsPortLogging",
	"WAWebVoipSctpSendData",
	"WAWebVoipSctpStatsInstrumentation",
	"WAWebVoipStackInterface",
	"WAWebVoipTransportFallbackTracker",
	"WAWebVoipTsLogger",
	"getErrorSafe",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te, ne, re = 1e4, oe = 1e4;
	function ae() {
		return 2 * re;
	}
	var ie = !1, le = 0, se = new Set();
	function ue(e) {
		o("WAWebCoreActionsODS").logCallDataChannelRelayError(), e === "no_first_response_timeout" ? o("WAWebCoreActionsODS").logCallDataChannelRelayErrorNoFirstResponseTimeout() : e === "remote_close" ? o("WAWebCoreActionsODS").logCallDataChannelRelayErrorRemoteClose() : e === "rx_stall_timeout" ? o("WAWebCoreActionsODS").logCallDataChannelRelayErrorRxStallTimeout() : o("WAWebCoreActionsODS").logCallDataChannelRelayErrorOnError();
	}
	function ce(e) {
		se.delete(e) && o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("reconnect_succeeded");
	}
	function de(e) {
		se.delete(e) && o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("reconnect_exhausted");
	}
	function me() {
		var e = [];
		for (var t of o("WAWebVoipSctpConnectionState").sctpConnections) {
			var n = t[0], r = t[1];
			r.peerConnection != null && r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && e.push({
				connectionId: n,
				peerConnection: r.peerConnection
			});
		}
		return e;
	}
	function pe(t, n, r, a) {
		var i, l, c, d = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
		if (d == null || !d.isActive()) return !1;
		var m = (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(r)) != null ? i : n.relayConnectionInfo, p = (l = m == null ? void 0 : m.ip) != null ? l : "0.0.0.0", _ = (c = m == null ? void 0 : m.originalPort) != null ? c : 0, f = a != null ? " (" + a + ")" : "";
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [DCThread] Transferring channel for ",
			"",
			""
		])), r, f);
		var g = d.transferChannel(t, r, p, _, o("WAWebABProps").getABPropConfigValue("voip_enable_webrtc_stats_polling"));
		return g ? (n.channelTransferred = !0, o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [DCThread] Channel ",
			" transferred to pthread",
			""
		])), r, f)) : (n.channelTransferred = !1, o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [DCThread] Transfer failed for ",
			"",
			", using main-thread handlers"
		])), r, f)), g;
	}
	function _e(e) {
		var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
		if (t) try {
			Fe(e);
		} catch (t) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SctpConnectionManager] Error cleaning up relay connection ",
				": ",
				""
			])), e, t);
		}
	}
	async function fe(e, t) {
		var n = "wa-web-call", r = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
		if (r && (r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open || r.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting)) {
			Le(e.id);
			return;
		}
		r && r.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None && we(e.id), await Pe(e, n);
	}
	function ge(e, t, n) {
		var a = r("justknobx")._("1929");
		o("WAWebVoipSctpSendData").sendData({
			callbacks: {
				failConnection: Ae,
				getIceRestartRxInactivityMs: function() {
					return oe;
				},
				getSctpConnectionTimeoutMs: function() {
					return ae();
				},
				restartIceProcess: Oe
			},
			data_: e,
			ip: t,
			port: a ? n : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT
		});
	}
	function he(e, t) {
		var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
		n != null && (n.stats.sentPackets += t.sentPackets, n.stats.sentBytes += t.sentBytes, n.stats.receivedPackets += t.receivedPackets, n.stats.receivedBytes += t.receivedBytes, t.firstSendTime > 0 && n.stats.firstSendRequestTime === 0 && (n.stats.firstSendRequestTime = t.firstSendTime), t.firstResponseRecvTime > 0 && n.stats.firstResponseRecvTime === 0 && (n.stats.firstResponseRecvTime = t.firstResponseRecvTime));
	}
	function ye(e) {
		var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
		if (t == null) {
			o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] handleDataChannelOpened: connection not found for ", ""])), e);
			return;
		}
		t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting && (t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open, t.stats.connectionReadyTime = Date.now(), t.isReconnecting = !1, ce(e), o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(), o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Connection ", " state updated to Open (notified from pthread)"])), e), o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("relay", me, o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread), t.connectionTimeout && (window.clearTimeout(t.connectionTimeout), t.connectionTimeout = null), o("WAWebVoipTsLogger").logIceConnectionComplete({
			relayId: t.relayId,
			ip: t.relayIp,
			port: t.relayPort
		}), o("WAWebVoipSctpBufferDrain").drainBuffer(e), Le(e));
	}
	function Ce(e, t, n, r) {
		var a, i = e.id;
		if (!(e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed || e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed)) {
			var l = o("WAWebVoipSctpConnectionState").currentRelayState.get(i), s = e.relayConnectionInfo, u = l == null && s != null, c = l != null ? l : s, d = (a = o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.get(i)) != null ? a : 0;
			if (!ie && c != null && d < o("WAWebVoipSctpConnectionManagerConstants").MAX_SAME_PATH_RECONNECT_ATTEMPTS) {
				var m;
				u && !se.has(i) && (se.add(i), o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("transport_failed")), o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.set(i, d + 1);
				var h = (m = o("WAWebVoipSctpConnectionManagerConstants").SAME_PATH_RECONNECT_BACKOFF_MS[d]) != null ? m : 0;
				o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
					"voip: ",
					" Same-path reconnecting ",
					", reason=",
					" (attempt ",
					"/",
					", backoff=",
					"ms)"
				])), r, i, t, d + 1, o("WAWebVoipSctpConnectionManagerConstants").MAX_SAME_PATH_RECONNECT_ATTEMPTS, h), Ae(e, n, !0);
				var y = function(n) {
					if (n != null && o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.delete(n), !ie) {
						var e = o("WAWebVoipSctpConnectionState").currentRelayState.get(i), a = e == null;
						a ? (se.has(i) || (se.add(i), o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("transport_failed")), o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("reconnect_attempted")) : se.delete(i), fe(e != null ? e : c, !1).catch(function(e) {
							a && de(i), o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
								"voip: ",
								" Reconnect failed for ",
								", reason=",
								": ",
								""
							])), r, i, t, e);
						});
					}
				};
				if (h > 0) {
					var C = window.setTimeout(function() {
						return y(C);
					}, h);
					o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.add(C);
				} else y(null);
			} else ie || (c == null ? o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose([
				"voip: ",
				" No relay info for ",
				", cannot same-path reconnect (attempts=",
				")"
			])), r, i, d) : (u && de(i), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
				"voip: ",
				" Max same-path reconnect attempts reached for ",
				" (attempts=",
				"/",
				")"
			])), r, i, d, o("WAWebVoipSctpConnectionManagerConstants").MAX_SAME_PATH_RECONNECT_ATTEMPTS))), Ae(e, t);
		}
	}
	function be(e) {
		var t = e.id;
		o("WAWebVoipSctpConnectionState").sctpConnections.get(t) === e && Ce(e, "data_channel_error", "data_channel_error_reconnecting", "[DCThread]");
	}
	function ve(e) {
		Ce(e, "ice_connection_failed", "ice_connection_failed_reconnecting", "[SCTP]");
	}
	function Se(e, t) {
		var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
		if (n == null) {
			o("WALogger").WARN(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] handleDataChannelErrored: connection not found for ", ""])), e);
			return;
		}
		if (o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Connection ", " errored (notified from pthread)"])), e), ue(t), (t === "no_first_response_timeout" || t === "rx_stall_timeout") && n.peerConnection != null) {
			o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] Collecting getStats snapshot for ",
				", reason=",
				""
			])), e, t), o("WAWebVoipSctpDiagnostics").logPeerConnectionStatsForError({
				connectionId: e,
				errorReason: t,
				peerConnection: n.peerConnection,
				workerStats: n.stats
			}).catch(function(t) {
				o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [SCTP] Failed to collect getStats for ", ""])), e).catching(r("getErrorSafe")(t));
			}).finally(function() {
				be(n);
			});
			return;
		}
		be(n);
	}
	function Re(e) {
		return new Promise(function(t) {
			o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.set(e, t);
		});
	}
	function Le(e) {
		var t = o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.get(e);
		t != null && (t(), o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.delete(e));
	}
	async function Ee() {
		ie = !0, le++;
		try {
			o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("relay");
			var e = Array.from(o("WAWebVoipSctpConnectionState").sctpConnections.keys());
			o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Cleaning up ", " connections"])), e.length), await o("WAWebVoipSctpDataChannelThreadManager").stopDataChannelWorker();
			for (var t of e) _e(t);
			o("WAWebVoipSctpConnectionState").currentRelayState.clear(), o("WAWebVoipTsLogger").cleanup(), o("WALogger").LOG(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] All connections and relay state cleared"])));
		} finally {
			for (var n of o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts) window.clearTimeout(n);
			o("WAWebVoipSctpConnectionState").pendingReconnectTimeouts.clear();
			for (var r of o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.values()) r();
			o("WAWebVoipSctpConnectionState").connectionOpenedResolvers.clear(), o("WAWebVoipSctpConnectionState").samePathReconnectAttempts.clear(), se.clear(), o("WAWebVoipRelayConnectQpl").resetVoipRelayConnectQpl(), ie = !1;
		}
	}
	async function ke(e) {
		var t = le;
		o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Staggered creation: ", " connections"])), e.length), await Ie(e, 0, t);
	}
	async function Ie(e, t, n) {
		if (!(t >= e.length) && !(ie || le !== n)) {
			var r = e[t];
			if (r != null) {
				o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [SctpConnectionManager] Starting staggered connection ",
					"/",
					": ",
					""
				])), t + 1, e.length, r.id);
				var a = Re(r.id);
				if (fe(r, !1), t < e.length - 1) {
					var i = new Promise(function(e) {
						window.setTimeout(e, o("WAWebVoipSctpConnectionManagerConstants").PER_CONNECTION_STAGGER_DELAY_MS);
					});
					await Promise.race([a, i]);
				}
				await Ie(e, t + 1, n);
			}
		}
	}
	async function Te(e) {
		re = r("justknobx")._("5402") || 1e4, oe = r("justknobx")._("5558") || re, le++;
		var t = o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort(), n = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e, { portOverride: function(n) {
			return t ? n : o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.TRUE_WEB_CLIENT_RELAY_PORT;
		} });
		for (var a of o("WAWebVoipSctpConnectionState").currentRelayState) {
			var i = a[0], l = a[1];
			if (!n.has(i)) if (o("WAWebVoipSctpConnectionManagerConstants").SctpConnectionConfig.CLOSE_OLD_CONNECTION_BEFORE_CALL_END) _e(i);
			else {
				var s = o("WAWebVoipSctpConnectionState").sctpConnections.get(i);
				s != null && s.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && s.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && (s.relayConnectionInfo = l, o("WAWebCoreActionsODS").logCallSctpObsoleteRelayEvent("retained"));
			}
		}
		var u = [];
		for (var c of n) {
			var d = c[0], m = c[1];
			(!o("WAWebVoipSctpConnectionState").currentRelayState.has(d) || !o("WAWebVoipSctpConnectionState").sctpConnections.has(d)) && u.push(m);
		}
		o("WAWebVoipSctpConnectionState").currentRelayState.clear();
		for (var p of n) {
			var _ = p[0], f = p[1];
			o("WAWebVoipSctpConnectionState").currentRelayState.set(_, f);
		}
		if (u.length > 0) {
			o("WAWebVoipRelayConnectQpl").maybeStartVoipRelayConnectQpl();
			var g = e.enable_web_relay_connection_stagger === !0;
			g ? await ke(u) : await Promise.all(u.map(function(e) {
				return fe(e, !1);
			}));
		}
	}
	function De(e, t, n) {
		n === void 0 && (n = !1), !n && (e.onopen = function(n) {
			Be(n, t.id, e);
		}, e.onclose = function(e) {
			We(e, t.id);
		}, e.onmessage = function(e) {
			o("WAWebVoipSctpInboundMessageHandler").handleSctpChannelMessage(e, t);
		}, e.onerror = function(n) {
			o("WALogger").ERROR(E || (E = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Data channel error for ", ":"])), t.id);
			var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t.id);
			if (r != null && r.channel === e) {
				var a = r;
				ue(), Ce(a, "data_channel_error", "data_channel_error_reconnecting", "[SCTP]");
			}
		});
	}
	function xe(e, t, n, r) {
		var a = "pre-negotiated", i = babelHelpers.extends({}, o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS, { priority: "high" }), l = e.createDataChannel(a, i);
		l.binaryType = "arraybuffer";
		var s = !1;
		return o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() ? o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] DC transfer disabled for ", ""])), n.id) : s = pe(l, t, n.id, r), t.channel = l, De(l, n, s), l;
	}
	function $e(e, t, n) {
		var a = n != null ? " " + n : "";
		e.oniceconnectionstatechange = function() {
			var n = e.iceConnectionState;
			o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] ICE state->",
				" ",
				"",
				""
			])), n, t, a);
			var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
			r && (n === "connected" && (r.iceConnectedTime = Date.now(), o("WAWebVoipSctpOdsPortLogging").logCallIceConnectedForPort(r.relayPort), o("WAWebVoipSctpOdsPortLogging").logCallDtlsStartedForPort(r.relayPort), r.dtlsStallTimeout != null && window.clearTimeout(r.dtlsStallTimeout), r.dtlsStallTimeout = window.setTimeout(function() {
				r.dtlsStallTimeout = null;
				var n = e.connectionState;
				if (n !== "connected") {
					var i = Date.now() - r.iceConnectedTime;
					o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [SCTP] DTLS stall: ICE connected ",
						"ms ago (threshold=",
						"ms) but PC state is '",
						"' for ",
						"",
						""
					])), i, re, n, t, a), o("WAWebVoipSctpOdsPortLogging").logCallDtlsFailedStallForPort(r.relayPort), Ce(r, "dtls_stall", "dtls_stall_reconnecting", "[SCTP]");
				}
			}, re)), n === "failed" && (o("WAWebVoipSctpOdsPortLogging").logCallIceFailedForPort(r.relayPort), ve(r)));
		}, e.onconnectionstatechange = function() {
			var n = e.connectionState;
			o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] PC state->",
				" ",
				"",
				""
			])), n, t, a);
			var i = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
			if (i) {
				if (n === "connected" && i.dtlsStallTimeout != null && (window.clearTimeout(i.dtlsStallTimeout), i.dtlsStallTimeout = null, o("WAWebVoipSctpOdsPortLogging").logCallDtlsConnectedForPort(i.relayPort), i.iceConnectedTime > 0)) {
					var l = Date.now() - i.iceConnectedTime;
					o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [SCTP] DTLS handshake completed in ",
						"ms for ",
						"",
						""
					])), l, t, a);
				}
				if (n === "connected") {
					o("WAWebVoipRelayConnectQpl").endVoipRelayConnectQplSuccess();
					var s = i.relayIp, u = i.relayPort;
					s !== "" && r("justknobx")._("3110") && o("WAWebVoipStackInterface").getVoipStackInterface().then(function(e) {
						if (e != null && e.type === "web") return e.markRelayConnected(s, u);
					}).catch(function(e) {
						o("WALogger").ERROR($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: [SCTP] markRelayConnected failed for ", ""])), t).catching(r("getErrorSafe")(e)).sendLogs("voip_sctp_mark_relay_connected_failed");
					});
				}
				n === "failed" && o("WAWebVoipSctpOdsPortLogging").logCallDtlsFailedPcFailedForPort(i.relayPort);
			}
		};
	}
	async function Pe(e, t) {
		var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id);
		n && n.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None ? (n.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting, n.connectionStartTime = Date.now(), n.relayConnectionInfo = e, n.relayId = e.relayId, n.relayIp = e.ip, n.relayPort = e.port, n.connectionTimeout && (window.clearTimeout(n.connectionTimeout), n.connectionTimeout = null), o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [SCTP] early conn->connecting ",
			" buf=",
			""
		])), e.id, n.packetBuffer.bufferedBytes)) : (n = {
			state: o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting,
			channel: null,
			peerConnection: null,
			packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
			id: e.id,
			relayConnectionInfo: e,
			connectionTimeout: null,
			hasReceivedFirstPacket: !1,
			hasNonStunPacketSent: !1,
			lastRxPacketTime: 0,
			stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
			isReconnecting: !1,
			sentMedia: !1,
			connectionStartTime: Date.now(),
			channelTransferred: !1,
			relayId: e.relayId,
			relayIp: e.ip,
			relayPort: e.port,
			iceConnectedTime: 0,
			dtlsStallTimeout: null
		}, o("WAWebVoipSctpConnectionState").sctpConnections.set(n.id, n));
		var a = n;
		n.connectionTimeout = window.setTimeout(function() {
			a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting && (o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] Connection timeout (",
				"ms) in Connecting state for ",
				""
			])), ae(), e.id), Ae(a, "connection_timeout"));
		}, ae());
		var i = !1;
		if (o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled() || (i = await qe()), ie || (o("WAWebVoipTsLogger").logIceConnectionStart({
			relayId: e.relayId,
			ip: e.ip,
			port: e.port
		}), o("WAWebVoipSctpOdsPortLogging").logCallIceStartedForPort(e.port), await o("WAWebReleaseToEventLoop").releaseToEventLoop(), ie)) return we(e.id), Le(e.id), !1;
		if (Me(n)) return o("WALogger").WARN(M || (M = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Aborting stale connect for ", " after yield"])), e.id), o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n), !1;
		try {
			var l, s, u = r("justknobx")._("404"), c = {};
			if (u && (c.certificates = [await RTCPeerConnection.generateCertificate({
				name: "ECDSA",
				namedCurve: "P-256"
			})], Me(n))) return o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Aborting stale connect for ", " after certificate generation"])), e.id), o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n), !1;
			var d = Date.now(), m = new RTCPeerConnection(c), p = Date.now() - d;
			p > o("WAWebVoipSctpConnectionManagerConstants").SLOW_WEBRTC_SETUP_THRESHOLD_MS && o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] slow RTCPeerConnection ctor ",
				": ",
				"ms"
			])), e.id, p), n.peerConnection = m, m.onicecandidate = function(t) {
				t.candidate || o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] ICE gathering complete for ", ""])), e.id);
			}, $e(m, e.id), xe(m, n, e);
			var _ = Date.now(), f = await m.createOffer();
			await m.setLocalDescription(f);
			var g = f.sdp || "", h = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(g, e);
			if (await m.setRemoteDescription({
				sdp: h,
				type: "answer"
			}), Me(n)) return o("WALogger").WARN(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Aborting stale connect for ", " after setRemoteDescription"])), e.id), o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(n), o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(n), o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(m), m.close(), n.peerConnection = null, !1;
			var y = Date.now() - _;
			y > o("WAWebVoipSctpConnectionManagerConstants").SLOW_WEBRTC_SETUP_THRESHOLD_MS && o("WALogger").WARN(B || (B = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SctpConnectionManager] Slow SDP negotiation for ",
				": ",
				"ms"
			])), e.id, y);
			var C = m.iceConnectionState, b = (l = (s = n.channel) == null ? void 0 : s.readyState) != null ? l : "unknown";
			return o("WALogger").LOG(W || (W = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] SDP done ",
				" DC=",
				" ICE=",
				""
			])), e.id, b, C), !0;
		} catch (e) {
			return o("WALogger").ERROR(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: [SCTP] createDataChannel failed: ", ""])), e), Ae(n, "channel_creation_failed"), !1;
		}
	}
	function Ne(e) {
		var t, n, r = e.stats, a = "N/A";
		r.connectionReadyTime !== 0 && e.connectionStartTime > 0 && (a = (r.connectionReadyTime - e.connectionStartTime).toString());
		var i = (t = (n = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id)) == null ? void 0 : n.name) != null ? t : "N/A";
		o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [SCTP] stats relay=",
			" id=",
			" txPkt=",
			" rxPkt=",
			" txB=",
			" rxB=",
			""
		])), i, e.id, r.sentPackets, r.receivedPackets, r.sentBytes, r.receivedBytes), o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [SCTP] stats bufB=",
			" bindT=",
			"ms"
		])), e.packetBuffer.bufferedBytes, a);
	}
	function Me(e) {
		return ie || o("WAWebVoipSctpConnectionState").sctpConnections.get(e.id) !== e;
	}
	function we(e) {
		var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
		if (t) {
			o("WAWebVoipSctpConnectionTeardown").clearConnectionTimers(t), o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(t);
			var n = t.peerConnection;
			n && (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(n), n.close(), t.peerConnection = null), Ne(t), o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer), (t.isReconnecting == null || !t.isReconnecting) && (o("WAWebVoipSctpOdsPortLogging").logCallSctpConnectionCleanedUpForPort(t.relayPort), o("WAWebVoipSctpConnectionState").sctpConnections.delete(e), o("WAWebVoipSctpStatsInstrumentation").removeConnectionFromRttStats(e), o("WAWebVoipSctpConnectionState").sctpConnections.size === 0 && o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("relay"));
		}
	}
	function Ae(e, t, n) {
		n === void 0 && (n = !1), e && e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && e.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && (n || de(e.id), o("WALogger").LOG(H || (H = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [SctpConnectionManager] Failing (closing) connection for ",
			", reason: ",
			""
		])), e.id, t), o("WAWebVoipSctpOdsPortLogging").logCallSctpConnectionFailedForPort(e.relayPort), e.relayIp !== "" && o("WAWebVoipTsLogger").logIceConnectionFailed({
			relayId: e.relayId,
			ip: e.relayIp,
			port: e.relayPort
		}, 1), e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed, we(e.id), Le(e.id));
	}
	function Fe(e) {
		var t = o("WAWebVoipSctpConnectionState").sctpConnections.get(e);
		t && (t.isReconnecting == null || !t.isReconnecting) && (t.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed, we(e), Le(e));
	}
	async function Oe(e) {
		if (e.isReconnecting !== !0) {
			if (o("WALogger").LOG(G || (G = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Restarting ICE process for connection ", ""])), e.id), !e.hasNonStunPacketSent) {
				o("WALogger").WARN(z || (z = babelHelpers.taggedTemplateLiteralLoose(["voip: [SCTP] ICE restart skip: no non-STUN sent ", ""])), e.id);
				return;
			}
			var t = o("WAWebVoipSctpConnectionState").currentRelayState.get(e.id);
			if (!t) {
				o("WALogger").WARN(j || (j = babelHelpers.taggedTemplateLiteralLoose(["voip: [SCTP] ICE restart skip: no relay info ", ""])), e.id);
				return;
			}
			var n = e.peerConnection;
			if (!n) {
				o("WALogger").WARN(K || (K = babelHelpers.taggedTemplateLiteralLoose(["voip: [SCTP] ICE restart skip: no PC ", ""])), e.id);
				return;
			}
			var a = e.packetBuffer;
			if (e.isReconnecting = !0, e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting, e.peerConnection) {
				o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Closing previous connection for ", ""])), e.id), window.clearTimeout(e.connectionTimeout), e.connectionTimeout = null, o("WAWebVoipSctpConnectionTeardown").closeConnectionDataChannel(e);
				var i = e.peerConnection;
				i && (o("WAWebVoipSctpConnectionTeardown").detachPeerConnectionHandlers(i), i.close());
			}
			try {
				e.hasReceivedFirstPacket = !1, e.sentMedia = !1;
				var l = {};
				r("justknobx")._("404") && (l.certificates = [await RTCPeerConnection.generateCertificate({
					name: "ECDSA",
					namedCurve: "P-256"
				})]);
				var s = new RTCPeerConnection(l);
				e.peerConnection = s, e.iceConnectedTime = 0, e.dtlsStallTimeout != null && (window.clearTimeout(e.dtlsStallTimeout), e.dtlsStallTimeout = null), $e(s, e.id, "(ICE restart)"), xe(s, e, t, "ICE restart"), e.packetBuffer = a, o("WAWebVoipSctpConnectionState").sctpConnections.set(e.id, e);
				var u = await s.createOffer({ iceRestart: !1 });
				await s.setLocalDescription(u);
				var c = u.sdp || "", d = o("WAWebVoipRelayConnectionUtils").createAnswerSdp(c, t);
				await s.setRemoteDescription({
					sdp: d,
					type: "answer"
				}), o("WALogger").LOG(X || (X = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] ICE restart completed for connection ", ""])), e.id);
			} catch (t) {
				o("WALogger").ERROR(Y || (Y = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [SctpConnectionManager] ICE restart failed for connection ",
					": ",
					""
				])), e.id, t), Ae(e, "ice_restart_failed");
			}
		}
	}
	function Be(e, t, n) {
		var r = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
		if (r) {
			var a, i;
			if (r.channel == null || r.channel !== n) {
				o("WALogger").WARN(J || (J = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] Ignoring stale DataChannel open for ", ""])), t);
				try {
					n.close();
				} catch (e) {
					o("WALogger").WARN(Z || (Z = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [SctpConnectionManager] Error closing stale DataChannel for ",
						": ",
						""
					])), t, e);
				}
				return;
			}
			if (r.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) return;
			r.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open, r.stats.connectionReadyTime = Date.now(), r.isReconnecting = !1, ce(t), o("WAWebVoipTransportFallbackTracker").notifySctpConnectionOpened(), r.connectionTimeout && (window.clearTimeout(r.connectionTimeout), r.connectionTimeout = null), o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("relay", me, o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread);
			var l = r.connectionStartTime > 0 ? Date.now() - r.connectionStartTime : 0, s = (a = (i = o("WAWebVoipSctpConnectionState").currentRelayState.get(t)) == null ? void 0 : i.name) != null ? a : "N/A";
			o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] DC opened ",
				" relay=",
				" ",
				"ms"
			])), t, s, l), o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] ICE done id=",
				" ip=",
				" port=",
				""
			])), r.relayId, r.relayIp, r.relayPort), o("WAWebVoipTsLogger").logIceConnectionComplete({
				relayId: r.relayId,
				ip: r.relayIp,
				port: r.relayPort
			}), o("WAWebVoipSctpBufferDrain").drainBuffer(t), Le(t);
		}
	}
	function We(e, t) {
		var n = o("WAWebVoipSctpConnectionState").sctpConnections.get(t);
		n && (o("WALogger").LOG(ne || (ne = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpConnectionManager] DataChannel closed by relay for ", ", reconnecting"])), t), ue("remote_close"), Ce(n, "remote_close", "remote_close_reconnecting", "[SCTP]"));
	}
	function qe() {
		return o("WAWebVoipSctpDataChannelThreadManager").initDataChannelWorker(function() {
			return re;
		});
	}
	l.sendWAWebVoipDataToRelay = ge, l.mergeWorkerStats = he, l.handleDataChannelOpened = ye, l.handleDataChannelErrored = Se, l.cleanupAllConnections = Ee, l.handleRelayListUpdate = Te, l.initDataChannelWorker = qe;
}), 98);
