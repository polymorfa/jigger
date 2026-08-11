export const WamLwiEntryTap = 2770 as const

export interface LwiEntryTapEvent {
  /** field 1, wire `lwi_flow_id` */
  lwiFlowId?: string
  /** field 2, wire `catalog_session_id` */
  catalogSessionId?: string
  /** field 3, wire `lwi_entry_point` */
  lwiEntryPoint?: LWIENTRYPOINT
  /** field 4, wire `business_tools_session_id` */
  businessToolsSessionId?: string
  /** field 5, wire `user_has_linked_fb_page` */
  userHasLinkedFbPage?: boolean
  /** field 6, wire `status_session_id` */
  statusSessionId?: number
  /** field 7, wire `lwi_sub_entry_point` */
  lwiSubEntryPoint?: LWISUBENTRYPOINT
  /** field 10, wire `wa_campaign_id` */
  waCampaignId?: string
  /** field 11, wire `items_count` */
  itemsCount?: number
  /** field 12, wire `status_type_media` */
  statusTypeMedia?: STATUSTYPEMEDIA
  /** field 13, wire `previous_lwi_flow_id` */
  previousLwiFlowId?: string
  /** field 14, wire `active_items_count` */
  activeItemsCount?: number
  /** field 15, wire `archived_items_count` */
  archivedItemsCount?: number
  /** field 16, wire `notification_log_id` */
  notificationLogId?: string
  /** field 17, wire `lwi_extras` */
  lwiExtras?: string
  /** field 18, wire `status_id` */
  statusId?: string
  /** field 19, wire `web_flow_type` */
  webFlowType?: WEBFLOWTYPE
}