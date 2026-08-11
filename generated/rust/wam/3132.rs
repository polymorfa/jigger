pub const WAM_MESSAGE_HIGH_RETRY_COUNT: u32 = 3132;

#[derive(Debug, Default)]
pub struct MessageHighRetryCountEvent {
    /// field 1, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 2, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 3, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 4, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 5, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
    /// field 6, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 7, wire `is_receiver_lid_based`
    pub is_receiver_lid_based: Option<bool>,
    /// field 8, wire `is_sender_lid_based`
    pub is_sender_lid_based: Option<bool>,
    /// field 9, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 10, wire `encryption_type`
    pub encryption_type: Option<ENCRYPTIONTYPECODE>,
    /// field 11, wire `session_scope`
    pub session_scope: Option<SESSIONSCOPETYPE>,
}