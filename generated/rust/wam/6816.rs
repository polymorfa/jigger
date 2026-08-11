pub const WAM_ABOUT_CONSUMPTION_DAILY: u32 = 6816;

#[derive(Debug, Default)]
pub struct AboutConsumptionDailyEvent {
    /// field 1, wire `about_chat_bubble_tap_count` (about_chat_bubble_tap_count >= 0)
    pub about_chat_bubble_tap_count: Option<i64>,
    /// field 2, wire `about_chat_consumption_count` (about_chat_consumption_count >= 0)
    pub about_chat_consumption_count: Option<i64>,
    /// field 3, wire `about_locale`
    pub about_locale: Option<String>,
    /// field 4, wire `about_message_send_count` (about_message_send_count >= 0)
    pub about_message_send_count: Option<i64>,
}