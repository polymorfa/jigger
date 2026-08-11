export const WamStatusMute = 2978 as const

export interface StatusMuteEvent {
  /** field 1, wire `status_session_id` */
  statusSessionId?: number
  /** field 2, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
  /** field 3, wire `status_item_index` */
  statusItemIndex?: number
  /** field 4, wire `psa_campaign_ids` */
  psaCampaignIds?: string
  /** field 5, wire `psa_campaign_item_index` */
  psaCampaignItemIndex?: number
  /** field 6, wire `mute_origin` */
  muteOrigin?: MUTEORIGIN
  /** field 7, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 8, wire `mute_action` */
  muteAction?: MUTEACTION
  /** field 9, wire `is_poster_biz` */
  isPosterBiz?: boolean
  /** field 10, wire `is_poster_in_address_book` */
  isPosterInAddressBook?: boolean
  /** field 11, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 12, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 13, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 14, wire `status_poster_contact_type` */
  statusPosterContactType?: STATUSPOSTERCONTACTTYPE
  /** field 15, wire `cid` */
  cid?: string
}