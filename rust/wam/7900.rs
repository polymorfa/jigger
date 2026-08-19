pub const WAM_AUDIENCE_MANAGEMENT: u32 = 7900;

#[derive(Debug, Default)]
pub struct AudienceManagementEvent {
    /// field 1, wire `audience_event_surface`
    pub audience_event_surface: Option<AUDIENCEEVENTSURFACETYPE>,
    /// field 2, wire `audience_extra_data`
    pub audience_extra_data: Option<String>,
    /// field 3, wire `audience_management_action`
    pub audience_management_action: Option<AUDIENCEMANAGEMENTACTIONTYPE>,
    /// field 4, wire `audience_predicate_type`
    pub audience_predicate_type: Option<AUDIENCEPREDICATETYPEENUM>,
    /// field 5, wire `audience_resolution_trigger`
    pub audience_resolution_trigger: Option<AUDIENCERESOLUTIONTRIGGERTYPE>,
}