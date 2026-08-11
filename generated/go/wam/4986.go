const WamMetaVerifiedUserAction = 4986 // channel: regular

type MetaVerifiedUserActionEvent struct {
	MetaVerifiedUserActionAction METAVERIFIEDUSERACTIONACTION `wam:"meta_verified_user_action_action"` // field 1
	MetaVerifiedUserActionAssetType METAVERIFIEDUSERACTIONASSETTYPE `wam:"meta_verified_user_action_asset_type"` // field 2
	MetaVerifiedUserActionReferral METAVERIFIEDUSERACTIONREFERRAL `wam:"meta_verified_user_action_referral"` // field 3
	MetaVerifiedUserActionSurface METAVERIFIEDUSERACTIONSURFACE `wam:"meta_verified_user_action_surface"` // field 4
	MetaVerifiedUserActionResult METAVERIFIEDUSERACTIONRESULT `wam:"meta_verified_user_action_result"` // field 5
	MetaVerifiedUserActionInteractionError METAVERIFIEDUSERACTIONINTERACTIONERROR `wam:"meta_verified_user_action_interaction_error"` // field 6
	MetaVerifiedUserActionGreenDotVisible bool `wam:"meta_verified_user_action_green_dot_visible"` // field 7
	MetaVerifiedUserActionErrorDetails METAVERIFIEDUSERACTIONERRORDETAILS `wam:"meta_verified_user_action_error_details"` // field 8
	MetaVerifiedUserActionIsSubscribed bool `wam:"meta_verified_user_action_is_subscribed"` // field 9
	UserActionErrorCode string `wam:"user_action_error_code"` // field 10
	UserActionSessionId string `wam:"user_action_session_id"` // field 11
	MetaVerifiedQuickPromotionId string `wam:"meta_verified_quick_promotion_id"` // field 12
	MetaVerifiedUserActionExtra string `wam:"meta_verified_user_action_extra"` // field 13
	MetaVerifiedUserActionBannerType METAVERIFIEDUSERACTIONBANNERTYPE `wam:"meta_verified_user_action_banner_type"` // field 14
	MetaVerifiedUserActionVerifiedBadgeVisible bool `wam:"meta_verified_user_action_verified_badge_visible"` // field 15
	IsProfileLocked bool `wam:"is_profile_locked"` // field 16
	MetaVerifiedLockedProfileField METAVERIFIEDLOCKEDPROFILEFIELD `wam:"meta_verified_locked_profile_field"` // field 17
	MetaVerifiedLockedProfileFieldEligibility string `wam:"meta_verified_locked_profile_field_eligibility"` // field 18
	IsVlevelHigh bool `wam:"is_vlevel_high"` // field 19
	MetaVerifiedDialogInteraction METAVERIFIEDDIALOGINTERACTION `wam:"meta_verified_dialog_interaction"` // field 20
	MetaVerifiedLockedFieldEditOutcome METAVERIFIEDLOCKEDFIELDEDITOUTCOME `wam:"meta_verified_locked_field_edit_outcome"` // field 21
	IsRetryAttempt bool `wam:"is_retry_attempt"` // field 22
}