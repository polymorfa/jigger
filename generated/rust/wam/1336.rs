pub const WAM_MEMORY_STAT: u32 = 1336;

#[derive(Debug, Default)]
pub struct MemoryStatEvent {
    /// field 1, wire `working_set_size`
    pub working_set_size: Option<String>,
    /// field 2, wire `working_set_peak_size`
    pub working_set_peak_size: Option<String>,
    /// field 3, wire `private_bytes`
    pub private_bytes: Option<String>,
    /// field 4, wire `shared_bytes`
    pub shared_bytes: Option<String>,
    /// field 5, wire `process_type`
    pub process_type: Option<String>,
    /// field 6, wire `uptime`
    pub uptime: Option<String>,
    /// field 7, wire `has_verified_number`
    pub has_verified_number: Option<bool>,
    /// field 8, wire `num_messages`
    pub num_messages: Option<String>,
    /// field 14, wire `app_context`
    pub app_context: Option<String>,
    /// field 15, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
}