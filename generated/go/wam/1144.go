const WamWamClientErrors = 1144 // channel: regular

type WamClientErrorsEvent struct {
	WamClientErrorFlags bool `wam:"wam_client_error_flags"` // field 1
	WamClientDroppedEventCount int64 `wam:"wam_client_dropped_event_count"` // field 2
	WamClientDroppedEventSize int64 `wam:"wam_client_dropped_event_size"` // field 3
	WamErrorWriteFile bool `wam:"wam_error_write_file"` // field 4
	WamErrorWriteHeader bool `wam:"wam_error_write_header"` // field 5
	WamErrorWriteEventBuffer bool `wam:"wam_error_write_event_buffer"` // field 6
	WamErrorReadFile bool `wam:"wam_error_read_file"` // field 7
	WamErrorBadFileSize bool `wam:"wam_error_bad_file_size"` // field 8
	WamErrorFseekFile bool `wam:"wam_error_fseek_file"` // field 9
	WamErrorOpenFile bool `wam:"wam_error_open_file"` // field 10
	WamErrorCloseFile bool `wam:"wam_error_close_file"` // field 11
	WamErrorRemoveFile bool `wam:"wam_error_remove_file"` // field 12
	WamErrorOpenWamFile bool `wam:"wam_error_open_wam_file"` // field 13
	WamErrorCreateWamFile bool `wam:"wam_error_create_wam_file"` // field 14
	WamErrorBadFileHeader bool `wam:"wam_error_bad_file_header"` // field 15
	WamErrorBadEventBuffer bool `wam:"wam_error_bad_event_buffer"` // field 16
	WamErrorBadHeaderChecksum bool `wam:"wam_error_bad_header_checksum"` // field 17
	WamErrorBadCurrentEventBufferChecksum bool `wam:"wam_error_bad_current_event_buffer_checksum"` // field 18
	WamErrorBadRotatedEventBufferChecksum bool `wam:"wam_error_bad_rotated_event_buffer_checksum"` // field 19
	WamErrorPersistence bool `wam:"wam_error_persistence"` // field 20
	WamClientRealtimeDroppedEventCount int64 `wam:"wam_client_realtime_dropped_event_count"` // field 22
	WamClientRealtimeDroppedEventSize int64 `wam:"wam_client_realtime_dropped_event_size"` // field 23
	WamClientPrivateDroppedEventCount int64 `wam:"wam_client_private_dropped_event_count"` // field 24
	WamClientPrivateDroppedEventSize int64 `wam:"wam_client_private_dropped_event_size"` // field 25
	WamErrorOpenPsUploadQueueFile bool `wam:"wam_error_open_ps_upload_queue_file"` // field 26
	IsFromWamsys bool `wam:"is_from_wamsys"` // field 27
	WamClientBufferDropErrorCount int64 `wam:"wam_client_buffer_drop_error_count"` // field 28
	WamClientBufferFetchErrorCount int64 `wam:"wam_client_buffer_fetch_error_count"` // field 29
	WamClientBufferStoreErrorCount int64 `wam:"wam_client_buffer_store_error_count"` // field 30
	WamClientPrivateRejectedEventCount int64 `wam:"wam_client_private_rejected_event_count"` // field 31
	WamClientRealtimeRejectedEventCount int64 `wam:"wam_client_realtime_rejected_event_count"` // field 32
	WamClientRejectedEventCount int64 `wam:"wam_client_rejected_event_count"` // field 33
	WamClientPrivateRealtimeDroppedEventCount int64 `wam:"wam_client_private_realtime_dropped_event_count"` // field 34
	WamClientPrivateRealtimeDroppedEventSize int64 `wam:"wam_client_private_realtime_dropped_event_size"` // field 35
	WamClientPrivateRealtimeRejectedEventCount int64 `wam:"wam_client_private_realtime_rejected_event_count"` // field 36
	WamClientMetadataReadErrorCount int64 `wam:"wam_client_metadata_read_error_count"` // field 37
	WamClientMetadataWriteErrorCount int64 `wam:"wam_client_metadata_write_error_count"` // field 38
	WamFirstErrorReadMetadata bool `wam:"wam_first_error_read_metadata"` // field 39
	WamFirstErrorWriteMetadata bool `wam:"wam_first_error_write_metadata"` // field 40
	WamClientDroppedEventCountNoEnoughStorage int64 `wam:"wam_client_dropped_event_count_no_enough_storage"` // field 41
	WamClientCorruptedBuffersCount int64 `wam:"wam_client_corrupted_buffers_count"` // field 42
	WamClientBufferRotateErrorCount int64 `wam:"wam_client_buffer_rotate_error_count"` // field 43
}