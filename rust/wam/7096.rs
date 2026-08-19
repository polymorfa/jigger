pub const WAM_DEFENSE_MODE_CLICK: u32 = 7096;

#[derive(Debug, Default)]
pub struct DefenseModeClickEvent {
    /// field 1, wire `control_name`
    pub control_name: Option<DEFENSEMODECLICKCONTROLNAME>,
    /// field 2, wire `defense_mode_click_accepted`
    pub defense_mode_click_accepted: Option<bool>,
    /// field 3, wire `desired_state`
    pub desired_state: Option<DEFENSEMODECLICKDESIREDSTATE>,
}