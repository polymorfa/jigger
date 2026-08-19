export const WamStatusPost = 1176 as const

export interface StatusPostEvent {
  /** field 1, wire `status_session_id` */
  statusSessionId?: number
  /** field 2, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 3, wire `status_post_result` */
  statusPostResult?: STATUSPOSTRESULT
  /** field 4, wire `status_post_origin` */
  statusPostOrigin?: STATUSPOSTORIGIN
  /** field 5, wire `retry_count` */
  retryCount?: number
  /** field 6, wire `default_status_privacy_setting` */
  defaultStatusPrivacySetting?: PRIVACYSETTINGSVALUETYPE
  /** field 7, wire `per_post_status_privacy_setting` */
  perPostStatusPrivacySetting?: PRIVACYSETTINGSVALUETYPE
  /** field 8, wire `status_audience_selector_clicked` */
  statusAudienceSelectorClicked?: boolean
  /** field 9, wire `status_audience_selector_updated` */
  statusAudienceSelectorUpdated?: boolean
  /** field 10, wire `status_mention_count` */
  statusMentionCount?: number
  /** field 11, wire `is_result_terminal` */
  isResultTerminal?: boolean
  /** field 12, wire `message_send_t` */
  messageSendT?: string
  /** field 13, wire `is_reshare` */
  isReshare?: boolean
  /** field 14, wire `status_contains_music` */
  statusContainsMusic?: boolean
  /** field 15, wire `editable` */
  editable?: boolean
  /** field 16, wire `external_interactables` */
  externalInteractables?: number
  /** field 17, wire `external_package_name` */
  externalPackageName?: string
  /** field 18, wire `share_type` */
  shareType?: string
  /** field 19, wire `contains_prompt` */
  containsPrompt?: boolean
  /** field 20, wire `is_prompt_response` */
  isPromptResponse?: boolean
  /** field 21, wire `message_key_hash` */
  messageKeyHash?: string
  /** field 22, wire `extra_stickers_data` */
  extraStickersData?: string
  /** field 23, wire `has_ar_filters` */
  hasArFilters?: boolean
  /** field 24, wire `has_caption` */
  hasCaption?: boolean
  /** field 25, wire `has_drawings` */
  hasDrawings?: boolean
  /** field 26, wire `has_filters` */
  hasFilters?: boolean
  /** field 27, wire `is_video_muted` */
  isVideoMuted?: boolean
  /** field 28, wire `is_video_trimmed` */
  isVideoTrimmed?: boolean
  /** field 29, wire `status_id` */
  statusId?: string
  /** field 30, wire `status_type` */
  statusType?: STATUSTYPE
  /** field 31, wire `stickers_count` */
  stickersCount?: number
  /** field 32, wire `text_status_color_changed` */
  textStatusColorChanged?: boolean
  /** field 33, wire `text_status_font_changed` */
  textStatusFontChanged?: boolean
  /** field 34, wire `text_tool_count` */
  textToolCount?: number
  /** field 35, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 36, wire `is_cropped` */
  isCropped?: boolean
  /** field 37, wire `is_rotated` */
  isRotated?: boolean
  /** field 38, wire `is_video_manually_trimmed` */
  isVideoManuallyTrimmed?: boolean
  /** field 39, wire `status_audience_size` */
  statusAudienceSize?: number
  /** field 40, wire `is_same_song_from_attribution` */
  isSameSongFromAttribution?: boolean
  /** field 41, wire `is_from_layouts` */
  isFromLayouts?: boolean
  /** field 42, wire `url_has_additional_text` */
  urlHasAdditionalText?: boolean
  /** field 43, wire `is_media_ai_imagine_generated` */
  isMediaAiImagineGenerated?: boolean
  /** field 44, wire `dual_upload_paired_media_id` */
  dualUploadPairedMediaId?: string
  /** field 45, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 46, wire `status_paired_media_quality` */
  statusPairedMediaQuality?: STATUSPAIREDMEDIAQUALITY
  /** field 47, wire `is_resharable` */
  isResharable?: boolean
  /** field 48, wire `group_mention_count` */
  groupMentionCount?: string
  /** field 49, wire `individual_mention_count` */
  individualMentionCount?: number
  /** field 51, wire `is_forwardable` */
  isForwardable?: boolean
  /** field 52, wire `is_forwarded` */
  isForwarded?: boolean
  /** field 53, wire `status_category` */
  statusCategory?: STATUSCATEGORY
  /** field 54, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 55, wire `is_draft` */
  isDraft?: boolean
  /** field 56, wire `status_audience_selected` */
  statusAudienceSelected?: number
  /** field 57, wire `channel_status_id` */
  channelStatusId?: number
  /** field 58, wire `cid` */
  cid?: string
  /** field 59, wire `is_batched` */
  isBatched?: boolean
  /** field 60, wire `status_part_code` */
  statusPartCode?: string
  /** field 61, wire `error_metadata` */
  errorMetadata?: string
  /** field 62, wire `status_post_failure_stage` */
  statusPostFailureStage?: STATUSPOSTFAILURESTAGE
}