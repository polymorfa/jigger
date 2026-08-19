__d("WAWebCanvasUtils", [
	"WAWebABProps",
	"WAWebDataUrlToBlob",
	"WAWebEncodeRgbaToWebp",
	"WAWebImageGeometry",
	"WAWebMediaOpaqueData"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height);
		return r("WAWebEncodeRgbaToWebp")(n.data, e.width, e.height, { ensureExtendedFormat: !0 });
	}
	function s(e, t) {
		if (t === void 0 && (t = "image/jpeg"), Object.hasOwn(HTMLCanvasElement.prototype, "toBlob")) {
			var n = t === "image/jpeg" ? o("WAWebABProps").getABPropConfigValue("web_jpeg_quality") / 100 : void 0;
			return new Promise(function(r) {
				e.toBlob(r, t, n);
			});
		}
		return Promise.resolve(o("WAWebDataUrlToBlob").dataURLtoBlob(e.toDataURL(t)));
	}
	function u(e, t, n) {
		t === void 0 && (t = "image/jpeg");
		var r = e.toDataURL(t), a = o("WAWebDataUrlToBlob").dataURLtoBlob(r);
		if (a.size <= n) return e.toDataURL(t);
		for (var i = .9; i >= .1; i -= .1) {
			var l = e.toDataURL(t, i), s = o("WAWebDataUrlToBlob").dataURLtoBlob(l);
			if (s.size <= n) return l;
		}
		return null;
	}
	async function c(e, t, n) {
		for (var o, a, i = n || {}, l = (o = i.mimetype) != null ? o : "image/jpeg", u = (a = i.maxAttempts) != null ? a : 10, c = .5, d = e, m = await s(d, l), p = 0; p < u && !(m.size <= t); p++) {
			var f = Math.floor(e.width * c), g = Math.floor(e.height * c);
			d = _(f, g);
			var h = d.getContext("2d");
			h.drawImage(e, 0, 0, f, g), m = await s(d, l), c *= .5;
		}
		return {
			opaqueData: await r("WAWebMediaOpaqueData").createFromData(m, l),
			width: d.width,
			height: d.height,
			dataUrl: d.toDataURL("image/jpeg")
		};
	}
	function d(e) {
		var t = e.getContext("2d"), n = e.width, r = e.height, o = t.getImageData(0, 0, n, r), a = Math.max(n, r);
		e.width = a, e.height = a;
		var i = (a - n) / 2, l = (a - r) / 2;
		t.clearRect(0, 0, n, r), t.putImageData(o, i, l, 0, 0, n, r);
	}
	function m(e, t) {
		var n = e.getContext("2d"), r = f(e), a = o("WAWebImageGeometry").aspectRatioScaled(e.width / e.height, t), i = a.height, l = a.width;
		e.width = l, e.height = i, n.drawImage(r, 0, 0, l, i);
	}
	function p(e) {
		var t = e.getContext("2d");
		t.fillStyle = "rgb(247,247,247)", t.fillRect(0, 0, e.width, e.height);
	}
	function _(e, t) {
		var n = document.createElement("canvas");
		return n.width = e, n.height = t, n;
	}
	function f(e) {
		var t = _(e.width, e.height), n = t.getContext("2d");
		return n.drawImage(e, 0, 0), t;
	}
	function g(e) {
		var t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height), r = n.data.length / 4, o;
		for (o = 0; o < r; o++) {
			var a = n.data[4 * o + 3];
			if (a !== 0) return !1;
		}
		return !0;
	}
	function h(e) {
		var t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height), r = n.data.length / 4, o = 1 / 0, a = 1 / 0, i = 0, l = 0, s;
		for (s = 0; s < r; s++) {
			var u = n.data[4 * s + 3];
			if (u !== 0) {
				var c = s % e.width, d = Math.floor(s / e.width);
				c < o && (o = c), c > i && (i = c), d < a && (a = d), d > l && (l = d);
			}
		}
		return {
			left: o,
			top: a,
			right: i,
			bottom: l
		};
	}
	function y(e) {
		if (!g(e)) {
			var t = h(e), n = t.bottom, r = t.left, o = t.right, a = t.top, i = n - a, l = o - r, s = e.getContext("2d"), u = s.getImageData(r, a, l, i), c = _(l, i), d = c.getContext("2d");
			return d.putImageData(u, 0, 0), c;
		}
	}
	function C(e, t, n) {
		n === void 0 && (n = "white");
		var r = document.createElement("canvas"), o = r.getContext("2d"), a = document.createElement("canvas"), i = a.getContext("2d"), l = t * 2;
		r.width = a.width = e.width + l * 2, r.height = a.height = e.height + l * 2, o.drawImage(e, l, l), i.shadowColor = n, i.shadowBlur = 1;
		for (var s = 0; s < l; s++) i.drawImage(r, 0, 0), o.drawImage(a, 0, 0);
		return i.shadowColor = "rgba(0,0,0,0)", i.drawImage(e, l, l), a;
	}
	l.canvasToWebp = e, l.canvasToBlob = s, l.getResizedDataUrl = u, l.generateMicroThumb = c, l.square = d, l.scale = m, l.fillBackgroundWithGray = p, l.createCanvas = _, l.trim = y, l.addBorder = C;
}), 98);
