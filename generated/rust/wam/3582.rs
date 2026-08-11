pub const WAM_CHAT_PSA_REMOVE: u32 = 3582;

#[derive(Debug, Default)]
pub struct ChatPsaRemoveEvent {
    /// field 2, wire `last_received_media_type`
    pub last_received_media_type: Option<MEDIATYPE>,
    /// field 4, wire `last_received_message_ts`
    pub last_received_message_ts: Option<String>,
    /// field 5, wire `psa_message_remove_action`
    pub psa_message_remove_action: Option<PSAMESSAGEREMOVEACTION>,
    /// field 6, wire `psa_message_remove_entry_point`
    pub psa_message_remove_entry_point: Option<PSAMESSAGEREMOVEENTRYPOINT>,
    /// field 7, wire `wa_official_account_name`
    pub wa_official_account_name: Option<WAOFFICIALACCOUNTNAME>,
    /// field 8, wire `last_received_msg_id`
    pub last_received_msg_id: Option<String>,
    /// field 9, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 10, wire `psa_block_reason`
    pub psa_block_reason: Option<PSABLOCKREASON>,
}