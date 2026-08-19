pub const WAM_STATUS_CROSSPOST_REQUEST: u32 = 4994;

#[derive(Debug, Default)]
pub struct StatusCrosspostRequestEvent {
    /// field 1, wire `cac_session_id`
    pub cac_session_id: Option<String>,
    /// field 2, wire `crosspost_destination`
    pub crosspost_destination: Option<CROSSPOSTDESTINATIONTYPE>,
    /// field 3, wire `crosspost_error_type`
    pub crosspost_error_type: Option<String>,
    /// field 4, wire `crosspost_origin`
    pub crosspost_origin: Option<CROSSPOSTORIGINTYPE>,
    /// field 5, wire `default_status_privacy_settings`
    pub default_status_privacy_settings: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 6, wire `is_auto_crosspost_enabled_in_settings`
    pub is_auto_crosspost_enabled_in_settings: Option<bool>,
    /// field 7, wire `is_auto_crossposted`
    pub is_auto_crossposted: Option<bool>,
    /// field 8, wire `status_cross_post_per_post_status_privacy_setting`
    pub status_cross_post_per_post_status_privacy_setting: Option<PRIVACYSETTINGSVALUETYPE>,
    /// field 9, wire `status_crosspost_media_type`
    pub status_crosspost_media_type: Option<MEDIATYPE>,
    /// field 10, wire `status_crosspost_result`
    pub status_crosspost_result: Option<CROSSPOSTRESULTTYPE>,
    /// field 11, wire `status_id`
    pub status_id: Option<String>,
    /// field 12, wire `status_crosspost_entry_point`
    pub status_crosspost_entry_point: Option<String>,
    /// field 13, wire `status_crosspost_share_type`
    pub status_crosspost_share_type: Option<STATUSCROSSPOSTSHARETYPEENUM>,
    /// field 14, wire `status_crosspost_event_type`
    pub status_crosspost_event_type: Option<String>,
    /// field 15, wire `status_crosspost_flow_trace_id`
    pub status_crosspost_flow_trace_id: Option<String>,
    /// field 16, wire `status_crosspost_trace_id`
    pub status_crosspost_trace_id: Option<i64>,
    /// field 17, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
}