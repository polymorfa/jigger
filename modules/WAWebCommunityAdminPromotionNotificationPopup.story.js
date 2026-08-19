__d("WAWebCommunityAdminPromotionNotificationPopup.story", [
	"WAWebButton.react",
	"WAWebCommunityAdminPromotionNotificationFlowLoadable",
	"WAWebCommunityAdminPromotionNotificationPopup.react",
	"WAWebModalManager",
	"WAWebShowroomUtils",
	"WAWebText_DONOTUSE.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(3), n = e.communityMetadata, r;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (r = { className: "x1xmf6yo x1xegmmw x1e56ztr x13fj5qh" }, t[0] = r) : r = t[0];
		var a;
		return t[1] !== n ? (a = s.jsx("div", babelHelpers.extends({}, r, { children: s.jsx(o("WAWebButton.react").Button, {
			type: "primary",
			onClick: function() {
				return o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebCommunityAdminPromotionNotificationFlowLoadable").CommunityAdminPromotionNotificationFlowLoadable, { communityMetadata: n }));
			},
			children: "Show Community Admin Promotion Notification"
		}) })), t[1] = n, t[2] = a) : a = t[2], a;
	}
	var c = o("WAWebShowroomUtils").getCommunityCreatedByMe(), d = o("WAWebShowroomUtils").getCommunityCreatedByAnotherUser(), m = {
		storyName: "WAWebCommunityAdminPromotionNotificationPopup",
		component: r("WAWebCommunityAdminPromotionNotificationPopup.react"),
		description: "\n    CommunityAdminPromotionNotificationPopup is displayed when user opens community home or community announcement group\n    for the first time after they have been promoted to community admins.\n  ",
		examples: [{
			example: (d == null ? void 0 : d.groupMetadata) != null ? s.jsx(u, { communityMetadata: d.groupMetadata }) : s.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				weight: "medium",
				children: "Warning: community created by another user is not found"
			}),
			title: "CommunityAdminPromotionNotificationPopup",
			templateStyle: o("WAWebShowroomUtils").widePreview
		}, {
			example: (c == null ? void 0 : c.groupMetadata) != null ? s.jsx(u, { communityMetadata: c.groupMetadata }) : s.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				weight: "medium",
				children: "Warning: community created by you is not found"
			}),
			title: "CommunityAdminPromotionNotificationPopup for the community owner/creator",
			templateStyle: o("WAWebShowroomUtils").widePreview
		}]
	};
	l.default = m;
}), 98);
