__d("WAWebMessageStickerBubble.react", [
	"WAWebCmd",
	"WAWebInMemoryLottieStickerCache",
	"WAWebL10N",
	"WAWebMessageStickerLikeBubbleContainer.react",
	"WAWebMessageStickerMediaControl.react",
	"WAWebMsgGetters",
	"WAWebStateUtils",
	"WAWebSticker.react",
	"WAWebStickerOverlayAnimation.react",
	"WAWebStickerPremiumStatus",
	"WAWebStopEvent",
	"WAWebWamEnumWpbujBenefitType",
	"WAWebWamEnumWpbujSurface",
	"react",
	"react-compiler-runtime",
	"useWAWebIntersection",
	"useWAWebMarkAnimatedAsNewMsg",
	"useWAWebModelValues",
	"useWAWebMsgDownloadMedia",
	"useWAWebMsgValues",
	"useWAWebWaPlusBenefitJourneyViewOnMount"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useState, m = { overlayActive: {
		zIndex: "xfo81ep",
		pointerEvents: "x47corl",
		$$css: !0
	} };
	function p(e) {
		var t = o("react-compiler-runtime").c(12), n = e.animateOnView, r = e.displayAuthor, a = e.displayType, i = e.forwardRef, l = e.isGroupedSticker, u = e.mediaData, c = e.msg, d = e.onDetailsPaneClosed, m = e.position, p = e.quotedMsg, f = e.stickerLikeBubbleContainerRef, g = l === void 0 ? !1 : l;
		if (u == null) return null;
		var h;
		return t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== g || t[5] !== u || t[6] !== c || t[7] !== d || t[8] !== m || t[9] !== p || t[10] !== f ? (h = s.jsx(_, {
			animateOnView: n,
			displayAuthor: r,
			displayType: a,
			forwardRef: i,
			isGroupedSticker: g,
			mediaData: u,
			msg: c,
			onDetailsPaneClosed: d,
			position: m,
			quotedMsg: p,
			stickerLikeBubbleContainerRef: f
		}), t[0] = n, t[1] = r, t[2] = a, t[3] = i, t[4] = g, t[5] = u, t[6] = c, t[7] = d, t[8] = m, t[9] = p, t[10] = f, t[11] = h) : h = t[11], h;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(62), n = e.animateOnView, a = e.displayAuthor, i = e.displayType, l = e.forwardRef, u = e.isGroupedSticker, c = e.mediaData, p = e.msg, _ = e.onDetailsPaneClosed, g = e.position, h = e.quotedMsg, y = e.stickerLikeBubbleContainerRef, C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = [o("WAWebMsgGetters").getIsNewMsg, o("WAWebMsgGetters").getIsSentByMe], t[0] = C) : C = t[0];
		var b = o("useWAWebMsgValues").useMsgValues(p.id, C), v = b[0], S = b[1], R = d(!1), L = R[0], E = R[1], k = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(p), I;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = {
			root: null,
			threshold: 0
		}, t[1] = I) : I = t[1];
		var T = r("useWAWebIntersection")(I), D = T[0], x = T[1], $ = x.isIntersecting, P;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (P = ["mediaStage"], t[2] = P) : P = t[2], o("useWAWebModelValues").useModelValues(c, P);
		var N;
		t[3] !== c.animatedAsNewMsg ? (N = function() {
			return c.animatedAsNewMsg === !0;
		}, t[3] = c.animatedAsNewMsg, t[4] = N) : N = t[4];
		var M = d(N), w = M[0], A = M[1], F;
		t[5] !== c ? (F = function(t) {
			o("WAWebStateUtils").unproxy(c).set("animatedAsNewMsg", t), A(t);
		}, t[5] = c, t[6] = F) : F = t[6];
		var O = F;
		o("useWAWebMarkAnimatedAsNewMsg").useMarkAnimatedAsNewMsg(L, O);
		var B;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			E(!1);
		}, t[7] = B) : B = t[7];
		var W = B, q = c.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
		!L && $ && v === !0 && !w && o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(c.filehash, c.mimetype, c.stickerPremiumStatus) && E(!0);
		var U;
		t[8] !== l || t[9] !== c.filehash || t[10] !== c.mimetype || t[11] !== c.stickerPremiumStatus || t[12] !== p ? (U = function(t) {
			if (o("WAWebStopEvent").stopPropagation(t), o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(c.filehash, c.mimetype, c.stickerPremiumStatus)) {
				E(!0);
				return;
			}
			o("WAWebCmd").Cmd.mediaViewerModal({
				msg: o("WAWebStateUtils").unproxy(p.unsafe()),
				getZoomNode: function() {
					var e;
					return l == null || (e = l.current) == null ? void 0 : e.getImgNode();
				}
			});
		}, t[8] = l, t[9] = c.filehash, t[10] = c.mimetype, t[11] = c.stickerPremiumStatus, t[12] = p, t[13] = U) : U = t[13];
		var V = U, H;
		t[14] !== q || t[15] !== S ? (H = q && S === r("WAWebL10N").isRTL(), t[14] = q, t[15] = S, t[16] = H) : H = t[16];
		var G = H, z;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (z = { className: "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb" }, t[17] = z) : z = t[17];
		var j;
		t[18] !== G ? (j = {
			0: {},
			1: { className: "x1rg5ohu xpk2tj9" }
		}[!!G << 0], t[18] = G, t[19] = j) : j = t[19];
		var K;
		t[20] !== n || t[21] !== k || t[22] !== l || t[23] !== v || t[24] !== V || t[25] !== c || t[26] !== L ? (K = s.jsx(r("WAWebSticker.react"), {
			ref: l,
			mediaData: c,
			theme: "conversation",
			isNewMsg: v,
			downloadMedia: k,
			animateOnView: n,
			onClick: V,
			onEnter: V,
			forcePlay: L
		}), t[20] = n, t[21] = k, t[22] = l, t[23] = v, t[24] = V, t[25] = c, t[26] = L, t[27] = K) : K = t[27];
		var Q;
		t[28] !== j || t[29] !== K ? (Q = s.jsx("span", babelHelpers.extends({}, j, { children: K })), t[28] = j, t[29] = K, t[30] = Q) : Q = t[30];
		var X;
		t[31] !== c || t[32] !== p || t[33] !== Q ? (X = s.jsx(r("WAWebMessageStickerMediaControl.react"), {
			mediaData: c,
			msg: p,
			children: Q
		}), t[31] = c, t[32] = p, t[33] = Q, t[34] = X) : X = t[34];
		var Y;
		t[35] !== c || t[36] !== G || t[37] !== L ? (Y = L && s.jsx("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xpk2tj9" }
		}[!!G << 0], { children: s.jsx(r("WAWebStickerOverlayAnimation.react"), {
			mediaData: c,
			onClose: W,
			sizePercent: 387
		}) })), t[35] = c, t[36] = G, t[37] = L, t[38] = Y) : Y = t[38];
		var J;
		t[39] !== D || t[40] !== X || t[41] !== Y ? (J = s.jsxs("div", babelHelpers.extends({ ref: D }, z, { children: [X, Y] })), t[39] = D, t[40] = X, t[41] = Y, t[42] = J) : J = t[42];
		var Z = J, ee = L ? m.overlayActive : void 0, te;
		t[43] !== a || t[44] !== i || t[45] !== u || t[46] !== c || t[47] !== p || t[48] !== Z || t[49] !== _ || t[50] !== g || t[51] !== h || t[52] !== y || t[53] !== ee ? (te = s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
			displayAuthor: a,
			mediaData: c,
			msg: p,
			quotedMsg: h,
			position: g,
			displayType: i,
			onDetailsPaneClosed: _,
			msgContent: Z,
			ref: y,
			displayCtwaContext: !0,
			isGroupedSticker: u,
			bubbleStyle: ee
		}), t[43] = a, t[44] = i, t[45] = u, t[46] = c, t[47] = p, t[48] = Z, t[49] = _, t[50] = g, t[51] = h, t[52] = y, t[53] = ee, t[54] = te) : te = t[54];
		var ne;
		t[55] !== q || t[56] !== S || t[57] !== p.id ? (ne = q && s.jsx(f, {
			isSentByMe: S === !0,
			msgId: p.id.toString()
		}), t[55] = q, t[56] = S, t[57] = p.id, t[58] = ne) : ne = t[58];
		var re;
		return t[59] !== te || t[60] !== ne ? (re = s.jsxs(s.Fragment, { children: [te, ne] }), t[59] = te, t[60] = ne, t[61] = re) : re = t[61], re;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(5), n = e.isSentByMe, a = e.msgId, i = "premium_sticker_view:" + a, l = n ? "sticker_sent" : "sticker_received", s;
		t[0] !== l ? (s = { sticker_received_or_sent: l }, t[0] = l, t[1] = s) : s = t[1];
		var u;
		return t[2] !== i || t[3] !== s ? (u = {
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_RECEIVED,
			dedupeKey: i,
			customFields: s
		}, t[2] = i, t[3] = s, t[4] = u) : u = t[4], r("useWAWebWaPlusBenefitJourneyViewOnMount")(u), null;
	}
	l.default = p;
}), 98);
