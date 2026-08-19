export const WamStatusPosterActions = 3546 as const

export interface StatusPosterActionsEvent {
  /** field 1, wire `retry_count` */
  retryCount?: number
  /** field 2, wire `status_audience_size` */
  statusAudienceSize?: number
  /** field 3, wire `status_content_source` */
  statusContentSource?: STATUSCONTENTSOURCE
  /** field 4, wire `status_content_type` */
  statusContentType?: STATUSCONTENTTYPE
  /** field 5, wire `status_creation_entry_point` */
  statusCreationEntryPoint?: STATUSCREATIONENTRYPOINT
  /** field 7, wire `status_event_type` */
  statusEventType?: STATUSEVENTTYPE
  /** field 8, wire `status_post_failure_reason` */
  statusPostFailureReason?: string
  /** field 10, wire `status_privacy_type` */
  statusPrivacyType?: STATUSPRIVACYTYPE
  /** field 11, wire `status_session_id` */
  statusSessionId?: number
  /** field 12, wire `status_id` */
  statusId?: string
  /** field 13, wire `status_duration` */
  statusDuration?: number
  /** field 14, wire `editable` */
  editable?: boolean
  /** field 15, wire `external_interactables` */
  externalInteractables?: number
  /** field 16, wire `external_package_name` */
  externalPackageName?: string
  /** field 17, wire `share_type` */
  shareType?: string
  /** field 18, wire `sticker_type` */
  stickerType?: STICKERTYPE
  /** field 19, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 20, wire `status_posting_session_id` */
  statusPostingSessionId?: number
  /** field 21, wire `selected_layout_config_id` */
  selectedLayoutConfigId?: SELECTEDLAYOUTCONFIGID
  /** field 22, wire `selected_media_count` */
  selectedMediaCount?: number
  /** field 23, wire `status_media_picker_format_type` */
  statusMediaPickerFormatType?: STATUSMEDIAPICKERFORMATTYPE
  /** field 24, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 25, wire `status_paired_media_quality` */
  statusPairedMediaQuality?: STATUSPAIREDMEDIAQUALITY
  /** field 26, wire `default_trimmed_video_duration` */
  defaultTrimmedVideoDuration?: number
  /** field 27, wire `original_video_duration` */
  originalVideoDuration?: number
  /** field 28, wire `is_favoured` */
  isFavoured?: boolean
  /** field 29, wire `media_index` */
  mediaIndex?: number
  /** field 30, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 31, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 32, wire `can_save_as_draft` */
  canSaveAsDraft?: boolean
  /** field 33, wire `has_draft_available` */
  hasDraftAvailable?: boolean
  /** field 34, wire `card_type` */
  cardType?: ENGAGEMENTCARDTYPE
  /** field 35, wire `card_variant` */
  cardVariant?: ENGAGEMENTCARDVARIANT
  /** field 36, wire `cid` */
  cid?: string
  /** field 37, wire `is_batched_post` */
  isBatchedPost?: boolean
  /** field 38, wire `status_part_code` */
  statusPartCode?: string
}