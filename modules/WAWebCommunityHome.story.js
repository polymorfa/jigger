__d("WAWebCommunityHome.story", [
	"WAWebCommunityHomeWrapper.react",
	"WAWebWidFactory",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = function() {}, c = {
		onBack: u,
		onManageCommunityGroupsClick: u,
		onInviteMembersClick: u,
		onDeactivateCommunity: u,
		onAddNewGroupClick: u,
		onCommunitySettingsClick: u,
		onViewGroupsClick: u,
		onMediaGalleryClick: u,
		onStarredMessagesClick: u,
		onKeptMessagesClick: u,
		onTabSwitch: u,
		onPendingGroupsClick: u,
		onEphemeralClick: u,
		onAllEventsClick: u,
		onWallpaperClick: u,
		onEventInfoClick: u,
		onTransferOwnership: u,
		onLimitSharingClick: u
	}, d = {
		storyName: "WAWebCommunityHome",
		component: o("WAWebCommunityHomeWrapper.react").CommunityHomeWrapper,
		description: "A drawer showing all the info of a community",
		examples: [{
			example: function() {
				return s.jsx(o("WAWebCommunityHomeWrapper.react").CommunityHomeWrapper, {
					jid: o("WAWebWidFactory").createWid("15555555555-1234567890@g.us"),
					callbacks: c
				});
			},
			title: "Community Home",
			description: "\n                Default look for community home.\n            "
		}]
	};
	l.default = d;
}), 98);
