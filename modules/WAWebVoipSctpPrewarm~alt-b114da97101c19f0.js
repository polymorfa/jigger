__d("WAWebVoipSctpPrewarm", [
	"WALogger",
	"WAWebAppTracker",
	"WAWebVoipPerfOptimizations",
	"WAWebVoipSctpPrewarmQpl",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = 5e3, c = null;
	function d(e) {
		if (c != null) return c;
		var t = (e == null ? void 0 : e.force) === !0;
		return !t && !o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.SCTP_PREWARM) ? Promise.resolve() : (c = p(), c);
	}
	function m(e) {
		if (e.iceGatheringState === "complete" && e.localDescription != null) {
			var t = e.localDescription, n = t.sdp, r = t.type;
			return Promise.resolve({
				type: r,
				sdp: n
			});
		}
		return new Promise(function(t) {
			e.onicegatheringstatechange = function() {
				if (e.iceGatheringState === "complete" && e.localDescription != null) {
					var n = e.localDescription, r = n.sdp, o = n.type;
					t({
						type: o,
						sdp: r
					});
				}
			};
		});
	}
	async function p() {
		var t = self.performance.now(), n = o("WAWebVoipSctpPrewarmQpl").startVoipSctpPrewarmQpl(), a = null, i = null, l = null;
		try {
			o("WAWebAppTracker").AppTracker.mark(o("WAWebAppTracker").AppTrackerType.VoipSctpPrewarm), a = new RTCPeerConnection(), i = new RTCPeerConnection(), await Promise.race([_(a, i), new Promise(function(e, t) {
				l = window.setTimeout(function() {
					t(r("err")("SctpPrewarm timeout"));
				}, u);
			})]);
			var c = (self.performance.now() - t).toFixed(1);
			o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [SctpPrewarm] completed in ", "ms"])), c), o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplSuccess(n);
		} catch (e) {
			var d = (self.performance.now() - t).toFixed(1);
			o("WALogger").WARN(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"voip: [SctpPrewarm] failed after ",
				"ms: ",
				""
			])), d, String(e)), o("WAWebVoipSctpPrewarmQpl").endVoipSctpPrewarmQplFail(n, "prewarm_failed");
		} finally {
			var m, p;
			l != null && window.clearTimeout(l), (m = a) == null || m.close(), (p = i) == null || p.close();
		}
	}
	async function _(e, t) {
		var n = {
			negotiated: !0,
			id: 0,
			ordered: !1,
			maxRetransmits: 0
		}, r = e.createDataChannel("sctp-prewarm", n);
		t.createDataChannel("sctp-prewarm", n);
		var o = new Promise(function(e) {
			r.onopen = function() {
				return e();
			};
		}), a = await e.createOffer();
		await e.setLocalDescription(a);
		var i = await m(e);
		await t.setRemoteDescription(i);
		var l = await t.createAnswer();
		await t.setLocalDescription(l);
		var s = await m(t);
		await e.setRemoteDescription(s), await o;
	}
	l.default = d;
}), 98);
