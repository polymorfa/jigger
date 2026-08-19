__d("WAWebTrackableMessageComponent.react", [
	"WAWebFrontendMsgGetters",
	"WAWebMessageAIContentLabel.react",
	"WAWebNewsletterGatingUtils",
	"WAWebViewMode.flow",
	"react",
	"useWAWebAssociatedMessages",
	"useWAWebMsgValues",
	"useWAWebNewsletterMessageVisibilityLogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.channelUserType, n = e.chat, a = e.component, i = e.msg, l = e.postId, u = o("useWAWebMsgValues").useMsgValues(i.id, [o("WAWebFrontendMsgGetters").getMediaData]), c = u[0], d = o("useWAWebAssociatedMessages").useHiddenAssociatedMessages(i, o("WAWebViewMode.flow").ViewModeSurface.CHAT), m = o("WAWebMessageAIContentLabel.react").useShouldShowAiContentLabel(i.safe(), d), p = r("useWAWebNewsletterMessageVisibilityLogger")({
			cid: n.id.user,
			isOriginalAuthor: i.id.fromMe,
			isStarredPost: i.star,
			isVpvImpression: !0,
			postId: l,
			mediaData: c,
			channelUserType: t,
			aiProvenanceLabelShown: m,
			aiProvenanceLabelEnabled: o("WAWebNewsletterGatingUtils").isChannelSGIUiLabelEnabled()
		}), _ = p[0], f = p[1];
		return s.jsx("div", {
			ref: _,
			children: a
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
