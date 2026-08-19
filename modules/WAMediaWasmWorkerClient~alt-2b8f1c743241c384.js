__d("WAMediaWasmWorkerClient", [
	"FBLogger",
	"MediaWorkerPool",
	"QPLUserFlow",
	"WAByteArray",
	"WACustomError",
	"WAMediaWasmWorkerResource",
	"WAPromiseTimeout",
	"WAResultOrError",
	"WorkerBundleResource",
	"WorkerClient",
	"WorkerMessagePort",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $, P, N, M, w, A, F, O, B = "media_platform", W = function() {
		return r("FBLogger")(B).tags(["WAMediaWasmWorkerClient"]);
	};
	function q(t) {
		var n = t.action, o = t.event;
		switch (n.type) {
			case "point": {
				r("QPLUserFlow").addPoint(o, n.pointName, { instanceKey: n.instanceKey });
				break;
			}
			case "annotations": {
				r("QPLUserFlow").addAnnotations(o, n.annotations, { instanceKey: n.instanceKey });
				break;
			}
			default: W().MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unknown QPL action type from worker: ", ""])), n.type);
		}
	}
	function U() {
		var e = o("WorkerBundleResource").createDedicatedWebWorker(r("WAMediaWasmWorkerResource")), t = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(e, "WAMediaWasmWorker");
		return o("WorkerClient").init(t), t.addMessageListener("log", function(e) {
			var t = e.logType, n = e.message;
			switch (t) {
				case "dev":
					W().DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["from worker: ", ""])), n);
					break;
				case "error":
					W().MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["worker error: ", ""])), n);
					break;
				default:
			}
		}), t.addMessageListener("qpl", function(e) {
			q(e);
		}), {
			port: t,
			worker: e
		};
	}
	var V = new (r("MediaWorkerPool"))(), H = U(), G = H.port, z = H.worker;
	V.addWorker(G, z), V.markTaskComplete(G), W().DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["initiated."])));
	function j(e) {
		for (var t = 0; V.getSize() < e;) {
			var n = U(), r = n.port, o = n.worker;
			V.addWorker(r, o, !0), V.markTaskComplete(r), t++, W().INFO(d || (d = babelHelpers.taggedTemplateLiteralLoose(["expanded pool to ", " workers"])), V.getSize());
		}
		return t;
	}
	function K(e, t) {
		V.configureIdleCleanup(e, function(e, n, r) {
			W().INFO(m || (m = babelHelpers.taggedTemplateLiteralLoose(["terminated idle worker (", ")"])), r), t == null || t(e, n, r);
		});
	}
	function Q(e) {
		return V.terminateExpansionWorkers(e);
	}
	function X(e) {
		var t = e.eventFlow, n = e.input;
		return oe({
			operation: "webpCheck",
			input: o("WAByteArray").uint8ArrayToBuffer(n)
		}, t);
	}
	function Y(e) {
		var t = e.eventFlow, n = e.input;
		return W().INFO(p || (p = babelHelpers.taggedTemplateLiteralLoose(["mp4RepairMuxInWorker processing video"]))), oe({
			operation: "mp4RepairMux",
			input: o("WAByteArray").uint8ArrayToBuffer(n)
		}, t);
	}
	async function J(e) {
		var t = e.eventFlow, n = e.input, r = e.mimeType, a = e.supportsHevc;
		W().INFO(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["transcodeToMp4InWorker processing video"])));
		var i = ne();
		W().INFO(f || (f = babelHelpers.taggedTemplateLiteralLoose(["sending input bytes to worker, requestId: ", ""])), i);
		var l = await V.getNextConnectedPortWithTimeout(t);
		if (!l.success) return o("WAResultOrError").makeError(l.error);
		var s = l.value;
		return re(s, async function() {
			var e = s.onMessageOnce("transcodeToMp4Response", function(e) {
				return e.requestId === i;
			}), l = o("WAByteArray").uint8ArrayToBuffer(n), u = l ? [l] : void 0;
			s.postMessage({
				input: l,
				requestId: i,
				mimeType: r,
				supportsHevc: a,
				type: "transcodeToMp4Request",
				qplData: t.flowDetails
			}, u), t == null || t.addPoint("sent_request_to_media_worker_start");
			var c = await e, d = c.output;
			return W().INFO(g || (g = babelHelpers.taggedTemplateLiteralLoose([
				"received output from worker, requestId: ",
				", success: ",
				""
			])), i, d.success), d.success ? (t == null || t.addPoint("sent_request_to_media_worker_end"), d) : (t == null || t.addPoint("sent_request_to_media_worker_end"), t == null || t.addAnnotations({ string: { errorMessage: d.error.errorMessage } }), o("WAResultOrError").makeError(d.error.errorType));
		});
	}
	function Z(e) {
		var t = e.eventFlow, n = e.imageData, r = e.quality, a = e.useHdScanConfig;
		return oe({
			operation: "progressiveJpegEncode",
			input: o("WAByteArray").uint8ArrayToBuffer(n.data),
			height: n.height,
			width: n.width,
			quality: r,
			useHdScanConfig: a
		}, t);
	}
	async function ee(e) {
		var t = e.eventFlow, n = e.file, r = e.maxOutputResolution, o = e.quality, a = e.useHdScanConfig, i = await n.arrayBuffer();
		return oe({
			operation: "progressiveJpegEncodeWithFile",
			input: i,
			fileName: n.name,
			fileType: n.type,
			quality: o,
			useHdScanConfig: a,
			maxOutputWidth: r == null ? void 0 : r.width,
			maxOutputHeight: r == null ? void 0 : r.height
		}, t);
	}
	function te(e) {
		W().INFO(h || (h = babelHelpers.taggedTemplateLiteralLoose(["start prewarming media wasm worker, operation: ", ""])), e), V.broadcastPrewarm(e);
	}
	var ne = (function() {
		var e = 0;
		return function() {
			return ++e;
		};
	})();
	async function re(e, t) {
		try {
			return await t();
		} finally {
			V.markTaskComplete(e);
		}
	}
	async function oe(e, t) {
		var n = ne();
		W().INFO(y || (y = babelHelpers.taggedTemplateLiteralLoose(["sending input bytes to worker, requestId: ", ""])), n);
		var r = await V.getNextConnectedPortWithTimeout(t);
		if (!r.success) return r;
		var a = r.value;
		return re(a, async function() {
			var r = a.onMessageOnce("mediaOperationResponse", function(e) {
				return e.requestId === n;
			}), i = e.input ? [e.input] : void 0;
			a.postMessage(babelHelpers.extends({}, e, {
				requestId: n,
				type: "mediaOperationRequest"
			}), i), t == null || t.addPoint("sent_request_to_media_worker_start");
			var l = await r, s = l.output;
			return s.success ? (W().INFO(C || (C = babelHelpers.taggedTemplateLiteralLoose(["received output from worker, requestId: ", ""])), n), t == null || t.addPoint("sent_request_to_media_worker_end", { bool: { isOpfsSyncSupported: s.value.isOpfsSyncSupported } }), o("WAResultOrError").makeResult(s.value.bytes)) : (W().MUSTFIX(b || (b = babelHelpers.taggedTemplateLiteralLoose([
				"requestId: ",
				", error: ",
				""
			])), n, s.error.errorMessage), t == null || t.addPoint("sent_request_to_media_worker_fail"), o("WAResultOrError").makeError(s.error.errorType));
		});
	}
	async function ae(e) {
		var t = e.file, n = e.maxDimension, r = e.thumbnailBlobByteSizeLimitBytes, a = e.thumbnailQualityPercentageWhenAboveByteSizeLimit, i = ne();
		W().INFO(v || (v = babelHelpers.taggedTemplateLiteralLoose(["sending input to worker, requestId: ", ""])), i);
		var l = await V.getNextConnectedPortWithTimeout();
		if (!l.success) return l;
		var s = l.value;
		return re(s, async function() {
			var e, l, u = s.onMessageOnce("mediaGenerateImageThumbnailResponse", function(e) {
				return e.requestId === i;
			}), c = await t.arrayBuffer(), d = c ? [c] : void 0;
			s.postMessage({
				input: c,
				fileName: t.name,
				fileType: t.type,
				maxDimension: n,
				requestId: i,
				thumbnailBlobByteSizeLimitBytes: r,
				thumbnailQualityPercentageWhenAboveByteSizeLimit: a,
				type: "mediaGenerateImageThumbnailRequest"
			}, d);
			var m = await u;
			return W().INFO(S || (S = babelHelpers.taggedTemplateLiteralLoose([
				"received output from worker, requestId: ",
				", success: ",
				""
			])), i, m.output.success), m.output.success ? o("WAResultOrError").makeResult(m.output.value) : (W().MUSTFIX(R || (R = babelHelpers.taggedTemplateLiteralLoose([
				"requestId: ",
				", error: ",
				""
			])), i, (e = m.output.error) == null ? void 0 : e.errorMessage), Promise.reject((l = m.output.error) == null ? void 0 : l.errorMessage));
		});
	}
	async function ie(e, t) {
		W().INFO(L || (L = babelHelpers.taggedTemplateLiteralLoose(["start media storage shadow test"])));
		var n = ne(), r = await V.getNextConnectedPortWithTimeout();
		if (!r.success) return o("WAResultOrError").makeError({
			errorName: "port-init",
			errorMessage: r.error
		});
		var a = r.value;
		return re(a, async function() {
			var r = a.onMessageOnce("mediaStorageShadowTestResponse", function(e) {
				return e.requestId === n;
			});
			a.postMessage({
				input: e,
				requestId: n,
				storageType: t,
				type: "mediaStorageShadowTestRequest"
			});
			var i = await r, l = i.output;
			return l.success ? (W().INFO(E || (E = babelHelpers.taggedTemplateLiteralLoose(["received storage results from worker, requestId: ", ""])), n), o("WAResultOrError").makeResult(l.value)) : (W().MUSTFIX(k || (k = babelHelpers.taggedTemplateLiteralLoose([
				"media storage test failed for storageType: ",
				", error: ",
				""
			])), t, l.error.errorMessage), o("WAResultOrError").makeError({
				errorName: l.error.errorName,
				errorMessage: l.error.errorMessage
			}));
		});
	}
	async function le(e) {
		var t = e.eventFlow, n = e.input, r = e.mediaType, a = e.rawMimeType, i = ne();
		W().INFO(I || (I = babelHelpers.taggedTemplateLiteralLoose(["start kaleidoscope classifiy in worker, requestId: ", ""])), i);
		var l = await V.getNextConnectedPortWithTimeout(t);
		if (!l.success) return {
			transferredBuffer: n,
			result: o("WAResultOrError").makeError({ errorName: l.error })
		};
		var s = l.value;
		return re(s, async function() {
			var e = s.onMessageOnce("kaleidoscopeClassifyResponse", function(e) {
				return e.requestId === i;
			});
			s.postMessage({
				mediaType: r,
				rawMimeType: a,
				input: n,
				requestId: i,
				type: "kaleidoscopeClassifyRequest"
			}, [n]), t.addPoint("sent_request_to_media_worker_start");
			var l = await e, u = l.output, c = l.transferredBuffer;
			return u.success ? (W().INFO(T || (T = babelHelpers.taggedTemplateLiteralLoose(["received output from worker, requestId: ", ""])), i), t == null || t.addPoint("sent_request_to_media_worker_end"), {
				transferredBuffer: c,
				result: u
			}) : (t.addPoint("sent_request_to_media_worker_fail"), {
				transferredBuffer: c,
				result: o("WAResultOrError").makeError({ errorName: u.error })
			});
		});
	}
	var se = 1e4;
	async function ue(e) {
		var t = e.eventFlow, n = e.hints, a = e.input, i = ne();
		W().INFO(D || (D = babelHelpers.taggedTemplateLiteralLoose(["start kaleidoscope provenance detection in worker, requestId: ", ""])), i);
		var l = await V.getNextConnectedPortWithTimeout(t);
		if (!l.success) return W().WARN(x || (x = babelHelpers.taggedTemplateLiteralLoose([
			"provenance detection failed, requestId: ",
			", reason: no-worker-port, error: ",
			""
		])), i, l.error), t == null || t.addPoint("worker_roundtrip_fail", { string: { failure_reason: "no_worker_port" } }), {
			transferredBuffer: a,
			provenance: null
		};
		var s = l.value;
		return re(s, async function() {
			var e = function() {}, l = new Promise(function(t) {
				var n = s.addMessageListener("kaleidoscopeProvenanceResponse", function(n) {
					n.requestId === i && (e(), W().INFO($ || ($ = babelHelpers.taggedTemplateLiteralLoose([
						"received provenance from worker, requestId: ",
						", hasSignal: ",
						""
					])), i, n.provenance != null), t({
						transferredBuffer: n.transferredBuffer,
						provenance: n.provenance,
						engineErrorCode: n.engineErrorCode
					}));
				});
				e = function() {
					s.removeMessageListener("kaleidoscopeProvenanceResponse", n);
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
				var u = await o("WAPromiseTimeout").promiseTimeout(l, se);
				return t == null || t.addPoint("worker_roundtrip_end"), u;
			} catch (n) {
				e();
				var c = n instanceof o("WACustomError").TimeoutError ? "timeout" : "post_failed";
				return W().WARN(P || (P = babelHelpers.taggedTemplateLiteralLoose([
					"provenance detection failed, requestId: ",
					", reason: ",
					", error: ",
					""
				])), i, c, r("getErrorSafe")(n).message), t == null || t.addPoint("worker_roundtrip_fail", { string: { failure_reason: c } }), {
					transferredBuffer: a,
					provenance: null
				};
			}
		});
	}
	async function ce(e) {
		var t = ne();
		W().INFO(N || (N = babelHelpers.taggedTemplateLiteralLoose([
			"calculateFilehashInWorker[",
			"]: sending ",
			"B to worker"
		])), t, e.byteLength);
		var n = await V.getNextConnectedPortWithTimeout();
		if (!n.success) return {
			transferredBuffer: e,
			result: n
		};
		var r = n.value;
		return re(r, async function() {
			var n = r.onMessageOnce("calculateFilehashResponse", function(e) {
				return e.requestId === t;
			});
			r.postMessage({
				buffer: e,
				requestId: t,
				type: "calculateFilehashRequest"
			}, [e]);
			var a = await n, i = a.output, l = a.transferredBuffer;
			return i.success ? (W().INFO(M || (M = babelHelpers.taggedTemplateLiteralLoose(["calculateFilehashInWorker[", "]: received result from worker"])), t), {
				transferredBuffer: l,
				result: o("WAResultOrError").makeResult({ filehash: i.value })
			}) : (W().MUSTFIX(w || (w = babelHelpers.taggedTemplateLiteralLoose([
				"calculateFilehashInWorker[",
				"]: failed: ",
				""
			])), t, i.error.errorMessage), {
				transferredBuffer: l,
				result: o("WAResultOrError").makeError(i.error.errorType)
			});
		});
	}
	async function de(e, t, n) {
		var r = ne();
		W().INFO(A || (A = babelHelpers.taggedTemplateLiteralLoose([
			"hmacSha256InWorker[",
			"]: sending ",
			"B to worker"
		])), r, t.byteLength);
		var a = await V.getNextConnectedPortWithTimeout();
		if (!a.success) return {
			transferredKeyBuffer: e,
			transferredBuffer: t,
			result: a
		};
		var i = a.value;
		return re(i, async function() {
			var a = i.onMessageOnce("calculateHmacSha256Response", function(e) {
				return e.requestId === r;
			});
			i.postMessage({
				keyBuffer: e,
				buffer: t,
				length: n,
				requestId: r,
				type: "calculateHmacSha256Request"
			}, [e, t]);
			var l = await a, s = l.output, u = l.transferredBuffer, c = l.transferredKeyBuffer;
			return s.success ? (W().INFO(F || (F = babelHelpers.taggedTemplateLiteralLoose(["hmacSha256InWorker[", "]: received result from worker"])), r), {
				transferredKeyBuffer: c,
				transferredBuffer: u,
				result: o("WAResultOrError").makeResult({ hmac: s.value })
			}) : (W().MUSTFIX(O || (O = babelHelpers.taggedTemplateLiteralLoose([
				"hmacSha256InWorker[",
				"]: failed: ",
				""
			])), r, s.error.errorMessage), {
				transferredKeyBuffer: e,
				transferredBuffer: t,
				result: o("WAResultOrError").makeError(s.error.errorType)
			});
		});
	}
	l.expandPool = j, l.configureIdleCleanup = K, l.terminateExpansionWorkers = Q, l.webpCheckInWorker = X, l.mp4RepairMuxInWorker = Y, l.transcodeToMp4InWorker = J, l.progressiveJpegEncodeInWorker = Z, l.progressiveJpegEncodeInWorkerWithFile = ee, l.prewarmMediaWasmWorker = te, l.generateImageThumbnailInWorker = ae, l.runMediaStorageShadowTestWasmWorker = ie, l.kaleidoscopeClassifyInWorker = le, l.detectAiProvenanceInWorker = ue, l.calculateFilehashInWorker = ce, l.hmacSha256InWorker = de;
}), 98);
