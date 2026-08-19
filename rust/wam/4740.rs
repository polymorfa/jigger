pub const WAM_PAID_MESSAGING_USER_INTERACTIONS_LOGGER: u32 = 4740;

#[derive(Debug, Default)]
pub struct PaidMessagingUserInteractionsLoggerEvent {
    /// field 1, wire `pmx_action_target`
    pub pmx_action_target: Option<PAIDMESSAGINGUSERINTERACTIONSACTIONTARGET>,
    /// field 2, wire `pmx_action_type`
    pub pmx_action_type: Option<PAIDMESSAGINGUSERINTERACTIONSACTIONTYPE>,
    /// field 3, wire `pmx_component_type`
    pub pmx_component_type: Option<PAIDMESSAGINGUSERINTERACTIONSCOMPONENTTYPE>,
    /// field 4, wire `pmx_header_media_type`
    pub pmx_header_media_type: Option<PAIDMESSAGINGUSERINTERACTIONSHEADERMEDIATYPE>,
    /// field 5, wire `pmx_marketing_format`
    pub pmx_marketing_format: Option<PAIDMESSAGINGUSERINTERACTIONSMARKETINGFORMAT>,
    /// field 6, wire `pmx_query_params`
    pub pmx_query_params: Option<String>,
    /// field 7, wire `template_id`
    pub template_id: Option<String>,
    /// field 8, wire `pmx_host_storage`
    pub pmx_host_storage: Option<PAIDMESSAGINGUSERINTERACTIONSHOSTSTORAGE>,
    /// field 9, wire `pmx_sender_country_code`
    pub pmx_sender_country_code: Option<String>,
    /// field 10, wire `pmx_message_delivered_ts`
    pub pmx_message_delivered_ts: Option<i64>,
    /// field 11, wire `pmx_hashed_message_key`
    pub pmx_hashed_message_key: Option<i64>,
    /// field 12, wire `pmx_message_stanza_accepted_ts`
    pub pmx_message_stanza_accepted_ts: Option<i64>,
    /// field 13, wire `pmx_hashed_message_id`
    pub pmx_hashed_message_id: Option<String>,
    /// field 14, wire `pmx_carousel_card_index`
    pub pmx_carousel_card_index: Option<i64>,
    /// field 15, wire `pmx_tap_target_type`
    pub pmx_tap_target_type: Option<TAPTARGETTYPE>,
    /// field 16, wire `pmx_text_truncation_limit`
    pub pmx_text_truncation_limit: Option<i64>,
    /// field 17, wire `message_bubble_height_px`
    pub message_bubble_height_px: Option<i64>,
    /// field 18, wire `message_bubble_width_px`
    pub message_bubble_width_px: Option<i64>,
    /// field 19, wire `message_expand_state`
    pub message_expand_state: Option<PAIDMESSAGINGUSERINTERACTIONSMESSAGEEXPANDSTATE>,
}