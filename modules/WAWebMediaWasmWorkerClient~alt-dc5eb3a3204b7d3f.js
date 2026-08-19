__d("WAWebMediaWasmWorkerClient", [
	"FBLogger",
	"QPLUserFlow",
	"WAByteArray",
	"WACustomError",
	"WAPromiseTimeout",
	"WAResultOrError",
	"WAWebCallsOnlyGating",
	"WAWebMediaWasmWorkerResource",
	"WAWebNoop",
	"WorkerBundleResource",
	"WorkerMessagePort",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P = function() {
		return r("FBLogger")("media_platform").tags(["WAWebMediaWasmWorkerClient"]);
	}, N = o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ? null : F();
	function M() {
		return N == null && (N = F()), N;
	}
	var w = 3e4, A = 1e4;
	function F() {
		var t = o("WorkerBundleResource").createDedicatedWebWorker(r("WAWebMediaWasmWorkerResource")), n = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(t, "WAWebMediaWasmWorker");
		return n.addMessageListener("log", function(t) {
			var n = t.logType, r = t.message;
			switch (n) {
				case "dev":
					P().DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["from worker: ", ""])), r);
					break;
				case "error":
					P().MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["worker error: ", ""])), r);
					break;
				default:
			}
		}), n.addMessageListener("qpl", function(e) {
			O(e);
		}), n;
	}
	function O(e) {
		var t = e.action, n = e.event;
		switch (t.type) {
			case "point": {
				r("QPLUserFlow").addPoint(n, t.pointName, { instanceKey: t.instanceKey });
				break;
			}
			case "annotations": {
				r("QPLUserFlow").addAnnotations(n, t.annotations, { instanceKey: t.instanceKey });
				break;
			}
			default: P().MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Unknown QPL action type from worker: ", ""])), t.type);
		}
	}
	function B(e) {
		e == null || e.addPoint("get_connected_worker_port_start");
		var t = M();
		return o("WAPromiseTimeout").promiseTimeout(t.fullyConnected, w).then(function(t) {
			return e == null || e.addPoint("get_connected_worker_port_end"), o("WAResultOrError").makeResult(t);
		}).catch(function(t) {
			return e == null || e.addPoint("get_connected_worker_port_fail", { string: { workerPortFailure: t instanceof o("WACustomError").TimeoutError ? "timeout" : "runtime-error" } }), t instanceof o("WACustomError").TimeoutError ? o("WAResultOrError").makeError("worker-connection-timeout") : (P().MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["worker-connection-runtime-error: ", ""])), r("getErrorSafe")(t).message), o("WAResultOrError").makeError("worker-connection-runtime-error"));
		});
	}
	var W = 0;
	function q() {
		return ++W;
	}
	async function U(e) {
		var t = q();
		P().INFO(d || (d = babelHelpers.taggedTemplateLiteralLoose([
			"calculateFilehashInWorker[",
			"]: sending ",
			"MB to worker"
		])), t, Math.floor(e.byteLength / (1024 * 1024)));
		var n = await B();
		if (!n.success) return {
			transferredBuffer: e,
			result: o("WAResultOrError").makeError(n.error)
		};
		var r = n.value, a = r.onMessageOnce("calculateFilehashResponse", function(e) {
			return e.requestId === t;
		});
		r.postMessage({
			buffer: e,
			requestId: t,
			type: "calculateFilehashRequest"
		}, [e]);
		var i = await a, l = i.output, s = i.transferredBuffer;
		return l.success ? (P().INFO(m || (m = babelHelpers.taggedTemplateLiteralLoose(["calculateFilehashInWorker[", "]: received result from worker"])), t), {
			transferredBuffer: s,
			result: o("WAResultOrError").makeResult({ filehash: l.value })
		}) : (P().MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose([
			"calculateFilehashInWorker[",
			"]: failed: ",
			""
		])), t, l.error.errorMessage), {
			transferredBuffer: s,
			result: o("WAResultOrError").makeError(l.error.errorType)
		});
	}
	async function V(e, t, n) {
		var r = q();
		P().INFO(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
			"hmacSha256InWorker[",
			"]: sending ",
			"MB to worker"
		])), r, Math.floor(t.byteLength / (1024 * 1024)));
		var a = await B();
		if (!a.success) return {
			transferredKeyBuffer: e,
			transferredBuffer: t,
			result: o("WAResultOrError").makeError(a.error)
		};
		var i = a.value, l = i.onMessageOnce("calculateHmacSha256Response", function(e) {
			return e.requestId === r;
		});
		i.postMessage({
			keyBuffer: e,
			buffer: t,
			length: n,
			requestId: r,
			type: "calculateHmacSha256Request"
		}, [e, t]);
		var s = await l, u = s.output, c = s.transferredBuffer, d = s.transferredKeyBuffer;
		return u.success ? (P().INFO(f || (f = babelHelpers.taggedTemplateLiteralLoose(["hmacSha256InWorker[", "]: received result from worker"])), r), {
			transferredKeyBuffer: d,
			transferredBuffer: c,
			result: o("WAResultOrError").makeResult({ hmac: u.value })
		}) : (P().MUSTFIX(g || (g = babelHelpers.taggedTemplateLiteralLoose([
			"hmacSha256InWorker[",
			"]: failed: ",
			""
		])), r, u.error.errorMessage), {
			transferredKeyBuffer: d,
			transferredBuffer: c,
			result: o("WAResultOrError").makeError(u.error.errorType)
		});
	}
	async function H(e) {
		var t = e.eventFlow, n = e.input, r = e.mimeType, a = e.supportsHevc;
		P().INFO(h || (h = babelHelpers.taggedTemplateLiteralLoose(["transcodeToMp4InWorker processing video"])));
		var i = q();
		P().INFO(y || (y = babelHelpers.taggedTemplateLiteralLoose(["sending input bytes to worker, requestId: ", ""])), i);
		var l = await B(t);
		if (!l.success) return o("WAResultOrError").makeError(l.error);
		var s = l.value, u = s.onMessageOnce("transcodeToMp4Response", function(e) {
			return e.requestId === i;
		}), c = o("WAByteArray").uint8ArrayToBuffer(n), d = c ? [c] : void 0;
		s.postMessage({
			input: c,
			requestId: i,
			mimeType: r,
			supportsHevc: a,
			type: "transcodeToMp4Request",
			qplData: t.flowDetails
		}, d), t == null || t.addPoint("sent_request_to_media_worker_start");
		var m = await u, p = m.output;
		return P().INFO(C || (C = babelHelpers.taggedTemplateLiteralLoose([
			"received output from worker, requestId: ",
			", success: ",
			""
		])), i, p.success), p.success ? (t == null || t.addPoint("sent_request_to_media_worker_end"), p) : (t == null || t.addPoint("sent_request_to_media_worker_end"), t == null || t.addAnnotations({ string: { errorMessage: p.error.errorMessage } }), o("WAResultOrError").makeError(p.error.errorType));
	}
	async function G(e) {
		var t = e.eventFlow, n = e.input;
		P().INFO(b || (b = babelHelpers.taggedTemplateLiteralLoose(["mp4RepairMuxInWorker processing video"])));
		var r = q();
		P().INFO(v || (v = babelHelpers.taggedTemplateLiteralLoose(["sending input bytes to worker, requestId: ", ""])), r);
		var a = await B(t);
		if (!a.success) return o("WAResultOrError").makeError(a.error);
		var i = a.value, l = i.onMessageOnce("mediaOperationResponse", function(e) {
			return e.requestId === r;
		}), s = o("WAByteArray").uint8ArrayToBuffer(n), u = s ? [s] : void 0;
		i.postMessage({
			operation: "mp4RepairMux",
			input: s,
			requestId: r,
			type: "mediaOperationRequest"
		}, u), t == null || t.addPoint("sent_request_to_media_worker_start");
		var c = await l, d = c.output;
		return d.success ? (P().INFO(S || (S = babelHelpers.taggedTemplateLiteralLoose(["received output from worker, requestId: ", ""])), r), t == null || t.addPoint("sent_request_to_media_worker_end"), o("WAResultOrError").makeResult(d.value)) : (P().MUSTFIX(R || (R = babelHelpers.taggedTemplateLiteralLoose([
			"requestId: ",
			", error: ",
			""
		])), r, d.error.errorMessage), t == null || t.addPoint("sent_request_to_media_worker_fail"), o("WAResultOrError").makeError(d.error.errorType));
	}
	async function z(e) {
		var t = e.eventFlow, n = e.input, r = e.mediaType, a = e.rawMimeType, i = q();
		P().INFO(L || (L = babelHelpers.taggedTemplateLiteralLoose(["start kaleidoscope classify in worker, requestId: ", ""])), i);
		var l = await B(t);
		if (!l.success) return {
			transferredBuffer: n,
			result: o("WAResultOrError").makeError({ errorName: l.error })
		};
		var s = l.value, u = s.onMessageOnce("kaleidoscopeClassifyResponse", function(e) {
			return e.requestId === i;
		});
		s.postMessage({
			mediaType: r,
			rawMimeType: a,
			input: n,
			requestId: i,
			type: "kaleidoscopeClassifyRequest"
		}, [n]), t.addPoint("sent_request_to_media_worker_start");
		var c = await u, d = c.output, m = c.transferredBuffer;
		return d.success ? (P().INFO(E || (E = babelHelpers.taggedTemplateLiteralLoose(["received output from worker, requestId: ", ""])), i), t == null || t.addPoint("sent_request_to_media_worker_end"), {
			transferredBuffer: m,
			result: d
		}) : (t.addPoint("sent_request_to_media_worker_fail"), {
			transferredBuffer: m,
			result: o("WAResultOrError").makeError({ errorName: d.error })
		});
	}
	async function j(e) {
		var t = e.eventFlow, n = e.hints, a = e.input, i = q();
		P().INFO(k || (k = babelHelpers.taggedTemplateLiteralLoose(["start kaleidoscope provenance detection in worker, requestId: ", ""])), i);
		var l = await B(t);
		if (!l.success) return P().WARN(I || (I = babelHelpers.taggedTemplateLiteralLoose([
			"provenance detection failed, requestId: ",
			", reason: no-worker-port, error: ",
			""
		])), i, l.error), t == null || t.addPoint("worker_roundtrip_fail", { string: { failure_reason: "no_worker_port" } }), {
			transferredBuffer: a,
			provenance: null
		};
		var s = l.value, u = r("WAWebNoop"), c = new Promise(function(e) {
			var t = s.addMessageListener("kaleidoscopeProvenanceResponse", function(t) {
				t.requestId === i && (u(), P().INFO(T || (T = babelHelpers.taggedTemplateLiteralLoose([
					"received provenance from worker, requestId: ",
					", hasSignal: ",
					""
				])), i, t.provenance != null), e({
					transferredBuffer: t.transferredBuffer,
					provenance: t.provenance,
					engineErrorCode: t.engineErrorCode
				}));
			});
			u = function() {
				s.removeMessageListener("kaleidoscopeProvenanceResponse", t);
			};
		});
		try {
			t == null || t.addPoint("worker_roundtrip_start"), s.postMessage({
				input: a,
				hints: n,
				qplData: t == null ? void 0 : t.flowDetails,
				requestId: i,
				type: "kaleidoscopeProvenanceRequest"
			}, [a]);
			var d = await o("WAPromiseTimeout").promiseTimeout(c, A);
			return t == null || t.addPoint("worker_roundtrip_end"), d;
		} catch (e) {
			u();
			var m = e instanceof o("WACustomError").TimeoutError ? "timeout" : "post_failed";
			return P().WARN(D || (D = babelHelpers.taggedTemplateLiteralLoose([
				"provenance detection failed, requestId: ",
				", reason: ",
				", error: ",
				""
			])), i, m, r("getErrorSafe")(e).message), t == null || t.addPoint("worker_roundtrip_fail", { string: { failure_reason: m } }), {
				transferredBuffer: a,
				provenance: null
			};
		}
	}
	function K(e) {
		P().INFO(x || (x = babelHelpers.taggedTemplateLiteralLoose(["start prewarming media wasm worker, operation: ", ""])), e), o("WAPromiseTimeout").promiseTimeout(M().fullyConnected, w).then(function(t) {
			t.postMessage({
				type: "prewarm",
				operation: e
			});
		}).catch(function(e) {
			P().WARN($ || ($ = babelHelpers.taggedTemplateLiteralLoose(["prewarm failed: ", ""])), r("getErrorSafe")(e).message);
		});
	}
	l.getWorkerPortWithTimeout = B, l.calculateFilehashInWorker = U, l.hmacSha256InWorker = V, l.transcodeToMp4InWorker = H, l.mp4RepairMuxInWorker = G, l.kaleidoscopeClassifyInWorker = z, l.detectAiProvenanceInWorker = j, l.prewarmMediaWasmWorker = K;
}), 98);
