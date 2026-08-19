__d("WAWebVoipP2PConnectionManager", [
	"WALogger",
	"WAWebABProps",
	"WAWebVoipRelayConnectionUtils",
	"WAWebVoipSctpDataChannelThreadManager",
	"WAWebVoipSctpStatsInstrumentation",
	"WAWebVoipStackInterface",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B, W, q, U, V, H, G, z, j, K, Q, X, Y, J, Z, ee, te, ne = { urls: "stun:edge-stun.facebook.com:3478" }, re = null, oe = null, ae = null, ie = !1, le = 0, se = {
		DATA_CHANNEL_LABEL: "wa-web-p2p",
		DATA_CHANNEL_ID: 0,
		CONNECTION_TIMEOUT_MS: 3e4,
		MAX_BUFFERED_CANDIDATES: 20
	}, ue = null, ce = null, de = o("WAWebVoipRelayConnectionUtils").ConnectionState.None, me = !1, pe = !1, _e = !1, fe = !1, ge = null, he = !1, ye = null, Ce = null, be = null, ve = null, Se = null, Re = null, Le = null, Ee = [], ke = [], Ie = !1, Te = !1, De = null, xe = null, $e = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(), Pe = 0, Ne = null, Me = null, we = null, Ae = null;
	function Fe() {
		return ue != null && de === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open ? [{
			connectionId: "p2p",
			peerConnection: ue
		}] : [];
	}
	function Oe(e) {
		var t = e.match(/candidate:\S+\s+\d+\s+\S+\s+(\d+)\s+(\S+)\s+(\d+)\s+typ\s+\S+/);
		if (t == null) return null;
		var n = parseInt(t[1], 10), r = t[2], o = parseInt(t[3], 10);
		if (r.endsWith(".local")) return null;
		var a = Math.min(255, Math.floor(n / Math.pow(2, 24)));
		return {
			ip: r,
			port: o,
			priority: a
		};
	}
	function Be(e) {
		var t = e.priority * Math.pow(2, 24);
		return "candidate:1 1 UDP " + t + " " + e.ip + " " + e.port + " typ host";
	}
	function We(t, n, r, a, i, l, c, d) {
		var m = t;
		m = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(m, n, r), m = o("WAWebVoipRelayConnectionUtils").replaceDtlsFingerprint(m, a, i), d ? c ? (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] SDP: setting remote setup=passive (caller, local DTLS role=active/client)"]))), m = m.replace(/a=setup:[^\r\n]+/g, "a=setup:passive")) : (o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] SDP: setting remote setup=active (callee, local DTLS role=passive/server)"]))), m = m.replace(/a=setup:[^\r\n]+/g, "a=setup:active")) : (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] SDP: setting remote setup=active (peer is native, local DTLS role=passive/server)"]))), m = m.replace(/a=setup:[^\r\n]+/g, "a=setup:active")), m = o("WAWebVoipRelayConnectionUtils").removeIceCandidates(m);
		var p = l.map(function(e) {
			return "a=" + e.candidate + `\r
`;
		}).join(""), _ = m.replace(/\s+$/, `\r
`);
		return _ + p;
	}
	function qe(e) {
		de = e, Me != null && Me(e);
	}
	function Ue() {
		if (De != null && (window.clearTimeout(De), De = null), !_e && ce != null) try {
			ce.close();
		} catch (e) {
			o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Error closing data channel: ", ""])), e);
		}
		if (ce = null, ue != null) {
			try {
				ue.close();
			} catch (e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Error closing peer connection: ", ""])), e);
			}
			ue = null;
		}
	}
	function Ve(e) {
		de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && (o("WALogger").ERROR(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Connection failed, reason: ", ""])), e), qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed), He(), Ue());
	}
	function He() {
		if (_e && ge != null) {
			var e = ge, t = o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
			t != null && t.closeChannel(e), _e = !1, ge = null;
		}
	}
	function Ge() {
		if (!(ue == null || !Te)) {
			var e = ue, t = ke;
			ke = [];
			for (var n of t) {
				var r = Be(n);
				e.addIceCandidate(new RTCIceCandidate({
					sdpMLineIndex: 0,
					sdpMid: "0",
					candidate: r
				})).then(function() {}, function(e) {
					o("WALogger").WARN(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to add buffered remote candidate: ", ""])), e);
				});
			}
		}
	}
	async function ze() {
		if (!(ve == null || Se == null || Re == null || Le == null || ue == null || xe == null) && !(Te || Ie)) {
			var e = ue;
			Ie = !0;
			try {
				if (me) {
					var t = We(xe, ve, Se, Re, Le, [], !0, pe);
					o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Applying synthetic answer SDP (caller, ICE role=controlling)"]))), await e.setRemoteDescription({
						sdp: t,
						type: "answer"
					});
				} else {
					var n, r = We(xe, ve, Se, Re, Le, [], !1, pe);
					o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Applying synthetic offer SDP (callee, ICE role=controlled)"]))), await e.setRemoteDescription({
						sdp: r,
						type: "offer"
					});
					var a = await e.createAnswer(), i = (n = a.sdp) != null ? n : "", l = Ce;
					if (l != null) {
						var s = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(i);
						s != null && s.ufrag !== l.ufrag && (o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [P2PConnectionManager] Answer ufrag ",
							" differs from proactive ufrag ",
							", forcing match"
						])), s.ufrag, l.ufrag), i = o("WAWebVoipRelayConnectionUtils").replaceIceCredentials(i, l.ufrag, l.pwd));
					}
					if (await e.setLocalDescription({
						type: "answer",
						sdp: i
					}), Ce = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(i), be = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(i), Ce == null || be == null) {
						o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to extract credentials from answer SDP"]))), Ie = !1, Ve("credential_extraction_failed");
						return;
					}
					o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Callee local credentials extracted from answer"])));
					var u = Ae;
					if (u != null) try {
						u(Ce.ufrag, Ce.pwd, be.algorithm, be.fingerprint, []);
					} catch (e) {
						o("WALogger").ERROR(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to send callee transport: ", ""])), e);
					}
				}
				o("WALogger").LOG(b || (b = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Remote description applied successfully"]))), Te = !0, Ie = !1, Ge();
			} catch (e) {
				Ie = !1, Te = !1, o("WALogger").ERROR(v || (v = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to apply remote description: ", ""])), e), Ve("remote_description_failed");
			}
		}
	}
	function je(e) {
		if (e.candidate != null) {
			var t, n, r = e.candidate;
			if (r.protocol === "tcp") return;
			var a = {
				sdpMLineIndex: (t = r.sdpMLineIndex) != null ? t : 0,
				sdpMid: (n = r.sdpMid) != null ? n : "0",
				candidate: r.candidate
			};
			Ee.push(a), we != null && we(a);
			var i = Ae;
			if (i != null) {
				var l = Ce, s = be;
				if (l != null && s != null) {
					var u = Oe(a.candidate);
					if (u != null) try {
						i(l.ufrag, l.pwd, s.algorithm, s.fingerprint, [u]);
					} catch (e) {
						o("WALogger").ERROR(S || (S = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to send candidate transport: ", ""])), e);
					}
				}
			}
		} else o("WALogger").LOG(R || (R = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] ICE gathering complete"])));
	}
	function Ke() {
		if (ue != null) {
			var e = ue, t = e.iceConnectionState;
			o("WALogger").LOG(L || (L = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [P2PConnectionManager] ICE connection state: ",
				" (isCaller=",
				", gathering=",
				", signaling=",
				")"
			])), t, String(me), e.iceGatheringState, e.signalingState), (t === "failed" || t === "disconnected") && e.getStats().then(function(e) {
				e.forEach(function(e) {
					if (e.type === "candidate-pair") {
						var t = e;
						o("WALogger").LOG(E || (E = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [P2PConnectionManager] candidate-pair: state=",
							", nominated=",
							", local=",
							", remote=",
							""
						])), String(t.state), String(t.nominated), String(t.localCandidateId), String(t.remoteCandidateId));
					} else if (e.type === "local-candidate") {
						var n = e;
						o("WALogger").LOG(k || (k = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [P2PConnectionManager] local-candidate: ",
							" ",
							" port=",
							""
						])), String(n.candidateType), String(n.protocol), String(n.port));
					} else if (e.type === "remote-candidate") {
						var r = e;
						o("WALogger").LOG(I || (I = babelHelpers.taggedTemplateLiteralLoose([
							"voip: [P2PConnectionManager] remote-candidate: ",
							" ",
							" port=",
							""
						])), String(r.candidateType), String(r.protocol), String(r.port));
					}
				});
			}).catch(function(e) {
				o("WALogger").WARN(T || (T = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] getStats failed"]))).catching(r("getErrorSafe")(e)).sendLogs("p2p-getstats-failed");
			}), t === "failed" && Ve("ice_connection_failed");
		}
	}
	function Qe() {
		var e, t = "N/A";
		$e.connectionReadyTime !== 0 && Pe > 0 && (t = ($e.connectionReadyTime - Pe).toString()), o("WALogger").LOG(D || (D = babelHelpers.taggedTemplateLiteralLoose([
			`voip: [P2PConnectionManager] Connection stats:
    ConnectionId: `,
			`,
    Sent: `,
			` packets,
    Received: `,
			` packets,
    Sent Bytes: `,
			` bytes,
    Received Bytes: `,
			` bytes,
    Connection Setup Time: `,
			` ms,
    Transferred to worker: `,
			""
		])), (e = ge != null ? ge : ye) != null ? e : "N/A", $e.sentPackets, $e.receivedPackets, $e.sentBytes, $e.receivedBytes, t, String(fe));
	}
	function Xe() {
		o("WALogger").LOG(x || (x = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Data channel opened"]))), qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Open), $e.connectionReadyTime = Date.now(), _e || o("WAWebVoipSctpStatsInstrumentation").addConnectionSource("p2p", Fe), De != null && (window.clearTimeout(De), De = null);
	}
	function Ye() {
		o("WALogger").LOG($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Data channel closed"]))), de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && (qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed), Ue());
	}
	function Je(e) {
		Ne != null && o("WAWebVoipRelayConnectionUtils").dataToArrayBuffer(e.data).then(function(e) {
			e != null && Ne != null && ($e.receivedPackets++, $e.receivedBytes += e.byteLength, Ne(e));
		});
	}
	function Ze(e) {
		o("WALogger").ERROR(P || (P = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Data channel error"]))), Ve("data_channel_error");
	}
	function et(e) {
		e.onopen = function() {
			Xe();
		}, e.onclose = function() {
			Ye();
		}, e.onmessage = function(e) {
			Je(e);
		}, e.onerror = function(e) {
			Ze(e);
		};
	}
	async function tt(e, t, n, a) {
		ue != null && (o("WALogger").WARN(N || (N = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] initP2PConnection called while already initialized, cleaning up"]))), nt()), ie = !0, o("WALogger").LOG(M || (M = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [P2PConnectionManager] Initializing P2P connection, caller=",
			", peerIsWebBrowser=",
			""
		])), String(e), String(t)), me = e, pe = t, Ae = a != null ? a : null;
		var i = new RTCPeerConnection({ iceServers: [].concat(n, [ne]) });
		ue = i, i.onicecandidate = function(e) {
			je(e);
		}, i.oniceconnectionstatechange = function() {
			Ke();
		}, i.onconnectionstatechange = function() {
			o("WALogger").LOG(w || (w = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] PeerConnection state: ", ""])), i.connectionState);
		}, i.onicegatheringstatechange = function() {
			o("WALogger").LOG(A || (A = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] ICE gathering state: ", ""])), i.iceGatheringState);
		}, i.onsignalingstatechange = function() {
			o("WALogger").LOG(F || (F = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Signaling state: ", ""])), i.signalingState);
		};
		var l = i.createDataChannel(se.DATA_CHANNEL_LABEL, babelHelpers.extends({}, o("WAWebVoipRelayConnectionUtils").BASE_DATA_CHANNEL_OPTIONS));
		l.binaryType = "arraybuffer", ce = l;
		var s = o("WAWebVoipRelayConnectionUtils").isDcTransferDisabled(), u = s ? null : o("WAWebVoipSctpDataChannelThreadManager").getDataChannelThread();
		if (s && o("WALogger").LOG(O || (O = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] DC transfer disabled for current browser, using main-thread path"]))), u != null && re != null && ae != null) {
			var c = re, d = ae, m = c + ":" + d, p = o("WAWebABProps").getABPropConfigValue("voip_enable_webrtc_stats_polling") === !0, _ = u.transferChannel(l, m, c, d, p);
			_ ? (_e = !0, fe = !0, ge = m, o("WALogger").LOG(B || (B = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] DataChannel transferred to worker thread as ", ""])), m)) : o("WALogger").WARN(W || (W = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] DataChannel transfer failed, using main-thread path"])));
		}
		if (_e || et(l), e) {
			var f, g = await i.createOffer();
			await i.setLocalDescription(g);
			var h = (f = g.sdp) != null ? f : "";
			if (xe = h, Ce = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(h), be = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(h), Ce == null || be == null) {
				o("WALogger").ERROR(q || (q = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to extract local credentials from offer SDP"]))), Ve("credential_extraction_failed");
				return;
			}
			o("WALogger").LOG(U || (U = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Caller offer created, local credentials extracted"])));
			var y = Ae;
			if (y != null && Ce != null && be != null) {
				o("WALogger").LOG(V || (V = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Sending initial credentials to remote peer"])));
				try {
					y(Ce.ufrag, Ce.pwd, be.algorithm, be.fingerprint, []);
				} catch (e) {
					o("WALogger").ERROR(H || (H = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to send initial transport"]))).catching(r("getErrorSafe")(e)).sendLogs("p2p-caller-send-initial-transport-failed");
				}
			}
		} else {
			var C, b = await i.createOffer(), v = (C = b.sdp) != null ? C : "";
			if (xe = v, Ce = o("WAWebVoipRelayConnectionUtils").extractIceCredentials(v), be = o("WAWebVoipRelayConnectionUtils").extractDtlsFingerprint(v), Ce == null || be == null) {
				o("WALogger").ERROR(G || (G = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to extract local credentials from callee template SDP"]))).sendLogs("p2p-callee-credential-extraction-failed"), Ve("credential_extraction_failed");
				return;
			}
			o("WALogger").LOG(z || (z = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Callee template SDP generated, sending proactive credentials"])));
			var S = Ae;
			if (S != null) try {
				S(Ce.ufrag, Ce.pwd, be.algorithm, be.fingerprint, []);
			} catch (e) {
				o("WALogger").ERROR(j || (j = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to send callee initial transport"]))).catching(r("getErrorSafe")(e)).sendLogs("p2p-callee-send-initial-transport-failed");
			}
		}
		ze(), Pe = Date.now(), qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting), De = window.setTimeout(function() {
			de === o("WAWebVoipRelayConnectionUtils").ConnectionState.Connecting && Ve("connection_timeout");
		}, se.CONNECTION_TIMEOUT_MS);
	}
	function nt() {
		ve = null, Se = null, Re = null, Le = null, ke = [], Ie = !1, Te = !1, ie = !1, le++, de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.None && (o("WALogger").LOG(K || (K = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Cleaning up P2P connection"]))), _e ? (he = !0, ye = ge) : Pe > 0 && Qe(), o("WAWebVoipSctpStatsInstrumentation").removeConnectionSource("p2p"), He(), Ue(), qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.None), me = !1, Ce = null, be = null, Ee = [], xe = null, Ae = null, he || ($e = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(), Pe = 0, fe = !1));
	}
	function rt() {
		return Ce;
	}
	function ot() {
		return be;
	}
	function at(e) {
		o("WALogger").LOG(Q || (Q = babelHelpers.taggedTemplateLiteralLoose([
			"voip: [P2PConnectionManager] Received remote credentials (ufrag=",
			", pwd_len=",
			", algo=",
			", fp_len=",
			", isCaller=",
			")"
		])), e.ufrag, String(e.pwd.length), e.algorithm, String(e.fingerprint.length), String(me)), ve = e.ufrag, Se = e.pwd, Re = e.algorithm, Le = e.fingerprint, ze();
	}
	function it(e) {
		if (Te && ue != null) {
			var t = ue, n = Be(e);
			t.addIceCandidate(new RTCIceCandidate({
				sdpMLineIndex: 0,
				sdpMid: "0",
				candidate: n
			})).then(function() {}, function(e) {
				o("WALogger").WARN(X || (X = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to add remote candidate: ", ""])), e);
			});
		} else ke.length < se.MAX_BUFFERED_CANDIDATES ? ke.push(e) : o("WALogger").WARN(Y || (Y = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Dropping remote ICE candidate, buffer full (", ")"])), ke.length);
	}
	function lt(e) {
		if (_e) return !0;
		if (de === o("WAWebVoipRelayConnectionUtils").ConnectionState.Open && ce != null && ce.readyState === "open") try {
			return ce.send(e), $e.sentPackets++, $e.sentBytes += e.byteLength, !0;
		} catch (e) {
			return o("WALogger").ERROR(J || (J = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Failed to send P2P data: ", ""])), e), !1;
		}
		return !1;
	}
	function st(e) {
		Ne = e;
	}
	function ut(e) {
		Me = e;
	}
	function ct(e) {
		we = e;
	}
	function dt() {
		return ie;
	}
	async function mt(e) {
		var t = le;
		try {
			var n = await o("WAWebVoipStackInterface").getVoipStackInterface(), a = n != null && n.type === "web" ? await n.isWebP2PEnabled(e) : !1;
			t === le && (ie = a);
		} catch (e) {
			o("WALogger").ERROR(Z || (Z = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] refreshP2PEnablement failed"]))).catching(r("getErrorSafe")(e)), t === le && (ie = !1);
		}
	}
	function pt(e, t, n) {
		re = e, oe = t, ae = n;
	}
	function _t(e, t) {
		return t === ae && (e === re || e === oe);
	}
	function ft() {
		return ge;
	}
	function gt(e) {
		return e === ge || he && e === ye;
	}
	function ht() {
		_e && (o("WALogger").LOG(ee || (ee = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Worker reported P2P channel opened"]))), Xe());
	}
	function yt(e) {
		var t = _e || he;
		t && (o("WALogger").LOG(te || (te = babelHelpers.taggedTemplateLiteralLoose(["voip: [P2PConnectionManager] Worker reported P2P channel closed"]))), e != null && ($e.sentPackets += e.sentPackets, $e.sentBytes += e.sentBytes, $e.receivedPackets += e.receivedPackets, $e.receivedBytes += e.receivedBytes, e.firstSendTime > 0 && $e.firstSendRequestTime === 0 && ($e.firstSendRequestTime = e.firstSendTime), e.firstResponseRecvTime > 0 && $e.firstResponseRecvTime === 0 && ($e.firstResponseRecvTime = e.firstResponseRecvTime)), Qe(), he = !1, ye = null, $e = o("WAWebVoipRelayConnectionUtils").createEmptyConnectionStats(), Pe = 0, fe = !1, _e && (de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Failed && de !== o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed && qe(o("WAWebVoipRelayConnectionUtils").ConnectionState.Closed), _e = !1, ge = null, Ue()));
	}
	l.parseSdpCandidateToTransport = Oe, l.initP2PConnection = tt, l.cleanupP2PConnection = nt, l.getLocalIceCredentials = rt, l.getLocalDtlsFingerprint = ot, l.handleRemoteCredentials = at, l.handleRemoteCandidate = it, l.sendP2PData = lt, l.registerOnDataChannelMessage = st, l.registerOnDataChannelStateChange = ut, l.registerOnIceCandidate = ct, l.isP2PEnabled = dt, l.refreshP2PEnablement = mt, l.initP2PVirtualAddresses = pt, l.isP2PVirtualAddress = _t, l.getP2PConnectionId = ft, l.isP2PConnectionId = gt, l.handleWorkerP2PChannelOpened = ht, l.handleWorkerP2PChannelClosed = yt;
}), 98);
