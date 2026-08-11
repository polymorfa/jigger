pub const WAM_CHAT_FOLDER_OPEN: u32 = 2808;

#[derive(Debug, Default)]
pub struct ChatFolderOpenEvent {
    /// field 1, wire `folder_type`
    pub folder_type: Option<String>,
    /// field 2, wire `activity_indicator_count`
    pub activity_indicator_count: Option<i64>,
    /// field 3, wire `has_important_messages`
    pub has_important_messages: Option<bool>,
}