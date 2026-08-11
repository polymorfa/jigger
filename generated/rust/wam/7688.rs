pub const WAM_PATHFINDER_FRAMEWORK_HEALTH: u32 = 7688;

#[derive(Debug, Default)]
pub struct PathfinderFrameworkHealthEvent {
    /// field 1, wire `pathfinder_health_event_data`
    pub pathfinder_health_event_data: Option<String>,
    /// field 2, wire `pathfinder_health_event_type`
    pub pathfinder_health_event_type: Option<PATHFINDERHEALTHEVENTTYPE>,
}