pub const WAM_BUSINESS_INTERACTION: u32 = 3450;

#[derive(Debug, Default)]
pub struct BusinessInteractionEvent {
    /// field 1, wire `business_interaction_action`
    pub business_interaction_action: Option<BUSINESSINTERACTIONACTIONTYPE>,
    /// field 2, wire `business_interaction_target_screen`
    pub business_interaction_target_screen: Option<BUSINESSINTERACTIONTARGETSCREENTYPE>,
    /// field 3, wire `business_jid`
    pub business_jid: Option<String>,
    /// field 4, wire `entry_point_app`
    pub entry_point_app: Option<BUSINESSINTERACTIONENTRYPOINTAPP>,
    /// field 5, wire `entry_point_source`
    pub entry_point_source: Option<BUSINESSINTERACTIONENTRYPOINTSOURCE>,
    /// field 6, wire `internal_entry_point`
    pub internal_entry_point: Option<BUSINESSINTERACTIONINTERNALENTRYPOINT>,
    /// field 7, wire `sequence_number`
    pub sequence_number: Option<i64>,
}