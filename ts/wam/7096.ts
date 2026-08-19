export const WamDefenseModeClick = 7096 as const

export interface DefenseModeClickEvent {
  /** field 1, wire `control_name` */
  controlName?: DEFENSEMODECLICKCONTROLNAME
  /** field 2, wire `defense_mode_click_accepted` */
  defenseModeClickAccepted?: boolean
  /** field 3, wire `desired_state` */
  desiredState?: DEFENSEMODECLICKDESIREDSTATE
}