export const WamPnhDaily = 3806 as const

export interface PnhDailyEvent {
  /** field 1, wire `community_id` */
  communityId?: string
  /** field 2, wire `pnh_indicator_clicks_chat` */
  pnhIndicatorClicksChat?: number
  /** field 3, wire `pnh_indicator_clicks_info_screen` */
  pnhIndicatorClicksInfoScreen?: number
  /** field 4, wire `reaction_delete_count` */
  reactionDeleteCount?: number
  /** field 5, wire `reaction_open_tray_count` */
  reactionOpenTrayCount?: number
  /** field 6, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 7, wire `mapping_missing` */
  mappingMissing?: number
  /** field 8, wire `total_contacts` */
  totalContacts?: number
}