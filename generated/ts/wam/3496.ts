export const WamCommunityTabAction = 3496 as const

export interface CommunityTabActionEvent {
  /** field 1, wire `community_tab_group_navigations` */
  communityTabGroupNavigations?: number
  /** field 2, wire `community_tab_to_home_views` */
  communityTabToHomeViews?: number
  /** field 3, wire `community_tab_views` */
  communityTabViews?: number
  /** field 4, wire `community_no_action_tab_views` */
  communityNoActionTabViews?: number
  /** field 5, wire `community_tab_views_via_context_menu` */
  communityTabViewsViaContextMenu?: number
}