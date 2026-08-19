pub const WAM_LWI_SCREEN: u32 = 2772;

#[derive(Debug, Default)]
pub struct LwiScreenEvent {
    /// field 1, wire `lwi_flow_id`
    pub lwi_flow_id: Option<String>,
    /// field 2, wire `lwi_event_sequence_number`
    pub lwi_event_sequence_number: Option<i64>,
    /// field 3, wire `product_id`
    pub product_id: Option<String>,
    /// field 4, wire `lwi_screen_reference`
    pub lwi_screen_reference: Option<LWISCREENREFERENCE>,
    /// field 5, wire `lwi_screen_action`
    pub lwi_screen_action: Option<LWISCREENACTION>,
    /// field 6, wire `lwi_alert_reason`
    pub lwi_alert_reason: Option<LWIALERTREASON>,
    /// field 7, wire `user_has_linked_fb_page`
    pub user_has_linked_fb_page: Option<bool>,
    /// field 8, wire `selected_products_ids_list`
    pub selected_products_ids_list: Option<String>,
    /// field 9, wire `default_ads_content_selected`
    pub default_ads_content_selected: Option<LWIADSCONTENTTYPE>,
    /// field 10, wire `user_has_catalog_items_to_promote`
    pub user_has_catalog_items_to_promote: Option<bool>,
    /// field 11, wire `user_has_status_to_promote`
    pub user_has_status_to_promote: Option<bool>,
    /// field 12, wire `create_ad_enabled`
    pub create_ad_enabled: Option<bool>,
    /// field 13, wire `payment_method_set`
    pub payment_method_set: Option<bool>,
    /// field 14, wire `user_provided_fb_consent`
    pub user_provided_fb_consent: Option<bool>,
    /// field 15, wire `lwi_budget_in_local`
    pub lwi_budget_in_local: Option<i64>,
    /// field 16, wire `lwi_currency`
    pub lwi_currency: Option<String>,
    /// field 17, wire `lwi_default_budget_in_local`
    pub lwi_default_budget_in_local: Option<i64>,
    /// field 18, wire `lwi_default_duration_in_days`
    pub lwi_default_duration_in_days: Option<i64>,
    /// field 19, wire `lwi_default_targeting_spec`
    pub lwi_default_targeting_spec: Option<LWIDEFAULTTARGETINGSPEC>,
    /// field 20, wire `lwi_duration_in_days`
    pub lwi_duration_in_days: Option<i64>,
    /// field 21, wire `lwi_targeting_spec`
    pub lwi_targeting_spec: Option<String>,
    /// field 22, wire `lwi_ads_identity_type`
    pub lwi_ads_identity_type: Option<LWIADSIDENTITYTYPE>,
    /// field 23, wire `user_went_through_fb_web_login`
    pub user_went_through_fb_web_login: Option<bool>,
    /// field 24, wire `lwi_ctwa_ad_cta_type`
    pub lwi_ctwa_ad_cta_type: Option<LWICTWAADCTATYPE>,
    /// field 25, wire `lwi_ctwa_ad_status_type`
    pub lwi_ctwa_ad_status_type: Option<LWICTWAADSTATUSTYPE>,
    /// field 26, wire `lwi_total_ctwa_ads`
    pub lwi_total_ctwa_ads: Option<i64>,
    /// field 27, wire `lwi_is_fb_app_installed`
    pub lwi_is_fb_app_installed: Option<bool>,
    /// field 28, wire `lwi_viewer_has_edit_permission`
    pub lwi_viewer_has_edit_permission: Option<bool>,
    /// field 30, wire `lwi_extras`
    pub lwi_extras: Option<String>,
    /// field 31, wire `used_saved_audience`
    pub used_saved_audience: Option<bool>,
    /// field 32, wire `lwi_viewer_has_promote_permission`
    pub lwi_viewer_has_promote_permission: Option<bool>,
    /// field 33, wire `alert_count`
    pub alert_count: Option<i64>,
    /// field 34, wire `user_has_seen_recommended_budget`
    pub user_has_seen_recommended_budget: Option<bool>,
    /// field 35, wire `user_has_advanced_audience`
    pub user_has_advanced_audience: Option<bool>,
    /// field 36, wire `billing_status`
    pub billing_status: Option<BILLINGSTATUS>,
    /// field 37, wire `validation_status`
    pub validation_status: Option<VALIDATIONSTATUS>,
    /// field 38, wire `onboarding_entry_point`
    pub onboarding_entry_point: Option<ONBOARDINGENTRYPOINT>,
    /// field 39, wire `item_count`
    pub item_count: Option<i64>,
    /// field 40, wire `ad_media_type_selected`
    pub ad_media_type_selected: Option<LWIADMEDIATYPE>,
    /// field 41, wire `ad_content_recommendation`
    pub ad_content_recommendation: Option<ADCONTENTRECOMMENDATIONTYPE>,
    /// field 42, wire `ads_content_selected`
    pub ads_content_selected: Option<LWIADSCONTENTTYPE>,
    /// field 43, wire `user_has_bp_credentials`
    pub user_has_bp_credentials: Option<bool>,
    /// field 44, wire `wa_ad_account_id`
    pub wa_ad_account_id: Option<String>,
    /// field 45, wire `audience_type`
    pub audience_type: Option<AUDIENCETYPE>,
    /// field 46, wire `lwi_ad_campaign_id`
    pub lwi_ad_campaign_id: Option<String>,
    /// field 49, wire `media_edited`
    pub media_edited: Option<bool>,
    /// field 50, wire `total_media_count`
    pub total_media_count: Option<i64>,
    /// field 51, wire `lwi_is_ig_app_installed`
    pub lwi_is_ig_app_installed: Option<bool>,
    /// field 52, wire `lwi_max_duration_in_days`
    pub lwi_max_duration_in_days: Option<i64>,
    /// field 53, wire `lwi_min_duration_in_days`
    pub lwi_min_duration_in_days: Option<i64>,
    /// field 54, wire `lwi_budget_options_in_local`
    pub lwi_budget_options_in_local: Option<String>,
    /// field 55, wire `lwi_location_types_set_on_audience_selection`
    pub lwi_location_types_set_on_audience_selection: Option<String>,
    /// field 56, wire `user_has_changed_default_city_level_audience`
    pub user_has_changed_default_city_level_audience: Option<bool>,
    /// field 57, wire `default_audience_location_type`
    pub default_audience_location_type: Option<DEFAULTAUDIENCELOCATIONTYPE>,
    /// field 58, wire `ctwa_ad_account_type`
    pub ctwa_ad_account_type: Option<CTWAADACCOUNTTYPE>,
    /// field 59, wire `ctwa_login_type`
    pub ctwa_login_type: Option<CTWALOGINTYPE>,
    /// field 60, wire `user_has_multisource_media`
    pub user_has_multisource_media: Option<bool>,
    /// field 61, wire `ad_media_template_name`
    pub ad_media_template_name: Option<String>,
    /// field 63, wire `lwi_ad_creation_account_consent_flow`
    pub lwi_ad_creation_account_consent_flow: Option<LWIADCREATIONACCOUNTCONSENTFLOW>,
    /// field 64, wire `smbi_ad_creation_access_token_source`
    pub smbi_ad_creation_access_token_source: Option<SMBIADCREATIONACCESSTOKENSOURCE>,
    /// field 65, wire `user_has_fb_media_to_promote`
    pub user_has_fb_media_to_promote: Option<bool>,
    /// field 66, wire `media_source`
    pub media_source: Option<MEDIASOURCE>,
    /// field 67, wire `user_has_media_carousel`
    pub user_has_media_carousel: Option<bool>,
}