__d("useWAWebNewsletterActionItems", [
	"fbt",
	"WAWebApiParse",
	"WAWebCommonNewsletterStrings",
	"WAWebDrawerManager",
	"WAWebFrontendMsgGetters",
	"WAWebKeyboardTabUtils",
	"WAWebMsgGetters",
	"WAWebNewsletterGatingUtils",
	"WAWebNoop",
	"WAWebQuestionsRenderingUtils",
	"WAWebSendStickerToActiveChatStickersAction",
	"WAWebStickerPackCollectionMd",
	"WAWebStickerPackUtils",
	"WAWebStickerStoreFlowLoadable",
	"react",
	"react-compiler-runtime",
	"useWAWebForwardedNewsletterMessageClickHandler",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isForwarded && o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) && o("WAWebNewsletterGatingUtils").isStickerPackForwardedAttributionEnabled();
		if (!t) return null;
		var n = function(n) {
			o("WAWebDrawerManager").DrawerManager.openDrawerRight(u.jsx(r("WAWebStickerStoreFlowLoadable").StickerStoreFlowLoadable, {
				stickerPackId: n,
				onSticker: r("WAWebSendStickerToActiveChatStickersAction"),
				msg: e.unsafe()
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, a = s._(
			/*BTDS*/
			""
		), i = e.body;
		if (i == null) return null;
		if (o("WAWebApiParse").isStickerPackURL(i)) {
			var l = function() {
				var e = o("WAWebStickerPackUtils").extractStickerPackIdFromUrl(i);
				e != null && o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.fetchStickerPack(e).then(function() {
					n(e);
				}).catch(r("WAWebNoop"));
			};
			return {
				label: a,
				title: a,
				onClick: l,
				disabled: !1,
				testid: "view-sticker-pack"
			};
		}
		return null;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(17), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = [
			o("WAWebMsgGetters").getUnreadQuestionResponsesCount,
			o("WAWebMsgGetters").getServerId,
			o("WAWebFrontendMsgGetters").getIsTransparentMsg,
			o("WAWebMsgGetters").getHasOriginatedFromNewsletter
		], t[0] = n) : n = t[0];
		var r = o("useWAWebMsgValues").useMsgValues(e.id, n), a = r[0], i = r[1], l = r[2], s = r[3], u = o("useWAWebForwardedNewsletterMessageClickHandler").useForwardedNewsletterMessageClickHandler(e, o("WAWebNewsletterGatingUtils").isNewsletterForwardBottomButtonEnabled);
		if (!s || l) {
			var d;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = [], t[1] = d) : d = t[1], d;
		}
		var m;
		if (t[2] !== u || t[3] !== e || t[4] !== i || t[5] !== a) {
			m = [];
			var p;
			t[7] !== e || t[8] !== a ? (p = o("WAWebQuestionsRenderingUtils").getQuestionAction(e, a), t[7] = e, t[8] = a, t[9] = p) : p = t[9];
			var _ = p;
			_ != null && m.push(_);
			var f;
			t[10] !== e ? (f = c(e), t[10] = e, t[11] = f) : f = t[11];
			var g = f;
			if (g != null && m.push(g), u != null) {
				var h, y = ((h = e.forwardedNewsletterMessageInfo) == null ? void 0 : h.newsletterId) === e.id.remote ? i : null, C;
				t[12] !== y ? (C = o("WAWebCommonNewsletterStrings").getNewsletterLinkActionLabel("view", y), t[12] = y, t[13] = C) : C = t[13];
				var b;
				t[14] !== u || t[15] !== C ? (b = {
					label: C,
					onClick: u,
					testid: "newsletter-invite-link-action"
				}, t[14] = u, t[15] = C, t[16] = b) : b = t[16], m.push(b);
			}
			t[2] = u, t[3] = e, t[4] = i, t[5] = a, t[6] = m;
		} else m = t[6];
		return m;
	}
	l.useWAWebNewsletterActionItems = d;
}), 226);
