export const WamAdvMetadataCreationFailure = 3048 as const

export interface AdvMetadataCreationFailureEvent {
  /** field 1, wire `adv_metadata_is_me` */
  advMetadataIsMe?: boolean
}