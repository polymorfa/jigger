__d("MAWImageUtils", [
	"FBLogger",
	"MAWAnimatedImageThumbnailStore",
	"MAWDbMedia",
	"MAWFrontendMediaUtils",
	"MAWImagePreProcess",
	"MWPBumpEntityKey",
	"Promise",
	"WABlobToArrayBuffer",
	"WACalculateBoundOutputSize",
	"WAWebDataUrlToBlob",
	"err",
	"justknobx"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = "image/jpeg", u = r("justknobx")._("2338") * 1024, c = r("justknobx")._("2340"), d = r("justknobx")._("2545");
	function m(t, o) {
		o === void 0 && (o = !0);
		var a;
		return new (e || (e = (n("Promise"))))(function(e, n) {
			a = new Image();
			var i = /^(?:data|blob):/.test(t);
			o && !i && a.setAttribute("crossOrigin", "anonymous"), a.onload = e, a.onabort = function() {
				n(r("FBLogger")("messenger_web").mustfixThrow("Error loading image from provided URL"));
			}, a.onerror = function() {
				n(r("FBLogger")("messenger_web").mustfixThrow("Wrong blob type"));
			}, a.src = t;
		}).then(function() {
			return a;
		});
	}
	function p(t, r, a, i) {
		if (a === void 0 && (a = !1), t.toBlob) return new (e || (e = (n("Promise"))))(function(e) {
			var n = i == null ? void 0 : i / 100;
			t.toBlob(e, r, n);
		}).then(function(o) {
			var i = u, l = c / 100;
			return a && o.size >= i ? new (e || (e = (n("Promise"))))(function(e) {
				t.toBlob(e, r, l);
			}) : o;
		});
		o("MWPBumpEntityKey").bumpEntityKey("maw", "data_url_to_blob");
		var l = o("WAWebDataUrlToBlob").dataURLtoBlob;
		return (e || (e = n("Promise"))).resolve(l(t.toDataURL(r))).then(function(o) {
			var i = u, s = c / 100;
			return a && o.size >= i ? (e || (e = n("Promise"))).resolve(l(t.toDataURL(r, s))) : o;
		});
	}
	function _(t, a, i, l, s) {
		var u = m(t);
		return u.then(function(e) {
			var t = e.naturalWidth, n = e.naturalHeight, r = o("WACalculateBoundOutputSize").calculateBoundOutputSize({
				height: n,
				width: t
			}, s), u = r.outputHeight, c = r.outputWidth, d = document.createElement("canvas");
			d.width = c, d.height = u;
			var m = d.getContext("2d");
			return l !== !0 && y(d), m.drawImage(e, 0, 0, t, n, 0, 0, c, u), p(d, a, !1, i).then(function(e) {
				return {
					blob: e,
					height: u,
					width: c
				};
			});
		}).catch(function(t) {
			return (e || (e = n("Promise"))).reject(t != null ? t : r("err")("Error loading image from URL"));
		});
	}
	function f(e, t) {
		return m(e).then(function(e) {
			var n = document.createElement("canvas"), r = e.naturalWidth, a = e.naturalHeight, i = n.getContext("2d"), l = C(a, r, t);
			n.width = l.width, n.height = l.height;
			var u = n.width, c = n.height;
			return h(n), i.drawImage(e, 0, 0, u, c), p(n, s, !0).then(function(e) {
				return o("WABlobToArrayBuffer").blobToArrayBuffer(e).then(function(e) {
					return {
						height: c,
						jpegThumbnail: e,
						width: u
					};
				});
			});
		});
	}
	function g(e, t) {
		return m(e).then(function(e) {
			var n = C(e.naturalHeight, e.naturalWidth, t);
			return {
				height: n.height,
				width: n.width
			};
		});
	}
	function h(e) {
		var t = e.getContext("2d");
		t.fillStyle = "rgb(247,247,247)", t.fillRect(0, 0, e.width, e.height);
	}
	function y(e) {
		var t = e.getContext("2d");
		t.fillStyle = "rgb(255,255,255)", t.fillRect(0, 0, e.width, e.height);
	}
	function C(e, t, n) {
		var r = t != null ? t : n, o = e != null ? e : n;
		return r > o ? r > n && (o *= n / r, r = n) : o > n && (r *= n / o, o = n), {
			height: Math.round(Math.max(o, 1)),
			width: Math.round(Math.max(r, 1))
		};
	}
	function b(e) {
		return m(e).then(function(e) {
			return {
				height: e.naturalHeight,
				width: e.naturalWidth
			};
		});
	}
	function v(t, a, i) {
		var l = o("MAWAnimatedImageThumbnailStore").getThumbnailSpec(t);
		if (l) return (e || (e = n("Promise"))).resolve(l);
		var s = _(t, "image/gif", void 0, void 0, void 0);
		return s == null ? null : s.then(function(e) {
			var n = new File([e.blob], "gif", { type: "image/gif" });
			return o("MAWImagePreProcess").generateImageThumbnailInWorkerWithFallback(n, Math.max(i != null ? i : e.width, a != null ? a : e.height)).then(function(e) {
				return o("MAWAnimatedImageThumbnailStore").setThumbnailSpec(t, e), e;
			});
		}).catch(function(e) {
			throw r("FBLogger")("messenger_web_media").mustfixThrow("Failed while generating thumbnail for GIF. URL: ", t, e);
		});
	}
	function S(t) {
		var r = t == null ? void 0 : t.file, a = t == null ? void 0 : t.width, i = t == null ? void 0 : t.height;
		if (r == null || a == null || i == null) return (e || (e = n("Promise"))).resolve(t);
		var l = o("MAWFrontendMediaUtils").getMediaTypeAndServerMediaTypeFromBlob(r.type, !0), s = l.mediaType;
		return s !== o("MAWDbMedia").MEDIA_TYPE.GIF ? (e || (e = n("Promise"))).resolve(t) : o("MAWImagePreProcess").generateImageThumbnailInWorkerWithFallback(r, Math.max(a, i)).then(function(e) {
			var t = new File([e.jpegThumbnail], "secure_threads_xma_preview_thumbnail", { type: "image/jpeg" });
			return {
				file: t,
				height: e.height,
				width: e.width
			};
		});
	}
	l.TYPE_JPEG = s, l.STICKER_THUMBNAIL_MAX_SIZE = d, l.canvasToBlob = p, l.urlToFile = _, l.urlToThumbnail = f, l.urlToThumbnailSpec = g, l.boundHeightWidth = C, l.urlToImageSpec = b, l.generateGIFThumbnail = v, l.generatePreviewBlobForShare = S;
}), 98);
