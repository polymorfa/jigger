export const WamMetaVerifiedInteraction = 4870 as const

export interface MetaVerifiedInteractionEvent {
  /** field 1, wire `business_owner_jid` */
  businessOwnerJid?: string
  /** field 2, wire `business_owner_platform` */
  businessOwnerPlatform?: BUSINESSOWNERPLATFORM
  /** field 3, wire `meta_verified_interaction_action` */
  metaVerifiedInteractionAction?: METAVERIFIEDINTERACTIONACTION
  /** field 4, wire `meta_verified_interaction_asset_type` */
  metaVerifiedInteractionAssetType?: METAVERIFIEDINTERACTIONASSETTYPE
  /** field 5, wire `meta_verified_interaction_referral` */
  metaVerifiedInteractionReferral?: METAVERIFIEDINTERACTIONREFERRAL
  /** field 6, wire `meta_verified_interaction_surface` */
  metaVerifiedInteractionSurface?: METAVERIFIEDINTERACTIONSURFACE
  /** field 7, wire `is_meta_verified_subscribed` */
  isMetaVerifiedSubscribed?: boolean
  /** field 8, wire `is_self_view` */
  isSelfView?: boolean
}