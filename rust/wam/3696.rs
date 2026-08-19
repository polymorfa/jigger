pub const WAM_COMMUNITY_FEATURE_USAGE: u32 = 3696;

#[derive(Debug, Default)]
pub struct CommunityFeatureUsageEvent {
    /// field 2, wire `community_id`
    pub community_id: Option<String>,
    /// field 3, wire `community_ui_feature`
    pub community_ui_feature: Option<COMMUNITYUIFEATURETYPE>,
    /// field 4, wire `community_ui_action`
    pub community_ui_action: Option<COMMUNITYFEATUREUIACTIONTAKENTYPE>,
}