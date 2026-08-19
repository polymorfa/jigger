__d("WAWebMediaLinkPreviewContainer.react", [
	"WAWebBotReelsPluginLinkPreview.react",
	"WAWebCallLinkPreviewThumbnail.react",
	"WAWebCmd",
	"WAWebCompactMapString",
	"WAWebDisplayType",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebGetCallLinkPreviewTitle",
	"WAWebLinkify",
	"WAWebLongLinkPop.react",
	"WAWebMediaDataUtils",
	"WAWebMediaDownloadMmsThumbnail",
	"WAWebMediaLinkPreview.react",
	"WAWebMediaLinkPreviewUtils",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebMsgLinks",
	"WAWebParseCallLinkType",
	"WAWebPaymentLink",
	"WAWebPaymentLinkOrderDetailsHeader.react",
	"WAWebProtobufsAICommon.pb",
	"WAWebStatusContext",
	"WAWebStatusLinkFormatMutator",
	"WAWebSuspiciousLinkPopup.react",
	"WAWebURLUtils",
	"WAWebWamEnumUrlStatusClicked",
	"punycode",
	"react",
	"useWAWebMsgValues",
	"useWAWebPrevious"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.memo, d = u.useContext, m = u.useEffect, p = u.useState;
	function _(e) {
		var t = e.displayType, n = e.horizontalLayout, a = n === void 0 ? !1 : n, i = e.isInvite, l = e.msg, u = e.onClick, c = e.reelItem, _ = e.theme, g = d(o("WAWebStatusContext").StatusContext), h = g.statusItemViewEventRef, y = p(null), C = y[0], b = y[1], v = p(null), S = v[0], R = v[1], L = o("useWAWebMsgValues").useMsgValues(l.id, [
			o("WAWebMsgGetters").getT,
			o("WAWebMsgGetters").getThumbnail,
			o("WAWebMsgGetters").getThumbnailHQ,
			o("WAWebMsgGetters").getThumbnailDirectPath,
			o("WAWebMsgGetters").getThumbnailHeight,
			o("WAWebMsgGetters").getThumbnailWidth,
			o("WAWebMsgGetters").getTitle,
			o("WAWebMsgGetters").getDescription,
			o("WAWebMsgGetters").getMatchedText,
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getStar,
			o("WAWebFrontendMsgGetters").getAsUrl,
			o("WAWebMsgGetters").getInviteGrpType,
			o("WAWebMsgGetters").getIsKept,
			o("WAWebMsgGetters").getMediaKey,
			o("WAWebMsgGetters").getBotReelPluginThumbnailCdnUrl,
			o("WAWebMsgGetters").getPaymentLinkPreviewMetaTags
		]), E = L[0], k = L[1], I = L[2], T = L[3], D = L[4], x = L[5], $ = L[6], P = L[7], N = L[8], M = L[9], w = L[10], A = L[11], F = L[12], O = L[13], B = L[14], W = L[15], q = L[16], U = async function(t) {
			var e = [{
				width: 48,
				height: 48,
				imageFormat: "image/jpeg",
				imageFormatOptions: 1
			}], n = await o("WAWebMediaDataUtils").getResizedThumbData(t, e), r = n[0];
			R(r == null ? void 0 : r.dataUrl);
		}, V = async function(t) {
			var e = [{
				width: 170,
				height: 300,
				imageFormat: "image/jpeg",
				imageFormatOptions: 1
			}], n = await o("WAWebMediaDataUtils").getResizedThumbData(t, e), r = n[0];
			b(r == null ? void 0 : r.dataUrl);
		}, H = r("useWAWebPrevious")(T);
		m(function() {
			var e = A;
			e != null && (!e.thumbnailHQ || H !== T) && !o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(E) && r("WAWebMediaDownloadMmsThumbnail")({
				chat: o("WAWebFrontendMsgGetters").getMaybeChat(l),
				msg: e,
				isPreload: !1
			}), W != null && V(W), c != null && (V(c.thumbnailUrl), U(c.profileIconUrl));
		}, [
			A,
			B,
			E,
			l,
			T,
			H,
			W,
			c
		]);
		var G = null;
		i || (G = f(N));
		var z = o("WAWebMsgLinks").getLinksFromMsg(l), j = r("WAWebCompactMapString")(z, function(e) {
			return f(e.url);
		});
		if (c == null && G != null && !j.some(function(e) {
			return e === G;
		})) return s.jsx("div", {});
		var K = o("WAWebMsgLinks").getSuspiciousLinks(l).filter(function(e) {
			var t = e.url;
			return l.matchedText === t;
		}), Q, X, Y, J, Z, ee, te;
		if (K.length ? te = function() {
			var e = K[0];
			o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebSuspiciousLinkPopup.react"), { link: e }));
		} : (te = function() {
			var e, n = (e = c == null ? void 0 : c.videoUrl) != null ? e : N, a = h == null ? void 0 : h.current;
			if (a && a.urlStatusClicked === o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.NO_CLICK && (a.urlStatusClicked = o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED.ONE_CLICK), t === o("WAWebDisplayType").DISPLAY_TYPE.STATUS) {
				var i = o("WAWebLinkify").findLink({ text: n });
				if (i != null) {
					var l = o("WAWebStatusLinkFormatMutator").cleanUrl(i), d = l[0], m = l[1], p = o("WAWebStatusLinkFormatMutator").redactUrl(d, m);
					if (p !== d + m) {
						o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebLongLinkPop.react"), {
							link: i,
							statusItemViewEventRef: h
						})), o("WAWebCmd").Cmd.openLongLinkModal();
						return;
					}
				}
			}
			o("WAWebExternalLink.react").openExternalLink(n), u && u();
		}, Q = P, X = k, o("WAWebMediaLinkPreviewUtils").hqLinkPreviewExpired(E) || (Y = I, J = T, Z = D, ee = x)), t === o("WAWebDisplayType").DISPLAY_TYPE.BOT_REELS_PLUGIN) {
			var ne;
			return s.jsx(r("WAWebBotReelsPluginLinkPreview.react"), {
				title: (ne = c == null ? void 0 : c.title) != null ? ne : $,
				handleClick: te,
				onClick: te,
				botReelPluginThumbnailUrl: C,
				reelProfilePictureUrl: S
			});
		}
		var re = o("WAWebPaymentLink").getPaymentLinkOrderHeaderComponentDisplayParams(q);
		if (re != null) return s.jsx(r("WAWebPaymentLinkOrderDetailsHeader.react"), {
			isSentByMe: M,
			matchedText: N,
			onClick: te,
			parsedAmount: re
		});
		var oe = i === !0 ? null : r("WAWebParseCallLinkType")(N, !0), ae = oe != null ? s.jsx(r("WAWebCallLinkPreviewThumbnail.react"), { callType: oe }) : null, ie = ae != null ? {
			thumbnailJpeg: null,
			thumbnailJpegHQ: null,
			thumbnailJpegDirectPath: null,
			thumbnailJpegHeight: null,
			thumbnailJpegWidth: null
		} : {
			thumbnailJpeg: X,
			thumbnailJpegHQ: Y,
			thumbnailJpegDirectPath: J,
			thumbnailJpegHeight: Z,
			thumbnailJpegWidth: ee
		};
		return s.jsx(r("WAWebMediaLinkPreview.react"), babelHelpers.extends({
			description: oe != null ? N : Q,
			displayType: t,
			isInvite: i,
			inviteGrpType: i === !0 ? F : null,
			onClick: te,
			isSentByMe: M,
			thumbnail: ae
		}, ie, {
			title: oe != null ? String(r("WAWebGetCallLinkPreviewTitle")(oe)) : $,
			star: w,
			kept: O,
			theme: _,
			matchedText: G != null ? G : N,
			botPluginReferenceIndex: l.botPluginType === o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType.SEARCH ? l.botPluginReferenceIndex : null,
			isLoading: !1,
			horizontalLayout: a
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = null;
		try {
			t = r("WAWebURLUtils").hostname(e), t = r("punycode").toUnicode(t);
		} catch (e) {}
		return t;
	}
	var g = c(_);
	l.getHostnameForUrl = f, l.LinkPreviewContainer = g;
}), 98);
