const WamDefenseModeClick = 7096 // channel: regular

type DefenseModeClickEvent struct {
	ControlName DEFENSEMODECLICKCONTROLNAME `wam:"control_name"` // field 1
	DefenseModeClickAccepted bool `wam:"defense_mode_click_accepted"` // field 2
	DesiredState DEFENSEMODECLICKDESIREDSTATE `wam:"desired_state"` // field 3
}