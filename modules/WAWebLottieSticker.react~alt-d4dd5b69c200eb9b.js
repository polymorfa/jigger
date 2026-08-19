__d("WAWebLottieSticker.react", [
	"fbt",
	"WAWebInMemoryLottieStickerCache",
	"WAWebLottieWrapper.react",
	"WAWebMediaBlobProvider",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaStateControlDownload.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.className, n = e.downloadMedia, a = e.forcePlay, i = e.mediaData, l = e.onClick, c = e.placeholderRenderer, m = e.startAnimation, f = _(!1), h = f[0], y = f[1], C = d(function() {
			y(!0);
		}, []), b = d(function(e) {
			e.stopPropagation(), y(!1), o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(i.filehash), o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.delete(i.filehash), o("WAWebInMemoryLottieStickerCache").InMemorySecondaryLottieStickerCache.delete(i.filehash), n();
		}, [i.filehash, n]), v = h ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), S = p(null), R = h ? void 0 : l, L = d(function(e) {
			if (e.key === "Enter" || e.key === " ") {
				var t;
				e.preventDefault(), (t = S.current) == null || t.click();
			}
		}, []), E = h ? u.jsx(r("WAWebMediaStateControlDownload.react"), { onClick: b }) : u.jsx(r("WAWebMediaBlobProvider"), {
			mediaData: i,
			downloadMedia: n,
			renderPlaceholder: c,
			render: function(t) {
				return u.jsx(g, {
					blob: t,
					forcePlay: a,
					mediaData: i,
					onExtractionFailed: C
				});
			}
		});
		return R != null ? u.jsx("div", {
			ref: S,
			className: t,
			onClick: R,
			onKeyDown: L,
			role: "button",
			tabIndex: 0,
			"aria-label": v,
			children: E
		}) : u.jsx("div", {
			ref: S,
			className: t,
			role: "img",
			"aria-label": v,
			children: E
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.blob, n = e.forcePlay, a = e.mediaData, i = e.onExtractionFailed, l = _(o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(a.filehash)), s = l[0], c = l[1];
		return m(function() {
			o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(a.filehash) == null && o("WAWebInMemoryLottieStickerCache").extractAndSetBothLottieJSONInMemoryCache(a.filehash, t).then(function() {
				var e = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(a.filehash);
				e != null ? c(e) : i();
			});
		}, [
			a.filehash,
			t,
			i
		]), s != null ? u.jsx(r("WAWebLottieWrapper.react"), {
			data: s,
			forcePlay: n
		}) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
