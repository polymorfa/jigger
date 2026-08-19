__d("WAWebCommunityAdminPromotionNotificationPopup.story", [
	"WAWebButton.react",
	"WAWebCommunityAdminPromotionNotificationFlowLoadable",
	"WAWebCommunityAdminPromotionNotificationPopup.react",
	"WAWebModalManager",
	"WAWebShowroomUtils",
	"WAWebText_DONOTUSE.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.communityMetadata;
		return s.jsx("div", {
			className: "x1xmf6yo x1xegmmw x1e56ztr x13fj5qh",
			children: s.jsx(o("WAWebButton.react").Button, {
				type: "primary",
				onClick: function() {
					return o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebCommunityAdminPromotionNotificationFlowLoadable").CommunityAdminPromotionNotificationFlowLoadable, { communityMetadata: t }));
				},
				children: "Show Community Admin Promotion Notification"
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]";
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
