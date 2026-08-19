__d("MAWVideoUtils", [
	"FBLogger",
	"MAWImageUtils",
	"MWVideoInMemoryThumbnailGK",
	"Promise",
	"generateVideoThumbnails"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		e.pause(), e.removeAttribute("src"), e.load();
		var t = e.parentNode;
		t != null && t.removeChild(e);
	}
	function u(t) {
		var a = document.body;
		if (!a) return new (e || (e = (n("Promise"))))(function(e, t) {
			return t("Unable to find DOM body, please use this util only in DOM environment.");
		});
		var i = document.createElement("video"), l = URL.createObjectURL(t);
		return new (e || (e = (n("Promise"))))(function(t, o) {
			i.setAttribute("style", "display: none"), i.setAttribute("src", l), i.addEventListener("loadedmetadata", function(a) {
				var l = a.currentTarget;
				if (l instanceof HTMLVideoElement) {
					var s = l.duration, u = l.videoHeight, c = l.videoWidth, d = r("generateVideoThumbnails")(i, c, u, 1);
					t((e || (e = n("Promise"))).all([
						d,
						c,
						u,
						Math.round(s)
					]));
				} else o("EventTarget returned for event should be HTMLVideoElement");
			}), i.addEventListener("error", function(e) {
				o("Unable to load video");
			}), a.appendChild(i);
		}).then(function(e) {
			var t = e[0], n = e[1], r = e[2], l = e[3];
			return o("MWVideoInMemoryThumbnailGK").isInMemoryVideoThumbnailEnabled() || a.removeChild(i), o("MAWImageUtils").canvasToBlob(t.thumbnails[0].getCanvas(), o("MAWImageUtils").TYPE_JPEG, !0).then(function(e) {
				return e.arrayBuffer().then(function(e) {
					return {
						duration: l,
						height: r,
						jpegThumbnail: e,
						width: n
					};
				});
			});
		}).catch(function(e) {
			throw o("MWVideoInMemoryThumbnailGK").isInMemoryVideoThumbnailEnabled() || a.removeChild(i), r("FBLogger")("messenger_web").mustfixThrow(String(e));
		}).finally(function() {
			o("MWVideoInMemoryThumbnailGK").isInMemoryVideoThumbnailEnabled() && s(i), URL.revokeObjectURL(l);
		});
	}
	function c(t) {
		var a = document.body;
		if (!a) return new (e || (e = (n("Promise"))))(function(e, t) {
			return t("Unable to find DOM body, please use this util only in DOM environment.");
		});
		var i = document.createElement("video"), l = URL.createObjectURL(t);
		return new (e || (e = (n("Promise"))))(function(e, t) {
			i.setAttribute("style", "display: none"), i.setAttribute("src", l), i.addEventListener("loadedmetadata", function(n) {
				var r = n.currentTarget;
				if (r instanceof HTMLVideoElement) {
					var o = r.duration, a = r.videoHeight, i = r.videoWidth;
					e({
						duration: Math.round(o),
						height: a,
						width: i
					});
				} else t("EventTarget returned for event should be HTMLVideoElement");
			}), i.addEventListener("error", function(e) {
				t("Unable to load video");
			}), a.appendChild(i);
		}).catch(function(e) {
			throw o("MWVideoInMemoryThumbnailGK").isInMemoryVideoThumbnailEnabled() || a.removeChild(i), r("FBLogger")("messenger_web").mustfixThrow(String(e));
		}).finally(function() {
			o("MWVideoInMemoryThumbnailGK").isInMemoryVideoThumbnailEnabled() && s(i), URL.revokeObjectURL(l);
		});
	}
	l.getVideoThumbnailUrlAndSpec = u, l.getVideoThumbnailSpec = c;
}), 98);
