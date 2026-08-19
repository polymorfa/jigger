__d("MAWVideoPreProcess", [
	"MAWMediaPreProcessQpl",
	"MAWMediaWorkerPoolConfig",
	"MAWMediaWorkerPoolExpander",
	"MAWSendVideoToWorker",
	"MAWSupportedVideoTypes",
	"MAWVideoUtils",
	"MWFBLogger",
	"MWPBumpEntityKey",
	"WABlobToArrayBuffer",
	"WAMediaWasmWorkerClient",
	"WAResultOrError"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = o("MWFBLogger").MWMediaLogger().tags(["MAWVideoPreProcess"]), f = typeof self.BigInt == "function";
	async function g(e, t) {
		var n = await C(e, t);
		if (!n.success) return n.error, Promise.reject(n.error);
		var r = n.value, a = r.file, i = r.plaintext, l = await o("MAWVideoUtils").getVideoThumbnailUrlAndSpec(a);
		return {
			file: a,
			plaintext: i,
			thumbnailUrlAndSpec: l,
			type: "video"
		};
	}
	function h(e) {
		var t = e.file;
		return Promise.all([o("WABlobToArrayBuffer").blobToArrayBuffer(t), o("MAWVideoUtils").getVideoThumbnailUrlAndSpec(t)]).then(function(e) {
			var n = e[0], r = e[1];
			return {
				file: t,
				plaintext: n,
				thumbnailUrlAndSpec: r,
				type: "video"
			};
		});
	}
	async function y(e, n) {
		var r = await C(e, n);
		if (!r.success) return o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.composer", "invalid_video_send_block_with_type_" + e.type), r.error, Promise.reject(r.error);
		var a = r.value.file, i = await o("MAWVideoUtils").getVideoThumbnailSpec(a), l = t.URL.createObjectURL(a);
		return {
			file: a,
			thumbnailSpec: i,
			type: "video",
			url: l
		};
	}
	function C(t, n) {
		var r = f, a = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("video", t);
		a.addAnnotations({
			bool: {
				idle_cleanup_enabled: o("MAWMediaWorkerPoolExpander").getIdleCleanupEnabled(),
				wamedia_wasm_enabled: r
			},
			int: {
				idle_cleanup_ttl_s: o("MAWMediaWorkerPoolExpander").getIdleCleanupTtlSeconds(),
				pool_max_size: o("MAWMediaWorkerPoolConfig").getMaxPoolSize(),
				total_number_of_files: n != null ? n : 1
			},
			string: { worker_init_policy: o("MAWMediaWorkerPoolConfig").getWorkerInitPolicy() }
		});
		var i = r ? S(t, a) : R(t);
		return i.then(function(e) {
			if (!e.success) switch (e.error) {
				case "invalid-media": return a.endFail("invalid-media"), o("WAResultOrError").makeError("invalid-mp4");
				case "worker-connection-timeout":
				case "worker-connection-runtime-error":
				case "internal-error":
				case "decode-image-error":
				case "undefined-operation":
				case "runtime-error": throw e.error;
				default: throw e.error, e.error;
			}
			return a.endSuccess({ int: { compressed_file_size: e.value.file.size } }), o("WAResultOrError").makeResult(e.value);
		}).catch(async function(n) {
			return _.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to preprocess video: ", ""])), n.toString()), a.endFail("unable_to_process_video", { string: { preprocessError: n.toString() } }), o("WAResultOrError").makeResult({
				file: t,
				plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(t)
			});
		});
	}
	var b = null;
	function v() {
		if (b == null) {
			var e = document.createElement("video"), t = [
				"video/mp4; codecs=\"hvc1.1.6.L93.B0\"",
				"video/mp4; codecs=\"hev1.1.6.L93.B0\"",
				"video/mp4; codecs=\"hvc1\"",
				"video/mp4; codecs=\"hev1\""
			];
			b = t.some(function(t) {
				return e.canPlayType(t) === "probably";
			});
		}
		return b;
	}
	async function S(e, t) {
		_.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["start process video through wasm, file name: ", ""])), e.name);
		var n = await o("WABlobToArrayBuffer").blobToArrayBuffer(e), r = e.type, a = await o("WAMediaWasmWorkerClient").transcodeToMp4InWorker({
			eventFlow: {
				addAnnotations: function(n) {
					return t.addAnnotations(n);
				},
				addPoint: function(n, r) {
					return t.addPoint(n, r);
				},
				flowDetails: t.flowDetails
			},
			input: new Uint8Array(n),
			mimeType: r,
			supportsHevc: v()
		});
		if (!a.success) return a;
		var i = new File([a.value], e.name, { type: "video/mp4" });
		return o("WAResultOrError").makeResult({
			file: i,
			plaintext: a.value
		});
	}
	async function R(e) {
		_.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["start process video through asm.js, file name: ", ""])), e.name);
		var t = await L(e);
		if (!t) return o("WAResultOrError").makeError("invalid-media");
		var n = new File([t.file], e.name, { type: t.file.type }), r = await o("WABlobToArrayBuffer").blobToArrayBuffer(n);
		return o("WAResultOrError").makeResult({
			file: n,
			plaintext: r
		});
	}
	function L(e) {
		return o("MAWSendVideoToWorker").sendVideoMessageToWorker({
			asGif: !1,
			file: e,
			type: "prep"
		}).then(function(e) {
			var t = e.error, n = e.file, r = e.filename, o = e.result, a = e.type;
			switch (a) {
				case "result": return o;
				case "parsingError":
					_.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose([
						"trouble parsing file ",
						" (fossil ",
						") ",
						""
					])), n, r, String(t)), n && _.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["MediaAnalyzer:checkAndRepair got parsing error! ", ""])), String(t)), _.MUSTFIX(m || (m = babelHelpers.taggedTemplateLiteralLoose(["MediaAnalyzer:checkAndRepair rejected file (", ")"])), String(t));
					return;
			}
		}).catch(function(e) {
			_.MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["MediaAnalyzer:checkAndRepair got error! ", ""])), String(e));
		});
	}
	l.videoPreprocess = g, l.optimisticVideoToFileVideo = h, l.optimisticVideoPreprocessWithFile = y, l.processVideoThroughWasm = S, l.processVideoThroughAsmJs = R, l.isSupportedVideoFileType = o("MAWSupportedVideoTypes").isSupportedVideoFileType;
}), 98);
