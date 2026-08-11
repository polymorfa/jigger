pub const WAM_AUTOMATIC_EVENTS_USER_JOURNEY: u32 = 6636;

#[derive(Debug, Default)]
pub struct AutomaticEventsUserJourneyEvent {
    /// field 1, wire `automatic_events_target_component`
    pub automatic_events_target_component: Option<AUTOMATICEVENTSTARGETCOMPONENTENUM>,
    /// field 2, wire `smb_user_action_type`
    pub smb_user_action_type: Option<SMBUSERACTIONTYPEENUM>,
    /// field 3, wire `surface`
    pub surface: Option<SURFACETYPE>,
    /// field 4, wire `extra_attributes`
    pub extra_attributes: Option<String>,
}