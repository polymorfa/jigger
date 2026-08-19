__d("WAWebStickerPanelContentStickerPackStickersRecentMd.react", [
	"fbt",
	"WAWebAvatarStickerUtils",
	"WAWebEmojiPickerConstants",
	"WAWebMediaStickerUtils",
	"WAWebPanelsDisplayLocation",
	"WAWebRecentStickerCollectionMd",
	"WAWebStickerModel",
	"WAWebStickerPanelContentEmpty.react",
	"WAWebStickerPanelContentStickersScrollGridPresentational.react",
	"react",
	"useWAWebIsReadyToShowStickers.react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = e.displayLocation, n = e.isAvatarStickers, a = n === void 0 ? !1 : n, i = e.onDownloadEnd, l = e.onDownloadStart, c = e.onFocusPrev, d = e.onScroll, _ = e.onStickerClick, f = e.ref, h = e.resetScroll, y = p(), C = g({
			isAvatarStickers: a,
			onChange: h,
			onDownloadEnd: i,
			onDownloadStart: l
		}), b = !a && (t === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox || t === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel), v = b ? [o("WAWebStickerModel").Sticker.getCreateButton()].concat(C) : C;
		m(f, function() {
			return { focus: function(t) {
				var e;
				(e = y.current) == null || e.focus(t);
			} };
		});
		var S = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(t);
		return S ? v.length === 0 ? u.jsx(r("WAWebStickerPanelContentEmpty.react"), { text: s._(
			/*BTDS*/
			""
		) }) : u.jsx(o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational, {
			ref: y,
			onFocusPrev: c,
			onScroll: d,
			onStickerClick: _,
			onStickerEnter: _,
			selectedTab: o("WAWebEmojiPickerConstants").StickerTabs.RECENTS,
			stickers: v,
			theme: "searchable",
			displayLocation: t
		}) : null;
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.isAvatarStickers, n = t === void 0 ? !1 : t, r = e.onChange, a = e.onDownloadEnd, i = e.onDownloadStart, l = _([]), s = l[0], u = l[1], c = _(0), m = c[0], p = c[1], f = function() {
			var e = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map(function(e) {
				return e.sticker;
			});
			o("WAWebMediaStickerUtils").handleStickerDownloadInStickerPanel({
				stickersArr: e,
				setStickersDownloaded: u,
				stickerReuploadRetryCount: m,
				setStickerReuploadRetryCount: p,
				onChange: r,
				onDownloadStart: i,
				onDownloadEnd: a,
				filterStickers: o("WAWebAvatarStickerUtils").filterAvatarStickers,
				isAvatarStickers: n
			});
		};
		return d(function() {
			f();
		}, []), o("useWAWebListener").useListener(o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd, "add remove change sort", f), s;
	}
	var h = f;
	l.StickerPackStickersRecent = h;
}), 226);
