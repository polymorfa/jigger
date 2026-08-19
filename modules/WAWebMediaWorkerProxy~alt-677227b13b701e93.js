__d("WAWebMediaWorkerProxy", ["cr:36997"], (function(t, n, r, o, a, i, l) {
	"use strict";
	async function e(e) {
		return n("cr:36997").calculateFilehashInWorker(e);
	}
	async function s(e, t, r) {
		return n("cr:36997").hmacSha256InWorker(e, t, r);
	}
	async function u(e) {
		return n("cr:36997").transcodeToMp4InWorker(e);
	}
	async function c(e) {
		return n("cr:36997").mp4RepairMuxInWorker(e);
	}
	async function d(e) {
		return n("cr:36997").kaleidoscopeClassifyInWorker(e);
	}
	function m(e) {
		if (e == null) return null;
		var t = {};
		return e.iptc != null && (t.iptc = e.iptc), e.c2pa != null && (t.c2pa = e.c2pa), t.iptc == null && t.c2pa == null ? null : t;
	}
	async function p(e) {
		var t = await n("cr:36997").detectAiProvenanceInWorker(e), r = t.engineErrorCode, o = t.provenance, a = t.transferredBuffer;
		return {
			transferredBuffer: a,
			provenance: m(o),
			engineErrorCode: r
		};
	}
	function _(e) {
		n("cr:36997").prewarmMediaWasmWorker(e);
	}
	l.calculateFilehashInWorker = e, l.hmacSha256InWorker = s, l.transcodeToMp4InWorker = u, l.mp4RepairMuxInWorker = c, l.kaleidoscopeClassifyInWorker = d, l.detectAiProvenanceInWorker = p, l.prewarmMediaWasmWorker = _;
}), 98);
