__d("MAWVideoPreProcess", [
	"MAWMediaPreProcessQpl",
	"MAWMediaWorkerPoolConfig",
	"MAWMediaWorkerPoolExpander",
	"MAWSendVideoToWorker",
	"MAWSupportedVideoTypes",
	"MAWVideoUtils",
	"MWFBLogger",
	"MWPBumpEntityKey",
	"Promise",
	"WABlobToArrayBuffer",
	"WAMediaWasmWorkerClient",
	"WAResultOrError",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = o("MWFBLogger").MWMediaLogger().tags(["MAWVideoPreProcess"]), g = typeof self.BigInt == "function";
	function h(e, t) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var r = yield S(e, t);
			if (!r.success) return r.error, (_ || (_ = n("Promise"))).reject(r.error);
			var a = r.value, i = a.file, l = a.plaintext, s = yield o("MAWVideoUtils").getVideoThumbnailUrlAndSpec(i);
			return {
				file: i,
				plaintext: l,
				thumbnailUrlAndSpec: s,
				type: "video"
			};
		}), y.apply(this, arguments);
	}
	function C(e) {
		var t = e.file;
		return (_ || (_ = n("Promise"))).all([o("WABlobToArrayBuffer").blobToArrayBuffer(t), o("MAWVideoUtils").getVideoThumbnailUrlAndSpec(t)]).then(function(e) {
			var n = e[0], r = e[1];
			return {
				file: t,
				plaintext: n,
				thumbnailUrlAndSpec: r,
				type: "video"
			};
		});
	}
	function b(e, t) {
		return v.apply(this, arguments);
	}
	function v() {
		return v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, r) {
			var a = yield S(e, r);
			if (!a.success) return o("MWPBumpEntityKey").bumpEntityKeyWithAppId("maw.composer", "invalid_video_send_block_with_type_" + e.type), a.error, (_ || (_ = n("Promise"))).reject(a.error);
			var i = a.value.file, l = yield o("MAWVideoUtils").getVideoThumbnailSpec(i), s = t.URL.createObjectURL(i);
			return {
				file: i,
				thumbnailSpec: l,
				type: "video",
				url: s
			};
		}), v.apply(this, arguments);
	}
	function S(t, r) {
		var a = g, i = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("video", t);
		i.addAnnotations({
			bool: {
				idle_cleanup_enabled: o("MAWMediaWorkerPoolExpander").getIdleCleanupEnabled(),
				wamedia_wasm_enabled: a
			},
			int: {
				idle_cleanup_ttl_s: o("MAWMediaWorkerPoolExpander").getIdleCleanupTtlSeconds(),
				pool_max_size: o("MAWMediaWorkerPoolConfig").getMaxPoolSize(),
				total_number_of_files: r != null ? r : 1
			},
			string: { worker_init_policy: o("MAWMediaWorkerPoolConfig").getWorkerInitPolicy() }
		});
		var l = a ? E(t, i) : I(t);
		return l.then(function(e) {
			if (!e.success) switch (e.error) {
				case "invalid-media": return i.endFail("invalid-media"), o("WAResultOrError").makeError("invalid-mp4");
				case "worker-connection-timeout":
				case "worker-connection-runtime-error":
				case "internal-error":
				case "decode-image-error":
				case "undefined-operation":
				case "runtime-error": throw e.error;
				default: throw e.error, e.error;
			}
			return i.endSuccess({ int: { compressed_file_size: e.value.file.size } }), o("WAResultOrError").makeResult(e.value);
		}).catch((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
				return f.MUSTFIX(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Unable to preprocess video: ", ""])), n.toString()), i.endFail("unable_to_process_video", { string: { preprocessError: n.toString() } }), o("WAResultOrError").makeResult({
					file: t,
					plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(t)
				});
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})());
	}
	var R = null;
	function L() {
		if (R == null) {
			var e = document.createElement("video"), t = [
				"video/mp4; codecs=\"hvc1.1.6.L93.B0\"",
				"video/mp4; codecs=\"hev1.1.6.L93.B0\"",
				"video/mp4; codecs=\"hvc1\"",
				"video/mp4; codecs=\"hev1\""
			];
			R = t.some(function(t) {
				return e.canPlayType(t) === "probably";
			});
		}
		return R;
	}
	function E(e, t) {
		return k.apply(this, arguments);
	}
	function k() {
		return k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			f.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["start process video through wasm, file name: ", ""])), e.name);
			var n = yield o("WABlobToArrayBuffer").blobToArrayBuffer(e), r = e.type, a = yield o("WAMediaWasmWorkerClient").transcodeToMp4InWorker({
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
				supportsHevc: L()
			});
			if (!a.success) return a;
			var i = new File([a.value], e.name, { type: "video/mp4" });
			return o("WAResultOrError").makeResult({
				file: i,
				plaintext: a.value
			});
		}), k.apply(this, arguments);
	}
	function I(e) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			f.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["start process video through asm.js, file name: ", ""])), e.name);
			var t = yield D(e);
			if (!t) return o("WAResultOrError").makeError("invalid-media");
			var n = new File([t.file], e.name, { type: t.file.type }), r = yield o("WABlobToArrayBuffer").blobToArrayBuffer(n);
			return o("WAResultOrError").makeResult({
				file: n,
				plaintext: r
			});
		}), T.apply(this, arguments);
	}
	function D(e) {
		return o("MAWSendVideoToWorker").sendVideoMessageToWorker({
			asGif: !1,
			file: e,
			type: "prep"
		}).then(function(e) {
			var t = e.error, n = e.file, r = e.filename, o = e.result, a = e.type;
			switch (a) {
				case "result": return o;
				case "parsingError":
					f.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose([
						"trouble parsing file ",
						" (fossil ",
						") ",
						""
					])), n, r, String(t)), n && f.MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["MediaAnalyzer:checkAndRepair got parsing error! ", ""])), String(t)), f.MUSTFIX(c || (c = babelHelpers.taggedTemplateLiteralLoose(["MediaAnalyzer:checkAndRepair rejected file (", ")"])), String(t));
					return;
			}
		}).catch(function(e) {
			f.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["MediaAnalyzer:checkAndRepair got error! ", ""])), String(e));
		});
	}
	l.videoPreprocess = h, l.optimisticVideoToFileVideo = C, l.optimisticVideoPreprocessWithFile = b, l.processVideoThroughWasm = E, l.processVideoThroughAsmJs = I, l.isSupportedVideoFileType = o("MAWSupportedVideoTypes").isSupportedVideoFileType;
}), 98);
