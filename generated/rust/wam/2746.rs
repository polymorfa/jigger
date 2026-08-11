pub const WAM_MD_CRITICAL_EVENT: u32 = 2746;

#[derive(Debug, Default)]
pub struct MdCriticalEventEvent {
    /// field 1, wire `md_critical_event_code`
    pub md_critical_event_code: Option<MDSYNCDCRITICALEVENTCODE>,
    /// field 2, wire `collection`
    pub collection: Option<COLLECTION>,
    /// field 3, wire `mutation_action_name`
    pub mutation_action_name: Option<String>,
    /// field 4, wire `md_critical_event_error_message`
    pub md_critical_event_error_message: Option<String>,
    /// field 5, wire `md_critical_event_stage`
    pub md_critical_event_stage: Option<String>,
}