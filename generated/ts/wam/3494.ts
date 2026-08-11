export const WamCommunityHomeAction = 3494 as const

export interface CommunityHomeActionEvent {
  /** field 1, wire `community_home_group_discoveries` */
  communityHomeGroupDiscoveries?: number
  /** field 2, wire `community_home_group_joins` */
  communityHomeGroupJoins?: number
  /** field 3, wire `community_home_group_navigations` */
  communityHomeGroupNavigations?: number
  /** field 4, wire `community_home_id` */
  communityHomeId?: string
  /** field 5, wire `community_home_views` */
  communityHomeViews?: number
}