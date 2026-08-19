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
		var t = e.animateOnView, n = e.displayAuthor, r = e.displayType, o = e.forwardRef, a = e.isGroupedSticker, i = a === void 0 ? !1 : a, l = e.mediaData, u = e.msg, c = e.onDetailsPaneClosed, d = e.position, m = e.quotedMsg, p = e.stickerLikeBubbleContainerRef;
		return l == null ? null : s.jsx(_, {
			animateOnView: t,
			displayAuthor: n,
			displayType: r,
			forwardRef: o,
			isGroupedSticker: i,
			mediaData: l,
			msg: u,
			onDetailsPaneClosed: c,
			position: d,
			quotedMsg: m,
			stickerLikeBubbleContainerRef: p
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.animateOnView, n = e.displayAuthor, a = e.displayType, i = e.forwardRef, l = e.isGroupedSticker, u = e.mediaData, p = e.msg, _ = e.onDetailsPaneClosed, g = e.position, h = e.quotedMsg, y = e.stickerLikeBubbleContainerRef, C = o("useWAWebMsgValues").useMsgValues(p.id, [o("WAWebMsgGetters").getIsNewMsg, o("WAWebMsgGetters").getIsSentByMe]), b = C[0], v = C[1], S = d(!1), R = S[0], L = S[1], E = o("useWAWebMsgDownloadMedia").useMsgDownloadMedia(p), k = r("useWAWebIntersection")({
			root: null,
			threshold: 0
		}), I = k[0], T = k[1].isIntersecting;
		o("useWAWebModelValues").useModelValues(u, ["mediaStage"]);
		var D = d(function() {
			return u.animatedAsNewMsg === !0;
		}), x = D[0], $ = D[1], P = c(function(e) {
			o("WAWebStateUtils").unproxy(u).set("animatedAsNewMsg", e), $(e);
		}, [u]);
		o("useWAWebMarkAnimatedAsNewMsg").useMarkAnimatedAsNewMsg(R, P);
		var N = c(function() {
			L(!1);
		}, []), M = u.stickerPremiumStatus === o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM;
		!R && T && b === !0 && !x && o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(u.filehash, u.mimetype, u.stickerPremiumStatus) && L(!0);
		var w = function(t) {
			if (o("WAWebStopEvent").stopPropagation(t), o("WAWebInMemoryLottieStickerCache").canShowSecondaryAnimation(u.filehash, u.mimetype, u.stickerPremiumStatus)) {
				L(!0);
				return;
			}
			o("WAWebCmd").Cmd.mediaViewerModal({
				msg: o("WAWebStateUtils").unproxy(p.unsafe()),
				getZoomNode: function() {
					var e;
					return i == null || (e = i.current) == null ? void 0 : e.getImgNode();
				}
			});
		}, A = M && v === r("WAWebL10N").isRTL(), F = s.jsxs("div", {
			ref: I,
			className: "x1n2onr6 x1plvlek xryxfnj x1vjgj0v x1rg5ohu x3ajldb",
			children: [s.jsx(r("WAWebMessageStickerMediaControl.react"), {
				mediaData: u,
				msg: p,
				children: s.jsx("span", babelHelpers.extends({}, {
					0: {},
					1: { className: "x1rg5ohu xpk2tj9" }
				}[!!A << 0], { children: s.jsx(r("WAWebSticker.react"), {
					ref: i,
					mediaData: u,
					theme: "conversation",
					isNewMsg: b,
					downloadMedia: E,
					animateOnView: t,
					onClick: w,
					onEnter: w,
					forcePlay: R
				}) }))
			}), R && s.jsx("div", babelHelpers.extends({}, {
				0: {},
				1: { className: "x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod xpk2tj9" }
			}[!!A << 0], { children: s.jsx(r("WAWebStickerOverlayAnimation.react"), {
				mediaData: u,
				onClose: N,
				sizePercent: 387
			}) }))]
		});
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebMessageStickerLikeBubbleContainer.react"), {
			displayAuthor: n,
			mediaData: u,
			msg: p,
			quotedMsg: h,
			position: g,
			displayType: a,
			onDetailsPaneClosed: _,
			msgContent: F,
			ref: y,
			displayCtwaContext: !0,
			isGroupedSticker: l,
			bubbleStyle: R ? m.overlayActive : void 0
		}), M && s.jsx(f, {
			isSentByMe: v === !0,
			msgId: p.id.toString()
		})] });
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.isSentByMe, n = e.msgId;
		return r("useWAWebWaPlusBenefitJourneyViewOnMount")({
			benefitType: o("WAWebWamEnumWpbujBenefitType").WPBUJ_BENEFIT_TYPE.STICKERS,
			surface: o("WAWebWamEnumWpbujSurface").WPBUJ_SURFACE.STICKER_RECEIVED,
			dedupeKey: "premium_sticker_view:" + n,
			customFields: { sticker_received_or_sent: t ? "sticker_sent" : "sticker_received" }
		}), null;
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = p;
}), 98);
