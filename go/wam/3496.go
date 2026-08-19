const WamCommunityTabAction = 3496 // channel: regular

type CommunityTabActionEvent struct {
	CommunityTabGroupNavigations int64 `wam:"community_tab_group_navigations"` // field 1
	CommunityTabToHomeViews int64 `wam:"community_tab_to_home_views"` // field 2
	CommunityTabViews int64 `wam:"community_tab_views"` // field 3
	CommunityNoActionTabViews int64 `wam:"community_no_action_tab_views"` // field 4
	CommunityTabViewsViaContextMenu int64 `wam:"community_tab_views_via_context_menu"` // field 5
}