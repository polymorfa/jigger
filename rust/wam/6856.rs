pub const WAM_MM_SIGNAL_SHARING_VERIFICATION_WITH_SIGNAL_DATA_EVENT: u32 = 6856;

#[derive(Debug, Default)]
pub struct MmSignalSharingVerificationWithSignalDataEventEvent {
    /// field 1, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 2, wire `is_companion_device`
    pub is_companion_device: Option<bool>,
    /// field 3, wire `is_user_disclosed`
    pub is_user_disclosed: Option<bool>,
    /// field 4, wire `is_user_matched`
    pub is_user_matched: Option<bool>,
    /// field 5, wire `mm_signal_data`
    pub mm_signal_data: Option<String>,
    /// field 6, wire `one_pd_signal_not_shared_reason`
    pub one_pd_signal_not_shared_reason: Option<ONEPDSIGNALNOTSHAREDREASON>,
    /// field 7, wire `signal_canceled_reason`
    pub signal_canceled_reason: Option<SIGNALCANCELEDREASON>,
    /// field 8, wire `signal_message_state`
    pub signal_message_state: Option<SIGNALMESSAGESTATE>,
    /// field 9, wire `signal_message_type`
    pub signal_message_type: Option<SIGNALMESSAGETYPE>,
    /// field 10, wire `signal_origin`
    pub signal_origin: Option<SIGNALORIGIN>,
    /// field 11, wire `signal_sharing_status`
    pub signal_sharing_status: Option<SIGNALSHARINGSTATUS>,
    /// field 12, wire `signal_surface`
    pub signal_surface: Option<SIGNALSURFACE>,
    /// field 13, wire `signal_type`
    pub signal_type: Option<SIGNALTYPE>,
    /// field 14, wire `sp_signal_not_shared_reason`
    pub sp_signal_not_shared_reason: Option<SPSIGNALNOTSHAREDREASON>,
    /// field 16, wire `is_network_available`
    pub is_network_available: Option<bool>,
    /// field 17, wire `is_shimming_signal`
    pub is_shimming_signal: Option<bool>,
    /// field 18, wire `signal_type_origin`
    pub signal_type_origin: Option<String>,
    /// field 19, wire `is_latest_conversion_token`
    pub is_latest_conversion_token: Option<bool>,
    /// field 20, wire `mm_conversation_depth`
    pub mm_conversation_depth: Option<i64>,
    /// field 21, wire `mm_conversation_repeat`
    pub mm_conversation_repeat: Option<i64>,
    /// field 22, wire `mm_direction_from`
    pub mm_direction_from: Option<MMDIRECTIONFROM>,
    /// field 23, wire `account_linked`
    pub account_linked: Option<bool>,
    /// field 24, wire `consent_source`
    pub consent_source: Option<CONSENTSOURCE>,
}