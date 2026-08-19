pub const WAM_VIEW_BUSINESS_PROFILE: u32 = 1522;

#[derive(Debug, Default)]
pub struct ViewBusinessProfileEvent {
    /// field 1, wire `view_business_profile_action`
    pub view_business_profile_action: Option<VIEWBUSINESSPROFILEACTION>,
    /// field 2, wire `website_source`
    pub website_source: Option<WEBSITESOURCETYPE>,
    /// field 3, wire `business_profile_jid`
    pub business_profile_jid: Option<String>,
    /// field 4, wire `scroll_depth`
    pub scroll_depth: Option<i64>,
    /// field 5, wire `linked_account`
    pub linked_account: Option<BUSINESSTOOLSLINKEDACCOUNTTYPE>,
    /// field 6, wire `catalog_session_id`
    pub catalog_session_id: Option<String>,
    /// field 7, wire `is_self_view`
    pub is_self_view: Option<bool>,
    /// field 8, wire `profile_entry_point`
    pub profile_entry_point: Option<PROFILEENTRYPOINT>,
    /// field 9, wire `biz_fb_size`
    pub biz_fb_size: Option<TRUSTSIGNALBUCKETS>,
    /// field 10, wire `biz_ig_size`
    pub biz_ig_size: Option<TRUSTSIGNALBUCKETS>,
    /// field 11, wire `is_profile_linked`
    pub is_profile_linked: Option<bool>,
    /// field 12, wire `has_cover_photo`
    pub has_cover_photo: Option<bool>,
}