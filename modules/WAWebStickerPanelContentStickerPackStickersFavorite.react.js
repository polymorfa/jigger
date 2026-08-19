__d("WAWebStickerPanelContentStickerPackStickersFavorite.react", [
	"fbt",
	"WAWebAvatarStickerUtils",
	"WAWebEmojiPickerConstants",
	"WAWebFavoriteStickerCollection",
	"WAWebMediaStickerUtils",
	"WAWebStickerPanelContentEmpty.react",
	"WAWebStickerPanelContentStickersScrollGridPresentational.react",
	"react",
	"react-compiler-runtime",
	"useWAWebIsReadyToShowStickers.react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.displayLocation, a = e.onDownloadEnd, i = e.onDownloadStart, l = e.onFocusPrev, c = e.onScroll, d = e.onStickerClick, _ = e.ref, f = e.resetScroll, h = p(), y = g(f, i, a), C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			return { focus: function(t) {
				var e;
				(e = h.current) == null || e.focus(t);
			} };
		}, t[0] = C) : C = t[0], m(_, C);
		var b = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(n);
		if (!b) return null;
		if (y.length === 0) {
			var v;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx(r("WAWebStickerPanelContentEmpty.react"), { text: s._(
				/*BTDS*/
				""
			) }), t[1] = v) : v = t[1], v;
		}
		var S;
		return t[2] !== n || t[3] !== y || t[4] !== l || t[5] !== c || t[6] !== d ? (S = u.jsx(o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational, {
			ref: h,
			onFocusPrev: l,
			onScroll: c,
			onStickerClick: d,
			onStickerEnter: d,
			selectedTab: o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES,
			stickers: y,
			displayLocation: n,
			theme: "searchable",
			loadOneRow: !0
		}), t[2] = n, t[3] = y, t[4] = l, t[5] = c, t[6] = d, t[7] = S) : S = t[7], S;
	}
	function g(e, t, n) {
		var r = _([]), a = r[0], i = r[1], l = _(0), s = l[0], u = l[1], c = function() {
			var r = o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.map(function(e) {
				return e.sticker;
			});
			i(r), o("WAWebMediaStickerUtils").handleStickerDownloadInStickerPanel({
				stickersArr: r,
				setStickersDownloaded: i,
				stickerReuploadRetryCount: s,
				setStickerReuploadRetryCount: u,
				onChange: e,
				onDownloadStart: t,
				onDownloadEnd: n,
				filterStickers: o("WAWebAvatarStickerUtils").filterAvatarStickers,
				isAvatarStickers: !1
			});
		};
		return d(function() {
			c();
		}, []), o("useWAWebListener").useListener(o("WAWebFavoriteStickerCollection").FavoriteStickerCollection, "add remove change sort", c), a;
	}
	l.default = f;
}), 226);
