__d("WAWebStickerPanelContentStickerPackStickersFavorite.react", [
	"fbt",
	"WAWebAvatarStickerUtils",
	"WAWebEmojiPickerConstants",
	"WAWebFavoriteStickerCollection",
	"WAWebMediaStickerUtils",
	"WAWebStickerPanelContentEmpty.react",
	"WAWebStickerPanelContentStickersScrollGridPresentational.react",
	"react",
	"useWAWebIsReadyToShowStickers.react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.displayLocation, n = e.onDownloadEnd, a = e.onDownloadStart, i = e.onFocusPrev, l = e.onScroll, c = e.onStickerClick, d = e.ref, _ = e.resetScroll, f = p(), h = g(_, a, n);
		m(d, function() {
			return { focus: function(t) {
				var e;
				(e = f.current) == null || e.focus(t);
			} };
		});
		var y = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(t);
		return y ? h.length === 0 ? u.jsx(r("WAWebStickerPanelContentEmpty.react"), { text: s._(
			/*BTDS*/
			""
		) }) : u.jsx(o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational, {
			ref: f,
			onFocusPrev: i,
			onScroll: l,
			onStickerClick: c,
			onStickerEnter: c,
			selectedTab: o("WAWebEmojiPickerConstants").StickerTabs.FAVORITES,
			stickers: h,
			displayLocation: t,
			theme: "searchable",
			loadOneRow: !0
		}) : null;
	}
	f.displayName = f.name + " [from " + i.id + "]";
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
