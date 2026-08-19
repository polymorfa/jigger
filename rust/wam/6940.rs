pub const WAM_QBM_RICH_ORDER_STATUS_INTERACTION: u32 = 6940;

#[derive(Debug, Default)]
pub struct QbmRichOrderStatusInteractionEvent {
    /// field 1, wire `action_type_rich_order_status`
    pub action_type_rich_order_status: Option<String>,
    /// field 2, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 3, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 4, wire `decision_id`
    pub decision_id: Option<String>,
    /// field 5, wire `delta_time`
    pub delta_time: Option<i64>,
    /// field 6, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 7, wire `entry_point`
    pub entry_point: Option<ENTRYPOINT>,
    /// field 8, wire `hsm_tag_str`
    pub hsm_tag_str: Option<String>,
    /// field 9, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 10, wire `is_broadcast_message`
    pub is_broadcast_message: Option<bool>,
    /// field 11, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 12, wire `is_muted`
    pub is_muted: Option<bool>,
    /// field 13, wire `message_id_hmac`
    pub message_id_hmac: Option<String>,
    /// field 14, wire `qbm_flag`
    pub qbm_flag: Option<QBMFLAG>,
    /// field 15, wire `read_receipts_enabled`
    pub read_receipts_enabled: Option<bool>,
    /// field 16, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 17, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}