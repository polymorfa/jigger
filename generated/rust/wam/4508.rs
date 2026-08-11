pub const WAM_SMB_PAID_MESSAGES_BUTTON_LOGGER: u32 = 4508;

#[derive(Debug, Default)]
pub struct SmbPaidMessagesButtonLoggerEvent {
    /// field 1, wire `business_phone_number`
    pub business_phone_number: Option<i64>,
    /// field 2, wire `pm_button_count`
    pub pm_button_count: Option<i64>,
    /// field 3, wire `pm_button_event_type`
    pub pm_button_event_type: Option<PMBUTTONEVENTTYPE>,
    /// field 4, wire `pm_button_index`
    pub pm_button_index: Option<i64>,
    /// field 5, wire `pm_button_type`
    pub pm_button_type: Option<PMBUTTONTYPE>,
    /// field 6, wire `pm_server_campaign_id`
    pub pm_server_campaign_id: Option<String>,
    /// field 7, wire `pm_is_trackable_link`
    pub pm_is_trackable_link: Option<String>,
}