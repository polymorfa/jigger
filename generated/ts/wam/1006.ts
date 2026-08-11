export const WamContactSyncEvent = 1006 as const

export interface ContactSyncEventEvent {
  /** field 1, wire `contact_sync_type` */
  contactSyncType?: string
  /** field 2, wire `contact_sync_type_is_full` */
  contactSyncTypeIsFull?: boolean
  /** field 3, wire `contact_sync_type_is_background` */
  contactSyncTypeIsBackground?: boolean
  /** field 4, wire `contact_sync_type_code` */
  contactSyncTypeCode?: number
  /** field 5, wire `contact_sync_request_is_urgent` */
  contactSyncRequestIsUrgent?: boolean
  /** field 6, wire `contact_sync_request_clear_wa_sync_data` */
  contactSyncRequestClearWaSyncData?: boolean
  /** field 7, wire `contact_sync_request_retry_count` */
  contactSyncRequestRetryCount?: number
  /** field 8, wire `contact_sync_request_should_retry` */
  contactSyncRequestShouldRetry?: boolean
  /** field 9, wire `contact_sync_success` */
  contactSyncSuccess?: boolean
  /** field 10, wire `contact_sync_changed_version_row_count` */
  contactSyncChangedVersionRowCount?: number
  /** field 11, wire `contact_sync_requested_count` */
  contactSyncRequestedCount?: number
  /** field 12, wire `contact_sync_noop` */
  contactSyncNoop?: boolean
  /** field 13, wire `contact_sync_response_count` */
  contactSyncResponseCount?: number
  /** field 14, wire `contact_sync_error_code` */
  contactSyncErrorCode?: number
  /** field 15, wire `contact_sync_request_protocol` */
  contactSyncRequestProtocol?: number
  /** field 16, wire `contact_sync_failure_protocol` */
  contactSyncFailureProtocol?: number
  /** field 17, wire `contact_sync_latency` */
  contactSyncLatency?: number
  /** field 18, wire `contact_sync_status_response_new` */
  contactSyncStatusResponseNew?: number
  /** field 19, wire `contact_sync_device_response_new` */
  contactSyncDeviceResponseNew?: number
  /** field 20, wire `contact_sync_business_response_new` */
  contactSyncBusinessResponseNew?: number
  /** field 21, wire `contact_sync_pay_response_new` */
  contactSyncPayResponseNew?: number
  /** field 22, wire `contact_sync_disappearing_mode_response_new` */
  contactSyncDisappearingModeResponseNew?: number
  /** field 23, wire `contact_sync_end_timestamp` */
  contactSyncEndTimestamp?: string
  /** field 24, wire `contact_sync_source` */
  contactSyncSource?: CONTACTSYNCSOURCE
  /** field 25, wire `contact_sync_start_timestamp` */
  contactSyncStartTimestamp?: string
  /** field 26, wire `contact_sync_consecutive_count` */
  contactSyncConsecutiveCount?: number
  /** field 27, wire `contact_sync_request_preparation_latency` */
  contactSyncRequestPreparationLatency?: number
  /** field 28, wire `contact_sync_request_origin` */
  contactSyncRequestOrigin?: number
  /** field 29, wire `contact_sync_type_is_metadata` */
  contactSyncTypeIsMetadata?: boolean
  /** field 30, wire `contact_sync_sidelist_requested_count` */
  contactSyncSidelistRequestedCount?: number
  /** field 31, wire `contact_sync_sidelist_response_count` */
  contactSyncSidelistResponseCount?: number
  /** field 32, wire `contact_sync_type_is_snapshot` */
  contactSyncTypeIsSnapshot?: boolean
  /** field 33, wire `contact_sync_is_multi_iq` */
  contactSyncIsMultiIq?: boolean
  /** field 34, wire `contact_sync_multi_iq_completed_pages` */
  contactSyncMultiIqCompletedPages?: number
  /** field 35, wire `contact_sync_multi_iq_failed_page_index` */
  contactSyncMultiIqFailedPageIndex?: number
  /** field 36, wire `contact_sync_multi_iq_session_duration_ms` */
  contactSyncMultiIqSessionDurationMs?: number
  /** field 37, wire `contact_sync_multi_iq_total_pages` */
  contactSyncMultiIqTotalPages?: number
  /** field 38, wire `contact_sync_new_lid_to_pn_mappings` */
  contactSyncNewLidToPnMappings?: number
  /** field 39, wire `contact_sync_new_lid_to_username_mappings` */
  contactSyncNewLidToUsernameMappings?: number
  /** field 40, wire `contact_sync_os_imported_contacts_to_remove` */
  contactSyncOsImportedContactsToRemove?: number
}