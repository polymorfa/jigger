export const WamMetaVerifiedUserAction = 4986 as const

export interface MetaVerifiedUserActionEvent {
  /** field 1, wire `meta_verified_user_action_action` */
  metaVerifiedUserActionAction?: METAVERIFIEDUSERACTIONACTION
  /** field 2, wire `meta_verified_user_action_asset_type` */
  metaVerifiedUserActionAssetType?: METAVERIFIEDUSERACTIONASSETTYPE
  /** field 3, wire `meta_verified_user_action_referral` */
  metaVerifiedUserActionReferral?: METAVERIFIEDUSERACTIONREFERRAL
  /** field 4, wire `meta_verified_user_action_surface` */
  metaVerifiedUserActionSurface?: METAVERIFIEDUSERACTIONSURFACE
  /** field 5, wire `meta_verified_user_action_result` */
  metaVerifiedUserActionResult?: METAVERIFIEDUSERACTIONRESULT
  /** field 6, wire `meta_verified_user_action_interaction_error` */
  metaVerifiedUserActionInteractionError?: METAVERIFIEDUSERACTIONINTERACTIONERROR
  /** field 7, wire `meta_verified_user_action_green_dot_visible` */
  metaVerifiedUserActionGreenDotVisible?: boolean
  /** field 8, wire `meta_verified_user_action_error_details` */
  metaVerifiedUserActionErrorDetails?: METAVERIFIEDUSERACTIONERRORDETAILS
  /** field 9, wire `meta_verified_user_action_is_subscribed` */
  metaVerifiedUserActionIsSubscribed?: boolean
  /** field 10, wire `user_action_error_code` */
  userActionErrorCode?: string
  /** field 11, wire `user_action_session_id` */
  userActionSessionId?: string
  /** field 12, wire `meta_verified_quick_promotion_id` */
  metaVerifiedQuickPromotionId?: string
  /** field 13, wire `meta_verified_user_action_extra` */
  metaVerifiedUserActionExtra?: string
  /** field 14, wire `meta_verified_user_action_banner_type` */
  metaVerifiedUserActionBannerType?: METAVERIFIEDUSERACTIONBANNERTYPE
  /** field 15, wire `meta_verified_user_action_verified_badge_visible` */
  metaVerifiedUserActionVerifiedBadgeVisible?: boolean
  /** field 16, wire `is_profile_locked` */
  isProfileLocked?: boolean
  /** field 17, wire `meta_verified_locked_profile_field` */
  metaVerifiedLockedProfileField?: METAVERIFIEDLOCKEDPROFILEFIELD
  /** field 18, wire `meta_verified_locked_profile_field_eligibility` */
  metaVerifiedLockedProfileFieldEligibility?: string
  /** field 19, wire `is_vlevel_high` */
  isVlevelHigh?: boolean
  /** field 20, wire `meta_verified_dialog_interaction` */
  metaVerifiedDialogInteraction?: METAVERIFIEDDIALOGINTERACTION
  /** field 21, wire `meta_verified_locked_field_edit_outcome` */
  metaVerifiedLockedFieldEditOutcome?: METAVERIFIEDLOCKEDFIELDEDITOUTCOME
  /** field 22, wire `is_retry_attempt` */
  isRetryAttempt?: boolean
}