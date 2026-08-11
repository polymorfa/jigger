const WamCommunityHomeAction = 3494 // channel: regular

type CommunityHomeActionEvent struct {
	CommunityHomeGroupDiscoveries int64 `wam:"community_home_group_discoveries"` // field 1
	CommunityHomeGroupJoins int64 `wam:"community_home_group_joins"` // field 2
	CommunityHomeGroupNavigations int64 `wam:"community_home_group_navigations"` // field 3
	CommunityHomeId string `wam:"community_home_id"` // field 4
	CommunityHomeViews int64 `wam:"community_home_views"` // field 5
}