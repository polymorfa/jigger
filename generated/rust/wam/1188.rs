pub const WAM_WEBC_MEMORY_STAT: u32 = 1188;

#[derive(Debug, Default)]
pub struct WebcMemoryStatEvent {
    /// field 6, wire `uptime`
    pub uptime: Option<String>,
    /// field 9, wire `js_heap_size_limit`
    pub js_heap_size_limit: Option<i64>,
    /// field 10, wire `total_js_heap_size`
    pub total_js_heap_size: Option<i64>,
    /// field 11, wire `used_js_heap_size`
    pub used_js_heap_size: Option<i64>,
    /// field 13, wire `is_foreground`
    pub is_foreground: Option<bool>,
    /// field 14, wire `peak_used_js_heap_size`
    pub peak_used_js_heap_size: Option<i64>,
    /// field 15, wire `scenario`
    pub scenario: Option<WEBCSCENARIOTYPE>,
    /// field 16, wire `used_js_heap_size_delta`
    pub used_js_heap_size_delta: Option<i64>,
    /// field 17, wire `chat_collection_size`
    pub chat_collection_size: Option<i64>,
    /// field 18, wire `chat_db_size`
    pub chat_db_size: Option<i64>,
    /// field 19, wire `contact_collection_size`
    pub contact_collection_size: Option<i64>,
    /// field 20, wire `contact_db_size`
    pub contact_db_size: Option<i64>,
    /// field 23, wire `webc_runtime_env`
    pub webc_runtime_env: Option<WEBCRUNTIMEENVCODE>,
    /// field 24, wire `message_collection_size`
    pub message_collection_size: Option<i64>,
    /// field 25, wire `message_db_size`
    pub message_db_size: Option<i64>,
    /// field 26, wire `app_context`
    pub app_context: Option<String>,
    /// field 27, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
}