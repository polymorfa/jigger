pub const WAM_WEBC_CHAT_OPEN: u32 = 864;

#[derive(Debug, Default)]
pub struct WebcChatOpenEvent {
    /// field 1, wire `webc_unread_count`
    pub webc_unread_count: Option<String>,
    /// field 2, wire `webc_chat_open_t`
    pub webc_chat_open_t: Option<String>,
    /// field 4, wire `webc_rendered_message_count`
    pub webc_rendered_message_count: Option<i64>,
    /// field 5, wire `webc_final_rendered_message_count`
    pub webc_final_rendered_message_count: Option<i64>,
    /// field 6, wire `webc_chat_open_painted_t`
    pub webc_chat_open_painted_t: Option<String>,
    /// field 7, wire `webc_chat_open_before_paint_t`
    pub webc_chat_open_before_paint_t: Option<String>,
    /// field 8, wire `webc_window_height_float`
    pub webc_window_height_float: Option<String>,
}