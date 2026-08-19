pub const WAM_CHAT_PSA_ACTION: u32 = 3572;

#[derive(Debug, Default)]
pub struct ChatPsaActionEvent {
    /// field 1, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 2, wire `psa_message_action_type`
    pub psa_message_action_type: Option<PSAMESSAGEACTIONTYPE>,
    /// field 4, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 5, wire `psa_msg_id`
    pub psa_msg_id: Option<String>,
}