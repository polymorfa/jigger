export const WamSmbUserJourney = 5462 as const

export interface SmbUserJourneyEvent {
  /** field 1, wire `action_type` */
  actionType?: CHATFILTERACTIONTYPES
  /** field 2, wire `contact_is_saved` */
  contactIsSaved?: boolean
  /** field 3, wire `entry_point` */
  entryPoint?: ENTRYPOINT
  /** field 4, wire `extra_attributes` */
  extraAttributes?: string
  /** field 5, wire `opposite_platform` */
  oppositePlatform?: OPPOSITEPLATFORMENUM
  /** field 7, wire `seq_id` */
  seqId?: number
  /** field 8, wire `smb_feature_name` */
  smbFeatureName?: SMBFEATURENAMEENUM
  /** field 9, wire `smb_user_session_id` */
  smbUserSessionId?: string
  /** field 10, wire `surface` */
  surface?: SURFACETYPE
  /** field 11, wire `user_action_target` */
  userActionTarget?: string
  /** field 12, wire `recipient_size` */
  recipientSize?: number
  /** field 13, wire `smb_user_action_type` */
  smbUserActionType?: SMBUSERACTIONTYPEENUM
  /** field 14, wire `prev_surface` */
  prevSurface?: SURFACETYPE
  /** field 18, wire `entry_point_details` */
  entryPointDetails?: string
  /** field 19, wire `has_catalog` */
  hasCatalog?: boolean
  /** field 20, wire `is_coex_account` */
  isCoexAccount?: boolean
  /** field 21, wire `is_mv_subscriber` */
  isMvSubscriber?: boolean
  /** field 22, wire `bb_tier` */
  bbTier?: BBTIERTYPE
}