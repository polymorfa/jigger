__d("WAWebMediaSticker.react", [
	"fbt",
	"Promise",
	"WAWebFirstPartyStickerInfo.react",
	"WAWebFlex.react",
	"WAWebImg.react",
	"WAWebLottieSticker.react",
	"WAWebMediaUrlProvider",
	"WAWebMediaViewerStyles",
	"WAWebMediaZoomable.react",
	"WAWebNewsletterCollection",
	"WAWebNullFunc",
	"WAWebStickerDetailsStickerPackInfo.react",
	"WAWebStickerLikeMsgPlaceholder.react",
	"WAWebStickerModel",
	"WAWebStickerUtils",
	"WAWebWamEnumWebcRmrReasonCode",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useMergeRefs",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m = d || (d = o("react")), p = d, _ = p.useEffect, f = p.useRef, g = 376, h = { container: {
		width: "xh8yej3",
		height: "x5yr21d",
		$$css: !0
	} };
	function y(t) {
		var a = o("react-compiler-runtime").c(54), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var d = i, p = d.msg, g;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (g = [
			"encFilehash",
			"directPath",
			"filehash",
			"mediaKey",
			"mediaKeyTimestamp",
			"mediaStage",
			"mimetype",
			"fullWidth",
			"fullHeight",
			"isFirstParty",
			"isAvatar",
			"stickerPackId",
			"stickerPackName",
			"stickerPackPublisher",
			"extractedLottieSticker",
			"accessibilityLabel"
		], a[3] = g) : g = a[3];
		var y = o("useWAWebModelValues").useModelValues(i.mediaData, g), b = f(null), v = r("useMergeRefs")(l, b), S;
		a[4] !== y.mimetype ? (S = o("WAWebStickerUtils").getStickerFileType(y.mimetype), a[4] = y.mimetype, a[5] = S) : S = a[5];
		var R = S === o("WAWebStickerUtils").StickerFileType.LOTTIE, L = i, E = L.onLoad, k, I;
		a[6] !== R || a[7] !== E ? (k = function() {
			R && E != null && E();
		}, I = [R, E], a[6] = R, a[7] = E, a[8] = k, a[9] = I) : (k = a[8], I = a[9]), _(k, I);
		var T;
		a[10] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t) {
			var e;
			(e = b.current) == null || e.onClick(t);
		}, a[10] = T) : T = a[10];
		var D = T, x;
		a[11] !== p ? (x = function() {
			return p ? p.downloadMedia({
				downloadEvenIfExpensive: !1,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
				isUserInitiated: !1
			}) : (c || (c = n("Promise"))).resolve();
		}, a[11] = p, a[12] = x) : x = a[12];
		var $ = x, P, N;
		if (a[13] === Symbol.for("react.memo_cache_sentinel")) {
			var M, w;
			P = r("WAWebNewsletterCollection").getActive(), N = (M = (w = P) == null || (w = w.newsletterMetadata) == null ? void 0 : w.iAmAdminOrOwner()) != null ? M : !1, a[13] = P, a[14] = N;
		} else P = a[13], N = a[14];
		var A = N, F;
		a[15] !== y.directPath || a[16] !== y.encFilehash || a[17] !== y.filehash || a[18] !== y.fullHeight || a[19] !== y.fullWidth || a[20] !== y.isAvatar || a[21] !== y.isFirstParty || a[22] !== y.mediaKey || a[23] !== y.mediaKeyTimestamp || a[24] !== y.mimetype || a[25] !== y.stickerPackId || a[26] !== y.stickerPackName || a[27] !== y.stickerPackPublisher || a[28] !== i.onStickerPackView || a[29] !== i.stickerPackViewDelay ? (F = y.isFirstParty === !0 ? m.jsx(r("WAWebFirstPartyStickerInfo.react"), {
			stickerPackId: y.stickerPackId,
			onStickerPackView: i.onStickerPackView,
			stickerPackViewDelay: i.stickerPackViewDelay,
			showViewPackButton: P != null ? y.isAvatar !== !0 && A : y.isAvatar !== !0,
			sticker: new (o("WAWebStickerModel")).StickerModel({
				id: y.filehash,
				mimetype: y.mimetype,
				width: y.fullWidth,
				height: y.fullHeight,
				filehash: y.filehash,
				encFilehash: y.encFilehash,
				directPath: y.directPath,
				mediaKey: y.mediaKey,
				mediaKeyTimestamp: y.mediaKeyTimestamp
			})
		}) : m.jsx(o("WAWebStickerDetailsStickerPackInfo.react").StickerDetailsStickerPackInfo, {
			name: y.stickerPackName,
			publisher: y.stickerPackPublisher,
			theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme.MediaViewer,
			sticker: new (o("WAWebStickerModel")).StickerModel({
				id: y.filehash,
				mimetype: y.mimetype,
				width: y.fullWidth,
				height: y.fullHeight,
				filehash: y.filehash,
				encFilehash: y.encFilehash,
				directPath: y.directPath,
				mediaKey: y.mediaKey,
				mediaKeyTimestamp: y.mediaKeyTimestamp
			})
		}), a[15] = y.directPath, a[16] = y.encFilehash, a[17] = y.filehash, a[18] = y.fullHeight, a[19] = y.fullWidth, a[20] = y.isAvatar, a[21] = y.isFirstParty, a[22] = y.mediaKey, a[23] = y.mediaKeyTimestamp, a[24] = y.mimetype, a[25] = y.stickerPackId, a[26] = y.stickerPackName, a[27] = y.stickerPackPublisher, a[28] = i.onStickerPackView, a[29] = i.stickerPackViewDelay, a[30] = F) : F = a[30];
		var O = F, B;
		a[31] !== i.onLoad ? (B = function(t) {
			return m.jsx(r("WAWebImg.react"), {
				className: (u || (u = r("stylex")))(r("WAWebMediaViewerStyles").content),
				onClick: D,
				src: t,
				onLoad: i.onLoad
			});
		}, a[31] = i.onLoad, a[32] = B) : B = a[32];
		var W;
		a[33] !== $ || a[34] !== y || a[35] !== B ? (W = m.jsx(r("WAWebMediaUrlProvider"), {
			mediaData: y,
			placeholderRenderer: C,
			downloadMedia: $,
			children: B
		}), a[33] = $, a[34] = y, a[35] = B, a[36] = W) : W = a[36];
		var q = W;
		if (R) {
			var U;
			a[37] !== $ || a[38] !== y ? (U = m.jsx(r("WAWebLottieSticker.react"), {
				className: "",
				mediaData: y,
				startAnimation: !0,
				onClick: D,
				placeholderRenderer: o("WAWebNullFunc").returnNull,
				downloadMedia: $
			}), a[37] = $, a[38] = y, a[39] = U) : U = a[39], q = U;
		}
		var V;
		a[40] === Symbol.for("react.memo_cache_sentinel") ? (V = { className: "xh8yej3 x5yr21d xlnrm6 xjkwb7i x1iymm2a xupqr0c" }, a[40] = V) : V = a[40];
		var H;
		a[41] !== y.accessibilityLabel ? (H = y.accessibilityLabel != null ? y.accessibilityLabel : s._(
			/*BTDS*/
			""
		), a[41] = y.accessibilityLabel, a[42] = H) : H = a[42];
		var G;
		a[43] !== y.fullHeight || a[44] !== y.fullWidth || a[45] !== v || a[46] !== p || a[47] !== i.onImgZoomIn || a[48] !== q || a[49] !== H ? (G = m.jsx("div", babelHelpers.extends({}, V, {
			"data-testid": "media-sticker",
			children: m.jsx(r("WAWebMediaZoomable.react"), {
				ref: v,
				role: "button",
				tabIndex: 0,
				"aria-label": H,
				width: y.fullWidth,
				height: y.fullHeight,
				onZoomIn: i.onImgZoomIn,
				msg: p,
				children: q
			})
		})), a[43] = y.fullHeight, a[44] = y.fullWidth, a[45] = v, a[46] = p, a[47] = i.onImgZoomIn, a[48] = q, a[49] = H, a[50] = G) : G = a[50];
		var z;
		return a[51] !== O || a[52] !== G ? (z = m.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.container,
			children: [G, O]
		}), a[51] = O, a[52] = G, a[53] = z) : z = a[53], z;
	}
	function C() {
		return m.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { size: g });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
