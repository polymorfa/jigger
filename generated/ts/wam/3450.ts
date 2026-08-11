export const WamBusinessInteraction = 3450 as const

export interface BusinessInteractionEvent {
  /** field 1, wire `business_interaction_action` */
  businessInteractionAction?: BUSINESSINTERACTIONACTIONTYPE
  /** field 2, wire `business_interaction_target_screen` */
  businessInteractionTargetScreen?: BUSINESSINTERACTIONTARGETSCREENTYPE
  /** field 3, wire `business_jid` */
  businessJid?: string
  /** field 4, wire `entry_point_app` */
  entryPointApp?: BUSINESSINTERACTIONENTRYPOINTAPP
  /** field 5, wire `entry_point_source` */
  entryPointSource?: BUSINESSINTERACTIONENTRYPOINTSOURCE
  /** field 6, wire `internal_entry_point` */
  internalEntryPoint?: BUSINESSINTERACTIONINTERNALENTRYPOINT
  /** field 7, wire `sequence_number` */
  sequenceNumber?: number
}