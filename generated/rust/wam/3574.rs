pub const WAM_CHAT_PSA_READ: u32 = 3574;

#[derive(Debug, Default)]
pub struct ChatPsaReadEvent {
    /// field 1, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `read_entry_point`
    pub read_entry_point: Option<READENTRYPOINT>,
    /// field 4, wire `psa_campaign_id`
    pub psa_campaign_id: Option<String>,
    /// field 5, wire `psa_msg_id`
    pub psa_msg_id: Option<String>,
}