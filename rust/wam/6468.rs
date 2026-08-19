pub const WAM_THREAD_INTERACTION_DATA_INTEGRITY: u32 = 6468;

#[derive(Debug, Default)]
pub struct ThreadInteractionDataIntegrityEvent {
    /// field 1, wire `block_reason`
    pub block_reason: Option<BLOCKREASON>,
    /// field 2, wire `is_blocked`
    pub is_blocked: Option<bool>,
    /// field 3, wire `is_reported`
    pub is_reported: Option<bool>,
    /// field 4, wire `smb_marketing_messages_spam_reports`
    pub smb_marketing_messages_spam_reports: Option<i64>,
    /// field 5, wire `spam_reports`
    pub spam_reports: Option<i64>,
    /// field 6, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 7, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 8, wire `thread_id_by_lid`
    pub thread_id_by_lid: Option<String>,
    /// field 9, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
}