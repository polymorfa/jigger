__d("WAWebTrackableMessageComponent.react", [
	"WAWebFrontendMsgGetters",
	"WAWebMessageAIContentLabel.react",
	"WAWebNewsletterGatingUtils",
	"WAWebViewMode.flow",
	"react",
	"react-compiler-runtime",
	"useWAWebAssociatedMessages",
	"useWAWebMsgValues",
	"useWAWebNewsletterMessageVisibilityLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(15), n = e.channelUserType, a = e.chat, i = e.component, l = e.msg, u = e.postId, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = [o("WAWebFrontendMsgGetters").getMediaData], t[0] = c) : c = t[0];
		var d = o("useWAWebMsgValues").useMsgValues(l.id, c), m = d[0], p = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(l, o("WAWebViewMode.flow").ViewModeSurface.CHAT), _;
		t[1] !== l ? (_ = l.safe(), t[1] = l, t[2] = _) : _ = t[2];
		var f = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(_, p), g = a.id.user, h = l.id.fromMe, y = l.star, C;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (C = o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled(), t[3] = C) : C = t[3];
		var b;
		t[4] !== f || t[5] !== n || t[6] !== a.id.user || t[7] !== m || t[8] !== l.id.fromMe || t[9] !== l.star || t[10] !== u ? (b = {
			cid: g,
			isOriginalAuthor: h,
			isStarredPost: y,
			isVpvImpression: !0,
			postId: u,
			mediaData: m,
			channelUserType: n,
			aiProvenanceLabelShown: f,
			aiProvenanceLabelEnabled: C
		}, t[4] = f, t[5] = n, t[6] = a.id.user, t[7] = m, t[8] = l.id.fromMe, t[9] = l.star, t[10] = u, t[11] = b) : b = t[11];
		var v = r("useWAWebNewsletterMessageVisibilityLogger")(b), S = v[0], R;
		return t[12] !== i || t[13] !== S ? (R = s.jsx("div", {
			ref: S,
			children: i
		}), t[12] = i, t[13] = S, t[14] = R) : R = t[14], R;
	}
	l.default = u;
}), 98);
