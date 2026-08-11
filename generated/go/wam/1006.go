const WamContactSyncEvent = 1006 // channel: regular

type ContactSyncEventEvent struct {
	ContactSyncType string `wam:"contact_sync_type"` // field 1
	ContactSyncTypeIsFull bool `wam:"contact_sync_type_is_full"` // field 2
	ContactSyncTypeIsBackground bool `wam:"contact_sync_type_is_background"` // field 3
	ContactSyncTypeCode int64 `wam:"contact_sync_type_code"` // field 4
	ContactSyncRequestIsUrgent bool `wam:"contact_sync_request_is_urgent"` // field 5
	ContactSyncRequestClearWaSyncData bool `wam:"contact_sync_request_clear_wa_sync_data"` // field 6
	ContactSyncRequestRetryCount int64 `wam:"contact_sync_request_retry_count"` // field 7
	ContactSyncRequestShouldRetry bool `wam:"contact_sync_request_should_retry"` // field 8
	ContactSyncSuccess bool `wam:"contact_sync_success"` // field 9
	ContactSyncChangedVersionRowCount int64 `wam:"contact_sync_changed_version_row_count"` // field 10
	ContactSyncRequestedCount int64 `wam:"contact_sync_requested_count"` // field 11
	ContactSyncNoop bool `wam:"contact_sync_noop"` // field 12
	ContactSyncResponseCount int64 `wam:"contact_sync_response_count"` // field 13
	ContactSyncErrorCode int64 `wam:"contact_sync_error_code"` // field 14
	ContactSyncRequestProtocol int64 `wam:"contact_sync_request_protocol"` // field 15
	ContactSyncFailureProtocol int64 `wam:"contact_sync_failure_protocol"` // field 16
	ContactSyncLatency int64 `wam:"contact_sync_latency"` // field 17
	ContactSyncStatusResponseNew int64 `wam:"contact_sync_status_response_new"` // field 18
	ContactSyncDeviceResponseNew int64 `wam:"contact_sync_device_response_new"` // field 19
	ContactSyncBusinessResponseNew int64 `wam:"contact_sync_business_response_new"` // field 20
	ContactSyncPayResponseNew int64 `wam:"contact_sync_pay_response_new"` // field 21
	ContactSyncDisappearingModeResponseNew int64 `wam:"contact_sync_disappearing_mode_response_new"` // field 22
	ContactSyncEndTimestamp string `wam:"contact_sync_end_timestamp"` // field 23
	ContactSyncSource CONTACTSYNCSOURCE `wam:"contact_sync_source"` // field 24
	ContactSyncStartTimestamp string `wam:"contact_sync_start_timestamp"` // field 25
	ContactSyncConsecutiveCount int64 `wam:"contact_sync_consecutive_count"` // field 26
	ContactSyncRequestPreparationLatency int64 `wam:"contact_sync_request_preparation_latency"` // field 27
	ContactSyncRequestOrigin int64 `wam:"contact_sync_request_origin"` // field 28
	ContactSyncTypeIsMetadata bool `wam:"contact_sync_type_is_metadata"` // field 29
	ContactSyncSidelistRequestedCount int64 `wam:"contact_sync_sidelist_requested_count"` // field 30
	ContactSyncSidelistResponseCount int64 `wam:"contact_sync_sidelist_response_count"` // field 31
	ContactSyncTypeIsSnapshot bool `wam:"contact_sync_type_is_snapshot"` // field 32
	ContactSyncIsMultiIq bool `wam:"contact_sync_is_multi_iq"` // field 33
	ContactSyncMultiIqCompletedPages int64 `wam:"contact_sync_multi_iq_completed_pages"` // field 34
	ContactSyncMultiIqFailedPageIndex int64 `wam:"contact_sync_multi_iq_failed_page_index"` // field 35
	ContactSyncMultiIqSessionDurationMs int64 `wam:"contact_sync_multi_iq_session_duration_ms"` // field 36
	ContactSyncMultiIqTotalPages int64 `wam:"contact_sync_multi_iq_total_pages"` // field 37
	ContactSyncNewLidToPnMappings int64 `wam:"contact_sync_new_lid_to_pn_mappings"` // field 38
	ContactSyncNewLidToUsernameMappings int64 `wam:"contact_sync_new_lid_to_username_mappings"` // field 39
	ContactSyncOsImportedContactsToRemove int64 `wam:"contact_sync_os_imported_contacts_to_remove"` // field 40
}