__d("WAWebVoipWebTransportConnectionManager", [
	"WALogger",
	"WAWebCoreActionsODS",
	"WAWebNoop",
	"WAWebVoipCallStateUtils",
	"WAWebVoipLocalCallStateStore",
	"WAWebVoipRelayConnectionUtils",
	"WAWebVoipTsLogger",
	"WAWebVoipWaCallEnums",
	"WAWebVoipWebTransportCallSummary",
	"err"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O;
	function B() {
		var e;
		return (e = self.WebTransport) != null ? e : null;
	}
	var W = new Map(), q = null;
	function U() {
		return q == null && (q = new AbortController()), q.signal;
	}
	var V = new Map(), H = new Map(), G = !1, z = {
		aborted: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted,
		handshake_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout,
		connection_timeout: o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout
	}, j = null, K = 100, Q = [], X = null, Y = !1, J = !1, Z = null;
	function ee(t) {
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Fallback handler registered"]))), X = t;
	}
	function te() {
		for (var e of W.values()) if (e.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open) return !0;
		return !1;
	}
	function ne() {
		if (G) {
			o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Skipping fallback: tearing down"])));
			return;
		}
		if (Y) {
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Skipping fallback: already fell back this call"])));
			return;
		}
		var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
		if (e === o("WAWebVoipWaCallEnums").CallState.CallStateEnding || e === o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere) {
			o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Skipping fallback: call ended or resolved elsewhere (state=", ")"])), String(e));
			return;
		}
		if (te()) {
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Skipping fallback: another WT connection still open"])));
			return;
		}
		var t = X;
		if (t == null) {
			J || (J = !0, o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Skipping fallback: no handler registered (fallback abprop off)"]))), o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpSkippedDisabled());
			return;
		}
		Y = !0, o("WAWebCoreActionsODS").logCallWebtransportFallbackToSctpTriggered(), o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Triggering SCTP fallback"]))).sendLogs("webtransport-fallback-to-sctp-triggered");
		try {
			t(Z);
		} catch (e) {
			o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Fallback handler threw: ", ""])), e).sendLogs("webtransport-fallback-handler-fail");
		}
	}
	function re(e) {
		o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Packet handler registered, draining ", " pending packets"])), Q.length), j = e;
		for (var t of Q) try {
			e(t.packet, t.ip, t.port);
		} catch (e) {
			o("WALogger").WARN(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Error draining pending packet: ", ""])), e);
		}
		Q = [];
	}
	function oe(e, t) {
		var n;
		return {
			state: o("WAWebVoipRelayConnectionUtils").ConnectionState.None,
			transport: null,
			datagramWriter: null,
			datagramReader: null,
			packetBuffer: o("WAWebVoipRelayConnectionUtils").createPacketBuffer(),
			id: e,
			connectionTimeout: null,
			hasReceivedFirstPacket: !1,
			stats: o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(),
			connectionStartTime: 0,
			relayId: t.relayId,
			relayIp: t.ip,
			relayPort: t.port,
			clusterDomain: (n = t.clusterDomain) != null ? n : null,
			relayConnectionInfo: t
		};
	}
	function ae(e) {
		var t, n = V.get(e);
		return n != null ? n : (t = W.get(e)) == null ? void 0 : t.relayConnectionInfo;
	}
	function ie(e) {
		e.connectionTimeout != null && (window.clearTimeout(e.connectionTimeout), e.connectionTimeout = null);
	}
	function le(e, t) {
		if (ie(e), e.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed, !G) {
			o("WAWebCoreActionsODS").logCallWebtransportConnectFailed();
			var n = e.clusterDomain;
			n != null && o("WAWebVoipTsLogger").logWebtransportConnectionFailed("https://" + n + "/webtransport");
		}
		var r = e.clusterDomain;
		r != null && H.get(r) === t && H.delete(r), W.delete(t), ne();
	}
	function se(e) {
		var t = e.authToken, n = e.clusterDomain, r = e.token;
		if (n == null || !n.endsWith(".whatsapp.com")) return o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Invalid clusterDomain: ", ""])), n != null ? n : "null").sendLogs("webtransport-invalid-cluster-domain"), null;
		var a = "https://" + n + "/webtransport", i = new URLSearchParams();
		return i.set("token", r), t != null && i.set("auth", t), a + "?" + i.toString();
	}
	async function ue(e, t) {
		var n = e.transport;
		if (n != null) try {
			var r = n.datagrams.readable.getReader();
			for (e.datagramReader = r;;) {
				var a = await r.read(), i = a.done, l = a.value;
				if (i) break;
				l != null && ce(t, l);
			}
		} catch (e) {
			W.has(t) && o("WALogger").WARN(y || (y = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [WebTransportConnectionManager] Datagram reader error for ",
				": ",
				""
			])), t, e);
		}
	}
	function ce(e, t) {
		var n = W.get(e);
		if (n != null) {
			n.stats.receivedPackets++, n.stats.receivedBytes += t.byteLength, n.hasReceivedFirstPacket || (n.hasReceivedFirstPacket = !0, n.stats.firstResponseRecvTime = Date.now());
			var r = ae(e);
			if (r == null) {
				o("WALogger").WARN(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] No relay info found for ", ""])), e);
				return;
			}
			var a = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength), i = j;
			if (i == null) {
				Q.length >= K && Q.shift(), Q.push({
					packet: a,
					ip: r.ip,
					port: r.port
				});
				return;
			}
			try {
				i(a, r.ip, r.port);
			} catch (t) {
				o("WALogger").ERROR(b || (b = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [WebTransportConnectionManager] Failed to handle received datagram for ",
					": ",
					""
				])), e, t).sendLogs("webtransport-datagram-handle-fail");
			}
		}
	}
	var de = "WebTransport connect aborted";
	function me(e) {
		var t = function(n) {
			if (e != null && typeof e == "object" && n in e) return e[n];
		}, n = t("name"), r = t("message"), o = t("stack"), a = t("source"), i = t("streamErrorCode"), l = i != null;
		return {
			errorName: n != null ? String(n) : "unknown",
			errorMessage: r != null ? String(r) : String(e),
			errorStack: o != null ? String(o) : "no-stack",
			wtSource: a != null ? String(a) : "n/a",
			wtStreamErrorCode: l ? String(i) : "n/a",
			wtHasStreamErrorCode: l
		};
	}
	function pe(e, t) {
		var n = e.errorMessage, r = e.errorName, o = e.wtHasStreamErrorCode, a = e.wtSource;
		return r !== "WebTransportError" && n === de ? "aborted" : r === "WebTransportError" && a === "session" ? !o && t >= 3e3 && t <= 6e3 ? "handshake_timeout" : t >= 0 && t < 100 ? "immediate_reject" : "session_error" : r === "WebTransportError" && a === "stream" ? "stream_error" : "unknown";
	}
	function _e() {
		var e = o("WAWebVoipLocalCallStateStore").getLocalCallState();
		return !o("WAWebVoipCallStateUtils").isCallTerminal(e) && !o("WAWebVoipCallStateUtils").isCallIncoming(e);
	}
	function fe(e, t, n) {
		var r = t != null && t > 0 ? Date.now() - t : -1, o = me(e), a = o.errorMessage, i = o.errorName, l = o.errorStack, s = o.wtSource, u = o.wtStreamErrorCode;
		return {
			errorName: i,
			errorMessage: a,
			errorStack: l,
			wtSource: s,
			wtStreamErrorCode: u,
			elapsedMs: r,
			transportState: n != null ? "constructed" : "null",
			likelyCause: pe(o, r)
		};
	}
	async function ge(e) {
		var t = e.id, n = e.clusterDomain;
		if (!(n != null && H.has(n))) {
			n != null && H.set(n, t), o("WALogger").LOG(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Connecting to ", ""])), t), o("WAWebCoreActionsODS").logCallWebtransportConnectAttempted(), n != null && o("WAWebVoipTsLogger").logWebtransportConnectionStart("https://" + n + "/webtransport");
			var a = W.get(t);
			a == null && (a = oe(t, e), W.set(t, a)), a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting, a.connectionStartTime = Date.now(), o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptStart(t), a.connectionTimeout = window.setTimeout(function() {
				a != null && a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting && (o("WALogger").WARN(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Connection timeout for ", ""])), t), G || o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory("connection_timeout"), o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(t, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Timeout, "connection_timeout"), le(a, t));
			}, o("WAWebVoipRelayConnectionUtils").CONNECTION_TIMEOUT_MS);
			var i = null;
			try {
				var l = se(e);
				if (l == null) {
					G || o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory("invalid_config"), o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(t, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed, "invalid_config"), le(a, t);
					return;
				}
				var s = B();
				if (s == null) {
					o("WALogger").ERROR(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] WebTransport not supported"]))).sendLogs("webtransport-not-supported"), G || o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory("invalid_config"), o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(t, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed, "invalid_config"), le(a, t);
					return;
				}
				i = new s(l), i.ready.catch(r("WAWebNoop")), i.closed.catch(r("WAWebNoop"));
				var u = U(), c = new Promise(function(e, t) {
					if (u.aborted) {
						t(r("err")("WebTransport connect aborted"));
						return;
					}
					u.addEventListener("abort", function() {
						return t(r("err")("WebTransport connect aborted"));
					}, { once: !0 });
				});
				await Promise.race([i.ready, c]);
				var d = W.get(t);
				if (d == null || d !== a || d.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
					o("WALogger").WARN(L || (L = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Connection ", " was cleaned up during establishment, closing transport"])), t), o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(t, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Aborted, "cleaned_up");
					try {
						i.close();
					} catch (e) {
						o("WALogger").WARN(E || (E = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [WebTransportConnectionManager] Error closing stale transport for ",
							": ",
							""
						])), t, e);
					}
					return;
				}
				ie(a), a.transport = i, a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Open, a.stats.connectionReadyTime = Date.now(), o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(t, o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Opened, null), o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Connection opened for ", ""])), t), o("WAWebCoreActionsODS").logCallWebtransportConnectSucceeded();
				var m = a.clusterDomain;
				m != null && o("WAWebVoipTsLogger").logWebtransportConnectionComplete("https://" + m + "/webtransport"), a.datagramWriter = i.datagrams.writable.getWriter(), ue(a, t), await he(t), i.closed.then(function() {
					if (o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Connection closed for ", ""])), t), a != null) {
						a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed;
						var e = a.clusterDomain;
						e != null && H.get(e) === t && H.delete(e);
					}
				}).catch(function(e) {
					if (o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WebTransportConnectionManager] Connection closed with error for ",
						": ",
						""
					])), t, e), a != null) {
						a.state = o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed;
						var n = a.clusterDomain;
						n != null && H.get(n) === t && H.delete(n);
					}
					ne();
				});
			} catch (e) {
				var p, _ = fe(e, a.connectionStartTime, i);
				o("WAWebVoipWebTransportCallSummary").recordWtRelayAttemptComplete(t, (p = z[_.likelyCause]) != null ? p : o("WAWebVoipWebTransportCallSummary").WtRelayOutcome.Failed, _.likelyCause), G || o("WAWebCoreActionsODS").logCallWebtransportConnectFailByCategory(_.likelyCause);
				var f = o("WALogger").ERROR(D || (D = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [WebTransportConnectionManager] Failed to connect to ",
					" after ",
					"ms: likelyCause=",
					" name=",
					" message=",
					" wtSource=",
					" wtStreamErrorCode=",
					" transport=",
					" stack=",
					""
				])), t, _.elapsedMs, _.likelyCause, _.errorName, _.errorMessage, _.wtSource, _.wtStreamErrorCode, _.transportState, _.errorStack);
				if (_e() && !te() && _.likelyCause !== "aborted" && f.sendLogs("webtransport-connect-fail"), le(a, t), i != null) try {
					i.close();
				} catch (e) {
					o("WALogger").WARN(x || (x = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WebTransportConnectionManager] Error closing transport during cleanup for ",
						": ",
						""
					])), t, e);
				}
			}
		}
	}
	async function he(e) {
		var t = W.get(e);
		if (!(t == null || t.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Open)) {
			var n = t.datagramWriter;
			if (n != null) for (var r = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer); r != null;) {
				try {
					await n.write(new Uint8Array(r)), t.stats.sentPackets++, t.stats.sentBytes += r.byteLength;
				} catch (n) {
					o("WALogger").WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WebTransportConnectionManager] Failed to send buffered packet for ",
						": ",
						""
					])), e, n), t.stats.droppedPackets++;
				}
				r = o("WAWebVoipRelayConnectionUtils").shiftPacket(t.packetBuffer);
			}
		}
	}
	function ye(e) {
		var t = W.get(e);
		if (t != null) {
			if (o("WALogger").LOG(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Cleaning up connection ", ""])), e), ie(t), t.datagramWriter != null) {
				try {
					t.datagramWriter.releaseLock();
				} catch (e) {}
				t.datagramWriter = null;
			}
			if (t.datagramReader != null) {
				try {
					t.datagramReader.releaseLock();
				} catch (e) {}
				t.datagramReader = null;
			}
			if (t.transport != null) {
				try {
					t.transport.close();
				} catch (e) {}
				t.transport = null;
			}
			o("WAWebVoipRelayConnectionUtils").clearPacketBuffer(t.packetBuffer), o("WALogger").LOG(N || (N = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [WebTransportConnectionManager] Connection ",
				" stats - sent: ",
				" (",
				" bytes), received: ",
				" (",
				" bytes), dropped: ",
				""
			])), e, t.stats.sentPackets, t.stats.sentBytes, t.stats.receivedPackets, t.stats.receivedBytes, t.stats.droppedPackets);
			var n = t.clusterDomain;
			n != null && H.get(n) === e && H.delete(n), W.delete(e);
		}
	}
	async function Ce(e, t, n) {
		if (!G) {
			var r = o("WAWebVoipRelayConnectionUtils").getConnectionIdentifier(t, n), a = W.get(r), i = ae(r);
			if (a == null) {
				if (i == null) {
					var l = Array.from(V.keys()).join(",");
					o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WebTransportConnectionManager] No relay info for ",
						", skipping send (pruned candidate). knownRelays=[",
						"]"
					])), r, l);
					return;
				}
				var s = i.clusterDomain, u = s != null ? H.get(s) : void 0, c = u != null ? W.get(u) : void 0;
				c != null ? a = c : (a = oe(r, i), W.set(r, a));
			}
			if (a.stats.firstSendRequestTime === 0 && (a.stats.firstSendRequestTime = Date.now()), a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && a.datagramWriter != null) {
				try {
					await a.datagramWriter.write(new Uint8Array(o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e))), a.stats.sentPackets++, a.stats.sentBytes += e.byteLength;
				} catch (e) {
					o("WALogger").WARN(w || (w = babelHelpers.taggedTemplateLiteralLoose([
						"voip: [WebTransportConnectionManager] Failed to send packet for ",
						": ",
						""
					])), r, e), a.stats.droppedPackets++;
				}
				return;
			}
			if (!be(e, a)) {
				var d = o("WAWebVoipRelayConnectionUtils").bufferPacket(a.packetBuffer, o("WAWebVoipRelayConnectionUtils").copyArrayBuffer(e), a.stats);
				d || o("WALogger").WARN(A || (A = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [WebTransportConnectionManager] Dropping packet for ",
					": size ",
					" exceeds max buffer size"
				])), r, e.byteLength), (a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.None || a.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed) && i != null && ge(i);
			}
		}
	}
	function be(e, t) {
		return t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed || o("WAWebVoipRelayConnectionUtils").inspectPacketType(e) === o("WAWebVoipRelayConnectionUtils").PacketType.NonSTUN ? (t.stats.droppedPackets++, !0) : !1;
	}
	function ve(e) {
		o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Received relay list update"]))), Z = e;
		var t = o("WAWebVoipRelayConnectionUtils").extractRelayConnectionMap(e);
		Re(t) && o("WAWebCoreActionsODS").logCallWebtransportRelaysIpv6Only();
		var n = Se(t), r = 0;
		for (var a of W) {
			var i = a[0], l = a[1], s = n.get(i);
			if (s != null) {
				l.relayConnectionInfo = s;
				continue;
			}
			l.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && l.state !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && r++;
		}
		V = n;
	}
	function Se(e) {
		var t = new Set();
		for (var n of e.values()) n.isIPv6 || t.add(n.relayId);
		var r = new Map();
		for (var o of e) {
			var a = o[0], i = o[1];
			i.isIPv6 && t.has(i.relayId) || r.set(a, i);
		}
		return r;
	}
	function Re(e) {
		if (e.size === 0) return !1;
		for (var t of e.values()) if (!t.isIPv6) return !1;
		return !0;
	}
	function Le() {
		G = !0;
	}
	function Ee() {
		o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: [WebTransportConnectionManager] Closing all connections"]))), q != null && (q.abort(), q = null);
		for (var e of W.keys()) {
			var t = W.get(e);
			if (t != null && t.state === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting) {
				ie(t), W.delete(e);
				continue;
			}
			ye(e);
		}
		V.clear(), H.clear(), Q = [], G && (Y = !1, J = !1, Z = null), o("WAWebVoipWebTransportCallSummary").markWtCallSummaryClosed(), o("WAWebVoipTsLogger").cleanup(), G = !1;
	}
	l.registerFallbackHandler = ee, l.registerPacketHandler = re, l.sendData = Ce, l.handleRelayListUpdate = ve, l.prepareForEndCall = Le, l.closeAllConnections = Ee;
}), 98);
