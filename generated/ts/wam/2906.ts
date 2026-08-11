export const WamLwiEntryPointImpression = 2906 as const

export interface LwiEntryPointImpressionEvent {
  /** field 1, wire `catalog_session_id` */
  catalogSessionId?: string
  /** field 2, wire `business_tools_session_id` */
  businessToolsSessionId?: string
  /** field 3, wire `lwi_entry_point` */
  lwiEntryPoint?: LWIENTRYPOINT
  /** field 4, wire `user_has_linked_fb_page` */
  userHasLinkedFbPage?: boolean
  /** field 5, wire `status_session_id` */
  statusSessionId?: number
  /** field 6, wire `lwi_sub_entry_point` */
  lwiSubEntryPoint?: LWISUBENTRYPOINT
  /** field 7, wire `items_count` */
  itemsCount?: number
  /** field 8, wire `active_items_count` */
  activeItemsCount?: number
  /** field 9, wire `archived_items_count` */
  archivedItemsCount?: number
  /** field 10, wire `lwi_extras` */
  lwiExtras?: string
  /** field 11, wire `status_id` */
  statusId?: string
  /** field 12, wire `lwi_entry_point_impression_action` */
  lwiEntryPointImpressionAction?: LWIENTRYPOINTIMPRESSIONACTION
}