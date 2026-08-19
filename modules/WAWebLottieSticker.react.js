__d("WAWebLottieSticker.react", [
	"fbt",
	"WAWebInMemoryLottieStickerCache",
	"WAWebLottieWrapper.react",
	"WAWebMediaBlobProvider",
	"WAWebMediaInMemoryBlobCache",
	"WAWebMediaStateControlDownload.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(23), n = e.className, a = e.downloadMedia, i = e.forcePlay, l = e.mediaData, c = e.onClick, d = e.placeholderRenderer, m = _(!1), f = m[0], h = m[1], y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			h(!0);
		}, t[0] = y) : y = t[0];
		var C = y, b;
		t[1] !== a || t[2] !== l.filehash ? (b = function(t) {
			t.stopPropagation(), h(!1), o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.delete(l.filehash), o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.delete(l.filehash), o("WAWebInMemoryLottieStickerCache").InMemorySecondaryLottieStickerCache.delete(l.filehash), a();
		}, t[1] = a, t[2] = l.filehash, t[3] = b) : b = t[3];
		var v = b, S;
		t[4] !== f ? (S = f ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[4] = f, t[5] = S) : S = t[5];
		var R = S, L = p(null), E = f ? void 0 : c, k;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (k = function(t) {
			if (t.key === "Enter" || t.key === " ") {
				var e;
				t.preventDefault(), (e = L.current) == null || e.click();
			}
		}, t[6] = k) : k = t[6];
		var I = k, T;
		t[7] !== a || t[8] !== f || t[9] !== i || t[10] !== v || t[11] !== l || t[12] !== d ? (T = f ? u.jsx(r("WAWebMediaStateControlDownload.react"), { onClick: v }) : u.jsx(r("WAWebMediaBlobProvider"), {
			mediaData: l,
			downloadMedia: a,
			renderPlaceholder: d,
			render: function(t) {
				return u.jsx(g, {
					blob: t,
					forcePlay: i,
					mediaData: l,
					onExtractionFailed: C
				});
			}
		}), t[7] = a, t[8] = f, t[9] = i, t[10] = v, t[11] = l, t[12] = d, t[13] = T) : T = t[13];
		var D = T;
		if (E != null) {
			var x;
			return t[14] !== R || t[15] !== n || t[16] !== D || t[17] !== E ? (x = u.jsx("div", {
				ref: L,
				className: n,
				onClick: E,
				onKeyDown: I,
				role: "button",
				tabIndex: 0,
				"aria-label": R,
				children: D
			}), t[14] = R, t[15] = n, t[16] = D, t[17] = E, t[18] = x) : x = t[18], x;
		}
		var $;
		return t[19] !== R || t[20] !== n || t[21] !== D ? ($ = u.jsx("div", {
			ref: L,
			className: n,
			role: "img",
			"aria-label": R,
			children: D
		}), t[19] = R, t[20] = n, t[21] = D, t[22] = $) : $ = t[22], $;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(10), n = e.blob, a = e.forcePlay, i = e.mediaData, l = e.onExtractionFailed, s;
		t[0] !== i.filehash ? (s = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(i.filehash), t[0] = i.filehash, t[1] = s) : s = t[1];
		var c = _(s), d = c[0], p = c[1], f, g;
		t[2] !== n || t[3] !== i.filehash || t[4] !== l ? (f = function() {
			o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(i.filehash) == null && o("WAWebInMemoryLottieStickerCache").extractAndSetBothLottieJSONInMemoryCache(i.filehash, n).then(function() {
				var e = o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(i.filehash);
				e != null ? p(e) : l();
			});
		}, g = [
			i.filehash,
			n,
			l
		], t[2] = n, t[3] = i.filehash, t[4] = l, t[5] = f, t[6] = g) : (f = t[5], g = t[6]), m(f, g);
		var h;
		return t[7] !== a || t[8] !== d ? (h = d != null ? u.jsx(r("WAWebLottieWrapper.react"), {
			data: d,
			forcePlay: a
		}) : null, t[7] = a, t[8] = d, t[9] = h) : h = t[9], h;
	}
	l.default = f;
}), 226);
