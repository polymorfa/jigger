__d("WAWebVoipSctpDiagnostics", ["WALogger"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = 1e3;
	function p(e) {
		return e != null ? String(e) : "N/A";
	}
	function _(e) {
		return e != null ? Math.round(e * 1e3) + "ms" : "N/A";
	}
	function f(e) {
		var t, n, r;
		if (e == null) return "N/A";
		var o = (t = e.address) != null ? t : "N/A", a = p(e.port), i = (n = e.protocol) != null ? n : "N/A", l = (r = e.candidateType) != null ? r : "N/A";
		return o + ":" + a + "/" + i + "/" + l;
	}
	async function g(t) {
		var n = t.connectionId, r = t.errorReason, a = t.peerConnection, i = t.workerStats, l = await new Promise(function(t) {
			var i = !1, l = window.setTimeout(function() {
				i || (i = !0, o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [SCTP] getStats snapshot timed out after ",
					"ms for ",
					", reason=",
					""
				])), m, n, r), t(null));
			}, m);
			a.getStats().then(function(e) {
				i || (i = !0, window.clearTimeout(l), t(e));
			}).catch(function(e) {
				i || (i = !0, window.clearTimeout(l), o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
					"voip: [SCTP] getStats snapshot failed for ",
					", reason=",
					": ",
					""
				])), n, r, e), t(null));
			});
		});
		if (l != null) {
			var g = null, h = null, y = "N/A", C = "N/A", b = [];
			if (l.forEach(function(e) {
				if (e.type === "transport") {
					var t = e;
					t.selectedCandidatePairId != null && (h = t.selectedCandidatePairId), y = "dtls=" + p(t.dtlsState) + " " + ("tx=" + p(t.bytesSent) + " ") + ("rx=" + p(t.bytesReceived) + " ") + ("pair=" + p(t.selectedCandidatePairId));
				} else if (e.type === "candidate-pair" && e.nominated === !0) g = e;
				else if (e.type === "sctp-transport") {
					var n = e;
					C = "srtt=" + _(n.smoothedRoundTripTime) + " " + ("cwnd=" + p(n.congestionWindow) + " ") + ("rwnd=" + p(n.receiverWindow) + " ") + ("mtu=" + p(n.mtu) + " ") + ("unack=" + p(n.unackData));
				} else if (e.type === "data-channel") {
					var r, o = e;
					b.push("id=" + p((r = o.dataChannelIdentifier) != null ? r : e.id) + " " + ("label=" + p(o.label) + " ") + ("state=" + p(o.state) + " ") + ("msgTx=" + p(o.messagesSent) + " ") + ("msgRx=" + p(o.messagesReceived) + " ") + ("bytesTx=" + p(o.bytesSent) + " ") + ("bytesRx=" + p(o.bytesReceived)));
				}
			}), g == null && h != null) {
				var v = l.get(h);
				v != null && v.type === "candidate-pair" && (g = v);
			}
			var S = "N/A", R = g;
			if (R != null) {
				var L = R.localCandidateId != null ? l.get(R.localCandidateId) : null, E = R.remoteCandidateId != null ? l.get(R.remoteCandidateId) : null, k = L != null && (L.type === "local-candidate" || L.type === "remote-candidate") ? L : null, I = E != null && (E.type === "local-candidate" || E.type === "remote-candidate") ? E : null;
				S = "state=" + p(R.state) + " " + ("nominated=" + p(R.nominated) + " ") + ("rtt=" + _(R.currentRoundTripTime) + " ") + ("tx=" + p(R.bytesSent) + " ") + ("rx=" + p(R.bytesReceived) + " ") + ("local=" + f(k) + " ") + ("remote=" + f(I));
			}
			o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] getStats snapshot ",
				" reason=",
				" pc=",
				" ice=",
				" workerTxPkt=",
				" workerRxPkt=",
				" transport=",
				" sctp=",
				""
			])), n, r, a.connectionState, a.iceConnectionState, i.sentPackets, i.receivedPackets, y, C), o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] getStats datachannel ",
				" reason=",
				" ",
				""
			])), n, r, b.length > 0 ? b.join(" ; ") : "N/A"), o("WALogger").WARN(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SCTP] getStats pair ",
				" reason=",
				" ",
				""
			])), n, r, S);
		}
	}
	l.logPeerConnectionStatsForError = g;
}), 98);
