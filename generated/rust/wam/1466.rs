pub const WAM_EDIT_BUSINESS_PROFILE: u32 = 1466;

#[derive(Debug, Default)]
pub struct EditBusinessProfileEvent {
    /// field 1, wire `edit_profile_action`
    pub edit_profile_action: Option<EDITPROFILEACTION>,
    /// field 2, wire `edit_business_profile_session_id`
    pub edit_business_profile_session_id: Option<String>,
    /// field 3, wire `has_description`
    pub has_description: Option<bool>,
    /// field 4, wire `has_category`
    pub has_category: Option<bool>,
    /// field 5, wire `has_address`
    pub has_address: Option<bool>,
    /// field 6, wire `has_hours`
    pub has_hours: Option<bool>,
    /// field 7, wire `has_email`
    pub has_email: Option<bool>,
    /// field 8, wire `has_website`
    pub has_website: Option<bool>,
    /// field 9, wire `edit_profile_action_field`
    pub edit_profile_action_field: Option<BUSINESSPROFILEFIELD>,
    /// field 10, wire `business_profile_entry_point`
    pub business_profile_entry_point: Option<BUSINESSPROFILEENTRYPOINT>,
    /// field 11, wire `has_payment_info`
    pub has_payment_info: Option<bool>,
    /// field 12, wire `has_connected_fb_media`
    pub has_connected_fb_media: Option<bool>,
    /// field 13, wire `has_connected_ig_media`
    pub has_connected_ig_media: Option<bool>,
}