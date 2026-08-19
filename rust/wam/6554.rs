pub const WAM_MM_SIGNAL_SHARING_VERIFICATION_EVENT: u32 = 6554;

#[derive(Debug, Default)]
pub struct MmSignalSharingVerificationEventEvent {
    /// field 1, wire `business_lid_or_jid`
    pub business_lid_or_jid: Option<String>,
    /// field 3, wire `collection_window_id`
    pub collection_window_id: Option<String>,
    /// field 4, wire `is_user_disclosed`
    pub is_user_disclosed: Option<bool>,
    /// field 5, wire `one_pd_signal_not_shared_reason`
    pub one_pd_signal_not_shared_reason: Option<ONEPDSIGNALNOTSHAREDREASON>,
    /// field 6, wire `signal_canceled_reason`
    pub signal_canceled_reason: Option<SIGNALCANCELEDREASON>,
    /// field 7, wire `signal_message_state`
    pub signal_message_state: Option<SIGNALMESSAGESTATE>,
    /// field 8, wire `signal_message_type`
    pub signal_message_type: Option<SIGNALMESSAGETYPE>,
    /// field 9, wire `signal_origin`
    pub signal_origin: Option<SIGNALORIGIN>,
    /// field 10, wire `signal_sharing_status`
    pub signal_sharing_status: Option<SIGNALSHARINGSTATUS>,
    /// field 11, wire `signal_surface`
    pub signal_surface: Option<SIGNALSURFACE>,
    /// field 12, wire `signal_type`
    pub signal_type: Option<SIGNALTYPE>,
    /// field 13, wire `sp_signal_not_shared_reason`
    pub sp_signal_not_shared_reason: Option<SPSIGNALNOTSHAREDREASON>,
    /// field 14, wire `template_id`
    pub template_id: Option<String>,
    /// field 16, wire `is_companion_device`
    pub is_companion_device: Option<bool>,
    /// field 17, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 18, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 20, wire `is_network_available`
    pub is_network_available: Option<bool>,
    /// field 21, wire `is_shimming_signal`
    pub is_shimming_signal: Option<bool>,
    /// field 22, wire `is_iab_restore`
    pub is_iab_restore: Option<bool>,
    /// field 23, wire `signal_type_origin`
    pub signal_type_origin: Option<String>,
    /// field 24, wire `is_latest_conversion_token`
    pub is_latest_conversion_token: Option<bool>,
    /// field 25, wire `mm_conversation_depth`
    pub mm_conversation_depth: Option<i64>,
    /// field 26, wire `mm_conversation_repeat`
    pub mm_conversation_repeat: Option<i64>,
    /// field 27, wire `mm_direction_from`
    pub mm_direction_from: Option<MMDIRECTIONFROM>,
    /// field 28, wire `account_linked`
    pub account_linked: Option<bool>,
    /// field 29, wire `consent_source`
    pub consent_source: Option<CONSENTSOURCE>,
}