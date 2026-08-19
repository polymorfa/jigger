pub const WAM_STATUS_INTERACTION_RECEIVED: u32 = 6810;

#[derive(Debug, Default)]
pub struct StatusInteractionReceivedEvent {
    /// field 1, wire `status_id`
    pub status_id: Option<String>,
    /// field 2, wire `status_interaction_type`
    pub status_interaction_type: Option<STATUSINTERACTIONTYPE>,
    /// field 3, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 4, wire `status_interaction_message_type`
    pub status_interaction_message_type: Option<STATUSINTERACTIONMESSAGETYPE>,
    /// field 5, wire `status_interaction_result_type`
    pub status_interaction_result_type: Option<STATUSINTERACTIONRESULTTYPE>,
    /// field 6, wire `status_interaction_actors`
    pub status_interaction_actors: Option<STATUSINTERACTIONACTORS>,
    /// field 7, wire `channel_status_id`
    pub channel_status_id: Option<i64>,
    /// field 8, wire `cid`
    pub cid: Option<String>,
}