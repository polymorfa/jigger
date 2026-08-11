pub const WAM_BUSINESS_TOOLS_ENTRY: u32 = 2216;

#[derive(Debug, Default)]
pub struct BusinessToolsEntryEvent {
    /// field 1, wire `business_tools_session_id`
    pub business_tools_session_id: Option<String>,
    /// field 2, wire `business_tools_sequence_number`
    pub business_tools_sequence_number: Option<i64>,
    /// field 3, wire `business_tools_entry_point`
    pub business_tools_entry_point: Option<BUSINESSTOOLSENTRYPOINTTYPE>,
}