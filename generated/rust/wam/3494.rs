pub const WAM_COMMUNITY_HOME_ACTION: u32 = 3494;

#[derive(Debug, Default)]
pub struct CommunityHomeActionEvent {
    /// field 1, wire `community_home_group_discoveries`
    pub community_home_group_discoveries: Option<i64>,
    /// field 2, wire `community_home_group_joins`
    pub community_home_group_joins: Option<i64>,
    /// field 3, wire `community_home_group_navigations`
    pub community_home_group_navigations: Option<i64>,
    /// field 4, wire `community_home_id`
    pub community_home_id: Option<String>,
    /// field 5, wire `community_home_views`
    pub community_home_views: Option<i64>,
}