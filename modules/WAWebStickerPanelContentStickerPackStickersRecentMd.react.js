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
	"react-compiler-runtime",
	"useWAWebIsReadyToShowStickers.react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useImperativeHandle, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(16), n = e.displayLocation, a = e.isAvatarStickers, i = e.onDownloadEnd, l = e.onDownloadStart, c = e.onFocusPrev, d = e.onScroll, _ = e.onStickerClick, f = e.ref, h = e.resetScroll, y = a === void 0 ? !1 : a, C = p(), b;
		t[0] !== y || t[1] !== i || t[2] !== l || t[3] !== h ? (b = {
			isAvatarStickers: y,
			onChange: h,
			onDownloadEnd: i,
			onDownloadStart: l
		}, t[0] = y, t[1] = i, t[2] = l, t[3] = h, t[4] = b) : b = t[4];
		var v = g(b), S = !y && (n === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox || n === o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel), R;
		t[5] !== v || t[6] !== S ? (R = S ? [o("WAWebStickerModel").Sticker.getCreateButton()].concat(v) : v, t[5] = v, t[6] = S, t[7] = R) : R = t[7];
		var L = R, E;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (E = function() {
			return { focus: function(t) {
				var e;
				(e = C.current) == null || e.focus(t);
			} };
		}, t[8] = E) : E = t[8], m(f, E);
		var k = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(n);
		if (!k) return null;
		if (L.length === 0) {
			var I;
			return t[9] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx(r("WAWebStickerPanelContentEmpty.react"), { text: s._(
				/*BTDS*/
				""
			) }), t[9] = I) : I = t[9], I;
		}
		var T;
		return t[10] !== n || t[11] !== c || t[12] !== d || t[13] !== _ || t[14] !== L ? (T = u.jsx(o("WAWebStickerPanelContentStickersScrollGridPresentational.react").StickersScrollGridPresentational, {
			ref: C,
			onFocusPrev: c,
			onScroll: d,
			onStickerClick: _,
			onStickerEnter: _,
			selectedTab: o("WAWebEmojiPickerConstants").StickerTabs.RECENTS,
			stickers: L,
			theme: "searchable",
			displayLocation: n
		}), t[10] = n, t[11] = c, t[12] = d, t[13] = _, t[14] = L, t[15] = T) : T = t[15], T;
	}
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
