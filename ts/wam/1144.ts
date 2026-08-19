export const WamWamClientErrors = 1144 as const

export interface WamClientErrorsEvent {
  /** field 1, wire `wam_client_error_flags` */
  wamClientErrorFlags?: boolean
  /** field 2, wire `wam_client_dropped_event_count` */
  wamClientDroppedEventCount?: number
  /** field 3, wire `wam_client_dropped_event_size` */
  wamClientDroppedEventSize?: number
  /** field 4, wire `wam_error_write_file` */
  wamErrorWriteFile?: boolean
  /** field 5, wire `wam_error_write_header` */
  wamErrorWriteHeader?: boolean
  /** field 6, wire `wam_error_write_event_buffer` */
  wamErrorWriteEventBuffer?: boolean
  /** field 7, wire `wam_error_read_file` */
  wamErrorReadFile?: boolean
  /** field 8, wire `wam_error_bad_file_size` */
  wamErrorBadFileSize?: boolean
  /** field 9, wire `wam_error_fseek_file` */
  wamErrorFseekFile?: boolean
  /** field 10, wire `wam_error_open_file` */
  wamErrorOpenFile?: boolean
  /** field 11, wire `wam_error_close_file` */
  wamErrorCloseFile?: boolean
  /** field 12, wire `wam_error_remove_file` */
  wamErrorRemoveFile?: boolean
  /** field 13, wire `wam_error_open_wam_file` */
  wamErrorOpenWamFile?: boolean
  /** field 14, wire `wam_error_create_wam_file` */
  wamErrorCreateWamFile?: boolean
  /** field 15, wire `wam_error_bad_file_header` */
  wamErrorBadFileHeader?: boolean
  /** field 16, wire `wam_error_bad_event_buffer` */
  wamErrorBadEventBuffer?: boolean
  /** field 17, wire `wam_error_bad_header_checksum` */
  wamErrorBadHeaderChecksum?: boolean
  /** field 18, wire `wam_error_bad_current_event_buffer_checksum` */
  wamErrorBadCurrentEventBufferChecksum?: boolean
  /** field 19, wire `wam_error_bad_rotated_event_buffer_checksum` */
  wamErrorBadRotatedEventBufferChecksum?: boolean
  /** field 20, wire `wam_error_persistence` */
  wamErrorPersistence?: boolean
  /** field 22, wire `wam_client_realtime_dropped_event_count` */
  wamClientRealtimeDroppedEventCount?: number
  /** field 23, wire `wam_client_realtime_dropped_event_size` */
  wamClientRealtimeDroppedEventSize?: number
  /** field 24, wire `wam_client_private_dropped_event_count` */
  wamClientPrivateDroppedEventCount?: number
  /** field 25, wire `wam_client_private_dropped_event_size` */
  wamClientPrivateDroppedEventSize?: number
  /** field 26, wire `wam_error_open_ps_upload_queue_file` */
  wamErrorOpenPsUploadQueueFile?: boolean
  /** field 27, wire `is_from_wamsys` */
  isFromWamsys?: boolean
  /** field 28, wire `wam_client_buffer_drop_error_count` */
  wamClientBufferDropErrorCount?: number
  /** field 29, wire `wam_client_buffer_fetch_error_count` */
  wamClientBufferFetchErrorCount?: number
  /** field 30, wire `wam_client_buffer_store_error_count` */
  wamClientBufferStoreErrorCount?: number
  /** field 31, wire `wam_client_private_rejected_event_count` */
  wamClientPrivateRejectedEventCount?: number
  /** field 32, wire `wam_client_realtime_rejected_event_count` */
  wamClientRealtimeRejectedEventCount?: number
  /** field 33, wire `wam_client_rejected_event_count` */
  wamClientRejectedEventCount?: number
  /** field 34, wire `wam_client_private_realtime_dropped_event_count` */
  wamClientPrivateRealtimeDroppedEventCount?: number
  /** field 35, wire `wam_client_private_realtime_dropped_event_size` */
  wamClientPrivateRealtimeDroppedEventSize?: number
  /** field 36, wire `wam_client_private_realtime_rejected_event_count` */
  wamClientPrivateRealtimeRejectedEventCount?: number
  /** field 37, wire `wam_client_metadata_read_error_count` */
  wamClientMetadataReadErrorCount?: number
  /** field 38, wire `wam_client_metadata_write_error_count` */
  wamClientMetadataWriteErrorCount?: number
  /** field 39, wire `wam_first_error_read_metadata` */
  wamFirstErrorReadMetadata?: boolean
  /** field 40, wire `wam_first_error_write_metadata` */
  wamFirstErrorWriteMetadata?: boolean
  /** field 41, wire `wam_client_dropped_event_count_no_enough_storage` */
  wamClientDroppedEventCountNoEnoughStorage?: number
  /** field 42, wire `wam_client_corrupted_buffers_count` */
  wamClientCorruptedBuffersCount?: number
  /** field 43, wire `wam_client_buffer_rotate_error_count` */
  wamClientBufferRotateErrorCount?: number
}