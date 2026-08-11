pub const WAM_BUSINESS_TOOLS_CLICK: u32 = 2218;

#[derive(Debug, Default)]
pub struct BusinessToolsClickEvent {
    /// field 1, wire `business_tools_session_id`
    pub business_tools_session_id: Option<String>,
    /// field 2, wire `business_tools_sequence_number`
    pub business_tools_sequence_number: Option<i64>,
    /// field 3, wire `business_tools_item`
    pub business_tools_item: Option<BUSINESSTOOLSITEMTYPE>,
    /// field 4, wire `linking_target`
    pub linking_target: Option<BUSINESSTOOLSLINKEDACCOUNTTYPE>,
    /// field 5, wire `business_tools_entry_point`
    pub business_tools_entry_point: Option<BUSINESSTOOLSENTRYPOINTTYPE>,
    /// field 6, wire `business_tools_entry_point_placement`
    pub business_tools_entry_point_placement: Option<i64>,
}