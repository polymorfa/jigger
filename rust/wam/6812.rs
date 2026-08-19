pub const WAM_STATUS_INTERACTION_SENT: u32 = 6812;

#[derive(Debug, Default)]
pub struct StatusInteractionSentEvent {
    /// field 1, wire `status_id`
    pub status_id: Option<String>,
    /// field 2, wire `status_interaction_type`
    pub status_interaction_type: Option<STATUSINTERACTIONTYPE>,
    /// field 3, wire `status_row_section`
    pub status_row_section: Option<STATUSROWSECTION>,
    /// field 4, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
    /// field 5, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 6, wire `status_interaction_message_type`
    pub status_interaction_message_type: Option<STATUSINTERACTIONMESSAGETYPE>,
    /// field 7, wire `status_interaction_result_type`
    pub status_interaction_result_type: Option<STATUSINTERACTIONRESULTTYPE>,
    /// field 8, wire `status_poster_contact_type`
    pub status_poster_contact_type: Option<STATUSPOSTERCONTACTTYPE>,
    /// field 9, wire `status_interaction_actors`
    pub status_interaction_actors: Option<STATUSINTERACTIONACTORS>,
    /// field 10, wire `channel_status_id`
    pub channel_status_id: Option<i64>,
    /// field 11, wire `channel_user_type`
    pub channel_user_type: Option<CHANNELUSERTYPE>,
    /// field 12, wire `cid`
    pub cid: Option<String>,
}