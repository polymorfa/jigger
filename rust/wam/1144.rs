pub const WAM_WAM_CLIENT_ERRORS: u32 = 1144;

#[derive(Debug, Default)]
pub struct WamClientErrorsEvent {
    /// field 1, wire `wam_client_error_flags`
    pub wam_client_error_flags: Option<bool>,
    /// field 2, wire `wam_client_dropped_event_count`
    pub wam_client_dropped_event_count: Option<i64>,
    /// field 3, wire `wam_client_dropped_event_size`
    pub wam_client_dropped_event_size: Option<i64>,
    /// field 4, wire `wam_error_write_file`
    pub wam_error_write_file: Option<bool>,
    /// field 5, wire `wam_error_write_header`
    pub wam_error_write_header: Option<bool>,
    /// field 6, wire `wam_error_write_event_buffer`
    pub wam_error_write_event_buffer: Option<bool>,
    /// field 7, wire `wam_error_read_file`
    pub wam_error_read_file: Option<bool>,
    /// field 8, wire `wam_error_bad_file_size`
    pub wam_error_bad_file_size: Option<bool>,
    /// field 9, wire `wam_error_fseek_file`
    pub wam_error_fseek_file: Option<bool>,
    /// field 10, wire `wam_error_open_file`
    pub wam_error_open_file: Option<bool>,
    /// field 11, wire `wam_error_close_file`
    pub wam_error_close_file: Option<bool>,
    /// field 12, wire `wam_error_remove_file`
    pub wam_error_remove_file: Option<bool>,
    /// field 13, wire `wam_error_open_wam_file`
    pub wam_error_open_wam_file: Option<bool>,
    /// field 14, wire `wam_error_create_wam_file`
    pub wam_error_create_wam_file: Option<bool>,
    /// field 15, wire `wam_error_bad_file_header`
    pub wam_error_bad_file_header: Option<bool>,
    /// field 16, wire `wam_error_bad_event_buffer`
    pub wam_error_bad_event_buffer: Option<bool>,
    /// field 17, wire `wam_error_bad_header_checksum`
    pub wam_error_bad_header_checksum: Option<bool>,
    /// field 18, wire `wam_error_bad_current_event_buffer_checksum`
    pub wam_error_bad_current_event_buffer_checksum: Option<bool>,
    /// field 19, wire `wam_error_bad_rotated_event_buffer_checksum`
    pub wam_error_bad_rotated_event_buffer_checksum: Option<bool>,
    /// field 20, wire `wam_error_persistence`
    pub wam_error_persistence: Option<bool>,
    /// field 22, wire `wam_client_realtime_dropped_event_count`
    pub wam_client_realtime_dropped_event_count: Option<i64>,
    /// field 23, wire `wam_client_realtime_dropped_event_size`
    pub wam_client_realtime_dropped_event_size: Option<i64>,
    /// field 24, wire `wam_client_private_dropped_event_count`
    pub wam_client_private_dropped_event_count: Option<i64>,
    /// field 25, wire `wam_client_private_dropped_event_size`
    pub wam_client_private_dropped_event_size: Option<i64>,
    /// field 26, wire `wam_error_open_ps_upload_queue_file`
    pub wam_error_open_ps_upload_queue_file: Option<bool>,
    /// field 27, wire `is_from_wamsys`
    pub is_from_wamsys: Option<bool>,
    /// field 28, wire `wam_client_buffer_drop_error_count`
    pub wam_client_buffer_drop_error_count: Option<i64>,
    /// field 29, wire `wam_client_buffer_fetch_error_count`
    pub wam_client_buffer_fetch_error_count: Option<i64>,
    /// field 30, wire `wam_client_buffer_store_error_count`
    pub wam_client_buffer_store_error_count: Option<i64>,
    /// field 31, wire `wam_client_private_rejected_event_count`
    pub wam_client_private_rejected_event_count: Option<i64>,
    /// field 32, wire `wam_client_realtime_rejected_event_count`
    pub wam_client_realtime_rejected_event_count: Option<i64>,
    /// field 33, wire `wam_client_rejected_event_count`
    pub wam_client_rejected_event_count: Option<i64>,
    /// field 34, wire `wam_client_private_realtime_dropped_event_count`
    pub wam_client_private_realtime_dropped_event_count: Option<i64>,
    /// field 35, wire `wam_client_private_realtime_dropped_event_size`
    pub wam_client_private_realtime_dropped_event_size: Option<i64>,
    /// field 36, wire `wam_client_private_realtime_rejected_event_count`
    pub wam_client_private_realtime_rejected_event_count: Option<i64>,
    /// field 37, wire `wam_client_metadata_read_error_count`
    pub wam_client_metadata_read_error_count: Option<i64>,
    /// field 38, wire `wam_client_metadata_write_error_count`
    pub wam_client_metadata_write_error_count: Option<i64>,
    /// field 39, wire `wam_first_error_read_metadata`
    pub wam_first_error_read_metadata: Option<bool>,
    /// field 40, wire `wam_first_error_write_metadata`
    pub wam_first_error_write_metadata: Option<bool>,
    /// field 41, wire `wam_client_dropped_event_count_no_enough_storage`
    pub wam_client_dropped_event_count_no_enough_storage: Option<i64>,
    /// field 42, wire `wam_client_corrupted_buffers_count`
    pub wam_client_corrupted_buffers_count: Option<i64>,
    /// field 43, wire `wam_client_buffer_rotate_error_count`
    pub wam_client_buffer_rotate_error_count: Option<i64>,
}