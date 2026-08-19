pub const WAM_SEARCH_THE_WEB_FUNNEL: u32 = 5702;

#[derive(Debug, Default)]
pub struct SearchTheWebFunnelEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `stw_entry_point`
    pub stw_entry_point: Option<STWENTRYPOINT>,
    /// field 3, wire `stw_format`
    pub stw_format: Option<STWFORMAT>,
    /// field 4, wire `stw_interaction`
    pub stw_interaction: Option<STWINTERACTION>,
    /// field 5, wire `image_search_failed_error_type`
    pub image_search_failed_error_type: Option<IMAGESEARCHFAILEDERRORTYPE>,
}