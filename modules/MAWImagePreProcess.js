__d("MAWImagePreProcess", [
	"MAWGetImageSpec",
	"MAWImageUtils",
	"MAWMediaPreProcessQpl",
	"MAWMediaWorkerPoolConfig",
	"MAWMediaWorkerPoolExpander",
	"MAWSupportedImageTypes",
	"MWFBLogger",
	"Promise",
	"WABlobToArrayBuffer",
	"WACustomError",
	"WADecodeImage",
	"WAMediaWasmWorkerClient",
	"WAPromiseTimeout",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _, f = 12e4, g = o("MWFBLogger").MWMediaLogger().tags(["ImagePreProcess"]), h = 85;
	function y(e, t, a, i) {
		var l;
		i === !0 ? l = {
			height: r("justknobx")._("187"),
			width: r("justknobx")._("187")
		} : l = {
			height: r("justknobx")._("2144"),
			width: r("justknobx")._("2144")
		};
		var s;
		t ? s = e.type === "image/webp" ? (_ || (_ = n("Promise"))).resolve(e) : R(e, "image/webp", t, a, l) : s = e.type === "image/gif" ? (_ || (_ = n("Promise"))).resolve(e) : R(e, "image/jpeg", !1, a, l);
		var u = e.type === "image/gif";
		return u ? s.then(function(e) {
			return (_ || (_ = n("Promise"))).all([o("MAWGetImageSpec").getImageSpec(e), e]);
		}).then((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
				var r = n[0], a = n[1];
				return {
					file: a,
					imageSpec: r,
					plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(a),
					thumbnailUrlAndSpec: null,
					type: S(e, t)
				};
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})()) : s.then(function(t) {
			return (_ || (_ = n("Promise"))).all([
				$(e, r("justknobx")._("2033")),
				o("MAWGetImageSpec").getImageSpec(t),
				t
			]);
		}).then((function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (r) {
				var a = r[0], i = r[1], l = r[2];
				return (_ || (_ = n("Promise"))).resolve({
					file: l,
					imageSpec: i,
					plaintext: yield o("WABlobToArrayBuffer").blobToArrayBuffer(l),
					thumbnailUrlAndSpec: a,
					type: S(e, t)
				});
			});
			return function(e) {
				return r.apply(this, arguments);
			};
		})());
	}
	function C(e, t) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
			var a = t.URL.createObjectURL(e), i = n === !0 ? r("justknobx")._("2545") : r("justknobx")._("2033"), l = yield o("MAWImageUtils").urlToThumbnailSpec(a, i), s = {
				height: l.height,
				width: l.width
			};
			return {
				file: e,
				imageSpec: s,
				thumbnailSpec: l,
				type: S(e, n),
				url: a
			};
		}), b.apply(this, arguments);
	}
	function v(e, t) {
		return o("MAWGetImageSpec").getImageSpec(e).then(function(r) {
			return (_ || (_ = n("Promise"))).resolve({
				file: e,
				imageSpec: r,
				stickerReceiverFetchId: t,
				type: "sticker"
			});
		});
	}
	function S(e, t) {
		return t === !0 ? "sticker" : e.type === "image/gif" ? "animated_image" : "image";
	}
	function R(e, t, n, r, o) {
		return L.apply(this, arguments);
	}
	function L() {
		return L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r, a, i) {
			var l;
			g.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["start image transcode ", ""])), e.name);
			var s = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("image", e);
			s.addAnnotations({
				bool: { idle_cleanup_enabled: o("MAWMediaWorkerPoolExpander").getIdleCleanupEnabled() },
				int: {
					idle_cleanup_ttl_s: o("MAWMediaWorkerPoolExpander").getIdleCleanupTtlSeconds(),
					pool_max_size: o("MAWMediaWorkerPoolConfig").getMaxPoolSize(),
					total_number_of_files: a != null ? a : 1
				},
				string: {
					targetMimetype: t,
					worker_init_policy: o("MAWMediaWorkerPoolConfig").getWorkerInitPolicy()
				}
			});
			var u = function() {
				return k(e, t, h, r, i).then(function(e) {
					return e.success ? e.value : (_ || (_ = n("Promise"))).reject("runtime-error");
				}).catch(function(e) {
					return g.MUSTFIX(d || (d = babelHelpers.taggedTemplateLiteralLoose(["Error while transcoding image through browser api: ", ""])), String(e)), s.addPoint("native_encode_failure", { string: { native_encode_error: e.toString() } }), null;
				});
			}, m = t === "image/jpeg" ? (l = yield D(e, h, s, i)) != null ? l : yield u() : yield u();
			if (m == null) throw s.endFail("unable_to_transcode_image"), g.mustfixThrow("unable to transcode image");
			return s.endSuccess({ int: { compressed_file_size: m.size } }), m;
		}), L.apply(this, arguments);
	}
	function E(e, n) {
		var r = t.URL.createObjectURL(e);
		return o("MAWImageUtils").urlToThumbnail(r, n);
	}
	function k(n, r, a, i, l) {
		g.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start image transcoding through browser api"])));
		var u = t.URL.createObjectURL(n), c = n.name;
		return o("MAWImageUtils").urlToFile(u, r, a, i, l).then(function(e) {
			var t = e.blob;
			return g.DEBUG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["finished image transcoding through browser api: ", " bytes"])), t.size), o("WAResultOrError").makeResult(new File([t], c, { type: r }));
		});
	}
	function I(e, t, n, r) {
		return T.apply(this, arguments);
	}
	function T() {
		return T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			o("WAMediaWasmWorkerClient").prewarmMediaWasmWorker("progressiveJpegEncode"), n.addPoint("prewarm_worker_started");
			var a;
			if (o("WADecodeImage").canDecodeWithoutDOM && (a = yield o("WAMediaWasmWorkerClient").progressiveJpegEncodeInWorkerWithFile({
				eventFlow: n,
				file: e,
				maxOutputResolution: r,
				quality: t,
				useHdScanConfig: !0
			})), a == null || !a.success && a.error === "decode-image-error") {
				var i = yield o("WADecodeImage").decodeImageWithDOM(e, r).catch(function(e) {
					throw n.addPoint("image_decode_failure"), e;
				});
				n.addPoint("image_decode_success"), a = yield o("WAMediaWasmWorkerClient").progressiveJpegEncodeInWorker({
					eventFlow: n,
					imageData: i,
					quality: t,
					useHdScanConfig: !0
				});
			}
			return a;
		}), T.apply(this, arguments);
	}
	function D(e, t, n, r) {
		return x.apply(this, arguments);
	}
	function x() {
		return x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n, r) {
			g.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["start process image through wasm, file name: ", ""])), e.name), n.addPoint("mozjpeg_encode_start");
			var a;
			try {
				a = yield o("WAPromiseTimeout").promiseTimeout(I(e, t, n, r), f);
			} catch (e) {
				var i = e instanceof o("WACustomError").TimeoutError ? "timeout" : String(e);
				return n.addPoint("mozjpeg_encode_fail", { string: { fail_reason: i } }), null;
			}
			return a.success ? (n.addPoint("mozjpeg_encode_end"), g.DEBUG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["finished jpeg transcoding through mozjpeg: ", " bytes"])), a.value.byteLength), new File([a.value], e.name, { type: "image/jpeg" })) : (n.addPoint("mozjpeg_encode_fail", { string: { fail_reason: String(a.error) } }), null);
		}), x.apply(this, arguments);
	}
	function $(e, a) {
		var i = (function() {
			var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var n = t.URL.createObjectURL(e), r = yield o("MAWImageUtils").urlToThumbnail(n, a);
				return t.URL.revokeObjectURL(n), r;
			});
			return function() {
				return r.apply(this, arguments);
			};
		})();
		if (!o("WADecodeImage").canDecodeWithoutDOM) return i();
		var l = r("justknobx")._("2338") * 1024, s = r("justknobx")._("2340");
		return o("WAPromiseTimeout").promiseTimeout(o("WAMediaWasmWorkerClient").generateImageThumbnailInWorker({
			file: e,
			maxDimension: a,
			thumbnailBlobByteSizeLimitBytes: l,
			thumbnailQualityPercentageWhenAboveByteSizeLimit: s
		}).then(function(e) {
			if (!e.success) throw g.mustfixThrow("urlToFileInWorker error: " + e.error);
			return {
				height: e.value.height,
				jpegThumbnail: e.value.blob,
				width: e.value.width
			};
		}).catch(function(e) {
			throw g.catching(e).MUSTFIX(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Error while processing url to thumbnail in worker"]))), e;
		}), f).catch(function(e) {
			return i();
		});
	}
	l.imagePreprocess = y, l.optimisticImagePreprocess = C, l.stickerPreprocess = v, l.getJpegThumbnailInfo = E, l.generateImageThumbnailInWorkerWithFallback = $, l.isSupportedImageFileType = o("MAWSupportedImageTypes").isSupportedImageFileType;
}), 98);
