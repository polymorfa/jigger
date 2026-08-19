const WamMetaVerifiedInteraction = 4870 // channel: private

type MetaVerifiedInteractionEvent struct {
	BusinessOwnerJid string `wam:"business_owner_jid"` // field 1
	BusinessOwnerPlatform BUSINESSOWNERPLATFORM `wam:"business_owner_platform"` // field 2
	MetaVerifiedInteractionAction METAVERIFIEDINTERACTIONACTION `wam:"meta_verified_interaction_action"` // field 3
	MetaVerifiedInteractionAssetType METAVERIFIEDINTERACTIONASSETTYPE `wam:"meta_verified_interaction_asset_type"` // field 4
	MetaVerifiedInteractionReferral METAVERIFIEDINTERACTIONREFERRAL `wam:"meta_verified_interaction_referral"` // field 5
	MetaVerifiedInteractionSurface METAVERIFIEDINTERACTIONSURFACE `wam:"meta_verified_interaction_surface"` // field 6
	IsMetaVerifiedSubscribed bool `wam:"is_meta_verified_subscribed"` // field 7
	IsSelfView bool `wam:"is_self_view"` // field 8
}