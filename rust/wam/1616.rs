pub const WAM_CHAT_FILTER_EVENT: u32 = 1616;

#[derive(Debug, Default)]
pub struct ChatFilterEventEvent {
    /// field 1, wire `action_type`
    pub action_type: Option<CHATFILTERACTIONTYPES>,
    /// field 2, wire `filter_type`
    pub filter_type: Option<CHATFILTERTYPES>,
    /// field 3, wire `session_id`
    pub session_id: Option<i64>,
    /// field 4, wire `search_result_type`
    pub search_result_type: Option<CHATSEARCHRESULTTYPE>,
    /// field 5, wire `target_screen`
    pub target_screen: Option<CHATFILTERTARGETSCREEN>,
    /// field 6, wire `activity_session_id`
    pub activity_session_id: Option<String>,
    /// field 7, wire `metadata`
    pub metadata: Option<String>,
    /// field 8, wire `search_query_id`
    pub search_query_id: Option<String>,
    /// field 9, wire `search_request_id`
    pub search_request_id: Option<String>,
    /// field 10, wire `predefined_id`
    pub predefined_id: Option<i64>,
    /// field 11, wire `label_name`
    pub label_name: Option<String>,
    /// field 12, wire `list_id`
    pub list_id: Option<i64>,
    /// field 13, wire `list_index`
    pub list_index: Option<i64>,
    /// field 14, wire `list_type`
    pub list_type: Option<LISTTYPE>,
    /// field 15, wire `thread_id`
    pub thread_id: Option<String>,
}