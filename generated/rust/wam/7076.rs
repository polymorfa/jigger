pub const WAM_BUSINESS_TEMPLATE_RICH_ORDER_STATUS: u32 = 7076;

#[derive(Debug, Default)]
pub struct BusinessTemplateRichOrderStatusEvent {
    /// field 1, wire `action_type_rich_order_status`
    pub action_type_rich_order_status: Option<String>,
    /// field 2, wire `business_jid`
    pub business_jid: Option<String>,
    /// field 3, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 4, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 5, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 6, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 7, wire `is_muted`
    pub is_muted: Option<bool>,
    /// field 8, wire `read_receipts_enabled`
    pub read_receipts_enabled: Option<bool>,
    /// field 9, wire `template_id`
    pub template_id: Option<String>,
}