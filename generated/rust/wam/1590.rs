pub const WAM_MEDIA_DOWNLOAD2: u32 = 1590;

#[derive(Debug, Default)]
pub struct MediaDownload2Event {
    /// field 1, wire `overall_media_type`
    pub overall_media_type: Option<MEDIATYPE>,
    /// field 3, wire `overall_retry_count`
    pub overall_retry_count: Option<i64>,
    /// field 4, wire `overall_attempt_count`
    pub overall_attempt_count: Option<i64>,
    /// field 5, wire `overall_domain`
    pub overall_domain: Option<String>,
    /// field 6, wire `overall_mms_version`
    pub overall_mms_version: Option<i64>,
    /// field 7, wire `overall_media_size`
    pub overall_media_size: Option<String>,
    /// field 8, wire `overall_t`
    pub overall_t: Option<String>,
    /// field 9, wire `overall_queue_t`
    pub overall_queue_t: Option<String>,
    /// field 10, wire `overall_conn_block_fetch_t`
    pub overall_conn_block_fetch_t: Option<String>,
    /// field 11, wire `overall_download_mode`
    pub overall_download_mode: Option<MEDIADOWNLOADMODETYPE>,
    /// field 12, wire `overall_decrypt_t`
    pub overall_decrypt_t: Option<String>,
    /// field 13, wire `overall_file_validation_t`
    pub overall_file_validation_t: Option<String>,
    /// field 14, wire `download_resume_point`
    pub download_resume_point: Option<i64>,
    /// field 15, wire `download_connect_t`
    pub download_connect_t: Option<String>,
    /// field 16, wire `download_network_t`
    pub download_network_t: Option<String>,
    /// field 17, wire `download_is_reuse`
    pub download_is_reuse: Option<bool>,
    /// field 18, wire `download_http_code`
    pub download_http_code: Option<i64>,
    /// field 19, wire `download_is_streaming`
    pub download_is_streaming: Option<bool>,
    /// field 20, wire `download_bytes_transferred`
    pub download_bytes_transferred: Option<String>,
    /// field 21, wire `download_time_to_first_byte_t`
    pub download_time_to_first_byte_t: Option<String>,
    /// field 22, wire `debug_media_ip`
    pub debug_media_ip: Option<String>,
    /// field 23, wire `debug_url`
    pub debug_url: Option<String>,
    /// field 24, wire `debug_media_exception`
    pub debug_media_exception: Option<String>,
    /// field 25, wire `overall_download_result`
    pub overall_download_result: Option<MEDIADOWNLOADRESULTTYPE>,
    /// field 26, wire `overall_is_final`
    pub overall_is_final: Option<bool>,
    /// field 27, wire `overall_cum_t`
    pub overall_cum_t: Option<String>,
    /// field 28, wire `overall_is_encrypted`
    pub overall_is_encrypted: Option<bool>,
    /// field 29, wire `overall_connection_class`
    pub overall_connection_class: Option<String>,
    /// field 30, wire `network_stack`
    pub network_stack: Option<NETWORKSTACKTYPE>,
    /// field 31, wire `connection_type`
    pub connection_type: Option<CONNECTIONTYPE>,
    /// field 35, wire `overall_download_origin`
    pub overall_download_origin: Option<DOWNLOADORIGINTYPE>,
    /// field 36, wire `estimated_bandwidth`
    pub estimated_bandwidth: Option<String>,
    /// field 37, wire `download_quality`
    pub download_quality: Option<DOWNLOADQUALITYTYPE>,
    /// field 38, wire `media_id`
    pub media_id: Option<i64>,
    /// field 39, wire `overall_backend_store`
    pub overall_backend_store: Option<BACKENDSTORETYPE>,
    /// field 40, wire `used_fallback_hint`
    pub used_fallback_hint: Option<String>,
    /// field 41, wire `is_view_once`
    pub is_view_once: Option<bool>,
    /// field 42, wire `express_path_bytes_saved`
    pub express_path_bytes_saved: Option<String>,
    /// field 43, wire `express_path_time_saved_ms`
    pub express_path_time_saved_ms: Option<String>,
    /// field 44, wire `has_leveraged_express_path`
    pub has_leveraged_express_path: Option<bool>,
    /// field 45, wire `http_protocol_version_type`
    pub http_protocol_version_type: Option<HTTPPROTOCOLVERSIONTYPE>,
    /// field 46, wire `days_since_receive`
    pub days_since_receive: Option<i64>,
    /// field 47, wire `file_height`
    pub file_height: Option<i64>,
    /// field 48, wire `file_width`
    pub file_width: Option<i64>,
    /// field 49, wire `device_count`
    pub device_count: Option<i64>,
    /// field 50, wire `client_message_id`
    pub client_message_id: Option<String>,
    /// field 51, wire `sleep_mode_affected`
    pub sleep_mode_affected: Option<bool>,
    /// field 52, wire `is_sender_platform_capi`
    pub is_sender_platform_capi: Option<bool>,
    /// field 53, wire `overall_cum_v2_t`
    pub overall_cum_v2_t: Option<String>,
    /// field 54, wire `time_delayed`
    pub time_delayed: Option<String>,
    /// field 55, wire `active_thread_count`
    pub active_thread_count: Option<i64>,
    /// field 56, wire `express_path_download_state`
    pub express_path_download_state: Option<EXPRESSPATHDOWNLOADSTATE>,
    /// field 57, wire `max_thread_count`
    pub max_thread_count: Option<i64>,
    /// field 58, wire `is_processed_video`
    pub is_processed_video: Option<bool>,
    /// field 59, wire `estimated_bandwidth_v2`
    pub estimated_bandwidth_v2: Option<String>,
    /// field 60, wire `overall_cum_user_visible_t`
    pub overall_cum_user_visible_t: Option<String>,
    /// field 61, wire `overall_user_visible_t`
    pub overall_user_visible_t: Option<String>,
    /// field 62, wire `ai_fetch_media_type`
    pub ai_fetch_media_type: Option<AIFETCHMEDIATYPE>,
    /// field 63, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 64, wire `app_context`
    pub app_context: Option<String>,
    /// field 65, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 66, wire `prefetch_order`
    pub prefetch_order: Option<i64>,
    /// field 67, wire `status_id`
    pub status_id: Option<String>,
    /// field 68, wire `download_queue_size`
    pub download_queue_size: Option<i64>,
    /// field 69, wire `hash_verification_failure_type`
    pub hash_verification_failure_type: Option<HASHVERIFICATIONFAILURETYPE>,
    /// field 70, wire `streaming_used_non_streaming_fallback`
    pub streaming_used_non_streaming_fallback: Option<bool>,
}