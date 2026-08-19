__d("generateVideoThumbnails", [
	"invariant",
	"CPXComposerConstants",
	"CanvasVideoThumbnail",
	"HTMLMediaElementReadyStates",
	"Promise",
	"VideoFrameBuffer",
	"cr:909281",
	"gkx"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = .5625, c = 60;
	function d(t, o, a, i, l, u, d, h, y, C) {
		return l === void 0 && (l = "contain"), u === void 0 && (u = 0), d === void 0 && (d = null), h === void 0 && (h = null), y === void 0 && (y = null), C === void 0 && (C = null), new (e || (e = (n("Promise"))))(function(e, b) {
			var v = document.createElement("canvas"), S = [], R = 0, L = t.duration - u;
			C != null && (L = Math.min(L, C));
			var E = r("gkx")("3728");
			E && (L = Math.min(L, c));
			var k = L / i, I = null, T = null, D, x = h != null ? h : m(d, o), $ = y != null ? y : p(d, a), P = _(d, o), N = f(d, a);
			v.width = x != null ? x : o, v.height = $ != null ? $ : a;
			var M = new (r("VideoFrameBuffer"))(v, t, l, x, $, P, N);
			M.updateFrameBuffer();
			var w = function() {
				M.updateFrameBuffer();
				var e = new (r("CanvasVideoThumbnail"))(v, t, u + (R - 1) * k, x, $, P, N);
				S.push(e), (!I || e.getURL().length > I.getURL().length) && (I = e, T = g(d, t)), F();
			}, A = function() {
				if (t.readyState >= r("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA) w();
				else if (n("cr:909281") !== null) var e = n("cr:909281").listen(t, "loadeddata", function() {
					e.remove(), w();
				});
				else t.addEventListener("loadeddata", w, { once: !0 });
			}, F = function() {
				R === 0 && (n("cr:909281") !== null ? D = n("cr:909281").listen(t, "seeked", A) : t.addEventListener("seeked", A)), R < i ? (t.currentTime = u + R * k, R++) : (n("cr:909281") !== null ? D && D.remove() : t.removeEventListener("seeked", A), I != null || s(0, 152521), e({
					thumbnails: S,
					selectedThumbnail: I,
					croppedThumbnailUri: T
				}));
			};
			if (t.videoWidth === 0 || t.videoHeight === 0) {
				b();
				return;
			}
			F();
		});
	}
	function m(e, t) {
		if (e && e.spherical === !0) {
			if (e.stereoMode === "left-right") return t / 2;
			if (e.projectionType === "cubemap") return t / 3;
		}
		return null;
	}
	function p(e, t) {
		return e && e.spherical === !0 && (e.stereoMode === "top-bottom" || e.projectionType === "cubemap") ? t / 2 : null;
	}
	function _(e, t) {
		return e && e.spherical === !0 && e.projectionType === "cubemap" ? t / 3 : 0;
	}
	function f(e, t) {
		return e && e.spherical === !0 && e.projectionType === "cubemap" ? t / 2 : 0;
	}
	function g(e, t) {
		var n = t.videoWidth != null && t.videoHeight != null ? t.videoWidth / t.videoHeight : u, r = n < 1;
		if (e == null && !r) {
			var a = document.createElement("canvas"), i = a.getContext("2d"), l = t.videoWidth, s = t.videoHeight;
			a.width = l, a.height = s, i.drawImage(t, 0, 0, l, s);
			var c = document.createElement("canvas"), d, m;
			n >= 1 && n < 1.2 ? (d = l * (o("CPXComposerConstants").REEL_THUMBNAIL_WIDTH / o("CPXComposerConstants").REEL_THUMBNAIL_HEIGHT), m = s) : (d = s, m = l), c.width = d, c.height = m;
			var p = c.getContext("2d");
			return p.drawImage(a, 0, 0, l, s, 0, 0, d, m), c.toDataURL("image/jpeg");
		}
		return null;
	}
	l.default = d;
}), 98);
