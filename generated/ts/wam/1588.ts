export const WamMediaUpload2 = 1588 as const

export interface MediaUpload2Event {
  /** field 1, wire `overall_media_type` */
  overallMediaType?: MEDIATYPE
  /** field 3, wire `overall_retry_count` */
  overallRetryCount?: number
  /** field 4, wire `overall_attempt_count` */
  overallAttemptCount?: number
  /** field 5, wire `overall_domain` */
  overallDomain?: string
  /** field 6, wire `overall_mms_version` */
  overallMmsVersion?: number
  /** field 7, wire `overall_media_size` */
  overallMediaSize?: string
  /** field 8, wire `overall_t` */
  overallT?: string
  /** field 9, wire `overall_queue_t` */
  overallQueueT?: string
  /** field 10, wire `overall_conn_block_fetch_t` */
  overallConnBlockFetchT?: string
  /** field 11, wire `overall_last_upload_retry_phase` */
  overallLastUploadRetryPhase?: OVERALLLASTUPLOADRETRYPHASETYPE
  /** field 12, wire `overall_optimistic_flag` */
  overallOptimisticFlag?: OPTIMISTICFLAGTYPE
  /** field 13, wire `overall_is_manual` */
  overallIsManual?: boolean
  /** field 14, wire `overall_user_visible_t` */
  overallUserVisibleT?: string
  /** field 15, wire `overall_transcode_t` */
  overallTranscodeT?: string
  /** field 16, wire `overall_is_forward` */
  overallIsForward?: boolean
  /** field 17, wire `resume_connect_t` */
  resumeConnectT?: string
  /** field 18, wire `resume_network_t` */
  resumeNetworkT?: string
  /** field 19, wire `resume_is_reuse` */
  resumeIsReuse?: boolean
  /** field 20, wire `resume_http_code` */
  resumeHttpCode?: number
  /** field 21, wire `upload_resume_point` */
  uploadResumePoint?: number
  /** field 22, wire `upload_connect_t` */
  uploadConnectT?: string
  /** field 23, wire `upload_network_t` */
  uploadNetworkT?: string
  /** field 24, wire `upload_is_reuse` */
  uploadIsReuse?: boolean
  /** field 25, wire `upload_http_code` */
  uploadHttpCode?: number
  /** field 26, wire `upload_is_streaming` */
  uploadIsStreaming?: boolean
  /** field 27, wire `upload_bytes_transferred` */
  uploadBytesTransferred?: string
  /** field 28, wire `finalize_connect_t` */
  finalizeConnectT?: string
  /** field 29, wire `finalize_network_t` */
  finalizeNetworkT?: string
  /** field 30, wire `finalize_is_reuse` */
  finalizeIsReuse?: boolean
  /** field 31, wire `finalize_http_code` */
  finalizeHttpCode?: number
  /** field 32, wire `debug_media_ip` */
  debugMediaIp?: string
  /** field 33, wire `debug_url` */
  debugUrl?: string
  /** field 34, wire `debug_media_exception` */
  debugMediaException?: string
  /** field 35, wire `overall_upload_result` */
  overallUploadResult?: MEDIAUPLOADRESULTTYPE
  /** field 36, wire `overall_is_final` */
  overallIsFinal?: boolean
  /** field 37, wire `overall_cum_t` */
  overallCumT?: string
  /** field 38, wire `overall_cum_user_visible_t` */
  overallCumUserVisibleT?: string
  /** field 39, wire `overall_upload_mode` */
  overallUploadMode?: MEDIAUPLOADMODETYPE
  /** field 40, wire `overall_media_key_reuse` */
  overallMediaKeyReuse?: OVERALLMEDIAKEYREUSETYPE
  /** field 41, wire `overall_connection_class` */
  overallConnectionClass?: string
  /** field 42, wire `network_stack` */
  networkStack?: NETWORKSTACKTYPE
  /** field 43, wire `connection_type` */
  connectionType?: CONNECTIONTYPE
  /** field 44, wire `overall_upload_origin` */
  overallUploadOrigin?: UPLOADORIGINTYPE
  /** field 45, wire `estimated_bandwidth` */
  estimatedBandwidth?: string
  /** field 46, wire `media_id` */
  mediaId?: number
  /** field 47, wire `used_fallback_hint` */
  usedFallbackHint?: string
  /** field 48, wire `upload_source` */
  uploadSource?: UPLOADSOURCETYPE
  /** field 49, wire `is_view_once` */
  isViewOnce?: boolean
  /** field 50, wire `overall_encrypt_t` */
  overallEncryptT?: string
  /** field 51, wire `http_protocol_version_type` */
  httpProtocolVersionType?: HTTPPROTOCOLVERSIONTYPE
  /** field 52, wire `photo_quality_setting` */
  photoQualitySetting?: MEDIAQUALITY
  /** field 53, wire `original_size` */
  originalSize?: number
  /** field 54, wire `video_quality_setting` */
  videoQualitySetting?: MEDIAQUALITY
  /** field 55, wire `file_height` */
  fileHeight?: number
  /** field 56, wire `file_width` */
  fileWidth?: number
  /** field 57, wire `batch_size` */
  batchSize?: number
  /** field 58, wire `message_key_hash` */
  messageKeyHash?: string
  /** field 60, wire `media_collection_id` */
  mediaCollectionId?: number
  /** field 61, wire `estimated_bandwidth_v2` */
  estimatedBandwidthV2?: string
  /** field 62, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 63, wire `app_context` */
  appContext?: string
  /** field 64, wire `app_context_bitfield` */
  appContextBitfield?: number
}