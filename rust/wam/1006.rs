pub const WAM_CONTACT_SYNC_EVENT: u32 = 1006;

#[derive(Debug, Default)]
pub struct ContactSyncEventEvent {
    /// field 1, wire `contact_sync_type`
    pub contact_sync_type: Option<String>,
    /// field 2, wire `contact_sync_type_is_full`
    pub contact_sync_type_is_full: Option<bool>,
    /// field 3, wire `contact_sync_type_is_background`
    pub contact_sync_type_is_background: Option<bool>,
    /// field 4, wire `contact_sync_type_code`
    pub contact_sync_type_code: Option<i64>,
    /// field 5, wire `contact_sync_request_is_urgent`
    pub contact_sync_request_is_urgent: Option<bool>,
    /// field 6, wire `contact_sync_request_clear_wa_sync_data`
    pub contact_sync_request_clear_wa_sync_data: Option<bool>,
    /// field 7, wire `contact_sync_request_retry_count`
    pub contact_sync_request_retry_count: Option<i64>,
    /// field 8, wire `contact_sync_request_should_retry`
    pub contact_sync_request_should_retry: Option<bool>,
    /// field 9, wire `contact_sync_success`
    pub contact_sync_success: Option<bool>,
    /// field 10, wire `contact_sync_changed_version_row_count`
    pub contact_sync_changed_version_row_count: Option<i64>,
    /// field 11, wire `contact_sync_requested_count`
    pub contact_sync_requested_count: Option<i64>,
    /// field 12, wire `contact_sync_noop`
    pub contact_sync_noop: Option<bool>,
    /// field 13, wire `contact_sync_response_count`
    pub contact_sync_response_count: Option<i64>,
    /// field 14, wire `contact_sync_error_code`
    pub contact_sync_error_code: Option<i64>,
    /// field 15, wire `contact_sync_request_protocol`
    pub contact_sync_request_protocol: Option<i64>,
    /// field 16, wire `contact_sync_failure_protocol`
    pub contact_sync_failure_protocol: Option<i64>,
    /// field 17, wire `contact_sync_latency`
    pub contact_sync_latency: Option<i64>,
    /// field 18, wire `contact_sync_status_response_new`
    pub contact_sync_status_response_new: Option<i64>,
    /// field 19, wire `contact_sync_device_response_new`
    pub contact_sync_device_response_new: Option<i64>,
    /// field 20, wire `contact_sync_business_response_new`
    pub contact_sync_business_response_new: Option<i64>,
    /// field 21, wire `contact_sync_pay_response_new`
    pub contact_sync_pay_response_new: Option<i64>,
    /// field 22, wire `contact_sync_disappearing_mode_response_new`
    pub contact_sync_disappearing_mode_response_new: Option<i64>,
    /// field 23, wire `contact_sync_end_timestamp`
    pub contact_sync_end_timestamp: Option<String>,
    /// field 24, wire `contact_sync_source`
    pub contact_sync_source: Option<CONTACTSYNCSOURCE>,
    /// field 25, wire `contact_sync_start_timestamp`
    pub contact_sync_start_timestamp: Option<String>,
    /// field 26, wire `contact_sync_consecutive_count`
    pub contact_sync_consecutive_count: Option<i64>,
    /// field 27, wire `contact_sync_request_preparation_latency`
    pub contact_sync_request_preparation_latency: Option<i64>,
    /// field 28, wire `contact_sync_request_origin`
    pub contact_sync_request_origin: Option<i64>,
    /// field 29, wire `contact_sync_type_is_metadata`
    pub contact_sync_type_is_metadata: Option<bool>,
    /// field 30, wire `contact_sync_sidelist_requested_count`
    pub contact_sync_sidelist_requested_count: Option<i64>,
    /// field 31, wire `contact_sync_sidelist_response_count`
    pub contact_sync_sidelist_response_count: Option<i64>,
    /// field 32, wire `contact_sync_type_is_snapshot`
    pub contact_sync_type_is_snapshot: Option<bool>,
    /// field 33, wire `contact_sync_is_multi_iq`
    pub contact_sync_is_multi_iq: Option<bool>,
    /// field 34, wire `contact_sync_multi_iq_completed_pages`
    pub contact_sync_multi_iq_completed_pages: Option<i64>,
    /// field 35, wire `contact_sync_multi_iq_failed_page_index`
    pub contact_sync_multi_iq_failed_page_index: Option<i64>,
    /// field 36, wire `contact_sync_multi_iq_session_duration_ms`
    pub contact_sync_multi_iq_session_duration_ms: Option<i64>,
    /// field 37, wire `contact_sync_multi_iq_total_pages`
    pub contact_sync_multi_iq_total_pages: Option<i64>,
    /// field 38, wire `contact_sync_new_lid_to_pn_mappings`
    pub contact_sync_new_lid_to_pn_mappings: Option<i64>,
    /// field 39, wire `contact_sync_new_lid_to_username_mappings`
    pub contact_sync_new_lid_to_username_mappings: Option<i64>,
    /// field 40, wire `contact_sync_os_imported_contacts_to_remove`
    pub contact_sync_os_imported_contacts_to_remove: Option<i64>,
}