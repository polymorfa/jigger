pub const WAM_MD_EXPANSION_AGENT_BROWSER_MD_ID: u32 = 3390;

#[derive(Debug, Default)]
pub struct MdExpansionAgentBrowserMdIdEvent {
    /// field 1, wire `agent_id`
    pub agent_id: Option<String>,
    /// field 2, wire `browser_id`
    pub browser_id: Option<String>,
    /// field 3, wire `login_timestamp`
    pub login_timestamp: Option<i64>,
    /// field 4, wire `logout_timestamp`
    pub logout_timestamp: Option<i64>,
    /// field 5, wire `companion_md_id`
    pub companion_md_id: Option<i64>,
    /// field 6, wire `is_custom_agent_name`
    pub is_custom_agent_name: Option<bool>,
    /// field 7, wire `multidevice_action`
    pub multidevice_action: Option<MULTIDEVICEACTIONTYPE>,
    /// field 8, wire `md_linked_count`
    pub md_linked_count: Option<i64>,
    /// field 9, wire `is_new_agent`
    pub is_new_agent: Option<bool>,
}