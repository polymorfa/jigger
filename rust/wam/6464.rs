pub const WAM_THREAD_INTERACTION_DATA_BIZ: u32 = 6464;

#[derive(Debug, Default)]
pub struct ThreadInteractionDataBizEvent {
    /// field 1, wire `away_msgs_sent`
    pub away_msgs_sent: Option<i64>,
    /// field 2, wire `biz_catalog_type`
    pub biz_catalog_type: Option<BIZCATALOGTYPE>,
    /// field 3, wire `biz_conversation_depth`
    pub biz_conversation_depth: Option<i64>,
    /// field 4, wire `cart_views`
    pub cart_views: Option<i64>,
    /// field 5, wire `chat_origins`
    pub chat_origins: Option<CHATORIGINSTYPE>,
    /// field 6, wire `collection_inquiries_sent`
    pub collection_inquiries_sent: Option<i64>,
    /// field 7, wire `commerce_msgs_received`
    pub commerce_msgs_received: Option<i64>,
    /// field 8, wire `commerce_msgs_sent`
    pub commerce_msgs_sent: Option<i64>,
    /// field 9, wire `entry_point_conversion_app`
    pub entry_point_conversion_app: Option<String>,
    /// field 10, wire `entry_point_conversion_source`
    pub entry_point_conversion_source: Option<String>,
    /// field 11, wire `first_response_time`
    pub first_response_time: Option<i64>,
    /// field 13, wire `group_contains_biz`
    pub group_contains_biz: Option<bool>,
    /// field 14, wire `is_commerce_viewed`
    pub is_commerce_viewed: Option<bool>,
    /// field 15, wire `is_cta_on_pdp_clicked`
    pub is_cta_on_pdp_clicked: Option<bool>,
    /// field 16, wire `is_labelled`
    pub is_labelled: Option<bool>,
    /// field 17, wire `is_user1p_biz_bot_chat`
    pub is_user1p_biz_bot_chat: Option<bool>,
    /// field 18, wire `is_user3p_bot_chat`
    pub is_user3p_bot_chat: Option<bool>,
    /// field 19, wire `is_user_agent`
    pub is_user_agent: Option<bool>,
    /// field 20, wire `is_user_created_agent`
    pub is_user_created_agent: Option<bool>,
    /// field 21, wire `labelled_msgs`
    pub labelled_msgs: Option<i64>,
    /// field 22, wire `opposite_party_has_business_intent`
    pub opposite_party_has_business_intent: Option<bool>,
    /// field 23, wire `orders_sent`
    pub orders_sent: Option<i64>,
    /// field 24, wire `pdp_inquiries_sent`
    pub pdp_inquiries_sent: Option<i64>,
    /// field 25, wire `pdp_views`
    pub pdp_views: Option<i64>,
    /// field 26, wire `quick_replies_sent`
    pub quick_replies_sent: Option<i64>,
    /// field 27, wire `smb_marketing_messages_reactions_sent`
    pub smb_marketing_messages_reactions_sent: Option<i64>,
    /// field 28, wire `smb_marketing_messages_replies_sent`
    pub smb_marketing_messages_replies_sent: Option<i64>,
    /// field 29, wire `smb_marketing_messages_spam_reports`
    pub smb_marketing_messages_spam_reports: Option<i64>,
    /// field 30, wire `smb_marketing_msgs_received`
    pub smb_marketing_msgs_received: Option<i64>,
    /// field 31, wire `smb_marketing_msgs_sent`
    pub smb_marketing_msgs_sent: Option<i64>,
    /// field 32, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 33, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 35, wire `user_has_business_intent`
    pub user_has_business_intent: Option<bool>,
    /// field 36, wire `is_opposite_party_initiated`
    pub is_opposite_party_initiated: Option<bool>,
    /// field 37, wire `locations_sent`
    pub locations_sent: Option<i64>,
    /// field 38, wire `thread_id_by_lid`
    pub thread_id_by_lid: Option<String>,
    /// field 39, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
    /// field 40, wire `opposite_party_has_badge`
    pub opposite_party_has_badge: Option<bool>,
    /// field 41, wire `fmx_not_mv_bottom_sheet_dismissed_count`
    pub fmx_not_mv_bottom_sheet_dismissed_count: Option<i64>,
    /// field 42, wire `fmx_not_mv_bottom_sheet_get_mv_button_clicks`
    pub fmx_not_mv_bottom_sheet_get_mv_button_clicks: Option<i64>,
    /// field 43, wire `fmx_not_mv_bottom_sheet_get_mv_button_impressions`
    pub fmx_not_mv_bottom_sheet_get_mv_button_impressions: Option<i64>,
    /// field 44, wire `fmx_not_mv_bottom_sheet_impressions`
    pub fmx_not_mv_bottom_sheet_impressions: Option<i64>,
    /// field 45, wire `fmx_not_mv_bottom_sheet_learn_more_button_clicks`
    pub fmx_not_mv_bottom_sheet_learn_more_button_clicks: Option<i64>,
    /// field 46, wire `fmx_not_mv_clicks`
    pub fmx_not_mv_clicks: Option<i64>,
    /// field 47, wire `is_biz_mv_friction_eligible`
    pub is_biz_mv_friction_eligible: Option<bool>,
    /// field 48, wire `not_mv_impressions`
    pub not_mv_impressions: Option<i64>,
    /// field 49, wire `matched_messages_marked_as_read_with_delta_time`
    pub matched_messages_marked_as_read_with_delta_time: Option<String>,
    /// field 50, wire `matched_messages_read_with_delta_time`
    pub matched_messages_read_with_delta_time: Option<String>,
    /// field 51, wire `auto_reply_from_icebreaker_sent`
    pub auto_reply_from_icebreaker_sent: Option<i64>,
    /// field 52, wire `biz_ai_suggested_replies_seen`
    pub biz_ai_suggested_replies_seen: Option<i64>,
    /// field 53, wire `biz_ai_suggested_replies_sent_with_edits`
    pub biz_ai_suggested_replies_sent_with_edits: Option<i64>,
    /// field 54, wire `biz_ai_suggested_replies_sent_without_edits`
    pub biz_ai_suggested_replies_sent_without_edits: Option<i64>,
}