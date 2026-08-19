__d("MAWImagePreProcess", [
	"MAWGetImageSpec",
	"MAWImageUtils",
	"MAWMediaPreProcessQpl",
	"MAWMediaWorkerPoolConfig",
	"MAWMediaWorkerPoolExpander",
	"MAWSupportedImageTypes",
	"MWFBLogger",
	"WABlobToArrayBuffer",
	"WACustomError",
	"WADecodeImage",
	"WAMediaWasmWorkerClient",
	"WAPromiseTimeout",
	"WAResultOrError",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p, _ = 12e4, f = o("MWFBLogger").MWMediaLogger().tags(["ImagePreProcess"]), g = 85;
	function h(e, t, n, a) {
		var i;
		a === !0 ? i = {
			height: r("justknobx")._("187"),
			width: r("justknobx")._("187")
		} : i = {
			height: r("justknobx")._("2144"),
			width: r("justknobx")._("2144")
		};
		var l;
		t ? l = e.type === "image/webp" ? Promise.resolve(e) : v(e, "image/webp", t, n, i) : l = e.type === "image/gif" ? Promise.resolve(e) : v(e, "image/jpeg", !1, n, i);
		var s = e.type === "image/gif";
		return s ? l.then(function(e) {
			return Promise.all([o("MAWGetImageSpec").getImageSpec(e), e]);
		}).then(async function(n) {
			var r = n[0], a = n[1];
			return {
				file: a,
				imageSpec: r,
				plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(a),
				thumbnailUrlAndSpec: null,
				type: b(e, t)
			};
		}) : l.then(function(t) {
			return Promise.all([
				k(e, r("justknobx")._("2033")),
				o("MAWGetImageSpec").getImageSpec(t),
				t
			]);
		}).then(async function(n) {
			var r = n[0], a = n[1], i = n[2];
			return Promise.resolve({
				file: i,
				imageSpec: a,
				plaintext: await o("WABlobToArrayBuffer").blobToArrayBuffer(i),
				thumbnailUrlAndSpec: r,
				type: b(e, t)
			});
		});
	}
	async function y(e, n) {
		var a = t.URL.createObjectURL(e), i = n === !0 ? r("justknobx")._("2545") : r("justknobx")._("2033"), l = await o("MAWImageUtils").urlToThumbnailSpec(a, i), s = {
			height: l.height,
			width: l.width
		};
		return {
			file: e,
			imageSpec: s,
			thumbnailSpec: l,
			type: b(e, n),
			url: a
		};
	}
	function C(e, t) {
		return o("MAWGetImageSpec").getImageSpec(e).then(function(n) {
			return Promise.resolve({
				file: e,
				imageSpec: n,
				stickerReceiverFetchId: t,
				type: "sticker"
			});
		});
	}
	function b(e, t) {
		return t === !0 ? "sticker" : e.type === "image/gif" ? "animated_image" : "image";
	}
	async function v(t, n, r, a, i) {
		var l;
		f.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["start image transcode ", ""])), t.name);
		var u = o("MAWMediaPreProcessQpl").startMediaPreProcessQpl("image", t);
		u.addAnnotations({
			bool: { idle_cleanup_enabled: o("MAWMediaWorkerPoolExpander").getIdleCleanupEnabled() },
			int: {
				idle_cleanup_ttl_s: o("MAWMediaWorkerPoolExpander").getIdleCleanupTtlSeconds(),
				pool_max_size: o("MAWMediaWorkerPoolConfig").getMaxPoolSize(),
				total_number_of_files: a != null ? a : 1
			},
			string: {
				targetMimetype: n,
				worker_init_policy: o("MAWMediaWorkerPoolConfig").getWorkerInitPolicy()
			}
		});
		var c = function() {
			return R(t, n, g, r, i).then(function(e) {
				return e.success ? e.value : Promise.reject("runtime-error");
			}).catch(function(e) {
				return f.MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error while transcoding image through browser api: ", ""])), String(e)), u.addPoint("native_encode_failure", { string: { native_encode_error: e.toString() } }), null;
			});
		}, d = n === "image/jpeg" ? (l = await E(t, g, u, i)) != null ? l : await c() : await c();
		if (d == null) throw u.endFail("unable_to_transcode_image"), f.mustfixThrow("unable to transcode image");
		return u.endSuccess({ int: { compressed_file_size: d.size } }), d;
	}
	function S(e, n) {
		var r = t.URL.createObjectURL(e);
		return o("MAWImageUtils").urlToThumbnail(r, n);
	}
	function R(e, n, r, a, i) {
		f.DEBUG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["start image transcoding through browser api"])));
		var l = t.URL.createObjectURL(e), s = e.name;
		return o("MAWImageUtils").urlToFile(l, n, r, a, i).then(function(e) {
			var t = e.blob;
			return f.DEBUG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["finished image transcoding through browser api: ", " bytes"])), t.size), o("WAResultOrError").makeResult(new File([t], s, { type: n }));
		});
	}
	async function L(e, t, n, r) {
		o("WAMediaWasmWorkerClient").prewarmMediaWasmWorker("progressiveJpegEncode"), n.addPoint("prewarm_worker_started");
		var a;
		if (o("WADecodeImage").canDecodeWithoutDOM && (a = await o("WAMediaWasmWorkerClient").progressiveJpegEncodeInWorkerWithFile({
			eventFlow: n,
			file: e,
			maxOutputResolution: r,
			quality: t,
			useHdScanConfig: !0
		})), a == null || !a.success && a.error === "decode-image-error") {
			var i = await o("WADecodeImage").decodeImageWithDOM(e, r).catch(function(e) {
				throw n.addPoint("image_decode_failure"), e;
			});
			n.addPoint("image_decode_success"), a = await o("WAMediaWasmWorkerClient").progressiveJpegEncodeInWorker({
				eventFlow: n,
				imageData: i,
				quality: t,
				useHdScanConfig: !0
			});
		}
		return a;
	}
	async function E(e, t, n, r) {
		f.DEBUG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["start process image through wasm, file name: ", ""])), e.name), n.addPoint("mozjpeg_encode_start");
		var a;
		try {
			a = await o("WAPromiseTimeout").promiseTimeout(L(e, t, n, r), _);
		} catch (e) {
			var i = e instanceof o("WACustomError").TimeoutError ? "timeout" : String(e);
			return n.addPoint("mozjpeg_encode_fail", { string: { fail_reason: i } }), null;
		}
		return a.success ? (n.addPoint("mozjpeg_encode_end"), f.DEBUG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["finished jpeg transcoding through mozjpeg: ", " bytes"])), a.value.byteLength), new File([a.value], e.name, { type: "image/jpeg" })) : (n.addPoint("mozjpeg_encode_fail", { string: { fail_reason: String(a.error) } }), null);
	}
	function k(e, n) {
		var a = async function() {
			var r = t.URL.createObjectURL(e), a = await o("MAWImageUtils").urlToThumbnail(r, n);
			return t.URL.revokeObjectURL(r), a;
		};
		if (!o("WADecodeImage").canDecodeWithoutDOM) return a();
		var i = r("justknobx")._("2338") * 1024, l = r("justknobx")._("2340");
		return o("WAPromiseTimeout").promiseTimeout(o("WAMediaWasmWorkerClient").generateImageThumbnailInWorker({
			file: e,
			maxDimension: n,
			thumbnailBlobByteSizeLimitBytes: i,
			thumbnailQualityPercentageWhenAboveByteSizeLimit: l
		}).then(function(e) {
			if (!e.success) throw f.mustfixThrow("urlToFileInWorker error: " + e.error);
			return {
				height: e.value.height,
				jpegThumbnail: e.value.blob,
				width: e.value.width
			};
		}).catch(function(e) {
			throw f.catching(e).MUSTFIX(p || (p = babelHelpers.taggedTemplateLiteralLoose(["Error while processing url to thumbnail in worker"]))), e;
		}), _).catch(function(e) {
			return a();
		});
	}
	l.imagePreprocess = h, l.optimisticImagePreprocess = y, l.stickerPreprocess = C, l.getJpegThumbnailInfo = S, l.generateImageThumbnailInWorkerWithFallback = k, l.isSupportedImageFileType = o("MAWSupportedImageTypes").isSupportedImageFileType;
}), 98);
