__d("WAWebVoipSctpDataChannelThreadManager", [
	"WALogger",
	"WAWebABProps",
	"WAWebVoipGatingUtils",
	"WAWebVoipSctpDataChannelThread",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b = null, v = null, S = null;
	function R() {
		if (S != null) return S;
		var t = null;
		try {
			t = new RTCPeerConnection();
			var n = t.createDataChannel("__transfer_probe__", {
				negotiated: !0,
				id: 0
			}), r = new MessageChannel();
			r.port1.postMessage({ ch: n }, [n]), r.port1.close(), r.port2.close(), S = !0;
		} catch (e) {
			S = !1;
		} finally {
			var a;
			(a = t) == null || a.close();
		}
		return o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] RTCDataChannel transfer supported: ", ""])), String(S)), S === !0;
	}
	async function L(e) {
		var t = o("WAWebABProps").getABPropConfigValue("enable_web_voip_proxy_and_sctp_workers");
		if (o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] init shouldEnable=", ""])), String(t)), !t) return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] disabled by ABProp, skip"]))), !1;
		if (!R()) return o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] no RTCDataChannel transfer support, skip"]))), !1;
		if (v != null && v.isActive()) return o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] thread already active, reuse"]))), !0;
		if (b != null) {
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Awaiting existing pthread creation promise"])));
			try {
				var n, a;
				return v = await b, o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Existing promise resolved, thread active: ", ""])), String((n = (a = v) == null ? void 0 : a.isActive()) != null ? n : !1)), v != null && v.isActive();
			} catch (e) {
				return o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Existing promise rejected: ", ""])), String(e)), !1;
			}
		}
		o("WALogger").LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] init WASM pthread for RTCDataChannel I/O"]))), b = r("WAWebVoipSctpDataChannelThread").create();
		try {
			var i, l, y, C;
			return v = await b, (i = v) == null || i.setRemoveRelayPortOverride(o("WAWebVoipGatingUtils").shouldUseOriginalRelayPort()), (l = v) == null || l.setSctpTimeoutMs(e()), (y = v) == null || y.setRelayParkedTxIdleMs(r("justknobx")._("1307") || 0), o("WALogger").LOG(g || (g = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] WASM pthread created successfully"]))), (C = v) == null || C.ping(), !0;
		} catch (e) {
			return o("WALogger").ERROR(h || (h = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Failed to create WASM pthread: ", ""])), e), b = null, !1;
		}
	}
	function E() {
		return v != null && v.isActive();
	}
	function k() {
		return v != null && v.isActive() ? v : null;
	}
	async function I() {
		if (b = null, v == null || !v.isActive()) {
			v = null;
			return;
		}
		o("WALogger").LOG(y || (y = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] Shutting down WASM pthread"])));
		var e = v;
		v = null, await e.shutdown(), o("WALogger").LOG(C || (C = babelHelpers.taggedTemplateLiteralLoose(["voip: [DCThread] WASM pthread shutdown complete"])));
	}
	l.initDataChannelWorker = L, l.isDataChannelThreadActive = E, l.getDataChannelThread = k, l.stopDataChannelWorker = I;
}), 98);
