export const WamMediaDownload2 = 1590 as const

export interface MediaDownload2Event {
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
  /** field 11, wire `overall_download_mode` */
  overallDownloadMode?: MEDIADOWNLOADMODETYPE
  /** field 12, wire `overall_decrypt_t` */
  overallDecryptT?: string
  /** field 13, wire `overall_file_validation_t` */
  overallFileValidationT?: string
  /** field 14, wire `download_resume_point` */
  downloadResumePoint?: number
  /** field 15, wire `download_connect_t` */
  downloadConnectT?: string
  /** field 16, wire `download_network_t` */
  downloadNetworkT?: string
  /** field 17, wire `download_is_reuse` */
  downloadIsReuse?: boolean
  /** field 18, wire `download_http_code` */
  downloadHttpCode?: number
  /** field 19, wire `download_is_streaming` */
  downloadIsStreaming?: boolean
  /** field 20, wire `download_bytes_transferred` */
  downloadBytesTransferred?: string
  /** field 21, wire `download_time_to_first_byte_t` */
  downloadTimeToFirstByteT?: string
  /** field 22, wire `debug_media_ip` */
  debugMediaIp?: string
  /** field 23, wire `debug_url` */
  debugUrl?: string
  /** field 24, wire `debug_media_exception` */
  debugMediaException?: string
  /** field 25, wire `overall_download_result` */
  overallDownloadResult?: MEDIADOWNLOADRESULTTYPE
  /** field 26, wire `overall_is_final` */
  overallIsFinal?: boolean
  /** field 27, wire `overall_cum_t` */
  overallCumT?: string
  /** field 28, wire `overall_is_encrypted` */
  overallIsEncrypted?: boolean
  /** field 29, wire `overall_connection_class` */
  overallConnectionClass?: string
  /** field 30, wire `network_stack` */
  networkStack?: NETWORKSTACKTYPE
  /** field 31, wire `connection_type` */
  connectionType?: CONNECTIONTYPE
  /** field 35, wire `overall_download_origin` */
  overallDownloadOrigin?: DOWNLOADORIGINTYPE
  /** field 36, wire `estimated_bandwidth` */
  estimatedBandwidth?: string
  /** field 37, wire `download_quality` */
  downloadQuality?: DOWNLOADQUALITYTYPE
  /** field 38, wire `media_id` */
  mediaId?: number
  /** field 39, wire `overall_backend_store` */
  overallBackendStore?: BACKENDSTORETYPE
  /** field 40, wire `used_fallback_hint` */
  usedFallbackHint?: string
  /** field 41, wire `is_view_once` */
  isViewOnce?: boolean
  /** field 42, wire `express_path_bytes_saved` */
  expressPathBytesSaved?: string
  /** field 43, wire `express_path_time_saved_ms` */
  expressPathTimeSavedMs?: string
  /** field 44, wire `has_leveraged_express_path` */
  hasLeveragedExpressPath?: boolean
  /** field 45, wire `http_protocol_version_type` */
  httpProtocolVersionType?: HTTPPROTOCOLVERSIONTYPE
  /** field 46, wire `days_since_receive` */
  daysSinceReceive?: number
  /** field 47, wire `file_height` */
  fileHeight?: number
  /** field 48, wire `file_width` */
  fileWidth?: number
  /** field 49, wire `device_count` */
  deviceCount?: number
  /** field 50, wire `client_message_id` */
  clientMessageId?: string
  /** field 51, wire `sleep_mode_affected` */
  sleepModeAffected?: boolean
  /** field 52, wire `is_sender_platform_capi` */
  isSenderPlatformCapi?: boolean
  /** field 53, wire `overall_cum_v2_t` */
  overallCumV2T?: string
  /** field 54, wire `time_delayed` */
  timeDelayed?: string
  /** field 55, wire `active_thread_count` */
  activeThreadCount?: number
  /** field 56, wire `express_path_download_state` */
  expressPathDownloadState?: EXPRESSPATHDOWNLOADSTATE
  /** field 57, wire `max_thread_count` */
  maxThreadCount?: number
  /** field 58, wire `is_processed_video` */
  isProcessedVideo?: boolean
  /** field 59, wire `estimated_bandwidth_v2` */
  estimatedBandwidthV2?: string
  /** field 60, wire `overall_cum_user_visible_t` */
  overallCumUserVisibleT?: string
  /** field 61, wire `overall_user_visible_t` */
  overallUserVisibleT?: string
  /** field 62, wire `ai_fetch_media_type` */
  aiFetchMediaType?: AIFETCHMEDIATYPE
  /** field 63, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 64, wire `app_context` */
  appContext?: string
  /** field 65, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 66, wire `prefetch_order` */
  prefetchOrder?: number
  /** field 67, wire `status_id` */
  statusId?: string
  /** field 68, wire `download_queue_size` */
  downloadQueueSize?: number
  /** field 69, wire `hash_verification_failure_type` */
  hashVerificationFailureType?: HASHVERIFICATIONFAILURETYPE
  /** field 70, wire `streaming_used_non_streaming_fallback` */
  streamingUsedNonStreamingFallback?: boolean
}