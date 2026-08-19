export const WamCommunityFeatureUsage = 3696 as const

export interface CommunityFeatureUsageEvent {
  /** field 2, wire `community_id` */
  communityId?: string
  /** field 3, wire `community_ui_feature` */
  communityUiFeature?: COMMUNITYUIFEATURETYPE
  /** field 4, wire `community_ui_action` */
  communityUiAction?: COMMUNITYFEATUREUIACTIONTAKENTYPE
}