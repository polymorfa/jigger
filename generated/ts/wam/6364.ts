export const WamStatusPostImpression = 6364 as const

export interface StatusPostImpressionEvent {
  /** field 1, wire `external_source_domain_type` */
  externalSourceDomainType?: INLINEVIDEOTYPE
  /** field 2, wire `is_first_view` */
  isFirstView?: boolean
  /** field 3, wire `is_poster_biz` */
  isPosterBiz?: boolean
  /** field 4, wire `is_sub_impression` */
  isSubImpression?: boolean
  /** field 5, wire `is_viewed_in_landscape` */
  isViewedInLandscape?: boolean
  /** field 6, wire `music_blocked` */
  musicBlocked?: boolean
  /** field 7, wire `psa_campaign_id` */
  psaCampaignId?: string
  /** field 8, wire `psa_link_available` */
  psaLinkAvailable?: boolean
  /** field 9, wire `status_contains_music` */
  statusContainsMusic?: boolean
  /** field 10, wire `status_content_type` */
  statusContentType?: STATUSCONTENTTYPE
  /** field 11, wire `status_id` */
  statusId?: string
  /** field 12, wire `status_load_time` */
  statusLoadTime?: string
  /** field 13, wire `status_media_type` */
  statusMediaType?: MEDIATYPE
  /** field 15, wire `status_pog_index` */
  statusPogIndex?: number
  /** field 16, wire `status_post_index` */
  statusPostIndex?: number
  /** field 17, wire `status_post_playback_duration` */
  statusPostPlaybackDuration?: string
  /** field 18, wire `status_view_entrypoint` */
  statusViewEntrypoint?: STATUSROWSECTION
  /** field 19, wire `status_view_time` */
  statusViewTime?: string
  /** field 20, wire `status_viewer_session_id` */
  statusViewerSessionId?: number
  /** field 21, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 22, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 23, wire `url_status_type` */
  urlStatusType?: URLSTATUSTYPE
  /** field 24, wire `is_self_view` */
  isSelfView?: boolean
  /** field 25, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 26, wire `status_poster_hash_id` */
  statusPosterHashId?: string
  /** field 28, wire `status_contains_question` */
  statusContainsQuestion?: boolean
  /** field 29, wire `entry_method` */
  entryMethod?: STATUSVIEWENTRYMETHOD
  /** field 30, wire `is_successful_view` */
  isSuccessfulView?: boolean
  /** field 31, wire `status_item_view_result` */
  statusItemViewResult?: STATUSITEMVIEWRESULT
  /** field 32, wire `view_sequence_index` */
  viewSequenceIndex?: number
  /** field 33, wire `is_subscribed` */
  isSubscribed?: boolean
  /** field 34, wire `status_contains_reaction_sticker` */
  statusContainsReactionSticker?: boolean
  /** field 35, wire `status_poster_contact_type` */
  statusPosterContactType?: STATUSPOSTERCONTACTTYPE
  /** field 37, wire `pog_view_sequence_index` */
  pogViewSequenceIndex?: number
  /** field 38, wire `status_attribution_types` */
  statusAttributionTypes?: string
  /** field 39, wire `status_group_id` */
  statusGroupId?: string
  /** field 40, wire `status_poster_id` */
  statusPosterId?: string
  /** field 41, wire `group_status_size_bucket` */
  groupStatusSizeBucket?: GROUPSTATUSSIZEBUCKET
  /** field 42, wire `is_close_sharing_post` */
  isCloseSharingPost?: boolean
  /** field 43, wire `is_last_status` */
  isLastStatus?: boolean
  /** field 44, wire `status_view_exit_method` */
  statusViewExitMethod?: STATUSVIEWEXITMETHOD
  /** field 45, wire `is_engagement_card` */
  isEngagementCard?: boolean
  /** field 46, wire `channel_status_id` */
  channelStatusId?: number
  /** field 47, wire `channel_user_type` */
  channelUserType?: CHANNELUSERTYPE
  /** field 48, wire `cid` */
  cid?: string
  /** field 49, wire `is_resharable` */
  isResharable?: boolean
  /** field 50, wire `is_reshare` */
  isReshare?: boolean
  /** field 51, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 52, wire `trace_id_int` */
  traceIdInt?: number
  /** field 53, wire `is_group_mentioned` */
  isGroupMentioned?: boolean
  /** field 54, wire `ai_provenance_label_enabled` */
  aiProvenanceLabelEnabled?: boolean
  /** field 55, wire `ai_provenance_label_shown` */
  aiProvenanceLabelShown?: boolean
  /** field 56, wire `status_placeholder_type` */
  statusPlaceholderType?: STATUSPLACEHOLDERTYPE
}