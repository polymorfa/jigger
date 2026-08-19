__d("WAWebStickerPackUtils", [
	"WABlobToArrayBuffer",
	"WAMediaCalculateFilehash",
	"WAWebApiParse",
	"WAWebCanvasUtils",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaLoad",
	"WAWebRecentStickerCollectionMd",
	"WAWebStickerModel",
	"WAWebStickerPackConstants",
	"err",
	"fflate"
], (function(t, n, r, o, a, i, l) {
	async function e(e) {
		for (var t = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map(function(e) {
			return e.sticker;
		}), n = new Map(), r = [], a = 0; a < Math.min(t.length, e); a++) {
			var i, l = t[a], s = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(l.mediaData.filehash);
			if (s != null) {
				r.push({
					emojis: (i = l.mediaData.emojis) != null ? i : [],
					mimetype: l.mediaData.mimetype,
					isLottie: !!l.mediaData.isLottie,
					fileName: "sticker" + a + ".webp",
					isAnimated: !!l.mediaData.isAnimated
				});
				var u = await s.arrayBuffer();
				n.set("sticker" + a + ".webp", new Uint8Array(u));
			}
		}
		var c = {};
		n.forEach(function(e, t) {
			c[t] = e;
		});
		var d = o("fflate").zipSync(c);
		return {
			stickerPackZip: new Blob([d], { type: "application/zip" }),
			stickerPackStickers: r
		};
	}
	async function s(e, t) {
		var n = t.stickers, a = t.trayIconFileName, i = null;
		if (e instanceof Blob ? i = e : i = e.getBlob(), i == null) throw r("err")("blob is null");
		var l = await o("WABlobToArrayBuffer").blobToArrayBuffer(i), s = new Uint8Array(l), u = await o("fflate").unzipSync(s), c = [], d = async function() {
			var e = m[0], t = m[1];
			if (e === a) return 1;
			if (t instanceof Uint8Array) {
				var r, i = t.buffer, l = await o("WAMediaCalculateFilehash").calculateFilehash(i), s = n == null ? void 0 : n.find(function(t) {
					return t.fileName === e;
				}), u = (r = s == null ? void 0 : s.mimetype) != null ? r : "image/webp";
				o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(l, new Blob([i], { type: u }));
				var d = new (o("WAWebStickerModel")).StickerModel({
					mimetype: u,
					width: 250,
					height: 250,
					filehash: l,
					id: l,
					directPath: "",
					mediaKey: "",
					encFilehash: "",
					mediaKeyTimestamp: 0
				});
				if (s != null) {
					var p, _;
					d.mediaData.set({
						isLottie: (p = s.isLottie) != null ? p : !1,
						isAnimated: (_ = s.isAnimated) != null ? _ : !1
					});
				}
				c.push(d);
			}
		};
		for (var m of Object.entries(u)) await d();
		return c;
	}
	async function u(e) {
		for (var t = e.context, n = e.gap, r = n === void 0 ? o("WAWebStickerPackConstants").PADDING : n, a = e.imageL, i = a === void 0 ? o("WAWebStickerPackConstants").IMAGE_LENGTH : a, l = e.imageW, s = l === void 0 ? o("WAWebStickerPackConstants").IMAGE_WIDTH : l, u = e.recentStickers, c = e.stickerCount, d = e.thumbL, m = d === void 0 ? o("WAWebStickerPackConstants").THUMBNAIL_LENGTH : d, p = e.thumbW, _ = p === void 0 ? o("WAWebStickerPackConstants").THUMBNAIL_WIDTH : p, f = e.x, g = e.y, h = f, y = g, C = 0; C < c; C++) {
			var b = u[C], v = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(b.mediaData.filehash);
			if (v != null) {
				var S = window.URL.createObjectURL(v), R = await o("WAWebMediaLoad").loadImage(S);
				t.drawImage(R, h, y, i, s), h += m / 2 - r, C % 2 !== 0 && (h = c === 3 ? m / 2 - i / 2 : r, y = _ / 2 + r);
			}
		}
	}
	function c(e) {
		if (o("WAWebApiParse").isStickerPackURL(e)) {
			var t = new URL(e), n = t.pathname.split("/"), r = n[0], a = n[1], i = n[2];
			return i;
		}
	}
	async function d(e, t, n, r, a) {
		t === void 0 && (t = o("WAWebStickerPackConstants").THUMBNAIL_LENGTH), n === void 0 && (n = o("WAWebStickerPackConstants").THUMBNAIL_WIDTH), r === void 0 && (r = o("WAWebStickerPackConstants").IMAGE_LENGTH), a === void 0 && (a = o("WAWebStickerPackConstants").IMAGE_WIDTH);
		var i = o("WAWebCanvasUtils").createCanvas(t, n), l = i.getContext("2d");
		l.fillStyle = "#FFFFFF", l.fillRect(0, 0, t, n);
		var s = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map(function(e) {
			return e.sticker;
		}), c = Math.min(s.length, e != null ? e : 4), d = o("WAWebStickerPackConstants").PADDING, m = o("WAWebStickerPackConstants").PADDING;
		switch (c) {
			case 1:
				d = t / 2 - r / 2, m = n / 2 - a / 2;
				break;
			case 2:
				m = n / 2 - a / 2;
				break;
		}
		return await u({
			context: l,
			gap: o("WAWebStickerPackConstants").PADDING,
			imageL: r,
			imageW: a,
			recentStickers: s,
			stickerCount: c,
			thumbL: t,
			thumbW: n,
			x: d,
			y: m
		}), i;
	}
	async function m(e, t) {
		t === void 0 && (t = o("WAWebStickerPackConstants").STICKER_GRID_COUNT);
		var n = o("WAWebCanvasUtils").createCanvas(o("WAWebStickerPackConstants").THUMBNAIL_LENGTH, o("WAWebStickerPackConstants").THUMBNAIL_WIDTH), r = n.getContext("2d"), a = e.slice(0, t);
		if (a.length < t) {
			var i = await p(a[0]);
			return i != null && r.drawImage(i, 0, 0, o("WAWebStickerPackConstants").THUMBNAIL_LENGTH, o("WAWebStickerPackConstants").THUMBNAIL_WIDTH), n;
		}
		var l = await Promise.all(a.map(async function(e, t) {
			var n = await p(e);
			return n != null ? {
				image: n,
				index: t
			} : null;
		}));
		for (var s of l) if (s != null) {
			var u = s.image, c = s.index, d = c % 2, m = Math.floor(c / 2), _ = o("WAWebStickerPackConstants").PADDING + d * (o("WAWebStickerPackConstants").IMAGE_LENGTH + o("WAWebStickerPackConstants").GRID_GAP), f = o("WAWebStickerPackConstants").PADDING + m * (o("WAWebStickerPackConstants").IMAGE_WIDTH + o("WAWebStickerPackConstants").GRID_GAP);
			r.drawImage(u, _, f, o("WAWebStickerPackConstants").IMAGE_LENGTH, o("WAWebStickerPackConstants").IMAGE_WIDTH);
		}
		return n;
	}
	async function p(e) {
		if (e == null) return null;
		var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(e.mediaData.filehash);
		if (t == null) return null;
		var n = window.URL.createObjectURL(t);
		try {
			return await o("WAWebMediaLoad").loadImage(n);
		} finally {
			window.URL.revokeObjectURL(n);
		}
	}
	l.compressedRecentStickers = e, l.decompressStickerPackMedia = s, l.extractStickerPackIdFromUrl = c, l.generateStickerPackThumbnail = d, l.generateStickerGridThumbnail = m;
}), 98);
