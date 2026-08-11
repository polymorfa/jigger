pub const WAM_COMMUNITY_TAB_ACTION: u32 = 3496;

#[derive(Debug, Default)]
pub struct CommunityTabActionEvent {
    /// field 1, wire `community_tab_group_navigations`
    pub community_tab_group_navigations: Option<i64>,
    /// field 2, wire `community_tab_to_home_views`
    pub community_tab_to_home_views: Option<i64>,
    /// field 3, wire `community_tab_views`
    pub community_tab_views: Option<i64>,
    /// field 4, wire `community_no_action_tab_views`
    pub community_no_action_tab_views: Option<i64>,
    /// field 5, wire `community_tab_views_via_context_menu`
    pub community_tab_views_via_context_menu: Option<i64>,
}