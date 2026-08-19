const WamCommunityFeatureUsage = 3696 // channel: regular

type CommunityFeatureUsageEvent struct {
	CommunityId string `wam:"community_id"` // field 2
	CommunityUiFeature COMMUNITYUIFEATURETYPE `wam:"community_ui_feature"` // field 3
	CommunityUiAction COMMUNITYFEATUREUIACTIONTAKENTYPE `wam:"community_ui_action"` // field 4
}