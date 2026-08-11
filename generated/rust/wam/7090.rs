pub const WAM_MEDIA_HUB_USER_JOURNEY: u32 = 7090;

#[derive(Debug, Default)]
pub struct MediaHubUserJourneyEvent {
    /// field 1, wire `custom_fields`
    pub custom_fields: Option<String>,
    /// field 2, wire `media_hub_action`
    pub media_hub_action: Option<ACTIONCODE>,
    /// field 3, wire `media_hub_entry_point`
    pub media_hub_entry_point: Option<ENTRYPOINTTYPE>,
    /// field 4, wire `media_hub_sequence_number`
    pub media_hub_sequence_number: Option<i64>,
    /// field 5, wire `media_hub_session_id`
    pub media_hub_session_id: Option<String>,
    /// field 6, wire `media_hub_surface`
    pub media_hub_surface: Option<SURFACECODE>,
    /// field 7, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}