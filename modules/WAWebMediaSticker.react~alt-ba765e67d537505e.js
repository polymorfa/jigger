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
		var a, i, l = t.ref, d = babelHelpers.objectWithoutPropertiesLoose(t, e), p = d.msg, g = o("useWAWebModelValues").useModelValues(d.mediaData, [
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
		]), y = f(null), b = r("useMergeRefs")(l, y), v = o("WAWebStickerUtils").getStickerFileType(g.mimetype) === o("WAWebStickerUtils").StickerFileType.LOTTIE, S = d.onLoad;
		_(function() {
			v && S != null && S();
		}, [v, S]);
		var R = function(t) {
			var e;
			(e = y.current) == null || e.onClick(t);
		}, L = function() {
			return p ? p.downloadMedia({
				downloadEvenIfExpensive: !1,
				rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE.MEDIA_VIEWER,
				isUserInitiated: !1
			}) : (c || (c = n("Promise"))).resolve();
		}, E = r("WAWebNewsletterCollection").getActive(), k = (a = E == null || (i = E.newsletterMetadata) == null ? void 0 : i.iAmAdminOrOwner()) != null ? a : !1, I = g.isFirstParty === !0 ? m.jsx(r("WAWebFirstPartyStickerInfo.react"), {
			stickerPackId: g.stickerPackId,
			onStickerPackView: d.onStickerPackView,
			stickerPackViewDelay: d.stickerPackViewDelay,
			showViewPackButton: E != null ? g.isAvatar !== !0 && k : g.isAvatar !== !0,
			sticker: new (o("WAWebStickerModel")).StickerModel({
				id: g.filehash,
				mimetype: g.mimetype,
				width: g.fullWidth,
				height: g.fullHeight,
				filehash: g.filehash,
				encFilehash: g.encFilehash,
				directPath: g.directPath,
				mediaKey: g.mediaKey,
				mediaKeyTimestamp: g.mediaKeyTimestamp
			})
		}) : m.jsx(o("WAWebStickerDetailsStickerPackInfo.react").StickerDetailsStickerPackInfo, {
			name: g.stickerPackName,
			publisher: g.stickerPackPublisher,
			theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme.MediaViewer,
			sticker: new (o("WAWebStickerModel")).StickerModel({
				id: g.filehash,
				mimetype: g.mimetype,
				width: g.fullWidth,
				height: g.fullHeight,
				filehash: g.filehash,
				encFilehash: g.encFilehash,
				directPath: g.directPath,
				mediaKey: g.mediaKey,
				mediaKeyTimestamp: g.mediaKeyTimestamp
			})
		}), T = m.jsx(r("WAWebMediaUrlProvider"), {
			mediaData: g,
			placeholderRenderer: C,
			downloadMedia: L,
			children: function(t) {
				return m.jsx(r("WAWebImg.react"), {
					className: (u || (u = r("stylex")))(r("WAWebMediaViewerStyles").content),
					onClick: R,
					src: t,
					onLoad: d.onLoad
				});
			}
		});
		return v && (T = m.jsx(r("WAWebLottieSticker.react"), {
			className: "",
			mediaData: g,
			startAnimation: !0,
			onClick: R,
			placeholderRenderer: o("WAWebNullFunc").returnNull,
			downloadMedia: L
		})), m.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.container,
			children: [m.jsx("div", {
				className: "xh8yej3 x5yr21d xlnrm6 xjkwb7i x1iymm2a xupqr0c",
				"data-testid": "media-sticker",
				children: m.jsx(r("WAWebMediaZoomable.react"), {
					ref: b,
					role: "button",
					tabIndex: 0,
					"aria-label": g.accessibilityLabel != null ? g.accessibilityLabel : s._(
						/*BTDS*/
						""
					),
					width: g.fullWidth,
					height: g.fullHeight,
					onZoomIn: d.onImgZoomIn,
					msg: p,
					children: T
				})
			}), I]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		return m.jsx(r("WAWebStickerLikeMsgPlaceholder.react"), { size: g });
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
