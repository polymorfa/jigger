export const WamStatusItemView = 1658 as const

export interface StatusItemViewEvent {
  /** field 1, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
  /** field 2, wire `status_row_index` */
  statusRowIndex?: number
  /** field 3, wire `status_item_view_result` */
  statusItemViewResult?: STATUSITEMVIEWRESULT
  /** field 4, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 5, wire `status_item_load_time` */
  statusItemLoadTime?: string
  /** field 6, wire `status_item_view_time` */
  statusItemViewTime?: string
  /** field 7, wire `status_item_length` */
  statusItemLength?: string
  /** field 8, wire `status_item_replied` */
  statusItemReplied?: number
  /** field 9, wire `status_item_unread` */
  statusItemUnread?: boolean
  /** field 10, wire `status_item_view_count` */
  statusItemViewCount?: number
  /** field 11, wire `status_row_section` */
  statusRowSection?: STATUSROWSECTION
  /** field 14, wire `status_item_impression_count` */
  statusItemImpressionCount?: number
  /** field 16, wire `status_item_index` */
  statusItemIndex?: number
  /** field 17, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 18, wire `psa_campaign_item_index` */
  psaCampaignItemIndex?: number
  /** field 19, wire `psa_link_available` */
  psaLinkAvailable?: boolean
  /** field 20, wire `psa_link_open_result` */
  psaLinkOpenResult?: PSALINKOPENRESULT
  /** field 21, wire `psa_link_load_time` */
  psaLinkLoadTime?: string
  /** field 22, wire `psa_link_click` */
  psaLinkClick?: boolean
  /** field 23, wire `is_poster_biz` */
  isPosterBiz?: boolean
  /** field 25, wire `is_poster_in_address_book` */
  isPosterInAddressBook?: boolean
  /** field 26, wire `url_status_clicked` */
  urlStatusClicked?: URLSTATUSCLICKED
  /** field 27, wire `url_status_type` */
  urlStatusType?: URLSTATUSTYPE
  /** field 29, wire `is_viewed_in_landscape` */
  isViewedInLandscape?: boolean
  /** field 30, wire `status_contains_music` */
  statusContainsMusic?: boolean
  /** field 31, wire `status_item3s_view_count` */
  statusItem3sViewCount?: number
  /** field 32, wire `music_blocked` */
  musicBlocked?: boolean
  /** field 34, wire `external_source_domain_type` */
  externalSourceDomainType?: INLINEVIDEOTYPE
  /** field 35, wire `is_already_downloaded` */
  isAlreadyDownloaded?: boolean
  /** field 36, wire `status_type` */
  statusType?: STATUSTYPE
  /** field 37, wire `is_resharable` */
  isResharable?: boolean
  /** field 38, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 39, wire `status_paired_media_quality` */
  statusPairedMediaQuality?: STATUSPAIREDMEDIAQUALITY
  /** field 40, wire `is_reshare` */
  isReshare?: boolean
  /** field 41, wire `reshare_source` */
  reshareSource?: RESHARESOURCE
  /** field 42, wire `status_media_height` */
  statusMediaHeight?: number
  /** field 43, wire `status_media_width` */
  statusMediaWidth?: number
  /** field 44, wire `is_forwardable` */
  isForwardable?: boolean
  /** field 45, wire `is_forwarded` */
  isForwarded?: boolean
  /** field 46, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 47, wire `bytes_downloaded_start_view` */
  bytesDownloadedStartView?: string
  /** field 48, wire `estimated_bandwidth` */
  estimatedBandwidth?: string
  /** field 49, wire `media_file_size` */
  mediaFileSize?: number
  /** field 51, wire `status_contains_question` */
  statusContainsQuestion?: boolean
  /** field 52, wire `is_subscribed` */
  isSubscribed?: boolean
  /** field 53, wire `status_id` */
  statusId?: string
  /** field 54, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 55, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 56, wire `status_contains_reaction_sticker` */
  statusContainsReactionSticker?: boolean
  /** field 57, wire `status_poster_contact_type` */
  statusPosterContactType?: STATUSPOSTERCONTACTTYPE
  /** field 58, wire `trace_id_int` */
  traceIdInt?: number
}