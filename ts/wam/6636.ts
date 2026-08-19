export const WamAutomaticEventsUserJourney = 6636 as const

export interface AutomaticEventsUserJourneyEvent {
  /** field 1, wire `automatic_events_target_component` */
  automaticEventsTargetComponent?: AUTOMATICEVENTSTARGETCOMPONENTENUM
  /** field 2, wire `smb_user_action_type` */
  smbUserActionType?: SMBUSERACTIONTYPEENUM
  /** field 3, wire `surface` */
  surface?: SURFACETYPE
  /** field 4, wire `extra_attributes` */
  extraAttributes?: string
}